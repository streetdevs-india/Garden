"use client";

import { type ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Our Services — alternate rows slide in from left / right */
export function ServicesStoryMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stack = root.current;
      if (!stack) return;
      const rows = gsap.utils.toArray<HTMLElement>(".svc-story", stack);
      if (!rows.length) return;

      if (prefersReduced()) {
        gsap.set(rows, { clearProps: "all", autoAlpha: 1, x: 0 });
        return;
      }

      rows.forEach((row, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          row,
          { autoAlpha: 0, x: fromLeft ? -110 : 110 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: row,
              start: "top 84%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="svc-story-stack">
      {children}
    </div>
  );
}

/** Why Choose Us — head + bento cards cascade in */
export function WhyUsMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const head = section.querySelectorAll<HTMLElement>(
        ".why-us-head > .eyebrow, .why-us-head > h2, .why-us-head > .lede"
      );
      const cards = gsap.utils.toArray<HTMLElement>(".why-card", section);

      if (prefersReduced()) {
        gsap.set([...head, ...cards], { clearProps: "all", autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      gsap.set(head, { autoAlpha: 0, y: 28 });
      gsap.set(cards, { autoAlpha: 0, y: 48, scale: 0.94 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(head, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 });
      tl.to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: { each: 0.1, from: "start" },
          ease: "power2.out",
        },
        "-=0.25"
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="psy-section why-us-v2">
      {children}
    </section>
  );
}

/** How It Works — line draws, steps pop in sequence */
export function ProcessMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const headBits = section.querySelectorAll<HTMLElement>(".process-head > *");
      const line = section.querySelector<HTMLElement>(".process-line");
      const steps = gsap.utils.toArray<HTMLElement>(".process-step-wrap", section);
      const nums = gsap.utils.toArray<HTMLElement>(".process-num", section);

      if (prefersReduced()) {
        gsap.set([...headBits, ...steps, line].filter(Boolean), {
          clearProps: "all",
          autoAlpha: 1,
          y: 0,
          scale: 1,
          scaleX: 1,
        });
        return;
      }

      gsap.set(headBits, { autoAlpha: 0, y: 24 });
      if (line) gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(steps, { autoAlpha: 0, y: 36 });
      gsap.set(nums, { scale: 0.5 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(headBits, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08 });
      if (line) {
        tl.to(line, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, "-=0.2");
      }
      tl.to(steps, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.14 }, "-=0.75");
      tl.to(
        nums,
        { scale: 1, duration: 0.55, stagger: 0.14, ease: "back.out(1.7)" },
        "-=0.85"
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="psy-section psy-muted process-motion" style={{ paddingTop: 80 }}>
      {children}
    </section>
  );
}
