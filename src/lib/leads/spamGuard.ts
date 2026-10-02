const SPAM_NAME_PATTERNS = [
  /https?:\/\//i,
  /\bcasino\b/i,
  /\bviagra\b/i,
  /\bcrypto\b/i,
  /\bbitcoin\b/i,
  /\bseo\b/i,
  /\bclick here\b/i,
];

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "yopmail.com",
  "throwaway.email",
  "trashmail.com",
]);

export function isSpamSubmission(payload: {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}): string | null {
  const name = payload.name.trim();
  const message = (payload.message || "").trim();

  for (const pattern of SPAM_NAME_PATTERNS) {
    if (pattern.test(name) || pattern.test(message)) {
      return "Invalid submission.";
    }
  }

  if (message) {
    const linkCount = (message.match(/https?:\/\//gi) || []).length;
    if (linkCount > 1) return "Invalid submission.";
  }

  if (payload.email) {
    const domain = payload.email.split("@")[1]?.toLowerCase();
    if (domain && DISPOSABLE_DOMAINS.has(domain)) {
      return "Please use a regular email address.";
    }
  }

  const repeatedChar = /(.)\1{5,}/;
  if (repeatedChar.test(name.replace(/\s/g, ""))) {
    return "Invalid submission.";
  }

  return null;
}
