import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/animated-section";
import { InquiryForm } from "@/components/inquiry-form";
import {
  blogPosts,
  certifications,
  collections,
  contactDetails,
  factoryPlogMoments,
  factoryPlogTimeline,
  customizationServices,
  factoryScenes,
  interiorPages,
  processSteps,
  whyPartnerPoints,
} from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(interiorPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = interiorPages[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

function PageIntro({
  eyebrow,
  title,
  description,
  ctaLabel,
  heroAccent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  heroAccent: string;
}) {
  return (
    <section className="bg-[#f6f0e8]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact#inquiry" className="button-primary">
              {ctaLabel}
            </Link>
            <Link href="/" className="button-secondary">
              Back to Home
            </Link>
          </div>
        </div>
        <div className={`rounded-[2.5rem] bg-gradient-to-br ${heroAccent} p-8 text-white shadow-[0_28px_70px_rgba(20,16,12,0.12)]`}>
          <div className="rounded-[2rem] border border-white/15 bg-white/8 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-200">
              Premium Presentation
            </p>
            <p className="mt-6 text-2xl font-semibold leading-10">
              Elegant, trustworthy, minimal, and conversion-focused for international buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function InteriorPage({ params }: PageProps) {
  const { slug } = await params;
  const page = interiorPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main>
      <PageIntro {...page} />

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              Key Highlights
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-stone-950 md:text-5xl">
              A premium page framework that supports B2B trust and action.
            </h2>
          </div>
          <div className="space-y-4">
            {page.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-[0_18px_45px_rgba(20,16,12,0.04)]"
              >
                <div className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-stone-900" />
                  <p className="leading-7 text-stone-600">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {slug === "collections" ? (
        <AnimatedSection className="bg-[#f7f2ec] py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white"
              >
                <div className={`h-56 bg-gradient-to-br ${collection.accent}`} />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-stone-950">
                    {collection.title}
                  </h3>
                  <p className="mt-4 leading-7 text-stone-600">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      ) : null}

      {slug === "oem-odm" ? (
        <AnimatedSection className="bg-[#f7f2ec] py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {customizationServices.map((service) => {
                const Icon = service.icon;

                return (
                  <div key={service.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-stone-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="space-y-4 rounded-[2rem] border border-stone-200 bg-white p-6">
              {processSteps.map((step) => (
                <div key={step.title} className="rounded-[1.5rem] bg-[#f7f2ec] p-4">
                  <p className="text-lg font-semibold text-stone-950">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ) : null}

      {slug === "factory" ? (
        <AnimatedSection className="bg-[#f7f2ec] py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 md:px-8 md:grid-cols-2 xl:grid-cols-4">
            {factoryScenes.map((scene) => {
              const Icon = scene.icon;

              return (
                <div key={scene.title} className="rounded-[2rem] border border-stone-200 bg-white p-6">
                  <Icon className="h-5 w-5 text-stone-900" />
                  <h3 className="mt-4 text-xl font-semibold text-stone-950">{scene.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{scene.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      ) : null}

      {slug === "factory-plog" ? (
        <>
          <AnimatedSection className="bg-[#f7f2ec] py-20">
            <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="grid gap-5 md:grid-cols-2">
                  {factoryPlogMoments.map((moment) => (
                    <div
                      key={moment.title}
                      className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white"
                    >
                      <div
                        className={`h-56 bg-gradient-to-br ${moment.accent}`}
                      />
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                          Factory Moment
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold text-stone-950">
                          {moment.title}
                        </h3>
                        <p className="mt-4 leading-7 text-stone-600">
                          {moment.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
                    One Day In The Factory
                  </p>
                  <h2 className="mt-5 text-3xl font-semibold text-stone-950 md:text-4xl">
                    A timeline view that makes the production atmosphere easier
                    to picture.
                  </h2>
                  <div className="mt-8 grid gap-5">
                    {factoryPlogTimeline.map((item) => (
                      <div
                        key={`${item.time}-${item.title}`}
                        className="grid gap-3 border-b border-stone-200 pb-5 last:border-b-0 last:pb-0 md:grid-cols-[86px_1fr]"
                      >
                        <span className="text-xs uppercase tracking-[0.28em] text-stone-400">
                          {item.time}
                        </span>
                        <div>
                          <p className="text-lg font-semibold text-stone-950">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-stone-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-white py-20">
            <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-stone-200 bg-[#f7f2ec] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
                  Spaces Buyers Care About
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {factoryScenes.map((scene) => {
                    const Icon = scene.icon;

                    return (
                      <div
                        key={scene.title}
                        className="rounded-[1.5rem] border border-stone-200 bg-white p-5"
                      >
                        <Icon className="h-5 w-5 text-stone-900" />
                        <h3 className="mt-4 text-lg font-semibold text-stone-950">
                          {scene.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-stone-600">
                          {scene.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white md:p-8">
                <p className="text-xs uppercase tracking-[0.34em] text-white/55">
                  Buyer Takeaway
                </p>
                <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
                  A plog page makes the factory feel more real, active, and
                  trustworthy.
                </h2>
                <div className="mt-8 grid gap-4">
                  {processSteps.slice(1, 5).map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                        Step 0{index + 1}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/68">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </>
      ) : null}

      {slug === "certifications" ? (
        <AnimatedSection className="bg-[#f7f2ec] py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-4">
            {certifications.map((certification) => (
              <div key={certification.name} className="rounded-[2rem] border border-stone-200 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  Certified
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-950">
                  {certification.name}
                </h3>
                <p className="mt-4 leading-7 text-stone-600">{certification.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      ) : null}

      {slug === "blog" ? (
        <AnimatedSection className="bg-[#f7f2ec] py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 md:px-8 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-[2rem] border border-stone-200 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  {post.category}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-stone-950">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-stone-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      ) : null}

      {slug === "about-us" ? (
        <AnimatedSection className="bg-[#f7f2ec] py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 md:px-8 lg:grid-cols-2">
            {whyPartnerPoints.map((point) => (
              <div key={point} className="rounded-[2rem] border border-stone-200 bg-white p-6">
                <p className="leading-7 text-stone-600">{point}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      ) : null}

      {slug === "contact" ? (
        <AnimatedSection id="inquiry" className="bg-[#efe7de] py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div key={detail.label} className="rounded-[1.75rem] border border-white/70 bg-white/90 p-5">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-stone-950">{detail.label}</p>
                        <p className="mt-2 text-sm leading-7 text-stone-600">{detail.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <InquiryForm />
          </div>
        </AnimatedSection>
      ) : null}

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-[2.5rem] bg-stone-950 px-6 py-10 text-white md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-300">
            Conversion CTA
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-5xl">
            Move qualified textile buyers into a direct WhatsApp conversation.
          </h2>
          <Link href="/contact#inquiry" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950">
            Request Free Sample
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
