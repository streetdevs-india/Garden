import Link from "next/link";
import { business } from "@/lib/business";

/** Transparent full lockup — icon + wordmark */
const LOGO_SRC = "/images/logo-hind-full.png";

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
      width={variant === "footer" ? 360 : 300}
      height={variant === "footer" ? 80 : 67}
    />
  );

  const content =
    variant === "footer" ? (
      <span className="brand-logo-footer-wrap">{img}</span>
    ) : (
      <span className="brand-logo-header-wrap">{img}</span>
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
