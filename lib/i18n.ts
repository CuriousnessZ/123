export type Locale = "en" | "zh";

export const LOCALE_COOKIE_NAME = "site-locale";

const zhTextMap: Record<string, string> = {
  "Premium Textile": "高端家纺",
  "Home Textiles": "家用纺织",
  Collections: "产品展示",
  Journal: "工厂日志",
  Contact: "联系",
  "Request Quote": "获取报价",
  "Choose File": "选择文件",
  "Choose Files": "选择文件",
  "No file selected": "未选择文件",
  Navigation: "导航",
  Connect: "联系渠道",
  "Premium Textile Manufacturing": "高端家纺制造",
  "Designed for high-trust B2B inquiries and long-term global cooperation.":
    "为高信任度 B2B 询盘与长期国际合作而打造。",
  "Start your custom collection": "开启定制系列",
  "Chat With Textile Specialist": "联系家纺顾问",
  Home: "首页",
  Factory: "工厂",
  "About Us": "关于我们",
  Certifications: "资质认证",
  "Company Profile": "公司介绍",
  Blog: "博客",
  WhatsApp: "WhatsApp",
  Email: "邮箱",
  Instagram: "Instagram",
  LinkedIn: "LinkedIn",
  "Certifications: OEKO-TEX, GOTS, ISO9001, BSCI":
    "认证资质：OEKO-TEX、GOTS、ISO9001、BSCI",
  "Premium Custom Home Textiles for Global Brands":
    "面向全球品牌的高端定制家纺制造",
  "We help brands create high-quality bedding, towels, curtains, and textile collections with flexible OEM & ODM solutions.":
    "我们为品牌提供高品质床品、毛巾、窗帘与家纺系列产品，并提供灵活的 OEM 与 ODM 解决方案。",
  "Request Free Quote": "免费获取报价",
  "Years Experience": "从业经验",
  "Export Countries": "出口国家",
  "Manufacturing Facility": "生产基地",
  "Low MOQ": "低起订量",
  "Flexible Startup Support": "灵活支持初创项目",
  "Fast Sampling Workflow": "快速打样流程",
  "Custom Programs Supported": "支持定制方案",
  "A smaller editorial selection that supports the hero instead of competing with it.":
    "以更克制的编辑式选品衬托首屏，而不是与主视觉竞争。",
  "The homepage now previews only a tighter set of product categories. The rest can stay on internal pages.":
    "首页只展示更精选的产品品类，其余内容可放在内页承接。",
  "Request collection details": "获取产品详情",
  "Factory Strength": "工厂实力",
  "A factory presentation that shows real capability, not just a generic supplier claim.":
    "不只是泛泛而谈的供应商介绍，而是真正体现工厂实力的展示。",
  "This section brings together facility scale, daily production flow, and certification proof so buyers can quickly understand how the factory operates.":
    "这一部分整合了厂房规模、日常生产流程与认证资质，方便客户快速理解工厂的运作方式。",
  "Production and finishing facility": "生产与后整理工厂",
  "10+ Years": "10年以上",
  "Home textile manufacturing experience": "家纺制造经验",
  "50+ Countries": "50多个国家",
  "Export markets served": "服务出口市场",
  "Sampling response for active projects": "活跃项目打样响应",
  "Daily Factory Flow": "工厂日常流程",
  Workshop: "生产车间",
  "Organized cutting and sewing zones built for consistent premium textile output.":
    "切割与缝制区域规划有序，保证高端家纺的稳定产出。",
  "Quality Inspection": "质量检验",
  "Measurement, stitching, fabric, and branding checks before final packing.":
    "在最终包装前，对尺寸、车缝、面料与品牌细节进行检查。",
  "Packaging Area": "包装区域",
  "Retail-ready folding, inserts, cartons, and export labeling for global shipments.":
    "支持零售级折叠、插卡、装箱与出口标签处理，满足全球出货要求。",
  Warehouse: "仓储区域",
  "Carton staging and shipment preparation aligned with buyer schedules.":
    "按照客户排期完成纸箱暂存与出货准备。",
  "View Factory Plog": "查看工厂日志",
  "Compliance & Workflow": "认证与流程",
  "Certifications and process discipline presented in one block.":
    "将资质认证与流程管理统一整合展示。",
  Certified: "认证",
  "Enterprise Routine": "企业流程",
  Inquiry: "需求沟通",
  "Align target market, SKU mix, quantities, and product goals with our textile specialist.":
    "与家纺顾问确认目标市场、SKU 组合、数量与产品目标。",
  Sampling: "打样开发",
  "Develop counter samples, trims, branding, and construction details for approval.":
    "开发样品、辅料、品牌元素与工艺细节，供客户确认。",
  "Material Confirmation": "材料确认",
  "Lock fabric hand feel, finishes, packaging structure, and quality benchmarks.":
    "确认面料手感、后整理工艺、包装结构与质量标准。",
  Production: "批量生产",
  "Coordinate cutting, sewing, embroidery, printing, and in-line milestone control.":
    "统筹裁剪、缝制、绣花、印花与过程关键节点控制。",
  QC: "质检",
  "Inspect stitching, measurements, colorfastness, labeling, and final packing accuracy.":
    "检查车缝、尺寸、色牢度、标签与最终包装准确性。",
  Shipping: "出货",
  "Prepare export documents, pallet planning, carton markings, and delivery coordination.":
    "准备出口文件、托盘规划、外箱唛头与交付安排。",
  "OEM & ODM": "OEM 与 ODM",
  "Customization and workflow reduced to the essentials.":
    "将定制能力与合作流程精简到关键重点。",
  "Homepage information stays focused on the capabilities buyers need first.":
    "首页信息只保留客户最先关心的能力与流程。",
  "Fabric Customization": "面料定制",
  "Percale, sateen, washed cotton, bamboo, microfiber, blends, and custom GSM programs.":
    "支持 percale、贡缎、水洗棉、竹纤维、超细纤维、混纺及克重定制。",
  "Size Customization": "尺寸定制",
  "Tailored dimensions for retail packs, hospitality projects, and regional bed standards.":
    "可根据零售包装、酒店项目与区域床品标准定制尺寸。",
  "Logo Embroidery": "Logo 刺绣",
  "Premium stitched branding, woven labels, and tonal monogram execution.":
    "支持高品质刺绣品牌、织标与同色字母绣等方案。",
  "Pattern Printing": "图案印花",
  "Reactive print, digital print, yarn-dye, and seasonal design development support.":
    "支持活性印花、数码印花、色织与季节性图案开发。",
  "Packaging Design": "包装设计",
  "Gift boxes, zip bags, inserts, belly bands, and brand-ready unboxing systems.":
    "支持礼盒、拉链袋、插卡、腰封与品牌化开箱体系设计。",
  "Color Matching": "颜色配比",
  "Pantone-guided color development with buyer approval and material swatches.":
    "依据 Pantone 进行颜色开发，并结合客户确认与色卡样布。",
  "Private Label Manufacturing": "贴牌生产",
  "Confidential, scalable production for Amazon, Shopify, wholesale, and hospitality buyers.":
    "为 Amazon、Shopify、批发与酒店客户提供保密且可扩展的贴牌生产。",
  Process: "流程",
  "Buyer Confidence": "客户信任",
  "Social proof and long-term cooperation reasons stay focused on buyer reassurance.":
    "客户评价与长期合作优势聚焦在建立采购信任。",
  "With certifications moved into the factory block, this section stays dedicated to client confidence, retention, and sourcing comfort.":
    "认证内容已集中到工厂实力板块，这里专注于客户信任、留存与采购安心感。",
  "Why buyers stay with us": "客户持续合作的原因",
  "Luxury global positioning that avoids low-cost wholesale visual cues":
    "以高端国际化定位呈现，避免廉价批发感。",
  "Responsive, high-trust UX focused on WhatsApp-led B2B conversion":
    "以高信任度、快速响应的体验推动 WhatsApp 型 B2B 转化。",
  "SEO-ready editorial structure for organic traffic growth":
    "具备 SEO 编辑结构，利于自然流量增长。",
  "Scalable foundation for multilingual support, CRM integrations, and CMS expansion":
    "具备多语言、CRM 集成与 CMS 扩展的可持续基础。",
  "Client Feedback": "客户反馈",
  "Previous testimonial": "上一条评价",
  "Next testimonial": "下一条评价",
  "Go to testimonial 1": "转到评价 1",
  "Go to testimonial 2": "转到评价 2",
  "Go to testimonial 3": "转到评价 3",
  "Inquiry System": "询盘系统",
  "The homepage now ends with one clear conversion target.":
    "首页以一个清晰的转化目标收尾。",
  "Less noise around the form makes the final action feel more direct: submit requirements and move into WhatsApp conversation.":
    "减少表单周边噪音，让最终动作更直接：提交需求并进入 WhatsApp 沟通。",
  "Export Markets": "出口市场",
  "Europe, North America, Middle East, Southeast Asia":
    "欧洲、北美、中东、东南亚",
  "Client Types": "客户类型",
  "Amazon sellers, Shopify brands, hotel suppliers, distributors":
    "Amazon 卖家、Shopify 品牌、酒店供应商、分销商",
  "Final CTA": "最终引导",
  "Start your custom textile collection with a partner built for long-term business.":
    "与注重长期合作的制造伙伴一起开启你的定制家纺系列。",
  "Talk to Our Factory Team": "联系工厂团队",
  "Product Programs": "产品方案",
  "Curated textile collections built for premium global buyers":
    "为全球高端客户打造的精选家纺系列",
  "From bedding and duvet covers to towels, curtains, and embroidery programs, we help brands shape coherent product assortments with refined materials and packaging.":
    "从床品、被套到毛巾、窗帘和刺绣系列，我们帮助品牌以更精致的材料与包装构建完整产品组合。",
  "Private-label product development for home, hospitality, and retail channels":
    "面向家居、酒店与零售渠道的贴牌产品开发",
  "Flexible MOQ planning for new launches and established distributors":
    "兼顾新品启动与成熟分销商的灵活 MOQ 规划",
  "Fabric, trim, embroidery, print, and packaging alignment in one workflow":
    "将面料、辅料、刺绣、印花与包装统一在一个工作流中",
  "Request Product Catalog": "获取产品目录",
  Customization: "定制服务",
  "OEM and ODM services designed to make sampling and production effortless":
    "让打样与生产更高效顺畅的 OEM / ODM 服务",
  "We turn design intent into premium textile collections with a workflow that feels structured, responsive, and easy for overseas sourcing teams to manage.":
    "我们通过有结构、响应快、便于海外采购团队管理的流程，将设计意图落地成高端家纺系列。",
  "Fabric, sizing, logo, print, color, and packaging customization":
    "支持面料、尺寸、Logo、印花、颜色与包装定制",
  "Fast sampling feedback cycles and organized technical communication":
    "更快的打样反馈周期与更有条理的技术沟通",
  "Production planning built for repeat orders and long-term brand partnerships":
    "适用于返单与长期品牌合作的生产规划",
  "Start OEM Project": "启动 OEM 项目",
  Manufacturing: "制造能力",
  "A modern textile manufacturing partner with quality-first execution":
    "以品质优先执行为核心的现代家纺制造伙伴",
  "Our workshop, sewing lines, inspection flow, and packaging areas are organized around reliable output, brand consistency, and export-ready communication.":
    "我们的车间、缝制线、检验流程与包装区域围绕稳定交付、品牌一致性和出口沟通而组织。",
  "Structured production flow from cutting and sewing to final packing":
    "从裁剪缝制到最终包装的结构化生产流程",
  "Inline checks for measurements, stitching, fabric quality, and branding details":
    "对尺寸、车缝、面料质量与品牌细节进行过程检验",
  "Support for e-commerce, wholesale, hotel, and design-studio buyers":
    "支持电商、批发、酒店与设计工作室类客户",
  "Factory Plog": "工厂日志",
  "A more visual factory journal that lets buyers feel the daily rhythm behind production":
    "更具视觉感的工厂日志，让客户感受到生产背后的日常节奏",
  "Instead of abstract capability claims, this page walks through the workshop atmosphere, production checkpoints, packaging discipline, and the real pace of factory operations.":
    "这页不再停留在抽象能力描述，而是用车间氛围、生产节点、包装纪律与真实工厂节奏来呈现实力。",
  "Daily factory scenes presented like a visual sourcing journal":
    "以可视化采购日志的方式呈现工厂日常场景",
  "Process moments that help buyers understand how orders move in reality":
    "通过流程节点帮助客户理解订单在现实中的推进方式",
  "Certification and scale context woven into the story rather than isolated claims":
    "将认证与规模信息融入叙事，而不是孤立罗列",
  "Request Factory Details": "获取工厂详情",
  "Trust Signals": "信任背书",
  "International certifications that support premium sourcing confidence":
    "支撑高端采购信心的国际认证体系",
  "Certification visibility matters for global buyers. We present key compliance and process standards in a clean, premium format that reinforces reliability.":
    "对全球客户而言，认证展示十分重要。我们以简洁高端的方式呈现关键合规与流程标准，强化可靠形象。",
  "OEKO-TEX, GOTS, ISO9001, and BSCI positioned for buyer reassurance":
    "以 OEKO-TEX、GOTS、ISO9001 与 BSCI 增强客户信任",
  "Minimal presentation designed to feel trustworthy rather than crowded":
    "以克制简洁的方式呈现，避免杂乱感",
  "Ready to expand with downloadable reports and audit details":
    "后续可扩展为可下载报告与审核细节",
  "Ask for Compliance File": "索取合规文件",
  Company: "公司",
  "A textile team focused on long-term cooperation, not one-off transactions":
    "专注长期合作而非一次性交易的家纺团队",
  "We help overseas brands launch and scale custom home textile lines with responsive development, dependable production, and communication built for international business.":
    "我们帮助海外品牌以快速开发、可靠生产与国际化沟通能力，推出并扩展定制家纺产品线。",
  "Positioned as a premium manufacturing partner for modern global brands":
    "定位为现代国际品牌的高端制造合作伙伴",
  "Designed to serve Amazon sellers, distributors, studios, and hotel suppliers":
    "服务于 Amazon 卖家、分销商、设计工作室与酒店供应商",
  "Built around repeat orders, quick response, and sustainable client relationships":
    "围绕返单、快速响应与可持续客户关系建立",
  "Meet Our Team": "了解团队",
  "Editorial SEO": "内容 SEO",
  "Content designed to educate buyers and attract qualified organic traffic":
    "用于教育客户并吸引高质量自然流量的内容体系",
  "The blog system introduces sourcing guides, trend reports, material comparisons, and packaging ideas that support long-term lead generation.":
    "博客系统包含采购指南、趋势报告、材料对比与包装灵感，帮助长期线索获取。",
  "Editorial layout aligned with premium home and design brands":
    "编辑风格版式与高端家居和设计品牌调性一致",
  "SEO-friendly structure for textile keywords and sourcing intent":
    "针对家纺关键词与采购意图优化的 SEO 结构",
  "Scalable for headless CMS integration and multilingual expansion":
    "可扩展到 Headless CMS 集成与多语言版本",
  "Explore Content Plan": "查看内容规划",
  "Lead Conversion": "线索转化",
  "A premium inquiry system built to move buyers into WhatsApp conversations":
    "引导客户进入 WhatsApp 沟通的高端询盘系统",
  "The contact experience collects detailed B2B sourcing requirements, stores lead data, and hands the conversation to your sales manager through a polished WhatsApp summary.":
    "联系页会收集详细的 B2B 采购需求，整理线索信息，并通过专业的 WhatsApp 摘要交给销售继续跟进。",
  "Detailed inquiry capture with company, market, MOQ, and file uploads":
    "完整采集公司、市场、MOQ 与文件上传等询盘信息",
  "Lead records ready for CRM export and structured follow-up statuses":
    "线索记录可用于 CRM 导出与结构化跟进",
  "Fast path from form completion to active WhatsApp conversation":
    "从填写表单到进入 WhatsApp 沟通的快速路径",
  "Get Instant Quotation": "立即获取报价",
  "Safer materials and finished textiles for premium home categories.":
    "为高端家居产品提供更安全的材料与成品纺织。",
  "Responsible textile sourcing programs for organic-focused collections.":
    "适用于有机系列的可持续采购方案。",
  "Documented process controls that support reliable quality consistency.":
    "以文件化流程管理支持稳定一致的品质控制。",
  "Compliance-focused manufacturing partnerships for international buyers.":
    "面向国际采购商的合规型制造合作。",
  "Bedding Sets": "床品套件",
  "Editorial bedding collections designed for modern retail and hospitality programs.":
    "为现代零售与酒店项目打造的编辑感床品系列。",
  "Duvet Covers": "被套",
  "Soft-touch duvet programs with premium finishes, trims, and packaging options.":
    "具备高级后整理、辅料与包装方案的柔软被套系列。",
  Pillowcases: "枕套",
  "Luxury pillowcase capsules with logo embroidery, piping, and gift-ready sets.":
    "支持 Logo 刺绣、滚边与礼盒组合的高端枕套系列。",
  Blankets: "毛毯",
  "Layered comfort pieces for e-commerce bundles, seasonal launches, and hotel suites.":
    "适用于电商组合、季节上新与酒店套房的舒适毛毯产品。",
  Towels: "毛巾",
  "Absorbent towel collections tailored for resorts, spas, and premium home brands.":
    "为度假酒店、水疗与高端家居品牌定制的吸水毛巾系列。",
  Curtains: "窗帘",
  "Textured drapery systems with blackout, linen-look, and embroidered solutions.":
    "支持遮光、亚麻感与刺绣方案的层次化窗帘系统。",
  "Hotel Collection": "酒店系列",
  "Coordinated institutional textile programs built around durability and elegance.":
    "兼顾耐用性与质感的酒店项目配套家纺方案。",
  "Kids Collection": "儿童系列",
  "Private-label textile sets with playful prints, safe materials, and gift packaging.":
    "支持趣味印花、安全材料与礼盒包装的贴牌儿童家纺套装。",
  "Embroidery Collection": "刺绣系列",
  "Signature stitched details and premium ornamentation for differentiated brand stories.":
    "以代表性刺绣细节与高级装饰打造差异化品牌故事。",
  "Quiet Layering": "静奢层次",
  "A composed bedding story built around layered neutrals, soft construction, and retail-ready presentation for modern interior brands.":
    "以层次化中性色、柔和结构与零售呈现为核心，为现代家居品牌打造一套完整床品叙事。",
  "Designed to feel calm and architectural rather than decorative, this category becomes the anchor of a premium bedroom assortment.":
    "这一品类强调宁静与结构感，而非装饰堆叠，因此更适合作为高端卧室系列的核心锚点。",
  "Washed cotton, sateen, percale, linen-touch blends":
    "水洗棉、贡缎、percale、亚麻触感混纺",
  "Boutique retail, hotel suites, curated bedroom launches":
    "精品零售、酒店套房、精选卧室系列发布",
  "Embroidery, tonal trims, folded sets, gift packaging":
    "刺绣、同色系辅料、折叠成套、礼盒包装",
  "Soft Structure": "柔和结构",
  "Duvet cover programs focus on drape, refined closure details, and a surface finish that feels elevated in both retail and hospitality contexts.":
    "被套系列重点呈现垂感、精致开合细节，以及同时适配零售与酒店场景的高级表面质感。",
  "Presented as a quieter hero piece, duvet covers help buyers read fabric character, finish quality, and set coordination at first glance.":
    "被套被作为更克制的主角单品呈现，让客户第一眼就能判断面料气质、后整理质量与整套协调度。",
  "High-density sateen, washed cotton, jacquard stripes":
    "高密贡缎、水洗棉、提花条纹",
  "Hotel bedding programs, premium home launches, export cartons":
    "酒店床品项目、高端家居上新、出口装箱方案",
  "Button plackets, hidden zip options, branded fold presentation":
    "纽扣门襟、隐形拉链、品牌化折叠展示",
  "Small Luxury": "细节奢感",
  "Pillowcases are treated as a precision category where edge detail, tonal embroidery, and tactile hand feel all influence the luxury impression.":
    "枕套被视作高精度品类，边缘细节、同色刺绣与触感都会直接影响整体高级感。",
  "This collection is styled like an accessory edit inside the broader bedroom family, with more attention on trimming, monograms, and finishing finesse.":
    "这一系列像卧室产品家族中的配饰章节，更强调滚边、字母绣与精细收尾。",
  "Percale, sateen, washed finishes, tonal embroidery":
    "Percale、贡缎、水洗后整理、同色刺绣",
  "Gift-ready packs, boutique labels, embroidered brand programs":
    "礼盒组合、精品品牌、刺绣型品牌项目",
  "Piping, oxford borders, logo embroidery, retail inserts":
    "滚边、牛津边、Logo 刺绣、零售插卡",
  "Seasonal Warmth": "季节温感",
  "Blanket programs carry a more tactile and seasonal voice, balancing warmth, softness, and an understated premium look for layered interiors.":
    "毛毯系列带有更强的触感与季节属性，在温暖、柔软与克制高级感之间取得平衡。",
  "Rather than presenting blankets as bulk utility products, this story frames them as a key emotional layer within a luxury home assortment.":
    "这类产品不再被视作普通大货，而是高端家居系列里承载情绪与层次的关键单品。",
  "Microfiber plush, cotton blends, brushed warmth finishes":
    "超细纤维绒感、棉混纺、磨毛保暖后整理",
  "Seasonal retail drops, hotel suites, soft-home bundles":
    "季节零售上新、酒店套房、软装家居组合",
  "Ribbon wraps, cross straps, folded shelf presentation":
    "丝带包裹、交叉绑带、陈列折叠展示",
  "Resort Tactility": "度假式触感",
  "Towel collections are presented through absorbency, weight, and visual discipline, especially where spa and hospitality clients expect immediate quality cues.":
    "毛巾系列通过吸水性、克重与视觉秩序来建立品质感，尤其适合水疗与酒店客户快速判断质量。",
  "The category sits between performance and luxury, so the page focuses on both hand feel and how the sets are visually stacked, folded, and branded.":
    "这个品类位于功能与奢感之间，因此页面同时强调手感，以及成套堆叠、折叠与品牌呈现方式。",
  "Combed cotton, jacquard borders, 500-700 GSM programs":
    "精梳棉、提花边、500-700 GSM 系列",
  "Spa collections, resorts, hotel bathroom programs":
    "水疗系列、度假酒店、酒店卫浴项目",
  "Logo borders, stacked presentation, hospitality folding":
    "Logo 边框、堆叠展示、酒店折叠标准",
  "Spatial Textile": "空间织物",
  "Curtain collections bring a more architectural scale to the presentation, highlighting drape, structure, and interior framing rather than just surface pattern.":
    "窗帘系列在呈现上更具建筑尺度，重点强调垂感、结构与空间界面，而不仅是表面图案。",
  "This is where the range begins to feel more like an interiors collection, with emphasis on room atmosphere, panel scale, and material fall.":
    "这一章节让产品开始更像一个室内系列，重点放在空间氛围、幅宽比例与材质下垂效果上。",
  "Blackout bases, linen-look weaves, embroidered sheers":
    "遮光底布、亚麻感织物、刺绣纱帘",
  "Interior projects, hospitality rooms, layered window programs":
    "室内项目、酒店客房、层次化窗帘方案",
  "Header customization, blackout lining, export-ready folding":
    "顶部工艺定制、遮光里布、出口折叠包装",
  "Hospitality Order": "酒店秩序",
  "Hotel programs are shown with an emphasis on consistency, operational discipline, and the calm visual language expected from international hospitality buyers.":
    "酒店项目的呈现重点放在一致性、执行纪律以及国际酒店客户偏好的平静视觉语言。",
  "This collection reads less like a retail category and more like a coordinated specification system covering bedding, towels, and presentation logic together.":
    "这一系列不像零售单品，更像是一套整合床品、毛巾与呈现逻辑的规格化系统。",
  "Commercial bedding fabrics, towels, coordinated textile packs":
    "商用床品面料、毛巾、配套家纺组合",
  "Hotels, serviced apartments, hospitality supply programs":
    "酒店、公寓式住宿、酒店供应项目",
  "Institutional specs, label control, export carton discipline":
    "工程标准、标签控制、出口外箱纪律",
  "Gentle Play": "柔和童趣",
  "Kids collections soften the overall catalog with safer materials, warmer tones, and a more playful but still premium visual structure.":
    "儿童系列以更安全的材料、更温暖的色调和带有童趣但仍保持高级感的视觉结构来柔化整体目录。",
  "The category stays refined rather than loud, allowing playful product direction to live inside a brand system that still feels considered and export-ready.":
    "这一品类保持克制而不喧闹，让童趣方向仍然生活在一个完整且适合出口的品牌系统中。",
  "Soft cotton bases, print development, child-safe trims":
    "柔软棉质底布、图案开发、儿童安全辅料",
  "Gift collections, family retail, private-label launches":
    "礼赠系列、家庭零售、贴牌新品发布",
  "Illustrated prints, safe components, boxed presentation":
    "插画印花、安全配件、盒装展示",
  "Signature Detail": "标志性细节",
  "Embroidery collections focus on craft language, tonal thread work, and the kind of refined ornamentation that helps a brand look more distinct and premium.":
    "刺绣系列强调工艺语言、同色线迹与能让品牌更有辨识度和高级感的精细装饰。",
  "Presented like a couture detail story, this chapter is less about volume and more about intimacy, precision, and visual identity.":
    "这一章节更像高级定制里的细节故事，重点不在大货体量，而在亲密感、精度与视觉身份。",
  "Tone-on-tone embroidery, monograms, stitched branding":
    "同色刺绣、字母绣、缝制品牌元素",
  "Boutique labels, signature capsules, gifting collections":
    "精品品牌、标志性胶囊系列、礼赠收藏",
  "Thread tone approval, premium fold sets, branded detail work":
    "线色确认、高级折叠套组、品牌化细节工艺",
  "Collections Overview": "系列总览",
  "An understated product gallery shaped by natural texture, calm scale, and editorial rhythm.":
    "以天然质感、克制尺度与编辑节奏构成的低调产品陈列页。",
  "Collection Count": "系列数量",
  "Built as a coherent family of bedding, towels, curtains, embroidery, and hospitality textile programs.":
    "围绕床品、毛巾、窗帘、刺绣与酒店项目家纺构建成统一而完整的系列体系。",
  "Brand Mood": "品牌气质",
  "Quiet luxury, tactile materials, and a more architectural product presentation.":
    "以静奢气质、可感知材质与更具建筑感的产品呈现方式建立品牌形象。",
  "Editorial Selection": "编辑式精选",
  "Designed for premium sourcing teams that want a collection to feel composed, tactile, and commercially ready from the first presentation.":
    "为希望在第一次展示中就呈现完整度、质感与商业准备度的高端采购团队而设计。",
  "Collection Positioning": "系列定位",
  "Signature Programs": "代表产品方案",
  "A smaller set of product programs that communicates material direction and commercial readiness.":
    "以更精炼的产品方案传达材料方向与商业落地能力。",
  "A more restrained, image-led collection preview that feels closer to a luxury catalog.":
    "以更克制、更偏图片主导的方式预览系列，让首页更接近奢侈品目录。",
  "The homepage now introduces only a few collection chapters with real imagery, quieter typography, and a stronger sense of material atmosphere.":
    "首页现在只引出少量系列章节，并以真实图片、更安静的排版和更强的材质氛围来建立第一印象。",
  "Product Finder": "产品筛选",
  "Filter by collection or keyword to jump straight to the right product.":
    "按系列或关键词筛选，直接跳到对应产品。",
  "Instead of scrolling through every chapter in order, use this browser to narrow the assortment first and then open the matching product detail.":
    "不用再按顺序滚完整个页面，先在这里缩小范围，再打开对应产品详情会更高效。",
  "Collection Directory": "系列目录",
  "A shorter collection overview that keeps navigation clear and product discovery faster.":
    "用更短的系列总览保持导航清晰，也让找产品更快。",
  "Use the product finder above when you already know what you need, or open a collection chapter below when you want the broader material and brand story.":
    "如果你已经知道要找什么，就先用上面的产品筛选；如果你想看更完整的材质与品牌故事，再进入下面的系列章节。",
  "All Collections": "全部系列",
  "All Fabrics": "全部面料",
  "All Use Cases": "全部场景",
  "Search by product name, fabric, use case, or collection...":
    "按产品名、面料、适用场景或系列搜索...",
  "Clear Filters": "清除筛选",
  Showing: "当前显示",
  "Filtered from": "筛选自",
  products: "个产品",
  "Fabric Filter": "面料筛选",
  "Use Case Filter": "场景筛选",
  "No matching products found": "没有找到匹配产品",
  "Try another collection or a simpler keyword to widen the result set.":
    "试试切换系列，或者使用更简单的关键词扩大结果范围。",
  "Previous Page": "上一页",
  "Next Page": "下一页",
  Page: "页码",
  "Instead of overwhelming buyers with a crowded catalog, this page frames each category like an interior brand presentation: fewer stories, better composition, and stronger material cues.":
    "这页不再用拥挤目录压向客户，而是像高端室内品牌提案那样展示每个品类：内容更少，构图更好，材料提示更明确。",
  "Wide Editorial View": "大图场景",
  "A wider image that establishes scale, atmosphere, and the premium tone of the collection.":
    "用更完整的画面先建立系列的尺度、氛围与高级气质。",
  "Material Close-Up": "材质近景",
  "A tighter crop used to suggest texture, fabric movement, and surface refinement.":
    "通过更近的裁切去强调纹理、材质流动感与表面精致度。",
  "Craft & Finish Detail": "工艺细节",
  "A more technical framing that supports discussions around finishing, precision, and product execution.":
    "用更技术性的视角去支撑后整理、精度与落地执行层面的沟通。",
  MOQ: "起订量",
  "Material Direction": "材料方向",
  "Natural fibres, soft tactility, and composed finishes stay at the center of the assortment.":
    "天然纤维、柔和触感与克制后整理始终是整个系列的核心。",
  "Where They Fit": "适用场景",
  "Each collection is framed around where it lives: retail, hospitality, gifting, and export programs.":
    "每个系列都围绕其应用场景展开：零售、酒店、礼赠与出口项目。",
  "Explore Collection Story": "查看系列详情",
  "View Product Details": "查看产品详情",
  "Refined Product Story": "精致产品叙事",
  "Material Focus": "材质重点",
  Fabric: "面料",
  "Best Applied To": "适用方向",
  "Finish Language": "工艺语言",
  "Lead Time": "交期",
  "Request samples": "索取样品",
  "Back to Collections": "返回产品展示",
  "Back to Collection": "返回系列详情",
  "Collection Chapter": "系列章节",
  "Product Chapter": "产品章节",
  "Material Narrative": "材质叙事",
  "Product Positioning": "产品定位",
  "Visual Narrative": "视觉叙事",
  "Real image-led storytelling that supports swatch requests, specification talks, and collection positioning.":
    "以真实图片主导叙事，帮助客户更自然地进入样布索取、规格沟通与系列定位讨论。",
  "A quieter, more tactile chapter inside the broader textile assortment.":
    "在更大的家纺系列中，这是一个更安静、也更强调触感的章节。",
  "Editorial Reading": "目录阅读方式",
  "Use Case": "适用场景",
  "Product Highlights": "产品亮点",
  "Product Visuals": "产品视觉",
  "More From This Collection": "本系列更多产品",
  "The collection is presented like a catalog chapter rather than a crowded wholesale grid.":
    "这个系列更像目录章节来呈现，而不是拥挤的批发网格。",
  "The goal is to help buyers read proportion, texture, finish, and commercial intent before they ever ask for the line sheet.":
    "目标是在客户开口索取线表之前，就先读懂比例、质感、后整理与商业方向。",
  "Close-up imagery, finish details, and merchandising crops help the buyer read the product quickly.":
    "近景图、工艺细节和陈列式裁切，帮助客户更快读懂这款产品。",
  "Signature Program": "代表产品方案",
  "Catalog Note": "目录说明",
  "This chapter is prepared as a branded collection story first. Technical sheets, sample references, and spec breakdowns can be shared after inquiry.":
    "这一章节首先作为品牌化系列故事来呈现。技术资料、样品参考与规格拆解可在询盘后提供。",
  "Collection Inquiry": "系列咨询",
  "Product Inquiry": "产品咨询",
  "Request swatches, specifications, or a custom proposal for this collection.":
    "为这个系列索取样布、规格信息或定制方案。",
  "Request specifications, swatches, or a quotation for this product.":
    "为这款产品索取规格、样布或报价。",
  "Nordic Dwell Studio": "Nordic Dwell Studio",
  Scandinavia: "斯堪的纳维亚",
  "Their team translated our moodboards into a bedding collection that felt retail-ready from the first sampling round.":
    "他们把我们的情绪板准确转化成了床品系列，从第一轮打样开始就具备零售上架水准。",
  "Harbor Luxe Hospitality": "Harbor Luxe Hospitality",
  "Middle East": "中东",
  "Communication stayed fast, technical details were clear, and the final hotel textile program met our brand expectations.":
    "沟通始终高效，技术细节清晰，最终的酒店纺织方案符合我们的品牌预期。",
  "Maison Thread Co.": "Maison Thread Co.",
  "North America": "北美",
  "We value their ability to handle private-label packaging, embroidery, and repeat production with dependable quality control.":
    "我们很看重他们在贴牌包装、刺绣以及返单生产中的稳定品质控制能力。",
  Name: "姓名",
  "Company Name": "公司名称",
  "WhatsApp Number": "WhatsApp 号码",
  Country: "国家 / 地区",
  "Product Category": "产品类别",
  "Estimated Quantity": "预计数量",
  "Fabric Preference": "面料偏好",
  "Target Market": "目标渠道",
  "Logo Needed?": "是否需要 Logo？",
  "Packaging Customization?": "是否需要包装定制？",
  "Newsletter Updates": "接收资讯更新",
  Optional: "选填",
  "Additional Requirements": "其他需求",
  "Upload buyer files": "上传客户文件",
  "Upload reference images, tech packs, or PDFs":
    "上传参考图片、工艺单或 PDF 文件",
  "Image Upload": "图片上传",
  "Reference Image Upload": "参考图上传",
  "Tech Pack Upload": "工艺单上传",
  "PDF Upload": "PDF 上传",
  "Your inquiry summary is prepared for WhatsApp. Uploaded files are not stored online in this display-site version.":
    "你的询盘摘要将自动整理到 WhatsApp 中。当前展示站版本不会在线保存上传文件。",
  "Sending Inquiry": "正在发送询盘",
  "Opening WhatsApp with your inquiry summary...":
    "正在打开 WhatsApp 并附上你的询盘摘要……",
  "Unable to submit your inquiry.": "无法提交询盘。",
  "Something went wrong while sending your inquiry.":
    "发送询盘时出现异常。",
  "Your full name": "请输入姓名",
  "Your company": "请输入公司名称",
  "name@company.com": "name@company.com",
  "+1 234 567 890": "+86 138 0000 0000",
  "Target country / region": "目标国家 / 地区",
  "Select a category": "请选择类别",
  "Select an estimate": "请选择数量范围",
  "Washed cotton, sateen, microfiber...": "如：水洗棉、贡缎、超细纤维……",
  "Select your channel": "请选择销售渠道",
  Yes: "是",
  No: "否",
  "Share product specs, certifications, packaging goals, target pricing, lead time needs, or any other sourcing details.":
    "请填写产品规格、认证要求、包装目标、目标价格、交期需求或其他采购细节。",
  "Under 300 pcs": "300 件以下",
  "300 - 1000 pcs": "300 - 1000 件",
  "1000 - 5000 pcs": "1000 - 5000 件",
  "5000+ pcs": "5000 件以上",
  Wholesale: "批发",
  Hospitality: "酒店",
  "Interior Design": "室内设计",
  Distribution: "分销",
  "Please complete all required inquiry fields.": "请填写所有必填询盘字段。",
  "Unable to process inquiry right now. Please try again.":
    "当前无法处理询盘，请稍后重试。",
  "Hello, I would like a quotation for a custom home textile project.":
    "您好，我想咨询一个定制家纺项目的报价。",
  Category: "产品类别",
  "Logo Needed": "需要 Logo",
  "Packaging Customization": "包装定制",
  "Uploaded Files": "已上传文件",
  "Not specified": "未填写",
  None: "无",
  "About Us | Premium Home Textiles": "关于我们 | Premium Home Textiles",
  About: "关于",
  Pinned: "置顶",
  "Featured project at the top of the feed": "顶部展示重点项目",
  "Dark / White": "深色 / 浅色",
  "Consistent editorial theme with cinematic contrast": "具有电影感对比的统一编辑风格",
  Infinite: "无限滚动",
  "Scrollable story feed with tag filtering": "支持标签筛选的纵向故事流",
  "A modern manufacturing journal for a premium home textile factory.":
    "一个面向高端家纺工厂的现代制造日志页面。",
  "Built with an industrial documentary aesthetic, this page turns the factory into an editorial story: real projects, process moments, quality checkpoints, shipment logic, and the rhythm of production itself.":
    "以工业纪实美学为基础，这个页面将工厂转化成一套编辑式叙事：真实项目、生产节点、质检重点、出货逻辑，以及制造本身的节奏。",
  "Explore Featured Story": "查看重点案例",
  "Open Admin Scaffold": "打开后台脚手架",
  "Pinned Featured Project": "置顶项目",
  "Featured Story": "重点案例",
  "Read Full Story": "查看完整故事",
  "Manufacturing Feed": "制造日志流",
  "Scroll through factory stories with a cinematic editorial rhythm.":
    "以更具电影感与编辑感的节奏浏览工厂故事。",
  "Inspired by Medium, LinkedIn, and Apple-style manufacturing storytelling, the feed emphasizes process clarity, material quality, and shipment realism while keeping the premium site language intact.":
    "灵感来自 Medium、LinkedIn 以及 Apple 风格的制造叙事，强调流程清晰、材料质感与出货真实感，同时保持网站的高端语言。",
  "Journal system scaffold": "日志系统脚手架",
  "Public reading experience is ready now. Admin-only posting, image uploads, video embedding, drafts, pinned stories, and Supabase-based publishing are scaffolded in the admin route.":
    "当前公开阅读体验已就绪。仅管理员发布、图片上传、视频嵌入、草稿、置顶文章与基于 Supabase 的发布能力，已在后台路由中完成脚手架。",
  All: "全部",
  "No stories match this tag yet.": "当前还没有符合该标签的内容。",
  "Load More Stories": "加载更多故事",
  "Back to Journal": "返回日志",
  "Project Overview": "项目概览",
  "Story Blocks": "故事章节",
  "Production Timeline": "生产时间线",
  "A clean operational sequence from development to shipment.":
    "从开发到出货的一套清晰流程。",
  "Factory Process Gallery": "工厂流程画廊",
  "Large visual sections that make production feel more tangible.":
    "通过大视觉区块，让生产过程更具真实感。",
  "Shipment Section": "出货环节",
  "Next Story": "下一步探索",
  "Continue exploring how this factory turns process into a visual trust signal.":
    "继续了解这家工厂如何将流程转化为可视化信任信号。",
  "Back to Journal Feed": "返回日志列表",
  "Factory Moment": "工厂瞬间",
  "One Day In The Factory": "工厂的一天",
  "A timeline view that makes the production atmosphere easier to picture.":
    "用时间线方式让生产现场更容易被想象出来。",
  "Spaces Buyers Care About": "客户关心的空间场景",
  "Buyer Takeaway": "客户感知重点",
  "A plog page makes the factory feel more real, active, and trustworthy.":
    "一个 plog 页面会让工厂显得更真实、更有活力，也更值得信任。",
  "Step 01": "步骤 01",
  "Step 02": "步骤 02",
  "Step 03": "步骤 03",
  "Step 04": "步骤 04",
  "Bedding": "床品",
  "Packaging": "包装",
  "Shipment": "出货",
  "Hotel Program": "酒店项目",
  "Factory Flow": "工厂流程",
  "Pinned Project": "置顶项目",
  "Factory Journal": "工厂日志",
  "Draft Story": "草稿故事",
  "8 min read": "8 分钟阅读",
  "7 min read": "7 分钟阅读",
  "6 min read": "6 分钟阅读",
  "5 min read": "5 分钟阅读",
  "4 min read": "4 分钟阅读",
  "Go to testimonial": "转到评价",
  "Back to Home": "返回首页",
  "Premium Presentation": "高端呈现",
  "Elegant, trustworthy, minimal, and conversion-focused for international buyers.":
    "优雅、可信、极简，并聚焦国际买家的转化体验。",
  "Key Highlights": "核心亮点",
  "A premium page framework that supports B2B trust and action.":
    "一套支持 B2B 信任建立与转化动作的高端页面框架。",
  "Conversion CTA": "转化引导",
  "Move qualified textile buyers into a direct WhatsApp conversation.":
    "将高质量家纺客户直接引导到 WhatsApp 沟通。",
  "Request Free Sample": "索取免费样品",
  "Premium Home Textiles": "Premium Home Textiles",
  "Hotel Textiles": "酒店家纺",
  Amazon: "Amazon",
  "Shopify / DTC": "Shopify / DTC",
  "Textile Trends": "家纺趋势",
  "Scandinavian Bedding Trends Global Buyers Are Sourcing in 2026":
    "2026 年全球采购商正在关注的北欧床品趋势",
  "A premium look at washed cotton, neutral palettes, tactile finishes, and retail packaging directions.":
    "从水洗棉、中性色调、触感后整理到零售包装方向，提供一份高端趋势观察。",
  "OEM Guide": "OEM 指南",
  "How to Build a Bedding OEM Program From Sampling to Repeat Orders":
    "如何从打样到返单，搭建一套床品 OEM 合作方案",
  "A practical framework for setting MOQ, specifications, private labels, and quality checkpoints.":
    "一套关于 MOQ、规格、贴牌与质检节点的实操框架。",
  "Hotel Sourcing": "酒店采购",
  "What Hotel Suppliers Look for in Towels, Bedding, and Packaging Systems":
    "酒店供应商在毛巾、床品与包装体系上最看重什么",
  "Key specs, compliance considerations, and presentation details that influence procurement decisions.":
    "影响采购决策的关键规格、合规点与呈现细节。",
  "Morning Line Check": "早班开线检查",
  "The day begins with fabric rolls, trim confirmation, and sewing-line preparation before the first batch moves forward.":
    "一天从面料卷、辅料确认以及缝制线准备开始，随后第一批产品才进入生产。",
  "Cutting & Sewing Rhythm": "裁剪与缝制节奏",
  "Teams move from cutting tables to sewing stations with a steady sequence designed to keep output clean and consistent.":
    "团队从裁剪台到缝制工位按稳定节奏推进，以保证产出整洁且一致。",
  "Inline Quality Review": "过程质量复核",
  "Measurements, stitching tension, fabric hand feel, and branding details are checked before products continue downstream.":
    "在产品继续流转前，对尺寸、车缝张力、面料手感与品牌细节进行检查。",
  "Packing & Export Prep": "包装与出口准备",
  "Finished goods are folded, packed, labeled, and staged for export so presentation stays aligned with buyer expectations.":
    "成品会被折叠、包装、贴标并暂存待运，确保呈现方式符合客户预期。",
  "Production briefing": "生产晨会",
  "Teams confirm today’s order priorities, approved sample references, and packaging notes before work begins.":
    "开工前，团队会确认当日订单优先级、已批准样参考和包装注意事项。",
  "Workshop in motion": "车间进入节奏",
  "Fabric cutting, sewing, embroidery, and piece matching move in parallel as supervisors check workmanship on the line.":
    "裁剪、缝制、刺绣与配片同步进行，主管同时在线上检查工艺质量。",
  "Inspection checkpoint": "检验节点",
  "Semi-finished goods are reviewed for size tolerance, seam quality, color consistency, and buyer-specific details.":
    "半成品会围绕尺寸公差、缝线质量、颜色一致性和客户特殊要求进行复检。",
  "Packing discipline": "包装纪律",
  "Products shift into final folding, insert placement, carton marking, and export preparation for shipment schedules.":
    "产品进入最终折叠、插卡、外箱唛头与出口准备阶段，以配合出货排期。",
  "Hotel Sateen Program Launch for a Middle East Hospitality Group":
    "中东酒店集团贡缎床品项目上线记录",
  "A cinematic look at how a premium hotel bedding order moves from sample approval to export-ready packing inside the factory.":
    "以更具电影感的方式展示高端酒店床品订单如何在工厂内从样品确认走向出口包装。",
  "This featured project follows a hospitality bedding program from sampling and line setup to final export packing, showing the discipline behind a large-volume hotel delivery.":
    "这个重点项目记录了一套酒店床品方案从打样、上线准备到最终出口包装的全过程，展示大货酒店项目背后的流程纪律。",
  "The order required a consistent sateen hand feel, embroidery placement control, and strict carton labeling for a regional hotel rollout. We shaped this story like an editorial manufacturing case study so buyers can feel the production rhythm rather than only reading capability claims.":
    "该订单要求贡缎手感一致、刺绣位置稳定，并为区域酒店铺货执行严格的外箱标识。我们用编辑式制造案例来讲述这个项目，让客户感受到生产节奏，而不只是阅读能力描述。",
  "From sample room to production floor": "从样品间到生产线",
  "The project started with approved hand feel, stripe alignment, and embroidery references. Once buyer comments were locked, the workshop moved into a structured launch sequence with clear sample references at each station.":
    "项目从面料手感、条纹方向与刺绣参考确认开始。客户意见敲定后，车间按结构化启动流程推进，并在每个工位保留明确样板参考。",
  "Consistency became the real story": "一致性才是真正的核心",
  "Instead of presenting the factory as a generic supplier, this journal entry shows how stitching, fabric finish, logo details, and packing rules are coordinated as one continuous production language.":
    "这篇日志并不把工厂塑造成一个普通供应商，而是展示车缝、后整理、Logo 细节与包装规则如何被协调成一套连续的生产语言。",
  "Sampling approval": "样品批准",
  "Final sample confirmation covered stripe direction, embroidery placement, and hospitality fold specification.":
    "最终样确认涵盖条纹方向、刺绣位置与酒店折叠标准。",
  "Line preparation": "产线准备",
  "Supervisors aligned cutting markers, trim sets, and QC references before large-batch sewing started.":
    "大货缝制开始前，主管先统一裁剪标记、辅料套组与质检参考标准。",
  "Inline inspection": "过程检验",
  "Measurements, seam quality, and fabric finish were checked at multiple checkpoints before packing.":
    "包装前会在多个节点检查尺寸、缝线质量与面料后整理效果。",
  "Export packing": "出口包装",
  "Cartons, labels, and shipment marks were staged against the hotel buyer packing list and route plan.":
    "外箱、标签与运输唛头会依据酒店客户的装箱清单与运输计划统一安排。",
  "Fabric arrival and review": "面料到厂与检查",
  "The first visual layer of the story focuses on incoming fabric readiness and sample reference alignment.":
    "故事的第一层视觉聚焦于到厂面料状态与样板参考是否一致。",
  "Sewing line atmosphere": "缝制线现场氛围",
  "The production line is shown as calm, controlled, and quality-oriented rather than overly industrial or chaotic.":
    "生产线被呈现为稳定、可控、以品质为导向，而不是嘈杂混乱的工业现场。",
  "Carton staging": "外箱待装区",
  "Packaging visuals communicate export discipline and help buyers imagine the final handoff more clearly.":
    "包装画面强化了出口纪律感，也帮助客户更清楚地想象最终交付状态。",
  "Shipment discipline": "出货纪律",
  "The last stage focused on consistent folding, carton coding, shipment marks, and loading sequence to match the buyer's receiving plan.":
    "最后阶段聚焦折叠一致性、外箱编码、运输唛头与装柜顺序，以匹配客户收货计划。",
  "Buyer packing list cross-check": "核对客户装箱清单",
  "Embroidery and label confirmation before sealing cartons": "封箱前确认刺绣与标签",
  "Export marks prepared for hotel receiving teams": "为酒店收货团队准备出口唛头",
  "Program Type": "项目类型",
  "Premium hotel bedding launch": "高端酒店床品启动项目",
  "Lead Flow": "推进节奏",
  "Sampling response window": "打样响应周期",
  "QC Focus": "质检重点",
  "3 Levels": "三级检验",
  "Inline, pre-pack, final review": "过程检、包装前检、终检",
  "Shipment Mode": "出货方式",
  "Export Cartons": "出口纸箱",
  "Hospitality fold set packing": "酒店折叠套装包装",
  "Washed Cotton Editorial Bedding Collection for DTC Brand Launch":
    "面向 DTC 品牌首发的水洗棉编辑式床品系列",
  "A softer, design-led plog entry showing color approval, tactile fabric review, and packaging styling for a direct-to-consumer launch.":
    "这是一篇更柔和、以设计为导向的 plog，展示直面消费者品牌首发项目中的颜色确认、面料手感评估与包装呈现。",
  "This story follows a washed cotton bedding program built around texture, tone matching, and an elevated unboxing presentation for a premium DTC brand.":
    "这个故事记录了一套围绕质感、色调匹配与高级开箱体验打造的水洗棉床品方案。",
  "Unlike hotel-focused projects, this program balanced tactile softness with visual merchandising details. The page highlights how material approval and packaging styling become part of the same editorial story.":
    "与酒店项目不同，这个方案需要在手感柔软度与视觉陈列细节之间保持平衡。页面强调面料确认与包装风格如何共同构成一套编辑式叙事。",
  "Softness had to survive scale": "柔软感必须经得起量产",
  "The buyer wanted washed cotton that looked relaxed but still felt premium after bulk production. Sample handling and dye tone review were treated as part of the storytelling, not hidden technical steps.":
    "客户希望水洗棉在大货生产后仍保持自然松弛且高端的手感。样品处理与染色调性确认被视为叙事的一部分，而不是隐藏的技术步骤。",
  "Packaging became part of the product": "包装成为产品的一部分",
  "Insert cards, fold structure, and label placement were documented visually to show how the finished program would feel in a brand customer's hands.":
    "通过对插卡、折叠结构与标签位置的视觉记录，去展示最终产品到达品牌客户手中时的真实感受。",
  "Color review": "颜色评审",
  "Pantone and washed finish tones were aligned with the buyer moodboard.":
    "Pantone 色号与水洗后色调根据客户情绪板统一调整。",
  "Sample iteration": "样品迭代",
  "Construction details and hand feel were tuned through multiple sampling rounds.":
    "工艺细节与手感通过多轮打样逐步调优。",
  "Bulk readiness": "大货准备",
  "Fabric behavior and packaging method were locked for repeatable production.":
    "为保证可重复量产，面料表现与包装方式在此阶段被正式锁定。",
  "Launch packing": "首发包装",
  "Retail-ready sets were folded, inserted, and boxed for launch inventory.":
    "面向零售首发的套装会完成折叠、插卡与装盒，进入首批库存。",
  "Material story": "材料故事",
  "The plog uses minimal imagery blocks to suggest tactile softness and premium textile character.":
    "plog 通过极简视觉模块传达触感柔和与高端家纺质感。",
  "Brand-ready packaging": "品牌化包装",
  "Packaging visuals shift the story from factory process into customer-facing experience.":
    "包装画面让故事从工厂流程延伸到终端客户体验。",
  "Retail shipment": "零售出货",
  "Shipments were grouped by SKU and colorway to support staged brand launch inventory and easier receiving.":
    "出货按 SKU 与色系分组，便于品牌分阶段上新与仓库接收。",
  "SKU packing sequence confirmation": "确认 SKU 装箱顺序",
  "Insert card and branding check": "检查插卡与品牌内容",
  "Carton outer mark review": "复核外箱唛头",
  "Collection Mode": "系列模式",
  "DTC Launch": "DTC 首发",
  "Editorial bedding assortment": "编辑式床品组合",
  "Washed Cotton": "水洗棉",
  "Soft-touch finish alignment": "柔软手感后整理确认",
  "Gift Set": "礼盒套装",
  "Brand-led presentation": "品牌导向呈现",
  "Reorder Path": "返单准备",
  Prepared: "已准备",
  "Bulk spec saved for repeat production": "已保存大货规格用于返单生产",
};

export function normalizeLocale(value?: string | null): Locale {
  return value === "zh" ? "zh" : "en";
}

export function translateText(locale: Locale, text: string) {
  if (locale === "zh") {
    return zhTextMap[text] ?? text;
  }

  return text;
}

export function createTranslator(locale: Locale) {
  return (text: string) => translateText(locale, text);
}

export function formatDateByLocale(locale: Locale, date: string) {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en", {
    year: "numeric",
    month: locale === "zh" ? "long" : "short",
    day: "numeric",
  }).format(new Date(date));
}
