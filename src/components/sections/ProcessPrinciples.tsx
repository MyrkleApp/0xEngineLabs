"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01 — STEP",
    title: "Diagnose.",
    body: "We map the system before we touch it. Constraints, bottlenecks, and failure points are identified and documented. Nothing is assumed.",
  },
  {
    number: "02 — STEP",
    title: "Build.",
    body: "We implement against defined performance and reliability targets. Every layer is intentional. Scope does not drift.",
  },
  {
    number: "03 — STEP",
    title: "Scale.",
    body: "We harden until the system is boring. Boring means stable. Stable means done. Growth and load are no longer events — they are conditions the system was built for.",
  },
];

const principlesList = [
  { text: "Performance over ", accent: "abstraction.", accentColor: "#02FFE4" },
  { text: "Systems must survive load, not ", accent: "demos.", accentColor: "#008F82" },
  { text: "Every layer is ", accent: "intentional.", accentColor: "#CCFFF8" },
  { text: "Complexity is controlled, not ", accent: "accumulated.", accentColor: "#02FFE4" },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-24 md:py-32 px-4 md:px-6 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium block mb-4">
            Execution Model
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            <span className="text-ink">How We </span>
            <span className="text-primary">Work.</span>
          </h2>
        </div>

        {/* Three-column steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: "0.5px solid #C8E2DD" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="py-10 pr-8 flex flex-col gap-4"
              style={{
                borderRight: i < steps.length - 1 ? "0.5px solid #C8E2DD" : "none",
                paddingLeft: i === 0 ? "0" : "2rem",
              }}
            >
              <h3 className="text-ink text-xl sm:text-2xl md:text-3xl font-medium">
                {step.title}
              </h3>
              <p className="text-muted text-base leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section id="principles" className="bg-background py-24 md:py-32 px-4 md:px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium block mb-12">
          Principles
        </span>

        {/* Stacked list with hairline dividers */}
        <div style={{ borderTop: "0.5px solid #C8E2DD" }}>
          {principlesList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center justify-between py-6 md:py-8 cursor-default transition-colors duration-300 hover:text-primary"
              style={{ borderBottom: "0.5px solid #C8E2DD" }}
            >
              <p
                className="text-ink group-hover:text-primary transition-colors duration-300"
                style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.15 }}
              >
                {item.text}
                <span style={{ color: item.accentColor }}>{item.accent}</span>
              </p>
              <span
                className="font-mono text-[9px] ml-8 flex-shrink-0 tabular-nums"
                style={{ color: "rgba(26,26,24,0.20)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
