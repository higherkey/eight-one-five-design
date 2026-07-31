# Feature Work Trace: Horizon Redesign & Studio Clean Up

**Branch**: `feat/horizon-redesign-and-cleanup`  
**Parent Issue**: N/A (Direct Refactor & Deployment Request)  

---

## 1. Summary of Changes
- **Horizon Organic Anti-Grid Primary System**: Consolidated site architecture (`index.html`, `portfolio.html`, `contact.html`, `privacy.html`, `terms.html`) onto the Horizon design system.
- **Removed Retired Concepts**: Completely removed retired layout options and HTML prototypes (`Monolith`, `Atelier`, `Manuscript`, `Vault`, `Canon`).
- **Header & Navigation Refinement**: Enlarged header size, integrated the official Dark Theme Solar Eclipse brand mark SVG (`logo-dark.svg`), and set exact studio casing `eight1five design`.
- **Typography Restoration**: Restored official studio brand typography (**Space Grotesk** for headings and brand marks, **Inter** for UI/body text) and increased hero line-height to `1.22` to resolve descendant overlap.
- **Contact Form Routing**: Updated `contact.html` form action to dispatch inquiries directly to `isaac@eight1fivedesign.com` with FormSubmit integration.
- **Brand Guide & Identity Clean Up**: Updated brand documentation (`docs/brand_guide.md`) to use `e1F` casing, and removed inline `(e1F)` text clutter except for hero watermarks and copyright footers.

---

## 2. Verification & Testing
- Static site generated cleanly via Eleventy (`npm run build`).
- Tailwind CSS compiled without errors (`npm run build:css`).
- Local dev server verified on port `8815`.
- Visual regression screenshots taken via `chrome-devtools-mcp` confirming typography, header logo, and hero spacing.
