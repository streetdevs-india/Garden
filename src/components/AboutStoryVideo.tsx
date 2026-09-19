"use client";

import { useRef, useState } from "react";
import { business } from "@/lib/business";
import { PlayIcon } from "@/components/Icons";

type AboutStoryVideoProps = {
  name: string;
  role: string;
};

export function AboutStoryVideo({ name, role }: AboutStoryVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const unmuteAndPlay = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    void v.play();
    setPlaying(true);
  };

  return (
    <figure className="about-story-video">
      <div className="about-story-video-frame">
        <video
          ref={ref}
          className="about-story-video-media"
          src={business.storyVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label={`${business.name} — Our Story`}
        />
        <div className="about-story-video-shade" aria-hidden />

        <div className="about-story-video-actions">
          {muted ? (
            <button type="button" className="about-story-video-play" onClick={unmuteAndPlay}>
              <span className="about-story-video-play-ico" aria-hidden>
                <PlayIcon size={22} />
              </span>
              <span>
                <strong>Watch Our Story</strong>
                <em>Tap for sound</em>
              </span>
            </button>
          ) : (
            <button
              type="button"
              className="about-story-video-toggle"
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>
      <figcaption>
        <strong>{name}</strong>
        <span>{role} · {business.name}</span>
      </figcaption>
    </figure>
  );
}
