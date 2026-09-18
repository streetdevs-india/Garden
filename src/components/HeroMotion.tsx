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
      gsap.fromTo(
        frames,
        {
          autoAlpha: 0,
          y: 32,
          scale: 0.92,
          rotation: -4,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.95,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.35,
        }
      );
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
