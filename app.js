// 1. THEMES DATABASE
const THEMES = {
  "grounded-wisdom": {
    name: "Grounded Wisdom",
    fontHeading: "Space Grotesk",
    fontBody: "Inter",
    variations: {
      "structural": {
        name: "Structural (Light)",
        bg: "#FDFBF7",
        bgCard: "#FFFFFF",
        text: "#1A1A1A",
        textMuted: "#555555",
        accent: "#D97706",
        accentHover: "#B45309",
        border: "#EFEBE4"
      },
      "focus": {
        name: "Focus (Dim)",
        bg: "#F4F1EA",
        bgCard: "#EFEBE4",
        text: "#2D3748",
        textMuted: "#4A5568",
        accent: "#8A8070",
        accentHover: "#72695C",
        border: "#E2DDD3"
      },
      "authoritative": {
        name: "Authoritative (Dark)",
        bg: "#0B0F19",
        bgCard: "#111827",
        text: "#F8FAFC",
        textMuted: "#94A3B8",
        accent: "#D4AF7A",
        accentHover: "#C59B63",
        border: "#1F2937"
      }
    }
  },
  "luminous-flow": {
    name: "Luminous Flow",
    fontHeading: "Outfit",
    fontBody: "Nunito",
    variations: {
      "daybreak": {
        name: "Daybreak",
        bg: "#FFFDF5",
        bgCard: "#FFFBEB",
        text: "#111827",
        textMuted: "#4B5563",
        accent: "#F43F5E",
        accentHover: "#E11D48",
        border: "#FEF3C7"
      },
      "clear-sky": {
        name: "Clear Sky",
        bg: "#F0F9FF",
        bgCard: "#E0F2FE",
        text: "#0F172A",
        textMuted: "#334155",
        accent: "#0284C7",
        accentHover: "#0369A1",
        border: "#BAE6FD"
      },
      "twilight": {
        name: "Twilight",
        bg: "#0F0C1B",
        bgCard: "#1E1B4B",
        text: "#F5F3FF",
        textMuted: "#A5B4FC",
        accent: "#8B5CF6",
        accentHover: "#7C3AED",
        border: "#2E2A66"
      }
    }
  },
  "kinetic-pulse": {
    name: "Kinetic Pulse",
    fontHeading: "Syne",
    fontBody: "Montserrat",
    variations: {
      "neon-cyber": {
        name: "Neon Cyber",
        bg: "#09090B",
        bgCard: "#18181B",
        text: "#F4F4F5",
        textMuted: "#A1A1AA",
        accent: "#10B981",
        accentHover: "#059669",
        border: "#27272A"
      },
      "high-voltage": {
        name: "High Voltage",
        bg: "#020617",
        bgCard: "#0F172A",
        text: "#F8FAFC",
        textMuted: "#64748B",
        accent: "#EAB308",
        accentHover: "#CA8A04",
        border: "#1E293B"
      }
    }
  },
  "blank-canvas": {
    name: "Blank Canvas",
    fontHeading: "Lexend",
    fontBody: "Manrope",
    variations: {
      "pure-mono": {
        name: "Pure Mono",
        bg: "#FFFFFF",
        bgCard: "#F9FAFB",
        text: "#000000",
        textMuted: "#4B5563",
        accent: "#6B7280",
        accentHover: "#374151",
        border: "#E5E7EB"
      },
      "dark-carbon": {
        name: "Dark Carbon",
        bg: "#121212",
        bgCard: "#1E1E1E",
        text: "#F3F4F6",
        textMuted: "#9CA3AF",
        accent: "#9CA3AF",
        accentHover: "#D1D5DB",
        border: "#2D2D2D"
      }
    }
  },
  "organic-logic": {
    name: "Organic Logic",
    fontHeading: "Space Grotesk",
    fontBody: "Manrope",
    variations: {
      "forest-moss": {
        name: "Forest Moss",
        bg: "#F2FDF5",
        bgCard: "#E6F4EA",
        text: "#14532D",
        textMuted: "#2F6A3E",
        accent: "#16A34A",
        accentHover: "#15803D",
        border: "#C2E7C9"
      },
      "desert-clay": {
        name: "Desert Clay",
        bg: "#FDF8F5",
        bgCard: "#FBEFE8",
        text: "#451A03",
        textMuted: "#78350F",
        accent: "#EA580C",
        accentHover: "#C2410C",
        border: "#F7D2C4"
      }
    }
  },
  "wildcards": {
    name: "Wildcards",
    fontHeading: "Syne",
    fontBody: "Nunito",
    variations: {
      "synthwave": {
        name: "Synthwave",
        bg: "#18042C",
        bgCard: "#2D0A4E",
        text: "#FFF1F2",
        textMuted: "#F472B6",
        accent: "#FF007F",
        accentHover: "#D80064",
        border: "#4E127E"
      },
      "glitch-matrix": {
        name: "Glitch Matrix",
        bg: "#050B05",
        bgCard: "#0E1C0E",
        text: "#D1F2D1",
        textMuted: "#4CAF50",
        accent: "#00FF00",
        accentHover: "#39FF14",
        border: "#1C351C"
      }
    }
  }
};

