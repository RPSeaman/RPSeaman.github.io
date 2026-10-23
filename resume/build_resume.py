"""Build a single-column resume PDF from the dated, editable content file.

Requires reportlab and two static Instrument Sans instances (400 and 600).
Generate these from assets/fonts/InstrumentSans-variable.ttf with fontTools.
Output is intentionally separate from the website copy until visually reviewed.
"""
from pathlib import Path
import json
import sys
from xml.sax.saxutils import escape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
from reportlab.lib.pagesizes import letter

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / (sys.argv[1] if len(sys.argv) > 1 else 'resume/resume-2026-10-23.json')
DATA = json.loads(SOURCE.read_text())
LAYOUT = DATA.get('layout', {})
OUT = ROOT / f'output/pdf/RyanSeamanResume-{DATA.get("version", DATA["date"])}.pdf'
for name in ['Regular', 'Semibold']:
    pdfmetrics.registerFont(TTFont(f'Instrument-{name}', str(ROOT / f'tmp/pdfs/InstrumentSans-{name}.ttf')))
pdfmetrics.registerFontFamily('Instrument-Regular', normal='Instrument-Regular', bold='Instrument-Semibold')
INK = colors.HexColor('#242922')
MUTED = colors.HexColor('#51574e')
CLAY = colors.HexColor('#A44F38')
LINE = colors.HexColor('#C9CCC1')
WIDTH = 514
styles = {
    'name': ParagraphStyle('name',fontName='Instrument-Semibold',fontSize=24,leading=28,textColor=INK),
    'contact': ParagraphStyle('contact',fontName='Instrument-Regular',fontSize=9.3,leading=12,textColor=INK),
    'body': ParagraphStyle('body',fontName='Instrument-Regular',fontSize=10.5,leading=LAYOUT.get('body_leading', 13.3),textColor=INK),
    'bullet': ParagraphStyle('bullet',fontName='Instrument-Regular',fontSize=10.5,leading=LAYOUT.get('body_leading', 13.3),textColor=INK,leftIndent=10,firstLineIndent=0,bulletIndent=0,bulletFontName='Instrument-Regular',bulletFontSize=10.5,spaceAfter=LAYOUT.get('bullet_space_after', 3)),
    'section': ParagraphStyle('section',fontName='Instrument-Semibold',fontSize=10,leading=12,textColor=CLAY,spaceBefore=LAYOUT.get('section_space_before', 10),spaceAfter=4),
    'role': ParagraphStyle('role',fontName='Instrument-Semibold',fontSize=10.5,leading=LAYOUT.get('body_leading', 13.3),textColor=INK),
    'date': ParagraphStyle('date',fontName='Instrument-Regular',fontSize=9.5,leading=13.3,textColor=MUTED,alignment=TA_RIGHT),
    'organization': ParagraphStyle('organization',fontName='Instrument-Regular',fontSize=10,leading=12.6,textColor=MUTED),
    'publication': ParagraphStyle('publication',fontName='Instrument-Regular',fontSize=9.4,leading=12,textColor=INK,spaceAfter=4),
}

def paragraph(text, style='body'):
    return Paragraph(text, styles[style])

def row(left, right, style='role'):
    table = Table([[paragraph(left, style), paragraph(right, 'date')]], colWidths=[WIDTH-118,118])
    table.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    return table

story = [paragraph(escape(DATA['name']), 'name'), Spacer(1,5)]
contact = f'{escape(DATA["location"])} &nbsp;|&nbsp; <link href="mailto:{DATA["email"]}">{DATA["email"]}</link> &nbsp;|&nbsp; {DATA["phone"]} &nbsp;|&nbsp; <link href="https://{DATA["website"]}">{DATA["website"]}</link>'
story += [paragraph(contact, 'contact'), Spacer(1,10), HRFlowable(width='100%',thickness=1,color=CLAY)]

def section(title):
    story.append(paragraph(title, 'section'))

section('SUMMARY')
story.append(paragraph(escape(DATA['summary'])))
section('EXPERIENCE')
for i, job in enumerate(DATA['experience']):
    if i: story.append(Spacer(1,LAYOUT.get('role_space', 6)))
    # Organization appears in the reading flow; dates use only a right-aligned tabular line.
    first_bullet = paragraph(escape(job['bullets'][0]), 'bullet')
    first_bullet.bulletText = '\u2022'
    story.append(KeepTogether([row(escape(job['role']),escape(job['dates'])), paragraph(escape(job['organization'])+' | '+escape(job['location']),'organization'), Spacer(1,4), first_bullet]))
    for bullet in job['bullets'][1:]:
        p=paragraph(escape(bullet),'bullet'); p.bulletText='\u2022'; story.append(p)
section('EDUCATION')
for i, school in enumerate(DATA['education']):
    if i: story.append(Spacer(1,5))
    story.extend([row(escape(school['school']),escape(school['dates'])),paragraph(escape(school['degree'])+' | '+escape(school['detail']),'organization')])
if DATA.get('collaboration'):
    section(escape(DATA.get('collaboration_heading', 'TEACHING & COORDINATION')))
    for i, activity in enumerate(DATA['collaboration']):
        if i: story.append(Spacer(1,4))
        story.append(row(escape(activity['organization']), escape(activity['dates'])))
        if activity.get('detail'):
            story.append(paragraph(escape(activity['detail']), 'organization'))
        for bullet in activity['bullets']:
            p = paragraph(escape(bullet), 'bullet')
            p.bulletText = '\u2022'
            story.append(p)
section('TECHNICAL SKILLS' if DATA.get('collaboration') else 'SKILLS')
for skill in DATA['skills']:
    label = f'<b>{escape(skill["label"])}:</b> ' if skill['label'] else ''
    story.append(paragraph(label + escape(skill['text'])))
section('SELECTED PUBLICATION' if len(DATA['publications']) == 1 else 'SELECTED PUBLICATIONS')
for paper in DATA['publications']:
    authors = escape(paper['authors'])
    authors = authors.replace('Seaman RP', '<b>Seaman RP</b>')
    story.append(paragraph(f'{authors} ({paper["year"]}). <link href="{paper["url"]}">{escape(paper["title"])}</link> {escape(paper["journal"])}.', 'publication'))

OUT.parent.mkdir(parents=True,exist_ok=True)
doc = SimpleDocTemplate(str(OUT), pagesize=letter, leftMargin=43,rightMargin=43,topMargin=LAYOUT.get('top_margin', 34),bottomMargin=30,
                        title='Ryan P. Seaman - Resume',author='Ryan P. Seaman',subject=f'Resume updated {DATA["date"]}')
doc.build(story)
print(OUT)
