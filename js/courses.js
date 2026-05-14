/* ── Course Data ──────────────────────────────────────────── */
const COURSES = [
    {
        id: 'ielts',
        name: 'Basic to IELTS',
        badge: 'Most Popular',
        icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5',
        tagline: 'End-to-end IELTS preparation — Academic & General Training.',
        features: [
            '4 Free Books', 'Regular Vocabulary Sheets', 'Extra Grammar Materials', 'Study Recording Available',
            'Full Mock Tests (Computer & Written)', 'Toefl / PTE Mock Tests Available', 'Band Score Prediction',
            '1-on-1 Speaking Practice with Teacher', 'Performance Tracking & Analysis', 'Exam Registration Guidance',
            'Fully Air-Conditioned Classroom', 'Practice at Home via Online Platform', 'Support Center Open 9 AM–9 PM Daily',
            'Free Doubt Sessions', 'Motivational Seminars', 'Certificate on Completion',
            '₹2,000 Discount for SSC/HSC Students', '৳5,000 Cash Bonus for Scoring 7+ on IELTS!', '2 Free Mock Tests on IELTS Exam Registration',
            'Convocation Ceremony with Gown & Cap after Graduation',
        ],
        details: [
            { label: 'Target', value: 'All levels' },
            { label: 'Modules', value: 'Listening, Reading, Writing, Speaking' },
            { label: 'Support', value: '9 AM – 9 PM daily' },
        ],
        phones: [{ num: '+8801321207486', display: '01321-207486' }],
    },
    {
        id: 'spoken',
        name: 'Spoken English',
        badge: null,
        icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z',
        tagline: 'Build fluency, confidence, and natural pronunciation for real-world communication.',
        features: [
            'Pronunciation & Phonetics Training', 'Daily Conversation Practice', 'Public Speaking Sessions',
            'Group Discussions & Debates', 'Role-play & Scenario Practice', 'Vocabulary Building',
            'Confidence Building Exercises', 'Certificate on Completion',
        ],
        details: [
            { label: 'Duration', value: '3 months' },
            { label: 'Focus', value: 'Speaking & Listening' },
        ],
        phones: [{ num: '+8801321207486', display: '01321-207486' }],
    },
    {
        id: 'grammar',
        name: 'Grammar & Writing',
        badge: null,
        icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
        tagline: 'Strengthen your foundation with robust grammar and professional writing techniques.',
        features: [
            'Parts of Speech & Sentence Structure', 'Tenses & Voice', 'Paragraph & Essay Writing',
            'Letter & Email Writing', 'Proofreading & Editing Skills', 'Regular Written Assignments',
            'Feedback on Every Submission', 'Certificate on Completion',
        ],
        details: [
            { label: 'Duration', value: '2.5 months' },
            { label: 'Focus', value: 'Grammar & Writing' },
        ],
        phones: [{ num: '+8801321207486', display: '01321-207486' }],
    },
    {
        id: 'advanced',
        name: 'Advanced Writing',
        badge: null,
        icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
        tagline: 'Master complex academic writing — essays, reports, and research papers.',
        features: [
            'Academic Essay Structures', 'Research Report Writing', 'Critical Thinking & Argumentation',
            'Referencing & Citations', 'Complex Sentence Mastery', 'Feedback from Expert Instructors',
            'Certificate on Completion',
        ],
        details: [
            { label: 'Duration', value: '2 months' },
            { label: 'Level', value: 'Intermediate–Advanced' },
        ],
        phones: [{ num: '+8801321207486', display: '01321-207486' }],
    },
    {
        id: 'kids',
        name: "Kids' English",
        badge: 'Level 1 · Grades 1–4',
        icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 8v4l3 3',
        tagline: 'Fun, interactive sessions to build early language skills in young learners.',
        features: [
            'Reading & Writing Foundations', 'Phonetics & Pronunciation', 'Listening & Speaking Activities',
            'Grammar Basics', 'Vocabulary Building Games', 'Presentation Skills',
            'Arts & Crafts Course — 100% FREE!', '2 days/week (Fri & Sat) · 2 hrs per class',
            '4-month programme', 'Certificate on Completion',
        ],
        details: [
            { label: 'Grade', value: '1 – 4' },
            { label: 'Duration', value: '4 months' },
            { label: 'Bonus', value: 'Arts & Crafts FREE' },
        ],
        phones: [
            { num: '+8801321207486', display: '01321-207486' },
            { num: '+8801321207487', display: '01321-207487' },
        ],
    },
    {
        id: 'juniors',
        name: "Juniors' English",
        badge: 'Level 2 · Grades 5–8',
        icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
        tagline: 'The world\'s best speak English — dream, grow, and lead!',
        features: [
            'Reading, Writing, Listening, Speaking', 'Grammar & Vocabulary', 'Pronunciation & Presentation',
            'AI & Global Career Awareness', 'Arts & Crafts Course — 100% FREE!',
            '2 days/week (Fri & Sat) · 2 hrs per class', '4-month programme', 'Certificate on Completion',
        ],
        details: [
            { label: 'Grade', value: '5 – 8' },
            { label: 'Duration', value: '4 months' },
            { label: 'Bonus', value: 'Arts & Crafts FREE' },
        ],
        phones: [
            { num: '+8801321207486', display: '01321-207486' },
            { num: '+8801321207487', display: '01321-207487' },
        ],
    },
    {
        id: 'ssc',
        name: 'After SSC English',
        badge: '2026 Batch',
        icon: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20',
        tagline: 'Start your next milestone right after the exam — your life will change.',
        features: [
            'Reading, Writing, Listening, Speaking', 'Grammar & Phonetics',
            'ICT Course — 100% FREE!', '6-Month Language Club — FREE',
            'Free Trial Classes: 8, 15, 22 & 23 May 2026 (10 AM & 3 PM)',
            '2.5-month course · 3 days/week · 2 hrs/class', 'Certificate on Completion',
        ],
        details: [
            { label: 'Duration', value: '2.5 months' },
            { label: 'Bonus', value: 'ICT Course FREE' },
            { label: 'Language Club', value: '6 months FREE' },
        ],
        phones: [
            { num: '+8801321207486', display: '01321-207486' },
            { num: '+8801321207487', display: '01321-207487' },
        ],
    },
    {
        id: 'pte',
        name: 'PTE',
        badge: null,
        icon: 'M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34 M18 2l4 4-10 10H8v-4L18 2z',
        tagline: 'Complete computer-based test prep for study abroad and immigration.',
        features: [
            'Full PTE Mock Tests', 'Speaking & Writing Practice', 'Reading & Listening Strategies',
            'Score Prediction & Analysis', 'Exam Registration Guidance', 'Online Practice Platform',
            'Certificate on Completion',
        ],
        details: [
            { label: 'Type', value: 'Computer-based' },
            { label: 'Focus', value: 'Study Abroad / Immigration' },
        ],
        phones: [{ num: '+8801321207486', display: '01321-207486' }],
    },
];

