"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WordsPullUp } from "@/components/animations/WordsPullUp";

const brands = [
  {
    id: 1,
    name: "AXEL",
    tagline: "Logistics Platform",
    accent: "#FFE500",
    // Initial monogram mark
    mark: (
      <svg viewBox="0 0 80 80" className="w-14 h-14" fill="none">
        <line x1="10" y1="10" x2="70" y2="70" stroke="#1a1a18" strokeWidth="10" strokeLinecap="round" />
        <line x1="70" y1="10" x2="30" y2="50" stroke="#1a1a18" strokeWidth="10" strokeLinecap="round" />
        <line x1="10" y1="70" x2="30" y2="50" stroke="#1a1a18" strokeWidth="10" strokeLinecap="round" />
      </svg>
    ),
    // Hover decoration — node graph
    decoration: (
      <svg viewBox="0 0 280 120" className="w-full" fill="none">
        <circle cx="40" cy="80" r="18" fill="#FFE500" />
        <circle cx="130" cy="60" r="22" fill="#FFE500" />
        <circle cx="220" cy="85" r="16" fill="#FFE500" />
        <line x1="58" y1="80" x2="108" y2="65" stroke="#FFE500" strokeWidth="4" />
        <line x1="152" y1="65" x2="204" y2="82" stroke="#FFE500" strokeWidth="4" />
        {/* inner icons */}
        <text x="24" y="85" fill="#000" fontSize="13" fontWeight="700">%</text>
        <text x="118" y="66" fill="#000" fontSize="14" fontWeight="700">✓</text>
        <text x="208" y="91" fill="#000" fontSize="12" fontWeight="700">↗</text>
        {/* small circles */}
        <circle cx="90" cy="100" r="5" fill="#FFE500" opacity="0.4" />
        <circle cx="170" cy="40" r="4" fill="#FFE500" opacity="0.3" />
      </svg>
    ),
    rotation: -7,
    offset: -1,
    zIndex: 1,
  },
  {
    id: 2,
    name: "MYRKLE",
    tagline: "Fintech Infrastructure",
    accent: "#00FF41",
    mark: (
      <svg viewBox="0 0 80 60" className="w-16 h-12" fill="none">
        <text x="0" y="52" fill="#1a1a18" fontSize="52" fontWeight="900" fontFamily="sans-serif">M</text>
      </svg>
    ),
    decoration: (
      <svg viewBox="0 0 280 80" className="w-full" fill="none">
        {/* Diamond / geometric pattern */}
        {[0, 56, 112, 168, 224].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            <polygon points="28,2 54,28 28,54 2,28" stroke="#00FF41" strokeWidth="2.5" fill="none" />
            <polygon points="28,12 44,28 28,44 12,28" stroke="#00FF41" strokeWidth="1.5" fill="none" opacity="0.5" />
          </g>
        ))}
      </svg>
    ),
    rotation: 0,
    offset: 0,
    zIndex: 3,
  },
  {
    id: 3,
    name: "WAYMARK",
    tagline: "Real Estate Tech",
    accent: "#FFFFFF",
    mark: (
      <svg viewBox="0 0 90 60" className="w-16 h-12" fill="none">
        <text x="0" y="52" fill="#1a1a18" fontSize="50" fontWeight="900" fontFamily="sans-serif">W</text>
        <circle cx="74" cy="38" r="9" fill="#1a1a18" />
        <text x="69" y="43" fill="#fff" fontSize="9" fontWeight="700">♟</text>
      </svg>
    ),
    decoration: (
      <svg viewBox="0 0 280 90" className="w-full" fill="none">
        {/* Large watermark number */}
        <text x="-8" y="85" fill="#fff" fontSize="96" fontWeight="900" fontFamily="sans-serif" opacity="0.08">1000</text>
      </svg>
    ),
    rotation: 7,
    offset: 1,
    zIndex: 2,
  },
];

function BrandCard({ brand, index }: { brand: (typeof brands)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        rotate: hovered ? 0 : brand.rotation,
        y: hovered ? -28 : 0,
        scale: hovered ? 1.06 : 1,
        zIndex: hovered ? 10 : brand.zIndex,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ zIndex: brand.zIndex, originX: "50%", originY: "100%" }}
      className="relative w-[200px] sm:w-[220px] md:w-[240px] h-[300px] sm:h-[330px] md:h-[360px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* ── FRONT — white card ── */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center shadow-xl"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
      >
        <div className="flex items-center justify-center">
          {brand.mark}
        </div>
      </motion.div>

      {/* ── BACK — dark card ── */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 rounded-2xl flex flex-col justify-between overflow-hidden"
        style={{ backgroundColor: "#080808" }}
      >
        {/* Brand name — top area */}
        <div className="p-6 pt-7">
          <p
            className="text-xs font-mono uppercase tracking-widest mb-3 opacity-40"
            style={{ color: brand.accent }}
          >
            Client
          </p>
          <h3
            className="text-2xl font-bold tracking-tight leading-none"
            style={{ color: brand.accent }}
          >
            {brand.name}
          </h3>
          <p className="text-gray-600 text-[10px] font-mono mt-1">{brand.tagline}</p>
        </div>

        {/* Decoration — bottom area */}
        <div className="mt-auto overflow-hidden">
          {brand.decoration}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function BrandsMarquee() {
  return (
    <section className="bg-black py-24 md:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-20">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium block mb-4">
          Brands
        </span>
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium">
          <WordsPullUp
            text="Companies that trusted the system."
            className="text-lime"
          />
        </div>
      </div>

      {/* Fanned card display — centered */}
      <div className="flex items-end justify-center" style={{ minHeight: "420px" }}>
        <div className="relative flex items-end justify-center gap-[-40px]" style={{ width: "fit-content" }}>
          {brands.map((brand, i) => (
            <div
              key={brand.id}
              style={{
                marginLeft: i === 0 ? 0 : "-40px",
                position: "relative",
              }}
            >
              <BrandCard brand={brand} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
