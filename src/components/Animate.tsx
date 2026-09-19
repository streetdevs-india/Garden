"use client";

import { ReactNode, useEffect, useRef } from "react";

/* ---------- FadeUp ---------- */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const add = () => el.classList.add("in-view");
          delay ? setTimeout(add, delay) : add();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Reveal — directional scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom" | "blur";
  className?: string;
  as?: "div" | "section" | "article" | "span" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const add = () => el.classList.add("in-view");
          delay ? setTimeout(add, delay) : add();
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Component = Tag as "div";
  return (
    <Component ref={ref as React.Ref<HTMLDivElement>} className={`reveal reveal-${variant} ${className}`}>
      {children}
    </Component>
  );
}

/* ---------- ZoomImage — parallax zoom on scroll ---------- */
export function ZoomImage({
  src,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`zoom-img ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading={loading} />
    </div>
  );
}

/* ---------- SplitText — word-by-word reveal for headings ---------- */
export function SplitText({
  text,
  className = "",
  as: Tag = "h2",
  manual = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  /** When true, skip IntersectionObserver — GSAP (or parent) drives the reveal */
  manual?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (manual) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [manual]);

  const Component = Tag as "h2";
  const words = text.split(" ");
  return (
    <Component
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={`split-text${manual ? " is-manual" : ""} ${className}`.trim()}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="split-word"
          style={manual ? undefined : { transitionDelay: `${i * 45}ms` }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Component>
  );
}

/* ---------- CountUp ---------- */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (n: number) =>
      `${prefix}${decimals > 0 ? n.toFixed(decimals) : Math.round(n)}${suffix}`;
    el.textContent = format(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = format(eased * value);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, prefix, duration, decimals]);

  return <span ref={ref}>{prefix}{decimals > 0 ? (0).toFixed(decimals) : "0"}{suffix}</span>;
}

/* ---------- ScrollHeader ---------- */
export function ScrollHeaderClass({
  threshold = 40,
  className = "scrolled",
}: {
  threshold?: number;
  className?: string;
}) {
  useEffect(() => {
    const header = document.querySelector(".header") as HTMLElement | null;
    if (!header) return;
    const update = () => {
      if (window.scrollY > threshold) header.classList.add(className);
      else header.classList.remove(className);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [threshold, className]);

  return null;
}
