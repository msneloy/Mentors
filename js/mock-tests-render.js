/* ============================================================
   Mock Tests Renderer
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderSchedule();
  renderIncluded();
  renderPricing();
  renderSupportBanner();
});

function renderSchedule() {
  const el = document.getElementById("mock-schedule");
  if (!el || typeof MOCK_SCHEDULE === "undefined") return;

  const s = MOCK_SCHEDULE;
  el.innerHTML = `
    <h3>Test Schedule</h3>
    <div class="schedule-row">
      <div class="sched-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
      <div>
        <div class="sched-label">Days</div>
        <div class="sched-value">${s.days}</div>
      </div>
    </div>
    <div class="schedule-row">
      <div class="sched-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
      <div>
        <div class="sched-label">Start Time</div>
        <div class="sched-value">${s.startTime}</div>
      </div>
    </div>
    <div class="schedule-row">
      <div class="sched-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <div>
        <div class="sched-label">Seats</div>
        <div class="sched-value">${s.seats}</div>
      </div>
    </div>
    <a href="tel:${s.callNumber}" class="price-card-btn schedule-call-btn">📞 Call to Purchase Mock Test</a>
  `;
}

function renderIncluded() {
  const el = document.getElementById("mock-included");
  if (!el || typeof MOCK_INCLUDED === "undefined") return;

  el.innerHTML = `
    <h3>What's Included</h3>
    <p>Each mock test session replicates the full IELTS exam format under timed, proctored conditions.</p>
    <ul class="mock-info-list">
      ${MOCK_INCLUDED.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderPricing() {
  const el = document.getElementById("mock-pricing");
  if (!el || typeof MOCK_PRICING === "undefined") return;

  el.innerHTML = MOCK_PRICING.map((plan) => `
    <div class="price-card ${plan.bestValue ? "best-value" : ""}">
      ${plan.bestValue ? '<div class="best-value-badge">Best Value</div>' : ""}
      <div class="price-exams">${plan.count}</div>
      <div class="price-exam-label">${plan.label}</div>
      <div class="price-amount">${plan.price}</div>
      <div class="price-per">${plan.per}</div>
      <span class="price-saving ${!plan.saving ? "base" : ""}">${plan.saving || "—"}</span>
    </div>
  `).join("");
}

function renderSupportBanner() {
  const el = document.getElementById("mock-support");
  if (!el || typeof MOCK_SUPPORT === "undefined") return;

  el.innerHTML = `
    <div class="support-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </div>
    <div class="support-text">
      <h4>${MOCK_SUPPORT.title}</h4>
      <p>${MOCK_SUPPORT.description}</p>
    </div>
  `;
}
