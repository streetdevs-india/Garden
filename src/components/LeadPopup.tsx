"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { services } from "@/lib/site";
import { business } from "@/lib/business";
import { Arrow, HindMark, PhoneIcon } from "@/components/Icons";

const STORAGE_KEY = "hind-lead-popup-seen-v2";

function validate(name: string, phone: string, service: string) {
  const errors: Record<string, string> = {};
  const n = name.trim();
  if (n.length < 2) errors.name = "Please enter your name.";
  else if (!/^[a-zA-Z\s.'-]{2,60}$/.test(n)) errors.name = "Use letters only in your name.";

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 12) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  } else if (!/^[6-9]\d{9}$/.test(digits.slice(-10))) {
    errors.phone = "Mobile number should start with 6–9.";
  }

  if (!service) errors.service = "Please choose a service.";
  return errors;
}

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* private mode — still show once this session */
    }

    const timer = window.setTimeout(() => setOpen(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstField.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function markSeen() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  function dismiss() {
    markSeen();
    setOpen(false);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) {
      markSeen();
      setSent(true);
      return;
    }
    const next = validate(name, phone, service);
    setErrors(next);
    if (Object.keys(next).length) return;
    markSeen();
    setSent(true);
  }

  if (!open) return null;

  return (
    <div className="lead-pop-backdrop" onClick={dismiss} role="presentation">
      <div
        className="lead-pop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-pop-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="lead-pop-close" onClick={dismiss} aria-label="Close">
          ×
        </button>

        <div className="lead-pop-head">
          <span className="lead-pop-mark"><HindMark size={32} /></span>
          <p className="lead-pop-kicker">Free site visit</p>
          <h2 id="lead-pop-title">Tell Ajay what you need</h2>
          <p>
            Three details. {business.contactName} calls you back on your number —
            no spam, no long form.
          </p>
          <div className="lead-pop-pills">
            <span>Free site visit</span>
            <span>Named plant list</span>
            <span>Reply in hours</span>
          </div>
        </div>

        {sent ? (
          <div className="lead-pop-done" role="status">
            <strong>Got it, {name.trim().split(" ")[0] || "there"}.</strong>
            <p>
              We&apos;ll call <b>{phone}</b> about <b>{service}</b> within a few hours.
            </p>
            <button type="button" className="btn btn-green" onClick={dismiss}>
              Continue browsing <Arrow />
            </button>
          </div>
        ) : (
          <form className="lead-pop-form" onSubmit={submit} noValidate>
            <label className="sr-only" aria-hidden>
              Company website
              <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </label>

            <label className={errors.name ? "has-error" : undefined}>
              Name
              <input
                ref={firstField}
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((p) => ({ ...p, name: "" }));
                }}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>

            <label className={errors.phone ? "has-error" : undefined}>
              Phone number
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="10-digit mobile"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrors((p) => ({ ...p, phone: "" }));
                }}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </label>

            <label className={errors.service ? "has-error" : undefined}>
              Service
              <select
                name="service"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  setErrors((p) => ({ ...p, service: "" }));
                }}
              >
                <option value="">Choose a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && <span className="field-error">{errors.service}</span>}
            </label>

            <button type="submit" className="btn btn-green lead-pop-submit">
              Request a callback <Arrow />
            </button>
            <a href={`tel:${business.phoneTel}`} className="lead-pop-call">
              <PhoneIcon size={15} /> Prefer to call? {business.phone}
            </a>
            <button type="button" className="lead-pop-skip" onClick={dismiss}>
              Skip for now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
