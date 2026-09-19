"use client";

import { type ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroIntro({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const kicker = el.querySelector<HTMLElement>(".hero-kicker");
      const words = gsap.utils.toArray<HTMLElement>(".split-word", el);
      const para = el.querySelector<HTMLElement>(":scope > p");
      const actions = gsap.utils.toArray<HTMLElement>(".hero-actions > *", el);
      const peek = gsap.utils.toArray<HTMLElement>(".hero-peek-shot", el);

      const targets = [kicker, ...words, para, ...actions, ...peek].filter(Boolean) as HTMLElement[];

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { clearProps: "all", autoAlpha: 1, x: 0, y: 0 });
        el.classList.add("is-ready");
        return;
      }

      gsap.set([kicker, para, ...actions].filter(Boolean), {
        autoAlpha: 0,
        x: -64,
      });
      gsap.set(words, { autoAlpha: 0, x: -48 });
      gsap.set(peek, { autoAlpha: 0, x: -28, y: 18, scale: 0.94 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => el.classList.add("is-ready"),
      });

      if (kicker) {
        tl.to(kicker, { autoAlpha: 1, x: 0, duration: 0.7 }, 0.12);
      }
      if (words.length) {
        tl.to(
          words,
          { autoAlpha: 1, x: 0, duration: 0.72, stagger: 0.055 },
          "-=0.42"
        );
      }
      if (para) {
        tl.to(para, { autoAlpha: 1, x: 0, duration: 0.7 }, "-=0.45");
      }
      if (actions.length) {
        tl.to(
          actions,
          { autoAlpha: 1, x: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );
      }
      if (peek.length) {
        tl.to(
          peek,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.35"
        );
      }
    },
    { scope: root }
  );

  return (
    <div ref={root} className="hero-copy hero-intro">
      {children}
    </div>
  );
}
