import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  BedDouble,
  Boxes,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Hotel,
  Images,
  Layers3,
  Mail,
  MapPinned,
  MessageCircleMore,
  Package2,
  Palette,
  PenTool,
  Paintbrush,
  Ruler,
  Scissors,
  ScrollText,
  ShieldCheck,
  Shirt,
  Sparkles,
  SwatchBook,
  Truck,
  Users2,
  Warehouse,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type CollectionItem = {
  title: string;
  description: string;
  accent: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CertificationItem = {
  name: string;
  description: string;
};

export type ProductItem = {
  name: string;
  fabric: string;
  moq: string;
  customization: string;
  packaging: string;
  accent: string;
};

export type TestimonialItem = {
  company: string;
  region: string;
  quote: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
};

export type RegionItem = {
  title: string;
  description: string;
};

export type InteriorPage = {
  title: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  heroAccent: string;
};

export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8615068858829";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "OEM & ODM", href: "/oem-odm" },
  { label: "Factory", href: "/factory" },
  { label: "Certifications", href: "/certifications" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const primaryCtas = [
  "Request Free Sample",
  "Get Fabric Swatches",
  "Ask for MOQ",
  "Start Your Custom Collection",
  "Talk to Our Factory Team",
  "Request Product Catalog",
];

export const trustStats: StatItem[] = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Export Countries", icon: Globe2 },
  { value: "3000sqm", label: "Manufacturing Facility", icon: Warehouse },
  { value: "Low MOQ", label: "Flexible Startup Support", icon: Boxes },
  { value: "7 Days", label: "Fast Sampling Workflow", icon: Clock3 },
  { value: "OEM / ODM", label: "Custom Programs Supported", icon: Sparkles },
];

export const collections: CollectionItem[] = [
  {
    title: "Bedding Sets",
    description: "Editorial bedding collections designed for modern retail and hospitality programs.",
    accent: "from-stone-900 via-stone-700 to-stone-500",
  },
  {
    title: "Duvet Covers",
    description: "Soft-touch duvet programs with premium finishes, trims, and packaging options.",
    accent: "from-[#8b776d] via-[#b59a8b] to-[#e9ddd2]",
  },
  {
    title: "Pillowcases",
    description: "Luxury pillowcase capsules with logo embroidery, piping, and gift-ready sets.",
    accent: "from-[#484b54] via-[#7b808b] to-[#d8dce4]",
  },
  {
    title: "Blankets",
    description: "Layered comfort pieces for e-commerce bundles, seasonal launches, and hotel suites.",
    accent: "from-[#5b524d] via-[#8e8179] to-[#d3c6bc]",
  },
  {
    title: "Towels",
    description: "Absorbent towel collections tailored for resorts, spas, and premium home brands.",
    accent: "from-[#6a645c] via-[#b5aa9d] to-[#f3ede6]",
  },
  {
    title: "Curtains",
    description: "Textured drapery systems with blackout, linen-look, and embroidered solutions.",
    accent: "from-[#222222] via-[#676767] to-[#d7d7d7]",
  },
  {
    title: "Hotel Collection",
    description: "Coordinated institutional textile programs built around durability and elegance.",
    accent: "from-[#53473b] via-[#8d7f72] to-[#ddd2c4]",
  },
  {
    title: "Kids Collection",
    description: "Private-label textile sets with playful prints, safe materials, and gift packaging.",
    accent: "from-[#8f7a6a] via-[#c8b39d] to-[#f4e7d8]",
  },
  {
    title: "Embroidery Collection",
    description: "Signature stitched details and premium ornamentation for differentiated brand stories.",
    accent: "from-[#1f1f1f] via-[#6d655d] to-[#cfc1b0]",
  },
];

export const customizationServices: ServiceItem[] = [
  { title: "Fabric Customization", description: "Percale, sateen, washed cotton, bamboo, microfiber, blends, and custom GSM programs.", icon: Shirt },
  { title: "Size Customization", description: "Tailored dimensions for retail packs, hospitality projects, and regional bed standards.", icon: Ruler },
  { title: "Logo Embroidery", description: "Premium stitched branding, woven labels, and tonal monogram execution.", icon: PenTool },
  { title: "Pattern Printing", description: "Reactive print, digital print, yarn-dye, and seasonal design development support.", icon: Paintbrush },
  { title: "Packaging Design", description: "Gift boxes, zip bags, inserts, belly bands, and brand-ready unboxing systems.", icon: Package2 },
  { title: "Color Matching", description: "Pantone-guided color development with buyer approval and material swatches.", icon: Palette },
  { title: "Private Label Manufacturing", description: "Confidential, scalable production for Amazon, Shopify, wholesale, and hospitality buyers.", icon: BadgeCheck },
];

export const processSteps: ProcessStep[] = [
  { title: "Inquiry", description: "Align target market, SKU mix, quantities, and product goals with our textile specialist.", icon: MessageCircleMore },
  { title: "Sampling", description: "Develop counter samples, trims, branding, and construction details for approval.", icon: Scissors },
  { title: "Material Confirmation", description: "Lock fabric hand feel, finishes, packaging structure, and quality benchmarks.", icon: SwatchBook },
  { title: "Production", description: "Coordinate cutting, sewing, embroidery, printing, and in-line milestone control.", icon: Layers3 },
  { title: "QC", description: "Inspect stitching, measurements, colorfastness, labeling, and final packing accuracy.", icon: ShieldCheck },
  { title: "Shipping", description: "Prepare export documents, pallet planning, carton markings, and delivery coordination.", icon: Truck },
];

export const certifications: CertificationItem[] = [
  { name: "OEKO-TEX", description: "Safer materials and finished textiles for premium home categories." },
  { name: "GOTS", description: "Responsible textile sourcing programs for organic-focused collections." },
  { name: "ISO9001", description: "Documented process controls that support reliable quality consistency." },
  { name: "BSCI", description: "Compliance-focused manufacturing partnerships for international buyers." },
];

export const featuredProducts: ProductItem[] = [
  {
    name: "Signature Washed Cotton Bedding",
    fabric: "100% washed cotton, 200-300TC",
    moq: "300 sets",
    customization: "Embroidery, labels, Pantone trims",
    packaging: "Gift box, insert card, zip bag",
    accent: "from-[#312c29] via-[#72675d] to-[#d1c5b8]",
  },
  {
    name: "Hotel Sateen Duvet Program",
    fabric: "Sateen stripe, high-density weave",
    moq: "200 sets",
    customization: "Size matrix, woven labels, embroidery",
    packaging: "Export carton, hospitality fold set",
    accent: "from-[#202325] via-[#656f76] to-[#d7dde2]",
  },
  {
    name: "Spa Towel Collection",
    fabric: "Combed cotton, 500-700 GSM",
    moq: "500 pcs",
    customization: "Logo jacquard, border styling",
    packaging: "Band wrap, vacuum set, retail stack",
    accent: "from-[#4d433c] via-[#9b8878] to-[#eae1d6]",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    company: "Nordic Dwell Studio",
    region: "Scandinavia",
    quote: "Their team translated our moodboards into a bedding collection that felt retail-ready from the first sampling round.",
  },
  {
    company: "Harbor Luxe Hospitality",
    region: "Middle East",
    quote: "Communication stayed fast, technical details were clear, and the final hotel textile program met our brand expectations.",
  },
  {
    company: "Maison Thread Co.",
    region: "North America",
    quote: "We value their ability to handle private-label packaging, embroidery, and repeat production with dependable quality control.",
  },
];

export const exportRegions: RegionItem[] = [
  { title: "Europe", description: "Soft minimalist bedding, private label packaging, and boutique retail collections." },
  { title: "Russia", description: "Seasonal warmth programs, rich textiles, and coordinated bedroom assortments." },
  { title: "Middle East", description: "Hospitality-grade towels, embroidered sets, and premium furnishing textiles." },
  { title: "North America", description: "Amazon-ready packs, DTC branding, and scalable reorder workflows." },
  { title: "Southeast Asia", description: "Fast-moving retail capsules and hotel supplier partnerships." },
];

export const blogPosts: BlogPost[] = [
  {
    category: "Textile Trends",
    title: "Scandinavian Bedding Trends Global Buyers Are Sourcing in 2026",
    excerpt: "A premium look at washed cotton, neutral palettes, tactile finishes, and retail packaging directions.",
  },
  {
    category: "OEM Guide",
    title: "How to Build a Bedding OEM Program From Sampling to Repeat Orders",
    excerpt: "A practical framework for setting MOQ, specifications, private labels, and quality checkpoints.",
  },
  {
    category: "Hotel Sourcing",
    title: "What Hotel Suppliers Look for in Towels, Bedding, and Packaging Systems",
    excerpt: "Key specs, compliance considerations, and presentation details that influence procurement decisions.",
  },
];

export const interiorPages: Record<string, InteriorPage> = {
  collections: {
    eyebrow: "Product Programs",
    title: "Curated textile collections built for premium global buyers",
    description: "From bedding and duvet covers to towels, curtains, and embroidery programs, we help brands shape coherent product assortments with refined materials and packaging.",
    highlights: [
      "Private-label product development for home, hospitality, and retail channels",
      "Flexible MOQ planning for new launches and established distributors",
      "Fabric, trim, embroidery, print, and packaging alignment in one workflow",
    ],
    ctaLabel: "Request Product Catalog",
    heroAccent: "from-[#1c1b1a] via-[#6f6358] to-[#e8ddd3]",
  },
  "oem-odm": {
    eyebrow: "Customization",
    title: "OEM and ODM services designed to make sampling and production effortless",
    description: "We turn design intent into premium textile collections with a workflow that feels structured, responsive, and easy for overseas sourcing teams to manage.",
    highlights: [
      "Fabric, sizing, logo, print, color, and packaging customization",
      "Fast sampling feedback cycles and organized technical communication",
      "Production planning built for repeat orders and long-term brand partnerships",
    ],
    ctaLabel: "Start OEM Project",
    heroAccent: "from-[#27211c] via-[#8f7865] to-[#eee3d7]",
  },
  factory: {
    eyebrow: "Manufacturing",
    title: "A modern textile manufacturing partner with quality-first execution",
    description: "Our workshop, sewing lines, inspection flow, and packaging areas are organized around reliable output, brand consistency, and export-ready communication.",
    highlights: [
      "Structured production flow from cutting and sewing to final packing",
      "Inline checks for measurements, stitching, fabric quality, and branding details",
      "Support for e-commerce, wholesale, hotel, and design-studio buyers",
    ],
    ctaLabel: "Talk to Our Factory Team",
    heroAccent: "from-[#202020] via-[#59514c] to-[#d8cbc0]",
  },
  certifications: {
    eyebrow: "Trust Signals",
    title: "International certifications that support premium sourcing confidence",
    description: "Certification visibility matters for global buyers. We present key compliance and process standards in a clean, premium format that reinforces reliability.",
    highlights: [
      "OEKO-TEX, GOTS, ISO9001, and BSCI positioned for buyer reassurance",
      "Minimal presentation designed to feel trustworthy rather than crowded",
      "Ready to expand with downloadable reports and audit details",
    ],
    ctaLabel: "Ask for Compliance File",
    heroAccent: "from-[#242424] via-[#686868] to-[#d7d1ca]",
  },
  "about-us": {
    eyebrow: "Company",
    title: "A textile team focused on long-term cooperation, not one-off transactions",
    description: "We help overseas brands launch and scale custom home textile lines with responsive development, dependable production, and communication built for international business.",
    highlights: [
      "Positioned as a premium manufacturing partner for modern global brands",
      "Designed to serve Amazon sellers, distributors, studios, and hotel suppliers",
      "Built around repeat orders, quick response, and sustainable client relationships",
    ],
    ctaLabel: "Meet Our Team",
    heroAccent: "from-[#201d1a] via-[#77695d] to-[#e3d7cb]",
  },
  blog: {
    eyebrow: "Editorial SEO",
    title: "Content designed to educate buyers and attract qualified organic traffic",
    description: "The blog system introduces sourcing guides, trend reports, material comparisons, and packaging ideas that support long-term lead generation.",
    highlights: [
      "Editorial layout aligned with premium home and design brands",
      "SEO-friendly structure for textile keywords and sourcing intent",
      "Scalable for headless CMS integration and multilingual expansion",
    ],
    ctaLabel: "Explore Content Plan",
    heroAccent: "from-[#211f1d] via-[#6c645d] to-[#e6ddd5]",
  },
  contact: {
    eyebrow: "Lead Conversion",
    title: "A premium inquiry system built to move buyers into WhatsApp conversations",
    description: "The contact experience collects detailed B2B sourcing requirements, stores lead data, and hands the conversation to your sales manager through a polished WhatsApp summary.",
    highlights: [
      "Detailed inquiry capture with company, market, MOQ, and file uploads",
      "Lead records ready for CRM export and structured follow-up statuses",
      "Fast path from form completion to active WhatsApp conversation",
    ],
    ctaLabel: "Get Instant Quotation",
    heroAccent: "from-[#1b201b] via-[#657065] to-[#d9e1d9]",
  },
};

export const whyPartnerPoints = [
  "Luxury global positioning that avoids low-cost wholesale visual cues",
  "Responsive, high-trust UX focused on WhatsApp-led B2B conversion",
  "SEO-ready editorial structure for organic traffic growth",
  "Scalable foundation for multilingual support, CRM integrations, and CMS expansion",
];

export const footerLinks = [
  { label: "WhatsApp", href: `https://wa.me/${whatsappNumber}` },
  { label: "Email", href: "mailto:sales@premiumtextiles.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

export const contactDetails = [
  { label: "WhatsApp", value: "+86 138 0013 8000", icon: MessageCircleMore },
  { label: "Email", value: "sales@premiumtextiles.com", icon: Mail },
  { label: "Export Markets", value: "Europe, North America, Middle East, Southeast Asia", icon: MapPinned },
  { label: "Client Types", value: "Amazon sellers, Shopify brands, hotel suppliers, distributors", icon: Users2 },
];

export const factoryScenes = [
  {
    title: "Workshop",
    description: "Organized cutting and sewing zones built for consistent premium textile output.",
    icon: Building2,
  },
  {
    title: "Quality Inspection",
    description: "Measurement, stitching, fabric, and branding checks before final packing.",
    icon: CheckCircle2,
  },
  {
    title: "Packaging Area",
    description: "Retail-ready folding, inserts, cartons, and export labeling for global shipments.",
    icon: ScrollText,
  },
  {
    title: "Warehouse",
    description: "Carton staging and shipment preparation aligned with buyer schedules.",
    icon: Images,
  },
];
