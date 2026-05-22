# Profile Page Site — Complete Spec Document

## Project Overview

Single-page profile site for a software engineer with 2 years of experience in HR and Learning Management Software. Responsive, smooth scroll animations, clean and professional.

---

## Page Structure (Top to Bottom)

1. Hero
2. Experience
3. Projects (carousel)
4. Technical Skills
5. Social + Resume Download

---

## 1. Hero Section

### Layout

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥768px) | Two columns: photo (left, ~35-40% width), bio (right, ~60-65% width) |
| Mobile (<768px) | Single column: photo centered above bio |

### Photo

- Shape: Rounded rectangle (border-radius: 12px)
- Size: Desktop ~200-280px wide, mobile ~160-200px wide
- Aspect ratio: 1:1 (square)
- Alt text: `"[Your Name] profile photo"`
- Optional: subtle shadow or thin border

### Bio Content (right side)

- Name: H1 — large, bold
- Title: H2 or subtitle — "Software Engineer | HR & LMS Platforms"
- Short bio: 2-3 sentences
- Tagline (optional): one punchy line above or below bio

### Call-to-Action Buttons (in hero)

- Primary: Contact me (smooth scroll to contact section)
- Secondary: View work (smooth scroll to projects section)
- No resume button in hero

### Animations

- Hero fades in on page load (opacity 0 → 1, slight upward drift)

### Responsive Notes

- Text size scales down slightly on mobile
- Padding/margins: 16-24px side padding on mobile
- Buttons stack vertically on mobile

### Placeholders

Name: [Your Name]
Photo: [filename or link]
Bio text: [write 2-3 sentences]


---

## 2. Experience Section

### Context

One company — multiple roles possible over time. Single featured card, prominent and centered.

### Layout

| Breakpoint | Layout |
|------------|--------|
| All screens | Single featured card, centered, with breathing room |

### Content Inside Card

- Company logo (top or top-left)
- Company name (as text or linked)
- Link to company product page (opens new tab)
- Your role(s) — e.g., "Software Engineer (2024–Present)"
- Explanation — 2-4 sentences describing product and your work
- Tech stack mini-chips (optional)

### Card Styling

- Subtle background or gradient border
- Padding: 32px on desktop, 20px on mobile
- Border radius: 12px (matching hero photo)
- Company logo: ~40-60px tall, aligned left

### Animation

- Card fades in on scroll (fade-up)

### Responsive Notes

- Logo stacks above text on very small screens if needed
- Explanation text: 16px+ font size, generous line height
- External link: min 44x44px tap area on mobile

### Placeholders
Company name: [Name]
Company logo: [image file or URL]
Company product page link: [URL]
Your roles + dates: [e.g., Software Engineer, 2024–Present]
Explanation text: [2-4 sentences]
Tech stack: [list]


---

## 3. Projects Section (Carousel)

### Overview

- 4 total projects: 2 work projects, 2 personal projects
- Carousel / slider with infinite loop and autoplay

### Carousel Behavior

| Feature | Setting |
|---------|---------|
| Cards visible at once | 1 |
| Infinite loop | Yes |
| Autoplay | Yes — every 10 seconds |
| Pause on hover | Yes |
| Pause on touch | Yes |
| Resume after interaction | Yes — after 5 seconds |

### Controls

| Control | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Navigation arrows | Yes | Yes | Optional |
| Pagination dots | Yes | Yes | Yes |
| Swipe (touch) | Yes | Yes | Yes |
| Keyboard arrows | Yes | Yes | No |

### Card Width

| Breakpoint | Card width |
|------------|------------|
| Desktop | 500-600px (centered) |
| Tablet | 70-80% of screen width |
| Mobile | 90% of screen width, centered |

### Card Content (per slide)

- Screenshot / mockup placeholder
- Title
- Badge: `Work` or `Personal`
- Short description (1-2 sentences)
- Tech stack chips
- Link(s) — GitHub, live demo, or company product page

### Badge Styling

- Work badge: Blue or neutral gray
- Personal badge: Green or accent color
- Pill shape: border-radius 20px, small padding, 12px font

### Card Styling

- Light background or border
- Border radius: 12px
- Consistent card height or auto

### Animation

- Slide transition: 300-400ms ease-in-out
- Fade + slide on change
- First card fades in on page load

### Autoplay Spec (for developer)
delay: 10000 ms
disableOnInteraction: false
pauseOnHover: true
pauseOnFocus: true


### Responsive / Mobile Notes

- Swipe gesture changes slides
- Arrows can be hidden on mobile (dots + swipe only)
- Dots: min 44x44px spacing between tap targets
- Links inside card work without accidental swipe

### Accessibility