// 2. PROCEDURAL BRAND DIRECTIVES DATA (90 MARKS TOTAL)
const BRAND_PILLARS = ["Work & Play", "Wisdom", "Under the Sun", "Subtle Royalty", "Void Space"];
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
    "Void Space": "logical essentialism, generous margins, and psychological breathing room"
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

// SVG Geometry Builders (dynamic & theme responsive - utilizing CSS variables)
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
      <!-- Central Sun Core -->
      <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent)" stroke-width="3" />
      
      <!-- Negative Space "815" Layer (Section 4 compliant) -->
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
      <!-- Stark boundary block -->
      <rect x="${100 - blockWidth/2}" y="${100 - blockHeight/2}" width="${blockWidth}" height="${blockHeight}" rx="${rx}" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="2.5" />
      
      <!-- Additional wireframe containment -->
      <rect x="25" y="25" width="150" height="150" fill="none" stroke="var(--text-main)" stroke-width="0.5" stroke-dasharray="3 6" stroke-opacity="0.3" />
      
      <!-- Negative Space "815" Layer -->
      ${getNegativeSpace815(16)}
    </svg>
  `;
}

function buildBothAspectSVG(index, uniqueId) {
  // 25 Overlapping Symmetry marks: Hybrid radial arrays + grid patterns
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
      <!-- Intersection Nodes -->
      <circle cx="100" cy="100" r="10" fill="var(--bg-main)" stroke="var(--accent)" stroke-width="2" />
      
      <!-- Negative Space "815" Layer -->
      ${getNegativeSpace815(14)}
    </svg>
  `;
}

