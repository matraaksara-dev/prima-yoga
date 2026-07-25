export interface HeroData {
  headline: string;
  subheadline: string;
  primaryCTA: {
    label: string;
    url: string;
  };
  secondaryCTA: {
    label: string;
    url: string;
  };
}

export interface AboutData {
  openingHook: string;
  journey: string;
  approach: string;
  vision: string;
  closingLine: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface EcosystemPillar {
  id: string;
  pillarName: string;
  description: string;
  relatedCertIds: string[];
}

export interface CredibilityItem {
  id: string;
  statement: string;
}

export interface CertificationData {
  id: string;
  name: string;
  issuer: string;
  year: number;
}

export interface SeoData {
  pageTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface ContactData {
  headline: string;
  body: string;
  ctaButtonText: string;
  email: string;
}

export interface MediaAssets {
  heroPortrait: string;
  aboutPortrait: string;
  heroBackgroundAbstract?: string;
}

export interface SiteData {
  hero: HeroData;
  about: AboutData;
  services: ServiceData[];
  ecosystemPillars: EcosystemPillar[];
  credibility: CredibilityItem[];
  certifications: CertificationData[];
  seo: SeoData;
  contact: ContactData;
  media: MediaAssets;
}
