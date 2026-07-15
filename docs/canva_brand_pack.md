# eight1five design — Canva Brand Pack & AI Designer Kit

This document compiles the exact design tokens, assets, and structured prompts you need to construct a premium, double-sided business card in Canva. 

By using the raw SVG code, precise color hex codes, font specifications, and custom AI generator prompts below, you can jumpstart the design process with Canva's AI tools and then polish the layout manually.

---

## 1. Brand Kit Checklist (Setup in Canva)

To configure your **Canva Brand Kit**, input these settings:

### Color Palettes
You can choose to design a **Light (Warm Linen / Grounded Wisdom)** card, a **Dark (Obsidian / Authoritative)** card, or a combination (e.g., Light front, Dark back).

| Palette | Token | Hex Code | Role / Visual Description |
| :--- | :--- | :--- | :--- |
| **Light Theme** | Primary Base | `#FDFBF7` | Warm Linen / Off-white Background |
| | Accent | `#D97706` | Warm Amber |
| | Contrast Text | `#1A1A1A` | Rich Off-black |
| | Muted Text | `#555555` | Charcoal Grey |
| | Border | `#EFEBE4` | Soft Limestone Grey |
| **Dark Theme** | Primary Base | `#0B0F19` | Obsidian Space Slate / Deep Navy-Black |
| | Accent | `#D4AF7A` | Muted Brass Gold |
| | Contrast Text | `#F8FAFC` | Crisp Linen White |
| | Muted Text | `#94A3B8` | Cool Steel Grey |
| | Border | `#1F2937` | Dark Graphite Grey |

### Typography
Canva supports both of your Google Fonts. Set them up as your brand fonts:
*   **Headings / Logo Text**: **Space Grotesk** (Bold, tracking set to slightly tight, e.g., `-0.02em`)
*   **Subheadings & Body / Details**: **Inter** (Regular to Medium, clean readability)

---

## 2. Logo Assets (SVG & Canva Rebuild)

Canva supports direct SVG imports (drag-and-drop). You can save the SVG code blocks below into files (e.g., `logo-light.svg` and `logo-dark.svg`) and upload them, or reconstruct the logo manually in Canva.

### Option A: Download / Upload SVGs
Create two files in your workspace (or locally) and upload them to Canva:

#### [NEW] [logo-light.svg](file:///z:/Programming/eight-one-five-design/brand_marks/logo-light.svg)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Solar Eclipse Logo (Light Theme) -->
  <circle cx="200" cy="200" r="80" fill="#D97706" />
  <circle cx="215" cy="185" r="80" fill="#FDFBF7" />
  <circle cx="215" cy="185" r="76" fill="none" stroke="#1A1A1A" stroke-width="6" />
  <circle cx="200" cy="200" r="15" fill="#D97706" />
</svg>
```

#### [NEW] [logo-dark.svg](file:///z:/Programming/eight-one-five-design/brand_marks/logo-dark.svg)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Solar Eclipse Logo (Dark Theme) -->
  <circle cx="200" cy="200" r="80" fill="#D4AF7A" />
  <circle cx="215" cy="185" r="80" fill="#0B0F19" />
  <circle cx="215" cy="185" r="76" fill="none" stroke="#F8FAFC" stroke-width="6" />
  <circle cx="200" cy="200" r="15" fill="#D4AF7A" />
</svg>
```

### Option B: Rebuild Manually in Canva
If you want to build the logo using Canva's shapes:
1.  Add a **Circle** filled with your Accent color (`#D97706` or `#D4AF7A`), sizing it to roughly 40% of the canvas.
2.  Add a second **Circle** acting as the moon. Fill it with the Background color (`#FDFBF7` or `#0B0F19`). Position it slightly offset to the **top-right** (e.g., if the main circle is at $X=100, Y=100$, put this one at $X=115, Y=85$).
3.  Add a **Ring** (Circle outline only) of the same size. Set the stroke color to your Contrast Text color (`#1A1A1A` or `#F8FAFC`). Align it perfectly with the second (offset) circle.
4.  Add a tiny **Circle** filled with the Accent color, and center it precisely on the original (first) circle.

