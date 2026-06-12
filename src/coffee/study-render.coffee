###
  Study Abroad Logic
###

renderStudyDetail = ->
  root = document.getElementById 'study-detail-root'
  return unless root

  countryId = location.hash.replace("#", "") or location.search.replace("?country=", "")
  country = window.STUDY_COUNTRIES.find (c) -> c.id is countryId

  unless country
    root.innerHTML = """
      <div style="text-align:center; padding:100px 20px;">
        <h2 style="color:var(--text-main)">Country not found</h2>
        <p style="color:var(--text-muted); margin:12px 0 24px">Please browse our supported countries below.</p>
        <a href="study-abroad.html" class="btn btn-primary">Back to Overview</a>
      </div>
    """
    return

  document.title = "Study in #{country.name} | Mentors' Noakhali"

  uniCards = country.universities.map((uni) ->
    locationHtml = if uni.location then "<span class=\"uni-location\">#{uni.location}</span>" else ""
    """
    <div class="uni-card">
      <span class="uni-check">✓</span>
      <a href="#{uni.link}" class="university-link" target="_blank" rel="noopener">#{uni.name}</a>
      #{locationHtml}
    </div>
    """
  ).join('')

  root.innerHTML = """
    <div class="page-hero">
      <div class="container">
        <h1>Study in <em style="color: var(--accent); font-style: normal">#{country.name}</em> #{country.flag}</h1>
        <p>#{country.tagline}</p>
      </div>
    </div>

    <section class="section-padding" style="background: var(--bg-light); border-top: 1px solid var(--border-color);">
      <div class="container" style="max-width: 1100px; margin: auto">
        <div class="study-card-main">
          <h2 class="section-title">Top Universities We Represent</h2>
          <p class="section-desc">We hold direct partnerships and application pathways with leading institutions in #{country.name}.</p>
          <div class="uni-grid">
            #{uniCards}
          </div>
        </div>

        <div class="why-mentors-section">
          <h3>Why Choose Mentors' Noakhali?</h3>
          <div class="why-grid">
            <div class="why-item">
              <span class="why-icon">🛡️</span>
              <h4>Direct Partnerships</h4>
              <p>We work directly with universities, ensuring transparent communication and faster processing.</p>
            </div>
            <div class="why-item">
              <span class="why-icon">📄</span>
              <h4>Visa Assistance</h4>
              <p>Our experts guide you through every step of the visa application process with high success rates.</p>
            </div>
            <div class="why-item">
              <span class="why-icon">🎓</span>
              <h4>Expert Counseling</h4>
              <p>Personalized sessions to help you choose the right course and destination for your career.</p>
            </div>
          </div>
        </div>

        <div class="contact-cta-card">
          <h3>Ready to Start Your Journey?</h3>
          <p>Visit our office or call us today for a free assessment of your profile.</p>
          <div class="cta-phones">
            <a href="tel:+8801321207486" class="btn btn-primary">Call Now: 01321-207486</a>
            <a href="contact.html" class="btn btn-outline">Visit Office</a>
          </div>
        </div>

        <div style="margin-top: 48px; border-top: 1px solid var(--border-color); padding-top: 32px; text-align: center;">
          <a href="study-abroad.html" class="cd-back" style="margin-bottom: 0;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to All Destinations
          </a>
        </div>
      </div>
    </section>

    <style>
      .study-card-main { background: var(--surface); border-radius: 12px; padding: 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 40px; }
      .section-title { font-size: 1.8rem; margin-bottom: 10px; color: var(--text-main); }
      .section-desc { color: var(--text-muted); margin-bottom: 30px; font-size: 1.05rem; }
      .uni-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 12px; }
      .uni-card { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 12px 15px 12px 35px; position: relative; background: var(--surface-2); border-radius: 6px; font-size: 0.95rem; color: var(--text-main); }
      .uni-check { position: absolute; left: 12px; color: var(--accent); font-weight: bold; }
      .uni-location { color: var(--text-muted); font-size: 0.85rem; text-align: right; }
      .why-mentors-section { margin-top: 60px; text-align: center; }
      .why-mentors-section h3 { font-size: 1.8rem; margin-bottom: 40px; }
      .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
      .why-item { padding: 30px; background: var(--surface); border-radius: 12px; border: 1px solid var(--border-color); text-align: center; }
      .why-icon { font-size: 2.5rem; display: block; margin-bottom: 20px; }
      .why-item h4 { margin-bottom: 15px; }
      .why-item p { font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; }
      .contact-cta-card { margin-top: 60px; background: linear-gradient(135deg, var(--surface), var(--bg-light)); padding: 40px; border-radius: 12px; border: 2px dashed var(--border-color); text-align: center; }
      .contact-cta-card h3 { margin-bottom: 10px; }
      .contact-cta-card p { margin-bottom: 25px; color: var(--text-muted); }
      .cta-phones { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
    </style>
  """

