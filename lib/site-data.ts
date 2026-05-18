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
  slug: string;
  title: string;
  description: string;
  accent: string;
  eyebrow: string;
  narrative: string;
  detailNote: string;
  materialFocus: string;
  idealFor: string;
  finishNote: string;
  heroImageUrl: string;
  heroImageAlt: string;
  heroImagePosition: string;
  gallery: CollectionGalleryItem[];
};

export type CollectionGalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: string;
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

export type FactoryStrengthMetric = {
  value: string;
  label: string;
};

export type FactoryPlogMoment = {
  title: string;
  description: string;
  accent: string;
};

export type FactoryPlogTimelineItem = {
  time: string;
  title: string;
  description: string;
};

export type ProductItem = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  fabric: string;
  moq: string;
  customization: string;
  packaging: string;
  accent: string;
  collectionSlug: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: string;
  leadTime: string;
  useCase: string;
  detailBullets: string[];
  gallery: CollectionGalleryItem[];
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
  { label: "About Us", href: "/about-us" },
  { label: "Certifications", href: "/certifications" },
  { label: "Company Profile", href: "/company-profile" },
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

function buildCollectionGallery(
  baseTitle: string,
  positions: [string, string, string]
): CollectionGalleryItem[] {
  return [
    {
      title: "Atmospheric Scene",
      description:
        "A wide editorial framing that captures the product in a styled interior environment, establishing the overall brand mood and scale.",
      imageUrl: "/cover.png",
      imageAlt: `${baseTitle} atmospheric scene`,
      imagePosition: positions[0],
    },
    {
      title: "Textural Detail",
      description:
        "A close-up view focusing on the fabric weave, tactile surface quality, and natural drape under soft studio lighting.",
      imageUrl: "/cover.png",
      imageAlt: `${baseTitle} textural detail`,
      imagePosition: positions[1],
    },
    {
      title: "Technical Execution",
      description:
        "A detailed macro shot highlighting the precision of stitching, border finishing, and specialized hardware or closure details.",
      imageUrl: "/cover.png",
      imageAlt: `${baseTitle} technical execution`,
      imagePosition: positions[2],
    },
  ];
}

type ProductSeed = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  fabric: string;
  moq: string;
  customization: string;
  packaging: string;
  accent: string;
  collectionSlug: string;
  imagePosition: string;
  leadTime: string;
  useCase: string;
  detailBullets: string[];
  galleryPositions: [string, string, string];
};

function createProduct({
  slug,
  name,
  tagline,
  summary,
  fabric,
  moq,
  customization,
  packaging,
  accent,
  collectionSlug,
  imagePosition,
  leadTime,
  useCase,
  detailBullets,
  galleryPositions,
}: ProductSeed): ProductItem {
  return {
    slug,
    name,
    tagline,
    summary,
    fabric,
    moq,
    customization,
    packaging,
    accent,
    collectionSlug,
    imageUrl: "/cover.png",
    imageAlt: `${name} product hero`,
    imagePosition,
    leadTime,
    useCase,
    detailBullets,
    gallery: buildCollectionGallery(name, galleryPositions),
  };
}

