"use client";

import { useState } from "react";
import { Arrow } from "@/components/Icons";
import {
  allowNameKey,
  allowPhoneKey,
  sanitizeName,
  sanitizePhone,
  validateName,
  validatePhone,
  validateRequiredSelect,
} from "@/lib/formValidation";

const propertyTypes = [
  "Home / Villa",
  "Farmhouse",
  "Restaurant / Café",
  "Hotel / Resort",
  "Corporate Campus",
  "Society / RWA",
  "Other",
];

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) {
      setSent(true);
      return;
    }

    const errs: Record<string, string> = {};
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    const propertyErr = validateRequiredSelect(property, "property type");
    if (nameErr) errs.name = nameErr;
    if (phoneErr) errs.phone = phoneErr;
    if (propertyErr) errs.property = propertyErr;
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
      <label style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }} aria-hidden>
        <input type="text" name="url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </label>

      <div className="lead-field">
        <input
          placeholder="Your name"
          value={name}
          maxLength={60}
          inputMode="text"
          autoComplete="name"
          onKeyDown={allowNameKey}
          onChange={(e) => {
            setName(sanitizeName(e.target.value));
            setErrors((p) => ({ ...p, name: "" }));
          }}
          className={errors.name ? "has-err" : ""}
        />
        {errors.name && <span className="lead-err">{errors.name}</span>}
      </div>

      <div className="lead-field">
        <input
          placeholder="Mobile number"
          type="tel"
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          value={phone}
          autoComplete="tel"
          onKeyDown={allowPhoneKey}
          onChange={(e) => {
            setPhone(sanitizePhone(e.target.value));
            setErrors((p) => ({ ...p, phone: "" }));
          }}
          className={errors.phone ? "has-err" : ""}
        />
        {errors.phone && <span className="lead-err">{errors.phone}</span>}
      </div>

      <div className="lead-field">
        <select
          value={property}
          onChange={(e) => {
            setProperty(e.target.value);
            setErrors((p) => ({ ...p, property: "" }));
          }}
          className={errors.property ? "has-err" : ""}
        >
          <option value="">Property type…</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
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
