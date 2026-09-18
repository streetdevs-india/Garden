import Link from "next/link";
import { business } from "@/lib/business";

const LOGO_SRC = "/images/logo-hind.png";

type BrandLogoProps = {
  variant?: "header" | "footer" | "hero";
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
      width={variant === "hero" ? 320 : variant === "footer" ? 280 : 240}
      height={variant === "hero" ? 80 : variant === "footer" ? 72 : 62}
    />
  );

  const content =
    variant === "footer" ? <span className="brand-logo-footer-wrap">{img}</span> : img;

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
