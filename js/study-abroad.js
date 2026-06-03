/* ============================================================
   Study Abroad Logic
   ============================================================ */

/**
 * Render the detail page for a specific country.
 */
function renderStudyDetail() {
    const root = document.getElementById('study-detail-root');
    if (!root) return;

    const countryId = location.hash.replace('#', '') || location.search.replace('?country=', '');
    const country = STUDY_COUNTRIES.find(c => c.id === countryId);

    if (!country) {
        root.innerHTML = `
      <div style="text-align:center; padding:100px 20px;">
        <h2 style="color:var(--text-main)">Country not found</h2>
        <p style="color:var(--text-muted); margin:12px 0 24px">Please browse our supported countries below.</p>
        <a href="study-abroad.html" class="btn btn-primary">Back to Overview</a>
      </div>`;
        return;
    }

    document.title = `Study in ${country.name} | Mentors' Noakhali`;

    const uniCards = country.universities.map(uni => `
    <div class="uni-card">
      <span class="uni-check">✓</span>
      <a href="${uni.link}" class="university-link" target="_blank" rel="noopener">${uni.name}</a>
      ${uni.location ? `<span class="uni-location">${uni.location}</span>` : ''}
    </div>
  `).join('');

    root.innerHTML = `
    <div class="page-hero">
      <div class="container">
        <h1>Study in <em style="color: var(--accent); font-style: normal">${country.name}</em> ${country.flag}</h1>
        <p>${country.tagline}</p>
      </div>
    </div>

    <section class="section-padding" style="background: var(--bg-light); border-top: 1px solid var(--border-color);">
      <div class="container" style="max-width: 1100px; margin: auto">
        <div class="study-card-main">
          <h2 class="section-title">Top Universities We Represent</h2>
          <p class="section-desc">We hold direct partnerships and application pathways with leading institutions in ${country.name}.</p>
          <div class="uni-grid">
            ${uniCards}
          </div>
        </div>

        <!-- Common Sections -->
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
  `;
}

/**
 * Render the country overview grid on study-abroad.html
 */
function renderStudyOverview() {
    const root = document.getElementById('study-overview-root');
    if (!root) return;

    const cards = STUDY_COUNTRIES.map(c => `
    <div class="study-card" style="--hover-glow: ${c.glowColor}; --hover-border: ${c.borderColor}; background: var(--surface); border-radius: 12px; padding: 30px; box-shadow: var(--shadow-sm); text-align: center; border: 1px solid var(--border-color); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, border-color 0.3s ease;">
      <div style="font-size: 3rem; margin-bottom: 15px;">${c.flag}</div>
      <h3 style="margin-bottom: 10px;">${c.name}</h3>
      <p style="font-size: 0.9rem; color:var(--text-muted); min-height: 2.7rem;">${c.tagline}</p>
      <a href="study-detail.html#${c.id}" style="color:var(--accent); font-size:0.9rem; margin-top:15px; display:inline-block; text-decoration:none; font-weight: 500;">View Details →</a>
    </div>
  `).join('');

    root.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 60px;">
      ${cards}
    </div>
  `;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('study-detail-root')) {
        renderStudyDetail();
        window.addEventListener('hashchange', renderStudyDetail);
    }
    if (document.getElementById('study-overview-root')) {
        renderStudyOverview();
    }
});
