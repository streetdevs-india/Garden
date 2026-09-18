"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/site";

const ALL = [
  ...testimonials,
  {
    quote:
      "Hind Landscape Co. designed the terrace garden for our penthouse in Gurugram. The drip system, lightweight containers and planting all work without any intervention. Most visitors think it's a building feature.",
    name: "Kavitha Iyer",
    place: "Penthouse terrace, Sector 52, Gurugram",
  },
  {
    quote:
      "Our corporate campus irrigation was wasting water across the wrong zones. They remapped four zones and added a seasonal override. The groundwater bill dropped noticeably and the lawn stayed green through May.",
    name: "Neetu Arora",
    place: "Corporate campus, Noida Expressway",
  },
  {
    quote:
      "The outdoor lighting changed the evenings at our home completely. We used to avoid the garden after dark. Now it's where we sit after dinner. They came back six months later to adjust one angle for free.",
    name: "Sameer Johar",
    place: "Villa, DLF Phase 4, Gurugram",
  },
];

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setActive((idx + ALL.length) % ALL.length);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % ALL.length);
    }, 5200);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setDragging(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!dragging) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(active + (diff > 0 ? 1 : -1));
      resetTimer();
    }
    setDragging(false);
  };
  const onMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setDragging(true);
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!dragging) return;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      goTo(active + (diff > 0 ? 1 : -1));
      resetTimer();
    }
    setDragging(false);
  };

  return (
    <section className="tslider-section">
      <div className="wrap">
        <div className="tslider-head">
          <div className="eyebrow">What clients say</div>
          <h2>Words from the garden</h2>
        </div>

        <div
          className="tslider-track"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={() => setDragging(false)}
          style={{ userSelect: "none", cursor: dragging ? "grabbing" : "grab" }}
        >
          {ALL.map((item, i) => (
            <article
              key={item.name}
              className={`tslider-card${i === active ? " is-active" : ""}`}
              aria-hidden={i !== active}
            >
              <div className="tslider-quote-mark" aria-hidden>&ldquo;</div>
              <p className="tslider-text">&ldquo;{item.quote}&rdquo;</p>
              <div className="tslider-author">
                <div className="tslider-avatar">{item.name[0]}</div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.place}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="tslider-dots">
          {ALL.map((item, i) => (
            <button
              key={item.name}
              className={`tslider-dot${i === active ? " is-active" : ""}`}
              onClick={() => {
                goTo(i);
                resetTimer();
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="tslider-arrows">
          <button
            className="tslider-arrow"
            onClick={() => {
              goTo(active - 1);
              resetTimer();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="tslider-arrow"
            onClick={() => {
              goTo(active + 1);
              resetTimer();
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