function buildWildcardAspectSVG(index, uniqueId) {
  const style = index % 3;
  let geometry = '';
  
  if (style === 0) {
    // Digital Circuit / Node tracks
    geometry += `<path d="M 20 50 L 80 50 L 100 70 L 100 130 L 120 150 L 180 150" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" />`;
    geometry += `<path d="M 20 150 L 80 150 L 100 130 L 100 70 L 120 50 L 180 50" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="4 4" stroke-linecap="round" stroke-opacity="0.5" />`;
    geometry += `<circle cx="20" cy="50" r="4" fill="var(--accent)" />`;
    geometry += `<circle cx="180" cy="150" r="4" fill="var(--accent)" />`;
    geometry += `<circle cx="20" cy="150" r="4" fill="var(--text-main)" />`;
    geometry += `<circle cx="180" cy="50" r="4" fill="var(--text-main)" />`;
  } else if (style === 1) {
    // Sine-Wave / Oscillations
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
    // Nested isometric loops / Hexagons
    geometry += `
      <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="var(--text-main)" stroke-width="1" stroke-opacity="0.3" />
      <polygon points="100,40 150,70 150,130 100,160 50,130 50,70" fill="none" stroke="var(--accent)" stroke-width="2" />
      <polygon points="100,60 130,80 130,120 100,140 70,120 70,80" fill="none" stroke="var(--text-main)" stroke-width="1.5" stroke-dasharray="2 4" stroke-opacity="0.6" />
    `;
  }

  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      ${geometry}
      <!-- Negative Space "815" Layer -->
      ${getNegativeSpace815(13)}
    </svg>
  `;
}

function getNegativeSpace815(strokeWidth = 14) {
  // SVG geometry overlay drawn in --bg-main to carve out the digits 8, 1, 5 dynamically!
  return `
    <g id="negative-space-group" class="transition-all duration-300">
      <!-- "8" - left digit, two circular subtractive frames -->
      <circle cx="62" cy="72" r="21" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" />
      <circle cx="62" cy="122" r="27" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" />
      
      <!-- "1" - middle vertical column structure -->
      <path d="M 102 52 L 102 148 M 91 63 L 102 52" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />
      
      <!-- "5" - right digit, modern brutalist grid segment -->
      <path d="M 136 52 L 168 52 L 138 92 A 25 25 0 1 1 138 142" fill="none" stroke="var(--bg-main)" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  `;
}

// Populate Library array (90 items)
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

// 3. OTHER CAROUSEL DATABASES
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
  { text: "eight fifteen design", desc: "Lowercase Human-Focused Narrative" },
  { text: "EIGHT FIFTEEN", desc: "Bold Geometric Typeface" },
  { text: "&lt;EightFifteen /&gt;", desc: "Code-Based Syntax Format" },
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
      <div class="flex flex-col gap-3 font-body text-xs w-full text-[var(--text-main)]">
        <div class="flex justify-between items-center border-b border-[var(--border)] pb-2">
          <span class="font-bold font-heading uppercase text-[10px] tracking-wider text-[var(--accent)]">System Latency Tracker</span>
          <span class="px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)] font-mono text-[9px]">ONLINE</span>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="p-2 border border-[var(--border)] rounded bg-[var(--bg-card)] text-center">
            <span class="text-[9px] text-[var(--text-muted)] block">Throughput</span>
            <span class="font-mono font-bold text-sm tracking-tight">81.5 req/s</span>
          </div>
          <div class="p-2 border border-[var(--border)] rounded bg-[var(--bg-card)] text-center">
            <span class="text-[9px] text-[var(--text-muted)] block">Latency</span>
            <span class="font-mono font-bold text-sm tracking-tight text-[var(--accent)]">12.6 ms</span>
          </div>
          <div class="p-2 border border-[var(--border)] rounded bg-[var(--bg-card)] text-center">
            <span class="text-[9px] text-[var(--text-muted)] block">Play Cycles</span>
            <span class="font-mono font-bold text-sm tracking-tight">1,618 hr</span>
          </div>
        </div>
        <!-- Node pipeline schematic -->
        <div class="flex justify-between items-center bg-[var(--bg-card)] border border-[var(--border)] p-2 rounded text-[9px] font-mono mt-1">
          <span class="px-1.5 py-0.5 rounded border border-[var(--accent)] bg-[var(--bg-main)] text-[var(--accent)] font-bold">WORK_START</span>
          <span class="text-[var(--text-muted)]">──►</span>
          <span class="px-1.5 py-0.5 rounded bg-[var(--border)]">LOGIC_GATE</span>
          <span class="text-[var(--text-muted)]">──►</span>
          <span class="px-1.5 py-0.5 rounded border border-green-600 text-green-600 bg-green-50">CELEBRATE</span>
        </div>
      </div>
    `
  },
  {
    name: "Educational Dashboard",
    render: () => `
      <div class="flex flex-col gap-3 font-body text-xs w-full text-[var(--text-main)]">
        <div class="flex justify-between items-center">
          <div>
            <span class="text-[9px] text-[var(--text-muted)] font-mono uppercase tracking-wider block">Course Active</span>
            <h4 class="font-bold font-heading text-sm">Architectural Symmetry & Void Spacing II</h4>
          </div>
          <span class="font-bold text-sm font-mono text-[var(--accent)]">76%</span>
        </div>
        
        <!-- Progress Bar -->
        <div class="w-full bg-[var(--border)] h-2 rounded-full overflow-hidden">
          <div class="bg-[var(--accent)] h-full rounded-full transition-all duration-500" style="width: 76%"></div>
        </div>
        
        <div class="flex justify-between items-center text-[10px] text-[var(--text-muted)] mt-1">
          <span>Next Topic: <strong class="text-[var(--text-main)]">Duality of Human Existence</strong></span>
          <span class="font-mono">815 XP Remaining</span>
        </div>
      </div>
    `
  },
  {
    name: "Game System HUD",
    render: () => `
      <div class="flex flex-col gap-3 font-body text-xs w-full text-[var(--text-main)]">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-ping"></div>
            <span class="font-bold font-heading">Sovereign_User_01</span>
          </div>
          <span class="font-mono font-bold text-[var(--accent)]">LEVEL 15</span>
        </div>
        
        <!-- Character stats -->
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
    mission: "Embrace void space to reduce cognitive overload and let critical information/processes breathe.",
    vision: "Restore a balanced, healthy human cycle of high-impact creation followed by rich celebration."
  },
  {
    mission: "Design software that operates in the daylight of shared experience and absolute transparency.",
    vision: "A world where technology serves human wellness, where digital workspaces respect user agency, and work is followed by satisfying rest."
  }
];


// 4. MAIN STATE CONTROLLER
let state = {
  activeIdentity: "grounded-wisdom",
  activeVariation: "structural",
  carouselSloganIdx: 0,
  carouselMarkIdx: 0,
  carouselWordmarkIdx: 0,
  carouselMockupIdx: 0,
  carouselDirectiveIdx: 0,
  autoplayIntervalId: null,
  activeFilter: "all"
};

// Initialize entire system
window.addEventListener("DOMContentLoaded", () => {
  // 1. Initial theme load
  changeTheme("grounded-wisdom", "structural");
  
  // 2. Render all 90 marks into bento grid
  renderBentoGrid();
  
  // 3. Render initial carousel items
  updateSloganCarousel();
  updateMarkCarousel();
  updateWordmarkCarousel();
  updateMockupCarousel();
  updateDirectiveCarousel();
});

// 5. THEME SWITCHER CONTROLLER
function changeTheme(id, variation) {
  state.activeIdentity = id;
  state.activeVariation = variation;
  
  const themeData = THEMES[id];
  const varData = themeData.variations[variation];
  
  // Update DOM CSS Root custom properties dynamically
  const styleEl = document.getElementById("theme-vars-style");
  styleEl.innerHTML = `
    :root {
      --bg-main: ${varData.bg};
      --bg-card: ${varData.bgCard};
      --text-main: ${varData.text};
      --text-muted: ${varData.textMuted};
      --accent: ${varData.accent};
      --accent-hover: ${varData.accentHover};
      --border: ${varData.border};
      --font-heading: '${themeData.fontHeading}', sans-serif;
      --font-body: '${themeData.fontBody}', sans-serif;
      
      /* Spacing & Layout */
      --space-gutter: 1.618rem;
      --space-section: 2.618rem;
      --radius: 0.809rem;
      --shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
      
      /* Interactive States */
      --scale-hover: 1.02;
      --scale-click: 0.98;
      --transition-speed: 250ms;
      --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
    }
  `;

  // Update text in sidebar info panel
  document.getElementById("active-id-info").textContent = themeData.name;
  document.getElementById("active-var-info").textContent = varData.name;
  document.getElementById("active-heading-font").textContent = themeData.fontHeading;
  document.getElementById("active-body-font").textContent = themeData.fontBody;

  // Update interactive styling on sidebar buttons (visual active state indicator)
  document.querySelectorAll("aside button").forEach(btn => {
    btn.classList.remove("border-[var(--accent)]", "bg-[var(--bg-main)]", "text-[var(--accent)]", "font-bold");
    btn.classList.add("border-[var(--border)]", "bg-[var(--bg-card)]", "font-medium");
  });
  const activeBtn = document.getElementById(`btn-${id}-${variation}`);
  if (activeBtn) {
    activeBtn.classList.remove("border-[var(--border)]", "bg-[var(--bg-card)]", "font-medium");
    activeBtn.classList.add("border-[var(--accent)]", "bg-[var(--bg-main)]", "text-[var(--accent)]", "font-bold");
  }

  // Live redraw of current Explorer mark and mockups to ensure CSS variable bindings cascade instantly
  updateMarkCarousel();
  updateMockupCarousel();
}

// 6. PROCEDURAL CAROUSEL DRAW PIPELINES

// Slogans Carousel
function updateSloganCarousel() {
  const sloganText = document.getElementById("slogan-text");
  const sloganIndex = document.getElementById("slogan-index");
  sloganText.style.opacity = 0;
  setTimeout(() => {
    sloganText.innerHTML = SLOGANS[state.carouselSloganIdx];
    sloganIndex.textContent = `${String(state.carouselSloganIdx + 1).padStart(2, '0')} / ${String(SLOGANS.length).padStart(2, '0')}`;
    sloganText.style.opacity = 1;
  }, 150);
}
function nextSlogan() {
  state.carouselSloganIdx = (state.carouselSloganIdx + 1) % SLOGANS.length;
  updateSloganCarousel();
}
function prevSlogan() {
  state.carouselSloganIdx = (state.carouselSloganIdx - 1 + SLOGANS.length) % SLOGANS.length;
  updateSloganCarousel();
}

// Wordmarks Carousel
function updateWordmarkCarousel() {
  const displayEl = document.getElementById("wordmark-display");
  const labelEl = document.getElementById("wordmark-label");
  const indexEl = document.getElementById("wordmark-index");
  displayEl.style.opacity = 0;
  setTimeout(() => {
    const item = WORDMARKS[state.carouselWordmarkIdx];
    displayEl.innerHTML = item.text;
    labelEl.innerHTML = item.desc;
    indexEl.textContent = `${String(state.carouselWordmarkIdx + 1).padStart(2, '0')} / ${String(WORDMARKS.length).padStart(2, '0')}`;
    displayEl.style.opacity = 1;
  }, 150);
}
function nextWordmark() {
  state.carouselWordmarkIdx = (state.carouselWordmarkIdx + 1) % WORDMARKS.length;
  updateWordmarkCarousel();
}
function prevWordmark() {
  state.carouselWordmarkIdx = (state.carouselWordmarkIdx - 1 + WORDMARKS.length) % WORDMARKS.length;
  updateWordmarkCarousel();
}

// Strategic Directives Carousel
function updateDirectiveCarousel() {
  const missionEl = document.getElementById("directive-mission");
  const visionEl = document.getElementById("directive-vision");
  const indexEl = document.getElementById("directive-index");
  
  missionEl.style.opacity = 0;
  visionEl.style.opacity = 0;
  
  setTimeout(() => {
    const item = DIRECTIVES[state.carouselDirectiveIdx];
    missionEl.innerHTML = item.mission;
    visionEl.innerHTML = item.vision;
    indexEl.textContent = `${String(state.carouselDirectiveIdx + 1).padStart(2, '0')} / ${String(DIRECTIVES.length).padStart(2, '0')}`;
    
    missionEl.style.opacity = 1;
    visionEl.style.opacity = 1;
  }, 150);
}
function nextDirective() {
  state.carouselDirectiveIdx = (state.carouselDirectiveIdx + 1) % DIRECTIVES.length;
  updateDirectiveCarousel();
}
function prevDirective() {
  state.carouselDirectiveIdx = (state.carouselDirectiveIdx - 1 + DIRECTIVES.length) % DIRECTIVES.length;
  updateDirectiveCarousel();
}

// UI Mockups Carousel
function updateMockupCarousel() {
  const nameBadge = document.getElementById("mockup-name-badge");
  const indexEl = document.getElementById("mockup-index");
  const contentEl = document.getElementById("mockup-content-container");
  
  const item = MOCKUPS[state.carouselMockupIdx];
  nameBadge.textContent = item.name;
  indexEl.textContent = `${String(state.carouselMockupIdx + 1).padStart(2, '0')} / ${String(MOCKUPS.length).padStart(2, '0')}`;
  contentEl.innerHTML = item.render();
}
function nextMockup() {
  state.carouselMockupIdx = (state.carouselMockupIdx + 1) % MOCKUPS.length;
  updateMockupCarousel();
}
function prevMockup() {
  state.carouselMockupIdx = (state.carouselMockupIdx - 1 + MOCKUPS.length) % MOCKUPS.length;
  updateMockupCarousel();
}

// Primary Mark Explorer Carousel (Carousel 2)
function updateMarkCarousel() {
  const mark = MARK_LIBRARY[state.carouselMarkIdx];
  
  // Update badge category label
  const catBadge = document.getElementById("mark-cat-badge");
  catBadge.textContent = `${mark.category} Aspect`;
  
  // Update index counter
  document.getElementById("explorer-index-text").textContent = `Mark ${String(mark.index + 1).padStart(2, '0')} / 90`;
  
  // Inject SVG into left container
  const container = document.getElementById("explorer-svg-container");
  container.innerHTML = mark.renderSVG();
  
  // Update Title
  document.getElementById("mark-title").textContent = mark.title;
  
  // Update Pillar Value Alignment Badges (Section 6 & 7 compliant)
  const tagsContainer = document.getElementById("mark-alignment-tags");
  tagsContainer.innerHTML = '';
  
  // Select 1 primary and 1 secondary value alignment for variation
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
  
  // Update Design Lineage
  document.getElementById("mark-lineage").textContent = mark.lineage;
}

function nextMark() {
  state.carouselMarkIdx = (state.carouselMarkIdx + 1) % MARK_LIBRARY.length;
  updateMarkCarousel();
}

function prevMark() {
  state.carouselMarkIdx = (state.carouselMarkIdx - 1 + MARK_LIBRARY.length) % MARK_LIBRARY.length;
  updateMarkCarousel();
}

function randomizeMark() {
  state.carouselMarkIdx = Math.floor(Math.random() * MARK_LIBRARY.length);
  updateMarkCarousel();
}

function toggleAutoplay() {
  const btn = document.getElementById("autoplay-btn");
  if (state.autoplayIntervalId) {
    // Stop autoplay
    clearInterval(state.autoplayIntervalId);
    state.autoplayIntervalId = null;
    btn.querySelector("span").textContent = "Auto-Play";
    btn.classList.remove("border-[var(--accent)]", "text-[var(--accent)]");
  } else {
    // Start autoplay
    state.autoplayIntervalId = setInterval(() => {
      nextMark();
    }, 4000);
    btn.querySelector("span").textContent = "Pause Play";
    btn.classList.add("border-[var(--accent)]", "text-[var(--accent)]");
  }
}

// 7. BENTO-GRID LIBRARY CONTROLLER
function renderBentoGrid() {
  const grid = document.getElementById("library-bento-grid");
  grid.innerHTML = '';
  
  MARK_LIBRARY.forEach(mark => {
    const card = document.createElement("div");
    card.id = `grid-mark-${mark.index}`;
    card.className = "aspect-square rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-2 flex justify-center items-center cursor-pointer scale-hover relative group";
    card.onclick = () => loadMarkIntoExplorer(mark.index);
    
    // Grid item micro-details on hover
    card.innerHTML = `
      <div class="w-full h-full max-w-[50px] max-h-[50px] flex justify-center items-center text-[var(--accent)] transition-all duration-300">
        ${mark.renderSVG()}
      </div>
      <!-- Popover index indicator -->
      <div class="absolute bottom-1 right-1 font-mono text-[8px] text-[var(--text-muted)] opacity-50 group-hover:opacity-100 transition-opacity duration-200">
        #${String(mark.index + 1).padStart(2, '0')}
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function filterLibrary(category) {
  state.activeFilter = category;
  
  // Update tab active states visually
  const filters = ["all", "sun", "void", "both", "wildcard"];
  filters.forEach(filter => {
    const btn = document.getElementById(`filter-${filter}`);
    btn.className = "text-[10px] uppercase font-bold py-1.5 px-3 custom-radius tracking-wider transition-all duration-200 text-[var(--text-main)] hover:bg-[var(--border)] btn-action";
  });
  
  const activeBtn = document.getElementById(`filter-${category}`);
  activeBtn.className = "text-[10px] uppercase font-bold py-1.5 px-3 custom-radius tracking-wider transition-all duration-200 bg-[var(--accent)] text-[var(--bg-main)] btn-action";
  
  // Show/Hide Grid elements beautifully with scaling scale-0 vs scale-100 animations
  MARK_LIBRARY.forEach(mark => {
    const item = document.getElementById(`grid-mark-${mark.index}`);
    const matches = (category === "all") || (mark.category.toLowerCase() === category);
    
    if (matches) {
      item.classList.remove("hidden");
      setTimeout(() => {
        item.classList.remove("scale-0", "opacity-0");
        item.classList.add("scale-100", "opacity-100");
      }, 50);
    } else {
      item.classList.add("scale-0", "opacity-0");
      setTimeout(() => {
        item.classList.add("hidden");
      }, 200);
    }
  });
}

function loadMarkIntoExplorer(index) {
  state.carouselMarkIdx = index;
  updateMarkCarousel();
  
  // Smooth scroll viewport up to the Primary Explorer carousel container (Section 5 bento spec compliant)
  const explorer = document.getElementById("explorer-svg-container").closest("article");
  explorer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // Pulse animation effect to highlight the newly loaded mark
  const container = document.getElementById("explorer-svg-container").parentElement;
  container.classList.add("animate-pulse-slow", "border-[var(--accent)]");
  setTimeout(() => {
    container.classList.remove("animate-pulse-slow", "border-[var(--accent)]");
  }, 3000);
}
