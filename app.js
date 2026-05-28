/* ═══════════════════════════════════════════════
   8:15 DESIGN — SITE ENGINE & DATA REGISTRY (app.js)
   Unified Core: State Controller, Resume timelines,
   Bento metrics database, and 90 aspect-marks system.
   ═══════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────────
// 1. STATE MANAGER
// ─────────────────────────────────────────────────────────────────────
const SiteState = {
  theme: 'structural', // 'structural' (light) or 'authoritative' (dark)
  activeSection: 'home',
  carouselSloganIdx: 0,
  carouselMarkIdx: 0,
  carouselWordmarkIdx: 0,
  carouselMockupIdx: 0,
  carouselDirectiveIdx: 0,
  autoplayIntervalId: null,
  activeFilter: 'all'
};

// ─────────────────────────────────────────────────────────────────────
// 2. ISAAC AHLFIELD RESUME DATABASE
// ─────────────────────────────────────────────────────────────────────
const RESUME_DATA = {
  profile: {
    name: 'Isaac Ahlfield',
    role: 'Software Engineer & Product Owner',
    location: 'Broken Arrow, OK',
    email: 'isaac.ahlfield@gmail.com',
    linkedin: 'https://www.linkedin.com/in/isaac-ahlfield',
    github: 'https://github.com/higherkey',
    portfolio: 'https://higherkey.github.io/portfolio/',
    summary: 'Software Engineer and Product Owner with expertise in full-stack development and automation, delivering scalable web applications and APIs. Led development of automation solutions generating over $500k in annual savings and improved bot performance by more than twelvefold. Passionate about building lovable, high-performance systems that blend technical excellence with user empathy.'
  },
  experience: [
    {
      role: 'Computer Science Tutor & Career Coach',
      company: 'Freelance',
      location: 'Tulsa, OK',
      period: 'Sep 2025 - Present',
      details: [
        'Mentor 30+ students on technical fundamentals such as computer architecture, OOP, sorting algorithms, logic, and regular expressions, resulting in higher test scores.',
        'Onboard learners to professional workflows using command-line interfaces, Git version control, Docker, and full-stack development (C#, Java, SQL) to deploy projects independently.',
        'Instruct students on ethical AI practices, covering prompt engineering and agentic IDEs such as Antigravity to create responsible applications.',
        'Guide the transition to professional engineering with targeted interview coaching, resume feedback, and personalized strategies for neurodivergent students.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'T.D. Williamson',
      location: 'Tulsa, OK',
      period: 'Oct 2025 - Dec 2025',
      details: [
        'Developed internal web applications by writing clean, functional full-stack code with Angular (TypeScript), .NET Core, RxJS, NgRx, SignalR, and PostgreSQL, enabling faster internal workflows.',
        'Maintained high code standards by taking the lead on applying SonarQube to identify and fix vulnerabilities, quality issues, and technical debt.',
        'Implemented Docker containerization and Kubernetes orchestration for microservices, configuring health checks and auto-scaling policies.',
        'Utilized Azure DevOps to manage task tracking and deployments within the CI/CD pipeline, shortening release cycles.',
        'Expanded role into stakeholder management to define product requirements, boosting stakeholder visibility and satisfaction.'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'UnitedHealth Group',
      location: 'Broken Arrow, OK (Remote)',
      period: 'Jan 2024 - Apr 2025',
      details: [
        'Served as lead backend developer on a three-person team to build and implement Robotic Process Automation (RPA) solutions using C#, achieving 99% reliability rates.',
        'Developed and maintained C# automations for health insurance claims Payment Integrity with usage rates of 10+ million per month.',
        'Built and maintained data pipelines and reports using SQL, SSIS/SSRS, Snowflake, Power BI, and Excel, delivering daily claim-operations dashboards that shortened reporting time by 40%.',
        'Took product ownership of front-end automations and managed 40+ virtual machines, maintaining 98% uptime.',
        'Converted legacy front-end automations to highly efficient REST APIs, increasing performance by more than 12x.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'UnitedHealth Group',
      location: 'Broken Arrow, OK (Remote)',
      period: 'Jul 2022 - Jan 2024',
      details: [
        'Built, tested, and deployed RPA solutions using UiPath\'s REFramework and Modern Design Experience for attended and unattended robots, lowering processing errors.',
        'Utilized UiPath Orchestrator to manage deployments, schedule bots, and monitor performance across multiple environments.',
        'Served in cross-functional roles as Software Engineer, Business Analyst, Test Engineer, and Project Manager to support end-to-end delivery.',
        'Identified and implemented a solution to update documentation for 100+ GitHub repositories, resulting in fast onboarding for new developers.',
        'Led project to deliver $176k in annual savings, scaling to $500k+ annual savings within a year.'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'UnitedHealth Group',
      location: 'Tulsa, OK',
      period: 'Apr 2019 - Jul 2022',
      details: [
        'Developed and maintained software automations for claims processing with usage rates of 24 million per month.',
        'Developed automated testing frameworks and data-processing scripts using Java, Selenium, Excel, VBScript, Macro Express Pro, HTML, CSS, and JavaScript.',
        'Contributed to the migration from Internet Explorer to Chromium-based browser automation by training 80% of staff and creating comprehensive technical documentation.'
      ]
    },
    {
      role: 'Customer Service Advocate & Process Improver',
      company: 'UnitedHealth Group',
      location: 'Minneapolis, MN',
      period: 'Apr 2015 - Oct 2019',
      details: [
        'Exceeded performance metrics consistently over three years, earning 25+ performance recognitions.',
        'Joined a process improvement team resulting in $13.75M in annual savings.',
        'Founded a cross-team think tank that brought developers and frontline staff together, improving collaboration and reducing issue-resolution time through knowledge-sharing.'
      ]
    },
    {
      role: 'Director of Client Relations',
      company: 'Aspen Creek Wealth Strategies',
      location: 'Tulsa, OK (Remote)',
      period: 'Jun 2019 - Oct 2019',
      details: [
        'Built and managed relationships with high-value financial-planning and retirement clients by conducting strategy reviews.',
        'Coordinated client data and financial planning by integrating the eMoney platform with a customized CRM, reducing manual data entry errors.',
        'Led software onboarding and training for eMoney and custom CRMs, cutting support tickets.'
      ]
    }
  ],
  education: {
    school: 'Northeastern State University',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Broken Arrow, OK',
    achievements: 'Cum Laude'
  },
  certifications: [
    { name: 'Product Owner', issuer: 'Optum Tech University', year: '2024' },
    { name: 'Professional Scrum Product Owner (PSPO I)', issuer: 'Scrum.org', year: 'In-progress, planned 2026' }
  ],
  skills: [
    { name: 'C#', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: '.NET Core', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML & CSS', category: 'Frontend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MS SQL Server', category: 'Database' },
    { name: 'Snowflake', category: 'Database' },
    { name: 'Process Automation', category: 'Automation' },
    { name: 'UiPath REFramework', category: 'Automation' },
    { name: 'Selenium', category: 'Automation' },
    { name: 'PowerShell', category: 'Tools' },
    { name: 'Docker', category: 'Tools' },
    { name: 'Kubernetes', category: 'Tools' },
    { name: 'CI/CD (DevOps)', category: 'Tools' },
    { name: 'SonarQube / SonarCloud', category: 'Tools' },
    { name: 'Agile Product Ownership', category: 'Philosophy' }
  ]
};

// ─────────────────────────────────────────────────────────────────────
// 3. PORTFOLIO HIGH-IMPACT METRICS
// ─────────────────────────────────────────────────────────────────────
const PORTFOLIO_PROJECTS = [
  {
    title: 'Enterprise Process Automation Engine',
    metric: '$500K+',
    metricLabel: 'Annual Direct Savings',
    pillar: 'Work & Play',
    description: 'Led the development of a suite of Robotic Process Automation (RPA) bots and backend C# pipelines for UnitedHealth Group claimsPayment integrity. Standardized bot execution using UiPath REFramework, scaling throughput to handle millions of transactions with a 99% success rate. Replaced error-prone manual workloads, giving operations teams breathing room and significant cost savings.',
    tech: ['C#', '.NET Core', 'UiPath', 'SQL Server', 'Orchestrator']
  },
  {
    title: 'Cross-Functional Collaboration Think Tank',
    metric: '$13.75M',
    metricLabel: 'Accumulated Process Savings',
    pillar: 'Wisdom',
    description: 'Founded and facilitated a collaborative enterprise think tank bridging developers and frontline customer experience agents. Directed efforts using MS Visio mapping and Agile customer journey diagrams to eliminate system redundancies. Streamlined billing and support flows to achieve double-digit operational time reductions.',
    tech: ['Agile Methodologies', 'Workflow Optimization', 'Visio', 'SQL Pipelines']
  },
  {
    title: 'High-Throughput Claims Pipeline',
    metric: '24M+',
    metricLabel: 'Claims Processed Monthly',
    pillar: 'Under the Sun',
    description: 'Designed and deployed multi-threaded claim processing workflows capable of processing up to 24 million files monthly. Reconstructed legacy file transfer operations into high-throughput microservices using Java and automated validation frameworks, reducing execution latency from hours to seconds.',
    tech: ['Java', 'Selenium', 'Multithreading', 'VBScript', 'HTML/CSS']
  },
  {
    title: 'Legacy Automations to REST APIs Conversion',
    metric: '12x',
    metricLabel: 'Performance Improvement',
    pillar: 'Subtle Royalty',
    description: 'Spearheaded an architectural transition converting legacy, UI-based front-end automations into clean, highly responsive REST APIs. Reduced system dependencies and eliminated virtual machine overhead while improving runtime efficiency twelvefold, delivering immediate responsiveness to user dashboards.',
    tech: ['C#', 'REST APIs', 'PostgreSQL', 'Docker', 'VM Management']
  },
  {
    title: 'T.D. Williamson Core Internal Apps',
    metric: '100+',
    metricLabel: 'Repositories Documented & Unified',
    pillar: 'Essential Void',
    description: 'Refactored internal operations apps using Angular, .NET Core, and SignalR. Introduced automated unit testing and containerized microservices deployments with Kubernetes. Built out clean, minimal interfaces that let business intelligence tools breathe, while standardizing SonarQube quality gates across 100+ active repositories.',
    tech: ['Angular', '.NET Core', 'SignalR', 'Docker', 'Kubernetes', 'SonarQube']
  }
];

// ─────────────────────────────────────────────────────────────────────
// 4. PROCEDURAL ASPECT-MARKS ENGINE (90 MARKS TOTAL)
// ─────────────────────────────────────────────────────────────────────
const BRAND_PILLARS = ["Work & Play", "Wisdom", "Under the Sun", "Subtle Royalty", "Essential Void"];
const MARK_PREFIXES = ["Solar", "Cosmic", "Horizon", "Zenith", "Orbital", "Stark", "Minimal", "Grid", "Tectonic", "Matrix", "Harmony", "Symmetric", "Synthesis", "Kinetic", "Oscillator", "Neural", "Terminal", "Sovereign", "Breathing", "Linear", "Void", "Dynamic", "Structural", "Architectural", "Logarithmic"];
const MARK_SUFFIXES = ["Zenith", "Portal", "Ray", "Axis", "Containment", "Breathing", "Intersect", "Duality", "Vessel", "Lattice", "Conduit", "Structure", "Flow", "Field", "Vector", "Node", "Cycle", "Alignment", "Restoration", "Discipline", "Compass", "Oscillation", "System", "Anchor", "Helix"];

function generateDesignLineage(index, category, pillar) {
  const geometries = {
    "Sun": ["solar ray geometry", "concentric orbital rings", "overlapping solar horizons", "radiating sunburst masks", "concentric solar pathways"],
    "Void": ["stark containment grids", "cropped isometric blocks", "architectural containment matrices", "subtractive geometric fields", "minimalist wireframe boundaries"],
    "Both": ["hybrid radial-grid meshes", "intersecting solar-orthogonal pathways", "integrated grid-orbit coordinates", "concentric-matrix alignments", "harmonious radial structures"],
    "Wildcard": ["isometric logic planes", "raw coordinate systems", "biological loop networks", "sine-wave oscillations", "digital circuit tracks"]
  };
  
  const balances = {
    "Work & Play": "diligent operational labor and the restorative cycle of immersive play",
    "Wisdom": "inquisitive logic, system boundaries, and deep operational humility",
    "Under the Sun": "absolute daylight transparency, shared experience, and grounded architecture",
    "Subtle Royalty": "quiet user sovereignty, premium craftsmanship, and elegant information spacing",
    "Essential Void": "logical essentialism, generous margins, and psychological breathing room"
  };
  
  const sources = {
    "Sun": "intersecting vector light fields",
    "Void": "subtractive solid geometry masks",
    "Both": "intersecting orbital-grid pathways",
    "Wildcard": "fluid kinetic waveforms and technical wire coordinates"
  };
  
  const geo = geometries[category][index % 5];
  const bal = balances[pillar];
  const src = sources[category];
  
  return `This mark utilizes a custom ${geo} mapped to seed coordinates #0${index + 1}. It represents the ${pillar} brand pillar by exploring the balance of ${bal}. Derived from the Ecclesiastes 8:15 genesis, its negative space typography allows the boundaries of 8, 1, and 5 to emerge naturally from the underlying ${src}.`;
}

function buildSunAspectSVG(index, uniqueId) {
  const rayCount = 8 + (index % 6) * 4;
  let rays = '';
  for (let i = 0; i < rayCount; i++) {
    const angle = (i * 2 * Math.PI) / rayCount;
    const x2 = 100 + Math.cos(angle) * 85;
    const y2 = 100 + Math.sin(angle) * 85;
    rays += `<line x1="100" y1="100" x2="${x2}" y2="${y2}" stroke="var(--accent)" stroke-width="1.5" stroke-opacity="0.6" />`;
  }
  
  const orbitCount = 2 + (index % 3);
  let orbits = '';
  for (let i = 0; i < orbitCount; i++) {
    const r = 35 + i * 18;
    orbits += `<circle cx="100" cy="100" r="${r}" stroke="var(--text-main)" stroke-width="1" stroke-dasharray="4 4" stroke-opacity="0.4" fill="none" />`;
  }

  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-sun-${uniqueId}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.3" />
          <stop offset="100%" stop-color="var(--bg-main)" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="75" fill="url(#grad-sun-${uniqueId})" />
      ${rays}
      ${orbits}
      <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent)" stroke-width="3" />
      ${getNegativeSpace815(15)}
    </svg>
  `;
}

function buildVoidAspectSVG(index, uniqueId) {
  const gridSize = 12 + (index % 4) * 4;
  let gridLines = '';
  for (let i = gridSize; i < 200; i += gridSize) {
    gridLines += `<line x1="${i}" y1="0" x2="${i}" y2="200" stroke="var(--text-main)" stroke-width="0.75" stroke-opacity="0.15" />`;
    gridLines += `<line x1="0" y1="${i}" x2="200" y2="${i}" stroke="var(--text-main)" stroke-width="0.75" stroke-opacity="0.15" />`;
  }
  
  const blockWidth = 60 + (index % 3) * 20;
  const blockHeight = 80 + (index % 2) * 20;
  const rx = 10 + (index % 2) * 10;
  
  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      ${gridLines}
      <rect x="${100 - blockWidth/2}" y="${100 - blockHeight/2}" width="${blockWidth}" height="${blockHeight}" rx="${rx}" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="2.5" />
      <rect x="25" y="25" width="150" height="150" fill="none" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="3 6" stroke-opacity="0.3" />
      ${getNegativeSpace815(16)}
    </svg>
  `;
}

function buildBothAspectSVG(index, uniqueId) {
  const gridSize = 16 + (index % 3) * 6;
  let grids = '';
  for (let i = gridSize; i < 200; i += gridSize) {
    grids += `<line x1="${i}" y1="15" x2="${i}" y2="185" stroke="var(--text-main)" stroke-width="0.5" stroke-opacity="0.2" />`;
    grids += `<line x1="15" y1="${i}" x2="185" y2="${i}" stroke="var(--text-main)" stroke-width="0.5" stroke-opacity="0.2" />`;
  }

  const spiralArms = 4 + (index % 4);
  let spirals = '';
  for (let i = 0; i < spiralArms; i++) {
    const r = 25 + i * 15;
    spirals += `<circle cx="100" cy="100" r="${r}" stroke="var(--accent)" stroke-width="1.5" stroke-opacity="0.75" fill="none" />`;
  }

  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="170" height="170" fill="none" stroke="var(--border)" stroke-width="1.5" />
      ${grids}
      ${spirals}
      <circle cx="100" cy="100" r="10" fill="var(--bg-main)" stroke="var(--accent)" stroke-width="2" />
      ${getNegativeSpace815(14)}
    </svg>
  `;
}

function buildWildcardAspectSVG(index, uniqueId) {
  const style = index % 3;
  let geometry = '';
  
  if (style === 0) {
    geometry += `<path d="M 20 50 L 80 50 L 100 70 L 100 130 L 120 150 L 180 150" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" />`;
    geometry += `<path d="M 20 150 L 80 150 L 100 130 L 100 70 L 120 50 L 180 50" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="4 4" stroke-linecap="round" stroke-opacity="0.5" />`;
    geometry += `<circle cx="20" cy="50" r="4" fill="var(--accent)" />`;
    geometry += `<circle cx="180" cy="150" r="4" fill="var(--accent)" />`;
    geometry += `<circle cx="20" cy="150" r="4" fill="var(--text-main)" />`;
    geometry += `<circle cx="180" cy="50" r="4" fill="var(--text-main)" />`;
  } else if (style === 1) {
    let points1 = [];
    let points2 = [];
    for (let x = 15; x <= 185; x += 5) {
      const y1 = 100 + Math.sin((x + index * 10) * 0.05) * 45;
      const y2 = 100 + Math.cos((x + index * 15) * 0.04) * 35;
      points1.push(`${x},${y1}`);
      points2.push(`${x},${y2}`);
    }
    geometry += `<polyline points="${points1.join(' ')}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" />`;
    geometry += `<polyline points="${points2.join(' ')}" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-opacity="0.4" stroke-linecap="round" />`;
  } else {
    geometry += `
      <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-opacity="0.3" />
      <polygon points="100,40 150,70 150,130 100,160 50,130 50,70" fill="none" stroke="var(--accent)" stroke-width="2" />
      <polygon points="100,60 130,80 130,120 100,140 70,120 70,80" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="2 4" stroke-opacity="0.6" />
    `;
  }

  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      ${geometry}
      ${getNegativeSpace815(13)}
    </svg>
  `;
}

function getNegativeSpace815(strokeWidth = 14) {
  return `
    <g class="transition-all duration-300">
      <circle cx="62" cy="72" r="21" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" />
      <circle cx="62" cy="122" r="27" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" />
      <path d="M 102 52 L 102 148 M 91 63 L 102 52" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 136 52 L 168 52 L 138 92 A 25 25 0 1 1 138 142" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  `;
}

// Populate the Marks database
const MARK_LIBRARY = [];
for (let i = 0; i < 90; i++) {
  let category = "Sun";
  let titlePrefix = MARK_PREFIXES[i % MARK_PREFIXES.length];
  let titleSuffix = MARK_SUFFIXES[(i * 7) % MARK_SUFFIXES.length];
  let idStr = `sun-${String(i+1).padStart(2, '0')}`;
  
  if (i >= 25 && i < 50) {
    category = "Void";
    idStr = `void-${String(i-24).padStart(2, '0')}`;
  } else if (i >= 50 && i < 75) {
    category = "Both";
    idStr = `both-${String(i-49).padStart(2, '0')}`;
  } else if (i >= 75) {
    category = "Wildcard";
    idStr = `wildcard-${String(i-74).padStart(2, '0')}`;
  }
  
  const title = `${titlePrefix} ${titleSuffix}`;
  const pillar = BRAND_PILLARS[i % BRAND_PILLARS.length];
  const lineage = generateDesignLineage(i, category, pillar);
  
  MARK_LIBRARY.push({
    index: i,
    id: idStr,
    category: category,
    title: title,
    pillar: pillar,
    lineage: lineage,
    renderSVG: (function(idx, cat, unique) {
      return function() {
        if (cat === "Sun") return buildSunAspectSVG(idx, unique);
        if (cat === "Void") return buildVoidAspectSVG(idx, unique);
        if (cat === "Both") return buildBothAspectSVG(idx, unique);
        return buildWildcardAspectSVG(idx, unique);
      }
    })(i, category, idStr)
  });
}

// ─────────────────────────────────────────────────────────────────────
// 5. OTHER CAROUSEL DATABASES
// ─────────────────────────────────────────────────────────────────────
const SLOGANS = [
  "Wisdom in Work. Joy in the Toil.",
  "So I recommend having fun... along with all the hard work God gives you under the sun.",
  "Strict engineering discipline bound seamlessly to creative play.",
  "We reject the tech narrative of endless hyper-growth at the expense of human health.",
  "High-performance operational systems matched with deep, immersive play.",
  "Logical essentialism and psychological breathing room.",
  "Operating in the absolute daylight of shared experience and structural transparency.",
  "Software that acts not as a controller, but as a quiet, powerful, sovereign advisor.",
  "A classic, balanced cycle of high-impact creation followed by satisfying celebration.",
  "What we leave out is as critically important as what we build.",
  "Diligent labor is a gift, but it is incomplete without the restorative cycle of play.",
  "True technical wisdom lies in recognizing the boundaries of our digital architectures."
];

const WORDMARKS = [
  { text: "[ 8 : 1 5 ]", desc: "Spaced Technical Code" },
  { text: "eight one five design", desc: "Lowercase Human-Focused Narrative" },
  { text: "EIGHT ONE FIVE", desc: "Bold Geometric Typeface" },
  { text: "&lt;EightOneFive /&gt;", desc: "Code-Based Syntax Format" },
  { text: "815_studio_", desc: "Terminal Console Style" },
  { text: "8 • 15", desc: "Split Ligature Format" },
  { text: "0x815", desc: "Hexadecimal System Format" },
  { text: "8:15 :: work:play", desc: "Mathematical Analogy Ratio" },
  { text: "[8][1][5]", desc: "Bracketed Grid Container" }
];

const MOCKUPS = [
  {
    name: "Real-Time Data Widget",
    render: () => `
      <div class="flex flex-col gap-3 text-xs w-full">
        <div class="flex justify-between items-center border-b border-[var(--border)] pb-2">
          <span class="font-bold uppercase text-[10px] tracking-wider text-[var(--accent)] font-heading">System Latency Tracker</span>
          <span class="px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)] font-mono text-[9px]">ONLINE</span>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="p-2 border border-[var(--border)] rounded bg-[var(--bg-card)] text-center">
            <span class="text-[9px] text-muted block">Throughput</span>
            <span class="font-mono font-bold text-sm tracking-tight">81.5 req/s</span>
          </div>
          <div class="p-2 border border-[var(--border)] rounded bg-[var(--bg-card)] text-center">
            <span class="text-[9px] text-muted block">Latency</span>
            <span class="font-mono font-bold text-sm tracking-tight text-[var(--accent)]">12.6 ms</span>
          </div>
          <div class="p-2 border border-[var(--border)] rounded bg-[var(--bg-card)] text-center">
            <span class="text-[9px] text-muted block">Play Cycles</span>
            <span class="font-mono font-bold text-sm tracking-tight">1,618 hr</span>
          </div>
        </div>
        <div class="flex justify-between items-center bg-[var(--bg-card)] border border-[var(--border)] p-2 rounded text-[9px] font-mono mt-1">
          <span class="px-1.5 py-0.5 rounded border border-[var(--accent)] bg-[var(--bg-main)] text-[var(--accent)] font-bold">WORK_START</span>
          <span class="text-muted">──►</span>
          <span class="px-1.5 py-0.5 rounded bg-[var(--border)]">LOGIC_GATE</span>
          <span class="text-muted">──►</span>
          <span class="px-1.5 py-0.5 rounded border border-green-600 text-green-600 bg-green-95">CELEBRATE</span>
        </div>
      </div>
    `
  },
  {
    name: "Educational Dashboard",
    render: () => `
      <div class="flex flex-col gap-3 text-xs w-full">
        <div class="flex justify-between items-center">
          <div>
            <span class="text-[9px] text-muted font-mono uppercase tracking-wider block">Course Active</span>
            <h4 class="font-bold text-sm font-heading">Architectural Symmetry & Void Spacing II</h4>
          </div>
          <span class="font-bold text-sm font-mono text-[var(--accent)]">76%</span>
        </div>
        
        <div class="w-full bg-[var(--border)] h-2 rounded-full overflow-hidden">
          <div class="bg-[var(--accent)] h-full rounded-full transition-all duration-500" style="width: 76%"></div>
        </div>
        
        <div class="flex justify-between items-center text-[10px] text-muted mt-1">
          <span>Next Topic: <strong>Duality of Human Existence</strong></span>
          <span class="font-mono">815 XP Remaining</span>
        </div>
      </div>
    `
  },
  {
    name: "Game System HUD",
    render: () => `
      <div class="flex flex-col gap-3 text-xs w-full">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-ping"></div>
            <span class="font-bold font-heading">Sovereign_User_01</span>
          </div>
          <span class="font-mono font-bold text-[var(--accent)]">LEVEL 15</span>
        </div>
        
        <div class="flex flex-col gap-1.5 bg-[var(--bg-card)] border border-[var(--border)] p-2 rounded">
          <div class="flex justify-between items-center text-[10px]">
            <span>Diligent Labor (Work)</span>
            <span class="font-mono font-bold">85 / 100</span>
          </div>
          <div class="w-full bg-[var(--bg-main)] h-1.5 rounded-full overflow-hidden">
            <div class="bg-blue-500 h-full rounded-full" style="width: 85%"></div>
          </div>
          
          <div class="flex justify-between items-center text-[10px] mt-1">
            <span>Satisfying Play (Joy)</span>
            <span class="font-mono font-bold text-[var(--accent)]">92 / 100</span>
          </div>
          <div class="w-full bg-[var(--bg-main)] h-1.5 rounded-full overflow-hidden">
            <div class="bg-[var(--accent)] h-full rounded-full" style="width: 92%"></div>
          </div>
        </div>
      </div>
    `
  }
];

const DIRECTIVES = [
  {
    mission: "Cultivate high-performance systems with inquisitive logic and operational humility.",
    vision: "Set the global standard for premium, non-addictive, sovereign user interfaces that celebrate agency."
  },
  {
    mission: "Embrace essential void to reduce cognitive overload and let critical information/processes breathe.",
    vision: "Restore a balanced, healthy human cycle of high-impact creation followed by rich celebration."
  },
  {
    mission: "Design software that operates in the daylight of shared experience and absolute transparency.",
    vision: "A world where technology serves human wellness, digital workspaces respect agency, and work is followed by rest."
  }
];

// ─────────────────────────────────────────────────────────────────────
// 6. INITIALIZER AND EVENT LISTENERS
// ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupNavigation();
  hydrateResumeSection();
  hydratePortfolioSection();
  initPlayground();
});

// ─────────────────────────────────────────────────────────────────────
// 7. THEME SWITCHER CONTROLLER
// ─────────────────────────────────────────────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'structural';
  setTheme(savedTheme);
  
  // Theme toggle listener
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
  const logoText = document.getElementById('header-logo-text');
  
  if (themeName === 'authoritative') {
    root.classList.add('theme-dark');
    if (logoText) logoText.textContent = 'Grounded Wisdom: Authoritative';
  } else {
    root.classList.remove('theme-dark');
    if (logoText) logoText.textContent = 'Grounded Wisdom: Structural';
  }
  
  // Re-render playground marks/mockups to reflect immediate color variations
  updateMarkCarousel();
  updateMockupCarousel();
}

// ─────────────────────────────────────────────────────────────────────
// 8. TABS SECTION ENGINE
// ─────────────────────────────────────────────────────────────────────
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
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
    if (link.getAttribute('data-target') === sectionId) {
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
      // Trigger browser reflow
      targetSec.offsetHeight;
      
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

  // Scroll to top of section with offset
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────────────
// 9. RESUME DYNAMIC DATA HYDRATION
// ─────────────────────────────────────────────────────────────────────
function hydrateResumeSection() {
  // 1. Hydrate Timeline
  const timeline = document.getElementById('resume-timeline');
  if (timeline) {
    timeline.innerHTML = '';
    RESUME_DATA.experience.forEach(exp => {
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

  // 2. Hydrate Skills Badge Grid
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = '';
    
    // Group skills by category for nice layout
    const categories = ['Backend', 'Frontend', 'Database', 'Automation', 'Tools', 'Philosophy'];
    
    categories.forEach(cat => {
      const catGroup = document.createElement('div');
      catGroup.className = 'p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)] flex flex-col gap-2.5';
      
      const title = document.createElement('h4');
      title.className = 'font-bold font-heading text-xs uppercase tracking-wider text-[var(--accent)]';
      title.textContent = cat;
      
      const badgeBox = document.createElement('div');
      badgeBox.className = 'flex flex-wrap gap-1.5';
      
      const filtered = RESUME_DATA.skills.filter(s => s.category === cat);
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

  // 3. Hydrate Certificates
  const certsList = document.getElementById('certs-list');
  if (certsList) {
    certsList.innerHTML = '';
    RESUME_DATA.certifications.forEach(cert => {
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

// ─────────────────────────────────────────────────────────────────────
// 10. PORTFOLIO HIGH-IMPACT BENTO GRID HYDRATION
// ─────────────────────────────────────────────────────────────────────
function hydratePortfolioSection() {
  const bentoGrid = document.getElementById('portfolio-bento-grid');
  if (bentoGrid) {
    bentoGrid.innerHTML = '';
    PORTFOLIO_PROJECTS.forEach((proj, idx) => {
      const colSpan = (idx === 0 || idx === 4) ? 'lg:col-span-2' : 'lg:col-span-1';
      
      const card = document.createElement('div');
      card.className = `metric-box flex flex-col justify-between ${colSpan} cursor-pointer`;
      
      // Metric & Header Block
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
      
      // Footer Tech Stack Block
      const bottomBlock = document.createElement('div');
      bottomBlock.className = 'flex flex-wrap gap-1 mt-5 pt-3 border-t border-[var(--border)]';
      
      proj.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'text-[9px] font-mono bg-[var(--border)] text-muted px-2 py-0.5 rounded';
        span.textContent = t;
        bottomBlock.appendChild(span);
      });
      
      card.appendChild(topBlock);
      card.appendChild(bottomBlock);
      
      bentoGrid.appendChild(card);
    });
  }
}

// ─────────────────────────────────────────────────────────────────────
// 11. PLAYGROUND ENGINE (MIGRATED CORES)
// ─────────────────────────────────────────────────────────────────────
function initPlayground() {
  renderBentoGrid();
  updateSloganCarousel();
  updateMarkCarousel();
  updateWordmarkCarousel();
  updateMockupCarousel();
  updateDirectiveCarousel();
  
  // Set up listeners for the carousels inside index.html
  setupPlaygroundListeners();
}

function setupPlaygroundListeners() {
  // Slogans
  document.getElementById('btn-prev-slogan')?.addEventListener('click', prevSlogan);
  document.getElementById('btn-next-slogan')?.addEventListener('click', nextSlogan);

  // Wordmarks
  document.getElementById('btn-prev-wordmark')?.addEventListener('click', prevWordmark);
  document.getElementById('btn-next-wordmark')?.addEventListener('click', nextWordmark);

  // Directives
  document.getElementById('btn-prev-directive')?.addEventListener('click', prevDirective);
  document.getElementById('btn-next-directive')?.addEventListener('click', nextDirective);

  // Mockups
  document.getElementById('btn-prev-mockup')?.addEventListener('click', prevMockup);
  document.getElementById('btn-next-mockup')?.addEventListener('click', nextMockup);

  // Marks Explorer
  document.getElementById('btn-prev-mark')?.addEventListener('click', prevMark);
  document.getElementById('btn-next-mark')?.addEventListener('click', nextMark);
  document.getElementById('btn-random-mark')?.addEventListener('click', randomizeMark);
  document.getElementById('autoplay-btn')?.addEventListener('click', toggleAutoplay);

  // Filters
  const filters = ['all', 'sun', 'void', 'both', 'wildcard'];
  filters.forEach(f => {
    document.getElementById(`filter-${f}`)?.addEventListener('click', () => filterLibrary(f));
  });
}

function updateSloganCarousel() {
  const sloganText = document.getElementById("slogan-text");
  const sloganIndex = document.getElementById("slogan-index");
  if (!sloganText) return;
  
  sloganText.style.opacity = '0';
  setTimeout(() => {
    sloganText.innerHTML = SLOGANS[SiteState.carouselSloganIdx];
    if (sloganIndex) {
      sloganIndex.textContent = `${String(SiteState.carouselSloganIdx + 1).padStart(2, '0')} / ${String(SLOGANS.length).padStart(2, '0')}`;
    }
    sloganText.style.opacity = '1';
  }, 150);
}
function nextSlogan() {
  SiteState.carouselSloganIdx = (SiteState.carouselSloganIdx + 1) % SLOGANS.length;
  updateSloganCarousel();
}
function prevSlogan() {
  SiteState.carouselSloganIdx = (SiteState.carouselSloganIdx - 1 + SLOGANS.length) % SLOGANS.length;
  updateSloganCarousel();
}

function updateWordmarkCarousel() {
  const displayEl = document.getElementById("wordmark-display");
  const labelEl = document.getElementById("wordmark-label");
  const indexEl = document.getElementById("wordmark-index");
  if (!displayEl) return;
  
  displayEl.style.opacity = '0';
  setTimeout(() => {
    const item = WORDMARKS[SiteState.carouselWordmarkIdx];
    displayEl.innerHTML = item.text;
    if (labelEl) labelEl.innerHTML = item.desc;
    if (indexEl) {
      indexEl.textContent = `${String(SiteState.carouselWordmarkIdx + 1).padStart(2, '0')} / ${String(WORDMARKS.length).padStart(2, '0')}`;
    }
    displayEl.style.opacity = '1';
  }, 150);
}
function nextWordmark() {
  SiteState.carouselWordmarkIdx = (SiteState.carouselWordmarkIdx + 1) % WORDMARKS.length;
  updateWordmarkCarousel();
}
function prevWordmark() {
  SiteState.carouselWordmarkIdx = (SiteState.carouselWordmarkIdx - 1 + WORDMARKS.length) % WORDMARKS.length;
  updateWordmarkCarousel();
}

function updateDirectiveCarousel() {
  const missionEl = document.getElementById("directive-mission");
  const visionEl = document.getElementById("directive-vision");
  const indexEl = document.getElementById("directive-index");
  if (!missionEl) return;
  
  missionEl.style.opacity = '0';
  if (visionEl) visionEl.style.opacity = '0';
  
  setTimeout(() => {
    const item = DIRECTIVES[SiteState.carouselDirectiveIdx];
    missionEl.innerHTML = item.mission;
    if (visionEl) visionEl.innerHTML = item.vision;
    if (indexEl) {
      indexEl.textContent = `${String(SiteState.carouselDirectiveIdx + 1).padStart(2, '0')} / ${String(DIRECTIVES.length).padStart(2, '0')}`;
    }
    missionEl.style.opacity = '1';
    if (visionEl) visionEl.style.opacity = '1';
  }, 150);
}
function nextDirective() {
  SiteState.carouselDirectiveIdx = (SiteState.carouselDirectiveIdx + 1) % DIRECTIVES.length;
  updateDirectiveCarousel();
}
function prevDirective() {
  SiteState.carouselDirectiveIdx = (SiteState.carouselDirectiveIdx - 1 + DIRECTIVES.length) % DIRECTIVES.length;
  updateDirectiveCarousel();
}

function updateMockupCarousel() {
  const nameBadge = document.getElementById("mockup-name-badge");
  const indexEl = document.getElementById("mockup-index");
  const contentEl = document.getElementById("mockup-content-container");
  if (!contentEl) return;
  
  const item = MOCKUPS[SiteState.carouselMockupIdx];
  if (nameBadge) nameBadge.textContent = item.name;
  if (indexEl) {
    indexEl.textContent = `${String(SiteState.carouselMockupIdx + 1).padStart(2, '0')} / ${String(MOCKUPS.length).padStart(2, '0')}`;
  }
  contentEl.innerHTML = item.render();
}
function nextMockup() {
  SiteState.carouselMockupIdx = (SiteState.carouselMockupIdx + 1) % MOCKUPS.length;
  updateMockupCarousel();
}
function prevMockup() {
  SiteState.carouselMockupIdx = (SiteState.carouselMockupIdx - 1 + MOCKUPS.length) % MOCKUPS.length;
  updateMockupCarousel();
}

function updateMarkCarousel() {
  const mark = MARK_LIBRARY[SiteState.carouselMarkIdx];
  const container = document.getElementById("explorer-svg-container");
  if (!container) return;
  
  const catBadge = document.getElementById("mark-cat-badge");
  if (catBadge) catBadge.textContent = `${mark.category} Aspect`;
  
  const idxText = document.getElementById("explorer-index-text");
  if (idxText) idxText.textContent = `Mark ${String(mark.index + 1).padStart(2, '0')} / 90`;
  
  container.innerHTML = mark.renderSVG();
  
  const title = document.getElementById("mark-title");
  if (title) title.textContent = mark.title;
  
  const tagsContainer = document.getElementById("mark-alignment-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    const pillars = [mark.pillar];
    const secondPillarIdx = (mark.index * 3 + 1) % BRAND_PILLARS.length;
    if (BRAND_PILLARS[secondPillarIdx] !== mark.pillar) {
      pillars.push(BRAND_PILLARS[secondPillarIdx]);
    }
    
    pillars.forEach(pil => {
      const badge = document.createElement("span");
      badge.className = "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[var(--accent)] text-[var(--bg-main)] border border-[var(--border)] font-heading";
      badge.textContent = pil;
      tagsContainer.appendChild(badge);
    });
  }
  
  const lineage = document.getElementById("mark-lineage");
  if (lineage) lineage.textContent = mark.lineage;
}
function nextMark() {
  SiteState.carouselMarkIdx = (SiteState.carouselMarkIdx + 1) % MARK_LIBRARY.length;
  updateMarkCarousel();
}
function prevMark() {
  SiteState.carouselMarkIdx = (SiteState.carouselMarkIdx - 1 + MARK_LIBRARY.length) % MARK_LIBRARY.length;
  updateMarkCarousel();
}
function randomizeMark() {
  SiteState.carouselMarkIdx = Math.floor(Math.random() * MARK_LIBRARY.length);
  updateMarkCarousel();
}

function toggleAutoplay() {
  const btn = document.getElementById("autoplay-btn");
  const lbl = document.getElementById("autoplay-label");
  if (!btn) return;
  
  if (SiteState.autoplayIntervalId) {
    clearInterval(SiteState.autoplayIntervalId);
    SiteState.autoplayIntervalId = null;
    if (lbl) lbl.textContent = "Auto-Play";
    btn.classList.remove("border-[var(--accent)]", "text-[var(--accent)]");
  } else {
    SiteState.autoplayIntervalId = setInterval(nextMark, 4000);
    if (lbl) lbl.textContent = "Pause Play";
    btn.classList.add("border-[var(--accent)]", "text-[var(--accent)]");
  }
}

function renderBentoGrid() {
  const grid = document.getElementById("library-bento-grid");
  if (!grid) return;
  grid.innerHTML = "";
  
  MARK_LIBRARY.forEach(m => {
    const card = document.createElement("div");
    card.id = `gm-${m.index}`;
    card.className = "card-interactive aspect-square rounded-lg p-1.5 flex flex-col justify-center items-center relative group";
    card.setAttribute("aria-label", `Load mark: ${m.title}`);
    card.onclick = () => loadMark(m.index);
    card.innerHTML = `
      <div class="w-full h-full max-w-[52px] max-h-[52px] pointer-events-none">${m.renderSVG()}</div>
      <span class="absolute bottom-0.5 right-1 font-mono text-[7px] opacity-40 group-hover:opacity-100 transition-opacity duration-200" style="color:var(--text-muted)">#${String(m.index+1).padStart(2,"0")}</span>`;
    grid.appendChild(card);
  });
}

function filterLibrary(cat) {
  SiteState.activeFilter = cat;
  const FILTERS = ["all","sun","void","both","wildcard"];
  
  FILTERS.forEach(f => {
    const btn = document.getElementById(`filter-${f}`);
    if (btn) {
      if (f === cat) {
        btn.style.backgroundColor = "var(--accent)";
        btn.style.color = "var(--bg-main)";
        btn.style.borderColor = "var(--accent)";
      } else {
        btn.style.backgroundColor = "transparent";
        btn.style.color = "var(--text-main)";
        btn.style.borderColor = "var(--border)";
      }
    }
  });
  
  MARK_LIBRARY.forEach(m => {
    const el = document.getElementById(`gm-${m.index}`);
    if (!el) return;
    const show = cat === "all" || m.category.toLowerCase() === cat;
    if (show) {
      el.style.display = "";
      setTimeout(() => { el.style.opacity = "1"; el.style.transform = ""; }, 30);
    } else {
      el.style.opacity = "0"; el.style.transform = "scale(0.8)";
      setTimeout(() => { el.style.display = "none"; }, 200);
    }
  });
}

function loadMark(index) {
  SiteState.carouselMarkIdx = index;
  updateMarkCarousel();
  const container = document.getElementById("explorer-svg-container");
  if (!container) return;
  
  const article = container.closest("article");
  if (article) {
    article.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  const panel = container.parentElement;
  if (panel) {
    panel.style.borderColor = "var(--accent)";
    setTimeout(() => { panel.style.borderColor = ""; }, 2200);
  }
}
