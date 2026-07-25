export interface HeroData {
  eyebrow?: string;
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

export interface TimelineNode {
  year: string;
  title: string;
  insight: string;
}

export interface AboutData {
  quote: string;
  timeline: TimelineNode[];
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

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface CertificationData {
  id: string;
  name: string;
  category: "Perbankan" | "Coaching & Psikologi" | "Mutu & Standar";
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
  whatsappNumber: string;
  whatsappButtonText: string;
}

export interface MediaAssets {
  heroPortrait: string;
  aboutPortrait: string;
  heroBackgroundAbstract?: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
}

export interface SiteData {
  hero: HeroData;
  about: AboutData;
  services: ServiceData[];
  ecosystemPillars: EcosystemPillar[];
  credibility: CredibilityItem[];
  testimonials: TestimonialData[];
  partnerLogos: PartnerLogo[];
  certifications: CertificationData[];
  seo: SeoData;
  contact: ContactData;
  media: MediaAssets;
}
