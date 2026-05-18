import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { HeroFilm } from "@/components/hero-film";
import { InquiryForm } from "@/components/inquiry-form";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { getLocale } from "@/lib/get-locale";
import { createTranslator } from "@/lib/i18n";
import { getLocalizedSiteData } from "@/lib/localized-site-data";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-stone-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

export default async function Home() {
  const locale = await getLocale();
  const t = createTranslator(locale);
  const {
    certifications,
    collections,
    contactDetails,
    customizationServices,
    exploreItems,
    factoryScenes,
    factoryStrengthMetrics,
    processSteps,
    testimonials,
    trustStats,
    whyPartnerPoints,
  } = getLocalizedSiteData(locale);

  return (
    <main className="overflow-x-hidden">
      <section className="relative overflow-hidden bg-[linear-gradient(145deg,#120f0d_0%,#3b332e_34%,#ddd3c8_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-[1720px] px-4 py-10 sm:px-5 md:px-8 md:py-14 lg:min-h-[calc(100vh-84px)] lg:px-10 lg:py-10">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
              {t("Premium Custom Home Textiles for Global Brands")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
              {t(
                "We help brands create high-quality bedding, towels, curtains, and textile collections with flexible OEM & ODM solutions."
              )}
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/contact#inquiry"
                className="button-primary bg-white text-stone-950 hover:bg-stone-200"
              >
                {t("Request Free Quote")}
              </Link>
            </div>
          </AnimatedSection>

          <HeroFilm className="mt-10 md:mt-12 lg:mt-14" />
        </div>
      </section>

      <AnimatedSection
        id="trust"
        className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-24"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {trustStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-[0_18px_45px_rgba(20,16,12,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-5 text-2xl font-semibold text-stone-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection id="explore" className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionHeading
            align="center"
            eyebrow={t("Explore Our Innovation")}
            title={t("A visual directory of the technologies and standards that define our textile excellence.")}
            description={t("Our proprietary approaches are engineered to ensure material integrity, lasting softness, and international compliance.")}
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {exploreItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col rounded-[2rem] border border-stone-200 bg-[#fbfaf8] p-8 transition-all duration-500 hover:border-stone-300 hover:shadow-[0_22px_50px_rgba(20,16,12,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-white transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                  <ul className="mt-6 flex-grow space-y-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-[13px] font-medium text-stone-500">
                        <div className="h-1 w-1 rounded-full bg-stone-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-950 transition-colors hover:text-stone-600"
                  >
                    {t(item.ctaLabel)}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f7f2ec] py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow={t("Collections")}
            title={t(
              "A more restrained, image-led collection preview that feels closer to a luxury catalog."
            )}
            description={t(
              "The homepage now introduces only a few collection chapters with real imagery, quieter typography, and a stronger sense of material atmosphere."
            )}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {collections.slice(0, 1).map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group overflow-hidden rounded-[2.3rem] border border-stone-200 bg-white shadow-[0_18px_45px_rgba(20,16,12,0.035)]"
              >
                <div className="relative h-[460px] overflow-hidden">
                  <img
                    src={collection.heroImageUrl}
                    alt={collection.heroImageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: collection.heroImagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.52))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                    <p className="text-[11px] uppercase tracking-[0.36em] text-white/68">
                      {collection.eyebrow}
                    </p>
                    <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                      {collection.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/78 md:text-base">
                      {collection.narrative}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            <div className="grid gap-6">
              {collections.slice(1, 4).map((collection) => (
                <Link
                  key={collection.slug}
                  href={`/collections/${collection.slug}`}
                  className="group grid gap-4 overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-4 shadow-[0_18px_45px_rgba(20,16,12,0.035)] md:grid-cols-[220px_1fr] md:p-5"
                >
                  <div className="relative h-52 overflow-hidden rounded-[1.5rem]">
                    <img
                      src={collection.heroImageUrl}
                      alt={collection.heroImageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      style={{ objectPosition: collection.heroImagePosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.22))]" />
                  </div>
                  <div className="flex flex-col justify-between gap-4 py-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
                        {collection.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-stone-950">
                        {collection.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-stone-600">
                        {collection.description}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
                      {t("Explore Collection Story")}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow={t("Factory Strength")}
                title={t(
                  "A factory presentation that shows real capability, not just a generic supplier claim."
                )}
                description={t(
                  "This section brings together facility scale, daily production flow, and certification proof so buyers can quickly understand how the factory operates."
                )}
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {factoryStrengthMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.7rem] border border-stone-200 bg-[#f7f2ec] p-5"
                  >
                    <p className="text-2xl font-semibold text-stone-950">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white md:p-7">
                <p className="text-xs uppercase tracking-[0.32em] text-white/55">
                  {t("Daily Factory Flow")}
                </p>
                <div className="mt-6 grid gap-4">
                  {factoryScenes.map((scene) => {
                    const Icon = scene.icon;

                    return (
                      <div
                        key={scene.title}
                        className="grid gap-4 rounded-[1.35rem] border border-white/10 bg-white/6 p-4 md:grid-cols-[44px_1fr]"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-white">
                            {scene.title}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-white/68">
                            {scene.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/factory-plog"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  {t("View Factory Plog")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-stone-200 bg-[#f7f2ec] p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
                    {t("Compliance & Workflow")}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-stone-950 md:text-3xl">
                    {t(
                      "Certifications and process discipline presented in one block."
                    )}
                  </h3>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {certifications.map((certification) => (
                  <div
                    key={certification.name}
                    className="rounded-[1.45rem] border border-stone-200 bg-white p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                      {t("Certified")}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-stone-950">
                      {certification.name}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {certification.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.7rem] border border-stone-200 bg-white p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
                  {t("Enterprise Routine")}
                </p>
                <div className="mt-6 grid gap-4">
                  {processSteps.slice(0, 5).map((step, index) => (
                    <div
                      key={step.title}
                      className="grid gap-3 border-b border-stone-200 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[64px_1fr]"
                    >
                      <span className="text-xs uppercase tracking-[0.28em] text-stone-400">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-base font-semibold text-stone-950">
                          {step.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-stone-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f7f2ec] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow={t("OEM & ODM")}
              title={t("Customization and workflow reduced to the essentials.")}
              description={t(
                "Homepage information stays focused on the capabilities buyers need first."
              )}
            />
            <div className="mt-10 grid gap-4">
              {customizationServices.slice(0, 3).map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="grid gap-4 rounded-[1.6rem] border border-stone-200 bg-white p-5 md:grid-cols-[52px_1fr]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-950">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-stone-200 bg-white p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
              {t("Process")}
            </p>
            <div className="mt-8 grid gap-4">
              {processSteps.slice(0, 4).map((step, index) => (
                <div
                  key={step.title}
                  className="border-b border-stone-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.28em] text-stone-400">
                      0{index + 1}
                    </span>
                    <p className="text-lg font-semibold text-stone-950">
                      {step.title}
                    </p>
                  </div>
                  <p className="mt-2 pl-9 text-sm leading-7 text-stone-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={t("Buyer Confidence")}
              title={t(
                "Social proof and long-term cooperation reasons stay focused on buyer reassurance."
              )}
              description={t(
                "With certifications moved into the factory block, this section stays dedicated to client confidence, retention, and sourcing comfort."
              )}
            />
            <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-[#f7f2ec] p-6">
              <p className="text-sm font-semibold text-stone-950">
                {t("Why buyers stay with us")}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
                {whyPartnerPoints.slice(0, 3).map((point) => (
                  <li key={point} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-stone-900" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <TestimonialCarousel items={testimonials} locale={locale} />
        </div>
      </AnimatedSection>

      <AnimatedSection id="inquiry" className="bg-[#efe7de] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={t("Inquiry System")}
              title={t("The homepage now ends with one clear conversion target.")}
              description={t(
                "Less noise around the form makes the final action feel more direct: submit requirements and move into WhatsApp conversation."
              )}
            />
            <div className="mt-10 grid gap-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="rounded-[1.5rem] border border-white/70 bg-white/92 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-stone-950">
                          {detail.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-stone-600">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <InquiryForm locale={locale} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="rounded-[2.5rem] bg-stone-950 px-6 py-10 text-white md:px-10">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-300">
            {t("Final CTA")}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-5xl">
            {t(
              "Start your custom textile collection with a partner built for long-term business."
            )}
          </h2>
          <Link
            href="/contact#inquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200"
          >
            {t("Talk to Our Factory Team")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
