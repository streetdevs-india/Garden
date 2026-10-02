export const LEAD_SOURCES = [
  "homepage-popup",
  "homepage-lead",
  "quote-form",
  "contact-quick",
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

export type LeadPayload = {
  source: LeadSource;
  name: string;
  phone: string;
  email?: string;
  service?: string;
  propertyType?: string;
  message?: string;
  pageUrl?: string;
  honeypot?: string;
};

export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  "homepage-popup": "Website Popup",
  "homepage-lead": "Homepage Lead Form",
  "quote-form": "Quote / Contact Form",
  "contact-quick": "Quick Contact Modal",
};

export const LEAD_SOURCE_SUBJECT: Record<LeadSource, string> = {
  "homepage-popup": "[Website Popup]",
  "homepage-lead": "[Homepage Lead]",
  "quote-form": "[Quote Request]",
  "contact-quick": "[Quick Contact]",
};