export const collections: CollectionItem[] = [
  {
    slug: "bedding-sets",
    title: "Bedding Sets",
    description: "Editorial bedding collections designed for modern retail and hospitality programs.",
    accent: "from-stone-900 via-stone-700 to-stone-500",
    eyebrow: "Quiet Layering",
    narrative:
      "A composed bedding story built around layered neutrals, soft construction, and retail-ready presentation for modern interior brands.",
    detailNote:
      "Designed to feel calm and architectural rather than decorative, this category becomes the anchor of a premium bedroom assortment.",
    materialFocus: "Washed cotton, sateen, percale, linen-touch blends",
    idealFor: "Boutique retail, hotel suites, curated bedroom launches",
    finishNote: "Embroidery, tonal trims, folded sets, gift packaging",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Bedding sets editorial hero",
    heroImagePosition: "72% center",
    gallery: buildCollectionGallery("Bedding Sets", [
      "72% center",
      "83% 40%",
      "58% 18%",
    ]),
  },
  {
    slug: "duvet-covers",
    title: "Duvet Covers",
    description: "Soft-touch duvet programs with premium finishes, trims, and packaging options.",
    accent: "from-[#8b776d] via-[#b59a8b] to-[#e9ddd2]",
    eyebrow: "Soft Structure",
    narrative:
      "Duvet cover programs focus on drape, refined closure details, and a surface finish that feels elevated in both retail and hospitality contexts.",
    detailNote:
      "Presented as a quieter hero piece, duvet covers help buyers read fabric character, finish quality, and set coordination at first glance.",
    materialFocus: "High-density sateen, washed cotton, jacquard stripes",
    idealFor: "Hotel bedding programs, premium home launches, export cartons",
    finishNote: "Button plackets, hidden zip options, branded fold presentation",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Duvet covers editorial hero",
    heroImagePosition: "82% center",
    gallery: buildCollectionGallery("Duvet Covers", [
      "82% center",
      "88% 46%",
      "62% 16%",
    ]),
  },
  {
    slug: "pillowcases",
    title: "Pillowcases",
    description: "Luxury pillowcase capsules with logo embroidery, piping, and gift-ready sets.",
    accent: "from-[#484b54] via-[#7b808b] to-[#d8dce4]",
    eyebrow: "Small Luxury",
    narrative:
      "Pillowcases are treated as a precision category where edge detail, tonal embroidery, and tactile hand feel all influence the luxury impression.",
    detailNote:
      "This collection is styled like an accessory edit inside the broader bedroom family, with more attention on trimming, monograms, and finishing finesse.",
    materialFocus: "Percale, sateen, washed finishes, tonal embroidery",
    idealFor: "Gift-ready packs, boutique labels, embroidered brand programs",
    finishNote: "Piping, oxford borders, logo embroidery, retail inserts",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Pillowcases editorial hero",
    heroImagePosition: "78% center",
    gallery: buildCollectionGallery("Pillowcases", [
      "78% center",
      "88% 30%",
      "65% 22%",
    ]),
  },
  {
    slug: "blankets",
    title: "Blankets",
    description: "Layered comfort pieces for e-commerce bundles, seasonal launches, and hotel suites.",
    accent: "from-[#5b524d] via-[#8e8179] to-[#d3c6bc]",
    eyebrow: "Seasonal Warmth",
    narrative:
      "Blanket programs carry a more tactile and seasonal voice, balancing warmth, softness, and an understated premium look for layered interiors.",
    detailNote:
      "Rather than presenting blankets as bulk utility products, this story frames them as a key emotional layer within a luxury home assortment.",
    materialFocus: "Microfiber plush, cotton blends, brushed warmth finishes",
    idealFor: "Seasonal retail drops, hotel suites, soft-home bundles",
    finishNote: "Ribbon wraps, cross straps, folded shelf presentation",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Blankets editorial hero",
    heroImagePosition: "75% center",
    gallery: buildCollectionGallery("Blankets", [
      "75% center",
      "84% 54%",
      "60% 15%",
    ]),
  },
  {
    slug: "towels",
    title: "Towels",
    description: "Absorbent towel collections tailored for resorts, spas, and premium home brands.",
    accent: "from-[#6a645c] via-[#b5aa9d] to-[#f3ede6]",
    eyebrow: "Resort Tactility",
    narrative:
      "Towel collections are presented through absorbency, weight, and visual discipline, especially where spa and hospitality clients expect immediate quality cues.",
    detailNote:
      "The category sits between performance and luxury, so the page focuses on both hand feel and how the sets are visually stacked, folded, and branded.",
    materialFocus: "Combed cotton, jacquard borders, 500-700 GSM programs",
    idealFor: "Spa collections, resorts, hotel bathroom programs",
    finishNote: "Logo borders, stacked presentation, hospitality folding",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Towels editorial hero",
    heroImagePosition: "86% center",
    gallery: buildCollectionGallery("Towels", [
      "86% center",
      "92% 62%",
      "67% 18%",
    ]),
  },
  {
    slug: "curtains",
    title: "Curtains",
    description: "Textured drapery systems with blackout, linen-look, and embroidered solutions.",
    accent: "from-[#222222] via-[#676767] to-[#d7d7d7]",
    eyebrow: "Spatial Textile",
    narrative:
      "Curtain collections bring a more architectural scale to the presentation, highlighting drape, structure, and interior framing rather than just surface pattern.",
    detailNote:
      "This is where the range begins to feel more like an interiors collection, with emphasis on room atmosphere, panel scale, and material fall.",
    materialFocus: "Blackout bases, linen-look weaves, embroidered sheers",
    idealFor: "Interior projects, hospitality rooms, layered window programs",
    finishNote: "Header customization, blackout lining, export-ready folding",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Curtains editorial hero",
    heroImagePosition: "74% center",
    gallery: buildCollectionGallery("Curtains", [
      "74% center",
      "82% 48%",
      "55% 22%",
    ]),
  },
  {
    slug: "hotel-collection",
    title: "Hotel Collection",
    description: "Coordinated institutional textile programs built around durability and elegance.",
    accent: "from-[#53473b] via-[#8d7f72] to-[#ddd2c4]",
    eyebrow: "Hospitality Order",
    narrative:
      "Hotel programs are shown with an emphasis on consistency, operational discipline, and the calm visual language expected from international hospitality buyers.",
    detailNote:
      "This collection reads less like a retail category and more like a coordinated specification system covering bedding, towels, and presentation logic together.",
    materialFocus: "Commercial bedding fabrics, towels, coordinated textile packs",
    idealFor: "Hotels, serviced apartments, hospitality supply programs",
    finishNote: "Institutional specs, label control, export carton discipline",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Hotel collection editorial hero",
    heroImagePosition: "85% center",
    gallery: buildCollectionGallery("Hotel Collection", [
      "85% center",
      "90% 38%",
      "64% 16%",
    ]),
  },
  {
    slug: "kids-collection",
    title: "Kids Collection",
    description: "Private-label textile sets with playful prints, safe materials, and gift packaging.",
    accent: "from-[#8f7a6a] via-[#c8b39d] to-[#f4e7d8]",
    eyebrow: "Gentle Play",
    narrative:
      "Kids collections soften the overall catalog with safer materials, warmer tones, and a more playful but still premium visual structure.",
    detailNote:
      "The category stays refined rather than loud, allowing playful product direction to live inside a brand system that still feels considered and export-ready.",
    materialFocus: "Soft cotton bases, print development, child-safe trims",
    idealFor: "Gift collections, family retail, private-label launches",
    finishNote: "Illustrated prints, safe components, boxed presentation",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Kids collection editorial hero",
    heroImagePosition: "76% center",
    gallery: buildCollectionGallery("Kids Collection", [
      "76% center",
      "88% 42%",
      "59% 18%",
    ]),
  },
  {
    slug: "embroidery-collection",
    title: "Embroidery Collection",
    description: "Signature stitched details and premium ornamentation for differentiated brand stories.",
    accent: "from-[#1f1f1f] via-[#6d655d] to-[#cfc1b0]",
    eyebrow: "Signature Detail",
    narrative:
      "Embroidery collections focus on craft language, tonal thread work, and the kind of refined ornamentation that helps a brand look more distinct and premium.",
    detailNote:
      "Presented like a couture detail story, this chapter is less about volume and more about intimacy, precision, and visual identity.",
    materialFocus: "Tone-on-tone embroidery, monograms, stitched branding",
    idealFor: "Boutique labels, signature capsules, gifting collections",
    finishNote: "Thread tone approval, premium fold sets, branded detail work",
    heroImageUrl: "/cover.png",
    heroImageAlt: "Embroidery collection editorial hero",
    heroImagePosition: "80% center",
    gallery: buildCollectionGallery("Embroidery Collection", [
      "80% center",
      "90% 44%",
      "62% 14%",
    ]),
  },
];

export const customizationServices: ServiceItem[] = [
  {
    title: "Fabric Customization",
    description:
      "Specialized in percale, sateen, washed cotton, bamboo, microfiber, and custom GSM weight programs tailored to your market.",
    icon: Shirt,
  },
  {
    title: "Size Customization",
    description:
      "Full range of international bed sizes (King, Queen, Twin, EU/UK/US standards) and custom dimensions for hospitality projects.",
    icon: Ruler,
  },
  {
    title: "Logo & Branding",
    description:
      "Premium embroidery, woven labels, hangtags, and tonal monogramming to establish your brand identity.",
    icon: PenTool,
  },
  {
    title: "Pattern & Printing",
    description:
      "Reactive printing, digital printing, yarn-dyed jacquard, and seasonal pattern development support.",
    icon: Paintbrush,
  },
  {
    title: "Packaging Design",
    description:
      "Retail-ready gift boxes, PVC/fabric zip bags, belly bands, and eco-friendly packaging solutions for Amazon and Shopify brands.",
    icon: Package2,
  },
  {
    title: "Color Matching",
    description:
      "Strict Pantone color matching with lab-dip approval and fabric swatch confirmation before bulk production.",
    icon: Palette,
  },
  {
    title: "Private Label",
    description:
      "Confidential and scalable manufacturing for emerging DTC brands and established international textile distributors.",
    icon: BadgeCheck,
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Design & Inquiry",
    description:
      "Define product specifications, SKU mix, target pricing, and brand goals with our dedicated textile project managers.",
    icon: MessageCircleMore,
  },
  {
    title: "Prototyping & Sampling",
    description:
      "Fast-track sample development including material sourcing, trim matching, and construction approval samples.",
    icon: Scissors,
  },
  {
    title: "Material & Spec Approval",
    description:
      "Finalize fabric hand-feel, color lab-dips, packaging artwork, and technical specifications for mass production.",
    icon: SwatchBook,
  },
  {
    title: "Mass Production",
    description:
      "Coordinated cutting, sewing, and finishing with real-time milestone tracking and capacity management.",
    icon: Layers3,
  },
  {
    title: "Strict Quality Control",
    description:
      "Multi-stage inspection covering stitching precision, measurement accuracy, colorfastness, and final packing audits.",
    icon: ShieldCheck,
  },
  {
    title: "Logistics & Shipping",
    description:
      "Export documentation, palletization, carton marking, and global delivery coordination for sea, air, or rail freight.",
    icon: Truck,
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "OEKO-TEX Standard 100",
    description:
      "Global standard for textile safety. Our certification ensures that every thread, button, and accessory is tested for harmful substances, making it safe for sensitive skin.",
  },
  {
    name: "GOTS (Organic Cotton)",
    description:
      "Global Organic Textile Standard. This certification verifies the organic status of textiles from harvesting of the raw materials through environmentally and socially responsible manufacturing.",
  },
  {
    name: "ISO 9001:2015",
    description:
      "International standard for Quality Management Systems. It demonstrates our commitment to consistent quality, customer satisfaction, and continuous process improvement.",
  },
  {
    name: "BSCI Social Audit",
    description:
      "Business Social Compliance Initiative. This audit ensures ethical working conditions, fair wages, and strict adherence to labor laws within our production facility.",
  },
];

