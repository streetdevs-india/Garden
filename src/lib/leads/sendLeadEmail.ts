import { Resend } from "resend";
import { clientConfirmationEmail, studioLeadEmail } from "./emailTemplates";
import type { LeadPayload } from "./types";

type EmailPayload = {
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
  tags?: { name: string; value: string }[];
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");
  return new Resend(apiKey);
}

function getStudioInbox(): string {
  return process.env.LEAD_TO_EMAIL || "hindlandscaping@gmail.com";
}

function getPrimaryFrom(): string {
  return (
    process.env.RESEND_FROM_EMAIL ||
    "Hind Landscape Website <notifications@hindlandscaping.com>"
  );
}

function getFallbackFrom(): string {
  return (
    process.env.RESEND_FALLBACK_FROM ||
    "Hind Landscape Website <onboarding@resend.dev>"
  );
}

function shouldRetryWithFallback(error: { message?: string; statusCode?: number | null }): boolean {
  if (!error) return false;
  const msg = (error.message || "").toLowerCase();
  return (
    error.statusCode === 403 ||
    msg.includes("domain is not verified") ||
    msg.includes("not authorized to send") ||
    msg.includes("invalid from")
  );
}

async function sendWithFallback(resend: Resend, params: EmailPayload) {
  const primaryFrom = getPrimaryFrom();
  const fallbackFrom = getFallbackFrom();

  let result = await resend.emails.send({ ...params, from: primaryFrom });

  if (result.error && shouldRetryWithFallback(result.error) && primaryFrom !== fallbackFrom) {
    console.warn("[lead] Primary sender unavailable, retrying with fallback:", result.error.message);
    result = await resend.emails.send({ ...params, from: fallbackFrom });
  }

  return result;
}

export async function sendLeadEmails(lead: LeadPayload): Promise<void> {
  const resend = getResend();
  const studioInbox = getStudioInbox();
  const studio = studioLeadEmail(lead);

  const studioResult = await sendWithFallback(resend, {
    to: [studioInbox],
    replyTo: lead.email || studioInbox,
    subject: studio.subject,
    html: studio.html,
    text: studio.text,
    headers: {
      "X-Entity-Ref-ID": `lead-${Date.now()}`,
      "X-Priority": "1",
    },
    tags: [{ name: "category", value: "website-lead" }],
  });

  if (studioResult.error) {
    throw new Error(studioResult.error.message || "Failed to send studio notification.");
  }

  const confirmation = clientConfirmationEmail(lead);
  if (!confirmation) return;

  const confirmResult = await sendWithFallback(resend, {
    to: [lead.email!],
    replyTo: studioInbox,
    subject: confirmation.subject,
    html: confirmation.html,
    text: confirmation.text,
    headers: {
      "List-Unsubscribe": `<mailto:${studioInbox}?subject=Unsubscribe>`,
    },
    tags: [{ name: "category", value: "lead-confirmation" }],
  });

  if (confirmResult.error) {
    console.warn("[lead] confirmation email failed:", confirmResult.error.message);
  }
}
