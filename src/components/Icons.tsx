export function LeafMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" aria-hidden>
      <path
        d="M20.2 5.2c1.2 5.4-.2 9.6-3.4 13.2 4.8.2 8.2 2.2 10.4 6.4-4.6-1.2-7.6-.2-10.2 2.6-.6-4.2.2-8 2-11.6-3.2 1.2-5.6 3.6-7.2 6.8C10.2 16.8 13.4 10.2 20.2 5.2Z"
        fill="#1F7A3A"
      />
      <path d="M16.6 18.4c1.6-2.2 3.2-3.6 5.2-4.6" stroke="#E8F6E4" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Hind Landscape Co. — refined mark: bold H + integrated leaf spine */
export function HindMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
      {/* Background rounded square with rich green gradient */}
      <rect width="64" height="64" rx="16" fill="#0e5c28" />
      <rect width="64" height="64" rx="16" fill="url(#hg)" />
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e8736" />
          <stop offset="1" stopColor="#083a15" />
        </linearGradient>
      </defs>
      {/* Subtle inner glow */}
      <rect x="1" y="1" width="62" height="62" rx="15.5" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
      {/* H letterform — clean, geometric, bold */}
      <path
        d="M15 46V18h6v10.5h12V18h6v28h-6V32.5H21V46H15Z"
        fill="white"
        fillOpacity="0.96"
      />
      {/* Leaf accent — organic, positioned top-right of H bar */}
      <path
        d="M43 14c1 4.2-.5 7.6-3 10.4 3.8.3 6.5 1.8 8 5.2-3.5-.9-5.8-.1-7.8 2-.5-3.2.2-6.2 1.8-9-2.5 1-4.4 2.8-5.4 5.2C37.8 21.8 40 17.2 43 14Z"
        fill="#9be0a8"
        fillOpacity="0.90"
      />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M5 3.2v9.6L13 8 5 3.2Z" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M13.2 13.2 17 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M4 6.5h14M4 11h14M4 15.5h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceGlyph({ slug }: { slug: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (slug === "lawn-care") {
    return (
      <svg {...common}>
        <path d="M4 16c2-6 6-9 8-9s6 3 8 9" />
        <path d="M8 16h8M6 19h12" />
      </svg>
    );
  }
  if (slug === "tree-care" || slug === "trees-plants-exporter") {
    return (
      <svg {...common}>
        <path d="M12 21V10" />
        <path d="M12 13c-4 0-6-2.2-6-5.2C8 8 10.2 9 12 7c1.8 2 4 1 6 .8C18 10.8 16 13 12 13Z" />
      </svg>
    );
  }
  if (slug === "irrigation") {
    return (
      <svg {...common}>
        <path d="M12 3v4" />
        <path d="M8 8c0 4 8 4 8 8" />
        <path d="M7 14c2 2 4 2 5 0M12 18c2 2 4 2 5 0" />
      </svg>
    );
  }
  if (slug === "hardscaping") {
    return (
      <svg {...common}>
        <path d="M4 18h16M6 18V8l6-3 6 3v10" />
        <path d="M10 18v-5h4v5" />
      </svg>
    );
  }
  if (slug === "lighting") {
    return (
      <svg {...common}>
        <path d="M12 3v2M5 12H3M21 12h-2M7 7 5.6 5.6M18.4 5.6 17 7" />
        <path d="M9 14a3 3 0 1 1 6 0c0 2-1 3-1.5 4h-3C10 17 9 16 9 14Z" />
        <path d="M10 20h4" />
      </svg>
    );
  }
  if (slug === "cleanups" || slug === "seasonal-cleanup") {
    return (
      <svg {...common}>
        <path d="M4 18h10" />
        <path d="M14 18 20 8M14 18l3-7" />
        <path d="M6 14c2-3 4-3 5-1" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 20s-7-4.2-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.8-7 9-7 9Z" />
      <path d="M12 11v5" />
    </svg>
  );
}

export function LeafDeco() {
  return (
    <svg viewBox="0 0 160 120" fill="none" aria-hidden>
      <path d="M120 110c-8-28-6-52 10-78 8 22 8 46-2 72" stroke="#d7f0cf" strokeWidth="2" />
      <path d="M98 104c2-24 14-44 36-62-10 22-16 42-16 64" fill="#cfe8c4" opacity="0.7" />
      <path d="M70 112c6-20 22-36 46-48-16 12-28 28-32 50" fill="#b7d9ab" opacity="0.55" />
    </svg>
  );
}

type IconProps = { size?: number; className?: string; solid?: boolean };

function iconProps({ size = 20, className }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };
}

function solidProps({ size = 20, className }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    "aria-hidden": true as const,
  };
}