renderStudyOverview = ->
  heroContainer = document.querySelector ".page-hero"
  destinationsRoot = document.getElementById "study-overview-root"
  contentRoot = document.getElementById "study-content-root"

  return if typeof window.STUDY_PAGE_CONTENT is 'undefined'

  # 1. Render Hero
  if heroContainer and window.STUDY_PAGE_CONTENT.hero
    window.renderHero(heroContainer, window.STUDY_PAGE_CONTENT.hero) if typeof window.renderHero is 'function'

  # 2. Render Destination Section
  if destinationsRoot and window.STUDY_PAGE_CONTENT.destinationsSection
    data = window.STUDY_PAGE_CONTENT.destinationsSection
    cards = window.STUDY_COUNTRIES.map((c) ->
      """
      <div class="study-card" style="--hover-glow: #{c.glowColor}; --hover-border: #{c.borderColor}; background: var(--surface); border-radius: 12px; padding: 30px; box-shadow: var(--shadow-sm); text-align: center; border: 1px solid var(--border-color); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, border-color 0.3s ease;">
        <div style="font-size: 3rem; margin-bottom: 15px;">#{c.flag}</div>
        <h3 style="margin-bottom: 10px;">#{c.name}</h3>
        <p style="font-size: 0.9rem; color:var(--text-muted); min-height: 2.7rem;">#{c.tagline}</p>
        <a href="study-detail.html##{c.id}" style="color:var(--accent); font-size:0.9rem; margin-top:15px; display:inline-block; text-decoration:none; font-weight: 500;">View Details →</a>
      </div>
      """
    ).join('')

    destinationsRoot.innerHTML = """
      <div style="text-align: center; margin-bottom: 50px">
        <h2 style="font-size: 2.2rem; margin-bottom: 15px; color: var(--text-main);">#{data.title}</h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; margin: 0 auto;">#{data.description}</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 60px;">
        #{cards}
      </div>
    """

  # 3. Render Additional Sections
  if contentRoot
    contentHtml = ""
    
    # Why & Benefits
    if window.STUDY_PAGE_CONTENT.whySection and window.STUDY_PAGE_CONTENT.benefits
      pointsHtml = window.STUDY_PAGE_CONTENT.whySection.points.map((p) ->
        """
        <li style="margin-bottom: 15px; padding-left: 30px; position: relative; color: var(--text-main);">
          <span style="position: absolute; left: 0; color: var(--accent)">✓</span>
          <strong>#{p.title}</strong> #{p.desc}
        </li>
        """
      ).join('')
      
      certsHtml = window.STUDY_PAGE_CONTENT.whySection.certifications.map((c) ->
        """<span style="background: var(--surface-2); padding: 8px 15px; border-radius: 6px; font-size: 0.9rem; color: var(--text-main);">#{c}</span>"""
      ).join('')
      
      benefitsHtml = window.STUDY_PAGE_CONTENT.benefits.items.map((i) ->
        """<div style="background: var(--bg-light); border: 1px solid var(--border-color); padding: 20px; border-radius: 8px; font-size: 1.2rem; font-weight: bold; color: var(--text-main);">#{i}</div>"""
      ).join('')
      
      contentHtml += """
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
          <div style="background: var(--surface); border-radius: 12px; padding: 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
            <h2 style="font-size: 1.8rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 2px solid var(--border-color); padding-bottom: 15px;">#{window.STUDY_PAGE_CONTENT.whySection.title}</h2>
            <ul style="list-style: none; padding: 0; margin-bottom: 25px">#{pointsHtml}</ul>
            <h4 style="color: var(--text-muted); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">Certified & Trained By:</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 10px">#{certsHtml}</div>
          </div>
          <div style="background: var(--surface); border-radius: 12px; padding: 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <h2 style="font-size: 1.8rem; margin-bottom: 30px; color: var(--accent); font-weight: 700;">#{window.STUDY_PAGE_CONTENT.benefits.title}</h2>
            <div style="width: 100%; display: flex; flex-direction: column; gap: 15px;">#{benefitsHtml}</div>
            <p style="margin-top: 20px; font-size: 0.8rem; color: var(--text-muted);">#{window.STUDY_PAGE_CONTENT.benefits.footnote}</p>
          </div>
        </div>
      """

    # Services
    if window.STUDY_PAGE_CONTENT.services
      servicesHtml = window.STUDY_PAGE_CONTENT.services.items.map((s, idx) ->
        """
        <div style="display: flex; align-items: center; background: var(--surface-2); padding: 15px 25px; border-radius: 50px; border: 1px solid var(--border-color);">
          <div style="background: var(--accent); color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; margin-right: 15px; flex-shrink: 0;">#{idx + 1}</div>
          <h4 style="font-size: 1.05rem; margin: 0; color: var(--text-main)">#{s}</h4>
        </div>
        """
      ).join('')
      
      contentHtml += """
        <div style="background: var(--surface); border-radius: 12px; padding: 50px 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 60px;">
          <h2 style="font-size: 2.2rem; margin-bottom: 40px; color: var(--text-main); text-align: center;">#{window.STUDY_PAGE_CONTENT.services.title}</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            #{servicesHtml}
          </div>
        </div>
      """

    contentRoot.innerHTML = contentHtml

document.addEventListener 'DOMContentLoaded', ->
  if document.getElementById 'study-detail-root'
    renderStudyDetail()
    window.addEventListener 'hashchange', renderStudyDetail
  
  if document.getElementById 'study-overview-root'
    renderStudyOverview()
