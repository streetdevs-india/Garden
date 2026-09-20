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

      shots.forEach((shot, i) => {
        const side = i % 3;
        const x = side === 0 ? -40 : side === 1 ? 40 : 0;
        const y = side === 2 ? 36 : 18;

        gsap.fromTo(
          shot,
          { autoAlpha: 0, x, y, scale: 0.97 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: shot,
              start: "top 90%",
              once: true,
            },
            delay: (i % 3) * 0.05,
          }
        );
      });
    },
    { scope: root, dependencies: [items] }
  );

  return (
    <div ref={root} className={`gal-masonry gal-cols-${columns}`}>
      {items.map((item) => {
        const inner = (
          <>
            <img src={item.src} alt={item.alt} loading="lazy" />
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
