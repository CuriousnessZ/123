import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/animated-section";
import { getLocale } from "@/lib/get-locale";
import { createTranslator } from "@/lib/i18n";
import { getLocalizedSiteData } from "@/lib/localized-site-data";

type PageProps = {
  params: Promise<{
    productSlug: string;
  }>;
};

export async function generateStaticParams() {
  const { products } = getLocalizedSiteData("en");

  return products.map((product) => ({
    productSlug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const { products } = getLocalizedSiteData("en");
  const product = products.find((entry) => entry.slug === productSlug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { productSlug } = await params;
  const locale = await getLocale();
  const t = createTranslator(locale);
  const { collections, products } = getLocalizedSiteData(locale);
  const product = products.find((entry) => entry.slug === productSlug);

  if (!product) {
    notFound();
  }

  const collection = collections.find(
    (entry) => entry.slug === product.collectionSlug
  );

  if (!collection) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (entry) =>
        entry.collectionSlug === product.collectionSlug && entry.slug !== product.slug
    )
    .slice(0, 3);

  return (
    <main className="bg-[#fbf8f4]">
      <section className="overflow-hidden bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-4 text-sm font-semibold text-stone-700 md:flex-row md:items-center md:justify-between">
            <Link
              href={`/collections/${collection.slug}`}
              className="inline-flex items-center gap-2 hover:text-stone-950"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Back to Collection")}
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 hover:text-stone-950"
            >
              {t("Back to Collections")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
                {collection.title}
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-stone-950 md:text-7xl md:leading-[0.95]">
                {product.name}
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.32em] text-stone-400">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
                {product.summary}
              </p>
            </div>

            <div
              className={`relative min-h-[520px] overflow-hidden rounded-[2.8rem] bg-gradient-to-br ${product.accent} p-8 shadow-[0_28px_90px_rgba(18,16,12,0.1)] md:p-10`}
            >
              <img
                src={product.imageUrl}
                alt={product.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: product.imagePosition }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(10,10,10,0.12),rgba(0,0,0,0.54))]" />
              <div className="relative flex h-full flex-col justify-between rounded-[2.2rem] border border-white/15 bg-white/6 p-6 text-white backdrop-blur md:p-8">
                <p className="text-[11px] uppercase tracking-[0.38em] text-white/62">
                  {t("Product Chapter")}
                </p>
                <div>
                  <p className="text-sm uppercase tracking-[0.34em] text-white/46">
                    {t("Product Positioning")}
                  </p>
                  <p className="mt-4 max-w-md text-3xl font-semibold leading-[1.15] md:text-5xl md:leading-[1.04]">
                    {product.fabric}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
              {t("Fabric")}
            </p>
            <p className="mt-4 text-sm leading-8 text-stone-700">{product.fabric}</p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
              {t("MOQ")}
            </p>
            <p className="mt-4 text-sm leading-8 text-stone-700">{product.moq}</p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
              {t("Lead Time")}
            </p>
            <p className="mt-4 text-sm leading-8 text-stone-700">
              {product.leadTime}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(20,16,12,0.04)] md:p-8">
            <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
              {t("Use Case")}
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-5xl md:leading-[0.96]">
              {product.useCase}
            </h2>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(20,16,12,0.04)] md:p-8">
            <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
              {t("Customization")}
            </p>
            <p className="mt-5 text-sm leading-8 text-stone-700">
              {product.customization}
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-stone-400">
              {t("Packaging")}
            </p>
            <p className="mt-3 text-sm leading-8 text-stone-700">
              {product.packaging}
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-[2.2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_45px_rgba(20,16,12,0.04)] md:p-10">
          <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
            {t("Product Highlights")}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {product.detailBullets.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-stone-200 bg-[#fcfaf7] p-5"
              >
                <div className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-stone-900" />
                  <p className="text-sm leading-7 text-stone-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
                {t("Product Visuals")}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl md:leading-[0.96]">
                {t("Close-up imagery, finish details, and merchandising crops help the buyer read the product quickly.")}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {product.gallery.map((item, index) => (
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
                {t("More From This Collection")}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl md:leading-[0.96]">
                {collection.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
                {collection.description}
              </p>
            </div>
            <div className="grid gap-5">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  href={`/products/${relatedProduct.slug}`}
                  className="group grid gap-4 overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-4 shadow-[0_18px_45px_rgba(20,16,12,0.04)] md:grid-cols-[220px_1fr]"
                >
                  <div className="relative h-52 overflow-hidden rounded-[1.4rem]">
                    <img
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.imageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      style={{ objectPosition: relatedProduct.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.22))]" />
                  </div>
                  <div className="flex flex-col justify-between gap-4 p-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
                        {relatedProduct.tagline}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-stone-950">
                        {relatedProduct.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-stone-600">
                        {relatedProduct.summary}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
                      {t("View Product Details")}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-[0_24px_80px_rgba(18,16,12,0.08)] md:p-10">
          <p className="text-[11px] uppercase tracking-[0.38em] text-stone-500">
            {t("Product Inquiry")}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl md:leading-[0.96]">
            {t("Request specifications, swatches, or a quotation for this product.")}
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact#inquiry" className="button-primary">
              {t("Request collection details")}
            </Link>
            <Link
              href={`/collections/${collection.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-5 py-3 text-sm font-semibold text-stone-900"
            >
              {t("Back to Collection")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
