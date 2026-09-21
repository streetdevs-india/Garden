"use client";

import { type ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AboutSectionMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const copyBits = gsap.utils.toArray<HTMLElement>(
        ".about-copy-anim > .eyebrow, .about-copy-anim > h2, .about-copy-anim > .lede, .about-copy-anim > .about-cta-row, .about-copy-anim .stat",
        section
      );
      const videoWrap = section.querySelector<HTMLElement>(".about-video-anim");
      const videoMedia = section.querySelector<HTMLElement>(".video-card-media");
      const playBtn = section.querySelector<HTMLElement>(".video-play");
      const caption = section.querySelector<HTMLElement>(".video-caption");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([...copyBits, videoWrap, videoMedia, playBtn, caption].filter(Boolean), {
          clearProps: "all",
          autoAlpha: 1,
          x: 0,
          scale: 1,
        });
        return;
      }

      gsap.set(copyBits, { autoAlpha: 0, x: -72 });
      if (videoWrap) gsap.set(videoWrap, { autoAlpha: 0, scale: 0.9 });
      if (videoMedia) gsap.set(videoMedia, { scale: 1 });
      if (playBtn) gsap.set(playBtn, { autoAlpha: 0, scale: 0.6 });
      if (caption) gsap.set(caption, { autoAlpha: 0, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          end: "top 35%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(copyBits, {
        autoAlpha: 1,
        x: 0,
        duration: 0.85,
        stagger: 0.11,
      });

      if (videoWrap) {
        tl.to(
          videoWrap,
          { autoAlpha: 1, scale: 1, duration: 1.05, ease: "power2.out" },
          0.15
        );
      }

      if (videoMedia) {
        tl.fromTo(
          videoMedia,
          { scale: 1.04 },
          { scale: 1, duration: 1.2, ease: "power2.out" },
          0.2
        );
      }

      if (playBtn) {
        tl.to(playBtn, { autoAlpha: 1, scale: 1, duration: 0.55, ease: "back.out(1.6)" }, "-=0.7");
      }
      if (caption) {
        tl.to(caption, { autoAlpha: 1, y: 0, duration: 0.65 }, "-=0.45");
      }
    },
    { scope: root }
  );

  return (
    <section ref={root} className="about about-motion">
      {children}
    </section>
  );
}
