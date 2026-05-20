"use client";

import { motion } from "framer-motion";
import { CONTACT_EMAIL, mailto } from "@/lib/contact";

const workMail = (label: string) =>
  mailto({ subject: `${label} - 0x Engine Labs` });

export function Footer() {
  return (
    <div className="bg-background px-4 md:px-6 pb-6 w-full flex justify-center">
      <div className="max-w-7xl w-full">
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-muted mt-16 md:mt-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4 text-ink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
                <span className="text-xl font-medium tracking-tight">0x Engine Labs</span>
              </div>
              <p className="text-base leading-relaxed max-w-sm mb-2">
                Blockchain systems. Built properly.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-ink hover:text-primary transition-colors text-base font-medium mb-6"
              >
                {CONTACT_EMAIL}
              </a>

              <a
                href={mailto()}
                className="group flex items-center gap-2 bg-primary rounded-full pl-4 pr-1.5 py-1.5 text-black font-medium text-sm transition-all hover:gap-3"
              >
                Start a Project
                <div className="bg-ink rounded-full w-6 h-6 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg className="text-white w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-ink font-medium mb-4">Engineering</h4>
                <ul className="text-sm space-y-3 flex flex-col">
                  {["Blockchain Systems", "Protocol Infrastructure", "API Systems", "Process Automation", "Performance Audits"].map((link) => (
                    <a key={link} href={workMail(link)} className="hover:text-primary transition-colors w-fit">{link}</a>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-ink font-medium mb-4">Company</h4>
                <ul className="text-sm space-y-3 flex flex-col">
                  {[
                    { label: "About 0x", href: "#" },
                    { label: "How We Work", href: "#process" },
                    { label: "Case Studies", href: "#proof" },
                    { label: "Join the Team", href: workMail("Join the Team") },
                  ].map((link) => (
                    <a key={link.label} href={link.href} className="hover:text-primary transition-colors w-fit">{link.label}</a>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-sm uppercase tracking-wider text-ink font-medium mb-4">Contact</h4>
                <ul className="text-sm space-y-3 flex flex-col">
                  {[
                    { label: "Start a Project", href: mailto() },
                    { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                    { label: "Legal & Privacy", href: "#" },
                    { label: "Terms of Engagement", href: "#" },
                    { label: "Report an Issue", href: workMail("Report an Issue") },
                  ].map((link) => (
                    <a key={link.label} href={link.href} className="hover:text-primary transition-colors w-fit">{link.label}</a>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-widest opacity-50">
              Built by 0x Engine Labs - Blockchain systems. Built properly.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-primary transition-all"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
