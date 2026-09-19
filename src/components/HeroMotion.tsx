"use client";

import { galleryPhotos } from "@/lib/gallery";

const peek = galleryPhotos.slice(0, 6);

/** Peek strip — entrance is driven by HeroIntro GSAP timeline */
export function HeroMotion() {
  return (
    <div className="hero-peek" aria-hidden>
      {peek.map((item) => (
        <img key={item.src} className="hero-peek-shot" src={item.src} alt="" />
      ))}
    </div>
  );
}
