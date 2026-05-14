export type JournalStatus = "draft" | "published";

export type JournalStoryBlock = {
  heading: string;
  body: string;
};

export type JournalTimelineStep = {
  phase: string;
  description: string;
};

export type JournalGalleryItem = {
  title: string;
  caption: string;
  accent: string;
  imageUrl?: string;
};

export type JournalMetric = {
  label: string;
  value: string;
  note: string;
};

export type JournalShipmentSection = {
  title: string;
  description: string;
  checklist: string[];
};

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverLabel: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  pinned: boolean;
  status: JournalStatus;
  coverAccent: string;
  coverImageUrl?: string;
  heroSummary: string;
  overview: string;
  storyBlocks: JournalStoryBlock[];
  productionTimeline: JournalTimelineStep[];
  gallery: JournalGalleryItem[];
  shipment: JournalShipmentSection;
  metrics: JournalMetric[];
  videoUrl?: string;
};

export const manufacturingJournalPosts: JournalPost[] = [
  {
    slug: "hotel-sateen-program-launch",
    title: "Hotel Sateen Program Launch for a Middle East Hospitality Group",
    excerpt:
      "A cinematic look at how a premium hotel bedding order moves from sample approval to export-ready packing inside the factory.",
    coverLabel: "Pinned Project",
    publishedAt: "2026-01-12",
    readTime: "8 min read",
    tags: ["Hotel Program", "Shipment", "QC"],
    pinned: true,
    status: "published",
    coverAccent: "from-[#0f1215] via-[#404a55] to-[#dce2e8]",
    heroSummary:
      "This featured project follows a hospitality bedding program from sampling and line setup to final export packing, showing the discipline behind a large-volume hotel delivery.",
    overview:
      "The order required a consistent sateen hand feel, embroidery placement control, and strict carton labeling for a regional hotel rollout. We shaped this story like an editorial manufacturing case study so buyers can feel the production rhythm rather than only reading capability claims.",
    storyBlocks: [
      {
        heading: "From sample room to production floor",
        body: "The project started with approved hand feel, stripe alignment, and embroidery references. Once buyer comments were locked, the workshop moved into a structured launch sequence with clear sample references at each station.",
      },
      {
        heading: "Consistency became the real story",
        body: "Instead of presenting the factory as a generic supplier, this journal entry shows how stitching, fabric finish, logo details, and packing rules are coordinated as one continuous production language.",
      },
    ],
    productionTimeline: [
      {
        phase: "Sampling approval",
        description:
          "Final sample confirmation covered stripe direction, embroidery placement, and hospitality fold specification.",
      },
      {
        phase: "Line preparation",
        description:
          "Supervisors aligned cutting markers, trim sets, and QC references before large-batch sewing started.",
      },
      {
        phase: "Inline inspection",
        description:
          "Measurements, seam quality, and fabric finish were checked at multiple checkpoints before packing.",
      },
      {
        phase: "Export packing",
        description:
          "Cartons, labels, and shipment marks were staged against the hotel buyer packing list and route plan.",
      },
    ],
    gallery: [
      {
        title: "Fabric arrival and review",
        caption:
          "The first visual layer of the story focuses on incoming fabric readiness and sample reference alignment.",
        accent: "from-[#202224] via-[#5b6672] to-[#d3dbe3]",
      },
      {
        title: "Sewing line atmosphere",
        caption:
          "The production line is shown as calm, controlled, and quality-oriented rather than overly industrial or chaotic.",
        accent: "from-[#1e1a17] via-[#746457] to-[#e4d7cb]",
      },
      {
        title: "Carton staging",
        caption:
          "Packaging visuals communicate export discipline and help buyers imagine the final handoff more clearly.",
        accent: "from-[#26211d] via-[#8b7769] to-[#ece1d8]",
      },
    ],
    shipment: {
      title: "Shipment discipline",
      description:
        "The last stage focused on consistent folding, carton coding, shipment marks, and loading sequence to match the buyer's receiving plan.",
      checklist: [
        "Buyer packing list cross-check",
        "Embroidery and label confirmation before sealing cartons",
        "Export marks prepared for hotel receiving teams",
      ],
    },
    metrics: [
      { label: "Program Type", value: "Hospitality", note: "Premium hotel bedding launch" },
      { label: "Lead Flow", value: "7 Days", note: "Sampling response window" },
      { label: "QC Focus", value: "3 Levels", note: "Inline, pre-pack, final review" },
      { label: "Shipment Mode", value: "Export Cartons", note: "Hospitality fold set packing" },
    ],
    videoUrl: "/video(4).mp4",
  },
  {
    slug: "washed-cotton-editorial-bedding",
    title: "Washed Cotton Editorial Bedding Collection for DTC Brand Launch",
    excerpt:
      "A softer, design-led plog entry showing color approval, tactile fabric review, and packaging styling for a direct-to-consumer launch.",
    coverLabel: "Factory Journal",
    publishedAt: "2025-12-02",
    readTime: "6 min read",
    tags: ["Sampling", "Bedding", "Packaging"],
    pinned: false,
    status: "published",
    coverAccent: "from-[#1d1a18] via-[#7f6f64] to-[#e7ddd3]",
    heroSummary:
      "This story follows a washed cotton bedding program built around texture, tone matching, and an elevated unboxing presentation for a premium DTC brand.",
    overview:
      "Unlike hotel-focused projects, this program balanced tactile softness with visual merchandising details. The page highlights how material approval and packaging styling become part of the same editorial story.",
    storyBlocks: [
      {
        heading: "Softness had to survive scale",
        body: "The buyer wanted washed cotton that looked relaxed but still felt premium after bulk production. Sample handling and dye tone review were treated as part of the storytelling, not hidden technical steps.",
      },
      {
        heading: "Packaging became part of the product",
        body: "Insert cards, fold structure, and label placement were documented visually to show how the finished program would feel in a brand customer's hands.",
      },
    ],
    productionTimeline: [
      { phase: "Color review", description: "Pantone and washed finish tones were aligned with the buyer moodboard." },
      { phase: "Sample iteration", description: "Construction details and hand feel were tuned through multiple sampling rounds." },
      { phase: "Bulk readiness", description: "Fabric behavior and packaging method were locked for repeatable production." },
      { phase: "Launch packing", description: "Retail-ready sets were folded, inserted, and boxed for launch inventory." },
    ],
    gallery: [
      {
        title: "Material story",
        caption: "The plog uses minimal imagery blocks to suggest tactile softness and premium textile character.",
        accent: "from-[#4a4039] via-[#9a8678] to-[#efe3d7]",
      },
      {
        title: "Brand-ready packaging",
        caption: "Packaging visuals shift the story from factory process into customer-facing experience.",
        accent: "from-[#26272a] via-[#7c838b] to-[#dde2e8]",
      },
    ],
    shipment: {
      title: "Retail shipment",
      description: "Shipments were grouped by SKU and colorway to support staged brand launch inventory and easier receiving.",
      checklist: [
        "SKU packing sequence confirmation",
        "Insert card and branding check",
        "Carton outer mark review",
      ],
    },
    metrics: [
      { label: "Collection Mode", value: "DTC Launch", note: "Editorial bedding assortment" },
      { label: "Material Focus", value: "Washed Cotton", note: "Soft-touch finish alignment" },
      { label: "Packaging", value: "Gift Set", note: "Brand-led presentation" },
      { label: "Reorder Path", value: "Prepared", note: "Bulk spec saved for repeat production" },
    ],
  },
  {
    slug: "spa-towel-jacquard-line",
    title: "Spa Towel Jacquard Line With Logo Border Review",
    excerpt:
      "A process-led entry centered on absorbency, jacquard border consistency, and folding discipline for spa towel export programs.",
    coverLabel: "Factory Journal",
    publishedAt: "2025-11-11",
    readTime: "5 min read",
    tags: ["Towels", "QC", "Shipment"],
    pinned: false,
    status: "published",
    coverAccent: "from-[#171a1e] via-[#59646f] to-[#d8e1e8]",
    heroSummary:
      "This post documents how a towel program is checked for absorbency feel, border detail, and folding consistency before export preparation.",
    overview:
      "The journal format helps towel buyers understand that quality is not just GSM or logo placement. Handling, edge finish, and packing uniformity also shape the final impression.",
    storyBlocks: [
      {
        heading: "Jacquard needed visual discipline",
        body: "Border alignment and logo repeat had to stay visually clean across the batch, so the plog highlights the QC moments where details are checked in context.",
      },
    ],
    productionTimeline: [
      { phase: "Border approval", description: "Jacquard pattern and logo readability were reviewed before bulk weaving approval." },
      { phase: "Finishing", description: "Touch, absorbency character, and edge finish moved through factory checkpoints." },
      { phase: "Folding routine", description: "Teams aligned presentation rules to keep retail and spa receiving consistent." },
      { phase: "Container prep", description: "Cartons were staged with export marks and loading logic for dispatch." },
    ],
    gallery: [
      {
        title: "Border review",
        caption: "Visual quality checks on jacquard patterns help buyers understand what consistency means in production.",
        accent: "from-[#2b2a28] via-[#8a8077] to-[#e8ddd4]",
      },
      {
        title: "Packing routine",
        caption: "Uniform folding and stacking visually reinforce export readiness.",
        accent: "from-[#24272c] via-[#69717a] to-[#e0e6eb]",
      },
    ],
    shipment: {
      title: "Spa order dispatch",
      description: "Shipment notes focused on carton balance, border protection, and receiving convenience.",
      checklist: [
        "Fold direction consistency check",
        "Outer carton count validation",
        "Export label placement",
      ],
    },
    metrics: [
      { label: "Program Type", value: "Spa Towels", note: "Jacquard border program" },
      { label: "Inspection Theme", value: "Visual Consistency", note: "Logo and border repeat checks" },
      { label: "Packing Mode", value: "Stacked Cartons", note: "Ready for export receiving" },
      { label: "Buyer Use Case", value: "Hospitality", note: "Spa and resort sourcing" },
    ],
  },
  {
    slug: "embroidery-monogram-capsule",
    title: "Embroidery Monogram Capsule From Approval to Packout",
    excerpt:
      "A journal entry built around embroidery craftsmanship, thread tone approval, and premium presentation.",
    coverLabel: "Factory Journal",
    publishedAt: "2025-10-20",
    readTime: "6 min read",
    tags: ["Embroidery", "Bedding", "Sampling"],
    pinned: false,
    status: "published",
    coverAccent: "from-[#1e1b1a] via-[#6e6058] to-[#dbcdc2]",
    heroSummary:
      "This story is designed for buyers who care about premium embroidery detail, showing how monogram execution travels from test sample to finished packing.",
    overview:
      "Embroidery-focused programs need more than technical accuracy. They also need visual restraint and luxury presentation, so the layout mixes dark editorial panels with clean white content blocks.",
    storyBlocks: [
      {
        heading: "Thread tone matters more than expected",
        body: "Even when embroidery placement is technically correct, thread sheen and tonal contrast can change the entire luxury impression of a product.",
      },
    ],
    productionTimeline: [
      { phase: "Embroidery tests", description: "Thread density, position, and monogram tone were validated against buyer references." },
      { phase: "Line execution", description: "Approved embroidery specs moved into controlled batch execution." },
      { phase: "Final check", description: "Visual review focused on luxury impression, not just technical pass/fail." },
      { phase: "Presentation packing", description: "Fold and insert rules preserved the premium reveal experience." },
    ],
    gallery: [
      {
        title: "Embroidery close-up",
        caption: "The gallery suggests product intimacy and helps buyers imagine brand detail more clearly.",
        accent: "from-[#181818] via-[#5f5b56] to-[#d9d1c8]",
      },
      {
        title: "Luxury fold set",
        caption: "Presentation design is treated as part of the manufacturing story rather than a separate marketing layer.",
        accent: "from-[#2f2b28] via-[#8e7f74] to-[#efe2d8]",
      },
    ],
    shipment: {
      title: "Premium set shipping",
      description: "Final packing protected embroidery presentation while keeping export efficiency.",
      checklist: [
        "Embroidery surface protection",
        "Luxury fold review before boxing",
        "Brand insert consistency",
      ],
    },
    metrics: [
      { label: "Program Focus", value: "Monogram Detail", note: "Luxury embroidery execution" },
      { label: "Approval Flow", value: "Sample-led", note: "Thread tone and placement first" },
      { label: "Packing Style", value: "Premium Fold", note: "Presentation-conscious export" },
      { label: "Buyer Segment", value: "Boutique Brand", note: "Retail and gifting use case" },
    ],
  },
  {
    slug: "curtain-blackout-run",
    title: "Blackout Curtain Run for Interior Design and Hospitality Buyers",
    excerpt:
      "An operations-led narrative showing how larger-format textile programs are coordinated from inspection through final loading.",
    coverLabel: "Factory Journal",
    publishedAt: "2025-09-18",
    readTime: "7 min read",
    tags: ["Curtains", "Factory Flow", "Shipment"],
    pinned: false,
    status: "published",
    coverAccent: "from-[#151719] via-[#4f5962] to-[#cdd7de]",
    heroSummary:
      "This post gives buyers a more spatial sense of the factory by focusing on larger blackout curtain runs, packaging control, and loading readiness.",
    overview:
      "Large-format products change the factory atmosphere. Folding, measurement, and carton handling all look different, so this journal entry broadens the visual language of the site.",
    storyBlocks: [
      {
        heading: "Scale changes the workflow",
        body: "Curtain programs need more visible space management, which makes them ideal for a cinematic documentary-style page.",
      },
    ],
    productionTimeline: [
      { phase: "Fabric and blackout layer check", description: "Layer structure and drape consistency were reviewed before cutting." },
      { phase: "Measurement control", description: "Long-format size tolerance and finish checks were monitored on the line." },
      { phase: "Packing format", description: "Packing was adjusted for large panels and protected fold presentation." },
      { phase: "Shipping prep", description: "Cartons were staged for loading efficiency and receiving clarity." },
    ],
    gallery: [
      {
        title: "Wide-format handling",
        caption: "The imagery communicates physical scale and operational order at the same time.",
        accent: "from-[#1d2125] via-[#66727d] to-[#d9e2e8]",
      },
      {
        title: "Final staging",
        caption: "Shipment staging becomes part of the documentary narrative instead of hidden backend work.",
        accent: "from-[#241f1c] via-[#7e7065] to-[#e7dbcf]",
      },
    ],
    shipment: {
      title: "Large-format dispatch",
      description: "Final logistics planning focused on size handling, carton marks, and buyer-side installation readiness.",
      checklist: [
        "Panel count per carton",
        "Installation label review",
        "Container loading sequence alignment",
      ],
    },
    metrics: [
      { label: "Program Type", value: "Blackout Curtains", note: "Interior and hospitality use" },
      { label: "Format", value: "Large Panels", note: "Long-format handling workflow" },
      { label: "Shipment Focus", value: "Loading Logic", note: "Large-carton staging" },
      { label: "Narrative Value", value: "High", note: "Strong cinematic workflow visuals" },
    ],
  },
  {
    slug: "winter-blanket-capsule-draft",
    title: "Winter Blanket Capsule and Thermal Finish Review",
    excerpt:
      "Draft article prepared for a future story on thermal finishing, softness testing, and seasonal packaging.",
    coverLabel: "Draft Story",
    publishedAt: "2025-08-28",
    readTime: "4 min read",
    tags: ["Draft", "Blankets", "Sampling"],
    pinned: false,
    status: "draft",
    coverAccent: "from-[#221d1a] via-[#75665d] to-[#e7dbcf]",
    heroSummary:
      "This draft is kept in the admin scaffold to show how unpublished stories can live beside published case studies.",
    overview:
      "The draft entry exists mainly to support the admin-only workflow design and demonstrate status separation between live and internal posts.",
    storyBlocks: [
      {
        heading: "Draft content placeholder",
        body: "This entry shows how unpublished content can still be structured with overview, gallery, shipment notes, and production metrics before going live.",
      },
    ],
    productionTimeline: [
      { phase: "Draft setup", description: "Content outline created for future editorial completion." },
    ],
    gallery: [
      {
        title: "Draft visual",
        caption: "Reserved visual block for future blanket story imagery.",
        accent: "from-[#2b2622] via-[#8c7c71] to-[#f0e4d8]",
      },
    ],
    shipment: {
      title: "Shipment notes pending",
      description: "Final shipment details will be added after production confirmation.",
      checklist: ["Awaiting production confirmation"],
    },
    metrics: [
      { label: "Status", value: "Draft", note: "Internal editorial preparation" },
    ],
  },
];

export const publishedManufacturingJournalPosts = manufacturingJournalPosts
  .filter((post) => post.status === "published")
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

export const featuredManufacturingJournalPost =
  publishedManufacturingJournalPosts.find((post) => post.pinned) ??
  publishedManufacturingJournalPosts[0];

export const manufacturingJournalTags = Array.from(
  new Set(
    publishedManufacturingJournalPosts.flatMap((post) => post.tags).sort()
  )
);

export function formatJournalDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export function getJournalPostBySlug(slug: string) {
  return manufacturingJournalPosts.find((post) => post.slug === slug);
}