---

## 3. Canva AI Generation Prompts

You can use these prompts inside Canva's **Magic Media** (Text-to-Image) or **Magic Design** to generate backgrounds, templates, or layouts that reflect your brand pillars: *Subtle Royalty* and *Essential Void*.

### Background Aesthetic Generation (Magic Media - Image)
If you want a subtle, textured background image instead of a flat color:

> **Prompt for Light Theme Card Back:**
> `Minimalist, clean, premium textured paper background, soft warm linen texture, subtle limestone grey details, golden-ratio layout guidelines, architectural design blueprint aesthetic, high-end design studio branding, 8k resolution, photorealistic, flat lay --ar 3:2`

> **Prompt for Dark Theme Card Back:**
> `Obsidian space slate dark textured background, premium graphite and dark navy paper texture, matte finish, luxury minimalist card back design, subtle golden-brass dust particles, high-end developer portfolio branding, 8k resolution, flat lay --ar 3:2`

### Template / Style Generation (Magic Design)
To feed into Canva's Magic Design template search:

> `Minimalist modern business card for a software architect, warm linen and charcoal colors, clean typography, off-center geometric layout, heavy negative space, luxury feel`

---

## 4. Business Card Contact Details

Here is the exact copy for Isaac's card. Ensure these details are included on the front:

*   **Name**: Isaac Ahlfield
*   **Job Title**: Software Engineer & Product Owner
*   **Location**: Broken Arrow, OK
*   **Email**: isaac@eight1fivedesign.com
*   **Portals / Links**:
    *   GitHub: `github.com/higherkey`
    *   LinkedIn: `linkedin.com/in/isaac-ahlfield`
    *   Website: `eight1five.design` (or standard domain if configured)
*   **Studio Tagline**: *"Wisdom in Work. Joy in the Toil."* (from Ecclesiastes 8:15)

---

## 5. Recommended Layout Architecture (Manual Polish)

After using the AI tools for layout ideas, use these principles to complete the manual design. We recommend a **two-sided card**:

### Side A: The Front (Minimalist, Bold Brand Identity)
Focuses entirely on the brand logo and name, establishing a luxury feel using *Essential Void*.

*   **Background**: Obsidian Dark (`#0B0F19`) or Warm Linen (`#FDFBF7`)
*   **Layout**:
    *   Place the **Solar Eclipse Logo** large and centered (or perfectly aligned to the left grid third).
    *   Below the logo, add the text: `eight1five design` in **Space Grotesk** (Bold, lowercase).
    *   Near the bottom edge in small, tracking-spaced **Inter** font: `"Wisdom in Work. Joy in the Toil."` or `"Ecclesiastes 8:15"`.

### Side B: The Back (Functional Contact Details)
Structured, neat, and highly readable, using golden-ratio proportions.

*   **Background**: Opposite theme of the front, or matching (e.g., Light theme front, Light theme back with dark borders).
*   **Layout**:
    *   **Left Column**: A smaller version of the Solar Eclipse Logo offset in the top-left corner.
    *   **Right Column (Contact Info Block)**:
        *   **Name**: `Isaac Ahlfield` in **Space Grotesk** (Bold, size 10-12pt).
        *   **Title**: `Software Engineer & Product Owner` in **Inter** (Medium, size 7-8pt, color: `#D97706` / `#D4AF7A`).
        *   **Divider**: A 1px horizontal line in the Border color (`#EFEBE4` / `#1F2937`) to separate the name block from details.
        *   **Details List** (in **Inter** Regular, size 6-7pt, color: `#555555` / `#94A3B8`):
            *   Email: `isaac@eight1fivedesign.com`
            *   Location: `Broken Arrow, OK`
            *   GitHub: `github.com/higherkey`
            *   LinkedIn: `linkedin.com/in/isaac-ahlfield`
    *   **Margins**: Keep at least 0.25 inches (18pt) of clear space on all sides to respect the *Essential Void* principle and ensure safe printing.
