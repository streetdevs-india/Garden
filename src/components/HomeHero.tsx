"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { business } from "@/lib/business";
import { Arrow } from "@/components/Icons";
import { WatchButton } from "@/components/SiteChrome";
import { homeHeroContent } from "@/lib/companyContent";

gsap.registerPlugin(useGSAP);

export function HomeHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const media = el.querySelector<HTMLElement>(".home-hero-media");
      const video = el.querySelector<HTMLElement>(".home-hero-video");
      const veil = el.querySelector<HTMLElement>(".home-hero-veil");
      const brand = el.querySelector<HTMLElement>(".home-hero-brand");
      const words = gsap.utils.toArray<HTMLElement>(".split-word", el);
      const lede = el.querySelector<HTMLElement>(".home-hero-lede");
      const actions = gsap.utils.toArray<HTMLElement>(".home-hero-actions > *", el);
      const scroll = el.querySelector<HTMLElement>(".home-hero-scroll");
      const line = el.querySelector<HTMLElement>(".home-hero-rule");

      const textTargets = [brand, ...words, lede, ...actions, line, scroll].filter(
        Boolean
      ) as HTMLElement[];

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(textTargets, { clearProps: "all", autoAlpha: 1, y: 0, x: 0 });
        gsap.set([media, video, veil].filter(Boolean), { clearProps: "all", autoAlpha: 1, scale: 1 });
        el.classList.add("is-ready");
        return;
      }

      gsap.set(video, { scale: 1.14, autoAlpha: 0.55 });
      gsap.set(veil, { autoAlpha: 0 });
      gsap.set([brand, lede, line, scroll].filter(Boolean), { autoAlpha: 0, y: 28 });
      gsap.set(words, { autoAlpha: 0, y: 36 });
      gsap.set(actions, { autoAlpha: 0, y: 22 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => el.classList.add("is-ready"),
      });

      tl.to(video, { scale: 1.04, autoAlpha: 1, duration: 1.55 }, 0)
        .to(veil, { autoAlpha: 1, duration: 1.1 }, 0.15);

      if (brand) tl.to(brand, { autoAlpha: 1, y: 0, duration: 0.75 }, 0.35);
      if (line) tl.to(line, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.48);
      if (words.length) {
        tl.to(words, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.048 }, 0.52);
      }
      if (lede) tl.to(lede, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.95);
      if (actions.length) {
        tl.to(actions, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1 }, 1.08);
      }
      if (scroll) tl.to(scroll, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.35);
    },
    { scope: root }
  );

  return (
    <section ref={root} className="home-hero" aria-label="Hind Landscape Co. introduction">
      <div className="home-hero-media" aria-hidden>
        {/* Poster for first paint / reduced-motion fallback */}
        <img
          className="home-hero-poster"
          src="/images/gallery-modern-lawn.png"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <video
          className="home-hero-video"
          src={business.showreelVideo}
          poster="/images/gallery-modern-lawn.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="home-hero-veil" />
        <div className="home-hero-grain" />
      </div>

      <div className="home-hero-frame">
        <div className="home-hero-copy">
          <p className="home-hero-brand">{homeHeroContent.brand}</p>
          <span className="home-hero-rule" aria-hidden />
          <h1 className="home-hero-title split-text is-manual">
            <span className="split-word">Transforming Spaces.</span>
            {" "}
            <span className="split-word">Nurturing Nature.</span>
            <span className="home-hero-break" aria-hidden />
            <span className="split-word">Creating Legacies.</span>
          </h1>
          <p className="home-hero-lede">{homeHeroContent.lede}</p>
          <div className="home-hero-actions">
            <Link href={homeHeroContent.primaryHref} className="btn btn-green home-hero-cta">
              {homeHeroContent.primaryCta} <Arrow />
            </Link>
            <Link href="/gallery" className="btn btn-outline home-hero-cta-secondary">
              {homeHeroContent.secondaryTitle}
            </Link>
            <WatchButton title="Watch our work" subtitle={homeHeroContent.secondarySubtitle} />
          </div>
        </div>
      </div>

      <div className="home-hero-scroll" aria-hidden>
        <span className="home-hero-scroll-label">Scroll</span>
        <span className="home-hero-scroll-line" />
      </div>
    </section>
  );
}
