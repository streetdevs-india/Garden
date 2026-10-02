"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { PhoneIcon } from "@/components/Icons";
import { getClientServices } from "@/lib/site";
import {
  allowEmailKey,
  allowNameKey,
  allowPhoneKey,
  sanitizeEmail,
  sanitizeMessage,
  sanitizeName,
  sanitizePhone,
  validateName,
  validateOptionalEmail,
  validateOptionalMessage,
  validatePhone,
  validateRequiredSelect,
} from "@/lib/formValidation";
import { submitLead } from "@/lib/leads/submitLead";

const SERVICES = getClientServices().map((s) => s.title);

type State = "idle" | "sent";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open) {
      if (!dlg.open) dlg.showModal();
    } else {
      if (dlg.open) dlg.close();
      setState("idle");
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setMessage("");
      setErrors({});
    }
  }, [open]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      setOpen(false);
    };
    dlg.addEventListener("cancel", onCancel);
    return () => dlg.removeEventListener("cancel", onCancel);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function validate() {
    const errs: Record<string, string> = {};
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    const serviceErr = validateRequiredSelect(service, "service");
    const emailErr = validateOptionalEmail(email);
    const messageErr = validateOptionalMessage(message);
    if (nameErr) errs.name = nameErr;
    if (phoneErr) errs.phone = phoneErr;
    if (emailErr) errs.email = emailErr;
    if (serviceErr) errs.service = serviceErr;
    if (messageErr) errs.message = messageErr;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    const result = await submitLead({
      source: "contact-quick",
      name,
      phone,
      email: email.trim() || undefined,
      service,
      message,
    });
    setSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }
    setState("sent");
  }

  return (
    <>
      <button
        type="button"
        className="contact-modal-trigger"
        onClick={() => setOpen(true)}
        aria-label="Open quick contact form"
      >
        <PhoneIcon size={16} />
        Quick Contact
      </button>

      <dialog
        ref={dialogRef}
        className="contact-modal-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="contact-modal-card">
          <button
            className="contact-modal-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>

          {state === "sent" ? (
            <div className="contact-modal-success">
              <div className="contact-modal-success-icon">✓</div>
              <h3>Message received!</h3>
              <p>
                Thank you, {name}. The studio will call you at{" "}
                <strong>{phone}</strong> within a few hours.
                {email.trim() ? " A confirmation email has been sent to you." : ""}
              </p>
              <p className="contact-modal-or">Or call us right now:</p>
              <a href={`tel:${business.phoneTel}`} className="btn btn-green" style={{ width: "100%", justifyContent: "center" }}>
                {business.phone}
              </a>
              <button
                className="btn btn-outline"
                style={{ marginTop: 10, width: "100%", justifyContent: "center" }}
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="contact-modal-top">
                <div className="contact-modal-leaf" aria-hidden>
                  <img src="/images/favicon-32.png" alt="" width={28} height={28} />
                </div>
                <div>
                  <h2 className="contact-modal-title">Quick Contact</h2>
                  <p className="contact-modal-sub">
                    The studio replies within a few hours.
                  </p>
                </div>
              </div>

              <form className="contact-modal-form" onSubmit={handleSubmit} noValidate>
                <div className={`cm-field${errors.name ? " has-err" : ""}`}>
                  <label htmlFor="cm-name">Your Name</label>
                  <input
                    id="cm-name"
                    type="text"
                    placeholder="Full name"
                    value={name}
                    maxLength={60}
                    inputMode="text"
                    autoComplete="name"
                    onKeyDown={allowNameKey}
                    onChange={(e) => {
                      setName(sanitizeName(e.target.value));
                      setErrors((p) => ({ ...p, name: "" }));
                    }}
                  />
                  {errors.name && <span className="cm-err">{errors.name}</span>}
                </div>

                <div className={`cm-field${errors.phone ? " has-err" : ""}`}>
                  <label htmlFor="cm-phone">Mobile Number</label>
                  <input
                    id="cm-phone"
                    type="tel"
                    placeholder="10-digit mobile"
                    value={phone}
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    autoComplete="tel"
                    onKeyDown={allowPhoneKey}
                    onChange={(e) => {
                      setPhone(sanitizePhone(e.target.value));
                      setErrors((p) => ({ ...p, phone: "" }));
                    }}
                  />
                  {errors.phone && <span className="cm-err">{errors.phone}</span>}
                </div>

                <div className={`cm-field${errors.email ? " has-err" : ""}`}>
                  <label htmlFor="cm-email">
                    Email <span className="cm-opt">(optional)</span>
                  </label>
                  <input
                    id="cm-email"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    maxLength={80}
                    inputMode="email"
                    autoComplete="email"
                    onKeyDown={allowEmailKey}
                    onChange={(e) => {
                      setEmail(sanitizeEmail(e.target.value));
                      setErrors((p) => ({ ...p, email: "" }));
                    }}
                  />
                  {errors.email && <span className="cm-err">{errors.email}</span>}
                </div>

                <div className={`cm-field${errors.service ? " has-err" : ""}`}>
                  <label htmlFor="cm-service">Service Needed</label>
                  <select
                    id="cm-service"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      setErrors((p) => ({ ...p, service: "" }));
                    }}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && <span className="cm-err">{errors.service}</span>}
                </div>

                <div className={`cm-field${errors.message ? " has-err" : ""}`}>
                  <label htmlFor="cm-msg">
                    Brief Description <span className="cm-opt">(optional)</span>
                  </label>
                  <textarea
                    id="cm-msg"
                    placeholder="Size of garden, property type, city…"
                    rows={3}
                    value={message}
                    maxLength={800}
                    onChange={(e) => {
                      setMessage(sanitizeMessage(e.target.value));
                      setErrors((p) => ({ ...p, message: "" }));
                    }}
                  />
                  {errors.message && <span className="cm-err">{errors.message}</span>}
                </div>

                {submitError && (
                  <div className="cm-err cm-err-banner" role="alert">
                    {submitError}
                  </div>
                )}

                <button type="submit" className="btn btn-green cm-submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </button>

                <p className="cm-footer-note">
                  Or call directly:{" "}
                  <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
                </p>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
