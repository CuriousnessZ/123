import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { HeroFilm } from "@/components/hero-film";
import { InquiryForm } from "@/components/inquiry-form";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import {
  certifications,
  collections,
  contactDetails,
  customizationServices,
  factoryScenes,
  factoryStrengthMetrics,
  processSteps,
  testimonials,
  trustStats,
  whyPartnerPoints,
} from "@/lib/site-data";

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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative overflow-hidden bg-[linear-gradient(145deg,#120f0d_0%,#3b332e_34%,#ddd3c8_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-[1720px] px-4 py-10 sm:px-5 md:px-8 md:py-14 lg:min-h-[calc(100vh-84px)] lg:px-10 lg:py-10">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
              Premium Custom Home Textiles for Global Brands
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
              We help brands create high-quality bedding, towels, curtains, and
              textile collections with flexible OEM &amp; ODM solutions.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/contact#inquiry"
                className="button-primary bg-white text-stone-950 hover:bg-stone-200"
              >
                Request Free Quote
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

      <AnimatedSection className="bg-[#f7f2ec] py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Collections"
            title="A smaller editorial selection that supports the hero instead of competing with it."
            description="The homepage now previews only a tighter set of product categories. The rest can stay on internal pages."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {collections.slice(0, 4).map((collection) => (
              <div
                key={collection.title}
                className="overflow-hidden rounded-[1.9rem] border border-stone-200 bg-white shadow-[0_18px_45px_rgba(20,16,12,0.035)]"
              >
                <div className={`h-48 bg-gradient-to-br ${collection.accent}`} />
                <div className="space-y-3 p-5">
                  <h3 className="text-xl font-semibold text-stone-950">
                    {collection.title}
                  </h3>
                  <p className="text-sm leading-7 text-stone-600">
                    {collection.description}
                  </p>
                  <Link
                    href="/contact#inquiry"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900"
                  >
                    Request collection details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Factory Strength"
                title="A factory presentation that shows real capability, not just a generic supplier claim."
                description="This section brings together facility scale, daily production flow, and certification proof so buyers can quickly understand how the factory operates."
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
                  Daily Factory Flow
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
                  View Factory Plog
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-stone-200 bg-[#f7f2ec] p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
                    Compliance & Workflow
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-stone-950 md:text-3xl">
                    Certifications and process discipline presented in one block.
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
                      Certified
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
                  Enterprise Routine
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
              eyebrow="OEM & ODM"
              title="Customization and workflow reduced to the essentials."
              description="Homepage information stays focused on the capabilities buyers need first."
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
              Process
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
              eyebrow="Buyer Confidence"
              title="Social proof and long-term cooperation reasons stay focused on buyer reassurance."
              description="With certifications moved into the factory block, this section stays dedicated to client confidence, retention, and sourcing comfort."
            />
            <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-[#f7f2ec] p-6">
              <p className="text-sm font-semibold text-stone-950">
                Why buyers stay with us
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
          <TestimonialCarousel items={testimonials} />
        </div>
      </AnimatedSection>

      <AnimatedSection id="inquiry" className="bg-[#efe7de] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Inquiry System"
              title="The homepage now ends with one clear conversion target."
              description="Less noise around the form makes the final action feel more direct: submit requirements and move into WhatsApp conversation."
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

          <InquiryForm />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="rounded-[2.5rem] bg-stone-950 px-6 py-10 text-white md:px-10">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-300">
            Final CTA
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-5xl">
            Start your custom textile collection with a partner built for long-term business.
          </h2>
          <Link
            href="/contact#inquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200"
          >
            Talk to Our Factory Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
