import re
import glob

# All data from images
countries_data = {
    "uk": {
        "name": "United Kingdom",
        "emoji": "🇬🇧",
        "title": "Study in the UK | Mentors' Noakhali",
        "universities": [
            "City, University of London", "London Metropolitan University", "London South Bank University", "Middlesex University", 
            "University of East London (UEL)", "University of Greenwich", "University of Law", "University of Westminster", 
            "Ulster University", "Kingston University", "Brunel University", "University of Roehampton", "University of Hull - London", 
            "Birmingham City University", "University of the West of England", "University of Chester", "Coventry University", 
            "Keele University", "Lancaster University", "Leeds Beckett University", "De Montfort University", "Liverpool John Moores University", 
            "Manchester Metropolitan University (MMU)", "Teesside University", "Newcastle University", "Northumbria University", 
            "Oxford Brookes University", "Royal Holloway University", "The University of York", "Cardiff Metropolitan University", 
            "University of South Wales", "Queen's University Belfast", "Glasgow Caledonian University", "University of Bath"
        ]
    },
    "usa": {
        "name": "United States",
        "emoji": "🇺🇸",
        "title": "Study in the USA | Mentors' Noakhali",
        "universities": [
            "Long Island University", "Queens College (GSSP)", "Mercy University", "Berkeley College", "Montclair State University", 
            "William Paterson University", "University of Bridgeport", "Illinois State University", "Texas State University", 
            "University of North Texas", "Colorado State University", "Youngstown State University", "Ashland University", 
            "Emporia State University", "Wichita State University", "Pittsburg State University", "Oregon State University", 
            "Florida Atlantic University", "The University of Oklahoma", "Saint Louis University", "Webster University", 
            "Murray State University", "Midway University", "University of Arizona", "University of South Alabama", 
            "University of Alabama at Birmingham", "Thomas Jefferson University", "University of Northern Iowa", 
            "San Francisco State University", "California State University"
        ]
    },
    "canada": {
        "name": "Canada",
        "emoji": "🇨🇦",
        "title": "Study in Canada | Mentors' Noakhali",
        "universities": [
            "University of Manitoba", "International College of Manitoba (ICM)", "Toronto Metropolitan University", "University of Windsor", 
            "Algoma University", "Laurentian University", "Lakehead University", "Trent University", "University of Guelph", 
            "Seneca College", "Centennial College", "Ontario Tech University", "University of Niagara Falls", "International Business University", 
            "Carleton University", "University of Saskatchewan", "University of Regina", "Fraser International College (FIC)", "NYIT - Vancouver",
            "University of Victoria", "University Canada West", "Fairleigh Dickinson University", "University of Fraser Valley", 
            "Concordia University of Edmonton", "University of Alberta", "Dalhousie University", "Cape Breton University", 
            "University of New Brunswick - UNB", "Memorial University of Newfoundland"
        ]
    },
    "australia": {
        "name": "Australia",
        "emoji": "🇦🇺",
        "title": "Study in Australia | Mentors' Noakhali",
        "universities": [
            "Macquarie University", "Deakin University", "La Trobe University", "Victoria University", "Curtin University", 
            "University of Tasmania", "University of New England", "Australian Catholic University", "University of Western Australia", 
            "Southern Cross University", "James Cook University", "Charles Darwin University", "NAVITAS", 
            "Charles Sturt University Sydney", "Western Sydney University Sydney City Campus", "La Trobe University Sydney Campus", 
            "Edith Cowan College", "Eynesbury College", "Griffith College", "SAIBT", "SIBT", "University of Canberra College", 
            "La Trobe College", "ECA", "Victoria University Sydney", "University of Canberra Sydney", "Swinburne University of Technology Sydney", 
            "Victoria University Brisbane", "University of Sunshine Coast", "UP Education", "CDU International College", 
            "UTAS International Pathway College", "Swinburne University of Technology College", "International College of Hotel Management (ICHM)"
        ]
    },
    "newzealand": {
        "name": "New Zealand",
        "emoji": "🇳🇿",
        "title": "Study in New Zealand | Mentors' Noakhali",
        "universities": [
            "Auckland University of Technology", "University of Auckland", "University of Canterbury", "University of Otago",
            "Lincoln University", "University of Waikato", "Massey University", "Victoria University of Wellington"
        ]
    },
    "malaysia": {
        "name": "Malaysia",
        "emoji": "🇲🇾",
        "title": "Study in Malaysia | Mentors' Noakhali",
        "universities": [
            "Taylor's University", "University of Wollongong Malaysia", "Curtin University Malaysia", "Newcastle University Medicine Malaysia",
            "International Medical University (IMU)", "Sunway University", "UCSI University", "University of Cyberjaya",
            "Asia Pacific University of Technology & Innovation (APU)", "Universiti Teknologi Malaysia (UTM)", "INTI International University",
            "Heriot-Watt University Malaysia", "Swinburne University of Technology Malaysia", "Brickfields Asia College"
        ]
    }
}

