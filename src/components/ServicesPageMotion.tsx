"use client";

import { type ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Scroll-driven entrance effects for the /services page */
export function ServicesPageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const page = root.current;
      if (!page) return;

      // Let GSAP own motion — unlock any FadeUp wrappers
      page.querySelectorAll<HTMLElement>(".fade-up").forEach((el) => {
        el.classList.add("in-view");
        gsap.set(el, { clearProps: "all", autoAlpha: 1, y: 0, x: 0 });
      });

      if (prefersReduced()) {
        gsap.set(
          page.querySelectorAll(
            ".svc-page-hero .eyebrow, .svc-page-hero h1, .svc-page-hero p, .svc-page-hero .hero-cta-row, .audience-card-v2, .svc-hub-card, .svc-extra-card, .process-step-wrap, .promise-card-v2, .t-card, .faq-item, .audience-head > *, .core-services-head, .svc-extras-head > *, .promise-section .psy-head > *, .psy-section .psy-head > *"
          ),
          { clearProps: "all", autoAlpha: 1, x: 0, y: 0, scale: 1 }
        );
        return;
      }

      /* ── Hero: left slide ── */
      const hero = page.querySelector<HTMLElement>(".svc-page-hero");
      if (hero) {
        const bits = [
          hero.querySelector(".eyebrow"),
          ...gsap.utils.toArray<HTMLElement>(".split-word", hero),
          hero.querySelector("p"),
          ...gsap.utils.toArray<HTMLElement>(".hero-cta-row > *", hero),
        ].filter(Boolean) as HTMLElement[];

        gsap.set(bits, { autoAlpha: 0, x: -56 });
        gsap.to(bits, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.1,
          clearProps: "transform",
        });
      }

      /* ── Who we help: head up, cards scale-up stagger ── */
      const audience = page.querySelector<HTMLElement>(".audience-section");
      if (audience) {
        const head = audience.querySelectorAll<HTMLElement>(
          ".audience-head > .eyebrow, .audience-head > h2, .audience-head > .lede, .audience-head > .audience-swipe-hint"
        );
        const cards = gsap.utils.toArray<HTMLElement>(".audience-card-v2", audience);

        gsap.set(head, { autoAlpha: 0, y: 36 });
        gsap.set(cards, { autoAlpha: 0, y: 64, scale: 0.9 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: audience, start: "top 78%", once: true },
          defaults: { ease: "power3.out" },
        });
        tl.to(head, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 });
        tl.to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.12,
            clearProps: "transform",
          },
          "-=0.3"
        );
      }

      /* ── Core services: alternate left / right ── */
      const core = page.querySelector<HTMLElement>(".core-services-section");
      if (core) {
        const head = core.querySelector<HTMLElement>(".core-services-head");
        const cards = gsap.utils.toArray<HTMLElement>(".svc-hub-card", core);
        const imgs = gsap.utils.toArray<HTMLElement>(".svc-hub-img img", core);

        if (head) {
          gsap.fromTo(
            head,
            { autoAlpha: 0, x: -48 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.75,
              ease: "power3.out",
              clearProps: "transform",
              scrollTrigger: { trigger: core, start: "top 80%", once: true },
            }
          );
        }

        cards.forEach((card, i) => {
          const fromLeft = i % 2 === 0;
          gsap.fromTo(
            card,
            { autoAlpha: 0, x: fromLeft ? -80 : 80, y: 24 },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        imgs.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.28 },
            {
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: img.closest(".svc-hub-card") || img,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
      }

      /* ── Speciality: cascade from bottom + slight rotate ── */
      const extras = page.querySelector<HTMLElement>(".svc-extras-section");
      if (extras) {
        const headBits = extras.querySelectorAll<HTMLElement>(
          ".svc-extras-head .eyebrow, .svc-extras-head h2, .svc-extras-head p"
        );
        const cards = gsap.utils.toArray<HTMLElement>(".svc-extra-card", extras);

        gsap.set(headBits, { autoAlpha: 0, y: 28 });
        gsap.set(cards, { autoAlpha: 0, y: 52, scale: 0.92 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: extras, start: "top 78%", once: true },
          defaults: { ease: "power3.out" },
        });
        tl.to(headBits, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09 });
        tl.to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            clearProps: "transform",
          },
          "-=0.25"
        );
      }

      /* ── How it works: line + steps pop ── */
      const process = page.querySelector<HTMLElement>(".process-timeline")?.closest("section");
      if (process) {
        const head = process.querySelectorAll<HTMLElement>(".psy-head > *");
        const steps = gsap.utils.toArray<HTMLElement>(".process-step-wrap", process);
        const nums = gsap.utils.toArray<HTMLElement>(".process-num", process);
        let line = process.querySelector<HTMLElement>(".process-line");
        if (!line) {
          const timeline = process.querySelector<HTMLElement>(".process-timeline");
          if (timeline && !timeline.querySelector(".process-line")) {
            line = document.createElement("div");
            line.className = "process-line";
            line.setAttribute("aria-hidden", "true");
            timeline.prepend(line);
          }
        }

        gsap.set(head, { autoAlpha: 0, y: 24 });
        gsap.set(steps, { autoAlpha: 0, y: 40 });
        gsap.set(nums, { scale: 0.45 });
        if (line) gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: process, start: "top 75%", once: true },
          defaults: { ease: "power3.out" },
        });
        tl.to(head, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08 });
        if (line) tl.to(line, { scaleX: 1, duration: 1.05, ease: "power2.inOut" }, "-=0.15");
        tl.to(steps, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, "-=0.7");
        tl.to(nums, { scale: 1, duration: 0.55, stagger: 0.12, ease: "back.out(1.7)" }, "-=0.8");
      }

      /* ── Promise: cards rise with stagger ── */
      const promise = page.querySelector<HTMLElement>(".promise-section");
      if (promise) {
        const head = promise.querySelectorAll<HTMLElement>(".psy-head > *");
        const cards = gsap.utils.toArray<HTMLElement>(".promise-card-v2", promise);
        gsap.set(head, { autoAlpha: 0, y: 28 });
        gsap.set(cards, { autoAlpha: 0, y: 48, scale: 0.94 });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: promise, start: "top 78%", once: true },
          defaults: { ease: "power3.out" },
        });
        tl.to(head, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09 });
        tl.to(
          cards,
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.12, clearProps: "transform" },
          "-=0.25"
        );
      }

      /* ── Testimonials: cards from sides ── */
      const tGrid = page.querySelector<HTMLElement>(".t-grid");
      const tSection = tGrid?.closest("section");
      if (tSection && tGrid) {
        const head = tSection.querySelectorAll<HTMLElement>(".psy-head > *, .psy-head .btn");
        const cards = gsap.utils.toArray<HTMLElement>(".t-card", tGrid);
        gsap.set(head, { autoAlpha: 0, y: 24 });
        cards.forEach((card, i) => {
          gsap.set(card, { autoAlpha: 0, x: i % 2 === 0 ? -60 : 60, y: 20 });
        });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: tSection, start: "top 78%", once: true },
          defaults: { ease: "power3.out" },
        });
        tl.to(head, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08, clearProps: "transform" });
        tl.to(
          cards,
          { autoAlpha: 1, x: 0, y: 0, duration: 0.85, stagger: 0.14, clearProps: "transform" },
          "-=0.3"
        );
      }

      /* ── FAQ: accordion items slide left ── */
      const faqList = page.querySelector<HTMLElement>(".faq-list");
      const faqSection = faqList?.closest("section");
      if (faqSection && faqList) {
        const head = faqSection.querySelectorAll<HTMLElement>(".psy-head > *");
        const items = gsap.utils.toArray<HTMLElement>(".faq-item", faqList);
        gsap.set(head, { autoAlpha: 0, x: -40 });
        gsap.set(items, { autoAlpha: 0, x: -36 });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: faqSection, start: "top 80%", once: true },
          defaults: { ease: "power3.out" },
        });
        tl.to(head, { autoAlpha: 1, x: 0, duration: 0.7, stagger: 0.08, clearProps: "transform" });
        tl.to(
          items,
          { autoAlpha: 1, x: 0, duration: 0.65, stagger: 0.08, clearProps: "transform" },
          "-=0.35"
        );
      }
    },
    { scope: root }
  );

  return (
    <div ref={root} className="svc-page-motion">
      {children}
    </div>
  );
}
