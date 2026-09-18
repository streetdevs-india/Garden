"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { LeafIcon, PhoneIcon } from "@/components/Icons";

const SERVICES = [
  "Garden Design",
  "Lawn Care & Maintenance",
  "Irrigation System",
  "Hardscaping",
  "Outdoor Lighting",
  "Terrace Garden",
  "Vertical Garden",
  "Farmhouse Landscaping",
  "Commercial Landscaping",
  "Maintenance AMC",
];

type State = "idle" | "sent";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
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
      setService("");
      setMessage("");
      setErrors({});
    }
  }, [open]);

  // Also handle native dialog cancel (Escape key via browser)
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
    if (!name.trim()) errs.name = "Name required";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) errs.phone = "Valid 10-digit number required";
    else if (!/^[6-9]/.test(digits)) errs.phone = "Must start with 6–9";
    if (!service) errs.service = "Please pick a service";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setState("sent");
  }

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        className="contact-modal-trigger"
        onClick={() => setOpen(true)}
        aria-label="Open quick contact form"
      >
        <PhoneIcon size={16} />
        Quick Contact
      </button>

      {/* Dialog modal */}
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
                Thank you, {name}. {business.contactName} will call you at{" "}
                <strong>{phone}</strong> within a few hours.
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
                  <LeafIcon size={28} />
                </div>
                <div>
                  <h2 className="contact-modal-title">Quick Contact</h2>
                  <p className="contact-modal-sub">
                    {business.contactName} replies within a few hours.
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
                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
                    autoComplete="name"
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
                    onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className="cm-err">{errors.phone}</span>}
                </div>

                <div className={`cm-field${errors.service ? " has-err" : ""}`}>
                  <label htmlFor="cm-service">Service Needed</label>
                  <select
                    id="cm-service"
                    value={service}
                    onChange={(e) => { setService(e.target.value); setErrors((p) => ({ ...p, service: "" })); }}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <span className="cm-err">{errors.service}</span>}
                </div>

                <div className="cm-field">
                  <label htmlFor="cm-msg">Brief Description <span className="cm-opt">(optional)</span></label>
                  <textarea
                    id="cm-msg"
                    placeholder="Size of garden, property type, city…"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-green cm-submit">
                  Send Message
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
