# AMS Cardiology — Website Redesign Proposal

## Proposed Sitemap

```
/                           → Homepage
/about                      → Our Mission / About Us
/physicians                 → All Cardiologists
/physicians/[slug]          → Individual Physician Profile
/advanced-practice-professionals → Nurse Practitioners & PAs
/testimonials               → Patient Testimonials / Reviews
/services                   → All Services (Procedures, Conditions, Rehab)
/services/[slug]            → Individual Service Detail
/conditions                 → Conditions We Treat
/conditions/[slug]          → Individual Condition Detail
/locations                  → All Locations
/locations/[slug]           → Individual Location Detail
/patient-resources          → Patient Portal, Forms, Billing, First Visit
/telemedicine               → Telemedicine Information
/blog                       → Blog / Educational Content
/blog/[slug]                → Individual Blog Post
/contact                    → Request Appointment / Contact Form
```

---

## UX/UI Audit — Current Site Weak Points

| Area | Issue |
|------|-------|
| **Visual Design** | Dated look, inconsistent styling, heavy use of stock imagery with no unified visual language |
| **Navigation** | Deep mega-menu structure that is confusing on mobile; duplicated links across desktop/mobile menus |
| **Typography** | Inconsistent font sizing and hierarchy; hard to scan content quickly |
| **Spacing** | Cramped sections, inconsistent padding and margins throughout |
| **Mobile** | Navigation is clunky; content does not reflow well on smaller screens |
| **Conversion** | Appointment CTA is buried; no persistent CTA in header; weak call-to-action design |
| **Trust Signals** | No prominent stats, testimonials, or social proof on homepage |
| **Content Hierarchy** | Homepage mixes educational heart anatomy content with service info — unfocused |
| **Blog** | Blog cards lack visual appeal; no read time, no category tags |
| **Locations** | Location pages lack services-available info; no map or directions integration |
| **Physician Profiles** | Cards lack visual distinction; profile pages are sparse |
| **Patient Resources** | Scattered across external links with no central resource hub |

---

## Redesign Improvements Summary

### Visual Design
- Modern navy/blue + white + soft gray palette conveying trust and professionalism
- Clean card-based layouts with subtle shadows and rounded corners
- Consistent spacing system using Tailwind's scale
- Premium Inter font for excellent readability

### Navigation & Structure
- Streamlined top utility bar (phone, portal, pay bill, telemedicine, appointment CTA)
- Clean sticky header with dropdown navigation
- Mobile-first responsive hamburger menu
- Logical information architecture reducing click depth

### Conversion Optimization
- Prominent "Request Appointment" CTA in header, hero, and throughout every page
- Floating quick-access cards on homepage (Find Doctor, Services, Locations, Portal)
- Contact form with location selector and visit type
- Phone number prominently displayed across all breakpoints

### Trust & Credibility
- "40+ Years" and "19+ Cardiologists" trust indicators in hero
- Dedicated testimonials section with star ratings
- Statistics bar (cardiologists, years, locations, patients served)
- Board certification badges and specialty tags

### Content & Patient Journey
- Clear service → condition → physician → appointment flow
- Blog with category tags, read times, and featured post layout
- Centralized Patient Resources page with forms, portal, billing, telemedicine
- First visit preparation guide with checklist

### Technical
- Next.js 14+ App Router with TypeScript
- Tailwind CSS v4 with custom theme tokens
- Component-based architecture (reusable cards, buttons, sections)
- Mock data files structured for easy CMS integration
- SEO metadata on every page with Open Graph tags
- Semantic HTML and accessibility best practices
- Static generation with `generateStaticParams` for all dynamic routes

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Architecture:** Component-based, data-driven, CMS-ready

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (utility bar, header, footer)
│   ├── page.tsx                      # Homepage (13 sections)
│   ├── globals.css                   # Theme tokens and base styles
│   ├── about/page.tsx                # Mission page
│   ├── physicians/
│   │   ├── page.tsx                  # All physicians grid
│   │   └── [slug]/page.tsx           # Physician detail
│   ├── advanced-practice-professionals/page.tsx
│   ├── testimonials/page.tsx
│   ├── services/
│   │   ├── page.tsx                  # All services
│   │   └── [slug]/page.tsx           # Service detail
│   ├── conditions/
│   │   ├── page.tsx                  # All conditions
│   │   └── [slug]/page.tsx           # Condition detail
│   ├── locations/
│   │   ├── page.tsx                  # All locations
│   │   └── [slug]/page.tsx           # Location detail
│   ├── patient-resources/page.tsx
│   ├── telemedicine/page.tsx
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/page.tsx           # Blog post
│   └── contact/page.tsx              # Appointment request form
├── components/
│   ├── layout/
│   │   ├── UtilityBar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionHeading.tsx
└── data/
    ├── physicians.ts
    ├── services.ts
    ├── locations.ts
    ├── blog.ts
    └── navigation.ts
```
