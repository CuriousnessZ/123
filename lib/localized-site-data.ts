import type { Locale } from "@/lib/i18n";
import { translateText } from "@/lib/i18n";
import {
  blogPosts,
  certifications,
  collections,
  contactDetails,
  customizationServices,
  exportRegions,
  factoryPlogMoments,
  factoryPlogTimeline,
  factoryScenes,
  factoryStrengthMetrics,
  featuredProducts,
  footerLinks,
  interiorPages,
  navItems,
  processSteps,
  products,
  testimonials,
  trustStats,
  whyPartnerPoints,
} from "@/lib/site-data";

export function getLocalizedSiteData(locale: Locale) {
  const t = (text: string) => translateText(locale, text);
  const localizeProduct = (item: (typeof products)[number]) => ({
    ...item,
    name: t(item.name),
    tagline: t(item.tagline),
    summary: t(item.summary),
    fabric: t(item.fabric),
    moq: t(item.moq),
    customization: t(item.customization),
    packaging: t(item.packaging),
    imageAlt: t(item.imageAlt),
    leadTime: t(item.leadTime),
    useCase: t(item.useCase),
    detailBullets: item.detailBullets.map((detail) => t(detail)),
    gallery: item.gallery.map((galleryItem) => ({
      ...galleryItem,
      title: t(galleryItem.title),
      description: t(galleryItem.description),
      imageAlt: t(galleryItem.imageAlt),
    })),
  });

  return {
    navItems: navItems.map((item) => ({ ...item, label: t(item.label) })),
    trustStats: trustStats.map((item) => ({
      ...item,
      value: t(item.value),
      label: t(item.label),
    })),
    collections: collections.map((item) => ({
      ...item,
      title: t(item.title),
      eyebrow: t(item.eyebrow),
      description: t(item.description),
      narrative: t(item.narrative),
      detailNote: t(item.detailNote),
      materialFocus: t(item.materialFocus),
      idealFor: t(item.idealFor),
      finishNote: t(item.finishNote),
      heroImageAlt: t(item.heroImageAlt),
      gallery: item.gallery.map((galleryItem) => ({
        ...galleryItem,
        title: t(galleryItem.title),
        description: t(galleryItem.description),
        imageAlt: t(galleryItem.imageAlt),
      })),
    })),
    customizationServices: customizationServices.map((item) => ({
      ...item,
      title: t(item.title),
      description: t(item.description),
    })),
    processSteps: processSteps.map((item) => ({
      ...item,
      title: t(item.title),
      description: t(item.description),
    })),
    certifications: certifications.map((item) => ({
      ...item,
      name: t(item.name),
      description: t(item.description),
    })),
    factoryStrengthMetrics: factoryStrengthMetrics.map((item) => ({
      ...item,
      value: t(item.value),
      label: t(item.label),
    })),
    products: products.map(localizeProduct),
    featuredProducts: featuredProducts.map(localizeProduct),
    testimonials: testimonials.map((item) => ({
      ...item,
      company: t(item.company),
      region: t(item.region),
      quote: t(item.quote),
    })),
    exportRegions: exportRegions.map((item) => ({
      ...item,
      title: t(item.title),
      description: t(item.description),
    })),
    blogPosts: blogPosts.map((item) => ({
      ...item,
      category: t(item.category),
      title: t(item.title),
      excerpt: t(item.excerpt),
    })),
    interiorPages: Object.fromEntries(
      Object.entries(interiorPages).map(([key, item]) => [
        key,
        {
          ...item,
          eyebrow: t(item.eyebrow),
          title: t(item.title),
          description: t(item.description),
          highlights: item.highlights.map((highlight) => t(highlight)),
          ctaLabel: t(item.ctaLabel),
        },
      ])
    ),
    whyPartnerPoints: whyPartnerPoints.map((item) => t(item)),
    footerLinks: footerLinks.map((item) => ({
      ...item,
      label: t(item.label),
    })),
    contactDetails: contactDetails.map((item) => ({
      ...item,
      label: t(item.label),
      value: t(item.value),
    })),
    factoryScenes: factoryScenes.map((item) => ({
      ...item,
      title: t(item.title),
      description: t(item.description),
    })),
    factoryPlogMoments: factoryPlogMoments.map((item) => ({
      ...item,
      title: t(item.title),
      description: t(item.description),
    })),
    factoryPlogTimeline: factoryPlogTimeline.map((item) => ({
      ...item,
      title: t(item.title),
      description: t(item.description),
    })),
  };
}