export const factoryStrengthMetrics: FactoryStrengthMetric[] = [
  { value: "3,000 sqm", label: "Integrated Production Facility" },
  { value: "50,000+ pcs", label: "Monthly Production Capacity" },
  { value: "100+ Units", label: "Advanced Sewing & Finishing Machinery" },
  { value: "24-48 Hours", label: "Initial Quotation Response Time" },
];

export const factoryScenes: ServiceItem[] = [
  {
    title: "Cutting Workshop",
    description:
      "Equipped with automatic spreading and precision cutting systems for high-volume fabric accuracy.",
    icon: Scissors,
  },
  {
    title: "Sewing Department",
    description:
      "Multi-needle quilting, specialized embroidery, and high-speed sewing lines for consistent premium finishing.",
    icon: Shirt,
  },
  {
    title: "Quality Lab",
    description:
      "On-site testing for thread tension, colorfastness, and fabric durability to meet international standards.",
    icon: ShieldCheck,
  },
  {
    title: "Packing & Staging",
    description:
      "Organized retail-ready folding and export carton staging aligned with international shipping requirements.",
    icon: Warehouse,
  },
];

export const products: ProductItem[] = [
  createProduct({
    slug: "300tc-organic-washed-cotton-set",
    name: "300TC Organic Washed Cotton Set",
    tagline: "Relaxed luxury with a breathable matte finish",
    summary:
      "A signature SKU developed for premium DTC brands, balancing a lived-in aesthetic with the structural integrity of high-density 300TC organic cotton.",
    fabric: "100% Organic Cotton, 300TC Washed Finish",
    moq: "200 sets per color",
    customization: "Pantone dyeing, custom labels, hidden button closures",
    packaging: "Sustainable cotton drawstring bag with recycled insert cards",
    accent: "from-[#312c29] via-[#72675d] to-[#d1c5b8]",
    collectionSlug: "bedding-sets",
    imagePosition: "76% center",
    leadTime: "7-10 days for lab-dip & sample confirmation",
    useCase: "Premium retail, eco-conscious DTC launches, boutique hotels",
    detailBullets: [
      "Proprietary washing process for a soft, matte hand-feel without pilling",
      "GOTS certified organic cotton ensuring ethical sourcing and safety",
      "Reinforced double-stitched seams for durability in commercial laundry",
    ],
    galleryPositions: ["76% center", "86% 44%", "56% 18%"],
  }),
  createProduct({
    slug: "400tc-hotel-sateen-stripe-set",
    name: "400TC Hotel Sateen Stripe Set",
    tagline: "Crisp architectural structure with a silky sheen",
    summary:
      "A high-performance bedding program designed for international 5-star hospitality projects, featuring a classic 1cm or 3cm woven stripe.",
    fabric: "Long-staple Cotton, 400TC Sateen Jacquard Stripe",
    moq: "300 sets (Integrated size matrix supported)",
    customization: "Embroidered property logos, specialized labels",
    packaging: "Industrial-grade export bundles with protective inner lining",
    accent: "from-[#202325] via-[#656f76] to-[#d7dde2]",
    collectionSlug: "bedding-sets",
    imagePosition: "82% center",
    leadTime: "10-12 days for custom property branding samples",
    useCase: "Luxury hotels, serviced apartments, institutional supply",
    detailBullets: [
      "Mercerized finish for enhanced tensile strength and lasting luster",
      "Optimized for high-temperature industrial washing cycles",
      "Precision-aligned jacquard stripes for a consistent bed presentation",
    ],
    galleryPositions: ["82% center", "90% 48%", "62% 20%"],
  }),
  createProduct({
    slug: "monogram-border-percale-set",
    name: "Monogram Border Percale Set",
    tagline: "Tailored precision for signature bedroom capsules",
    summary:
      "This set introduces refined tonal embroidery along the borders, offering a customized look for boutique brands without overwhelming the minimalist aesthetic.",
    fabric: "Fine-combed Cotton Percale, 200TC-400TC",
    moq: "250 sets",
    customization: "Custom border width, tonal monogram placement",
    packaging: "Premium rigid drawer box with branded tissue wrap",
    accent: "from-[#413934] via-[#84776c] to-[#ddd3c7]",
    collectionSlug: "bedding-sets",
    imagePosition: "70% center",
    leadTime: "12 days for embroidery strike-off and approval",
    useCase: "Boutique labels, bridal registries, personalized gift programs",
    detailBullets: [
      "High-precision multi-head embroidery for consistent stitch tension",
      "Crisp percale weave providing a cool-to-the-touch sleep experience",
      "Tailored oxford borders with mitered corners for a sharp finish",
    ],
    galleryPositions: ["70% center", "80% 36%", "54% 16%"],
  }),
  createProduct({
    slug: "linen-blend-layered-collection",
    name: "Linen-Cotton Blend Layered Collection",
    tagline: "The natural drape of linen with the softness of cotton",
    summary:
      "Developed for Scandinavian-inspired interior brands, this blend provides the irregular texture of linen while maintaining the ease of care associated with cotton.",
    fabric: "55% Linen, 45% Cotton Yarn-dyed Blend",
    moq: "400 sets",
    customization: "Specialized garment washing, customized fringe/edge details",
    packaging: "Eco-friendly belly bands with biodegradable poly-bags",
    accent: "from-[#544a42] via-[#9b8e81] to-[#e7ddd3]",
    collectionSlug: "bedding-sets",
    imagePosition: "74% center",
    leadTime: "8-10 days for wash shade and hand-feel approval",
    useCase: "Natural home concepts, interior design studios, lifestyle retail",
    detailBullets: [
      "Yarn-dyed process for deep, multi-tonal color depth and wash fastness",
      "Breathable moisture-wicking properties ideal for all-season layering",
      "Pre-shrunk finish to ensure dimensional stability after retail purchase",
    ],
    galleryPositions: ["74% center", "88% 52%", "58% 22%"],
  }),
  createProduct({
    slug: "classic-button-duvet-cover",
    name: "Classic Button Duvet Cover",
    tagline: "A clean duvet cover built around drape and closure detail",
    summary:
      "This duvet cover program is designed for brands that need a reliable, elevated hero SKU with understated hardware and better fabric presence.",
    fabric: "Washed cotton, button placket finish",
    moq: "250 sets",
    customization: "Button color, labels, stitched detail",
    packaging: "Folded sleeve pack, insert card",
    accent: "from-[#4b433d] via-[#8f8073] to-[#dfd5cb]",
    collectionSlug: "duvet-covers",
    imagePosition: "80% center",
    leadTime: "7 days for closure and trim sample",
    useCase: "Bedroom refresh capsules, DTC bedding sets, export retail",
    detailBullets: [
      "Simple button placket styled for a quiet editorial finish",
      "Flexible enough for washed, sateen, or percale directions",
      "Merchandises well as part of coordinated bedding families",
    ],
    galleryPositions: ["80% center", "90% 42%", "62% 18%"],
  }),
  createProduct({
    slug: "hidden-zip-minimal-duvet-cover",
    name: "Hidden Zip Minimal Duvet Cover",
    tagline: "Sharper finish for modern bedroom branding",
    summary:
      "A minimal duvet cover style that removes visual interruption and lets the material finish and color story lead the product impression.",
    fabric: "Percale or sateen with hidden zip closure",
    moq: "220 sets",
    customization: "Zip finish, woven labels, inner tie adjustment",
    packaging: "Premium fold pack, export sleeve",
    accent: "from-[#2a2d31] via-[#737c84] to-[#dfe4e8]",
    collectionSlug: "duvet-covers",
    imagePosition: "86% center",
    leadTime: "10 days for functional sample approval",
    useCase: "Minimalist bedding labels, private hotel suites, export capsule",
    detailBullets: [
      "Concealed closure for a cleaner product silhouette",
      "Works especially well in monochrome or hotel-inspired palettes",
      "Helps premium buyers read fabric quality without distraction",
    ],
    galleryPositions: ["86% center", "92% 46%", "66% 18%"],
  }),
  createProduct({
    slug: "jacquard-stripe-duvet-cover",
    name: "Jacquard Stripe Duvet Cover",
    tagline: "Subtle woven stripe for hospitality and premium home use",
    summary:
      "A duvet cover with enough woven detail to feel rich, while still controlled enough for hotel supply or modern retail stories.",
    fabric: "Jacquard stripe sateen",
    moq: "200 sets",
    customization: "Stripe scale, labels, tonal embroidery",
    packaging: "Carton fold, brand insert, hotel bundle",
    accent: "from-[#303438] via-[#6a747d] to-[#d8dee3]",
    collectionSlug: "duvet-covers",
    imagePosition: "84% center",
    leadTime: "12 days for woven stripe confirmation",
    useCase: "Hospitality supply, signature sateen programs, reorder business",
    detailBullets: [
      "Textural stripe adds visual depth without heavy decoration",
      "Supports institutional color stories and commercial repeatability",
      "Can be matched with pillow shams and fitted sheet programs",
    ],
    galleryPositions: ["84% center", "89% 38%", "60% 16%"],
  }),
  createProduct({
    slug: "stonewashed-duvet-cover-set",
    name: "Stonewashed Duvet Cover Set",
    tagline: "Softened casual finish for premium relaxed interiors",
    summary:
      "A softer and more lifestyle-driven duvet program aimed at buyers who want warm, tactile bedding with a less formal mood.",
    fabric: "Stonewashed cotton blend",
    moq: "300 sets",
    customization: "Color wash, labels, edge finishing",
    packaging: "Soft bag, brand wrap, shelf fold",
    accent: "from-[#5a4e45] via-[#9e8e80] to-[#e8ddd2]",
    collectionSlug: "duvet-covers",
    imagePosition: "78% center",
    leadTime: "8-10 days for wash hand-feel approval",
    useCase: "Lifestyle interiors, soft-home bundles, calm bedroom edits",
    detailBullets: [
      "Washed effect creates a softer and more approachable premium mood",
      "Useful for brands wanting texture without ornate styling",
      "Pairs naturally with layered blankets and neutral pillow edits",
    ],
    galleryPositions: ["78% center", "86% 54%", "56% 20%"],
  }),
  createProduct({
    slug: "tonal-embroidered-pillowcase-set",
    name: "Tonal Embroidered Pillowcase Set",
    tagline: "Refined stitching for boutique bedroom accessories",
    summary:
      "A pillowcase pair designed to feel like a branded bedroom accessory, where embroidery and trim finish become the main value cues.",
    fabric: "Sateen with tonal embroidery",
    moq: "500 pairs",
    customization: "Monogram, border stitching, woven labels",
    packaging: "Envelope card, rigid gift box",
    accent: "from-[#363840] via-[#7e8590] to-[#dce0e6]",
    collectionSlug: "pillowcases",
    imagePosition: "82% center",
    leadTime: "7-9 days for embroidery strike-off",
    useCase: "Gift-ready accessories, boutique labels, premium add-on SKU",
    detailBullets: [
      "Embroidery adds identity without making the set overly formal",
      "High-margin accessory format suitable for bundles and gifting",
      "Can sit inside both bedding and gifting assortments",
    ],
    galleryPositions: ["82% center", "90% 36%", "66% 16%"],
  }),
  createProduct({
    slug: "oxford-border-pillowcase-pair",
    name: "Oxford Border Pillowcase Pair",
    tagline: "Classic framed edge with hotel-grade clarity",
    summary:
      "A structured pillowcase style that leans into proportion, edge framing, and a more tailored bedroom presentation.",
    fabric: "Percale or sateen oxford border",
    moq: "450 pairs",
    customization: "Border width, color piping, labels",
    packaging: "Flat fold card, premium poly sleeve",
    accent: "from-[#42454d] via-[#818893] to-[#dadfe5]",
    collectionSlug: "pillowcases",
    imagePosition: "78% center",
    leadTime: "9-11 days for border proportion approval",
    useCase: "Hotel-inspired bedding, classic bedroom programs, reorderable basics",
    detailBullets: [
      "Oxford frame gives the product a more tailored visual silhouette",
      "Suitable for both retail packs and hospitality bedding sets",
      "Easy to coordinate with duvet covers and sateen top-of-bed styles",
    ],
    galleryPositions: ["78% center", "86% 44%", "60% 18%"],
  }),
  createProduct({
    slug: "gift-box-monogram-pillowcase-set",
    name: "Gift Box Monogram Pillowcase Set",
    tagline: "Personalized pair designed for premium gifting",
    summary:
      "A monogram-led pillowcase program developed for gifting brands and capsule launches that need more identity and packaging value.",
    fabric: "Washed cotton sateen with monogram embroidery",
    moq: "300 gift sets",
    customization: "Initials, logo tag, insert card",
    packaging: "Rigid box, tissue wrap, gift insert",
    accent: "from-[#3d3a3a] via-[#8a7e7a] to-[#e0d5d0]",
    collectionSlug: "pillowcases",
    imagePosition: "74% center",
    leadTime: "12 days for monogram approval",
    useCase: "Holiday gifting, boutique stores, premium campaign launches",
    detailBullets: [
      "Monogram service turns a simple pair into a gifting product",
      "Packaging structure carries much of the perceived luxury",
      "Suitable for seasonal capsule edits and branded campaigns",
    ],
    galleryPositions: ["74% center", "84% 30%", "58% 16%"],
  }),
  createProduct({
    slug: "contrast-piped-pillowcase-set",
    name: "Contrast Piped Pillowcase Set",
    tagline: "Graphic edge detail for sharper merchandising",
    summary:
      "A more fashion-oriented pillowcase product that uses contrast piping and precise finishing to create stronger shelf impact.",
    fabric: "Percale with contrast piping",
    moq: "500 pairs",
    customization: "Piping color, logo label, pack format",
    packaging: "Retail stack, insert wrap, zip pouch",
    accent: "from-[#2f3338] via-[#69717a] to-[#d5dbe1]",
    collectionSlug: "pillowcases",
    imagePosition: "84% center",
    leadTime: "8-10 days for trim color confirmation",
    useCase: "Visual merchandising stories, bedding refresh collections, giftable add-on",
    detailBullets: [
      "Contrast edge helps the product read more quickly on shelf",
      "Works well in both monochrome and seasonal accent palettes",
      "Can be paired with duvet and blanket stories as an upsell item",
    ],
    galleryPositions: ["84% center", "92% 42%", "62% 20%"],
  }),
  createProduct({
    slug: "plush-hotel-blanket",
    name: "Plush Hotel Blanket",
    tagline: "Soft volume and warmth for layered top-of-bed styling",
    summary:
      "A blanket format designed to add warmth and premium volume without becoming visually heavy or discount-oriented.",
    fabric: "Microfiber plush with brushed finish",
    moq: "400 pcs",
    customization: "Size, edge fold, labels",
    packaging: "Ribbon wrap, folded shelf stack",
    accent: "from-[#4b423d] via-[#938377] to-[#ddd0c4]",
    collectionSlug: "blankets",
    imagePosition: "76% center",
    leadTime: "7-9 days for hand-feel approval",
    useCase: "Hotel suites, winter assortments, soft-home layering",
    detailBullets: [
      "Plush hand feel designed for immediate comfort perception",
      "Easy hero item for seasonal retail and winter hospitality programs",
      "Can be merchandised with bedding as a higher-value layered set",
    ],
    galleryPositions: ["76% center", "86% 48%", "60% 18%"],
  }),
  createProduct({
    slug: "brushed-cotton-throw-blanket",
    name: "Brushed Cotton Throw Blanket",
    tagline: "Lighter blanket format with a cleaner premium mood",
    summary:
      "A lighter-weight blanket option for brands that want softness and layering utility without a bulky, heavy visual impression.",
    fabric: "Brushed cotton blend",
    moq: "350 pcs",
    customization: "Fringe detail, color program, labels",
    packaging: "Band wrap, folded retail stack",
    accent: "from-[#5b514a] via-[#a19083] to-[#e8ddd1]",
    collectionSlug: "blankets",
    imagePosition: "72% center",
    leadTime: "8-10 days for brush hand-feel sample",
    useCase: "Retail throw programs, living room styling, gifting bundles",
    detailBullets: [
      "Lightweight format broadens use beyond bedroom-only merchandising",
      "Ideal for quiet luxury styling and soft-neutral assortments",
      "Can function as both decor piece and comfort layer",
    ],
    galleryPositions: ["72% center", "83% 52%", "56% 22%"],
  }),
  createProduct({
    slug: "thermal-finish-winter-blanket",
    name: "Thermal Finish Winter Blanket",
    tagline: "Seasonal blanket developed for colder market programs",
    summary:
      "A more functional blanket SKU with warmth retention and a polished presentation, suitable for colder climates and winter promotions.",
    fabric: "Thermal brushed microfiber",
    moq: "500 pcs",
    customization: "Weight spec, branding, edge seam",
    packaging: "Vacuum bag, insert sleeve, export carton",
    accent: "from-[#4d443d] via-[#8e7f70] to-[#dfd2c5]",
    collectionSlug: "blankets",
    imagePosition: "80% center",
    leadTime: "10-12 days for GSM and finish confirmation",
    useCase: "Cold-climate retail, Russia program, seasonal export shipments",
    detailBullets: [
      "Performance-led warmth supported by cleaner premium styling",
      "Suitable for winter promotions and large seasonal orders",
      "Can be packed efficiently for export-oriented volume programs",
    ],
    galleryPositions: ["80% center", "88% 46%", "62% 16%"],
  }),
  createProduct({
    slug: "boxed-gift-blanket-set",
    name: "Boxed Gift Blanket Set",
    tagline: "A softer gift program built around warmth and presentation",
    summary:
      "This blanket set uses packaging and texture together to create a more elevated gifting product for holiday or premium retail campaigns.",
    fabric: "Soft microfiber or cotton blend blanket",
    moq: "300 gift sets",
    customization: "Gift insert, ribbon, logo patch",
    packaging: "Rigid gift box, tissue wrap",
    accent: "from-[#584c45] via-[#a18f84] to-[#e7ddd4]",
    collectionSlug: "blankets",
    imagePosition: "74% center",
    leadTime: "12 days for gift pack confirmation",
    useCase: "Holiday gifting, premium department stores, campaign bundles",
    detailBullets: [
      "Presentation is designed to feel gift-worthy before product testing even begins",
      "Soft texture plus boxed format creates a higher perceived value",
      "Useful for boutique retail and premium seasonal events",
    ],
    galleryPositions: ["74% center", "84% 42%", "58% 18%"],
  }),
  createProduct({
    slug: "spa-terry-towel-set",
    name: "Spa Terry Towel Set",
    tagline: "Clean, absorbent towel program for resort and spa channels",
    summary:
      "A towel set built around absorbency, weight balance, and clean visual stacking for resort, spa, and premium home brands.",
    fabric: "Combed cotton, 500-650 GSM",
    moq: "500 pcs",
    customization: "Logo jacquard, border styling",
    packaging: "Band wrap, vacuum set, retail stack",
    accent: "from-[#4d433c] via-[#9b8878] to-[#eae1d6]",
    collectionSlug: "towels",
    imagePosition: "88% center",
    leadTime: "7-9 days for GSM confirmation",
    useCase: "Spa collections, premium bathroom packs, resort amenity programs",
    detailBullets: [
      "Core towel program balancing softness, absorbency, and visual neatness",
      "Designed for both hospitality folding and retail presentation",
      "Can scale into coordinated bath mat and robe add-ons",
    ],
    galleryPositions: ["88% center", "92% 58%", "68% 18%"],
  }),
  createProduct({
    slug: "jacquard-border-towel-program",
    name: "Jacquard Border Towel Program",
    tagline: "Logo-led towel story with a stronger branded edge",
    summary:
      "This towel program puts more emphasis on brand identity, using jacquard borders and clean edge styling to elevate the product story.",
    fabric: "Combed cotton jacquard border towel",
    moq: "600 pcs",
    customization: "Jacquard logo, border color, labels",
    packaging: "Band wrap, folded hospitality stack",
    accent: "from-[#584c43] via-[#a19082] to-[#ece3d7]",
    collectionSlug: "towels",
    imagePosition: "84% center",
    leadTime: "10 days for jacquard artwork approval",
    useCase: "Branded towel programs, hotel groups, premium bath assortments",
    detailBullets: [
      "Border treatment helps the towel read more premium at first glance",
      "Better suited for clients that need visible brand identity",
      "Can be deployed across face, hand, and bath towel sets",
    ],
    galleryPositions: ["84% center", "90% 40%", "62% 16%"],
  }),
  createProduct({
    slug: "waffle-spa-towel-set",
    name: "Waffle Spa Towel Set",
    tagline: "Texture-driven towel option for boutique wellness brands",
    summary:
      "A waffle-texture towel line that introduces more surface interest while keeping a refined spa and wellness presentation.",
    fabric: "Cotton waffle weave",
    moq: "400 pcs",
    customization: "Label tag, colorway, hanging loop",
    packaging: "Folded wrap, soft brand sleeve",
    accent: "from-[#5c5147] via-[#ac9888] to-[#efe4d8]",
    collectionSlug: "towels",
    imagePosition: "82% center",
    leadTime: "9-11 days for weave and shrinkage review",
    useCase: "Wellness brands, spa boutiques, lifestyle bath edits",
    detailBullets: [
      "Waffle texture shifts the collection toward boutique spa positioning",
      "Lighter visual weight makes it feel more editorial and lifestyle-led",
      "Useful for bath sets that need more texture variation",
    ],
    galleryPositions: ["82% center", "88% 54%", "64% 20%"],
  }),
  createProduct({
    slug: "hotel-essential-towel-pack",
    name: "Hotel Essential Towel Pack",
    tagline: "Operational towel pack built for repeat hospitality orders",
    summary:
      "A dependable hospitality towel line that prioritizes consistency, stackability, and export-ready repeat ordering.",
    fabric: "Absorbent cotton terry, institutional finish",
    moq: "800 pcs",
    customization: "Size spec, woven labels, outer marks",
    packaging: "Hospitality fold pack, export carton",
    accent: "from-[#5a4f48] via-[#998b7f] to-[#e8ddd2]",
    collectionSlug: "towels",
    imagePosition: "90% center",
    leadTime: "7 days for repeat specification sample",
    useCase: "Hotel chains, apartment supply, large reorder business",
    detailBullets: [
      "Built to support operational repeat orders rather than one-off gifting",
      "Clear spec logic helps large buyers reorder with less friction",
      "Presentation remains clean enough for premium hospitality accounts",
    ],
    galleryPositions: ["90% center", "94% 50%", "70% 16%"],
  }),
  createProduct({
    slug: "linen-look-blackout-curtain",
    name: "Linen-Look Blackout Curtain",
    tagline: "Architectural drape with blackout performance",
    summary:
      "A curtain option developed for interiors buyers who need the softness of linen styling with practical blackout performance.",
    fabric: "Linen-look blackout weave",
    moq: "300 sets",
    customization: "Header style, lining, width spec",
    packaging: "Folded panel pack, export carton",
    accent: "from-[#282828] via-[#6e6e6e] to-[#dadada]",
    collectionSlug: "curtains",
    imagePosition: "76% center",
    leadTime: "10-12 days for drape and lining approval",
    useCase: "Interior projects, hospitality rooms, premium home curtains",
    detailBullets: [
      "Combines softer natural styling with a stronger functional brief",
      "Designed for buyers who care about room atmosphere and performance",
      "Header customization supports multiple installation systems",
    ],
    galleryPositions: ["76% center", "84% 44%", "56% 18%"],
  }),
  createProduct({
    slug: "embroidered-sheer-curtain-panel",
    name: "Embroidered Sheer Curtain Panel",
    tagline: "Light-filtering panel with refined stitched detail",
    summary:
      "A sheer curtain format that softens interiors while adding a premium embroidered finish for decorative value.",
    fabric: "Sheer base with embroidery motif",
    moq: "400 panels",
    customization: "Embroidery pattern, width, top finish",
    packaging: "Panel fold, brand sleeve",
    accent: "from-[#36393f] via-[#828892] to-[#dde1e6]",
    collectionSlug: "curtains",
    imagePosition: "82% center",
    leadTime: "12 days for pattern and embroidery review",
    useCase: "Layered interiors, boutique hotels, decorative window capsules",
    detailBullets: [
      "Embroidery detail adds value without overwhelming the space",
      "Well suited to layered drapery systems and boutique interiors",
      "Can sit beside blackout panels inside a broader curtain program",
    ],
    galleryPositions: ["82% center", "90% 30%", "62% 18%"],
  }),
  createProduct({
    slug: "soft-wave-hospitality-curtain",
    name: "Soft Wave Hospitality Curtain",
    tagline: "Neater panel line for contract and hotel use",
    summary:
      "A hospitality-focused curtain program developed around consistent folds, easier installation logic, and a more disciplined room appearance.",
    fabric: "Contract drapery base with soft wave header",
    moq: "250 sets",
    customization: "Wave spacing, blackout lining, labels",
    packaging: "Project fold pack, export carton",
    accent: "from-[#24282b] via-[#6d7478] to-[#d9dfe2]",
    collectionSlug: "curtains",
    imagePosition: "88% center",
    leadTime: "10 days for header sample and drape approval",
    useCase: "Hotels, apartments, contract interiors",
    detailBullets: [
      "Wave structure gives rooms a more organized and upscale look",
      "Contract-friendly configuration helps repeat projects stay consistent",
      "Can be packed and labeled for project-based delivery sequences",
    ],
    galleryPositions: ["88% center", "94% 46%", "66% 16%"],
  }),
  createProduct({
    slug: "textured-neutral-curtain-set",
    name: "Textured Neutral Curtain Set",
    tagline: "A calmer decorative curtain for modern interior brands",
    summary:
      "A neutral curtain set that emphasizes texture and natural room tone rather than overt decorative effect, suited to softer design-led assortments.",
    fabric: "Textured neutral weave",
    moq: "320 sets",
    customization: "Color matching, size, finishing",
    packaging: "Retail fold set, insert card",
    accent: "from-[#35312e] via-[#857a73] to-[#e4d8cd]",
    collectionSlug: "curtains",
    imagePosition: "72% center",
    leadTime: "8-10 days for colorway and texture review",
    useCase: "Interior studios, natural home collections, design-led retail",
    detailBullets: [
      "Texture drives the premium story more than heavy pattern",
      "Useful for softer interior merchandising and natural palettes",
      "Sits comfortably in high-trust design and furnishing presentations",
    ],
    galleryPositions: ["72% center", "84% 52%", "58% 22%"],
  }),
  createProduct({
    slug: "hotel-stripe-sheeting-program",
    name: "Hotel Stripe Sheeting Program",
    tagline: "Core hospitality bedding with clean institutional logic",
    summary:
      "A coordinated bedding program for hotels that need durable woven structure, clear specifications, and presentation discipline.",
    fabric: "Stripe sateen sheeting",
    moq: "300 sets",
    customization: "Size matrix, woven labels, embroidery",
    packaging: "Export carton, hospitality fold set",
    accent: "from-[#443931] via-[#8b7c6f] to-[#dfd3c7]",
    collectionSlug: "hotel-collection",
    imagePosition: "86% center",
    leadTime: "10 days for institutional sample set",
    useCase: "Hotels, serviced apartments, procurement reorders",
    detailBullets: [
      "Built for commercial consistency and cleaner reorder logic",
      "Hospitality presentation remains premium rather than purely utilitarian",
      "Coordinates with towel and pillow programs inside one account",
    ],
    galleryPositions: ["86% center", "90% 40%", "64% 16%"],
  }),
  createProduct({
    slug: "institutional-towel-bath-pack",
    name: "Institutional Towel Bath Pack",
    tagline: "Operational towel solution with premium finish discipline",
    summary:
      "A hotel towel package designed for bath programs where absorbency, folding logic, and repeat supply matter more than decorative trend turnover.",
    fabric: "Commercial cotton terry",
    moq: "800 pcs",
    customization: "Labeling, size sets, outer mark system",
    packaging: "Hospitality fold pack, export master carton",
    accent: "from-[#4f4338] via-[#998a7c] to-[#e5dacc]",
    collectionSlug: "hotel-collection",
    imagePosition: "90% center",
    leadTime: "7-8 days for bulk spec confirmation",
    useCase: "Hospitality supply, procurement contracts, repeat bath orders",
    detailBullets: [
      "Clean repeat-order logic for hospitality procurement cycles",
      "Maintains visual neatness while staying operationally efficient",
      "Can be aligned with full room textile packages",
    ],
    galleryPositions: ["90% center", "94% 54%", "68% 20%"],
  }),
  createProduct({
    slug: "serviced-apartment-bedding-pack",
    name: "Serviced Apartment Bedding Pack",
    tagline: "Residential hospitality bedding with softer visual appeal",
    summary:
      "A bedding pack that sits between institutional hotel standards and the warmer styling expected in serviced apartments and long-stay spaces.",
    fabric: "Soft commercial cotton sateen blend",
    moq: "250 sets",
    customization: "Room set sizing, woven labels, sheet labels",
    packaging: "Room-ready fold pack, export carton",
    accent: "from-[#56483d] via-[#9b8a7c] to-[#e7dbcf]",
    collectionSlug: "hotel-collection",
    imagePosition: "80% center",
    leadTime: "9-11 days for room-set approval",
    useCase: "Serviced apartments, long-stay rooms, premium guest spaces",
    detailBullets: [
      "Feels softer and more residential than strict hotel bedding",
      "Useful where guest experience matters as much as operational control",
      "Extends the hotel collection into mixed hospitality environments",
    ],
    galleryPositions: ["80% center", "88% 36%", "60% 18%"],
  }),
  createProduct({
    slug: "hospitality-room-textile-bundle",
    name: "Hospitality Room Textile Bundle",
    tagline: "Coordinated room bundle for buyers who source by program",
    summary:
      "A bundled textile format that combines bedding and bath logic into a coordinated supply story for hospitality buyers.",
    fabric: "Mixed hospitality textile program",
    moq: "200 room sets",
    customization: "Room spec, labeling, bundle structure",
    packaging: "Program carton, room-set labeling",
    accent: "from-[#4a3f36] via-[#8e8075] to-[#dfd5ca]",
    collectionSlug: "hotel-collection",
    imagePosition: "84% center",
    leadTime: "12 days for bundle and labeling confirmation",
    useCase: "Project tenders, hotel openings, managed room programs",
    detailBullets: [
      "Designed for buyers who purchase by room instead of by single SKU",
      "Improves clarity around specification, packing, and site delivery",
      "Supports long-term procurement relationships and repeat expansion",
    ],
    galleryPositions: ["84% center", "90% 48%", "64% 18%"],
  }),
  createProduct({
    slug: "storybook-kids-bedding-set",
    name: "Storybook Kids Bedding Set",
    tagline: "Playful print direction kept inside a refined palette",
    summary:
      "A printed kids bedding set that stays premium through softer coloring, safer materials, and cleaner packaging presentation.",
    fabric: "Soft cotton print base",
    moq: "300 sets",
    customization: "Print artwork, labels, insert cards",
    packaging: "Gift box, illustrated wrap, retail sleeve",
    accent: "from-[#7b6658] via-[#c4ae99] to-[#f2e6d7]",
    collectionSlug: "kids-collection",
    imagePosition: "78% center",
    leadTime: "10-12 days for print strike-off",
    useCase: "Kids gifting, family retail, private-label collections",
    detailBullets: [
      "Keeps playfulness while avoiding noisy low-cost visual cues",
      "Designed for safer materials and more trust-building presentation",
      "Can be extended into accessories, blankets, and room bundles",
    ],
    galleryPositions: ["78% center", "88% 34%", "58% 18%"],
  }),
  createProduct({
    slug: "nursery-soft-touch-blanket",
    name: "Nursery Soft-Touch Blanket",
    tagline: "Gentle warmth and quieter styling for baby categories",
    summary:
      "A nursery blanket SKU positioned for premium baby and toddler programs that need softness, safety, and a more careful visual tone.",
    fabric: "Soft brushed cotton blend",
    moq: "400 pcs",
    customization: "Size, patch, gift label",
    packaging: "Soft band, gift card, poly bag",
    accent: "from-[#8a7364] via-[#c7b29d] to-[#f3e8d9]",
    collectionSlug: "kids-collection",
    imagePosition: "74% center",
    leadTime: "8-10 days for hand-feel sample",
    useCase: "Baby gifting, nursery accessories, premium parenting retail",
    detailBullets: [
      "Developed to feel safer, softer, and more trusted than mass baby blankets",
      "Presentation remains calm and editorial rather than overly cartooned",
      "Pairs naturally with nursery bedding and gift collections",
    ],
    galleryPositions: ["74% center", "86% 48%", "60% 22%"],
  }),
  createProduct({
    slug: "character-print-pillowcase-pair",
    name: "Character Print Pillowcase Pair",
    tagline: "Compact kids accessory with giftable packaging potential",
    summary:
      "A smaller product format for kids collections that allows brands to test prints, characters, and gift positioning with lower entry risk.",
    fabric: "Printed cotton pillowcase pair",
    moq: "500 pairs",
    customization: "Artwork, labels, packaging inserts",
    packaging: "Flat card, mini gift sleeve",
    accent: "from-[#7b6559] via-[#c8b39e] to-[#f4e7d8]",
    collectionSlug: "kids-collection",
    imagePosition: "82% center",
    leadTime: "7-9 days for print and shade approval",
    useCase: "Accessory gifting, children's room bundles, low-risk launch SKU",
    detailBullets: [
      "Good entry-level kids SKU for testing print directions",
      "Compact pack format works well for retail and gift stores",
      "Can support broader bedding programs without large upfront complexity",
    ],
    galleryPositions: ["82% center", "90% 42%", "62% 20%"],
  }),
  createProduct({
    slug: "gift-box-kids-bedroom-set",
    name: "Gift Box Kids Bedroom Set",
    tagline: "Full kids giftable set with safer and softer brand cues",
    summary:
      "A boxed kids bedroom set created for buyers who want a ready-to-sell product with more presentation value and cleaner premium positioning.",
    fabric: "Mixed cotton kids bedding program",
    moq: "250 gift sets",
    customization: "Box graphics, artwork, labels",
    packaging: "Rigid box, tissue, printed insert",
    accent: "from-[#836d5d] via-[#cbb49f] to-[#f4eadb]",
    collectionSlug: "kids-collection",
    imagePosition: "76% center",
    leadTime: "12-14 days for box and artwork approval",
    useCase: "Holiday gifting, children's boutiques, premium parenting campaign",
    detailBullets: [
      "Packaging-led product story creates stronger shelf differentiation",
      "Keeps the kids category premium instead of promotional",
      "Useful for campaign launches and curated gifting edits",
    ],
    galleryPositions: ["76% center", "88% 54%", "60% 18%"],
  }),
  createProduct({
    slug: "monogram-bed-linen-set",
    name: "Monogram Bed Linen Set",
    tagline: "Brand identity translated into stitched bedroom detail",
    summary:
      "A bed linen program where monograms and stitched branding become the premium differentiator without losing a calm luxury tone.",
    fabric: "Sateen or washed cotton with monogram embroidery",
    moq: "200 sets",
    customization: "Monogram, thread tone, label suite",
    packaging: "Fold set, premium insert, rigid lid box",
    accent: "from-[#2e2a29] via-[#776c66] to-[#d5c8bc]",
    collectionSlug: "embroidery-collection",
    imagePosition: "82% center",
    leadTime: "12 days for embroidery and color approval",
    useCase: "Boutique labels, wedding gifting, signature bedroom lines",
    detailBullets: [
      "Embroidery is positioned as identity, not decoration overload",
      "Good for brands that want recognizable stitched signatures",
      "Packaging reinforces a more luxurious perceived value",
    ],
    galleryPositions: ["82% center", "90% 30%", "60% 16%"],
  }),
  createProduct({
    slug: "embroidered-pillow-sham-program",
    name: "Embroidered Pillow Sham Program",
    tagline: "Detailed bedroom accent for elevated bed styling",
    summary:
      "A pillow sham program that adds craft and layering value to premium bedding stories through stitch detail and framing finish.",
    fabric: "Cotton sateen sham with embroidery border",
    moq: "400 pcs",
    customization: "Pattern scale, monogram, labels",
    packaging: "Flat fold, protective sleeve, brand wrap",
    accent: "from-[#332f2d] via-[#7f736c] to-[#d8ccc1]",
    collectionSlug: "embroidery-collection",
    imagePosition: "78% center",
    leadTime: "10 days for embroidery strike-off",
    useCase: "Layered bedding stories, premium pillow accessories, boutique retail",
    detailBullets: [
      "Supports a more layered luxury bedroom presentation",
      "Embroidery detail is visible enough for merchandising without feeling busy",
      "Easy add-on piece to raise average order value",
    ],
    galleryPositions: ["78% center", "86% 44%", "58% 18%"],
  }),
  createProduct({
    slug: "tone-on-tone-embroidered-sheet-set",
    name: "Tone-on-Tone Embroidered Sheet Set",
    tagline: "Quiet embroidery for more restrained premium styling",
    summary:
      "A subtle embroidered sheet program for buyers who want the sophistication of stitched detail but not the visual noise of contrast decoration.",
    fabric: "Percale with tone-on-tone embroidery",
    moq: "250 sets",
    customization: "Thread tone, line placement, woven labels",
    packaging: "Folded set, insert board, retail sleeve",
    accent: "from-[#272727] via-[#736b64] to-[#d0c3b5]",
    collectionSlug: "embroidery-collection",
    imagePosition: "84% center",
    leadTime: "11-13 days for stitch approval",
    useCase: "Quiet luxury bedding, boutique bedroom edits, signature premium basics",
    detailBullets: [
      "Embroidery reads through texture and light rather than strong contrast",
      "Good fit for buyers referencing quiet luxury positioning",
      "Supports repeat programs without going out of style quickly",
    ],
    galleryPositions: ["84% center", "92% 38%", "64% 16%"],
  }),
  createProduct({
    slug: "gift-embroidery-home-set",
    name: "Gift Embroidery Home Set",
    tagline: "A presentation-led embroidered textile gift program",
    summary:
      "A gift-oriented embroidery product created for premium campaigns that want craft detail, packaging value, and clearer brand storytelling.",
    fabric: "Embroidered mixed home textile set",
    moq: "180 gift sets",
    customization: "Embroidery artwork, box details, labels",
    packaging: "Rigid gift box, tissue wrap, insert card",
    accent: "from-[#3a3330] via-[#84786f] to-[#ddd2c7]",
    collectionSlug: "embroidery-collection",
    imagePosition: "76% center",
    leadTime: "14 days for embroidery and pack-out approval",
    useCase: "Holiday gifting, boutique store exclusives, brand campaigns",
    detailBullets: [
      "Combines embroidery and packaging into a single value proposition",
      "Best suited to limited editions and gifting-led launches",
      "Helps embroidery collections move beyond bedding-only applications",
    ],
    galleryPositions: ["76% center", "88% 52%", "60% 20%"],
  }),
];

