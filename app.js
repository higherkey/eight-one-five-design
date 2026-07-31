/* ═══════════════════════════════════════════════
   8:15 DESIGN — SITE ENGINE & DATA REGISTRY (app.js)
   Refined Business Landing Page Engine
   ═══════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────────
// 1. STATE MANAGER
// ─────────────────────────────────────────────────────────────────────
const SiteState = {
  theme: 'structural', // 'structural' (light) or 'authoritative' (dark)
  activeSection: 'home'
};

// ─────────────────────────────────────────────────────────────────────
// 2. LEAD ARCHITECT / STUDIO CREDENTIALS DATABASE
// ─────────────────────────────────────────────────────────────────────
const STUDIO_CREDENTIALS = {
  profile: {
    name: 'Isaac Ahlfield',
    role: 'Lead Software Architect & Product Owner',
    location: 'Broken Arrow, OK',
    email: 'isaac@eight1fivedesign.com',
    linkedin: 'https://www.linkedin.com/company/eight1fivedesign',
    summary: 'Lead Software Architect and Product Owner specializing in robust full-stack systems, high-efficiency workflow automation, and premium digital design. Architect of enterprise automation engines delivering over $13.75M in cumulative operational savings. Focused on engineering high-throughput pipelines, modernizing legacy systems into scalable REST APIs, and advocating for user agency and structural craft.'
  },
  experience: [
    {
      role: 'Founder',
      company: 'eight1five design LLC',
      location: 'Broken Arrow, OK',
      period: 'Jan 2026 - Present',
      details: [
        'Found and direct the software development and digital design studio, delivering high-performance web products, workflow automation pipelines, and custom technical integrations.',
        'Engineer scalable full-stack applications with C#/.NET Core, Java, and Angular, ensuring code quality standards are maintained via strict SonarQube checkpoints.',
        'Migrate small business websites from legacy platforms (e.g., WordPress) to Netlify, re-architecting systems to massively improve developer experience, optimize load performance, and elevate UI/UX.',
        'Develop the Board Game Hub project from the ground up, constructing a real-time multiplayer platform that leverages AI tools to drastically accelerate velocity while maintaining practical AI usage guidelines.'
      ]
    },
    {
      role: 'Computer Science Tutor & Career Coach',
      company: 'Freelance',
      location: 'Tulsa, OK',
      period: 'Sep 2025 - Present',
      details: [
        'Mentor 30+ developers and students in advanced software fundamentals, computer architecture, OOP, and complex regular expression engines.',
        'Onboard learners to production engineering workflows (CLI commands, Git version control, Docker containers, and full-stack C#/Java/SQL architectures).',
        'Instruct developers in ethical, agentic AI development practices, helping them architect responsible, high-performance systems.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'T.D. Williamson',
      location: 'Tulsa, OK',
      period: 'Oct 2025 - Dec 2025',
      details: [
        'Engineered responsive internal operations systems using Angular (TypeScript), .NET Core microservices, SignalR real-time hubs, and PostgreSQL.',
        'Established rigid code quality gates using SonarQube, successfully resolving technical debt and identifying complex system vulnerabilities.',
        'Containerized microservices using Docker and managed distributed orchestrations in Kubernetes with auto-scaling policies.',
        'Streamlined deployment lifecycles by structuring automated CI/CD pipelines in Azure DevOps.'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'UnitedHealth Group',
      location: 'Broken Arrow, OK (Remote)',
      period: 'Jan 2024 - Apr 2025',
      details: [
        'Served as backend development lead constructing C# process automation engines achieving 99% execution reliability.',
        'Maintained enterprise payment integrity systems processing over 10 million transactions monthly.',
        'Constructed high-speed data pipelines utilizing SQL, SSIS, Snowflake data warehouses, and Power BI dashboards, cutting operations reporting latency by 40%.',
        'Modernized virtualized desktop automations (40+ VM clusters) into clean, high-performance REST APIs, resulting in a 12x speedup.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'UnitedHealth Group',
      location: 'Broken Arrow, OK (Remote)',
      period: 'Jul 2022 - Jan 2024',
      details: [
        'Built and deployed robotic process automation (RPA) workflows utilizing UiPath REFramework.',
        'Coordinated cross-functional projects, acting as bridge between engineering and business stakeholders to ensure on-time delivery.',
        'Unified system documentations for over 100 enterprise GitHub repositories, reducing developer onboarding time.'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'UnitedHealth Group',
      location: 'Tulsa, OK',
      period: 'Apr 2019 - Jul 2022',
      details: [
        'Maintained transaction engines handling claims volume of 24 million files monthly.',
        'Constructed automated testing frameworks and validation scripts using Java, Selenium, HTML, CSS, and JavaScript.'
      ]
    },
    {
      role: 'Customer Service Advocate',
      company: 'UnitedHealth Group',
      location: 'Minneapolis, MN',
      period: 'Apr 2015 - Oct 2019',
      details: [
        'Collaborated on systemic process improvement initiatives, achieving $13.75M in cumulative annual operations savings.',
        'Founded an inter-departmental technical think tank to improve alignment, reducing problem-resolution times by 35% through knowledge sharing.'
      ]
    }
  ],
  education: {
    school: 'Northeastern State University',
    degree: 'Bachelor of Science in Computer Science',
    achievements: 'Cum Laude'
  },
  skills: [
    { name: 'C# / .NET Core', category: 'Backend' },
    { name: 'Java / OOP', category: 'Backend' },
    { name: 'Python / VBScript', category: 'Backend' },
    { name: 'Angular / RxJS', category: 'Frontend' },
    { name: 'TypeScript / JavaScript', category: 'Frontend' },
    { name: 'HTML5 & CSS3', category: 'Frontend' },
    { name: 'PostgreSQL / SQL Server', category: 'Database' },
    { name: 'Snowflake / SSIS', category: 'Database' },
    { name: 'Process Automation (RPA)', category: 'Automation' },
    { name: 'Docker / Kubernetes', category: 'Infrastructure' },
    { name: 'Azure DevOps CI/CD', category: 'Infrastructure' },
    { name: 'SonarQube / Code Quality', category: 'Quality' }
  ],
  certifications: [
    {
      name: 'Product Owner',
      issuer: 'Optum Tech University',
      year: '2024'
    },
    {
      name: 'Professional Scrum Product Owner (PSPO)',
      issuer: 'Scrum.org',
      year: 'In-progress'
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────
// 3. CASE STUDIES / PORTFOLIO DATABASE
// ─────────────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    id: 'kipu',
    title: 'Kipu',
    subtitle: 'Sensory Mini-Games & Knowledge Engine',
    category: 'Product / System',
    metric: '100%',
    metricLabel: 'Deterministic Safety',
    pillar: 'Wisdom',
    description: 'A premium, sensory-focused collection of tactile and educational mini-games for children. Built for rapid capture, structural clarity, and zero runtime overhead.',
    tech: ['TypeScript', 'Vite', 'Matter.js', 'Howler.js', 'Tailwind'],
    isPrivate: false,
    repoLink: 'https://github.com/higherkey/kipu',
    liveUrl: 'https://higherkey.github.io/kipu/',
    deploymentNote: null
  },
  {
    id: 'board-game-hub',
    title: 'Board Game Hub',
    subtitle: 'Real-Time Multiplayer Platform & Match Lobby',
    category: 'Interactive Platform',
    metric: 'Real-Time',
    metricLabel: 'Multiplayer Lobby Rooms',
    pillar: 'Work & Play',
    description: 'Interactive gaming and lobby platform built from the ground up for real-time multiplayer board game rooms (Table display vs. Hand phone controllers), automated score-tracking, and match orchestration.',
    tech: ['C#', '.NET Core', 'SignalR', 'Angular', 'PostgreSQL'],
    isPrivate: false,
    repoLink: 'https://github.com/higherkey/board-game-hub',
    liveUrl: 'https://board-game-hub-alpha.vercel.app/',
    deploymentNote: null
  },
  {
    id: 'choose-who',
    title: 'ChooseWho',
    subtitle: 'Decision Studio & Weighted Choice Engine',
    category: 'Web Application',
    metric: 'Instant',
    metricLabel: 'Group Decision Engine',
    pillar: 'Under the Sun',
    description: 'Fast, interactive first-player selector tool for board games to eliminate choice paralysis using multi-touch events, procedurally generated Web Audio synthesizers, and haptic feedback.',
    tech: ['JavaScript', 'Intuitive Design', 'Web Audio API', 'Haptic Feedback'],
    isPrivate: false,
    repoLink: 'https://github.com/higherkey/choosewho',
    liveUrl: 'https://higherkey.github.io/choosewho/',
    deploymentNote: null
  },
  {
    id: 'project-logos',
    title: 'Project Logos',
    subtitle: 'Virtual Tabletop (VTT) State Engine & Rules Interpreter',
    category: 'Studio Platform',
    metric: 'Deterministic AST',
    metricLabel: 'RPG Rules Engine',
    pillar: 'Subtle Nobility',
    description: 'Central orchestration engine and state vault for a virtual tabletop (VTT) platform featuring probabilistic semantic intent mapping and deterministic AST RPG rules adjudication.',
    tech: ['C# .NET 10', 'Blazor Server', 'Python / FastAPI', 'Redis Streams', 'MongoDB'],
    isPrivate: true,
    repoLink: null, // Private repository: MUST NOT BE LINKED
    liveUrl: null,
    deploymentNote: 'Private Repository · Deployment in Active Development (Planned Release: Q4 2026)'
  },
  {
    id: 'amys-bakes',
    title: "Amy's Bakes",
    subtitle: 'Artisanal Bakery Platform & Order System',
    category: 'Client Project',
    metric: null,
    metricLabel: null,
    pillar: 'Work & Play',
    description: 'Custom static web storefront and inquiry system featuring online batch reservation tracking, local ordering flows, and high-performance image optimization for an artisanal home bakery.',
    tech: ['Eleventy', 'Tailwind', 'Cloudflare Pages', 'Order Systems'],
    isPrivate: false,
    repoLink: 'https://github.com/higherkey/amys-bakes',
    liveUrl: 'https://higherkey.github.io/amys-bakes/',
    deploymentNote: null
  },
  {
    id: 'exagrow',
    title: 'Exagrow',
    subtitle: 'AI Consulting & Business Operations Platform',
    category: 'Client Project',
    metric: 'Sub-250ms',
    metricLabel: 'WordPress Migration Speed',
    pillar: 'Work & Play',
    description: 'Complete web application overhaul replacing a generic, mismatched WordPress site with a modern, high-performance web app hosted on Netlify/Cloudflare. Engineered with engaging typography and editorial rhythm designed to hold reader attention and drive consulting conversions.',
    tech: ['Netlify / Cloudflare', 'Custom Architecture', 'High-Converting UI'],
    isPrivate: false,
    repoLink: null,
    liveUrl: 'https://exagrow.com',
    deploymentNote: 'Live Client Deployment — Minneapolis–St. Paul AI Operations Firm'
  }
];

// ─────────────────────────────────────────────────────────────────────
// 4. INITIALIZER AND EVENT LISTENERS
// ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  hydrateResumeSection();
  hydratePortfolioSection();
});

// ─────────────────────────────────────────────────────────────────────
// 5. THEME SWITCHER CONTROLLER
// ─────────────────────────────────────────────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'structural';
  setTheme(savedTheme);

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const targetTheme = SiteState.theme === 'structural' ? 'authoritative' : 'structural';
      setTheme(targetTheme);
    });
  }
}

function setTheme(themeName) {
  SiteState.theme = themeName;
  localStorage.setItem('theme', themeName);
  
  const root = document.documentElement;
  
  if (themeName === 'authoritative') {
    root.classList.add('theme-dark');
  } else {
    root.classList.remove('theme-dark');
  }
}

// ─────────────────────────────────────────────────────────────────────
// 6. TABS NAVIGATION ENGINE
// ─────────────────────────────────────────────────────────────────────
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      switchSection(target);
    });
  });
}

function switchSection(sectionId) {
  if (SiteState.activeSection === sectionId) return;
  
  const currentSec = document.getElementById(`sec-${SiteState.activeSection}`);
  const targetSec = document.getElementById(`sec-${sectionId}`);
  
  if (!targetSec) return;
  
  // Update nav highlights
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.target === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Animation crossfade transition
  if (currentSec) {
    currentSec.style.opacity = '0';
    currentSec.style.transform = 'translateY(-12px)';
    
    setTimeout(() => {
      currentSec.classList.remove('active');
      
      targetSec.classList.add('active');
      if (targetSec.offsetHeight) { /* Force reflow */ }
      
      targetSec.style.opacity = '1';
      targetSec.style.transform = 'translateY(0)';
      SiteState.activeSection = sectionId;
    }, 200);
  } else {
    targetSec.classList.add('active');
    targetSec.style.opacity = '1';
    targetSec.style.transform = 'translateY(0)';
    SiteState.activeSection = sectionId;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────────────
// 7. DATA HYDRATION PIPELINES
// ─────────────────────────────────────────────────────────────────────
function hydrateResumeSection() {
  // Timeline
  const timeline = document.getElementById('resume-timeline');
  if (timeline) {
    timeline.innerHTML = '';
    STUDIO_CREDENTIALS.experience.forEach(exp => {
      const item = document.createElement('div');
      item.className = 'timeline-item relative pl-8 pb-8';
      
      const bullet = document.createElement('div');
      bullet.className = 'timeline-dot';
      
      const content = document.createElement('div');
      content.className = 'flex flex-col gap-1.5';
      
      const meta = document.createElement('div');
      meta.className = 'flex flex-col md:flex-row justify-between items-start md:items-center gap-1';
      
      const roleTitle = document.createElement('h4');
      roleTitle.className = 'font-bold text-base font-heading';
      roleTitle.textContent = exp.role;
      
      const duration = document.createElement('span');
      duration.className = 'text-[11px] font-mono uppercase bg-[var(--border)] px-2 py-0.5 rounded text-muted border border-[var(--border)]';
      duration.textContent = exp.period;
      
      meta.appendChild(roleTitle);
      meta.appendChild(duration);
      
      const companyInfo = document.createElement('div');
      companyInfo.className = 'text-xs font-semibold text-[var(--accent)]';
      companyInfo.textContent = `${exp.company} — ${exp.location}`;
      
      const detailsList = document.createElement('ul');
      detailsList.className = 'list-disc list-outside ml-4 mt-2 text-xs text-muted space-y-1.5 leading-relaxed';
      exp.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
      });
      
      content.appendChild(meta);
      content.appendChild(companyInfo);
      content.appendChild(detailsList);
      
      item.appendChild(bullet);
      item.appendChild(content);
      timeline.appendChild(item);
    });
  }

  // Skills Badge Grid
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = '';
    const categories = ['Backend', 'Frontend', 'Database', 'Automation', 'Infrastructure', 'Quality'];
    
    categories.forEach(cat => {
      const catGroup = document.createElement('div');
      catGroup.className = 'p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)] flex flex-col gap-2.5';
      
      const title = document.createElement('h4');
      title.className = 'font-bold font-heading text-xs uppercase tracking-wider text-[var(--accent)]';
      title.textContent = cat;
      
      const badgeBox = document.createElement('div');
      badgeBox.className = 'flex flex-wrap gap-1.5';
      
      const filtered = STUDIO_CREDENTIALS.skills.filter(s => s.category === cat);
      filtered.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'text-[10px] font-medium font-body bg-[var(--bg-main)] text-main border border-[var(--border)] px-2.5 py-1 rounded-full transition-colors duration-200 hover:border-[var(--accent)]';
        badge.textContent = skill.name;
        badgeBox.appendChild(badge);
      });
      
      catGroup.appendChild(title);
      catGroup.appendChild(badgeBox);
      skillsGrid.appendChild(catGroup);
    });
  }

  // Hydrate Certificates
  const certsList = document.getElementById('certs-list');
  if (certsList) {
    certsList.innerHTML = '';
    STUDIO_CREDENTIALS.certifications.forEach(cert => {
      const li = document.createElement('div');
      li.className = 'flex items-center gap-3 p-3 border border-[var(--border)] rounded bg-[var(--bg-card)] text-xs';
      li.innerHTML = `
        <svg class="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <div class="flex-grow">
          <strong class="text-main block">${cert.name}</strong>
          <span class="text-muted block text-[10px]">${cert.issuer} • ${cert.year}</span>
        </div>
      `;
      certsList.appendChild(li);
    });
  }
}

