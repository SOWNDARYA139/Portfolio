// ============================================
// PORTFOLIO DATA — constants.js
// All personal data stored here for easy updates
// ============================================

const PROFILE = {
  name: "Sowndarya P",
  firstName: "Sowndarya",
  lastName: "P",
  initials: "SP",
  roles: [
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Full Stack Developer"
  ],
  greeting: "Hello, I'm",
  bio: "Passionate Junior Frontend Developer at Digylax Pvt Ltd, Coimbatore, building enterprise HRMS web applications. Skilled in the MERN stack with hands-on experience in React, Node.js, MongoDB, and API integration. Always eager to learn, build, and grow.",
  resumeLink: "Sowndarya_P_Resumae.pdf", // Path to the resume PDF served with the site
};

const CONTACT_INFO = {
  email: "sowndaryap001@gmail.com",
  phone: "+91 9363286735",
  address: "1/103-5, East Street, Kongankulam, Virudhunagar District, Tamil Nadu",
  locationShort: "Virudhunagar, Tamil Nadu",
};

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "#", // Update with your LinkedIn URL
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    name: "GitHub",
    url: "#", // Update with your GitHub URL
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  },
  {
    name: "Email",
    url: "mailto:sowndaryap001@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
];

const PROJECTS = [
  {
    title: "Rice Leaf Disease Prediction",
    description:
      "A deep learning-based web application that predicts diseases in rice leaves using CNN models. Features image upload, real-time prediction, and saliency map visualization to highlight affected areas.",
    image: "images/project-rice-leaf.jpg",
    tech: ["Python", "Deep Learning", "Flask", "CNN", "TensorFlow"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Movie Booking Web App",
    description:
      "A full-stack movie ticket booking application with user authentication, movie browsing, seat selection, and booking management. Built with the MERN stack for seamless frontend-backend integration.",
    image: "images/project-movie.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "REST API"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my projects, skills, and experience. Features glassmorphism UI, smooth animations, typing effects, and dynamic content rendering.",
    image: "images/project-portfolio.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
];

const EXPERIENCE = [
  {
    type: "work",
    title: "Junior Frontend Developer",
    company: "Digylax Private Limited",
    location: "Coimbatore",
    period: "Jun 2025 – Present",
    description:
      "Building enterprise HRMS web application (TalentFactor.ai) using JavaScript, React, and API integration. Collaborating with cross-functional teams to deliver scalable, user-friendly HR solutions.",
    highlights: [
      "Developing responsive UI components with React",
      "Integrating RESTful APIs for HRMS modules",
      "Working on TalentFactor.ai — an enterprise HRMS platform",
      "Collaborating with backend team on Node.js & MongoDB",
    ],
    icon: "work",
  },
  {
    type: "internship",
    title: "Full Stack Developer Intern",
    company: "Tap Academy",
    location: "Bangalore",
    period: "6 Months (2025)",
    description:
      "Completed intensive full-stack web development training covering frontend, backend, and database technologies. Built multiple projects using the MERN stack.",
    highlights: [
      "Full Stack Web Development certification",
      "Hands-on projects with React, Node.js, MongoDB",
      "API development and integration (CRUD operations)",
      "Agile methodology and collaborative development",
    ],
    icon: "internship",
  },
  {
    type: "internship",
    title: "Python & Data Science Intern",
    company: "Gateway Software Solutions",
    location: "Coimbatore",
    period: "Jun 2023 (2 Weeks)",
    description:
      "Completed a focused internship on Python programming and data science fundamentals at Gateway Software Solutions, an HP Enterprise delivery partner.",
    highlights: [
      "Python programming fundamentals",
      "Data Science & analysis techniques",
      "Real-world data processing workflows",
    ],
    icon: "internship",
  },
];

const EDUCATION = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Sri Ramakrishna Institute of Technology",
    location: "Coimbatore",
    year: "2021 – 2025",
    icon: "graduation",
  },
  {
    degree: "HSC (12th Standard)",
    institution: "Sri Ramana Vidyalaya",
    year: "2021",
    score: "90%",
    icon: "school",
  },
  {
    degree: "SSLC (10th Standard)",
    institution: "TANCEM Matric Hr Sec School",
    year: "2019",
    score: "86%",
    icon: "school",
  },
];