base_file = "/home/neloy/Documents/GitHub/Mentors/study-abroad.html"
with open(base_file, "r") as f:
    html = f.read()

for key, data in countries_data.items():
    uni_list_html = "".join([f'<div style="margin-bottom:12px; padding-left:35px; position:relative; background:#f9f9f9; padding-top:12px; padding-bottom:12px; border-radius:6px; font-size:0.95rem; color:var(--text-main);"><span style="position:absolute; left:12px; color:var(--accent); font-weight:bold;">&check;</span> {uni}</div>' for uni in data["universities"]])
    
    new_content = f"""
    <div class="page-hero">
        <div class="container">
            <h1>Study in <em style="color:var(--accent); font-style:normal;">{data['name']}</em> {data['emoji']}</h1>
            <p>Explore elite education, lucrative scholarships, and a vibrant international community.</p>
        </div>
    </div>

    <section class="section-padding" style="background:var(--bg-light); border-top:1px solid var(--border-color);">
        <div class="container" style="max-width:1100px; margin:auto;">
            <div style="background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid var(--border-color); margin-bottom:40px;">
                <h2 style="font-size: 1.8rem; margin-bottom: 20px; color:var(--text-main);">Top Universities We Represent</h2>
                <p style="color:var(--text-muted); margin-bottom:30px; font-size:1.05rem;">We hold direct partnerships and application pathways with the leading institutions in {data['name']}. Our counselors based in Noakhali will guide you through the requirements for each.</p>
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;">
                    {uni_list_html}
                </div>
                <p style="margin-top:25px; font-size:0.85rem; color:var(--text-muted);">* We also have aggregator partnerships to recruit for more colleges and universities.</p>
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

# Update nav in all files to include New Zealand and Malaysia
new_nav_item = """<li class="has-dropdown">
                    <a href="study-abroad.html">Study Abroad
                        <span class="dropdown-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                    </a>
                    <div class="dropdown-menu" style="min-width: 220px;">
                        <a href="study-uk.html" class="dropdown-item"><span style="margin-right:8px">🇬🇧</span> United Kingdom</a>
                        <a href="study-usa.html" class="dropdown-item"><span style="margin-right:8px">🇺🇸</span> United States</a>
                        <a href="study-canada.html" class="dropdown-item"><span style="margin-right:8px">🇨🇦</span> Canada</a>
                        <a href="study-australia.html" class="dropdown-item"><span style="margin-right:8px">🇦🇺</span> Australia</a>
                        <a href="study-newzealand.html" class="dropdown-item"><span style="margin-right:8px">🇳🇿</span> New Zealand</a>
                        <a href="study-malaysia.html" class="dropdown-item"><span style="margin-right:8px">🇲🇾</span> Malaysia</a>
                        <a href="study-abroad.html" class="dropdown-viewall">Overview</a>
                    </div>
                </li>"""

old_nav_pattern = r'<li class="has-dropdown">\s*<a href="study-abroad\.html">Study Abroad[\s\S]*?</li>'
for file in glob.glob("/home/neloy/Documents/GitHub/Mentors/*.html"):
    with open(file, "r") as f:
        content = f.read()
    content = re.sub(old_nav_pattern, new_nav_item, content)
    with open(file, "w") as f:
        f.write(content)
