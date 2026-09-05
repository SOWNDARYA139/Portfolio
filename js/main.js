// ============================================
// PORTFOLIO — main.js
// Dynamic rendering, animations & interactivity
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // ── Initialize ──
  initLoader();
  renderNavLinks();
  renderHeroSocial();
  renderProjects();
  renderTimeline();
  renderEducation();
  renderCertifications();
  renderSkills();
  renderContact();
  renderContactSocial();

  // ── Event Listeners ──
  initNavbar();
  initTypingEffect();
  initScrollAnimations();
  initBackToTop();
});

// ═══════════════════════════════════════════
// LOADER
// ═══════════════════════════════════════════
function initLoader() {
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1500);
  });

  // Fallback: hide loader after 4 seconds max
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 4000);
}

// ═══════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════
function renderNavLinks() {
  const navMenu = document.getElementById("navMenu");
  navMenu.innerHTML = NAV_LINKS.map(
    (link) => `
    <li>
      <a href="${link.href}" class="nav-link" data-section="${link.href.slice(1)}">
        ${link.label}
      </a>
    </li>
  `
  ).join("");
}

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;

    // Active section tracking
    updateActiveNavLink();
  });

  // Mobile toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  // Close mobile menu on link click
  navMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("open");
    }
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.section === currentSection) {
      link.classList.add("active");
    }
  });
}

// ═══════════════════════════════════════════
// TYPING EFFECT
// ═══════════════════════════════════════════
function initTypingEffect() {
  const typingElement = document.getElementById("typingText");
  const roles = PROFILE.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause before deleting
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ═══════════════════════════════════════════
// HERO SOCIAL
// ═══════════════════════════════════════════
function renderHeroSocial() {
  const container = document.getElementById("heroSocial");
  container.innerHTML = SOCIAL_LINKS.map(
    (link) => `
    <a href="${link.url}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="${link.name}" title="${link.name}">
      ${link.icon}
    </a>
  `
  ).join("");
}

// ═══════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (project, i) => `
    <div class="project-card reveal" style="transition-delay: ${i * 0.1}s">
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" />
        <div class="project-image-overlay"></div>
        ${
          project.featured
            ? '<span class="project-featured-badge">★ Featured</span>'
            : ""
        }
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech
            .map((t) => `<span class="project-tech-tag">${t}</span>`)
            .join("")}
        </div>
      </div>
    </div>
  `
  ).join("");

  // Add tilt effect on hover
  initProjectTilt();
}

function initProjectTilt() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ═══════════════════════════════════════════
// EXPERIENCE TIMELINE
// ═══════════════════════════════════════════
function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = EXPERIENCE.map(
    (exp, i) => `
    <div class="timeline-item ${i % 2 === 0 ? "reveal-left" : "reveal-right"}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-type">${exp.type}</span>
        <h3 class="timeline-title">${exp.title}</h3>
        <p class="timeline-company">${exp.company} · ${exp.location}</p>
        <span class="timeline-period">${exp.period}</span>
        <p class="timeline-description">${exp.description}</p>
        ${
          exp.highlights
            ? `<div class="timeline-highlights">
              ${exp.highlights
                .map((h) => `<span class="timeline-highlight">${h}</span>`)
                .join("")}
            </div>`
            : ""
        }
      </div>
    </div>
  `
  ).join("");
}

// ═══════════════════════════════════════════
// EDUCATION
// ═══════════════════════════════════════════
function renderEducation() {
  const grid = document.getElementById("educationGrid");
  const iconMap = {
    graduation: "🎓",
    school: "🏫",
  };

  grid.innerHTML = EDUCATION.map(
    (edu, i) => `
    <div class="education-card reveal" style="transition-delay: ${i * 0.1}s">
      <div class="education-icon">${iconMap[edu.icon] || "📚"}</div>
      <h3 class="education-degree">${edu.degree}</h3>
      <p class="education-institution">${edu.institution}</p>
      <div class="education-meta">
        <span class="education-year">${edu.year}</span>
        ${edu.score ? `<span class="education-score">Score: ${edu.score}</span>` : ""}
      </div>
    </div>
  `
  ).join("");
}

// ═══════════════════════════════════════════
// CERTIFICATIONS
// ═══════════════════════════════════════════
function renderCertifications() {
  const grid = document.getElementById("certificationsGrid");
  const iconMap = {
    certificate: "📜",
    award: "🏆",
  };

  grid.innerHTML = CERTIFICATIONS.map(
    (cert, i) => `
    <div class="cert-card reveal" style="transition-delay: ${i * 0.1}s">
      <div class="cert-icon">${iconMap[cert.icon] || "🏅"}</div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
      <span class="cert-date">${cert.date}</span>
      ${cert.description ? `<p class="cert-description">${cert.description}</p>` : ""}
    </div>
  `
  ).join("");
}

// ═══════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════
function renderSkills() {
  const container = document.getElementById("skillsContainer");

  // Group skills by category
  const categories = {};
  SKILLS.forEach((skill) => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });

  const categoryLabels = {
    Frontend: "🎨 Frontend",
    Backend: "⚙️ Backend",
    Other: "💻 Programming",
    Tools: "🛠️ Tools & Platforms",
  };

  container.innerHTML = Object.entries(categories)
    .map(
      ([category, skills], catIndex) => `
    <div class="skills-category reveal" style="transition-delay: ${catIndex * 0.1}s">
      <h3 class="skills-category-title">${categoryLabels[category] || category}</h3>
      <div class="skills-grid">
        ${skills
          .map(
            (skill, i) => `
          <div class="skill-card" style="transition-delay: ${(catIndex * 0.1) + (i * 0.05)}s">
            <div class="skill-icon">
              ${SKILL_ICONS[skill.name] || getDefaultSkillIcon(skill.name)}
            </div>
            <span class="skill-name">${skill.name}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}

function getDefaultSkillIcon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">${name.charAt(0)}</text></svg>`;
}

// ═══════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════
function renderContact() {
  const container = document.getElementById("contactInfo");
  
  const contactCards = [
    {
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    },
    {
      label: "Phone",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    },
    {
      label: "Location",
      value: CONTACT_INFO.locationShort,
      href: null,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    },
  ];

  container.innerHTML = contactCards
    .map(
      (card) => `
    <${card.href ? `a href="${card.href}"` : "div"} class="contact-card">
      <div class="contact-card-icon">
        ${card.icon}
      </div>
      <div>
        <p class="contact-card-label">${card.label}</p>
        <p class="contact-card-value">${card.value}</p>
      </div>
    </${card.href ? "a" : "div"}>
  `
    )
    .join("");
}

function renderContactSocial() {
  const container = document.getElementById("contactSocial");
  container.innerHTML = SOCIAL_LINKS.map(
    (link) => `
    <a href="${link.url}" class="contact-social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.name}" title="${link.name}">
      ${link.icon}
    </a>
  `
  ).join("");
}

// ═══════════════════════════════════════════
// SCROLL ANIMATIONS (IntersectionObserver)
// ═══════════════════════════════════════════
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all revealable elements
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
    observer.observe(el);
  });
}

// ═══════════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════════
function initBackToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
