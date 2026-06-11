/* ============================================================
   Study Abroad Logic
   ============================================================ */

/**
 * Render the detail page for a specific country.
 */
function renderStudyDetail() {
  const root = document.getElementById("study-detail-root");
  if (!root) return;

  const countryId =
    location.hash.replace("#", "") || location.search.replace("?country=", "");
  const country = STUDY_COUNTRIES.find((c) => c.id === countryId);

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

  const uniCards = country.universities
    .map(
      (uni) => `
    <div class="uni-card">
      <span class="uni-check">✓</span>
      <a href="${uni.link}" class="university-link" target="_blank" rel="noopener">${uni.name}</a>
      ${uni.location ? `<span class="uni-location">${uni.location}</span>` : ""}
    </div>
  `,
    )
    .join("");

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
  `;
}

/**
 * Render the country overview grid and all sections on study-abroad.html
 */
function renderStudyOverview() {
  const heroContainer = document.querySelector(".page-hero");
  const destinationsRoot = document.getElementById("study-overview-root");
  const contentRoot = document.getElementById("study-content-root");

  if (typeof STUDY_PAGE_CONTENT === "undefined") return;

  // 1. Render Hero
  if (heroContainer && STUDY_PAGE_CONTENT.hero) {
    if (typeof renderHero === "function") {
      renderHero(heroContainer, STUDY_PAGE_CONTENT.hero);
    }
  }

  // 2. Render Destination Section Header
  if (destinationsRoot && STUDY_PAGE_CONTENT.destinationsSection) {
    const data = STUDY_PAGE_CONTENT.destinationsSection;
    const cards = STUDY_COUNTRIES.map(
      (c) => `
      <div class="study-card" style="--hover-glow: ${c.glowColor}; --hover-border: ${c.borderColor}; background: var(--surface); border-radius: 12px; padding: 30px; box-shadow: var(--shadow-sm); text-align: center; border: 1px solid var(--border-color); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, border-color 0.3s ease;">
        <div style="font-size: 3rem; margin-bottom: 15px;">${c.flag}</div>
        <h3 style="margin-bottom: 10px;">${c.name}</h3>
        <p style="font-size: 0.9rem; color:var(--text-muted); min-height: 2.7rem;">${c.tagline}</p>
        <a href="study-detail.html#${c.id}" style="color:var(--accent); font-size:0.9rem; margin-top:15px; display:inline-block; text-decoration:none; font-weight: 500;">View Details →</a>
      </div>
    `,
    ).join("");

    destinationsRoot.innerHTML = `
      <div style="text-align: center; margin-bottom: 50px">
        <h2 style="font-size: 2.2rem; margin-bottom: 15px; color: var(--text-main);">${data.title}</h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 700px; margin: 0 auto;">${data.description}</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 60px;">
        ${cards}
      </div>
    `;
  }

  // 3. Render Additional Sections (Why, Benefits, Services, Notes, Ready)
  if (contentRoot) {
    let contentHtml = "";

    // Why & Benefits
    if (STUDY_PAGE_CONTENT.whySection && STUDY_PAGE_CONTENT.benefits) {
      contentHtml += `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
          <div style="background: var(--surface); border-radius: 12px; padding: 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
            <h2 style="font-size: 1.8rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 2px solid var(--border-color); padding-bottom: 15px;">${STUDY_PAGE_CONTENT.whySection.title}</h2>
            <ul style="list-style: none; padding: 0; margin-bottom: 25px">
              ${STUDY_PAGE_CONTENT.whySection.points
                .map(
                  (p) => `
                <li style="margin-bottom: 15px; padding-left: 30px; position: relative; color: var(--text-main);">
                  <span style="position: absolute; left: 0; color: var(--accent)">✓</span>
                  <strong>${p.title}</strong> ${p.desc}
                </li>
              `,
                )
                .join("")}
            </ul>
            <h4 style="color: var(--text-muted); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">Certified & Trained By:</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 10px">
              ${STUDY_PAGE_CONTENT.whySection.certifications.map((c) => `<span style="background: var(--surface-2); padding: 8px 15px; border-radius: 6px; font-size: 0.9rem; color: var(--text-main);">${c}</span>`).join("")}
            </div>
          </div>
          <div style="background: var(--surface); border-radius: 12px; padding: 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <h2 style="font-size: 1.8rem; margin-bottom: 30px; color: var(--accent); font-weight: 700;">${STUDY_PAGE_CONTENT.benefits.title}</h2>
            <div style="width: 100%; display: flex; flex-direction: column; gap: 15px;">
              ${STUDY_PAGE_CONTENT.benefits.items.map((i) => `<div style="background: var(--bg-light); border: 1px solid var(--border-color); padding: 20px; border-radius: 8px; font-size: 1.2rem; font-weight: bold; color: var(--text-main);">${i}</div>`).join("")}
            </div>
            <p style="margin-top: 20px; font-size: 0.8rem; color: var(--text-muted);">${STUDY_PAGE_CONTENT.benefits.footnote}</p>
          </div>
        </div>
      `;
    }

    // Services
    if (STUDY_PAGE_CONTENT.services) {
      contentHtml += `
        <div style="background: var(--surface); border-radius: 12px; padding: 50px 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 60px;">
          <h2 style="font-size: 2.2rem; margin-bottom: 40px; color: var(--text-main); text-align: center;">${STUDY_PAGE_CONTENT.services.title}</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            ${STUDY_PAGE_CONTENT.services.items
              .map(
                (s, idx) => `
              <div style="display: flex; align-items: center; background: var(--surface-2); padding: 15px 25px; border-radius: 50px; border: 1px solid var(--border-color);">
                <div style="background: var(--accent); color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; margin-right: 15px; flex-shrink: 0;">${idx + 1}</div>
                <h4 style="font-size: 1.05rem; margin: 0; color: var(--text-main)">${s}</h4>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Note Points
    if (STUDY_PAGE_CONTENT.notePoints) {
      contentHtml += `
        <div style="background: rgba(255, 26, 26, 0.05); border-radius: 12px; padding: 40px; border: 1px solid rgba(255, 26, 26, 0.1); margin-bottom: 60px;">
          <h3 style="font-size: 1.6rem; margin-bottom: 25px; color: var(--accent); display: flex; align-items: center; gap: 10px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            ${STUDY_PAGE_CONTENT.notePoints.title}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            ${STUDY_PAGE_CONTENT.notePoints.groups
              .map(
                (group) => `
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 15px;">
                ${group
                  .map(
                    (note) => `
                  <li style="padding-left: 25px; position: relative; color: var(--text-main);">
                    <span style="position: absolute; left: 0; color: var(--accent)">▶</span>
                    ${note}
                  </li>
                `,
                  )
                  .join("")}
              </ul>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Ready Section
    if (STUDY_PAGE_CONTENT.readySection) {
      contentHtml += `
        <div style="text-align: center; padding: 40px 20px; border-top: 1px solid var(--border-color);">
          <h2 style="font-size: 1.6rem; margin-bottom: 15px; color: var(--text-main);">${STUDY_PAGE_CONTENT.readySection.title}</h2>
          <p style="margin-bottom: 25px; color: var(--text-muted)">${STUDY_PAGE_CONTENT.readySection.description}</p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            ${STUDY_PAGE_CONTENT.readySection.ctas
              .map(
                (cta) => `
              <a href="${cta.link}" class="btn ${cta.class}" style="padding: 14px 30px; font-size: 1.1rem; display: inline-flex; align-items: center; gap: 10px;">
                ${cta.icon === "phone" ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>' : ""}
                ${cta.icon === "message" ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>' : ""}
                ${cta.text}
              </a>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
    }

    contentRoot.innerHTML = contentHtml;
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("study-detail-root")) {
    renderStudyDetail();
    window.addEventListener("hashchange", renderStudyDetail);
  }
  if (document.getElementById("study-overview-root")) {
    renderStudyOverview();
  }
});
