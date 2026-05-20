"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Segment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let wordIndex = 0;

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap justify-center", className)}>
      {segments.map((segment, segIndex) => {
        const words = segment.text.split(" ");
        return (
          <span key={`seg-${segIndex}`} className="inline-flex flex-wrap">
            {words.map((word, i) => {
              const currentDelay = wordIndex * 0.08;
              wordIndex++;
              return (
                <motion.span
                  key={`word-${i}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: currentDelay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={cn("inline-block mr-[0.25em] last:mr-[0.25em]", segment.className)}
                >
                  {word}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