const CERTIFICATIONS = [
  {
    title: "Full Stack Web Development",
    issuer: "Tap Academy",
    date: "Dec 2025",
    certNo: "13173",
    icon: "certificate",
  },
  {
    title: "HTML5, CSS3 & JavaScript — Complete Guide",
    issuer: "Udemy",
    date: "Sept 2024",
    duration: "13 hours",
    icon: "certificate",
  },
  {
    title: "Python with Data Science",
    issuer: "Gateway Software Solutions",
    date: "Jun 2023",
    icon: "certificate",
  },
  {
    title: "SRIT Hackathon 2022 — Bronze Award",
    issuer: "Sri Ramakrishna Institute of Technology",
    date: "May 2022",
    description: 'Bronze Award for "Disease Analyzer" poster presentation',
    icon: "award",
  },
];

const SKILLS = [
  // Frontend
  { name: "HTML5", category: "Frontend", color: "#e34f26" },
  { name: "CSS3", category: "Frontend", color: "#1572b6" },
  { name: "JavaScript", category: "Frontend", color: "#f7df1e" },
  { name: "React", category: "Frontend", color: "#61dafb" },
  { name: "Bootstrap", category: "Frontend", color: "#7952b3" },
  // Backend
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "Express.js", category: "Backend", color: "#ffffff" },
  { name: "MongoDB", category: "Backend", color: "#47a248" },
  { name: "REST API", category: "Backend", color: "#ff6c37" },
  // Programming
  { name: "Python", category: "Other", color: "#3776ab" },
  { name: "Java", category: "Other", color: "#ed8b00" },
  // Tools
  { name: "Git", category: "Tools", color: "#f05032" },
  { name: "VS Code", category: "Tools", color: "#007acc" },
  { name: "Postman", category: "Tools", color: "#ff6c37" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Skill icon SVGs (inline for zero-dependency approach)
const SKILL_ICONS = {
  HTML5: `<svg viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>`,
  CSS3: `<svg viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V24.208h34.682l-.332 3.711-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 24.208v13.058H30.64l-.277-3.108-.63-7.045-.331-2.905zm-.047 27.221v13.058H46.128l-.277-3.108-.631-7.045-.33-2.905z"/></svg>`,
  JavaScript: `<svg viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.21 58.943h-11.6c0 10.252-.044 20.455-.044 30.717 0 6.555.339 12.593-.378 14.456-.988 3.646-3.545 4.68-5.93 4.353-2.449-.384-3.727-1.742-5.14-3.725-1.416-1.991-1.377-1.991-1.486-2.164l-9.44 5.795c1.568 3.249 3.844 6.036 6.921 7.882 4.435 2.643 10.41 3.483 16.682 2.068 4.098-1.181 7.633-3.627 9.467-7.462 2.626-5.066 2.073-11.256 2.05-18.171.073-11.234.004-22.469.004-33.749h-.106z"/></svg>`,
  React: `<svg viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>`,
  "Node.js": `<svg viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.71 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.06 1.24 1.06h5.754c.354 0 .692-.286.94-.586.241-.3.383-.608.383-.94-.543-9.663-7.791-14.085-22.159-14.085-12.644 0-20.183 5.334-20.183 14.263 0 9.68 7.476 12.388 19.6 13.577 14.501 1.422 15.652 3.547 15.652 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>`,
  "Express.js": `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.22 3.71l26.5-35.96-25-33.42c4.44-1.34 7.2-.42 9.73 3.49 5.36 8.28 11.24 16.22 17.13 24.53l17.43-28.01c2.37-3.44 4.72-5.07 9.11-3.67L96.63 59.18l27.04 39.26zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.6 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15.82-.12-25.98 11.02-26.43 27.57z"/></svg>`,
  MongoDB: `<svg viewBox="0 0 128 128"><path fill="#439934" fill-rule="evenodd" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-9.188-8.528-16.88-15.756-23.312-2.434-2.163-4.476-4.759-6.782-7.069-.652-.65-1.163-1.478-1.842-2.087-.573-.516-1.215-1.14-1.912-1.14-.698-.001-1.288.613-1.87 1.122-2.164 1.89-4.495 3.602-6.429 5.732-5.2 5.724-9.279 12.21-12.345 19.315-2.166 5.017-3.832 10.2-4.803 15.597-1.22 6.793-1.454 13.594-.543 20.403.545 4.076 1.504 8.058 3.042 11.88 4.78 11.882 12.763 21.128 23.725 27.496 2.122 1.233 4.402 2.148 6.622 3.191.345.163.893.204 1.216.015 2.129-1.245 4.426-2.289 6.346-3.81 6.072-4.82 10.958-10.768 14.676-17.727 2.825-5.283 4.69-10.9 5.803-16.756.757-3.984.986-8.018 1.038-12.052.022-1.725-.134-3.454-.245-5.104-.053-.79.197-1.574-.042-2.397-.106-.366-.057-.76-.069-1.143-.052-1.604-.108-3.21-.159-4.815-.029-.924-.07-1.849-.112-2.773-.013-.283-.034-.566-.054-.848zm-36.747 44.89c-.464-1.349-.861-2.449-1.281-3.539-.964-2.497-2.031-4.954-2.864-7.491-.555-1.692-.849-3.474-1.203-5.227-.207-1.024.098-2.138.236-3.215l.303-.078 2.53 4.2c1.686 2.098 3.494 4.098 5.392 5.985 1.276 1.267 2.622 2.466 4.181 3.43l.375.603c-.126.399-.226.831-.402 1.237-.573 1.323-1.156 2.643-1.76 3.951-.342.74-.72 1.463-1.079 2.195l-.573-.041c-.5-.773-.934-1.623-1.517-2.334-.748-.913-1.598-1.741-2.339-2.667l-.399.009-.4-.018z" clip-rule="evenodd"/></svg>`,
  "REST API": `<svg viewBox="0 0 128 128" fill="currentColor"><path d="M64 8C35.3 8 12 25.4 12 47c0 13.4 8.6 25.3 22 33v25l20.6-13.8c3-.4 6.2-.7 9.4-.7 28.7 0 52-17.4 52-39S92.7 8 64 8zm0 70c-2.7 0-5.3-.2-7.8-.5L40 88V72.5C28.6 66.4 20 57.3 20 47c0-16.5 19.7-31 44-31s44 14.5 44 31S88.3 78 64 78z"/><circle cx="44" cy="47" r="6"/><circle cx="64" cy="47" r="6"/><circle cx="84" cy="47" r="6"/></svg>`,
  Python: `<svg viewBox="0 0 128 128"><linearGradient id="a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><linearGradient id="b" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>`,
  Java: `<svg viewBox="0 0 128 128"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C57.648 28.656 81.846 22.395 76.491 1.587z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg>`,
  Git: `<svg viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>`,
  "VS Code": `<svg viewBox="0 0 128 128"><path fill="#0065A9" d="M95.31 4.105l-29.2 27.1-23.12-17.63L32 18.545v90.8l10.99 4.97 23.12-17.63 29.2 27.11 20.69-9.67V13.775l-20.69-9.67zm0 28.04v63.64L59.56 63.955l35.75-31.81z"/><path fill="#007ACC" d="M32 109.345V18.545L66.11 63.955 32 109.345z"/><path fill="#1F9CF0" d="M66.11 63.955l29.2 31.835V32.145l-29.2 31.81z"/></svg>`,
  Postman: `<svg viewBox="0 0 128 128" fill="currentColor"><path d="M64 8C35.3 8 12 31.3 12 60s23.3 52 52 52 52-23.3 52-52S92.7 8 64 8zm0 96c-24.3 0-44-19.7-44-44s19.7-44 44-44 44 19.7 44 44-19.7 44-44 44zm-8-68l28 24-28 24V36z"/></svg>`,
  Bootstrap: `<svg viewBox="0 0 128 128"><path fill="#7952B3" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603H48v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM77.8 49.296c0-4.084-2.147-6.778-5.476-7.757-1.913-.564-4.416-.631-6.974-.631H48v18.146h17.763c3.235 0 5.924-.467 8.076-1.851 2.151-1.386 3.961-3.863 3.961-7.907z"/><path fill="#7952B3" d="M9.2 26.4v75.2h109.6V26.4H9.2zm82.921 52.788c-1.373 2.027-3.042 3.712-5.011 5.053-2.166 1.459-4.674 2.456-7.525 2.99-2.258.425-5.26.631-8.997.631H44V40.266h27.607c7.501 0 12.876 1.58 16.127 4.736 2.239 2.172 3.354 4.792 3.354 7.831 0 3.152-1.099 5.706-3.299 7.669-1.227 1.099-3.013 2.089-5.357 2.976 3.564.99 6.237 2.702 8.024 5.134 1.786 2.433 2.683 5.399 2.683 8.914-.002 3.152-.79 6.075-2.418 8.662z"/></svg>`,
};
