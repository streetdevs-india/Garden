"use client";

import { testimonials } from "@/lib/site";
import { FadeUp } from "@/components/Animate";

export function ProofBand() {
  const story = testimonials[0];

  return (
    <section className="proof-section">
      <div className="wrap">
        <FadeUp>
          <blockquote className="proof-quote">
            <p>&ldquo;{story.quote}&rdquo;</p>
            <footer>
              <strong>{story.name}</strong>
              <span>{story.place}</span>
            </footer>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
}
