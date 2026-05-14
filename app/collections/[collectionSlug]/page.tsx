import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/animated-section";
import { getLocale } from "@/lib/get-locale";
import { createTranslator } from "@/lib/i18n";
import { getLocalizedSiteData } from "@/lib/localized-site-data";

type PageProps = {
  params: Promise<{
    collectionSlug: string;
  }>;
};

export async function generateStaticParams() {
  const { collections } = getLocalizedSiteData("en");

  return collections.map((collection) => ({
    collectionSlug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { collectionSlug } = await params;
  const { collections } = getLocalizedSiteData("en");
  const collection = collections.find((entry) => entry.slug === collectionSlug);

  if (!collection) {
    return {};
  }

  return {
    title: collection.title,
    description: collection.narrative,
  };
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { collectionSlug } = await params;
  const locale = await getLocale();
  const t = createTranslator(locale);
  const { collections, products } = getLocalizedSiteData(locale);
  const collection = collections.find((entry) => entry.slug === collectionSlug);

  if (!collection) {
    notFound();
  }

  const relatedProducts = products.filter(
    (product) => product.collectionSlug === collection.slug
  );

  return (
    <main className="bg-[#fbf8f4]">
      <section className="overflow-hidden bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-700 hover:text-stone-950"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("Back to Collections")}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
                {collection.eyebrow}
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-stone-950 md:text-7xl md:leading-[0.95]">
                {collection.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
                {collection.narrative}
              </p>
            </div>

            <div
              className={`relative min-h-[500px] overflow-hidden rounded-[2.8rem] bg-gradient-to-br ${collection.accent} p-8 shadow-[0_28px_90px_rgba(18,16,12,0.1)] md:p-10`}
            >
              <img
                src={collection.heroImageUrl}
                alt={collection.heroImageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: collection.heroImagePosition }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(10,10,10,0.12),rgba(0,0,0,0.52))]" />
              <div className="relative flex h-full flex-col justify-between rounded-[2.2rem] border border-white/15 bg-white/6 p-6 text-white backdrop-blur md:p-8">
                <p className="text-[11px] uppercase tracking-[0.38em] text-white/62">
                  {t("Collection Chapter")}
                </p>
                <div>
                  <p className="text-sm uppercase tracking-[0.34em] text-white/46">
                    {t("Material Narrative")}
                  </p>
                  <p className="mt-4 max-w-md text-3xl font-semibold leading-[1.15] md:text-5xl md:leading-[1.04]">
                    {collection.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
              {t("Collection Positioning")}
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl md:leading-[0.96]">
              {t("A quieter, more tactile chapter inside the broader textile assortment.")}
            </h2>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(20,16,12,0.04)] md:p-8">
            <p className="text-sm leading-8 text-stone-600 md:text-base">
              {collection.detailNote}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
              {t("Material Focus")}
            </p>
            <p className="mt-4 text-sm leading-8 text-stone-700">
              {collection.materialFocus}
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
              {t("Best Applied To")}
            </p>
            <p className="mt-4 text-sm leading-8 text-stone-700">
              {collection.idealFor}
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
              {t("Finish Language")}
            </p>
            <p className="mt-4 text-sm leading-8 text-stone-700">
              {collection.finishNote}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
                {t("Visual Narrative")}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl md:leading-[0.96]">
                {t("Real image-led storytelling that supports swatch requests, specification talks, and collection positioning.")}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {collection.gallery.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#fcfaf7]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: item.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.18))]" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-stone-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f7f2ec] py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2.4rem] border border-stone-200 bg-stone-950 p-8 text-white md:p-10">
              <p className="text-[11px] uppercase tracking-[0.38em] text-white/55">
                {t("Editorial Reading")}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl md:leading-[0.96]">
                {t("The collection is presented like a catalog chapter rather than a crowded wholesale grid.")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
                {t(
                  "The goal is to help buyers read proportion, texture, finish, and commercial intent before they ever ask for the line sheet."
                )}
              </p>
            </div>

            <div className="grid gap-5">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: product.imagePosition }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.24))]" />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
                        {t("Signature Program")}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-stone-950">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm uppercase tracking-[0.32em] text-stone-400">
                        {product.tagline}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-stone-600">
                        {product.summary}
                      </p>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">
                            {t("Fabric")}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-stone-700">
                            {product.fabric}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">
                            {t("MOQ")}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-stone-700">
                            {product.moq}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">
                            {t("Lead Time")}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-stone-700">
                            {product.leadTime}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">
                            {t("Packaging")}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-stone-700">
                            {product.packaging}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/products/${product.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-900"
                      >
                        {t("View Product Details")}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
                    {t("Catalog Note")}
                  </p>
                  <p className="mt-4 text-sm leading-8 text-stone-700">
                    {t(
                      "This chapter is prepared as a branded collection story first. Technical sheets, sample references, and spec breakdowns can be shared after inquiry."
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-[0_24px_80px_rgba(18,16,12,0.08)] md:p-10">
          <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
            {t("Collection Inquiry")}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl md:leading-[0.96]">
            {t("Request swatches, specifications, or a custom proposal for this collection.")}
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact#inquiry" className="button-primary">
              {t("Request collection details")}
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-5 py-3 text-sm font-semibold text-stone-900"
            >
              {t("Back to Collections")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
