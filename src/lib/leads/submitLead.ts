import type { LeadPayload } from "./types";

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitLead(
  payload: Omit<LeadPayload, "pageUrl"> & { pageUrl?: string }
): Promise<SubmitResult> {
  const pageUrl =
    payload.pageUrl ||
    (typeof window !== "undefined" ? window.location.href : undefined);

  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, pageUrl }),
  });

  const data = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string }
    | null;

  if (!response.ok || !data?.ok) {
    return {
      ok: false,
      error: data?.error || "Something went wrong. Please try again or call us.",
    };
  }

  return { ok: true };
}
