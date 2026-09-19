import Link from "next/link";
import { business } from "@/lib/business";

const LOGO_SRC = {
  header: "/images/logo-hind-nav.png",
  footer: "/images/logo-hind-footer.png",
} as const;

type BrandLogoProps = {
  variant?: "header" | "footer";
  linked?: boolean;
  className?: string;
};

export function BrandLogo({ variant = "header", linked = true, className = "" }: BrandLogoProps) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC[variant]}
      alt={business.name}
      className={`brand-logo brand-logo-${variant}`}
      width={variant === "footer" ? 300 : 260}
      height={variant === "footer" ? 88 : 72}
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
