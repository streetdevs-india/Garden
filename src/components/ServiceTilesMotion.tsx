"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ServiceTilesMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const grid = root.current;
      if (!grid) return;

      const tiles = gsap.utils.toArray<HTMLElement>(".svc-bento-tile", grid);
      if (!tiles.length) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(tiles, { opacity: 1, clearProps: "transform" });
        return;
      }

      const entrance = gsap.fromTo(
        tiles,
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            once: true,
          },
        }
      );

      return () => {
        entrance.scrollTrigger?.kill();
        entrance.kill();
      };
    },
    { scope: root }
  );

  return (
    <div ref={root} className="svc-bento-grid">
      {children}
    </div>
  );
}
