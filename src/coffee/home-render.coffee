###
  Home Page Renderer
###

document.addEventListener 'DOMContentLoaded', ->
  heroContainer = document.getElementById 'home'
  seoContainer = document.getElementById 'seo-root'
  resourcesContainer = document.getElementById 'resources-root'
  cerberusContainer = document.getElementById 'cerberus-root'

  return if typeof window.HOME_DATA is 'undefined'

  # 1. Render Hero
  if heroContainer and window.HOME_DATA.hero
    window.renderHero(heroContainer, window.HOME_DATA.hero) if typeof window.renderHero is 'function'

  # 2. Render SEO Section
  renderHomeSEO(seoContainer, window.HOME_DATA.seo) if seoContainer and window.HOME_DATA.seo

  # 3. Render Free Resources
  if resourcesContainer and window.HOME_DATA.freeResources
    window.renderFreeResources(resourcesContainer, window.HOME_DATA.freeResources) if typeof window.renderFreeResources is 'function'

  # 4. Render CERBERUS
  renderCerberus(cerberusContainer, window.HOME_DATA.cerberus) if cerberusContainer and window.HOME_DATA.cerberus

  # 5. Fetch and Render CSV Table
  scheduleContainer = document.getElementById 'csv-table-container'
  if scheduleContainer
    fetchAndRenderCsvTable "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7KPcPrcFxZc3TgMAVjH3Zv3FCDdafdD9H8i6IznF0UKUNQ7mak4dyQb1f9jj2jruf1LGryXv3vsyJ/pub?gid=1658759406&single=true&output=csv"

renderHomeSEO = (container, data) ->
  ctasHtml = data.ctas.map((cta) ->
    targetAttr = if cta.target then 'target="_blank" rel="noopener"' else ""
    iconHtml = if cta.icon
      """
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
      """
    else ""
    """
    <a href="#{cta.link}" class="btn #{cta.class}" #{targetAttr} style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; font-size: 1.05rem;">
      #{cta.text}
      #{iconHtml}
    </a>
    """
  ).join('')

  container.innerHTML = """
    <div class="container" style="max-width: 800px; margin: auto; text-align: center">
      <h2 style="font-size: 2rem; margin-bottom: 15px; color: var(--text-main)">
        #{data.title}
      </h2>
      <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 30px;">
        #{data.description}
      </p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        #{ctasHtml}
      </div>
    </div>
  """

renderCerberus = (container, data) ->
  pillsHtml = data.pills.map((pill) -> "<span class=\"cerberus-pill\">#{pill}</span>").join('')
  
  container.innerHTML = """
    <div class="cerberus-orb"></div>
    <div class="container" style="max-width: 860px; margin: auto; text-align: center; position: relative; z-index: 1;">
      <div class="cerberus-badge">
        <span class="cerberus-dot"></span>
        #{data.badge}
      </div>
      <h2 class="cerberus-heading">#{data.title}</h2>
      <p class="cerberus-subheading">#{data.subheading}</p>
      <p class="cerberus-desc">#{data.description}</p>
      <div class="cerberus-pills">
        #{pillsHtml}
      </div>
      <a href="#{data.cta.link}" target="_blank" rel="noopener" id="cerberus-cta" class="cerberus-cta">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        #{data.cta.text}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
      <p class="cerberus-footnote">#{data.footnote}</p>
    </div>
  """

parseCsv = (text) ->
  rows = []
  row = []
  field = ""
  inQuotes = false
  for i in [0...text.length]
    char = text[i]
    nextChar = text[i + 1]
    if inQuotes
      if char is '"' and nextChar is '"'
        field += '"'
        i += 1
      else if char is '"'
        inQuotes = false
      else
        field += char
    else
      if char is '"'
        inQuotes = true
      else if char is ','
        row.push field
        field = ""
      else if char is '\r'
        continue
      else if char is '\n'
        row.push field
        rows.push row
        row = []
        field = ""
      else
        field += char
  
  if field.length > 0 or row.length > 0
    row.push field
    rows.push row
  
  rows.filter (r) -> not (r.length is 1 and r[0] is "")

fetchAndRenderCsvTable = (url) ->
  container = document.getElementById 'csv-table-container'
  return unless container
  
  container.innerHTML = '<p style="padding: 30px; margin: 0; color: var(--text-main)">Loading table, please wait...</p>'
  
  try
    response = await fetch url, { mode: 'cors' }
    throw new Error "Network response was not ok" unless response.ok
    csvText = await response.text()
    rows = parseCsv csvText
    throw new Error "CSV empty" if rows.length is 0
    
    table = document.createElement 'table'
    table.className = 'schedule-table'
    
    # Header
    thead = document.createElement 'thead'
    htr = document.createElement 'tr'
    for t in rows[0]
      th = document.createElement 'th'
      th.textContent = t
      htr.appendChild th
    thead.appendChild htr
    
    # Body
    tbody = document.createElement 'tbody'
    for row in rows[1..]
      tr = document.createElement 'tr'
      for cell, idx in row
        td = document.createElement 'td'
        col = (rows[0][idx] or "").trim().toLowerCase()
        if col is "signup form"
          val = cell.trim()
          btn = document.createElement 'a'
          btn.className = "btn btn-primary"
          btn.textContent = "Sign up"
          btn.target = "_blank"
          btn.rel = "noopener"
          btn.href = if /^https?:\/\//i.test(val) then val else "contact.html"
          td.appendChild btn
        else
          td.textContent = cell
        tr.appendChild td
      tbody.appendChild tr
      
    table.appendChild thead
    table.appendChild tbody
    container.innerHTML = ""
    container.appendChild table
  catch e
    container.innerHTML = '<div style="padding:30px; color:var(--accent);">Unable to load data.</div>'
