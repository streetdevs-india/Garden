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
  if (slug === "tree-care") {
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
