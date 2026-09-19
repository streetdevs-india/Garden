"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { GalleryPhoto } from "@/lib/gallery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function GalleryReveal({
  items,
  href,
  columns = 3,
}: {
  items: GalleryPhoto[];
  href?: string;
  columns?: 2 | 3 | 4;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const shots = gsap.utils.toArray<HTMLElement>(".gal-shot");
      if (!shots.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(shots, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      gsap.set(shots, { autoAlpha: 0, y: 56, scale: 0.88 });

      gsap.to(shots, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        stagger: { each: 0.08, from: "center" },
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: root.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className={`gal-masonry gal-cols-${columns}`}>
      {items.map((item) => {
        const inner = (
          <>
            <img src={item.src} alt={item.alt} />
            <span className="gallery-item-label">{item.alt}</span>
          </>
        );
        return href ? (
          <Link key={item.src} href={href} className="gal-shot">
            {inner}
          </Link>
        ) : (
          <figure key={item.src} className="gal-shot">
            {inner}
          </figure>
        );
      })}
    </div>
  );
}
