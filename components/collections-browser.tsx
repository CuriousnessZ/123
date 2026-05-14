"use client";

import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { CollectionItem, ProductItem } from "@/lib/site-data";

type CollectionsBrowserProps = {
  collections: CollectionItem[];
  products: ProductItem[];
  eyebrow: string;
  title: string;
  description: string;
  allCollectionsLabel: string;
  allFabricsLabel: string;
  allUseCasesLabel: string;
  searchPlaceholder: string;
  clearLabel: string;
  showingLabel: string;
  filteredFromLabel: string;
  resultsLabel: string;
  fabricFilterLabel: string;
  useCaseFilterLabel: string;
  noResultsTitle: string;
  noResultsText: string;
  viewLabel: string;
  fabricLabel: string;
  moqLabel: string;
  leadTimeLabel: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pageLabel: string;
};

export function CollectionsBrowser({
  collections,
  products,
  eyebrow,
  title,
  description,
  allCollectionsLabel,
  allFabricsLabel,
  allUseCasesLabel,
  searchPlaceholder,
  clearLabel,
  showingLabel,
  filteredFromLabel,
  resultsLabel,
  fabricFilterLabel,
  useCaseFilterLabel,
  noResultsTitle,
  noResultsText,
  viewLabel,
  fabricLabel,
  moqLabel,
  leadTimeLabel,
  previousPageLabel,
  nextPageLabel,
  pageLabel,
}: CollectionsBrowserProps) {
  const [activeCollection, setActiveCollection] = useState<string>("all");
  const [activeFabric, setActiveFabric] = useState<string>("all");
  const [activeUseCase, setActiveUseCase] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const collectionNameMap = useMemo(
    () =>
      Object.fromEntries(
        collections.map((collection) => [collection.slug, collection.title])
      ),
    [collections]
  );

  const collectionScopedProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          activeCollection === "all" || product.collectionSlug === activeCollection
      ),
    [activeCollection, products]
  );

  const fabricOptions = useMemo(
    () =>
      Array.from(
        new Set(collectionScopedProducts.map((product) => product.fabric))
      ).sort(),
    [collectionScopedProducts]
  );

  const useCaseScopedProducts = useMemo(
    () =>
      collectionScopedProducts.filter(
        (product) => activeFabric === "all" || product.fabric === activeFabric
      ),
    [activeFabric, collectionScopedProducts]
  );

  const useCaseOptions = useMemo(
    () =>
      Array.from(new Set(useCaseScopedProducts.map((product) => product.useCase))).sort(),
    [useCaseScopedProducts]
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCollection =
        activeCollection === "all" || product.collectionSlug === activeCollection;
      const matchesFabric =
        activeFabric === "all" || product.fabric === activeFabric;
      const matchesUseCase =
        activeUseCase === "all" || product.useCase === activeUseCase;

      if (!matchesCollection || !matchesFabric || !matchesUseCase) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        product.name,
        product.tagline,
        product.summary,
        product.fabric,
        product.useCase,
        collectionNameMap[product.collectionSlug] ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [
    activeCollection,
    activeFabric,
    activeUseCase,
    collectionNameMap,
    products,
    query,
  ]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCollection, activeFabric, activeUseCase, query]);

  useEffect(() => {
    if (activeFabric !== "all" && !fabricOptions.includes(activeFabric)) {
      setActiveFabric("all");
    }
  }, [activeFabric, fabricOptions]);

  useEffect(() => {
    if (activeUseCase !== "all" && !useCaseOptions.includes(activeUseCase)) {
      setActiveUseCase("all");
    }
  }, [activeUseCase, useCaseOptions]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  }, [currentPage, filteredProducts]);

  const hasFilters =
    activeCollection !== "all" ||
    activeFabric !== "all" ||
    activeUseCase !== "all" ||
    query.trim().length > 0;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 rounded-[2.2rem] border border-stone-200 bg-[#fcfaf7] p-5 shadow-[0_18px_45px_rgba(20,16,12,0.04)] md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-full border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm text-stone-900 outline-none placeholder:text-stone-400 focus:border-stone-900"
              />
            </label>

            {hasFilters ? (
              <button
                type="button"
                onClick={() => {
                  setActiveCollection("all");
                  setActiveFabric("all");
                  setActiveUseCase("all");
                  setQuery("");
                }}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-900"
              >
                <X className="h-4 w-4" />
                {clearLabel}
              </button>
            ) : null}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveCollection("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCollection === "all"
                  ? "bg-stone-900 text-white"
                  : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300"
              }`}
            >
              {allCollectionsLabel}
            </button>
            {collections.map((collection) => (
              <button
                key={collection.slug}
                type="button"
                onClick={() => setActiveCollection(collection.slug)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCollection === collection.slug
                    ? "bg-stone-900 text-white"
                    : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300"
                }`}
              >
                {collection.title}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.32em] text-stone-400">
                {fabricFilterLabel}
              </span>
              <select
                value={activeFabric}
                onChange={(event) => setActiveFabric(event.target.value)}
                className="w-full rounded-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none focus:border-stone-900"
              >
                <option value="all">{allFabricsLabel}</option>
                {fabricOptions.map((fabric) => (
                  <option key={fabric} value={fabric}>
                    {fabric}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.32em] text-stone-400">
                {useCaseFilterLabel}
              </span>
              <select
                value={activeUseCase}
                onChange={(event) => setActiveUseCase(event.target.value)}
                className="w-full rounded-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none focus:border-stone-900"
              >
                <option value="all">{allUseCasesLabel}</option>
                {useCaseOptions.map((useCase) => (
                  <option key={useCase} value={useCase}>
                    {useCase}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="mt-5 text-sm text-stone-500">
            {showingLabel} {filteredProducts.length} {resultsLabel}
            {" · "}
            {filteredFromLabel} {products.length} {resultsLabel}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {paginatedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_18px_45px_rgba(20,16,12,0.04)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: product.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.22))]" />
                </div>
                <div className="space-y-4 p-5">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-stone-400">
                    {product.tagline}
                  </p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-stone-950">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">
                      {product.summary}
                    </p>
                  </div>
                  <div className="grid gap-4 border-t border-stone-200 pt-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">
                        {fabricLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">
                        {product.fabric}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">
                        {moqLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">
                        {product.moq}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-stone-400">
                        {leadTimeLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">
                        {product.leadTime}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
                    {viewLabel}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
              ))}
            </div>

            {totalPages > 1 ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={currentPage === 1}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {previousPageLabel}
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        currentPage === pageNumber
                          ? "bg-stone-900 text-white"
                          : "border border-stone-200 bg-white text-stone-700"
                      }`}
                    >
                      {pageLabel} {pageNumber}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.min(totalPages, page + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {nextPageLabel}
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-dashed border-stone-300 bg-[#fcfaf7] p-10 text-center">
            <h3 className="text-2xl font-semibold text-stone-950">
              {noResultsTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              {noResultsText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
