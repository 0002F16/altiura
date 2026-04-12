"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { listings } from "./listings/data";

const PRICE_OPTIONS = [
  { label: "Any Price", value: "any" },
  { label: "Up to $3,000", value: "3000" },
  { label: "Up to $4,000", value: "4000" },
  { label: "Up to $5,000", value: "5000" },
  { label: "Up to $6,000", value: "6000" },
];

const BEDS_OPTIONS = [
  { label: "Any Beds", value: "any" },
  { label: "1+", value: "1" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
];

const TYPE_OPTIONS = [
  { label: "Any Type", value: "any" },
  { label: "Multi-Family", value: "Multi-Family" },
  { label: "Condo", value: "Condo" },
  { label: "Townhouse", value: "Townhouse" },
];

const selectCls =
  "font-body text-[9px] tracking-[0.2em] uppercase border border-black/10 px-4 py-2.5 bg-transparent outline-none cursor-pointer hover:border-black/30 transition-colors duration-300 appearance-none pr-8 relative";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [beds, setBeds] = useState("any");
  const [maxPrice, setMaxPrice] = useState("any");
  const [type, setType] = useState("any");

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        l.address.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q) ||
        l.state.toLowerCase().includes(q);
      const matchesBeds =
        beds === "any" || l.beds >= parseInt(beds);
      const matchesPrice =
        maxPrice === "any" || l.price <= parseInt(maxPrice);
      const matchesType = type === "any" || l.type === type;
      return matchesQuery && matchesBeds && matchesPrice && matchesType;
    });
  }, [query, beds, maxPrice, type]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 md:px-10 py-6 md:py-8 flex items-center justify-between">
        <span className="font-heading text-xl tracking-tightest font-light text-black">
          Altiura
        </span>
        <a
          href="mailto:support@altiura.com"
          className="font-body text-[9px] tracking-[0.25em] uppercase text-neutral-400 hover:text-black transition-colors duration-300"
        >
          Contact
        </a>
      </header>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-20 px-6 md:px-10 max-w-5xl mx-auto">
        <div className="reveal d1">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-neutral-300 mb-5">
            Residential Leasing &middot; New Jersey
          </p>
          <h1 className="font-heading text-[clamp(3.5rem,9vw,7rem)] font-light tracking-tightest leading-[0.88] mb-12 md:mb-14">
            Curated Homes<br />
            <em>Worth Living In</em>
          </h1>
        </div>

        {/* Search bar */}
        <div className="reveal d2">
          <div className="flex border border-black/12 focus-within:border-black transition-colors duration-400">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city, address, or neighborhood…"
              className="flex-1 font-body text-sm font-light px-6 py-5 outline-none bg-transparent placeholder:text-neutral-300 min-w-0"
            />
            <button
              onClick={() => {}}
              className="font-body text-[9px] tracking-[0.3em] uppercase bg-black text-white px-7 py-5 hover:bg-neutral-800 transition-colors duration-400 whitespace-nowrap shrink-0"
            >
              Search
            </button>
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="relative">
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className={selectCls}
              >
                {BEDS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 text-[8px]">▾</span>
            </div>

            <div className="relative">
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className={selectCls}
              >
                {PRICE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 text-[8px]">▾</span>
            </div>

            <div className="relative">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={selectCls}
              >
                {TYPE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 text-[8px]">▾</span>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <main className="px-6 md:px-10 pb-28 max-w-5xl mx-auto">

        {/* Section label + count */}
        <div className="flex items-baseline justify-between border-b border-black/8 pb-6 mb-12 reveal d3">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-neutral-400">
            Available Properties
          </p>
          <p className="font-heading text-xl tracking-tightest font-light">
            {filtered.length}{" "}
            <span className="text-neutral-300">
              {filtered.length === 1 ? "listing" : "listings"}
            </span>
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 reveal d4">
            {filtered.map((listing) => (
              <Link
                key={listing.slug}
                href={`/listings/${listing.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative w-full aspect-[3/2] overflow-hidden mb-5">
                  <Image
                    src={listing.heroImage}
                    alt={listing.address}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Type badge */}
                  <span className="absolute top-4 left-4 font-body text-[8px] tracking-[0.25em] uppercase bg-white/90 text-black px-3 py-1.5 backdrop-blur-sm">
                    {listing.type}
                  </span>
                </div>

                {/* Meta */}
                <div>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
                    {listing.city}, {listing.state}
                  </p>
                  <h2 className="font-heading text-2xl md:text-[1.75rem] tracking-tightest font-light leading-[1] mb-4 group-hover:opacity-60 transition-opacity duration-300">
                    {listing.address}
                  </h2>
                  <div className="flex items-baseline justify-between border-t border-black/6 pt-4">
                    <p className="font-heading text-xl tracking-tightest font-light">
                      ${listing.price.toLocaleString()}
                      <span className="font-body text-[9px] tracking-[0.2em] uppercase text-neutral-400 ml-1.5">
                        / mo
                      </span>
                    </p>
                    <p className="font-body text-[9px] tracking-[0.2em] uppercase text-neutral-300">
                      {listing.beds} bd &middot; {listing.baths} ba
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="font-heading text-4xl tracking-tightest font-light text-neutral-200">
              No properties found
            </p>
            <button
              onClick={() => {
                setQuery("");
                setBeds("any");
                setMaxPrice("any");
                setType("any");
              }}
              className="mt-6 font-body text-[9px] tracking-[0.25em] uppercase text-neutral-400 hover:text-black transition-colors duration-300 border-b border-neutral-200 hover:border-black pb-0.5"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 px-6 md:px-10 py-8">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="font-heading text-base tracking-tightest font-light text-neutral-300">
            Altiura
          </p>
          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-neutral-200">
            &copy; 2026
          </p>
        </div>
      </footer>
    </>
  );
}
