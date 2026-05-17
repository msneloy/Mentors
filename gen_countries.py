import re
import glob

# 1. Update navigation in all HTML files
nav_item = """<li class="has-dropdown">
                    <a href="study-abroad.html">Study Abroad
                        <span class="dropdown-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                    </a>
                    <div class="dropdown-menu" style="min-width: 220px;">
                        <a href="study-uk.html" class="dropdown-item"><span style="margin-right:8px">🇬🇧</span> United Kingdom</a>
                        <a href="study-usa.html" class="dropdown-item"><span style="margin-right:8px">🇺🇸</span> United States</a>
                        <a href="study-canada.html" class="dropdown-item"><span style="margin-right:8px">🇨🇦</span> Canada</a>
                        <a href="study-australia.html" class="dropdown-item"><span style="margin-right:8px">🇦🇺</span> Australia</a>
                        <a href="study-abroad.html" class="dropdown-viewall">Overview</a>
                    </div>
                </li>"""

for file in glob.glob("/home/neloy/Documents/GitHub/Mentors/*.html"):
    with open(file, "r") as f:
        content = f.read()
    
    # Using '<li><a href="study-abroad.html">Study Abroad</a></li>' might have spaces/tabs, let's use regex
    content = re.sub(r'<li>\s*<a href="study-abroad.html">Study Abroad</a>\s*</li>', nav_item, content)
    
    # Also if the above dropdown is already partially there, skip (but it's not)
    
    with open(file, "w") as f:
        f.write(content)

# 2. Generate child country files
base_file = "/home/neloy/Documents/GitHub/Mentors/study-abroad.html"
with open(base_file, "r") as f:
    html = f.read()

# Wait, `nav_item` was injected into study-abroad.html in the previous loop, so `html` now has the updated dropdown! That's perfect.

countries = {
    "uk": {
        "name": "United Kingdom",
        "emoji": "🇬🇧",
        "title": "Study in the UK | Mentors' Noakhali",
        "universities": [
            "University of Oxford",
            "University of Cambridge",
            "Imperial College London",
            "University of Edinburgh",
            "King's College London",
            "University of Manchester",
            "Ulster University",
            "Coventry University",
            "University of East London"
        ]
    },
    "usa": {
        "name": "United States",
        "emoji": "🇺🇸",
        "title": "Study in the USA | Mentors' Noakhali",
        "universities": [
            "Massachusetts Institute of Technology (MIT)",
            "Stanford University",
            "Harvard University",
            "California Institute of Technology (Caltech)",
            "University of Chicago",
            "New York University (NYU)",
            "Arizona State University",
            "University of Texas at Arlington",
            "Florida International University"
        ]
    },
    "canada": {
        "name": "Canada",
        "emoji": "🇨🇦",
        "title": "Study in Canada | Mentors' Noakhali",
        "universities": [
            "University of Toronto",
            "University of British Columbia",
            "McGill University",
            "McMaster University",
            "University of Waterloo",
            "Seneca College",
            "Centennial College",
            "Humber College",
            "George Brown College"
        ]
    },
    "australia": {
        "name": "Australia",
        "emoji": "🇦🇺",
        "title": "Study in Australia | Mentors' Noakhali",
        "universities": [
            "University of Melbourne",
            "University of Sydney",
            "University of New South Wales (UNSW)",
            "Australian National University",
            "Monash University",
            "University of Queensland",
            "Deakin University",
            "Macquarie University",
            "RMIT University"
        ]
    }
}

for key, data in countries.items():
    uni_list_html = "".join([f'<div style="margin-bottom:12px; padding-left:35px; position:relative; background:#f9f9f9; padding-top:12px; padding-bottom:12px; border-radius:6px;"><span style="position:absolute; left:12px; color:var(--accent); font-weight:bold;">&check;</span> {uni}</div>' for uni in data["universities"]])
    
    new_content = f"""
    <div class="page-hero">
        <div class="container">
            <h1>Study in <em style="color:var(--accent); font-style:normal;">{data['name']}</em> {data['emoji']}</h1>
            <p>Explore elite education, lucrative scholarships, and a vibrant international community.</p>
        </div>
    </div>

    <section class="section-padding" style="background:var(--bg-light); border-top:1px solid var(--border-color);">
        <div class="container" style="max-width:900px; margin:auto;">
            <div style="background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid var(--border-color); margin-bottom:40px;">
                <h2 style="font-size: 1.8rem; margin-bottom: 20px; color:var(--text-main);">Top Universities We Represent</h2>
                <p style="color:var(--text-muted); margin-bottom:25px; font-size:1.05rem;">We hold direct partnerships and application pathways with the leading institutions in the {data['name']}. Our counselors based in Noakhali will guide you through the requirements for each.</p>
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
                    {uni_list_html}
                </div>
            </div>
            
            <div style="text-align:center;">
                <h2 style="font-size:1.6rem; margin-bottom:15px; color:var(--text-main);">Want to apply to {data['name']}?</h2>
                <p style="margin-bottom:25px; color:var(--text-muted);">Start your visa and admission process today directly from Maijdee Court.</p>
                <a href="contact.html" class="btn btn-primary" style="padding: 14px 30px; font-size: 1.1rem;">Free Profile Assessment</a>
            </div>
        </div>
    </section>"""
    
    start_marker = '<div class="page-hero">'
    end_marker = '</section>'
    
    start_idx = html.find(start_marker)
    end_idx = html.find(end_marker, start_idx) + len(end_marker)
    
    page_html = html[:start_idx] + new_content + html[end_idx:]
    
    # Update title
    page_html = re.sub(r'<title>.*?</title>', f'<title>{data["title"]}</title>', page_html)
    
    with open(f"/home/neloy/Documents/GitHub/Mentors/study-{key}.html", "w") as out:
        out.write(page_html)

