/* ============================================================
   Home Page Renderer
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.getElementById("home");
  const seoContainer = document.getElementById("seo-root");
  const resourcesContainer = document.getElementById("resources-root");
  const cerberusContainer = document.getElementById("cerberus-root");

  if (typeof HOME_DATA === "undefined") return;

  // 1. Render Hero
  if (heroContainer && HOME_DATA.hero) {
    if (typeof renderHero === "function") {
      renderHero(heroContainer, HOME_DATA.hero);
    }
  }

  // 2. Render SEO Section
  if (seoContainer && HOME_DATA.seo) {
    renderHomeSEO(seoContainer, HOME_DATA.seo);
  }

  // 3. Render Free Resources
  if (resourcesContainer && HOME_DATA.freeResources) {
    if (typeof renderFreeResources === "function") {
      renderFreeResources(resourcesContainer, HOME_DATA.freeResources);
    }
  }

  // 4. Render CERBERUS
  if (cerberusContainer && HOME_DATA.cerberus) {
    renderCerberus(cerberusContainer, HOME_DATA.cerberus);
  }

  // 5. Fetch and Render CSV Table (Moved from inline)
  const scheduleContainer = document.getElementById("csv-table-container");
  if (scheduleContainer) {
    fetchAndRenderCsvTable(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7KPcPrcFxZc3TgMAVjH3Zv3FCDdafdD9H8i6IznF0UKUNQ7mak4dyQb1f9jj2jruf1LGryXv3vsyJ/pub?gid=1658759406&single=true&output=csv",
    );
  }
});

function renderHomeSEO(container, data) {
  container.innerHTML = `
    <div class="container" style="max-width: 800px; margin: auto; text-align: center">
      <h2 style="font-size: 2rem; margin-bottom: 15px; color: var(--text-main)">
        ${data.title}
      </h2>
      <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 30px;">
        ${data.description}
      </p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        ${data.ctas
          .map(
            (cta) => `
          <a href="${cta.link}" class="btn ${cta.class}" ${
            cta.target ? 'target="_blank" rel="noopener"' : ""
          } style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; font-size: 1.05rem;">
            ${cta.text}
            ${
              cta.icon
                ? `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>`
                : ""
            }
          </a>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCerberus(container, data) {
  container.innerHTML = `
    <div class="cerberus-orb"></div>
    <div class="container" style="max-width: 860px; margin: auto; text-align: center; position: relative; z-index: 1;">
      <div class="cerberus-badge">
        <span class="cerberus-dot"></span>
        ${data.badge}
      </div>
      <h2 class="cerberus-heading">${data.title}</h2>
      <p class="cerberus-subheading">${data.subheading}</p>
      <p class="cerberus-desc">${data.description}</p>
      <div class="cerberus-pills">
        ${data.pills.map((pill) => `<span class="cerberus-pill">${pill}</span>`).join("")}
      </div>
      <a href="${
        data.cta.link
      }" target="_blank" rel="noopener" id="cerberus-cta" class="cerberus-cta">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        ${data.cta.text}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
      <p class="cerberus-footnote">${data.footnote}</p>
    </div>
  `;
}

/** CSV Parser & Renderer (Moved from inline) **/
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(field);
        field = "";
      } else if (char === "\r") {
        continue;
      } else if (char === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else {
        field += char;
      }
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

async function fetchAndRenderCsvTable(url) {
  const container = document.getElementById("csv-table-container");
  if (!container) return;
  
  container.innerHTML = '<p style="padding: 30px; margin: 0; color: var(--text-main)">Loading table, please wait...</p>';

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) throw new Error("Network response was not ok");
    const csvText = await response.text();
    const rows = parseCsv(csvText);
    if (rows.length === 0) throw new Error("CSV empty");

    const table = document.createElement("table");
    table.className = "schedule-table";
    
    // Header
    const thead = document.createElement("thead");
    const htr = document.createElement("tr");
    rows[0].forEach((t) => {
      const th = document.createElement("th");
      th.textContent = t;
      htr.appendChild(th);
    });
    thead.appendChild(htr);

    // Body
    const tbody = document.createElement("tbody");
    rows.slice(1).forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell, idx) => {
        const td = document.createElement("td");
        const col = (rows[0][idx] || "").trim().toLowerCase();
        if (col === "signup form") {
          const val = cell.trim();
          const btn = document.createElement("a");
          btn.className = "btn btn-primary";
          btn.textContent = "Sign up";
          btn.target = "_blank";
          btn.rel = "noopener";
          if (/^https?:\/\//i.test(val)) btn.href = val;
          else btn.href = "contact.html";
          td.appendChild(btn);
        } else {
          td.textContent = cell;
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.innerHTML = "";
    container.appendChild(table);
  } catch (e) {
    container.innerHTML = '<div style="padding:30px; color:var(--accent);">Unable to load data.</div>';
  }
}
