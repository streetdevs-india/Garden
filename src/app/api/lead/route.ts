import { NextResponse } from "next/server";
import { sendLeadEmails } from "@/lib/leads/sendLeadEmail";
import { getClientIp, isRateLimited } from "@/lib/leads/rateLimit";
import { isSpamSubmission } from "@/lib/leads/spamGuard";
import { validateLeadPayload } from "@/lib/leads/validateLead";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please call us directly." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = validateLeadPayload(body);

    if (!parsed.ok) {
      return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
    }

    if (parsed.data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const spamReason = isSpamSubmission(parsed.data);
    if (spamReason) {
      return NextResponse.json({ ok: false, error: spamReason }, { status: 400 });
    }

    await sendLeadEmails(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead]", error);
    const msg = error instanceof Error ? error.message : "";
    const userMessage =
      msg.includes("RESEND_API_KEY")
        ? "Our contact form is temporarily unavailable. Please call us directly."
        : "We could not send your request right now. Please call us at +91 99901 16281.";
    return NextResponse.json({ ok: false, error: userMessage }, { status: 500 });
  }
}
