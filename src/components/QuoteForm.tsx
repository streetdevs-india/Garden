"use client";

import { FormEvent, useMemo, useState } from "react";
import { services } from "@/lib/site";
import { Arrow } from "@/components/Icons";
import {
  allowEmailKey,
  allowNameKey,
  allowPhoneKey,
  sanitizeEmail,
  sanitizeMessage,
  sanitizeName,
  sanitizePhone,
  validateEmail,
  validateName,
  validateOptionalMessage,
  validatePhone,
  validateRequiredSelect,
} from "@/lib/formValidation";
import { submitLead } from "@/lib/leads/submitLead";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "service" | "message", string>>;

function validate(values: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  const nameErr = validateName(values.name);
  const phoneErr = validatePhone(values.phone);
  const emailErr = validateEmail(values.email);
  const serviceErr = validateRequiredSelect(values.service, "service");
  const messageErr = validateOptionalMessage(values.message);
  if (nameErr) errors.name = nameErr;
  if (phoneErr) errors.phone = phoneErr;
  if (emailErr) errors.email = emailErr;
  if (serviceErr) errors.service = serviceErr;
  if (messageErr) errors.message = messageErr;
  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) {
      setSent(true);
      return;
    }

    const nextErrors = validate(values);
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError("");
    const result = await submitLead({
      source: "quote-form",
      name: values.name,
      phone: values.phone,
      email: values.email,
      service: values.service,
      message: values.message,
      honeypot,
    });
    setSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form form-success" role="status" aria-live="polite">
        <h3>Thank you — request received</h3>
        <p>
          Thank you for choosing Hind Landscape Co. We&apos;ve saved your details for{" "}
          <strong>{values.name}</strong>. Our team will contact you on{" "}
          <strong>{values.phone}</strong> or <strong>{values.email}</strong>.
          A confirmation email has been sent to you.
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
              service: "",
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
          maxLength={60}
          inputMode="text"
          onKeyDown={allowNameKey}
          onChange={(e) => update("name", sanitizeName(e.target.value))}
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
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          autoComplete="tel"
          value={values.phone}
          onKeyDown={allowPhoneKey}
          onChange={(e) => update("phone", sanitizePhone(e.target.value))}
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
          inputMode="email"
          maxLength={80}
          value={values.email}
          onKeyDown={allowEmailKey}
          onChange={(e) => update("email", sanitizeEmail(e.target.value))}
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
          <option value="">Choose a service…</option>
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
          maxLength={800}
          onChange={(e) => update("message", sanitizeMessage(e.target.value))}
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

      {submitError && (
        <div className="form-banner" role="alert">
          {submitError}
        </div>
      )}

      <button className="btn btn-green" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Get a Free Quote"} {submitting ? null : <Arrow />}
      </button>
    </form>
  );
}
