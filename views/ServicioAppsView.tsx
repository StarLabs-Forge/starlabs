import { Hero } from "../components/sections/Hero";
import { ServiceDetail } from "../components/sections/ServiceDetail";
import { CTABand } from "../components/sections/CTABand";
import { Reveal } from "../components/ui/Reveal";
import { Meta } from "../components/seo/Meta";
import { serviceDetails } from "../data/serviceDetails";

const detail = serviceDetails.apps;

export default function ServicioAppsView() {
  return (
    <>
      <Meta title={`${detail.title} — StarLabs`} description={detail.lead} />
      <div className="page-hero-block">
        <Hero
          eyebrow={detail.eyebrow}
          title={detail.title}
          lead={detail.lead}
          variant="page"
          paddingBottom={56}
        />
        <ServiceDetail detail={detail} />
      </div>

      <Reveal>
        <CTABand
          title={detail.ctaTitle}
          description={detail.ctaDescription}
          ctaLabel={detail.ctaLabel}
          ctaHref="/contacto"
        />
      </Reveal>
    </>
  );
}
