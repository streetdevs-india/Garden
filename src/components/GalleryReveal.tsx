"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { GalleryPhoto } from "@/lib/gallery";

gsap.registerPlugin(useGSAP);

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

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(shots, { autoAlpha: 1 });
        return;
      }

      gsap.from(shots, {
        autoAlpha: 0,
        y: 64,
        scale: 0.92,
        rotation: () => gsap.utils.random(-3.5, 3.5),
        duration: 0.95,
        stagger: { each: 0.07, from: "center" },
        ease: "power4.out",
        delay: 0.08,
        clearProps: "transform",
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