function hydratePortfolioSection() {
  const bentoGrid = document.getElementById('portfolio-bento-grid');
  if (bentoGrid) {
    bentoGrid.innerHTML = '';
    CASE_STUDIES.forEach((proj, idx) => {
      const colSpan = (idx === 0 || idx === 4) ? 'lg:col-span-2' : 'lg:col-span-1';
      
      const card = document.createElement('div');
      card.className = `metric-box flex flex-col justify-between ${colSpan} cursor-pointer`;
      
      const topBlock = document.createElement('div');
      topBlock.className = 'flex flex-col gap-3';
      
      const headerRow = document.createElement('div');
      headerRow.className = 'flex justify-between items-start gap-2';
      
      const badge = document.createElement('span');
      badge.className = 'text-[9px] uppercase font-bold tracking-widest text-[var(--accent)] border border-[var(--border)] bg-[var(--bg-main)] px-2 py-0.5 rounded';
      badge.textContent = proj.pillar;
      
      const flexSpace = document.createElement('div');
      flexSpace.appendChild(badge);
      
      const bigMetric = document.createElement('div');
      bigMetric.className = 'font-heading text-4xl font-extrabold tracking-tight text-main';
      bigMetric.textContent = proj.metric;
      
      const metricLbl = document.createElement('span');
      metricLbl.className = 'text-[10px] font-mono uppercase text-muted tracking-wider block mt-1';
      metricLbl.textContent = proj.metricLabel;
      
      headerRow.appendChild(bigMetric);
      headerRow.appendChild(flexSpace);
      
      const title = document.createElement('h3');
      title.className = 'font-bold font-heading text-base tracking-tight text-main mt-2';
      title.textContent = proj.title;
      
      const desc = document.createElement('p');
      desc.className = 'text-xs text-muted leading-relaxed mt-1.5';
      desc.textContent = proj.description;
      
      topBlock.appendChild(headerRow);
      topBlock.appendChild(metricLbl);
      topBlock.appendChild(title);
      topBlock.appendChild(desc);
      
      const bottomBlock = document.createElement('div');
      bottomBlock.className = 'flex flex-wrap gap-1 mt-5 pt-3 border-t border-[var(--border)]';
      
      proj.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'text-[9px] font-mono bg-[var(--border)] text-muted px-2 py-0.5 rounded';
        span.textContent = t;
        bottomBlock.appendChild(span);
      });
      
      card.appendChild(topBlock);

      // Deployment link or Planned Deployment Note
      const linkRow = document.createElement('div');
      linkRow.className = 'mt-3 text-xs flex items-center gap-2';
      
      if (proj.liveUrl) {
        const link = document.createElement('a');
        link.href = proj.liveUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'font-semibold text-xs text-[var(--accent)] hover:underline flex items-center gap-1';
        link.innerHTML = `View Live Deployment &rarr;`;
        linkRow.appendChild(link);
      } else if (proj.deploymentNote) {
        const note = document.createElement('span');
        note.className = 'text-[11px] font-mono text-muted italic bg-[var(--bg-main)] px-2 py-0.5 border border-[var(--border)] rounded';
        note.textContent = proj.deploymentNote;
        linkRow.appendChild(note);
      }

      topBlock.appendChild(linkRow);

      card.appendChild(bottomBlock);
      bentoGrid.appendChild(card);
    });
  }
}
