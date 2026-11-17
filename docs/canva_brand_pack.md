# eight1five design — Canva Brand Pack & AI Designer Kit

This document compiles the exact design tokens, assets, and structured prompts you need to construct a premium, double-sided business card in Canva. 

By using the raw SVG code, precise color hex codes, font specifications, and custom AI generator prompts below, you can jumpstart the design process with Canva's AI tools and then polish the layout manually.

## 1. Brand Kit Checklist (Setup in Canva)

To configure your **Canva Brand Kit**, input these settings:

### Color Palettes
You can choose to design a **Light (Warm Linen / Grounded Wisdom)** card, a **Dark (Obsidian / Authoritative)** card, or a combination (e.g., Light front, Dark back).
| Palette | Token | Hex Code | Role / Visual Description |
| :--- | :--- | :--- | :--- |
| **Light Theme** | Primary Base | `#FDFBF7` | Warm Linen / Off-white Background |
| | Accent | `#D97706` | Warm Amber |
| | Contrast Text | `#0B0F19` | Deep Navy-Black / Obsidian Space Slate |
| | Muted Text | `#4E5A70` | Muted Navy-Grey |
| | Border | `#EFEBE4` | Soft Limestone Grey |
| **Dark Theme** | Primary Base | `#0B0F19` | Deep Navy-Black / Obsidian Space Slate |
| | Accent | `#D97706` | Warm Amber (Shared Accent) |
| | Contrast Text | `#FDFBF7` | Warm Linen Text |
| | Muted Text | `#8A9BB4` | Cool Slate / Steel Grey |
| | Border | `#1E293B` | Deep Navy-Slate Border |

### Typography
Canva supports both of your Google Fonts. Set them up as your brand fonts:
*   **Headings / Logo Text**: **Space Grotesk** (Bold, tracking set to slightly tight, e.g., `-0.02em`)
*   **Subheadings & Body / Details**: **Inter** (Regular to Medium, clean readability)

## 2. Logo Assets (SVG & Canva Rebuild)

Canva supports direct SVG imports (drag-and-drop). You can save the SVG code blocks below into files (e.g., `logo-light.svg` and `logo-dark.svg`) and upload them, or reconstruct the logo manually in Canva.

### Option A: Download / Upload SVGs
Create two files in your workspace (or locally) and upload them to Canva:

#### [NEW] [logo-light.svg](file:///c:/Programming/eight-one-five-design/brand_marks/logo-light.svg)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Solar Eclipse Logo (Light Theme) -->
  <circle cx="185" cy="215" r="160" fill="#D97706" />
  <circle cx="215" cy="185" r="160" fill="#FDFBF7" />
  <circle cx="215" cy="185" r="154" fill="none" stroke="#0B0F19" stroke-width="12" />
  <circle cx="185" cy="215" r="30" fill="#D97706" />
</svg>
```

#### [NEW] [logo-dark.svg](file:///c:/Programming/eight-one-five-design/brand_marks/logo-dark.svg)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Solar Eclipse Logo (Dark Theme) -->
  <circle cx="185" cy="215" r="160" fill="#D97706" />
  <circle cx="215" cy="185" r="160" fill="#0B0F19" />
  <circle cx="215" cy="185" r="154" fill="none" stroke="#FDFBF7" stroke-width="12" />
  <circle cx="185" cy="215" r="30" fill="#D97706" />
</svg>
```

### Option B: Rebuild Manually in Canva
If you want to build the logo using Canva's shapes:
1.  Add a **Circle** filled with your Accent color (`#D97706`), sizing it to roughly 80% of the canvas.
2.  Add a second **Circle** acting as the moon. Fill it with the Background color (`#FDFBF7` or `#0B0F19`). Position it offset to the **top-right** (e.g., if the main circle is at $X=185, Y=215$, put this one at $X=215, Y=185$).
3.  Add a Ring (Circle outline only) of the same size. Set the stroke color to your Contrast Text color (`#0B0F19` or `#FDFBF7`). Align it perfectly with the second (offset) circle.
4.  Add a tiny **Circle** filled with the Accent color, and center it precisely on the original (first) circle (at $X=185, Y=215$).

## 3. Canva AI Generation Prompts

You can use these prompts inside Canva's **Magic Media** (Text-to-Image) or **Magic Design** to generate backgrounds, templates, or layouts that reflect your brand pillars: *Subtle Royalty* and *Essential Void*.

### Background Aesthetic Generation (Magic Media - Image)
If you want a subtle, textured background image instead of a flat color:

> **Prompt for Light Theme Card Back:**
> `Minimalist, clean, premium textured paper background, soft warm linen texture, subtle limestone grey details, golden-ratio layout guidelines, architectural design blueprint aesthetic, high-end design studio branding, 8k resolution, photorealistic, flat lay --ar 3:2`

> **Prompt for Dark Theme Card Back:**
> `Minimalist, clean, premium dark textured paper background, matte obsidian space slate deep navy-black texture, subtle dark limestone details, golden-ratio layout guidelines, architectural design blueprint aesthetic, high-end design studio branding, 8k resolution, photorealistic, flat lay --ar 3:2`

