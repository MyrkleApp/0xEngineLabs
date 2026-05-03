"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
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
    const subject = encodeURIComponent(
      `Project Enquiry${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\n\nProject Brief:\n${form.brief}\n\nBudget Range: ${form.budget}`
    );
    window.location.href = `mailto:team@0xenginelabs.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black px-4 md:px-6 pb-24">
      {/* Top nav */}
      <nav className="sticky top-0 z-10 flex items-center justify-between py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
        <Link
          href="/"
          className="group flex items-center gap-2 text-gray-400 text-sm hover:text-lime transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
          0x Engine Labs
        </span>
        <div className="w-20" /> {/* Spacer for centering */}
      </nav>

      <div className="max-w-7xl mx-auto pt-20 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Brand copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium block mb-8">
              Contact
            </span>

            <h1
              className="text-lime font-medium leading-[1.05] mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              Let&apos;s build something that doesn&apos;t break.
            </h1>

            <p
              className="font-medium leading-relaxed mb-10"
              style={{ color: "#F0B67F", fontSize: "clamp(14px, 1.2vw, 18px)" }}
            >
              We design, build, and harden backend systems for companies operating under real-world constraints. If your system needs to handle load — let&apos;s talk.
            </p>

            {/* Info blocks */}
            <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
              <div>
                <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest block mb-2">
                  Direct line
                </span>
                <a
                  href="mailto:team@0xenginelabs.org"
                  className="text-lime text-sm sm:text-base hover:text-white transition-colors"
                >
                  team@0xenginelabs.org
                </a>
              </div>
              <div>
                <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest block mb-2">
                  Response time
                </span>
                <p className="text-gray-400 text-sm">Within 48 hours. No sales calls.</p>
              </div>
              <div>
                <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest block mb-2">
                  Current availability
                </span>
                <p className="text-secondary text-sm font-mono">
                  Currently scoped through Q3 2026. Accepting enquiries for Q4.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="bg-[#101010] rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-6 min-h-[400px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lime text-2xl font-medium">Enquiry sent.</h2>
                <p className="text-gray-400 text-sm max-w-sm">
                  Your email client should have opened with a pre-filled message. We&apos;ll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-lime text-sm hover:text-white transition-colors underline underline-offset-4"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#101010] rounded-2xl p-8 md:p-10 flex flex-col gap-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-lime text-sm placeholder-gray-700 focus:outline-none focus:border-lime/40 transition-colors"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company or product name"
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-lime text-sm placeholder-gray-700 focus:outline-none focus:border-lime/40 transition-colors"
                  />
                </div>

                {/* Project brief */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                    Project Brief *
                  </label>
                  <textarea
                    name="brief"
                    required
                    value={form.brief}
                    onChange={handleChange}
                    placeholder="Describe your system, what's failing, and what you need built."
                    rows={5}
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-lime text-sm placeholder-gray-700 focus:outline-none focus:border-lime/40 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="bg-[#101010] border border-white/10 rounded-xl px-4 py-3 text-lime text-sm focus:outline-none focus:border-lime/40 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-gray-700">
                      Select a range
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#101010]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex items-center justify-between gap-3 bg-primary rounded-xl px-6 py-4 text-black font-medium text-sm transition-all hover:bg-primary/90 mt-2"
                >
                  Send Enquiry
                  <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:translate-x-1">
                    <ArrowRight className="text-lime w-4 h-4" />
                  </div>
                </button>

                <p className="text-gray-700 font-mono text-[9px] text-center">
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
