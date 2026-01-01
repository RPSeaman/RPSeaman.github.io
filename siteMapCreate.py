import os
from datetime import datetime

# Configuration
BASE_URL = "https://rpseaman.com/"
ROOT_DIR = "./"  # The directory containing your .html files
OUTPUT_FILE = "public/sitemap.xml"
EXTENSIONS = (".html", ".htm")

def generate_sitemap():
    pages = []
    
    # Walk through the directory to find html files
    for root, _, files in os.walk(ROOT_DIR):
        for file in files:
            if file.endswith(EXTENSIONS):
                # Construct the path
                path = os.path.join(root, file).replace(ROOT_DIR, "").replace("\\", "/")
                
                # Format URL (e.g., index.html becomes just the base URL)
                if path == "index.html":
                    url = BASE_URL
                else:
                    url = f"{BASE_URL}{path}"
                
                # Get last modification time
                mod_time = os.path.getmtime(os.path.join(root, file))
                lastmod = datetime.fromtimestamp(mod_time).strftime('%Y-%m-%d')
                
                pages.append((url, lastmod))

    # Build the XML string
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for url, lastmod in pages:
        xml_content += f"  <url>\n    <loc>{url}</loc>\n    <lastmod>{lastmod}</lastmod>\n    <priority>0.8</priority>\n  </url>\n"
        
    xml_content += "</urlset>"

    with open(OUTPUT_FILE, "w") as f:
        f.write(xml_content)
    
    print(f"Success! {OUTPUT_FILE} generated with {len(pages)} URLs.")

if __name__ == "__main__":
    generate_sitemap()