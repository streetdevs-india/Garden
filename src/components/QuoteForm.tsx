"use client";

import { FormEvent, useMemo, useState } from "react";
import { services } from "@/lib/site";
import { Arrow } from "@/components/Icons";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "service" | "message", string>>;

function validate(values: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const phone = values.phone.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Please enter your full name (at least 2 characters).";
  else if (!/^[a-zA-Z\s.'-]{2,60}$/.test(name)) errors.name = "Use letters only in your name.";

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 12) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  } else if (!/^[6-9]\d{9}$/.test(digits.slice(-10))) {
    errors.phone = "Mobile number should start with 6–9.";
  }

  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Enter a valid email address.";

  if (!values.service) errors.service = "Please select a service.";

  if (message && message.length < 10) {
    errors.message = "Add a bit more detail (at least 10 characters), or leave this blank.";
  } else if (message.length > 800) {
    errors.message = "Please keep the message under 800 characters.";
  }

  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0]?.title ?? "Garden Design & Planning",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // honeypot — bots fill this, humans don't
  const [honeypot, setHoneypot] = useState("");

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (touched[key]) setErrors(validate(next));
      return next;
    });
  }

  function onBlur(key: keyof typeof values) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setValues((prev) => {
      setErrors(validate(prev));
      return prev;
    });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Honeypot check — silently "succeed" for bots
    if (honeypot) { setSent(true); return; }

    const nextErrors = validate(values);
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 350);
  }

  if (sent) {
    return (
      <div className="form form-success" role="status" aria-live="polite">
        <h3>Thank you — request received</h3>
        <p>
          We’ve saved your details for <strong>{values.name}</strong>. Our team will contact you on{" "}
          <strong>{values.phone}</strong> or <strong>{values.email}</strong> about your garden.
        </p>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => {
            setSent(false);
            setValues({
              name: "",
              phone: "",
              email: "",
              service: services[0]?.title ?? "Garden Design & Planning",
              message: "",
            });
            setErrors({});
            setTouched({});
          }}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label className={touched.name && errors.name ? "has-error" : undefined}>
        Full name
        <input
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          onBlur={() => onBlur("name")}
          placeholder="Your name"
          aria-invalid={Boolean(touched.name && errors.name)}
          aria-describedby={errors.name ? "err-name" : undefined}
        />
        {touched.name && errors.name && (
          <span className="field-error" id="err-name">
            {errors.name}
          </span>
        )}
      </label>

      <label className={touched.phone && errors.phone ? "has-error" : undefined}>
        Phone
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          onBlur={() => onBlur("phone")}
          placeholder="10-digit mobile number"
          aria-invalid={Boolean(touched.phone && errors.phone)}
          aria-describedby={errors.phone ? "err-phone" : undefined}
        />
        {touched.phone && errors.phone && (
          <span className="field-error" id="err-phone">
            {errors.phone}
          </span>
        )}
      </label>

      <label className={touched.email && errors.email ? "has-error" : undefined}>
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={() => onBlur("email")}
          placeholder="you@email.com"
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {touched.email && errors.email && (
          <span className="field-error" id="err-email">
            {errors.email}
          </span>
        )}
      </label>

      <label className={touched.service && errors.service ? "has-error" : undefined}>
        Service
        <select
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          onBlur={() => onBlur("service")}
          aria-invalid={Boolean(touched.service && errors.service)}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {touched.service && errors.service && <span className="field-error">{errors.service}</span>}
      </label>

      <label className={touched.message && errors.message ? "has-error" : undefined}>
        Tell us about the space <em>(optional)</em>
        <textarea
          name="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => onBlur("message")}
          placeholder="Lawn, patio, lighting, a full garden…"
          rows={4}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {touched.message && errors.message && (
          <span className="field-error" id="err-message">
            {errors.message}
          </span>
        )}
      </label>

      {hasErrors && Object.values(touched).some(Boolean) && (
        <div className="form-banner" role="alert">
          Please fix the highlighted fields before submitting.
        </div>
      )}

      {/* Honeypot: visually hidden, not filled by real users */}
      <label style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
        <span>Do not fill this field</span>
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </label>

      <button className="btn btn-green" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Get a Free Quote"} {submitting ? null : <Arrow />}
      </button>
    </form>
  );
}
