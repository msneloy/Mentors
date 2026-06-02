/* ============================================================
   Mentors Courses JavaScript
   ============================================================
   Sections:
   1. Course data model
   2. Shared SVG helpers
   3. Course detail page rendering
   4. Dropdown navigation injection
   5. Modal creation and content
   6. Modal open / close behavior
   7. Initialization
   ============================================================ */

/* ── Course Data ──────────────────────────────────────────── */
const COURSES = [
  {
    id: "ielts",
    name: "Basic to IELTS",
    badge: "Most Popular",
    color: "#FF1A1A",
    icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5",
    tagline: "End-to-end IELTS preparation — Academic & General Training.",
    description:
      "Our flagship Basic to IELTS programme takes you from zero to exam-ready with structured modules, mock tests, and daily support. Designed for all levels, this course gives you every tool you need to achieve your target band score.",
    skills: ["Listening", "Reading", "Writing", "Speaking"],
    features: [
      "4 Free Books",
      "Regular Vocabulary Sheets",
      "Extra Grammar Materials",
      "Study Recording Available",
      "Full Mock Tests (Computer & Written)",
      "Toefl / PTE Mock Tests Available",
      "Band Score Prediction",
      "1-on-1 Speaking Practice with Teacher",
      "Performance Tracking & Analysis",
      "Exam Registration Guidance",
      "Fully Air-Conditioned Classroom",
      "Practice at Home via Online Platform",
      "Support Center Open 9 AM–9 PM Daily",
      "Free Doubt Sessions",
      "Motivational Seminars",
      "Certificate on Completion",
      "৳2,000 Discount for SSC/HSC Students",
      "৳5,000 Cash Bonus for Scoring 7+!",
      "2 Free Mock Tests on IELTS Exam Registration",
      "Convocation Ceremony with Gown & Cap",
    ],
    details: [
      { label: "Target", value: "All levels" },
      { label: "Modules", value: "Listening · Reading · Writing · Speaking" },
      { label: "Support", value: "9 AM – 9 PM daily" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
      { num: "+8801335197068", display: "01335-197068", role: "Call Center" },
    ],
  },
  {
    id: "spoken",
    name: "Spoken English & Phonetics",
    badge: null,
    color: "#2196F3",
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z",
    tagline:
      "Basics of speaking, conversation techniques & self introduction — Build confidence through practical communication.",
    description:
      "Break the language barrier with our Spoken English & Phonetics course. Learn to express yourself clearly and confidently in any situation — workplace, class, or abroad. This comprehensive 2-month program combines phonetics mastery with practical speaking skills, plus a FREE 2-month Language Club membership.",
    skills: [
      "Speaking",
      "Listening",
      "Pronunciation",
      "Phonetics",
      "Conversation",
    ],
    features: [
      "Basics of Speaking & Conversation Techniques",
      "Self Introduction & Presentation Skills",
      "Pronunciation & Phonetics Mastery",
      "44 Sounds of English Training",
      "Correct Pronunciation of Any English Words",
      "Word Stress & Sentence Stress",
      "Connected Speech & Linking (Linking Words)",
      "Strong/Weak Forms & Elision",
      "Listening Skills Development",
      "Understanding English Movies, Songs etc.",
      "Listening Exercises & Practical Training",
      "Confidence Building Exercises",
      "Air-Conditioned Classroom",
      "Support Center Available",
      "SPECIAL FEATURE: Language Club — FREE for 2 Months",
      "Certificate on Completion",
    ],
    details: [
      { label: "Duration", value: "2 months" },
      { label: "Classes", value: "3 days / week · 2 hours" },
      { label: "Bonus", value: "Language Club FREE · 2 Months" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
    ],
  },
  {
    id: "grammar",
    name: "Foundation Grammar & Writing",
    badge: null,
    color: "#4CAF50",
    icon: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    tagline:
      "Grammar, nouns, pronouns, verbs, articles, adjectives — comprehensive foundation in writing and sentence construction.",
    description:
      "Master the building blocks of the English language with our Foundation Grammar & Writing course. Covers everything from parts of speech to advanced sentence structures, with strong emphasis on practical writing skills for academics and professional communication. Includes structured curriculum with regular exams and comprehensive sentence-making practice.",
    skills: [
      "Grammar",
      "Writing",
      "Reading",
      "Sentence Structure",
      "Vocabulary",
    ],
    features: [
      "Nouns, Pronouns, Verbs, Articles, Adjectives",
      "Capitalization Rules & Sentence Basics",
      "Subject-Verb Agreement & Tenses",
      "Conditionals & Modals",
      "Voice (Active/Passive) & Verbals",
      "Paragraph & Essay Writing",
      "Letter & Email Writing",
      "Report Writing",
      "Sentence-Making & Construction Practice",
      "Proofreading & Editing Skills",
      "Mind Mapping & Brainstorming",
      "Using Linking Words & Transitional Phrases",
      "Regular Written Assignments",
      "Feedback on Every Submission",
      "Air-Conditioned Classroom",
      "Certificate on Completion",
    ],
    details: [
      { label: "Duration", value: "2 months" },
      { label: "Classes", value: "3 days / week · 2 hours" },
      { label: "Focus", value: "Grammar & Writing" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
    ],
  },
  {
    id: "advanced",
    name: "Advanced Writing",
    badge: null,
    color: "#9C27B0",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    tagline:
      "Master complex academic writing — essays, reports, and research papers.",
    description:
      "Take your writing to the next level. This advanced course is designed for students and professionals who need to produce high-quality academic or professional documents. From thesis writing to complex argument structures, we cover it all.",
    skills: ["Academic Writing", "Research", "Critical Thinking", "Editing"],
    features: [
      "Academic Essay Structures",
      "Research Report Writing",
      "Critical Thinking & Argumentation",
      "Referencing & Citations (APA, MLA)",
      "Complex Sentence Mastery",
      "Thesis & Dissertation Tips",
      "Feedback from Expert Instructors",
      "Peer Review Sessions",
      "Air-Conditioned Classroom",
      "Certificate on Completion",
    ],
    details: [
      { label: "Duration", value: "2 months" },
      { label: "Level", value: "Intermediate–Advanced" },
      { label: "Classes", value: "3 days / week" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
    ],
  },
  {
    id: "kids",
    name: "Kids' English",
    badge: "Level 1 · Grades 1–4",
    color: "#FF9800",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    tagline:
      "Fun, interactive sessions to build early language skills in young learners.",
    description:
      "Give your child the gift of English at an early age. Our Kids' English Course uses games, activities, and creative sessions to build a strong language foundation in a fun, nurturing environment. Arts & Crafts is included completely FREE!",
    skills: [
      "Reading",
      "Writing",
      "Listening",
      "Speaking",
      "Grammar",
      "Vocabulary",
      "Pronunciation",
      "Presentation",
    ],
    features: [
      "Reading & Writing Foundations",
      "Phonetics & Pronunciation",
      "Listening & Speaking Activities",
      "Grammar Basics",
      "Vocabulary Building Games",
      "Presentation Skills",
      "Arts & Crafts Course — 100% FREE!",
      "2 days/week (Fri & Sat) · 2 hrs per class",
      "Air-Conditioned Classroom",
      "Certificate on Completion",
    ],
    details: [
      { label: "Grade", value: "1 – 4" },
      { label: "Duration", value: "4 months" },
      { label: "Classes", value: "Fri & Sat · 2 hrs" },
      { label: "Bonus", value: "Arts & Crafts FREE" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
      { num: "+8801335197068", display: "01335-197068", role: "Call Center" },
    ],
  },
  {
    id: "juniors",
    name: "Juniors' English",
    badge: "Level 2 · Grades 5–8",
    color: "#FF5722",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    tagline: "The world's best speak English — dream, grow, and lead!",
    description:
      "Build on your child's foundation and prepare them for the future. Our Juniors' English course challenges Grades 5–8 students with more advanced content including global awareness, career skills, and confident communication — plus Arts & Crafts FREE!",
    skills: [
      "Reading",
      "Writing",
      "Listening",
      "Speaking",
      "Grammar",
      "Vocabulary",
      "Pronunciation",
      "Presentation",
    ],
    features: [
      "Reading, Writing, Listening, Speaking",
      "Grammar & Vocabulary",
      "Pronunciation & Presentation",
      "AI & Global Career Awareness",
      "Critical Thinking Activities",
      "Arts & Crafts Course — 100% FREE!",
      "2 days/week (Fri & Sat) · 2 hrs per class",
      "Air-Conditioned Classroom",
      "Certificate on Completion",
    ],
    details: [
      { label: "Grade", value: "5 – 8" },
      { label: "Duration", value: "4 months" },
      { label: "Classes", value: "Fri & Sat · 2 hrs" },
      { label: "Bonus", value: "Arts & Crafts FREE" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
      { num: "+8801335197068", display: "01335-197068", role: "Call Center" },
    ],
  },
  {
    id: "ssc",
    name: "After SSC English",
    badge: "2026 Batch",
    color: "#009688",
    icon: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
    tagline:
      "Start your next milestone right after the exam — your life will change.",
    description:
      "Don't wait — start building your future the moment SSC exams are over. Mentors' After SSC English Foundation Course is the perfect launchpad with comprehensive English skills, ICT training, and a 6-month Language Club — all giving you the edge for what comes next.",
    skills: [
      "Reading",
      "Writing",
      "Listening",
      "Speaking",
      "Grammar",
      "Phonetics",
    ],
    features: [
      "Reading, Writing, Listening, Speaking",
      "Grammar & Phonetics",
      "ICT Course — 100% FREE!",
      "6-Month Language Club — FREE",
      "Free Trial Classes: 8, 15, 22 & 23 May 2026",
      "Trial Class Times: 10:00 AM & 3:00 PM",
      "2.5-month course · 3 days/week · 2 hrs/class",
      "Air-Conditioned Classroom",
      "Certificate on Completion",
    ],
    details: [
      { label: "Duration", value: "2.5 months" },
      { label: "Classes", value: "3 days / week · 2 hrs" },
      { label: "ICT Course", value: "100% FREE" },
      { label: "Language Club", value: "6 months FREE" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
      { num: "+8801335197068", display: "01335-197068", role: "Call Center" },
    ],
  },
  {
    id: "ielts-advanced",
    name: "IELTS — Academic & General",
    badge: "Expert Prepared",
    color: "#FF1A1A",
    icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5",
    tagline:
      "Intensive IELTS preparation with flexible scheduling — Regular, Executive & Crash courses.",
    description:
      "Master the IELTS exam with our comprehensive course designed for both Academic and General Training formats. Choose from Regular (3.5 months), Executive (3.5 months), or Crash (1.5 months) programs. All include unlimited interview practice at our IELTS Support Centre, free online resources, and expert guidance.",
    skills: ["Listening", "Reading", "Writing", "Speaking", "Exam Strategy"],
    features: [
      "Regular, Executive & Crash Course Options",
      "Unlimited Interviews in IELTS Support Centre",
      "Writing Script Checking & Feedback",
      "Full Mock Tests (Computer & Written)",
      "Band Score Prediction & Analysis",
      "Free Access to Online Resources @ mentorslearning.com",
      "Expert Instructors with Exam Experience",
      "Reading Comprehension Mastery",
      "Listening & Speaking Intensive Classes",
      "Pronunciation & Accent Training",
      "Study Materials & Practice Sheets Included",
      "Free Courses & Tests for Extra Practice",
      "Repeat Option Available (Conditions Apply)",
      "Air-Conditioned Classroom",
      "Certificate on Completion",
      "IELTS Support Centre at Multiple Locations (Mirpur, Uttara, Banani, Kalabagan, Wari)",
    ],
    details: [
      { label: "Format", value: "Academic & General Training" },
      {
        label: "Duration",
        value: "Regular: 3.5 Mo | Executive: 3.5 Mo | Crash: 1.5 Mo",
      },
      {
        label: "Classes",
        value: "Regular & Executive: 3 days/week | Crash: Intensive",
      },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
      { num: "+8801335197068", display: "01335-197068", role: "Call Center" },
    ],
  },
  {
    id: "pte",
    name: "PTE Academic / UKVI",
    badge: "Internationally Recognized",
    color: "#2196F3",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    tagline:
      "PTE Academic exam preparation — Accepted by 3,000+ universities and colleges worldwide.",
    description:
      "Get accepted to your dream university with our PTE Academic & UKVI course. Approved by over 3,000 universities and colleges worldwide, PTE offers a globally recognized English proficiency qualification. Our comprehensive preparation includes all four skills with expert guidance and unlimited practice.",
    skills: ["Speaking", "Writing", "Reading", "Listening", "Exam Strategy"],
    features: [
      "Full Validity: 48 Hours - Perfect Scores Remain Valid",
      "Schedule Tests up to 24 Hours in Advance",
      "Approved by 3,000+ Universities Worldwide",
      "Comprehensive Speaking & Writing Classes",
      "Reading & Listening Intensive Training",
      "Multiple Mock Tests Included",
      "Expert Exam Strategy & Tips",
      "Interactive Learning Platform",
      "Free Practice Materials & Online Resources",
      "Individual Performance Analysis",
      "Regular Feedback & Progress Tracking",
      "Certificate on Completion",
      "Air-Conditioned Classroom",
      "Support Center Available",
      "Free Courses & Tests for Extra Practice",
      "Revision Sessions Included",
    ],
    details: [
      { label: "Exam Type", value: "PTE Academic & UKVI" },
      { label: "Duration", value: "2 months" },
      { label: "Classes", value: "3 days / week · 2 hours" },
      { label: "Approved By", value: "3,000+ Universities & Colleges" },
    ],
    phones: [
      { num: "+8801321207486", display: "01321-207486", role: "Reception" },
      { num: "+8801335197068", display: "01335-197068", role: "Call Center" },
    ],
  },
];

/* ── Shared SVG helper ────────────────────────────────────── */
const phoneSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
const checkSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

/* ── Course Detail Page Renderer ──────────────────────────── */
function renderDetailPage() {
  // Determine current course id from either the hash fragment or the query string.
  const id =
    location.hash.replace("#", "") || location.search.replace("?course=", "");
  const c = COURSES.find((x) => x.id === id);
  const root = document.getElementById("course-detail-root");
  if (!root) return;

  if (!c) {
    root.innerHTML = `<div style="text-align:center;padding:80px 20px">
      <h2 style="color:var(--text-main)">Course not found</h2>
      <p style="color:var(--text-muted);margin:12px 0 24px">Please <a href="courses.html" style="color:var(--accent)">browse all courses</a>.</p>
    </div>`;
    return;
  }

  document.title = `${c.name} — Mentors' Noakhali Branch`;

  const skillTags = c.skills
    .map((s) => `<span class="cd-skill-tag">${s}</span>`)
    .join("");
  const pills = c.details
    .map(
      (d) =>
        `<div class="cd-pill"><span class="cd-pill-label">${d.label}</span><span class="cd-pill-val">${d.value}</span></div>`,
    )
    .join("");
  const features = c.features
    .map((f) => `<div class="cd-feature">${checkSVG}<span>${f}</span></div>`)
    .join("");
  const phones = c.phones
    .map(
      (p) => `
    <a href="tel:${p.num}" class="ssc-phone">
      ${phoneSVG} ${p.display}${p.role ? ` <span class="phone-role">${p.role}</span>` : ""}
    </a>`,
    )
    .join("");
  const badge = c.badge ? `<div class="cd-badge">${c.badge}</div>` : "";

  root.innerHTML = `
    <!-- Hero -->
    <div class="cd-hero" style="--course-color:${c.color}">
      <div class="container">
        <a href="courses.html" class="cd-back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          All Courses
        </a>
        <div class="cd-hero-content">
          <div class="cd-hero-icon" style="background:${c.color}20;border-color:${c.color}40">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${c.icon}"></path></svg>
          </div>
          <div>
            ${badge}
            <h1>${c.name}</h1>
            <p class="cd-tagline">${c.tagline}</p>
            <div class="cd-skills">${skillTags}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="cd-body section-padding">
      <div class="container">
        <div class="cd-layout">
          <!-- Left: Details -->
          <div class="cd-main">
            <h2 class="cd-section-title">About This Course</h2>
            <p class="cd-description">${c.description}</p>

            <h2 class="cd-section-title" style="margin-top:40px">What's Included</h2>
            <div class="cd-features">${features}</div>
          </div>

          <!-- Right: Sidebar -->
          <aside class="cd-sidebar">
            <div class="cd-info-card">
              <div class="cd-info-title">Course Info</div>
              <div class="cd-pills">${pills}</div>
              <div class="cd-cta-title">Enquire or Enrol Now</div>
              <div class="ssc-phone-group">${phones}</div>
              <a href="contact.html" class="cd-contact-link">Visit Contact Page →</a>
            </div>
          </aside>
        </div>
      </div>
    </div>`;
}

/* ── Dropdown Injection ───────────────────────────────────── */
function buildDropdown() {
  // Inject the course list into the Courses navigation dropdown.
  const courseNavItem = document.querySelector(
    '.nav-links li a[href="courses.html"]',
  );
  if (!courseNavItem) return;
  const li = courseNavItem.parentElement;
  li.classList.add("has-dropdown");
  const arrow = document.createElement("span");
  arrow.className = "dropdown-arrow";
  arrow.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  courseNavItem.appendChild(arrow);
  const ul = document.createElement("ul");
  ul.className = "dropdown-menu";
  COURSES.forEach((c) => {
    const item = document.createElement("li");
    item.innerHTML = `<a href="course-detail.html#${c.id}" class="dropdown-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${c.icon}"></path></svg>
      <span>${c.name}</span>${c.badge ? `<small>${c.badge}</small>` : ""}
    </a>`;
    ul.appendChild(item);
  });
  const viewAll = document.createElement("li");
  viewAll.innerHTML = `<a href="courses.html" class="dropdown-viewall">View All Courses →</a>`;
  ul.appendChild(viewAll);
  li.appendChild(ul);
}

/* ── Modal Build & Events ─────────────────────────────────── */
function buildModal() {
  // Build the modal markup and register close / escape-key behavior.
  const backdrop = document.createElement("div");
  backdrop.id = "course-modal-backdrop";
  backdrop.innerHTML = `
    <div class="course-modal" id="course-modal" role="dialog" aria-modal="true">
      <button class="modal-close" id="modal-close-btn" aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="modal-body" id="modal-body"></div>
    </div>`;
  document.body.appendChild(backdrop);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document
    .getElementById("modal-close-btn")
    .addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(id) {
  // Populate modal content from the selected course details.
  const c = COURSES.find((x) => x.id === id);
  if (!c) return;
  const phoneHTML = c.phones
    .map(
      (p) =>
        `<a href="tel:${p.num}" class="modal-phone-btn">${phoneSVG}${p.display}</a>`,
    )
    .join("");
  const featuresHTML = c.features
    .map((f) => `<div class="modal-feature">${checkSVG}<span>${f}</span></div>`)
    .join("");
  const detailsHTML = c.details
    .map(
      (d) =>
        `<div class="modal-detail-pill"><span class="pill-label">${d.label}</span><span class="pill-val">${d.value}</span></div>`,
    )
    .join("");
  document.getElementById("modal-body").innerHTML = `
    <div class="modal-header">
      <svg class="modal-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${c.icon}"></path></svg>
      <div>
        ${c.badge ? `<div class="modal-badge">${c.badge}</div>` : ""}
        <h2>${c.name}</h2>
        <p class="modal-tagline">${c.tagline}</p>
      </div>
    </div>
    <div class="modal-pills">${detailsHTML}</div>
    <div class="modal-features-title">What's included</div>
    <div class="modal-features">${featuresHTML}</div>
    <div class="modal-cta">
      <p>Enquire or enrol now:</p>
      <div class="modal-phones">${phoneHTML}</div>
      <a href="course-detail.html#${c.id}" class="cd-contact-link" style="display:inline-block;margin-top:14px">View Full Course Details →</a>
    </div>`;
  const backdrop = document.getElementById("course-modal-backdrop");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
  setTimeout(
    () => document.getElementById("course-modal").classList.add("open"),
    10,
  );
}

function closeModal() {
  // Close modal and restore body scrolling.
  const modal = document.getElementById("course-modal");
  const backdrop = document.getElementById("course-modal-backdrop");
  modal.classList.remove("open");
  setTimeout(() => {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }, 300);
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  buildDropdown();
  if (document.getElementById("course-detail-root")) {
    renderDetailPage();
    window.addEventListener("hashchange", renderDetailPage);
  } else {
    buildModal();
  }
});
