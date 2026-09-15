import Link from "next/link";
import { Arrow } from "@/components/Icons";

export function SeoCta({
  title = "Ready to create your dream garden?",
  text = "Tell us about your outdoor space — homes, farmhouses, hotels and commercial sites across Delhi NCR and India.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="seo-cta">
      <div className="wrap seo-cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/quote" className="btn btn-green">
          Get a Free Quote <Arrow />
        </Link>
      </div>
    </section>
  );
}
