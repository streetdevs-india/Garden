import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/lib/site";
import { Arrow } from "@/components/Icons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animate";
import { MidCta } from "@/components/PageSections";
import { ProofBand } from "@/components/ProofBand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials | Gardens People Stay In",
  description:
    "Read Greenly client stories — homes, farmhouses and properties where design, lighting and maintenance still feel settled.",
  path: "/testimonials",
});

const moreTestimonials = [
  {
    quote:
      "Greenly designed the terrace garden for our penthouse in Gurugram. Before starting they confirmed load limits and drainage specs with our building's waterproofing team. The drip system, lightweight containers and planting all work without any intervention from us. Most visitors think it's a building feature.",
    name: "Kavitha Iyer",
    place: "Penthouse terrace, Sector 52, Gurugram",
  },
  {
    quote:
      "We run a 32-room property in Noida. The entrance garden hadn't been touched properly since 2019. Greenly relaid the approach hardscape, added seasonal planting beds and installed low-glare LED path lights. Three guest reviews in the past 60 days have mentioned the garden by name.",
    name: "Ashutosh Verma",
    place: "Boutique hotel, Sector 62, Noida",
  },
  {
    quote:
      "Our corporate campus irrigation was wasting water across the wrong zones. Greenly remapped four zones, replaced the controller and added a seasonal override. The groundwater bill dropped noticeably over the following summer and the lawn stayed green through May without extra watering.",
    name: "Neetu Arora",
    place: "Corporate campus, Noida Expressway",
  },
  {
    quote:
      "I was nervous about trusting anyone with the front garden — it's the first thing people see when they visit. Greenly sent a detailed plan with photos of exactly which plants would go where, and matched the finished result to the presentation. Haven't touched a weed in eight months.",
    name: "Meera Bhatia",
    place: "Home garden, Defence Colony, Delhi",
  },
  {
    quote:
      "The outdoor lighting Greenly installed changed the evenings at our home completely. We used to avoid the garden after dark. Now it's where we sit after dinner. The cable routing was clean, every fixture is sealed properly and they came back six months later to adjust one angle for free.",
    name: "Sameer Johar",
    place: "Villa, DLF Phase 4, Gurugram",
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Testimonials" }]} />
          <div className="eyebrow">Testimonials</div>
          <h1>Gardens people stay in</h1>
          <p>Notes from homes and properties we have planted, built and kept.</p>
        </div>
      </section>

      <ProofBand />

      <section className="psy-section psy-muted">
        <div className="wrap">
          <FadeUp>
            <div className="eyebrow" style={{ marginBottom: 24 }}>More stories</div>
          </FadeUp>
          <div className="t-grid">
            {[...testimonials.slice(1), ...moreTestimonials].map((item, i) => (
              <FadeUp key={item.name} delay={i * 70}>
                <article className="t-card">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <strong>{item.name}</strong>
                  <span>{item.place}</span>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <MidCta title="Ready for your own story?" text="Share a photo of the space. We'll reply with a practical next step." />
      <div className="wrap" style={{ paddingBottom: 36, marginTop: 20 }}>
        <Link href="/quote" className="btn btn-green">
          Start your garden <Arrow />
        </Link>
      </div>
    </main>
  );
}
