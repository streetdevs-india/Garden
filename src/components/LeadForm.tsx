"use client";

import { useState } from "react";
import { Arrow } from "@/components/Icons";

const propertyTypes = [
  "Home / Villa",
  "Farmhouse",
  "Restaurant / Café",
  "Hotel / Resort",
  "Corporate Campus",
  "Society / RWA",
  "Other",
];

function validatePhone(p: string) {
  const d = p.replace(/\D/g, "");
  return d.length >= 10 && /^[6-9]\d{9}$/.test(d.slice(-10));
}

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) { setSent(true); return; }

    const errs: Record<string, string> = {};
    if (name.trim().length < 2) errs.name = "Please enter your name";
    if (!validatePhone(phone)) errs.phone = "Enter a valid 10-digit mobile number";
    if (!property) errs.property = "Please select a property type";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="lead-success" role="status">
        <div className="lead-success-icon">✓</div>
        <h3>Request received!</h3>
        <p>
          We&apos;ll call <strong>{name}</strong> at <strong>{phone}</strong> within 4 hours
          to schedule a free site visit.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      {/* Honeypot */}
      <label style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }} aria-hidden>
        <input type="text" name="url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </label>

      <div className="lead-field">
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
          autoComplete="name"
          className={errors.name ? "has-err" : ""}
        />
        {errors.name && <span className="lead-err">{errors.name}</span>}
      </div>

      <div className="lead-field">
        <input
          placeholder="Mobile number"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }}
          autoComplete="tel"
          className={errors.phone ? "has-err" : ""}
        />
        {errors.phone && <span className="lead-err">{errors.phone}</span>}
      </div>

      <div className="lead-field">
        <select
          value={property}
          onChange={(e) => { setProperty(e.target.value); setErrors((p) => ({ ...p, property: "" })); }}
          className={errors.property ? "has-err" : ""}
        >
          <option value="">Property type…</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.property && <span className="lead-err">{errors.property}</span>}
      </div>

      <button type="submit" className="btn btn-green lead-submit">
        Get a Free Site Visit <Arrow />
      </button>
    </form>
  );
}
