"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { pages, services } from "@/lib/site";
import { business } from "@/lib/business";
import { Arrow, Chevron, LeafMark, MenuIcon, PlayIcon, SearchIcon } from "./Icons";
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
  const pathname = usePathname();

  useEffect(() => {
    setMenu(false);
    setSearch(false);
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
      { href: "/locations", title: "Locations", text: "Delhi NCR & India" },
      { href: "/faq", title: "FAQ", text: "Common questions" },
      { href: "/quote", title: "Get a Quote", text: "Free assessment" },
      { href: "/blog", title: "Blog", text: "Guides & tips" },
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
          <Link href="/" className="logo" aria-label="Greenly home">
            <span className="logo-mark"><LeafMark /></span>
            <span>
              <strong>Greenly</strong>
              <span>Landscaping & Gardening</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <div className="nav-drop">
              <button type="button" aria-haspopup="true">Services <Chevron /></button>
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
            <Link href="/blog" className={pathname.startsWith("/blog") ? "active" : ""}>Blog</Link>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong>Menu</strong>
              <button className="icon-btn" onClick={() => setMenu(false)} aria-label="Close menu">✕</button>
            </div>
            {pages.map((p) => (
              <Link key={p.href} href={p.href}>{p.label}</Link>
            ))}
            <Link href="/quote" className="btn btn-green" style={{ marginTop: 12 }}>Get a Quote <Arrow /></Link>
          </aside>
        </>
      )}

      {search && (
        <div className="overlay" onClick={() => setSearch(false)}>
          <div className="search-panel" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <strong>Search Greenly</strong>
              <button className="close" onClick={() => setSearch(false)}>Close</button>
            </div>
            <input
              autoFocus
              placeholder="Search services, gallery, contact…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div style={{ marginTop: 8 }}>
              {query && hits.length === 0 && <p style={{ color: "#5d6d64" }}>No matches. Try “lawn”, “lighting” or “gallery”.</p>}
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
        <video src="/videos/process.mp4" controls autoPlay playsInline poster="/images/video-cover.jpg" />
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
      <img
        className="video-card-media"
        src="/images/video-cover.jpg"
        alt="Greenly gardener on site"
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
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="logo">
            <span className="logo-mark"><LeafMark /></span>
            <span>
              <strong>Greenly</strong>
              <span>Landscaping & Gardening</span>
            </span>
          </Link>
          <p>We design, build and maintain gardens that bring life, peace and value to homes and businesses.</p>
          <p className="footer-person">
            <strong>{business.contactName}</strong>
            <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          {pages.map((p) => <Link key={p.href} href={p.href}>{p.label}</Link>)}
          <Link href="/locations">Locations</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <h4>Services</h4>
          {services.slice(0, 5).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>
          ))}
        </div>
        <div>
          <h4>Start a project</h4>
          <Link href="/quote">Get a free quote</Link>
          <Link href="/contact">Contact the team</Link>
          <Link href="/gallery">View the gallery</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">© {new Date().getFullYear()} Greenly. All rights reserved.</div>
    </footer>
  );
}
