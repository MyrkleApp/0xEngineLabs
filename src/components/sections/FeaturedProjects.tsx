"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const featuredProjects = [
  {
    id: "1",
    number: "01",
    title: "High-Throughput Payment Gateway",
    description:
      "Rebuilt a legacy payment processing service to handle 40,000 concurrent requests. Reduced p99 latency from 3.2s to 180ms under peak load.",
    tags: ["Go", "PostgreSQL", "Redis", "gRPC"],
    accent: "#FE5F55",
    size: "large",
  },
  {
    id: "2",
    number: "02",
    title: "Distributed Notification Engine",
    description:
      "Designed and shipped a multi-channel notification pipeline handling 2M+ events/day with guaranteed delivery and structured failure handling.",
    tags: ["Kafka", "Node.js", "MongoDB"],
    accent: "#F0B67F",
    size: "small",
  },
  {
    id: "3",
    number: "03",
    title: "Infrastructure Rearchitecture",
    description:
      "Migrated a monolithic e-commerce backend into 7 independently deployable services. Zero downtime migration, zero regression events post-launch.",
    tags: ["K8s", "Terraform", "AWS", "Python"],
    accent: "lime",
    size: "small",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: EASE },
  }),
};

export function FeaturedProjects() {
  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-6 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium block mb-4">
              Work
            </span>
            <h2 className="text-lime text-2xl sm:text-3xl md:text-4xl font-medium">
              Systems we&apos;ve shipped.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-lime text-sm font-medium hover:text-white transition-colors flex-shrink-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Large card — spans 5 cols */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            whileHover={{ y: -4 }}
            className="md:col-span-5 relative bg-[#101010] rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[440px] overflow-hidden group cursor-pointer"
          >
            {/* Accent glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse at 30% 30%, ${featuredProjects[0].accent}, transparent 60%)`,
              }}
            />
            {/* Watermark numeral */}
            <span
              className="absolute bottom-2 right-4 text-[100px] font-bold leading-none select-none pointer-events-none opacity-[0.04]"
              style={{ color: featuredProjects[0].accent }}
            >
              {featuredProjects[0].number}
            </span>

            <div className="relative z-10">
              <span className="text-primary text-[10px] uppercase tracking-widest font-medium block mb-6">
                {featuredProjects[0].number} — PROJECT
              </span>
              <h3 className="text-lime text-xl sm:text-2xl md:text-3xl font-medium mb-4 leading-tight">
                {featuredProjects[0].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {featuredProjects[0].description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-8">
              {featuredProjects[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono border border-white/10 rounded-full px-3 py-1 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom lime bar on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: featuredProjects[0].accent }}
            />
          </motion.div>

          {/* Right side — two stacked cards spanning 7 cols */}
          <div className="md:col-span-7 flex flex-col gap-3">
            {featuredProjects.slice(1).map((project, i) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i + 1}
                whileHover={{ y: -4 }}
                className="relative bg-[#101010] rounded-2xl p-7 flex flex-col sm:flex-row gap-6 min-h-[200px] overflow-hidden group cursor-pointer flex-1"
              >
                {/* Accent glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 20% 50%, ${project.accent}, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 flex-1">
                  <span className="text-primary text-[10px] uppercase tracking-widest font-medium block mb-3">
                    {project.number} — PROJECT
                  </span>
                  <h3 className="text-lime text-lg sm:text-xl font-medium mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap sm:flex-col gap-2 self-end sm:self-start sm:items-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono border border-white/10 rounded-full px-3 py-1 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: project.accent === "lime" ? "#C7EFCF" : project.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center gap-3 border border-white/10 rounded-full px-8 py-3 text-gray-400 text-sm font-medium transition-all hover:border-lime/30 hover:text-lime"
          >
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
