# eight1five design — Official Brand Identity & Style Guide

Welcome to the official brand registry and design guide for eight1five design (also referred to as eight1five or e1f). This document serves as the single source of truth for our studio philosophy, visual identity, and operational principles.

---

## 1. Genesis & Identity

The core of our brand identity stems from the scriptural perspective on the duality of human existence under heaven:

> *"So I recommend having fun... along with all the hard work God gives you under the sun."*
> — **Ecclesiastes 8:15**

We are a boutique software development and digital design studio specializing in elegant web systems, robust workflow automation, targeted AI integration, and interactive gaming experiences. Our studio represents a synthesis of strict technical engineering discipline and creative, immersive play.

---

## 2. Mission & Vision

### Our Mission
Cultivate high-performance systems with inquisitive logic and operational humility, establishing a global standard for premium, non-addictive, thoughtful user interfaces that celebrate agency and return joy to work.

### Our Vision
A world where technology serves human wellness, where digital workspaces respect user agency, and where intense, high-impact creation is balanced with satisfying, restorative rest. We reject the modern tech narrative of endless hyper-growth at the expense of human health.

### AI Principles
We view artificial intelligence as a cooperative tool to expand human capability, not as a replacement for human judgment or agency. When designing and integrating AI capabilities, we adhere to three guidelines:
1.  **Deterministic Boundaries**: Critical systems must retain deterministic behaviors. We do not use probabilistic models where correctness and reliability are non-negotiable.
2.  **Humility & Transparency**: We implement AI features only when they serve a clear operational need, never for marketing buzz. We are transparent about AI boundaries and limitations.
3.  **Data Safety**: We ensure user data is protected, explicitly opting out of training loops unless explicitly requested and approved by the user.

---

## 3. The 5 Core Philosophical Pillars

Every product, codebase, visual mark, and design choice created by eight1five design must align with these pillars:

### I. Work & Play (High-Performance & Rest)
Diligent labor is a gift but is incomplete without play. We build tools that handle heavy workloads and help people enjoy their lives. Our systems are built to run with maximum efficiency so that users can complete their work cleanly and transition to rest.

### II. Wisdom (Humble Understanding)
True technical wisdom lies in recognizing the boundaries of ourselves and our systems. We approach complex problems with rigorous preparation while remaining humble before the unknown. We document constraints and prioritize reliability over cleverness.

### III. Under the Sun (Complete Transparency)
We design software that operates in the daylight of shared experience. Our tools illuminate complex workflows rather than obscuring them with dark patterns, deceptive micro-copy, or addictive user feedback loops.

### IV. Subtle Nobility (Absolute Agency)
Users are honored partners, not products. The software acts as a quiet, powerful advisor—felt through premium visual choices, perfect information spacing, and immediate responsiveness. We do not interrupt the user; we empower them.

### V. Essential Void (Let Space Speak)
In life, design, and work, what we leave out is as important as what we put in. We include only what is essential. High-contrast negative space, wide margins, and clean grids provide psychological breathing room and focus.

---

## 4. Visual Identity & Design System

Our visual identity is called Grounded Wisdom. It relies on high-contrast natural tones, geometric precision, and golden-ratio proportions.

### Color Palettes
We utilize two structural modes: Linen (Light Theme) for general utility, and Obsidian (Dark Theme) for authoritative/immersive experiences.

#### Theme I: Linen (Light Theme Defaults)
*   **Primary Base / Background**: `#FDFBF7` (Warm Linen)
*   **Contrast / Text Main**: `#0B0F19` (Deep Navy-Black)
*   **Secondary / Text Muted**: `#4E5A70` (Muted Navy-Grey)
*   **Accent**: `#D97706` (Warm Amber)
*   **Accent Hover**: `#B45309` (Deep Amber)
*   **Border / Keyline**: `#EFEBE4` (Soft Limestone Warm Grey)

#### Theme II: Obsidian (Dark Theme Overrides)
*   **Primary Base / Background**: `#0B0F19` (Deep Navy-Black)
*   **Card Background**: `#131924` (Deep Navy-Black Card)
*   **Contrast / Text Main**: `#FDFBF7` (Warm Linen Text)
*   **Secondary / Text Muted**: `#8A9BB4` (Cool Slate / Steel Grey)
*   **Accent**: `#D97706` (Warm Amber - Shared Accent)
*   **Accent Hover**: `#B45309` (Deep Amber - Shared Accent)
*   **Border / Keyline**: `#1E293B` (Deep Navy-Slate Border)

---

### Typography

We pair a geometric, slightly brutalist sans-serif with a high-readability UI font.

*   **Headings & Brand Marks**: `Space Grotesk` (Google Font, sans-serif)
*   **Body & Interface Text**: `Inter` (Google Font, sans-serif)

---

### Layout & Spacing (The Golden Ratio)

To reflect *Subtle Nobility* and *Essential Void*, all layouts use spacing proportions based on the Golden Ratio (`1.618`):

*   **Base Spacing Gutter**: `1.618rem` (26px) — Used for grids, padding, and basic margins.
*   **Section Spacing Gap**: `2.618rem` (42px) — Used to separate major layout components.
*   **Corner Radius**: `0.809rem` (13px) — Soft but defined corners for cards, buttons, and inputs.
*   **Hover Scale**: `1.02` (scale-up with `300ms` cubic-bezier transition)
*   **Click Scale**: `0.98` (scale-down to mimic tactile feedback)

---

## 5. Logo Guidelines

Our primary logo mark is the **Solar Eclipse (CONFIG: SUN-08)**, symbolizing Ecclesiastes 8:15 ("under the sun"). It is composed of a warm sun eclipsed by a cool moon, with a small core of light resting at the absolute center.

