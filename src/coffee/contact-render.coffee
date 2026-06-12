###
  Contact Page Renderer
###

CONTACT_ICONS =
  phone: """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>"""
  email: """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>"""
  map: """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>"""
  clock: """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>"""

PHONE_ICON_SMALL = """<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>"""
EMAIL_ICON_SMALL = """<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>"""

document.addEventListener 'DOMContentLoaded', ->
  root = document.getElementById 'contact-root'
  return unless root and window.CONTACT_BRANCHES

  root.innerHTML = window.CONTACT_BRANCHES.map((branch) -> renderBranch(branch)).join('')

renderBranch = (branch) ->
  headerHTML = if branch.header
    """<div class="section-header"><h2>#{branch.header.title}</h2><p>#{branch.header.subtitle}</p></div>"""
  else ""

  cardsHTML = branch.cards.map((card) -> renderCard(card)).join('')

  mapHTML = if branch.map
    """<div class="map-container"><iframe src="#{branch.map.src}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="#{branch.map.title}"></iframe></div>"""
  else ""

  """
    <section class="section-padding #{branch.sectionClass}">
      <div class="container">
        #{headerHTML}
        <div class="contact-grid">
          <div class="contact-cards">
            #{cardsHTML}
          </div>
          #{mapHTML}
        </div>
      </div>
    </section>
  """

renderCard = (card) ->
  iconHTML = CONTACT_ICONS[card.icon] or ""
  bodyHTML = ""

  switch card.type
    when "phone"
      items = card.items.map((p) ->
        """<a href="tel:#{p.number}" class="phone-btn">#{PHONE_ICON_SMALL}#{p.display} <span class="phone-role">#{p.role}</span></a>"""
      ).join('')
      bodyHTML = """<div class="phone-btn-group">#{items}</div>"""
    
    when "email"
      items = card.items.map((e) ->
        """<a href="mailto:#{e.address}" class="email-btn">#{EMAIL_ICON_SMALL}#{e.address} <span class="phone-role">#{e.role}</span></a>"""
      ).join('')
      bodyHTML = """<div class="email-link-group">#{items}</div>"""
    
    when "address", "hotline", "email-simple"
      bodyHTML = """<p class="contact-desc">#{card.description}</p>"""
      if card.link
        target = if card.link.href.startsWith("http") then ' target="_blank" rel="noopener"' else ""
        bodyHTML += """<a href="#{card.link.href}"#{target} class="styled-link">#{card.link.text}</a>"""
    
    when "hours"
      bodyHTML = """<p class="contact-desc" style="font-size:1.05rem;line-height:1.6">#{card.schedule}</p>"""
      bodyHTML += """<p class="contact-desc">#{card.extra}</p>""" if card.extra

  """
    <div class="contact-card">
      <div class="card-header">
        <div class="card-icon">#{iconHTML}</div>
        <h3>#{card.title}</h3>
      </div>
      #{bodyHTML}
    </div>
  """
