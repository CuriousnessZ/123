"use client";

import { ArrowRight, LoaderCircle, Paperclip, UploadCloud } from "lucide-react";
import { useMemo, useState } from "react";

import type { Locale } from "@/lib/i18n";
import { createTranslator } from "@/lib/i18n";

type InquiryResponse = {
  success: boolean;
  whatsappUrl?: string;
  message?: string;
};

const categoryOptions = [
  "Bedding Sets",
  "Duvet Covers",
  "Pillowcases",
  "Blankets",
  "Towels",
  "Curtains",
  "Hotel Textiles",
  "Embroidery Collection",
];

const quantityOptions = [
  "Under 300 pcs",
  "300 - 1000 pcs",
  "1000 - 5000 pcs",
  "5000+ pcs",
];

const marketOptions = [
  "Amazon",
  "Shopify / DTC",
  "Wholesale",
  "Hospitality",
  "Interior Design",
  "Distribution",
];

function FieldLabel({
  label,
  optional,
  optionalLabel = "Optional",
}: {
  label: string;
  optional?: boolean;
  optionalLabel?: string;
}) {
  return (
    <label className="mb-2 block text-sm font-medium text-stone-800">
      {label}
      {optional ? (
        <span className="ml-1 text-stone-500">({optionalLabel})</span>
      ) : null}
    </label>
  );
}

