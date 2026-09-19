import type { KeyboardEvent } from "react";

/** Live input sanitizers + submit validators for all site forms. */

export function sanitizeName(raw: string): string {
  return raw
    .replace(/[^a-zA-Z\s.'-]/g, "")
    .replace(/\s{2,}/g, " ")
    .slice(0, 60);
}

export function sanitizePhone(raw: string): string {
  return raw.replace(/\D/g, "").slice(0, 10);
}

export function sanitizeEmail(raw: string): string {
  return raw
    .replace(/[^a-zA-Z0-9@._+-]/g, "")
    .replace(/\s/g, "")
    .slice(0, 80);
}

export function sanitizeMessage(raw: string): string {
  return raw
    .replace(/[^\w\s.,!?'"()\-:/@#&+%]/g, "")
    .slice(0, 800);
}

export function validateName(name: string): string | null {
  const n = name.trim();
  if (n.length < 2) return "Please enter your name (at least 2 letters).";
  if (!/^[a-zA-Z\s.'-]{2,60}$/.test(n)) return "Name can only contain letters.";
  if (!/[a-zA-Z]/.test(n)) return "Please enter a valid name.";
  return null;
}

export function validatePhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10) return "Enter a valid 10-digit mobile number.";
  if (!/^[6-9]\d{9}$/.test(digits)) return "Mobile number must start with 6–9.";
  return null;
}

export function validateEmail(email: string): string | null {
  const e = email.trim();
  if (!e) return "Email is required.";
  if (!/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)) {
    return "Enter a valid email address.";
  }
  return null;
}

export function validateRequiredSelect(value: string, label = "option"): string | null {
  if (!value.trim()) return `Please choose a ${label}.`;
  return null;
}

export function validateOptionalMessage(message: string): string | null {
  const m = message.trim();
  if (!m) return null;
  if (m.length < 10) return "Add a bit more detail (at least 10 characters), or leave blank.";
  if (m.length > 800) return "Please keep the message under 800 characters.";
  return null;
}

/** Block non-matching key presses early (desktop). Paste still goes through onChange sanitize. */
export function allowNameKey(e: KeyboardEvent<HTMLInputElement>) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key.length === 1 && !/[a-zA-Z\s.'-]/.test(e.key)) e.preventDefault();
}

export function allowPhoneKey(e: KeyboardEvent<HTMLInputElement>) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key.length === 1 && !/\d/.test(e.key)) e.preventDefault();
}

export function allowEmailKey(e: KeyboardEvent<HTMLInputElement>) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key.length === 1 && !/[a-zA-Z0-9@._+-]/.test(e.key)) e.preventDefault();
}
