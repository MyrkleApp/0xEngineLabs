"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const domains = [
  {
    number: "01",
    title: "Blockchain Systems",
    body: "Protocol-aware products, wallet flows, transaction services, and backend systems designed for production reliability.",
    checklist: [
      "Transaction-aware system architecture",
      "Indexer, API, and event pipeline design",
      "Smart contract integration with operational guardrails",
      "Full lifecycle ownership from spec to deployment",
    ],
  },
  {
    number: "02",
    title: "Protocol Infrastructure",
    body: "Scalable infrastructure for on-chain and off-chain workloads that need predictable behavior under load.",
    checklist: [
      "Modular service and worker design",
      "RPC, queue, and database scaling paths",
      "Fault isolation across protocol boundaries",
    ],
  },
  {
    number: "03",
    title: "Backend Modernization",
    body: "Reworking fragile product backends into modern infrastructure that can support blockchain integrations without disruption.",
    checklist: [
      "Legacy system assessment and mapping",
      "Phased migration without downtime",
      "Modern architecture with chain-aware interfaces",
    ],
  },
  {
    number: "04",
    title: "Process Automation",
    body: "Eliminating operational inefficiencies through structured, monitorable automation for deployments, data flows, and blockchain operations.",
    checklist: [
      "Workflow mapping and bottleneck identification",
      "Structured pipeline architecture",
      "Monitoring, alerting, and failure handling built in",
      "Execution consistency at scale",
    ],
  },
];

function DomainRow({ domain, index }: { domain: (typeof domains)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-12 gap-x-8 gap-y-4 py-10 md:py-12 cursor-default transition-colors duration-300"
      style={{ borderTop: "0.5px solid #BFD8D3" }}
    >
      {/* Hover background wash */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ background: "rgba(2,255,228,0.08)" }}
      />

      {/* Number */}
      <div className="col-span-12 sm:col-span-1 flex items-start pt-1">
        <span
          className="font-mono text-sm uppercase tracking-widest transition-colors duration-300"
          style={{ color: hovered ? "#008F82" : "rgba(8,23,22,0.35)" }}
        >
          {domain.number}
        </span>
      </div>

      {/* Title + Body */}
      <div className="col-span-12 sm:col-span-4">
        <h3
          className="font-medium leading-tight mb-3 transition-colors duration-300"
          style={{
            fontSize: "clamp(18px, 2vw, 26px)",
            color: hovered ? "#008F82" : "#081716",
          }}
        >
          {domain.title}
        </h3>
        <p className="text-muted text-base leading-relaxed max-w-xs">
          {domain.body}
        </p>
      </div>

      {/* Checklist */}
      <div className="col-span-12 sm:col-span-6 sm:col-start-7 flex flex-col justify-center gap-3">
        {domain.checklist.map((item, i) => (
          <motion.div
            key={i}
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="flex items-center gap-3"
          >
            <span
              className="flex-shrink-0 w-1 h-1 rounded-full transition-colors duration-300"
              style={{ backgroundColor: hovered ? "#02FFE4" : "rgba(8,23,22,0.2)" }}
            />
            <span
              className="text-base leading-snug transition-colors duration-300"
              style={{ color: hovered ? "#081716" : "rgba(8,23,22,0.58)" }}
            >
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Arrow indicator */}
      <div className="hidden sm:flex col-span-1 items-center justify-end">
        <motion.span
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
          transition={{ duration: 0.25 }}
          className="text-primary text-sm"
        >
          -&gt;
        </motion.span>
      </div>
    </motion.div>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-background py-24 md:py-32 px-4 md:px-6 w-full">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-primary text-sm uppercase tracking-widest font-medium block mb-5">
            Capabilities
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-4xl">
            <div>
              <h2 className="text-ink font-medium leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                Four domains.
              </h2>
              <h2 className="text-muted font-medium leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                No overlap. No generalism.
              </h2>
            </div>
            <p className="text-muted font-mono text-sm max-w-xs flex-shrink-0 pb-1">
              Every engagement lives inside one of these.<br />We do not stretch scope.
            </p>
          </div>
        </div>

        {/* Domain rows */}
        <div>
          {domains.map((domain, i) => (
            <DomainRow key={domain.number} domain={domain} index={i} />
          ))}
          {/* Bottom hairline */}
          <div style={{ borderTop: "0.5px solid #BFD8D3" }} />
        </div>

      </div>
    </section>
  );
}
