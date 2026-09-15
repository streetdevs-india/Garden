"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { galleryPhotos } from "@/lib/gallery";

gsap.registerPlugin(useGSAP);

const peek = galleryPhotos.slice(0, 6);

export function HeroMotion() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const frames = gsap.utils.toArray<HTMLElement>(".hero-peek-shot");
      if (!frames.length) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(frames, { autoAlpha: 1 });
        return;
      }
      gsap.from(frames, {
        autoAlpha: 0,
        y: 36,
        scale: 0.9,
        rotation: () => gsap.utils.random(-6, 6),
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        delay: 0.35,
        clearProps: "transform",
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="hero-peek" aria-hidden>
      {peek.map((item) => (
        <img key={item.src} className="hero-peek-shot" src={item.src} alt="" />
      ))}
    </div>
  );
}
