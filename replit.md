# Diriyah Bio Links

## Overview

A bilingual (Arabic/English) bio link page for Diriyah, a historical and cultural destination in Saudi Arabia. The application serves as a centralized hub for official links, social media profiles, and visitor information. Built as a modern single-page application with RTL (right-to-left) support for Arabic content, dark/light theme toggle, and GDPR-compliant cookie consent management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom Diriyah-themed color palette (sand, gold, earth tones)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **API Design**: RESTful endpoints under `/api/*` prefix
- **Static Serving**: Production builds served from `dist/public`
- **Development**: Vite middleware integration for HMR

### Key Design Decisions

1. **Monorepo Structure**: Client, server, and shared code coexist with path aliases (`@/`, `@shared/`)
2. **Schema Sharing**: TypeScript types defined in `shared/schema.ts` are used by both frontend and backend
3. **Theme System**: CSS custom properties enable light/dark mode with Diriyah-inspired color schemes
4. **RTL Support**: HTML configured with `dir="rtl"` and `lang="ar"` for proper Arabic text rendering
5. **Cookie Consent**: Client-side consent management with localStorage persistence and optional server-side logging

### Database Configuration
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Output to `./migrations` directory
- **Current Usage**: Basic user schema defined; application primarily uses in-memory storage (`MemStorage` class)

### Build System
- **Client Build**: Vite outputs to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Dependency Bundling**: Critical dependencies are bundled to reduce cold start times

## External Dependencies

### Database
- **PostgreSQL**: Required for production (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session store for Express sessions

### UI Libraries
- **Radix UI**: Complete set of accessible, unstyled UI primitives
- **Lucide React**: Icon library
- **react-icons**: Additional icon sets (TikTok, Snapchat)
- **embla-carousel-react**: Carousel component
- **vaul**: Drawer component
- **cmdk**: Command palette
- **react-day-picker**: Calendar component

### Form & Validation
- **Zod**: Schema validation
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod resolver for react-hook-form

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **Google Tag Manager**: Analytics integration placeholder