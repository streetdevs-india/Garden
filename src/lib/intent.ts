import { brandSearchKeywords, industryKeywords } from "@/lib/seoKeywords";

export type IntentPage = {
  slug: string;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  relatedServices?: string[];
  relatedLocations?: string[];
};

function industryPage(
  slug: string,
  industryKey: keyof typeof industryKeywords,
  eyebrow: string,
  title: string,
  focus: string,
  bullets: string[],
  extraFaqs: { q: string; a: string }[] = []
): IntentPage {
  return {
    slug,
    path: `/${slug}`,
    eyebrow,
    title,
    description: `${title} by Hind Landscape Co. — design, softscape, hardscape, irrigation, lighting and maintenance AMC for ${focus} across Delhi NCR and India.`,
    intro: `Looking for ${title.toLowerCase()}? Hind Landscape Co. plans and builds outdoor spaces that survive Delhi heat, monsoon and heavy use — with named plant lists, clear scopes and optional AMC for ${focus}.`,
    bullets,
    keywords: industryKeywords[industryKey] ?? [
      title,
      `${eyebrow} landscaping Delhi`,
      "landscaping company Delhi NCR",
      "Hind Landscape Co.",
    ],
    faqs: [
      {
        q: `Do you deliver ${eyebrow.toLowerCase()} landscaping in Delhi?`,
        a: `Yes. ${title} is a core commercial offering — we survey the site, quote zone-wise and execute with maintenance in mind.`,
      },
      {
        q: "Is a free site visit available?",
        a: "Yes for serious enquiries across Delhi NCR. Pan-India mobilisation is confirmed after reviewing photos and scope.",
      },
      ...extraFaqs,
    ],
  };
}

function hub(page: Omit<IntentPage, "path"> & { path?: string }): IntentPage {
  return { ...page, path: page.path ?? `/${page.slug}` };
}

export const intentPages: IntentPage[] = [
  {
    slug: "hind-landscape-co",
    path: "/hind-landscape-co",
    eyebrow: "Hind Landscape Co.",
    title: "Hind Landscape Co.",
    description:
      "Hind Landscape Co. is an independent studio at D-51, Abul Fazal Enclave, Okhla, New Delhi. Website hindlandscaping.com. Not Hindgreen Landscape Pvt. Ltd. Call +91 99901 16281.",
    intro:
      "Hind Landscape Co. is an independent landscaping company in Okhla, New Delhi. The only official website is hindlandscaping.com. Hind Landscape Co. is not Hindgreen Landscape Pvt. Ltd. and it is not Greentech International Co. Those are different businesses.",
    bullets: [
      "Legal name: Hind Landscape Co.",
      "Studio: Hind Landscape Co., Okhla, New Delhi",
      "Studio: D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi 110025",
      "Phone: +91 99901 16281 · Email: hindlandscaping@gmail.com",
      "Website: hindlandscaping.com",
      "Hours: Monday to Saturday, 8:00 AM – 6:00 PM",
    ],
    keywords: [...brandSearchKeywords, "Hind Landscape Co. Okhla", "Hind Landscape Jamia Nagar"],
    relatedLocations: ["delhi", "noida", "south-delhi"],
    faqs: [
      {
        q: "Is Hind Landscape Co. the same as Hindgreen Landscape Pvt. Ltd.?",
        a: "No. Hind Landscape Co. is a separate company at D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi 110025. Its website is hindlandscaping.com and its phone is +91 99901 16281. It is not Hindgreen Landscape Pvt. Ltd. and it is not Greentech International Co.",
      },
      {
        q: "What is Hind Landscape Co.?",
        a: "Hind Landscape Co. is a landscape architecture and contracting studio in Okhla, New Delhi. It designs, builds and maintains gardens for homes, hotels, societies and commercial sites in Delhi and Noida.",
      },
      {
        q: "Where is Hind Landscape Co. located?",
        a: "D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi, Delhi 110025.",
      },
      {
        q: "Is Hind Landscape the same as Hind Landscaping?",
        a: "Yes. Hind Landscape, Hind Landscaping, Hind Landscape Company and Hind Landscape Co. all refer to this studio at hindlandscaping.com.",
      },
      {
        q: "How do I contact Hind Landscape Co.?",
        a: "Call or WhatsApp +91 99901 16281, or email hindlandscaping@gmail.com. Site visits in Delhi and Noida are free for serious enquiries.",
      },
    ],
  },
  PLACEHOLDER_TRUNCATED