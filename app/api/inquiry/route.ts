import { NextResponse } from "next/server";

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

function buildWhatsAppSummary(record: InquiryRecord) {
  const lines = [
    "Hello, I would like a quotation for a custom home textile project.",
    "",
    `Name: ${record.name}`,
    `Company: ${record.companyName}`,
    `Email: ${record.email}`,
    `WhatsApp: ${record.whatsAppNumber}`,
    `Country: ${record.country}`,
    `Category: ${record.productCategory}`,
    `Estimated Quantity: ${record.estimatedQuantity}`,
    `Fabric Preference: ${record.fabricPreference || "Not specified"}`,
    `Target Market: ${record.targetMarket}`,
    `Logo Needed: ${record.logoNeeded}`,
    `Packaging Customization: ${record.packagingCustomization}`,
    `Newsletter Updates: ${record.newsletterOptIn}`,
    `Additional Requirements: ${record.additionalRequirements || "None"}`,
  ];

  if (record.files.length > 0) {
    lines.push(
      `Uploaded Files: ${record.files.map((file) => file.originalName).join(", ")}`
    );
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = getUploadedFiles(formData);

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
          message: "Please complete all required inquiry fields.",
        },
        { status: 400 }
      );
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppSummary(record))}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process inquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