export function InquiryForm({ locale }: { locale: Locale }) {
  const t = createTranslator(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState({
    imageUpload: 0,
    referenceImageUpload: 0,
    techPackUpload: 0,
    pdfUpload: 0,
  });

  const totalSelectedFiles = useMemo(
    () => Object.values(selectedFiles).reduce((sum, count) => sum + count, 0),
    [selectedFiles]
  );

  const fileSummary = useMemo(() => {
    if (totalSelectedFiles === 0) {
      return t("Upload reference images, tech packs, or PDFs");
    }

    return locale === "zh"
      ? `已选择 ${totalSelectedFiles} 个文件`
      : `${totalSelectedFiles} file${totalSelectedFiles > 1 ? "s" : ""} selected`;
  }, [locale, t, totalSelectedFiles]);

  function updateFileCount(
    field:
      | "imageUpload"
      | "referenceImageUpload"
      | "techPackUpload"
      | "pdfUpload",
    count: number
  ) {
    setSelectedFiles((current) => ({
      ...current,
      [field]: count,
    }));
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as InquiryResponse;

      if (!response.ok || !result.success || !result.whatsappUrl) {
        throw new Error(result.message || t("Unable to submit your inquiry."));
      }

      setFeedback(t("Opening WhatsApp with your inquiry summary..."));
      window.location.href = result.whatsappUrl;
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : t("Something went wrong while sending your inquiry.")
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-6 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-[0_30px_80px_rgba(20,16,12,0.08)] backdrop-blur md:p-8"
    >
      <input type="hidden" name="locale" value={locale} />
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <FieldLabel label={t("Name")} />
          <input name="name" required className="input-field" placeholder={t("Your full name")} />
        </div>
        <div>
          <FieldLabel label={t("Company Name")} />
          <input name="companyName" required className="input-field" placeholder={t("Your company")} />
        </div>
        <div>
          <FieldLabel label={t("Email")} />
          <input name="email" type="email" required className="input-field" placeholder={t("name@company.com")} />
        </div>
        <div>
          <FieldLabel label={t("WhatsApp Number")} />
          <input name="whatsAppNumber" required className="input-field" placeholder={t("+1 234 567 890")} />
        </div>
        <div>
          <FieldLabel label={t("Country")} />
          <input name="country" required className="input-field" placeholder={t("Target country / region")} />
        </div>
        <div>
          <FieldLabel label={t("Product Category")} />
          <select name="productCategory" defaultValue="" required className="input-field">
            <option value="" disabled>
              {t("Select a category")}
            </option>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {t(option)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel label={t("Estimated Quantity")} />
          <select name="estimatedQuantity" defaultValue="" required className="input-field">
            <option value="" disabled>
              {t("Select an estimate")}
            </option>
            {quantityOptions.map((option) => (
              <option key={option} value={option}>
                {t(option)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel label={t("Fabric Preference")} />
          <input name="fabricPreference" className="input-field" placeholder={t("Washed cotton, sateen, microfiber...")} />
        </div>
        <div>
          <FieldLabel label={t("Target Market")} />
          <select name="targetMarket" defaultValue="" required className="input-field">
            <option value="" disabled>
              {t("Select your channel")}
            </option>
            {marketOptions.map((option) => (
              <option key={option} value={option}>
                {t(option)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel label={t("Logo Needed?")} />
          <select name="logoNeeded" defaultValue={t("Yes")} className="input-field">
            <option>{t("Yes")}</option>
            <option>{t("No")}</option>
          </select>
        </div>
        <div>
          <FieldLabel label={t("Packaging Customization?")} />
          <select name="packagingCustomization" defaultValue={t("Yes")} className="input-field">
            <option>{t("Yes")}</option>
            <option>{t("No")}</option>
          </select>
        </div>
        <div>
          <FieldLabel label={t("Newsletter Updates")} optional optionalLabel={t("Optional")} />
          <select name="newsletterOptIn" defaultValue={t("Yes")} className="input-field">
            <option>{t("Yes")}</option>
            <option>{t("No")}</option>
          </select>
        </div>
      </div>

      <div>
        <FieldLabel label={t("Additional Requirements")} />
        <textarea
          name="additionalRequirements"
          rows={5}
          className="input-field min-h-32 resize-none"
          placeholder={t(
            "Share product specs, certifications, packaging goals, target pricing, lead time needs, or any other sourcing details."
          )}
        />
      </div>

      <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50/80 p-4">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white">
            <UploadCloud className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900">{t("Upload buyer files")}</p>
            <p className="text-sm text-stone-600">{fileSummary}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <FieldLabel label={t("Image Upload")} optional optionalLabel={t("Optional")} />
            <input
              name="imageUpload"
              type="file"
              accept="image/*"
              className="file-field"
              onChange={(event) =>
                updateFileCount("imageUpload", event.target.files?.length ?? 0)
              }
            />
          </div>
          <div>
            <FieldLabel label={t("Reference Image Upload")} optional optionalLabel={t("Optional")} />
            <input
              name="referenceImageUpload"
              type="file"
              accept="image/*"
              multiple
              className="file-field"
              onChange={(event) =>
                updateFileCount(
                  "referenceImageUpload",
                  event.target.files?.length ?? 0
                )
              }
            />
          </div>
          <div>
            <FieldLabel label={t("Tech Pack Upload")} optional optionalLabel={t("Optional")} />
            <input
              name="techPackUpload"
              type="file"
              accept=".pdf,.ai,.psd,.doc,.docx,.xls,.xlsx,.zip"
              className="file-field"
              onChange={(event) =>
                updateFileCount(
                  "techPackUpload",
                  event.target.files?.length ?? 0
                )
              }
            />
          </div>
          <div>
            <FieldLabel label={t("PDF Upload")} optional optionalLabel={t("Optional")} />
            <input
              name="pdfUpload"
              type="file"
              accept=".pdf"
              className="file-field"
              onChange={(event) =>
                updateFileCount("pdfUpload", event.target.files?.length ?? 0)
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-stone-200 pt-6 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2">
          <Paperclip className="h-4 w-4" />
          {t(
            "Your inquiry summary is prepared for WhatsApp. Uploaded files are not stored online in this display-site version."
          )}
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-500"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              {t("Sending Inquiry")}
            </>
          ) : (
            <>
              {t("Get Instant Quotation")}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {feedback ? <p className="text-sm text-stone-700">{feedback}</p> : null}
    </form>
  );
}