### Logo Construction & Geometry

```
                      (Eclipsing Moon Offset)
                             .-"-.
                           /       \
       (Primary Sun)      |   #0B0F19 stroke
          .---.           |   #FDFBF7 fill
        /       \          \       /
       | #D97706 |          '-...-'
       |  fill   |
        \       /
          '---'
            * (Center Core: #D97706 circle)
```

### Logo SVGs

#### Light Theme Logo (`logo-light.svg`)
[logo-light.svg](file:///z:/Programming/eight-one-five-design/brand_marks/logo-light.svg)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Solar Eclipse Logo (Light Theme) -->
  <circle cx="185" cy="215" r="160" fill="#D97706" />
  <circle cx="215" cy="185" r="160" fill="#FDFBF7" />
  <circle cx="215" cy="185" r="154" fill="none" stroke="#0B0F19" stroke-width="12" />
  <circle cx="185" cy="215" r="30" fill="#D97706" />
</svg>
```

#### Dark Theme Logo (`logo-dark.svg`)
[logo-dark.svg](file:///z:/Programming/eight-one-five-design/brand_marks/logo-dark.svg)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Solar Eclipse Logo (Dark Theme) -->
  <circle cx="185" cy="215" r="160" fill="#D97706" />
  <circle cx="215" cy="185" r="160" fill="#0B0F19" />
  <circle cx="215" cy="185" r="154" fill="none" stroke="#FDFBF7" stroke-width="12" />
  <circle cx="185" cy="215" r="30" fill="#D97706" />
</svg>
```

### Logo Usage Constraints
*   **Minimum Clear Space**: The logo must have a margin equal to at least 25% of its width on all sides.
*   **Contrast**: Do not overlay the Light Theme logo on dark backgrounds, or the Dark Theme logo on light backgrounds.
*   **Proportions**: Do not stretch or distort the circles.

---

## 6. Voice, Tone, and Communication

When writing copy for the website, interface tooltips, docs, or developer logs, maintain these communication principles:

1.  **Empowering & Clear**: Speak to the user as an equal. Avoid patronizing prompts, exclamation-point fatigue, or forced enthusiasm. Keep communication direct, honest, and warm.
    *   *Instead of*: "Wow! You're all set! Let's get started!"
    *   *Use*: "You're all set up. Let us know what you'd like to do next." or "Everything is ready for you to begin."
2.  **Radical Transparency**: Clearly state limitations, data policies, and boundaries. No dark patterns or hidden terms.
3.  **Intellectual Humility**: Do not claim our software is perfect or all-knowing. Admit constraints and document them.
4.  **No Buzzwords**: Avoid hyper-saturated tech marketing jargon. Speak in terms of actual architecture, code efficiency, and user agency.
5.  **No Emojis**: Do not use emojis in user interfaces, client communications, system documentation, or brand assets. Emojis distract from clean typographic layouts and clash with our premium, minimalist aesthetic.

---

## 7. Official Brand Assets & Copy

### Working Taglines
*   **Primary / Active**: `"Built to Last. Designed for Joy."`
*   **Alternative / Structural**: `"Built to Withstand. Living for Joy."`
*   **Alternative / Dialectical**: `"Built to Hold Strong. Designed for Letting Go."`
*   **Alternative / Functional**: `"Build to Hold Strong. Design for Letting Go."`

### Canva-Ready Brand Voice Description
> **eight1five is quietly confident, rigorous, and deeply human. We speak with intellectual humility and structural clarity, avoiding tech buzzwords & forced enthusiasm. We communicate with warmth and honesty. Our engineering is a steady, enduring craft that protects and enables human wellness, play, and rest. Our offerings:**
> 1. **Full-Stack Web Systems & Design**
> 2. **Workflow Automation & Integrations**
> 3. **Intelligent Systems & AI Integration**
> 4. **Interactive Experiences & Restorative Play**

---

## 8. Core Business Offerings

We express our craft across four defined business pillars, balancing technical engineering with human-centric rest:

### I. Full-Stack Web Systems & Design
*   **Web Engineering**: Constructing responsive, high-performance web applications built to scale reliably under any load.
*   **Design & Architecture**: Uniting clean, user-first visual layouts with stable, seamless backend integrations.
*   **Production Readiness**: Delivering robust codebases built on reliable code patterns, database safety, and strict quality checks.

### II. Workflow Automation & Integrations
*   **Pipeline Connection**: Linking fragmented software tools into unified, uniform workflows that eliminate manual friction.
*   **Deterministic Operations**: Replacing administrative overhead with automatic, consistent scripts and API integrations.
*   **System Modernization**: Rearchitecting legacy workflows into clean, scalable, and stable developer interfaces.

### III. Intelligent Systems & AI Integration
*   **Targeted AI**: Integrating intelligent LLM reasoning into existing systems with strict, human-in-the-loop validation boundaries.
*   **Data Parsing**: Building non-intrusive automation solutions to extract, structure, and query complex, unstructured business data.
*   **Ethical AI Practice**: Aligning intelligent systems with data privacy constraints and user agency.

### IV. Interactive Experiences & Restorative Play
*   **Core Philosophy**: Digital games and interactive experiences made to uplift, engage, inspire, teach, and unite.
*   **Game Design**: Engineering immersive games, simulations, and real-time multiplayer platforms.
*   **Restorative Play**: Designing low-stress, engaging digital environments built to restore energy and support human wellness.
*   **Technical Mentoring**: Providing expert instruction in software fundamentals, systems architecture, and code craftsmanship.