- Dots have `aria-label` (e.g., "Go to slide 2")
- Arrow buttons have `aria-label`

### Placeholders
Work Project 1:
Title: [name]
Description: [1-2 sentences including "I built..."]
Tech: [list]
Link: [company product page URL]

Work Project 2:
[same structure]

Personal Project 1:
Title: [name]
Description: [1-2 sentences]
Tech: [list]
Link: [GitHub URL]
Live demo: [optional]

Personal Project 2:
[same structure]


---

## 4. Technical Skills Section

### Overview

Logos only, with tooltips showing name on hover/tap.

### Logos (3 total)

| Logo | Tooltip text |
|------|--------------|
| JavaScript | "JavaScript" |
| TypeScript | "TypeScript" |
| PostgreSQL | "PostgreSQL" |

### Layout

| Breakpoint | Layout |
|------------|--------|
| Desktop | 3 logos in a row, centered |
| Tablet | 3 logos in a row, centered |
| Mobile | 3 logos in a row, centered |

### Logo Styling

- Size: 48-64px
- Equal spacing between logos
- Full color (no grayscale)

### Tooltips — Desktop

- Appears above or below logo after ~200ms hover delay
- Shows technology name
- Light background or dark, rounded corners
- Disappears on mouse leave

### Tooltips — Mobile

- Tap and hold OR single tap shows name
- Alternative: name appears below logo briefly

### Tooltip Styling

Background: #111 or #333
Text: white, 12-14px, bold
Padding: 4px 8px
Border radius: 6px
Position: above (fallback to below)


### Animation

- Logos fade in on scroll
- Tooltip fades in quickly

### Accessibility

- Each logo has `aria-label` with technology name
- Tooltip available to screen readers
- Keyboard focus on logo triggers tooltip

### Placeholder for Future Expansion

Additional logos can be added to the grid later without changing layout.

---

## 5. Social + Resume Download Section

### Layout

| Breakpoint | Layout |
|------------|--------|
| Desktop | Horizontal row — social icons + resume button centered |
| Mobile | Vertical stack — social icons row, button below |

### Social Links (minimum)

- GitHub
- LinkedIn

### Optional Extras (can add later)

- Email (mailto link)
- Twitter / X
- BlueSky

### Resume Download

- Button: "Download Resume (PDF)"
- Links directly to resume file
- Download attribute forces download, not browser open

### Visual Styling — Social Icons

- Icon size: 24-32px
- Color: neutral gray
- Hover: brand color (GitHub black, LinkedIn blue)
- No text labels (icons only)

### Visual Styling — Resume Button

- Solid or outline button (matches hero buttons)
- PDF icon optional next to text

### Spacing & Position

- Final section before footer line
- Padding: 48-64px top and bottom
- Optional copyright/credit line below

### Animation

- Section fades in on scroll
- Social icons: subtle scale on hover

### Responsive Notes

- Icons: min 44x44px tap target (padding around 24-32px icon)
- Resume button full width on mobile or centered with enough tap area

### Placeholders

GitHub URL: [https://github.com/yourusername]
LinkedIn URL: [https://linkedin.com/in/yourusername]
Resume file: [/resume.pdf]
Optional email: [your.email@example.com]


### Footer Line (optional)

Built with [tech] — [Current Year]
Example: Built with HTML/CSS/JS — 2026


---

## Global Requirements

### Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| < 768px | Mobile |
| 768px - 1024px | Tablet |
| > 1024px | Desktop |

### Smooth Animations (scroll)

- Each section fades in as user scrolls
- Fade-up: opacity 0 → 1, translateY(10-20px) → 0
- Duration: 400-600ms
- Staggered for multiple items (cards, logos) optional

### Typography (base recommendations)

| Element | Size (desktop) | Size (mobile) |
|---------|---------------|---------------|
| H1 (name) | 48-56px | 36-40px |
| H2 (title) | 24-28px | 20-24px |
| Body text | 16-18px | 16px |
| Small text | 14px | 14px |

### Colors (recommendation — you define later)

- Background: light or dark? (specify)
- Primary accent: [choose a color]
- Text: high contrast against background

### Performance & Accessibility

- Images: optimized (WebP recommended)
- Alt text on all images
- Semantic HTML (header, main, section, footer)
- Focus indicators for keyboard navigation

---



## Developer Handoff Notes

- Carousel library recommendation: Swiper.js, Embla Carousel, or Framer Motion
- Smooth scroll: CSS `scroll-behavior: smooth` or GSAP
- Tooltips: CSS-only or tiny JavaScript
- No backend required (static site)
- Hosting: any static host (Netlify, Vercel, GitHub Pages)

---

## Version

Spec v1.0 — Ready for implementation