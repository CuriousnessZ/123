import { NextResponse } from "next/server";

import { normalizeLocale, translateText } from "@/lib/i18n";
import { whatsappNumber } from "@/lib/site-data";

type UploadedFile = {
  originalName: string;
  size: number;
  type: string;
};

type InquiryRecord = {
  name: string;
  companyName: string;
  email: string;
  whatsAppNumber: string;
  country: string;
  productCategory: string;
  estimatedQuantity: string;
  fabricPreference: string;
  targetMarket: string;
  logoNeeded: string;
  packagingCustomization: string;
  newsletterOptIn: string;
  additionalRequirements: string;
  files: UploadedFile[];
};

export const runtime = "nodejs";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getUploadedFiles(formData: FormData): UploadedFile[] {
  return [
    formData.get("imageUpload"),
    ...formData.getAll("referenceImageUpload"),
    formData.get("techPackUpload"),
    formData.get("pdfUpload"),
  ]
    .filter((entry): entry is File => entry instanceof File && entry.size > 0)
    .map((file) => ({
      originalName: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    }));
}

function buildWhatsAppSummary(record: InquiryRecord, locale: "en" | "zh") {
  const t = (text: string) => translateText(locale, text);
  const lines = [
    t("Hello, I would like a quotation for a custom home textile project."),
    "",
    `${t("Name")}: ${record.name}`,
    `${t("Company")}: ${record.companyName}`,
    `${t("Email")}: ${record.email}`,
    `WhatsApp: ${record.whatsAppNumber}`,
    `${t("Country")}: ${record.country}`,
    `${t("Category")}: ${record.productCategory}`,
    `${t("Estimated Quantity")}: ${record.estimatedQuantity}`,
    `${t("Fabric Preference")}: ${record.fabricPreference || t("Not specified")}`,
    `${t("Target Market")}: ${record.targetMarket}`,
    `${t("Logo Needed")}: ${record.logoNeeded}`,
    `${t("Packaging Customization")}: ${record.packagingCustomization}`,
    `${t("Newsletter Updates")}: ${record.newsletterOptIn}`,
    `${t("Additional Requirements")}: ${record.additionalRequirements || t("None")}`,
  ];

  if (record.files.length > 0) {
    lines.push(
      `${t("Uploaded Files")}: ${record.files
        .map((file) => file.originalName)
        .join(", ")}`
    );
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = getUploadedFiles(formData);
    const locale = normalizeLocale(getString(formData, "locale"));

    const record: InquiryRecord = {
      name: getString(formData, "name"),
      companyName: getString(formData, "companyName"),
      email: getString(formData, "email"),
      whatsAppNumber: getString(formData, "whatsAppNumber"),
      country: getString(formData, "country"),
      productCategory: getString(formData, "productCategory"),
      estimatedQuantity: getString(formData, "estimatedQuantity"),
      fabricPreference: getString(formData, "fabricPreference"),
      targetMarket: getString(formData, "targetMarket"),
      logoNeeded: getString(formData, "logoNeeded"),
      packagingCustomization: getString(formData, "packagingCustomization"),
      newsletterOptIn: getString(formData, "newsletterOptIn"),
      additionalRequirements: getString(formData, "additionalRequirements"),
      files,
    };

    if (
      !record.name ||
      !record.companyName ||
      !record.email ||
      !record.whatsAppNumber ||
      !record.country ||
      !record.productCategory ||
      !record.estimatedQuantity ||
      !record.targetMarket
    ) {
      return NextResponse.json(
        {
          success: false,
          message: translateText(locale, "Please complete all required inquiry fields."),
        },
        { status: 400 }
      );
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppSummary(record, locale))}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: translateText(
          "en",
          "Unable to process inquiry right now. Please try again."
        ),
      },
      { status: 500 }
    );
  }
}
