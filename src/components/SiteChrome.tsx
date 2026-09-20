"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { pages, services } from "@/lib/site";
import { business } from "@/lib/business";
import { Arrow, Chevron, MenuIcon, PhoneIcon, WhatsAppIcon, MailIcon, MapPinIcon, PlayIcon, SearchIcon } from "./Icons";
import { BrandLogo } from "./BrandLogo";
import { StickyAsk } from "./StickyAsk";
export { QuoteForm } from "./QuoteForm";

type VideoCtx = { openVideo: () => void };
const VideoContext = createContext<VideoCtx>({ openVideo: () => {} });
export function useVideo() {
  return useContext(VideoContext);
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [video, setVideo] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [openAcc, setOpenAcc] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenu(false);
    setSearch(false);
    setOpenDrop(null);
    setOpenAcc(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideo(false);
        setSearch(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const pageHits = pages
      .filter((p) => p.label.toLowerCase().includes(q))
      .map((p) => ({ href: p.href, title: p.label, text: "Page" }));
    const serviceHits = services
      .filter((s) => `${s.title} ${s.text}`.toLowerCase().includes(q))
      .map((s) => ({ href: `/services/${s.slug}`, title: s.title, text: s.text }));
    const extras = [
      { href: "/blog", title: "Blogs", text: "Guides & city SEO" },
      { href: "/locations", title: "Locations", text: "Cities & states India" },
      { href: "/faq", title: "FAQ", text: "Common questions" },
      { href: "/quote", title: "Get a Quote", text: "Free assessment" },
    ].filter((item) => `${item.title} ${item.text}`.toLowerCase().includes(q));
    return [...pageHits, ...serviceHits, ...extras].slice(0, 8);
  }, [query]);

  // Scroll-aware header
  useEffect(() => {
    const header = document.querySelector(".header") as HTMLElement | null;
    if (!header) return;
    const update = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <VideoContext.Provider value={{ openVideo: () => setVideo(true) }}>
      <header className="header">
        <div className="header-inner">
          <BrandLogo variant="header" />
          <nav className="nav" aria-label="Primary">
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <div className={`nav-drop${openDrop === "services" ? " is-open" : ""}`}>
              <Link
                href="/services"
                className={`nav-drop-link${pathname.startsWith("/services") ? " active" : ""}`}
              >
                Services
              </Link>
              <button
                type="button"
                className="nav-drop-chev"
                aria-label="Open services menu"
                aria-expanded={openDrop === "services"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenDrop((cur) => (cur === "services" ? null : "services"));
                }}
              >
                <Chevron />
              </button>
              <div className="nav-menu">
                <Link href="/services" className="nav-all-services">
                  All Services <span>→</span>
                </Link>
                <div className="nav-menu-sep" />
                {services.slice(0, 7).map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>
                ))}
              </div>
            </div>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>About Us</Link>
            <Link href="/gallery" className={pathname === "/gallery" ? "active" : ""}>Gallery</Link>
            <div className={`nav-drop${openDrop === "blogs" ? " is-open" : ""}`}>
              <Link
                href="/blog"
                className={`nav-drop-link${pathname.startsWith("/blog") ? " active" : ""}`}
              >
                Blogs
              </Link>
              <button
                type="button"
                className="nav-drop-chev"
                aria-label="Open blogs menu"
                aria-expanded={openDrop === "blogs"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenDrop((cur) => (cur === "blogs" ? null : "blogs"));
                }}
              >
                <Chevron />
              </button>
              <div className="nav-menu">
                <Link href="/blog" className="nav-all-services">
                  All Blogs <span>→</span>
                </Link>
                <div className="nav-menu-sep" />
                <Link href="/blog#cat-delhi-ncr-guides">Delhi NCR Guides</Link>
                <Link href="/blog#cat-cost-planning">Cost &amp; Planning</Link>
                <Link href="/blog#cat-lawn-care">Lawn Care</Link>
                <Link href="/blog#india-coverage">Cities &amp; States</Link>
                <Link href="/locations">Browse by Location</Link>
                <Link href="/landscaping-company-india">Pan-India Landscaping</Link>
              </div>
            </div>
            <Link href="/testimonials" className={pathname === "/testimonials" ? "active" : ""}>Testimonials</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search" onClick={() => setSearch(true)}>
              <SearchIcon />
            </button>
            <Link href="/quote" className="btn btn-green">Get a Quote <Arrow /></Link>
            <button className="icon-btn menu-btn" aria-label="Open menu" onClick={() => setMenu(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <>
          <div className="backdrop" onClick={() => setMenu(false)} />
          <aside className="drawer" aria-label="Mobile menu">
            <div className="drawer-head">
              <strong>Menu</strong>
              <button className="icon-btn" onClick={() => setMenu(false)} aria-label="Close menu">✕</button>
            </div>
            {pages.map((p) => {
              if (p.href === "/services") {
                return (
                  <div key={p.href} className="drawer-acc">
                    <div className="drawer-acc-row">
                      <Link href="/services">{p.label}</Link>
                      <button
                        type="button"
                        className="drawer-acc-tog"
                        aria-expanded={openAcc === "services"}
                        onClick={() => setOpenAcc((cur) => (cur === "services" ? null : "services"))}
                      >
                        <Chevron />
                      </button>
                    </div>
                    {openAcc === "services" && (
                      <div className="drawer-acc-panel">
                        {services.slice(0, 7).map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (p.href === "/blog") {
                return (
                  <div key={p.href} className="drawer-acc">
                    <div className="drawer-acc-row">
                      <Link href="/blog">{p.label}</Link>
                      <button
                        type="button"
                        className="drawer-acc-tog"
                        aria-expanded={openAcc === "blogs"}
                        onClick={() => setOpenAcc((cur) => (cur === "blogs" ? null : "blogs"))}
                      >
                        <Chevron />
                      </button>
                    </div>
                    {openAcc === "blogs" && (
                      <div className="drawer-acc-panel">
                        <Link href="/blog#cat-delhi-ncr-guides">Delhi NCR Guides</Link>
                        <Link href="/blog#cat-cost-planning">Cost &amp; Planning</Link>
                        <Link href="/blog#cat-lawn-care">Lawn Care</Link>
                        <Link href="/blog#india-coverage">Cities &amp; States</Link>
                        <Link href="/locations">Browse by Location</Link>
                      </div>
                    )}
                  </div>
                );
              }
              return <Link key={p.href} href={p.href}>{p.label}</Link>;
            })}
            <Link href="/quote" className="btn btn-green drawer-cta">Get a Quote <Arrow /></Link>
          </aside>
        </>
      )}

      {search && (
        <div className="overlay search-overlay" onClick={() => setSearch(false)}>
          <div className="search-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Search">
            <div className="search-panel-top">
              <span className="search-panel-badge" aria-hidden><SearchIcon /></span>
              <div className="search-panel-copy">
                <strong>Search</strong>
                <span>Services, gallery &amp; more</span>
              </div>
              <button type="button" className="search-panel-close" onClick={() => setSearch(false)} aria-label="Close search">
                ✕
              </button>
            </div>
            <label className="search-field">
              <span className="sr-only">Search query</span>
              <span className="search-field-ico" aria-hidden><SearchIcon /></span>
              <input
                autoFocus
                placeholder="Search lawn, lighting, gallery…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <div className="search-results">
              {!query && (
                <p className="search-hint">Type to find pages and services.</p>
              )}
              {query && hits.length === 0 && (
                <p className="search-empty">No matches. Try “lawn”, “lighting” or “gallery”.</p>
              )}
              {hits.map((hit) => (
                <Link key={hit.href + hit.title} href={hit.href} className="search-hit" onClick={() => setSearch(false)}>
                  <strong>{hit.title}</strong>
                  <span>{hit.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {children}

      {video && <VideoModal onClose={() => setVideo(false)} />}
      <Footer />
      <StickyAsk />
    </VideoContext.Provider>
  );
}

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <span>Watch our process</span>
          <button onClick={onClose}>Close</button>
        </div>
        <video src={business.aboutVideo} controls autoPlay playsInline />
      </div>
    </div>
  );
}

export function WatchButton({ title, subtitle }: { title: string; subtitle: string }) {
  const { openVideo } = useVideo();
  return (
    <button className="watch" type="button" onClick={openVideo}>
      <span className="play"><PlayIcon /></span>
      <span>
        <strong>{title}</strong>
        <em>{subtitle}</em>
      </span>
    </button>
  );
}

export function VideoCard() {
  const { openVideo } = useVideo();
  return (
    <button
      className="video-card"
      type="button"
      onClick={openVideo}
      aria-label="Play our process video"
    >
      <video
        className="video-card-media"
        src={business.aboutVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <span className="video-play"><PlayIcon size={22} /></span>
      <span className="video-caption">
        <strong>Beautiful spaces<br />start with the right care</strong>
        <span>Watch Our Process <Arrow /></span>
      </span>
    </button>
  );
}

function Footer() {
  const { lat, lng } = business.geo;
  const mapQuery = encodeURIComponent(business.addressLine);
  const mapEmbed =
    `https://maps.google.com/maps?q=${lat},${lng}&ll=${lat},${lng}&z=16&hl=en&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <footer className="footer">
      {/* ── CTA banner ── */}
      <div className="footer-cta-banner">
        <div className="wrap footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">Ready to begin?</span>
            <h3>Let&apos;s design your outdoor space</h3>
          </div>
          <div className="footer-cta-actions">
            <a href={`tel:${business.phoneTel}`} className="footer-cta-call">
              <PhoneIcon size={16} /> Call Now
            </a>
            <Link href="/quote" className="footer-cta-quote">
              Free Site Visit <Arrow />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main grid: brand + link columns ── */}
      <div className="wrap footer-grid">
        <div className="footer-brand-col">
          <BrandLogo variant="footer" className="footer-logo" />
          <p className="footer-tagline">
            Landscape architects crafting master plans for homes, campuses and cities across Delhi NCR &amp; India.
          </p>

          <ul className="footer-contact-list">
            <li>
              <a href={`tel:${business.phoneTel}`}>
                <span className="footer-contact-ico"><PhoneIcon size={18} solid /></span>
                <span className="footer-contact-text">
                  <em>Call us</em>
                  <b>{business.phone}</b>
                </span>
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <span className="footer-contact-ico footer-contact-ico-wa"><WhatsAppIcon size={18} /></span>
                <span className="footer-contact-text">
                  <em>WhatsApp</em>
                  <b>Message us anytime</b>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>
                <span className="footer-contact-ico footer-contact-ico-mail"><MailIcon size={18} solid /></span>
                <span className="footer-contact-text">
                  <em>Email</em>
                  <b>{business.email}</b>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links-wrap">
          <div className="footer-link-col">
            <h4>Explore</h4>
            {pages.map((p) => (
              <Link key={p.href} href={p.href}>{p.label}</Link>
            ))}
            <Link href="/locations">Locations</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div className="footer-link-col">
            <h4>Services</h4>
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>
            ))}
          </div>

          <div className="footer-link-col">
            <h4>Start a project</h4>
            <Link href="/quote">Free site visit</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/gallery">View gallery</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/blog">Guides &amp; blogs</Link>
          </div>
        </div>
      </div>

      {/* ── Map band: embed + studio info ── */}
      <div className="wrap footer-map-band">
        <div className="footer-map-embed">
          <iframe
            title={`${business.name} studio map`}
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="footer-map-info">
          <span className="footer-map-ico" aria-hidden="true">
            <MapPinIcon size={20} solid />
          </span>
          <h4>Find the studio</h4>
          <p>{business.addressLine}</p>
          <p className="footer-map-hours">Mon–Sat · 8:00 AM – 6:00 PM</p>
          <div className="footer-map-actions">
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="footer-map-dir">
              Open in Google Maps
            </a>
            <a href={`tel:${business.phoneTel}`} className="footer-map-call">
              <PhoneIcon size={14} /> Call us
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom-wrap">
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} {business.legalName}. All rights reserved.</span>
          <span className="footer-bottom-right">Delhi NCR · Pan-India</span>
        </div>
      </div>
    </footer>
  );
}
