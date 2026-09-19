import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/SiteChrome";
import { ContactModal } from "@/components/ContactModal";
import { business } from "@/lib/business";
import { locations } from "@/lib/locations";
import { quoteAssurances, homeFaqs } from "@/lib/psychology";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animate";
import { Arrow, PhoneIcon, WhatsAppIcon, MailIcon, MapPinIcon, ClockIcon, FeatureIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Contact ${business.name} | Free Site Visit Delhi NCR`,
  description: `Reach ${business.contactName} at ${business.name} — call ${business.phone}, WhatsApp or fill the form. Free site visit for garden design, lawn care and landscaping.`,
  path: "/contact",
});

// D-51 Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi 110025 — real pin
const mapSrc =
  "https://maps.google.com/maps?q=D-51+Abul+Fazal+Enclave+Jamia+Nagar+Okhla+New+Delhi+110025&t=&z=15&ie=UTF8&iwloc=&output=embed";

const trustStrip = [
  { icon: "leaf",      label: "Free site visit",  sub: "No obligation" },
  { icon: "bolt",      label: "4-hour reply",     sub: "Mon – Sat" },
  { icon: "clipboard", label: "Named quotes",     sub: "Plant lists included" },
  { icon: "award",     label: "30+ yrs practice", sub: "Trusted studio" },
];

export default function ContactPage() {
  return (
    <main>

      {/* ══════ HERO ══════ */}
      <section
        className="page-hero contact-hero-tall"
        style={{ "--hero-img": "url('/images/work-landscape.jpg')" } as React.CSSProperties}
      >
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Contact" }]} />
          <div className="eyebrow">Contact Us</div>
          <h1>Start your landscape<br />journey today</h1>
          <p>
            One call or message is all it takes. Our studio will walk through your requirements
            and suggest the best next step — free.
          </p>
          <div className="contact-hero-actions">
            <Link href="/quote" className="btn btn-green btn-pulse">
              Book a free site visit <Arrow />
            </Link>
            <a
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi Hind Landscape Co., I would like to discuss a landscaping project.")}`}
              className="btn btn-outline contact-hero-wa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={18} /> WhatsApp
            </a>
            <a
              href={`tel:${business.phoneTel}`}
              className="btn btn-outline contact-hero-call"
              aria-label={`Call ${business.phone}`}
            >
              <PhoneIcon size={18} /> Call us
            </a>
            <ContactModal />
          </div>
        </div>

        {/* Floating phone pill */}
        <div className="contact-hero-pill">
          <span className="contact-hero-dot" aria-hidden />
          <span>Available Mon – Sat · 8 AM – 6 PM</span>
          <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
        </div>
      </section>

      {/* ══════ TRUST STRIP ══════ */}
      <div className="contact-trust-strip">
        <div className="wrap">
          <div className="contact-trust-row">
            {trustStrip.map((t) => (
              <div key={t.label} className="contact-trust-item">
                <span className="contact-trust-icon" aria-hidden>
                  <FeatureIcon name={t.icon} size={22} />
                </span>
                <div className="contact-trust-copy">
                  <strong>{t.label}</strong>
                  <span>{t.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ FORM + INFO SPLIT ══════ */}
      <section className="page-section contact-main-section">
        <div className="wrap">
          <div className="contact-split">

            {/* LEFT — Info card (dark) */}
            <FadeUp className="contact-info-col">
              <div className="contact-info-panel">

                {/* Director card */}
                <div className="contact-director">
                  <img
                    src="/images/team/ajay-kumar.png"
                    alt={business.contactName}
                    className="contact-director-img"
                  />
                  <div>
                    <strong>{business.contactName}</strong>
                    <span>Director &amp; Principal Landscape Designer</span>
                    <span className="contact-director-exp">30+ years of practice</span>
                  </div>
                </div>

                {/* Contact details */}
                <ul className="contact-detail-list">
                  <li>
                    <span className="cdl-icon cdl-phone" aria-hidden><PhoneIcon size={20} solid /></span>
                    <div className="cdl-copy">
                      <em>Phone</em>
                      <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
                    </div>
                  </li>
                  <li>
                    <span className="cdl-icon cdl-wa" aria-hidden><WhatsAppIcon size={20} /></span>
                    <div className="cdl-copy">
                      <em>WhatsApp</em>
                      <a
                        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi Ajay, I want to discuss a landscaping project.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="cdl-icon cdl-mail" aria-hidden><MailIcon size={20} solid /></span>
                    <div className="cdl-copy">
                      <em>Email</em>
                      <a href={`mailto:${business.email}`}>{business.email}</a>
                    </div>
                  </li>
                  <li>
                    <span className="cdl-icon cdl-pin" aria-hidden><MapPinIcon size={20} solid /></span>
                    <div className="cdl-copy">
                      <em>Studio Address</em>
                      <span>{business.addressLine}</span>
                    </div>
                  </li>
                  <li>
                    <span className="cdl-icon cdl-clock" aria-hidden><ClockIcon size={20} solid /></span>
                    <div className="cdl-copy">
                      <em>Working Hours</em>
                      <span>Monday – Saturday, 8:00 AM – 6:00 PM</span>
                    </div>
                  </li>
                </ul>

                {/* Service areas */}
                <div className="contact-areas">
                  <p className="contact-areas-label">We serve</p>
                  <div className="contact-areas-chips">
                    {locations.filter((l) => l.primary).map((l) => (
                      <Link key={l.slug} href={`/locations/${l.slug}`}>
                        {l.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Assurances */}
                <ul className="contact-assures-v2">
                  {quoteAssurances.slice(0, 3).map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </FadeUp>

            {/* RIGHT — Quote form */}
            <FadeUp delay={110} className="contact-form-col">
              <div className="contact-form-panel">
                <div className="contact-form-head">
                  <div className="eyebrow">Request a visit</div>
                  <h2>Tell us about your space</h2>
                  <p>Share a few details — we respond with a clear scope and timeline, usually within 4 hours.</p>
                </div>
                <QuoteForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════ MAP + ADDRESS ══════ */}
      <section className="contact-map-section">
        <div className="wrap">
          <FadeUp>
            <div className="contact-map-layout">
              <div className="contact-map-frame">
                <iframe
                  title={`${business.name} studio — New Delhi`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="contact-map-aside">
                <div className="eyebrow">Find us</div>
                <h2>Visit the studio</h2>
                <address className="contact-map-address">
                  {business.addressLine}
                </address>
                <div className="contact-map-actions">
                  <a
                    href={`https://maps.google.com/maps?q=D-51+Abul+Fazal+Enclave+Jamia+Nagar+Okhla+New+Delhi+110025`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-green"
                  >
                    Get Directions <Arrow />
                  </a>
                  <a href={`tel:${business.phoneTel}`} className="btn btn-outline">
                    Call us
                  </a>
                </div>
                <p className="contact-map-note">
                  We also visit sites across Delhi NCR — call us and we&apos;ll come to you.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="page-section contact-faq-section">
        <div className="wrap">
          <FadeUp>
            <div className="contact-faq-head">
              <div>
                <div className="eyebrow">FAQs</div>
                <h2>Common questions</h2>
              </div>
              <Link href="/faq" className="btn btn-outline">
                All FAQs <Arrow />
              </Link>
            </div>
          </FadeUp>
          <div className="contact-faq-grid">
            {homeFaqs.map((f, i) => (
              <FadeUp key={f.q} delay={i * 60}>
                <details className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
