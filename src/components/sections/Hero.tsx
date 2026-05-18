"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "@/components/animations/WordsPullUp";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Proof", href: "#proof" },
  { label: "Process", href: "#process" },
  { label: "Principles", href: "#principles" },
];

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-[100svh] bg-background p-4 md:p-6 w-full flex flex-col">
      <div className="relative flex-1 w-full min-h-[calc(100svh-2rem)] md:min-h-[calc(100svh-3rem)] rounded-2xl md:rounded-4xl overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dgtoh3s2a/image/upload/v1779020514/lowpoly_office_landscape_jb3eye.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />

        {/* Overlays */}
        <div className="noise-overlay absolute inset-0 opacity-[0.12] mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-[#f4fffc]/25 to-[#f4fffc]/85 pointer-events-none" />

        {/* Navbar */}
        <nav
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-10 flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12 transition-all duration-500"
          style={{
            backgroundColor: scrolled ? "#F4FFFC" : "#F4FFFC",
            backdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
            WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
            boxShadow: "0 12px 40px rgba(2,255,228,0.14)",
          }}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] sm:text-xs md:text-base whitespace-nowrap transition-colors"
              style={{ color: "#566B68" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#008F82")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#566B68")
              }
            >
              {item.label}
            </Link>
          ))}

          {/* Contact Us CTA */}
          <Link
            href="/contact-us"
            className="group flex items-center gap-1.5 bg-primary rounded-full pl-4 pr-1.5 py-1 text-black font-medium text-[10px] sm:text-xs whitespace-nowrap transition-all hover:gap-2"
          >
            Contact Us
            <div className="bg-ink rounded-full w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight className="text-white w-3 h-3" />
            </div>
          </Link>
        </nav>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <WordsPullUp
                text={`0x Engine Labs`}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-ink"
                showAsterisk
              />
            </div>

            <div className="md:col-span-4 flex flex-col items-start gap-6 pb-2 md:pb-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-ink text-xs sm:text-sm md:text-base leading-[1.2]"
              >
                We design, build, and harden backend systems, infrastructure, and
                automation pipelines for companies operating under real-world
                constraints.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/contact-us"
                    className="group flex items-center gap-2 bg-primary rounded-full pl-6 pr-2 py-2 text-black font-medium text-sm sm:text-base transition-all hover:gap-3"
                  >
                    Start a Project
                    <div className="bg-ink rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                      <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href="#proof"
                    className="flex items-center gap-2 border border-ink/20 bg-white/55 backdrop-blur-sm rounded-full pl-6 pr-6 h-[52px] sm:h-[56px] text-ink font-medium text-sm sm:text-base transition-all hover:border-primary hover:text-primary"
                  >
                    See Our Work ↓
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
