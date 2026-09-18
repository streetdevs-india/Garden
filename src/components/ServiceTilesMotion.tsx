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
        { opacity: 0, y: 28, scale: 0.94, rotate: -3 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            once: true,
          },
        }
      );

      const setActive = () => {
        const center = grid.scrollLeft + grid.clientWidth * 0.5;
        let closestTile: HTMLElement | undefined;
        let closestDist = Infinity;

        tiles.forEach((tile) => {
          const left = tile.offsetLeft;
          const mid = left + tile.offsetWidth * 0.5;
          const dist = Math.abs(center - mid);
          tile.classList.remove("is-active");
          if (dist < closestDist) {
            closestDist = dist;
            closestTile = tile;
          }
        });

        closestTile?.classList.add("is-active");
      };

      let marquee: gsap.core.Tween | null = null;
      let resumeTimer: ReturnType<typeof setTimeout> | null = null;
      const mobile = window.matchMedia("(max-width: 640px)");

      const killMarquee = () => {
        marquee?.kill();
        marquee = null;
      };

      const startMarquee = () => {
        if (!mobile.matches) return;
        killMarquee();
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        if (maxScroll <= 8) return;

        marquee = gsap.fromTo(
          grid,
          { scrollLeft: 0 },
          {
            scrollLeft: maxScroll,
            duration: Math.max(maxScroll / 36, 8),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            repeatDelay: 1.2,
            onUpdate: setActive,
          }
        );
      };

      const pauseMarquee = () => {
        marquee?.pause();
        if (resumeTimer) clearTimeout(resumeTimer);
      };

      const scheduleResume = () => {
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => marquee?.resume(), 2400);
      };

      grid.addEventListener("scroll", setActive, { passive: true });
      grid.addEventListener("touchstart", pauseMarquee, { passive: true });
      grid.addEventListener("touchend", scheduleResume, { passive: true });
      grid.addEventListener("pointerdown", pauseMarquee);
      grid.addEventListener("pointerup", scheduleResume);

      const onResize = () => {
        setActive();
        killMarquee();
        startMarquee();
      };

      mobile.addEventListener("change", onResize);
      window.addEventListener("resize", onResize);

      setActive();
      startMarquee();

      return () => {
        killMarquee();
        if (resumeTimer) clearTimeout(resumeTimer);
        mobile.removeEventListener("change", onResize);
        window.removeEventListener("resize", onResize);
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
