"use client";

import { WordsPullUpMultiStyle } from "@/components/animations/WordsPullUpMultiStyle";
import { ScrollText } from "@/components/animations/AnimatedLetter";

export function SystemPositioning() {
  return (
    <section className="bg-background py-24 md:py-32 px-4 md:px-6 w-full flex justify-center">
      <div className="bg-surface border border-line rounded-3xl p-8 md:p-16 lg:p-24 max-w-6xl w-full flex flex-col items-center text-center gap-12 shadow-[0_24px_80px_rgba(2,255,228,0.14)]">
        {/* Label */}
        <span className="text-primary text-sm uppercase tracking-widest font-medium">
          Engine Labs
        </span>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ink leading-[0.95] sm:leading-[0.9]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "We engineer systems, ", className: "font-normal" },
              { text: "built for blockchain reliability. ", className: "italic font-serif" },
              { text: "designed to operate under real-world constraints.", className: "font-normal" }
            ]}
          />
        </div>

        {/* Body Text (Animated on Scroll) */}
        <div className="max-w-2xl mx-auto">
          <ScrollText
            text="We design and deliver blockchain products, protocol infrastructure, backend systems, and automation pipelines. Every component is built to handle load, reduce latency, protect transaction workflows, and maintain stability under real operating conditions. The focus is predictable behavior in production, not controlled environments."
            className="text-primary text-base leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}
