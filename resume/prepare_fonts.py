"""Create static, distinctly named font instances for PDF embedding."""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
output = ROOT / 'tmp/pdfs'
output.mkdir(parents=True, exist_ok=True)
for weight, style in [(400, 'Regular'), (600, 'Semibold')]:
    font = TTFont(ROOT / 'assets/fonts/InstrumentSans-variable.ttf')
    instantiateVariableFont(font, {'wght': weight, 'wdth': 100}, inplace=True)
    # Separate PDF resource identities prevent regular/bold faces from collapsing.
    names = {1:'Instrument Sans Static', 2:style, 4:f'Instrument Sans Static {style}',
             6:f'InstrumentSansStatic-{style}', 16:'Instrument Sans Static', 17:style}
    for name_id, value in names.items():
        font['name'].setName(value, name_id, 3, 1, 0x409)
        font['name'].setName(value, name_id, 1, 0, 0)
    font.save(output / f'InstrumentSans-{style}.ttf')
