"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, CalendarIcon } from "@/components/Icons";

export function StickyAsk() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/quote") return null;

  return (
    <div className={`sticky-ask${show ? " is-on" : ""}`} role="region" aria-label="Talk to Hind Landscape Co.">
      <a
        className="sticky-ask-btn sticky-ask-call"
        href={`tel:${business.phoneTel}`}
        aria-label="Call us"
      >
        <span className="sticky-ask-label">Call us</span>
        <span className="sticky-ask-ico" aria-hidden="true">
          <PhoneIcon size={22} solid />
        </span>
      </a>
      <a
        className="sticky-ask-btn sticky-ask-wa"
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi Ajay, I would like a site visit for my garden.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span className="sticky-ask-label">WhatsApp</span>
        <span className="sticky-ask-ico" aria-hidden="true">
          <WhatsAppIcon size={22} />
        </span>
      </a>
      <Link
        className="sticky-ask-btn sticky-ask-quote"
        href="/quote"
        aria-label="Free site visit"
      >
        <span className="sticky-ask-label">Free site visit</span>
        <span className="sticky-ask-ico" aria-hidden="true">
          <CalendarIcon size={22} />
        </span>
      </Link>
    </div>
  );
}
