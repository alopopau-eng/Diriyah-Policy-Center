// Cookie consent types
export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

// Bio link types
export interface BioLink {
  id: string;
  title: string;
  titleAr: string;
  url: string;
  icon: string;
  category: 'social' | 'official' | 'experience';
}

// Page content types
export interface PageContent {
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  lastUpdated: string;
}