export const featuredProducts: ProductItem[] = [
  products[0],
  products[4],
  products[8],
  products[12],
  products[16],
  products[20],
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
    title: "End-to-End OEM & ODM Solutions for Global Brands",
    description:
      "We turn design concepts into premium textile collections with a structured workflow that ensures material integrity, brand consistency, and export readiness.",
    highlights: [
      "Custom fabric development (TC, Cotton, Bamboo, Microfiber) and GSM weighting",
      "Comprehensive branding: Embroidery, jacquard, woven labels, and specialized packaging",
      "Professional sampling workflow with fast-track prototyping for seasonal launches",
    ],
    ctaLabel: "Start Custom Project",
    heroAccent: "from-[#27211c] via-[#8f7865] to-[#eee3d7]",
  },
  factory: {
    eyebrow: "Manufacturing",
    title: "Advanced Manufacturing Facility for Premium Textiles",
    description:
      "Our 3,000 sqm integrated facility is organized around quality-first execution, featuring modern machinery and a skilled workforce dedicated to high-standard B2B production.",
    highlights: [
      "Modern sewing lines and automatic cutting systems for precision and scale",
      "In-house quality lab for fabric durability, colorfastness, and safety testing",
      "Scalable capacity supporting both low-MOQ startups and high-volume distributors",
    ],
    ctaLabel: "Talk to Our Factory Team",
    heroAccent: "from-[#202020] via-[#59514c] to-[#d8cbc0]",
  },
  "factory-plog": {
    eyebrow: "Factory Plog",
    title: "A more visual factory journal that lets buyers feel the daily rhythm behind production",
    description: "Instead of abstract capability claims, this page walks through the workshop atmosphere, production checkpoints, packaging discipline, and the real pace of factory operations.",
    highlights: [
      "Daily factory scenes presented like a visual sourcing journal",
      "Process moments that help buyers understand how orders move in reality",
      "Certification and scale context woven into the story rather than isolated claims",
    ],
    ctaLabel: "Request Factory Details",
    heroAccent: "from-[#1f1a17] via-[#786555] to-[#e6d9cc]",
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
  "company-profile": {
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

export const factoryPlogMoments: FactoryPlogMoment[] = [
  {
    title: "Morning Line Check",
    description: "The day begins with fabric rolls, trim confirmation, and sewing-line preparation before the first batch moves forward.",
    accent: "from-[#231f1c] via-[#6f6358] to-[#d8ccc1]",
  },
  {
    title: "Cutting & Sewing Rhythm",
    description: "Teams move from cutting tables to sewing stations with a steady sequence designed to keep output clean and consistent.",
    accent: "from-[#2d2c2b] via-[#7e756d] to-[#e4d9cf]",
  },
  {
    title: "Inline Quality Review",
    description: "Measurements, stitching tension, fabric hand feel, and branding details are checked before products continue downstream.",
    accent: "from-[#22272b] via-[#66717b] to-[#d8dfe4]",
  },
  {
    title: "Packing & Export Prep",
    description: "Finished goods are folded, packed, labeled, and staged for export so presentation stays aligned with buyer expectations.",
    accent: "from-[#3a312c] via-[#8f7d72] to-[#eadfd6]",
  },
];

export const factoryPlogTimeline: FactoryPlogTimelineItem[] = [
  {
    time: "08:30",
    title: "Production briefing",
    description: "Teams confirm today’s order priorities, approved sample references, and packaging notes before work begins.",
  },
  {
    time: "10:00",
    title: "Workshop in motion",
    description: "Fabric cutting, sewing, embroidery, and piece matching move in parallel as supervisors check workmanship on the line.",
  },
  {
    time: "13:30",
    title: "Inspection checkpoint",
    description: "Semi-finished goods are reviewed for size tolerance, seam quality, color consistency, and buyer-specific details.",
  },
  {
    time: "16:00",
    title: "Packing discipline",
    description: "Products shift into final folding, insert placement, carton marking, and export preparation for shipment schedules.",
  },
];
