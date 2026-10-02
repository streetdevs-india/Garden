import { business } from "@/lib/business";
import { LEAD_SOURCE_LABELS, type LeadPayload } from "./types";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatWhen(): string {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function detailLine(lead: LeadPayload): string {
  return lead.service || lead.propertyType || "General enquiry";
}

function buildFields(lead: LeadPayload): Array<[string, string | undefined]> {
  return [
    ["Form", LEAD_SOURCE_LABELS[lead.source]],
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Service", lead.service],
    ["Property type", lead.propertyType],
    ["Message", lead.message],
    ["Page", lead.pageUrl],
    ["Received (IST)", formatWhen()],
  ];
}

function fieldsToText(lead: LeadPayload): string {
  return buildFields(lead)
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function fieldsToHtml(lead: LeadPayload): string {
  return buildFields(lead)
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:#555;font-size:14px;vertical-align:top;">${esc(label)}</td><td style="padding:8px 0;color:#111;font-size:14px;font-weight:600;vertical-align:top;">${esc(value!)}</td></tr>`
    )
    .join("");
}

/** Transactional layout — plain, inbox-friendly (not marketing-style). */
function transactionalShell(title: string, bodyText: string, bodyHtml: string): { html: string; text: string } {
  const text = `${title}\n\n${bodyText}\n\n—\n${business.name}\n${business.phone}\n${business.email}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <p style="margin:0 0 16px;font-size:16px;font-weight:700;">${esc(title)}</p>
  <div style="font-size:14px;line-height:1.6;color:#222;">${bodyHtml}</div>
  <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;">
  <p style="margin:0;font-size:12px;line-height:1.5;color:#666;">
    ${esc(business.name)}<br>
    ${esc(business.phone)} · ${esc(business.email)}
  </p>
</body>
</html>`;

  return { html, text };
}

export function studioLeadEmail(lead: LeadPayload): { subject: string; html: string; text: string } {
  const detail = detailLine(lead);
  const fieldsText = fieldsToText(lead);

  const bodyText = `You have a new enquiry on ${business.siteUrl}.\n\n${fieldsText}\n\nCall the client: ${lead.phone}`;

  const bodyHtml = `
    <p style="margin:0 0 16px;">You have a new enquiry on your website.</p>
    <table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
      ${fieldsToHtml(lead)}
    </table>
    <p style="margin:16px 0 0;">
      Call client: <a href="tel:${esc(business.phoneTel)}" style="color:#1a5e37;">${esc(lead.phone)}</a>
    </p>`;

  const { html, text } = transactionalShell("New website enquiry", bodyText, bodyHtml);

  return {
    subject: `New enquiry: ${lead.name} · ${detail}`,
    html,
    text,
  };
}

export function clientConfirmationEmail(
  lead: LeadPayload
): { subject: string; html: string; text: string } | null {
  if (!lead.email) return null;

  const firstName = lead.name.trim().split(/\s+/)[0] || "there";
  const interest = detailLine(lead);

  const bodyText = `Hi ${firstName},

Thank you for choosing ${business.name}.

We have received your enquiry for ${interest}. Our landscape team will review your details and contact you on ${lead.phone} within a few working hours.

If you need anything urgent, call us on ${business.phone} or reply to this email.

Warm regards,
${business.name}
${business.tagline}`;

  const bodyHtml = `
    <p style="margin:0 0 12px;">Hi ${esc(firstName)},</p>
    <p style="margin:0 0 12px;">Thank you for choosing <strong>${esc(business.name)}</strong>.</p>
    <p style="margin:0 0 12px;">We have received your enquiry for <strong>${esc(interest)}</strong>. Our landscape team will review your details and contact you on <strong>${esc(lead.phone)}</strong> within a few working hours.</p>
    <p style="margin:0 0 12px;">If you need anything urgent, call us on <a href="tel:${esc(business.phoneTel)}" style="color:#1a5e37;font-weight:700;text-decoration:none;">${esc(business.phone)}</a> or reply to this email.</p>
    <p style="margin:0;">Warm regards,<br><strong>${esc(business.name)}</strong><br>${esc(business.tagline)}</p>`;

  const { html, text } = transactionalShell("Thank you for contacting us", bodyText, bodyHtml);

  return {
    subject: `Thank you for contacting ${business.name}`,
    html,
    text,
  };
}
