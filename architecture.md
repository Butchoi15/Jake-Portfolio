# Portfolio Revamp — Architecture

## Design System

Style:              Warm Editorial Minimal (light theme)
Background:         #FAFAF9 (warm stone white)
Surface:            #FFFFFF (pure white cards)
Surface Alt:        #F5F3F0 (warm gray for alternating sections)
Accent Primary:     #4F46E5 (indigo)
Accent Secondary:   #F97316 (warm coral/orange)
Accent Gradient:    linear-gradient(135deg, #4F46E5, #7C3AED) (indigo → violet)
Text Primary:       #1A1A2E (near-black with warmth)
Text Secondary:     #6B7280 (muted gray)
Text Tertiary:      #9CA3AF (light muted)
Border:             #E5E7EB (soft gray border)
Border Hover:       #D1D5DB (slightly darker on hover)

Font heading:       Space Grotesk (kept — strong, modern)
Font body:          Inter (kept — excellent readability)
Border radius:      20px cards / 12px buttons / 9999px pills
Animation easing:   cubic-bezier(0.16, 1, 0.3, 1) (smooth spring)
Card style:         Solid white with subtle shadow (NOT glass)
Shadow sm:          0 1px 3px rgba(0,0,0,0.06)
Shadow md:          0 4px 20px rgba(0,0,0,0.06)
Shadow lg:          0 8px 40px rgba(0,0,0,0.08)
Shadow hover:       0 12px 48px rgba(0,0,0,0.12)

## Color Mapping from Gemini Analysis

Hero image colors extracted:
- Primary (coral): #F07C60 → maps to secondary accent touches
- Secondary (indigo): #414070 → reinforces our #4F46E5 choice
- Accent (warm gold): #FFB070 → subtle highlight accents

## Project Architecture

Output: React + Vite + Tailwind (in-place revamp)
Pages:
  - / (HomePage) — Hero + About + Services + Process + Tools + Testimonials + CTA + Footer
  - /case-studies (CaseStudiesPage) — All projects on one page
  - /case-studies/jubileetv (CaseStudyJubileePage) — Detailed case study

## Component Structure

- App.tsx — Routes + ScrollToTop
- components/Navbar.tsx — Light theme nav
- pages/HomePage.tsx — Main scrollable page with all sections
- pages/CaseStudiesPage.tsx — NEW: dedicated projects page
- pages/CaseStudyJubileePage.tsx — Revamped for light theme

Removed pages (consolidated into HomePage):
- AboutPage.tsx → section in HomePage
- SkillsPage.tsx → sections in HomePage
- TestimonialsPage.tsx → section in HomePage
- ContactPage.tsx → CTA section in HomePage + footer
