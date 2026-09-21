import Link from "next/link";
import { business } from "@/lib/business";

/** Single brand mark — new green Hind logo everywhere */
const LOGO_SRC = "/images/logo-mark.png";

type BrandLogoProps = {
  variant?: "header" | "footer";
  linked?: boolean;
  className?: string;
};

export function BrandLogo({ variant = "header", linked = true, className = "" }: BrandLogoProps) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt={business.name}
      className={`brand-logo brand-logo-${variant}`}
      width={variant === "footer" ? 120 : 56}
      height={variant === "footer" ? 120 : 56}
    />
  );

  const content =
    variant === "footer" ? (
      <span className="brand-logo-footer-wrap">
        {img}
        <span className="brand-logo-wordmark">
          <strong>{business.name}</strong>
          <em>{business.tagline}</em>
        </span>
      </span>
    ) : (
      <span className="brand-logo-header-wrap">
        {img}
        <span className="brand-logo-wordmark brand-logo-wordmark-header">
          <strong>Hind Landscape</strong>
        </span>
      </span>
    );

  if (!linked) return content;

  return (
    <Link
      href="/"
      className={["brand-logo-link", `brand-logo-link-${variant}`, className].filter(Boolean).join(" ")}
      aria-label={`${business.name} home`}
    >
      {content}
    </Link>
  );
}