### Template / Style Generation (Magic Design)
To feed into Canva's Magic Design template search:

> `Minimalist modern business card for a software architect, warm linen and deep navy-black colors, clean typography, off-center geometric layout, heavy negative space, luxury feel`

## 4. Business Card Contact Details

Here is the exact copy for Isaac's card. Ensure these details are included on the front:

*   **Name**: Isaac Ahlfield
*   **Job Title**: Software Engineer & Product Owner
*   **Location**: Broken Arrow, OK
*   **Email**: isaac@eight1fivedesign.com
*   **Website**: `eight1fivedesign.com` (or standard domain if configured)
*   **Studio Tagline**: *"Wisdom in Work. Joy in the Toil."* (from Ecclesiastes 8:15)

## 5. Recommended Layout Architecture (Manual Polish)

After using the AI tools for layout ideas, use these principles to complete the manual design. We recommend a clean, balanced **one-sided card** that merges your brand identity and contact information while respecting the *Essential Void* (negative space):


### One-Sided Layout Architecture

*   **Background**: Warm Linen (`#FDFBF7`)
*   **Grid Structure**: Divide the card horizontally or vertically using the Golden Ratio (approx. 60/40 split). Let's use a left-to-right layout:

#### Left Panel (approx. 35% width) — Brand Identity
- **Logo**: Place the **Solar Eclipse Logo** centered vertically and horizontally within this panel. The logo consists of:
  - The background circle/sun filled with Warm Amber (`#D97706`).
  - The foreground offset circle/moon filled with Warm Linen (`#FDFBF7`).
  - The moon outline ring stroked with Deep Navy-Black (`#0B0F19`).
  - The tiny center circle/core filled with Warm Amber (`#D97706`).
- **Logo Text**: Add `eight1five design` in **Space Grotesk** (Bold, lowercase, size 8-9pt, colored with Deep Navy-Black `#0B0F19`) centered directly beneath the logo mark.
- **Divider**: Add a vertical 1px border line in the Border color Soft Limestone Grey (`#EFEBE4`) to separate the left brand panel from the right details panel.

#### Right Panel (approx. 65% width) — Professional & Contact Info
- **Name**: `Isaac Ahlfield` in **Space Grotesk** (Bold, size 11-12pt, colored with Deep Navy-Black `#0B0F19`).
- **Spacer**: A small, clean gap of negative space directly under the name.
- **Details Grid / List** (in **Inter** Regular, size 6-7pt, colored with Muted Navy-Grey `#4E5A70`):
  - Email: `isaac@eight1fivedesign.com`
  - Location: `Broken Arrow, OK`
  - Website: `eight1fivedesign.com`
- **Services Block**: Place the standalone line `web systems • workflow automation • targeted AI integration` in **Inter** (Medium, size 6.5-7pt, colored with Warm Amber `#D97706`) separated from the contact list by a small gap.

#### Footer (Subtle Branding)
- **Tagline**: Place the studio tagline `"Built to Last. Designed for Joy."` (or one of your working taglines) in tiny **Inter** (Italic, size 5-6pt, colored with Muted Navy-Grey `#4E5A70`) along the bottom right margin, aligning perfectly with the contact details grid.
- **Margins**: Keep at least 0.25 inches (18pt) of clear space on all outer edges to respect the *Essential Void* and guarantee safe printing bleed boundaries (the background should remain fully Warm Linen `#FDFBF7` in these margins).

## 6. Canva AI Generator Prompt

A premium, minimalist one-sided business card on a warm linen background (#FDFBF7). The card has a clean 35/65 vertical grid split separated by a thin limestone-grey vertical line (#EFEBE4). The left 35% contains a centered placeholder area for a circular logo. The right 65% contains clean, structured, left-aligned text blocks for contact details and name. High negative space, luxury feel.

## 7. Canva Brand Kit Extras

### Working Taglines
*   **Primary**: `"Built to Last. Designed for Joy."`
*   **Option B**: `"Built to Withstand. Living for Joy."`
*   **Option C**: `"Built to Hold Strong. Designed for Letting Go."`
*   **Option D**: `"Build to Hold Strong. Design for Letting Go."`

### Brand Voice Description (Copy-paste to Canva)
eight1five is quietly confident, rigorous, and deeply human. We speak with intellectual humility and structural clarity, avoiding tech buzzwords & forced enthusiasm. We communicate with warmth and honesty. Our engineering is a steady, enduring craft that protects and enables human wellness, play, and rest. Our offerings:
1. Full Stack Web Solutions
2. Intelligent Systems & AI
3. Automation & Integrations
4. Interactive & Restorative Games

`Web Systems • Automation & Integrations • Applied AI • Interactive Games`

### Expanded Description of Services
1. Full-Stack Web Systems & Design
2. Intelligent Systems & Applied AI
3. Workflow Automation & Integrations
4. Interactive Experiences & Restorative Play
