"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedLetterProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedLetter({ children, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

interface ScrollTextProps {
  text: string;
  className?: string;
}

export function ScrollText({ text, className }: ScrollTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const totalChars = chars.length;

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      {chars.map((char, i) => {
        const charProgress = i / totalChars;
        const range: [number, number] = [charProgress - 0.1, charProgress + 0.05];
        return (
          <AnimatedLetter key={i} progress={scrollYProgress} range={range}>
            {char}
          </AnimatedLetter>
        );
      })}
    </div>
  );
}
