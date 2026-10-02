import {
  validateEmail,
  validateName,
  validateOptionalEmail,
  validateOptionalMessage,
  validatePhone,
  validateRequiredSelect,
} from "@/lib/formValidation";
import { LEAD_SOURCES, type LeadPayload, type LeadSource } from "./types";

function isLeadSource(value: string): value is LeadSource {
  return (LEAD_SOURCES as readonly string[]).includes(value);
}

export function validateLeadPayload(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const raw = body as Record<string, unknown>;
  const source = typeof raw.source === "string" ? raw.source.trim() : "";

  if (!isLeadSource(source)) {
    return { ok: false, error: "Unknown form source." };
  }

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const service = typeof raw.service === "string" ? raw.service.trim() : "";
  const propertyType = typeof raw.propertyType === "string" ? raw.propertyType.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  const pageUrl = typeof raw.pageUrl === "string" ? raw.pageUrl.trim() : "";
  const honeypot = typeof raw.honeypot === "string" ? raw.honeypot.trim() : "";

  const nameErr = validateName(name);
  if (nameErr) return { ok: false, error: nameErr };

  const phoneErr = validatePhone(phone);
  if (phoneErr) return { ok: false, error: phoneErr };

  const optionalEmailErr = validateOptionalEmail(email);
  if (optionalEmailErr) return { ok: false, error: optionalEmailErr };

  if (source === "quote-form") {
    const emailErr = validateEmail(email);
    if (emailErr) return { ok: false, error: emailErr };
    const serviceErr = validateRequiredSelect(service, "service");
    if (serviceErr) return { ok: false, error: serviceErr };
  }

  if (source === "homepage-popup" || source === "contact-quick") {
    const serviceErr = validateRequiredSelect(service, "service");
    if (serviceErr) return { ok: false, error: serviceErr };
  }

  if (source === "homepage-lead") {
    const propertyErr = validateRequiredSelect(propertyType, "property type");
    if (propertyErr) return { ok: false, error: propertyErr };
  }

  const messageErr = validateOptionalMessage(message);
  if (messageErr) return { ok: false, error: messageErr };

  const data: LeadPayload = {
    source,
    name,
    phone,
    honeypot: honeypot || undefined,
    pageUrl: pageUrl || undefined,
    message: message || undefined,
  };

  if (email) data.email = email;
  if (service) data.service = service;
  if (propertyType) data.propertyType = propertyType;

  return { ok: true, data };
}
