"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "@/components/animations/WordsPullUp";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mailto } from "@/lib/contact";

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
        <div className="absolute inset-0 bg-linear-to-b from-[#f8fbfa]/76 via-[#eef7f4]/28 to-[#eef7f4]/88 pointer-events-none" />

        {/* Navbar */}
        <nav
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-10 flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12 transition-all duration-500"
          style={{
            backgroundColor: scrolled ? "#EEF7F4" : "#EEF7F4",
            backdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
            WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
            boxShadow: "0 12px 40px rgba(2,255,228,0.14)",
          }}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm md:text-base whitespace-nowrap transition-colors"
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
            className="group flex items-center gap-1.5 bg-primary rounded-full pl-4 pr-1.5 py-1 text-black font-medium text-sm whitespace-nowrap transition-all hover:gap-2"
          >
            Contact Us
            <div className="bg-ink rounded-full w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight className="text-white w-3 h-3" />
            </div>
          </Link>
        </nav>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10 lg:p-12 xl:p-16">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-end">
            <div className="xl:col-span-7">
              <WordsPullUp
                text={`0x Engine Labs`}
                className="text-[clamp(4.75rem,15vw,12rem)] xl:text-[clamp(7rem,12vw,18rem)] font-medium leading-[0.88] tracking-[-0.04em] text-ink"
                showAsterisk
              />
            </div>

            <div className="xl:col-span-5 flex flex-col items-start gap-5 sm:gap-6 pb-2 xl:pb-6 max-w-2xl xl:max-w-none">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-ink text-base leading-[1.3]"
              >
                We design, build, and harden blockchain products, protocol
                infrastructure, backend systems, and automation pipelines for
                teams operating under real-world load and security constraints.
              </motion.p>

              <div className="flex w-full flex-col sm:flex-row sm:flex-wrap gap-3">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href={mailto()}
                    className="group flex min-h-13 w-full sm:w-auto sm:min-w-45 max-md:justify-between items-center justify-center gap-2 whitespace-nowrap bg-primary rounded-full pl-6 pr-2 py-2 text-black font-medium text-sm sm:text-base transition-all hover:gap-3"
                  >
                    Start a Project
                    <div className="bg-ink rounded-full w-9 h-9 sm:w-10 sm:h-10 flex shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                      <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="#proof"
                    className="flex min-h-13 w-full sm:w-auto sm:min-w-40 max-md:justify-between items-center justify-center gap-2 whitespace-nowrap border border-ink/20 bg-surface/70 backdrop-blur-sm rounded-full px-6 text-ink font-medium text-sm sm:text-base transition-all hover:border-primary hover:text-primary"
                  >
                    See Our Work
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