/* ── Dropdown Injection ───────────────────────────────────── */
function buildDropdown() {
    const courseNavItem = document.querySelector('.nav-links li a[href="courses.html"]');
    if (!courseNavItem) return;

    const li = courseNavItem.parentElement;
    li.classList.add('has-dropdown');

    const arrow = document.createElement('span');
    arrow.className = 'dropdown-arrow';
    arrow.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
    courseNavItem.appendChild(arrow);

    const ul = document.createElement('ul');
    ul.className = 'dropdown-menu';

    COURSES.forEach(c => {
        const item = document.createElement('li');
        item.innerHTML = `<button class="dropdown-item" data-course="${c.id}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${c.icon}"></path></svg>
      <span>${c.name}</span>${c.badge ? `<small>${c.badge}</small>` : ''}
    </button>`;
        item.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            openModal(c.id);
        });
        ul.appendChild(item);
    });

    // "View All Courses" link
    const viewAll = document.createElement('li');
    viewAll.innerHTML = `<a href="courses.html" class="dropdown-viewall">View All Courses →</a>`;
    ul.appendChild(viewAll);

    li.appendChild(ul);
}

/* ── Modal ────────────────────────────────────────────────── */
function buildModal() {
    const backdrop = document.createElement('div');
    backdrop.id = 'course-modal-backdrop';
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

    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
    });
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openModal(id) {
    const c = COURSES.find(x => x.id === id);
    if (!c) return;

    const phoneHTML = c.phones.map(p =>
        `<a href="tel:${p.num}" class="modal-phone-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      ${p.display}
    </a>`
    ).join('');

    const featuresHTML = c.features.map(f =>
        `<div class="modal-feature">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${f}</span>
    </div>`
    ).join('');

    const detailsHTML = c.details.map(d =>
        `<div class="modal-detail-pill"><span class="pill-label">${d.label}</span><span class="pill-val">${d.value}</span></div>`
    ).join('');

    document.getElementById('modal-body').innerHTML = `
    <div class="modal-header">
      <svg class="modal-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${c.icon}"></path></svg>
      <div>
        ${c.badge ? `<div class="modal-badge">${c.badge}</div>` : ''}
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
    </div>`;

    const backdrop = document.getElementById('course-modal-backdrop');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('course-modal').classList.add('open'), 10);
}

function closeModal() {
    const modal = document.getElementById('course-modal');
    const backdrop = document.getElementById('course-modal-backdrop');
    modal.classList.remove('open');
    setTimeout(() => {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
    }, 300);
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    buildDropdown();
    buildModal();
});
