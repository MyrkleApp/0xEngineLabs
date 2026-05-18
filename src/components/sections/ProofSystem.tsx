"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "@/components/animations/WordsPullUpMultiStyle";
import { ScrollText } from "@/components/animations/AnimatedLetter";

const rightCards = [
  {
    label: "02 — CASE",
    title: "Backend Throughput",
    checklist: [
      "Reduced request latency across critical endpoints",
      "Stabilized response times under concurrent traffic",
      "Improved throughput without increasing infrastructure cost",
      "Resolved cascade failures under sustained peak load",
    ],
  },
  {
    label: "03 — CASE",
    title: "Infrastructure Rearchitecture",
    checklist: [
      "Migrated monolith into fault-isolated modular services",
      "Introduced recovery layers across service boundaries",
      "Improved deployment consistency across all environments",
      "Zero regression events post-migration",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: EASE },
  }),
};

export function ProofSystem() {
  return (
    <section id="proof" className="relative bg-[#E8F7F3] py-24 md:py-32 px-4 md:px-6 w-full overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-6">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium block mb-4">
            Proof
          </span>
          <div className="flex flex-col items-start gap-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Built systems.", className: "text-ink" },
                { text: " Verified under load.", className: "text-primary" },
              ]}
            />
            <WordsPullUpMultiStyle
              segments={[{ text: "No post-deployment failures. No theoretical benchmarks.", className: "text-muted text-sm sm:text-base md:text-lg font-mono mt-2" }]}
            />
          </div>
        </div>

        {/* Animated body */}
        <div className="max-w-3xl mb-16">
          <ScrollText
            text="We optimize and restructure systems to handle real concurrency, sustained traffic, and operational stress. The measure is not feature delivery — it is system behavior under load. Built under constraint. Verified under load. Handed over. Still running."
            className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed"
          />
        </div>

        {/* Asymmetric Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {/* LEFT — Dominant dark card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="relative bg-surface border border-line rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[420px] overflow-hidden shadow-[0_24px_80px_rgba(2,255,228,0.14)]"
          >
            {/* 0x watermark */}
            <span
              className="absolute bottom-0 right-2 text-[140px] font-bold leading-none select-none pointer-events-none"
              style={{ color: "#081716", opacity: 0.04 }}
            >
              0x
            </span>
            <div>
              <span className="text-primary text-[10px] uppercase tracking-widest font-medium block mb-6">
                01 — SYSTEM
              </span>
              <h3 className="text-ink text-2xl sm:text-3xl font-medium mb-4">
                Distributed System Flow
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Service-to-service communication structured for reliability and fault tolerance under concurrent load. Engineered for predictable behavior in production, not controlled environments.
              </p>
            </div>
            <p className="text-secondary font-mono text-[10px] mt-8">
              Resilient execution layers.
            </p>
          </motion.div>

          {/* RIGHT — two stacked cards */}
          <div className="flex flex-col gap-3">
            {rightCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i + 1}
                className="bg-surface border border-line rounded-2xl p-7 flex flex-col"
              >
                <span className="text-ink/40 text-[10px] uppercase tracking-widest font-medium block mb-4">
                  {card.label}
                </span>
                <h3 className="text-ink text-lg font-medium mb-5">{card.title}</h3>
                <ul className="flex flex-col gap-2.5 mb-5">
                  {card.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-ink/50 w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-ink/60 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-ink font-mono text-[10px] mt-auto hover:text-primary transition-colors"
                >
                  View Details
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1 -rotate-45" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Card 04 — full width */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={3}
          className="bg-surface border border-line rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-[0_24px_80px_rgba(2,255,228,0.14)]"
        >
          <div>
            <span className="text-primary text-[10px] uppercase tracking-widest font-medium block mb-4">
              04 — CASE
            </span>
            <h3 className="text-ink text-xl sm:text-2xl font-medium mb-3">Automation Pipeline</h3>
            <p className="text-muted text-sm leading-relaxed">
              Replaced manual operational workflows with structured execution pipelines. Reduced overhead. Introduced monitoring and failure alerting. Systems now self-report before humans notice.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <ul className="flex flex-col gap-3">
              {[
                "Eliminated manual execution dependencies",
                "Reduced operational overhead by structured scheduling",
                "Monitoring and failure alert systems deployed",
                "Execution consistency across all pipeline stages",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-muted text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted font-mono text-[9px] mt-6">Metrics available on request.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
