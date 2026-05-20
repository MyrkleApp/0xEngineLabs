"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Footprints, ShieldCheck } from "lucide-react";
import { WordsPullUp } from "@/components/animations/WordsPullUp";

type Brand = {
  name: string;
  url: string;
  tagline: string;
  accent: string;
  mark: React.ReactNode;
  preview: React.ReactNode;
};

const brands: Brand[] = [
  {
    name: "Ferrous",
    url: "https://ferrous.app",
    tagline: "Global market access",
    accent: "#02FFE4",
    mark: (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061F1D] text-2xl font-bold text-[#02FFE4]">
        F
      </div>
    ),
    preview: (
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="h-12 rounded-xl border border-[#02FFE4]/25 bg-[#02FFE4]/10"
          />
        ))}
      </div>
    ),
  },
  {
    name: "Safetally",
    url: "https://safetally.app",
    tagline: "AI safety companion",
    accent: "#3F83F8",
    mark: (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#3F83F8]">
        <ShieldCheck className="h-8 w-8" />
      </div>
    ),
    preview: (
      <div className="relative h-28 rounded-3xl bg-linear-to-br from-[#F8FBFF] to-[#DCEBFF] p-4">
        <div className="absolute right-4 top-4 h-16 w-10 rounded-2xl bg-[#0B1633]" />
        <div className="flex flex-col gap-2">
          <span className="h-2 w-24 rounded-full bg-[#3F83F8]/35" />
          <span className="h-2 w-32 rounded-full bg-[#081716]/15" />
          <span className="h-8 w-8 rounded-full bg-[#3F83F8]" />
        </div>
      </div>
    ),
  },
  {
    name: "Walkit",
    url: "https://walkitapp.com",
    tagline: "Lifestyle movement app",
    accent: "#5978E8",
    mark: (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9EEFF] text-[#5978E8]">
        <Footprints className="h-8 w-8" />
      </div>
    ),
    preview: (
      <div className="relative h-28 overflow-hidden rounded-3xl bg-linear-to-br from-[#EEF2FF] to-[#C9D5FF]">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#5978E8]/20" />
        <div className="absolute bottom-8 left-8 h-10 w-10 rounded-full bg-[#5978E8]" />
        <div className="absolute bottom-10 left-20 h-2 w-28 rounded-full bg-[#5978E8]/60" />
      </div>
    ),
  },
  {
    name: "Myrkle",
    url: "https://myrkle.app",
    tagline: "Web3 access hub",
    accent: "#00FF41",
    mark: (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061F1D] text-3xl font-black text-[#00FF41]">
        M
      </div>
    ),
    preview: (
      <svg viewBox="0 0 320 110" className="h-28 w-full" fill="none">
        {[0, 58, 116, 174, 232].map((x, i) => (
          <g key={i} transform={`translate(${x + 20}, 22)`}>
            <polygon points="28,2 54,28 28,54 2,28" stroke="#00FF41" strokeWidth="3" />
            <polygon points="28,12 44,28 28,44 12,28" stroke="#00FF41" strokeWidth="1.5" opacity="0.55" />
          </g>
        ))}
      </svg>
    ),
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  return (
    <motion.a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      className="group relative flex h-90 w-[78vw] scrollbar-none shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[0_18px_60px_rgba(2,255,228,0.14)] transition-colors hover:border-primary/70 sm:w-[360px] lg:w-[420px]"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 20% 0%, ${brand.accent}22, transparent 58%)`,
        }}
      />

      <div className="relative z-10 flex items-start justify-between gap-6">
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-muted">
            Client
          </p>
          <h3 className="text-3xl font-semibold tracking-tight text-ink">
            {brand.name}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted">{brand.tagline}</p>
        </div>
        {brand.mark}
      </div>

      <div className="relative z-10 rounded-3xl border border-line bg-surface-tinted p-4 transition-transform duration-500 group-hover:-translate-y-1">
        {brand.preview}
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-line pt-5">
        <span className="font-mono text-sm uppercase tracking-widest text-muted">
          {new URL(brand.url).hostname}
        </span>
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: brand.accent }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
}

export function BrandsMarquee() {
  return (
    <section className="bg-[#E8F7F3] py-24 md:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-14">
        <span className="text-primary text-sm uppercase tracking-widest font-medium block mb-4">
          Brands
        </span>
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium">
          <WordsPullUp
            text="Companies that trusted the system."
            className="text-ink"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto scrollbar-none scroll-px-4 snap-x snap-mandatory px-4 pb-4 md:px-6">
        <div className="mx-auto flex max-w-7xl gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <BrandCard key={brand.name} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
