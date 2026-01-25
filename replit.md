# Diriyah Bio Links - الدرعية

## Overview
صفحة بيو لينكس للدرعية - الوجهة التاريخية والثقافية للمملكة العربية السعودية. تتضمن روابط رسمية ومنصات التواصل الاجتماعي مع صفحات الشروط والأحكام وسياسة الخصوصية وبانر الكوكيز المتوافق مع سياسات جوجل الإعلانية.

A bio links page for Diriyah - the historical and cultural destination of Saudi Arabia. Includes official links and social media platforms with terms & conditions, privacy policy pages, and a cookie consent banner compliant with Google Ads policies.

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── BioLinkCard.tsx      # Individual link card component
│   │   ├── CookieBanner.tsx     # Cookie consent banner with settings
│   │   ├── Footer.tsx           # Page footer with legal links
│   │   └── ThemeToggle.tsx      # Dark/light mode toggle
│   ├── pages/
│   │   ├── Home.tsx             # Main bio links page
│   │   ├── Terms.tsx            # Terms and conditions (Arabic)
│   │   ├── Privacy.tsx          # Privacy policy (Arabic)
│   │   └── not-found.tsx        # 404 page
│   ├── App.tsx                  # Main app with routing
│   └── index.css                # Tailwind config with Diriyah colors
├── index.html                   # HTML with RTL Arabic support
server/
├── routes.ts                    # API endpoints for analytics
└── storage.ts                   # In-memory storage
shared/
└── schema.ts                    # TypeScript types and schemas
```

## Features
- **Bio Links Page**: 12+ links to official website, social media, and experiences
- **RTL Arabic Support**: Full right-to-left layout for Arabic content
- **Cookie Consent Banner**: GDPR-compliant with three consent types:
  - Necessary (always enabled)
  - Analytics (opt-in)
  - Marketing (opt-in)
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Terms & Conditions**: Full Arabic legal page
- **Privacy Policy**: Comprehensive privacy policy with Google Ads compliance section
- **Responsive Design**: Mobile-first design

## Color Scheme
Inspired by Diriyah's desert and heritage:
- Primary: Golden sand (#C9932C)
- Background: Warm cream tones
- Dark mode: Rich brown/earth tones

## Running the Application
```bash
npm run dev
```
The application runs on port 5000.

## Routes
- `/` - Main bio links page
- `/terms` - Terms and conditions
- `/privacy` - Privacy policy

## API Endpoints
- `GET /api/health` - Health check
- `POST /api/analytics/consent` - Log cookie consent
- `POST /api/analytics/pageview` - Log page views

## Recent Changes
- January 2026: Initial implementation with all core features

## User Preferences
- Language: Arabic (RTL)
- Theme: System preference with manual toggle
- Cookie consent: Stored in localStorage
