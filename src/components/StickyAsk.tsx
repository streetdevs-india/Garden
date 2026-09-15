"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/business";

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
    <div className={`sticky-ask${show ? " is-on" : ""}`} role="region" aria-label="Talk to Greenly">
      <a className="sticky-ask-call" href={`tel:${business.phoneTel}`}>
        Call {business.contactName.split(" ").slice(-1)[0]}
      </a>
      <a
        className="sticky-ask-wa"
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi Anas, I would like a site visit for my garden.")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <Link className="sticky-ask-quote" href="/quote">
        Free site visit
      </Link>
    </div>
  );
}
