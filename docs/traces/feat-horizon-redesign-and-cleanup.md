# Feature Work Trace: Horizon Redesign & Studio Clean Up

**Branch**: `feat/horizon-redesign-and-cleanup`  
**Parent Issue**: N/A (Direct Refactor & Deployment Request)  

---

## 1. Summary of Changes
- **Horizon Organic Anti-Grid Primary System**: Consolidated site architecture (`index.html`, `portfolio.html`, `contact.html`, `privacy.html`, `terms.html`) onto the Horizon design system.
- **Removed Retired Concepts**: Completely removed retired layout options and HTML prototypes (`Monolith`, `Atelier`, `Manuscript`, `Vault`, `Canon`).
- **Exagrow Case Study Rewrite & Testimonial**: Updated Exagrow card on `portfolio.html` and dataset in `app.js` with live deployment URL (`https://exagrow.com`), WordPress-to-modern-stack migration story, and dedicated client testimonial quote container.
- **Responsive Header & Navigation**: Added fluid `clamp()` sizing for logo image, brand text, and navigation links alongside media query breakpoints (`@media (max-width: 480px)`) ensuring smooth scaling across all mobile and desktop viewports.
- **Footer Text & Contrast**: Increased footer text size to `0.85rem` with high-contrast text (`rgba(253,251,247,0.85)` against navy `#0B0F19`), and added a locally hosted LinkedIn logo SVG (`brand_marks/linkedin.svg`) linking directly to the company page (`https://www.linkedin.com/company/eight1fivedesign`).
- **Typography Restoration**: Restored official studio brand typography (**Space Grotesk** for headings and brand marks, **Inter** for UI/body text) and increased hero line-height to `1.22` to resolve descendant overlap.
- **Contact Form Routing**: Updated `contact.html` form action to dispatch inquiries directly to `isaac@eight1fivedesign.com` with FormSubmit integration.
- **Brand Guide & Identity Clean Up**: Updated brand documentation (`docs/brand_guide.md`) to use `e1F` casing, and removed inline `(e1F)` text clutter except for hero watermarks and copyright footers.

---

## 2. Verification & Testing
- Static site generated cleanly via Eleventy (`npm run build`).
- Tailwind CSS compiled without errors (`npm run build:css`).
- Local dev server verified on port `8815`.
- Visual regression screenshots taken via `chrome-devtools-mcp` confirming typography, header logo, and hero spacing.
