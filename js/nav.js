function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Set initial state of toggle if it exists
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    // Optional: add visual feedback if needed
  }
}

function initNav() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");

  if (hamburger && navLinks && !hamburger.dataset.listenerAttached) {
    hamburger.addEventListener("click", () =>
      navLinks.classList.toggle("active"),
    );
    navLinks
      .querySelectorAll("a")
      .forEach((a) =>
        a.addEventListener("click", () => navLinks.classList.remove("active")),
      );
    hamburger.dataset.listenerAttached = "true";
  }

  if (themeToggle && !themeToggle.dataset.listenerAttached) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
    themeToggle.dataset.listenerAttached = "true";
  }

  const page = window.location.pathname.split("/").pop() || "index.html";

  document
    .querySelectorAll(".nav-links a.active")
    .forEach((a) => a.classList.remove("active"));

  document.querySelectorAll(".nav-links > li > a").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const raw_href = href.split("/").pop();
    if (raw_href === page || (page === "" && raw_href === "index.html")) {
      a.classList.add("active");
    } else if (
      raw_href === "study-abroad.html" &&
      (page === "study-detail.html" || page.startsWith("study-"))
    ) {
      a.classList.add("active");
    } else if (raw_href === "courses.html" && page === "course-detail.html") {
      a.classList.add("active");
    }
  });
}

// Initialize theme as early as possible to avoid flash
initTheme();

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNav);
} else {
  initNav();
}

// Expose to window for manual re-init if needed
window.refreshNav = initNav;