export function PhoneIcon(p: IconProps = {}) {
  if (p.solid) {
    return (
      <svg {...solidProps(p)}>
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    );
  }
  return (
    <svg {...iconProps(p)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function WhatsAppIcon(p: IconProps = {}) {
  const { size = 20, className } = p;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.45 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.02zm-7.01 15.24h-.01a8.21 8.21 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.07-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function MailIcon(p: IconProps = {}) {
  if (p.solid) {
    return (
      <svg {...solidProps(p)}>
        <path d="M3.2 6.8A2.8 2.8 0 0 1 6 4.2h12a2.8 2.8 0 0 1 2.8 2.6v.3l-7.9 5.4a1.8 1.8 0 0 1-2 0L3.2 7.1v-.3Z" />
        <path d="M20.8 9.2v8a2.8 2.8 0 0 1-2.8 2.8H6A2.8 2.8 0 0 1 3.2 17.2v-8L10.6 14a3.4 3.4 0 0 0 3.8 0l6.4-4.8Z" />
      </svg>
    );
  }
  return (
    <svg {...iconProps({ ...p, size: p.size ?? 20 })}>
      <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11Z" />
      <path d="m5 7 7 5.5L19 7" />
    </svg>
  );
}

export function MapPinIcon(p: IconProps = {}) {
  if (p.solid) {
    return (
      <svg {...solidProps(p)}>
        <path d="M12 2.2a7.3 7.3 0 0 0-7.3 7.3c0 5.3 6.2 11.6 6.9 12.3a.6.6 0 0 0 .8 0c.7-.7 6.9-7 6.9-12.3A7.3 7.3 0 0 0 12 2.2Zm0 10a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
      </svg>
    );
  }
  return (
    <svg {...iconProps(p)}>
      <path d="M12 21s-7-4.5-7-10a7 7 0 1 1 14 0c0 5.5-7 10-7 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

export function ClockIcon(p: IconProps = {}) {
  if (p.solid) {
    return (
      <svg {...solidProps(p)}>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.8 10.4-3.3 2a.8.8 0 1 1-.8-1.4l2.9-1.7V7.2a.8.8 0 0 1 1.6 0v5.2c0 .2-.1.4-.4.6Z" />
      </svg>
    );
  }
  return (
    <svg {...iconProps(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CalendarIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" />
    </svg>
  );
}

export function LeafIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M5 19c8-2 12-8 14-16-8 2-14 8-14 16Z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  );
}

export function BoltIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function ClipboardIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" />
      <rect x="5" y="6" width="14" height="15" rx="2" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

export function AwardIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
      <path d="M10 8.5h4M12 7v3" />
    </svg>
  );
}

export function WeatherIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M7 16a4 4 0 1 1 1.2-7.8A5.5 5.5 0 0 1 18.5 11 3.5 3.5 0 0 1 18 18H7.5" />
      <path d="M9 20v1M12 19v2M15 20v1" />
    </svg>
  );
}

export function ToolIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M14.5 4.5a4 4 0 0 0-5.3 5.3L4 15v5h5l5.2-5.2a4 4 0 0 0 5.3-5.3L16 12l-2.5-2.5 1-5Z" />
    </svg>
  );
}

export function TeamIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5" />
      <path d="M14 14.2c1.6-.4 3.3.2 4.5 1.8" />
    </svg>
  );
}

export function MapIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M9 4 3 6.5v13.5L9 17.5 15 20l6-2.5V4L15 6.5 9 4Z" />
      <path d="M9 4v13.5M15 6.5V20" />
    </svg>
  );
}

export function DesignIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M12 12 4 7M12 12l8-5M12 12v9" />
    </svg>
  );
}

export function IrrigationIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M12 3v5" />
      <path d="M8 10c0 3.5 8 3.5 8 7" />
      <path d="M7 15c1.5 1.5 3 1.5 4 0M13 18c1.5 1.5 3 1.5 4 0" />
      <circle cx="12" cy="9.5" r="1.5" />
    </svg>
  );
}

export function LawnIcon(p: IconProps = {}) {
  return (
    <svg {...iconProps(p)}>
      <path d="M3 18c2.5-5 5.5-8 9-8s6.5 3 9 8" />
      <path d="M7 18h10M5 21h14" />
      <path d="M12 10V6M10 7.5 12 6l2 1.5" />
    </svg>
  );
}

/** Feature / trust icons keyed by semantic id */
export function FeatureIcon({ name, size = 22 }: { name: string; size?: number }) {
  switch (name) {
    case "award":
      return <AwardIcon size={size} />;
    case "weather":
      return <WeatherIcon size={size} />;
    case "clipboard":
      return <ClipboardIcon size={size} />;
    case "tool":
      return <ToolIcon size={size} />;
    case "map":
      return <MapIcon size={size} />;
    case "team":
      return <TeamIcon size={size} />;
    case "leaf":
      return <LeafIcon size={size} />;
    case "bolt":
      return <BoltIcon size={size} />;
    case "calendar":
      return <CalendarIcon size={size} />;
    case "design":
      return <DesignIcon size={size} />;
    case "irrigation":
      return <IrrigationIcon size={size} />;
    case "lawn":
      return <LawnIcon size={size} />;
    default:
      return <LeafIcon size={size} />;
  }
}
