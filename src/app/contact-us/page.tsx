"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL, mailto } from "@/lib/contact";

const budgetOptions = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    brief: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      "0x Engine Labs Project Request",
      "",
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Budget Range: ${form.budget || "Not selected"}`,
      "",
      "Project Brief / Blockchain Context:",
      form.brief,
      "",
      "Key areas to review:",
      "- Blockchain systems or protocol infrastructure",
      "- Backend/API layers",
      "- Transaction workflows, indexing, or automation",
      "- Reliability, security, and production constraints",
    ].join("\n");

    window.location.href = mailto({
      subject: `Project Enquiry${form.company ? ` - ${form.company}` : ""}`,
      body,
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background px-4 md:px-6 pb-24">
      <nav className="sticky top-0 z-10 flex items-center justify-between py-4 bg-background/85 backdrop-blur-md border-b border-line">
        <Link
          href="/"
          className="group flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <span className="text-ink font-mono text-sm uppercase tracking-widest">
          0x Engine Labs
        </span>
        <div className="w-20" />
      </nav>

      <div className="max-w-7xl mx-auto pt-20 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium block mb-8">
              Contact
            </span>

            <h1
              className="text-ink font-medium leading-[1.05] mb-8"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Let&apos;s build blockchain systems that don&apos;t break.
            </h1>

            <p className="font-medium leading-relaxed mb-10 text-base md:text-lg text-secondary">
              We design, build, and harden blockchain products, protocol infrastructure, backend systems, and automation pipelines for teams operating under real-world load and security constraints.
            </p>

            <div className="flex flex-col gap-6 border-t border-line pt-8">
              <div>
                <span className="text-muted font-mono text-sm uppercase tracking-widest block mb-2">
                  Direct line
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-ink text-base hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <span className="text-muted font-mono text-sm uppercase tracking-widest block mb-2">
                  Response time
                </span>
                <p className="text-muted text-base">Within 48 hours. No sales calls.</p>
              </div>
              <div>
                <span className="text-muted font-mono text-sm uppercase tracking-widest block mb-2">
                  Current availability
                </span>
                <p className="text-secondary text-sm font-mono">
                  Currently scoped through Q3 2026. Accepting enquiries for Q4.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="bg-surface border border-line rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-6 min-h-[400px] shadow-[0_18px_60px_rgba(2,255,228,0.12)]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-ink text-2xl font-medium">Request received.</h2>
                <p className="text-muted text-base max-w-sm">
                  Thank you for choosing to work with 0x Engine Labs. Your email client has opened with the project brief; we&apos;ll review it and respond within 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-ink text-sm hover:text-primary transition-colors underline underline-offset-4"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface border border-line rounded-2xl p-8 md:p-10 flex flex-col gap-6 shadow-[0_18px_60px_rgba(2,255,228,0.12)]"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-muted font-mono text-sm uppercase tracking-widest">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-surface-tinted border border-line rounded-xl px-4 py-3 text-ink text-base placeholder-muted/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-muted font-mono text-sm uppercase tracking-widest">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company, protocol, or product name"
                    className="bg-surface-tinted border border-line rounded-xl px-4 py-3 text-ink text-base placeholder-muted/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-muted font-mono text-sm uppercase tracking-widest">
                    Project Brief *
                  </label>
                  <textarea
                    name="brief"
                    required
                    value={form.brief}
                    onChange={handleChange}
                    placeholder="Describe the blockchain product, protocol infrastructure, backend system, automation pipeline, or reliability issue you need built or hardened."
                    rows={5}
                    className="bg-surface-tinted border border-line rounded-xl px-4 py-3 text-ink text-base placeholder-muted/60 focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-muted font-mono text-sm uppercase tracking-widest">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="bg-surface-tinted border border-line rounded-xl px-4 py-3 text-ink text-base focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-muted">
                      Select a range
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-background">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-between gap-3 bg-primary rounded-xl px-6 py-4 text-black font-medium text-base transition-all hover:bg-primary/90 mt-2"
                >
                  Send Enquiry
                  <div className="bg-ink rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:translate-x-1">
                    <ArrowRight className="text-white w-4 h-4" />
                  </div>
                </button>

                <p className="text-muted font-mono text-sm text-center">
                  We respond within 48 hours. No sales calls.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
