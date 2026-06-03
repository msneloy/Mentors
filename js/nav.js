function initNav() {
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

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNav);
} else {
  initNav();
}

// Expose to window for manual re-init if needed
window.refreshNav = initNav;
