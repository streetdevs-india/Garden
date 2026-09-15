import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/SiteChrome";
import { business } from "@/lib/business";
import { locations } from "@/lib/locations";
import { quoteAssurances, homeFaqs } from "@/lib/psychology";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Greenly | Landscaping Quote Delhi NCR",
  description:
    "Contact Mohd Anas at Greenly for landscaping in Delhi NCR. Call +91 97161 77107 or request a site assessment for garden design, lawn care and maintenance.",
  path: "/contact",
});

const mapSrc = `https://www.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=11&hl=en&output=embed`;

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Contact" }]} />
          <div className="eyebrow">Contact</div>
          <h1>Tell us about the space</h1>
          <p>
            Speak with {business.contactName} — share a little about the garden, the lawn or the project.
            We&apos;ll come back with the next step.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="contact-layout">
            <FadeUp>
              <QuoteForm />
            </FadeUp>

            <FadeUp delay={120}>
              <div className="contact-card">
                <p className="contact-kicker">Your landscaper</p>
                <h2>{business.contactName}</h2>
                <p className="contact-firm">
                  {business.legalName} — homes, farmhouses, hotels and campuses across Delhi NCR.
                </p>

                <div className="contact-facts">
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
                  </div>
                  <div>
                    <strong>WhatsApp</strong>
                    <a
                      href={`https://wa.me/${business.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message Anas
                    </a>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${business.email}`}>{business.email}</a>
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <span>Monday – Saturday, 8:00 – 18:00</span>
                  </div>
                  <div>
                    <strong>We serve</strong>
                    <div className="contact-chips">
                      {locations.filter((l) => l.primary).map((l) => (
                        <Link key={l.slug} href={`/locations/${l.slug}`}>
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="contact-assures">
                  {quoteAssurances.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="contact-map-block">
              <div className="contact-map-copy">
                <div className="eyebrow">Find us</div>
                <h2>Delhi NCR, by appointment</h2>
                <p>
                  We visit sites across Delhi, Gurugram, Noida and Faridabad. Call {business.contactName} on{" "}
                  <a href={`tel:${business.phoneTel}`}>{business.phone}</a> and we&apos;ll come to you.
                </p>
              </div>
              <div className="contact-map">
                <iframe
                  title="Greenly service area — Delhi NCR"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div style={{ marginTop: 48 }}>
              <h2 style={{ marginBottom: 20 }}>Common questions</h2>
              <div className="faq-list">
                {homeFaqs.map((f) => (
                  <details key={f.q} className="faq-item">
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
