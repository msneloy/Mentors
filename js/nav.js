/* ============================================================
   Navigation behavior
   ============================================================ */

// Mobile hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () =>
    navLinks.classList.toggle("active"),
  );
  navLinks
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("active")),
    );
}

// Mark active nav link based on current page filename
(function markActive() {
  const page = window.location.pathname.split("/").pop() || "index.html";

  // Remove any hardcoded active classes first.
  document
    .querySelectorAll(".nav-links a.active")
    .forEach((a) => a.classList.remove("active"));

  // Determine which nav link should be active based on the current page.
  document.querySelectorAll(".nav-links > li > a").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const raw_href = href.split("/").pop();
    if (raw_href === page || (page === "" && raw_href === "index.html")) {
      a.classList.add("active");
    } else if (raw_href === "study-abroad.html" && (page === "study-detail.html" || page.startsWith("study-"))) {
      a.classList.add("active");
    } else if (raw_href === "courses.html" && page === "course-detail.html") {
      a.classList.add("active");
    }
  });

  // Also highlight the active dropdown item if on a subpage
  document.querySelectorAll(".dropdown-menu a").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("/").pop();
    const currentFull = page + window.location.hash;
    if (href === page || href === currentFull) {
      a.style.background = "rgba(255, 26, 26, 0.08)";
      a.style.color = "var(--text-main)";
    }
  });
})();
