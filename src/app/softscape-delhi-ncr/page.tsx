import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntentPageView } from "@/components/IntentPageView";
import { intentPages } from "@/lib/intent";
import { buildMetadata } from "@/lib/seo";

const page = intentPages.find((p) => p.slug === "softscape-delhi-ncr");

export const metadata: Metadata = page
  ? buildMetadata({
      title: page.title,
      description: page.description,
      path: page.path,
      keywords: page.keywords,
    })
  : {};

export default function Page() {
  if (!page) notFound();
  return <IntentPageView page={page} />;
}
