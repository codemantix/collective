"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "codemantixcollective@gmail.com",
    href: "mailto:codemantixcollective@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+234 812 312 1369",
    href: "tel:+2348123121369",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Enugu, Nigeria",
    href: null,
  },
];

export default function ContactPage() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const t = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const screwLight = {
    background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
    boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 1px rgba(0,0,0,0.15)",
  };

  const inputStyle = {
    background: "linear-gradient(175deg, #edf0f7 0%, #f5f7fc 100%)",
    border: "1px solid #c8ccd8",
    boxShadow: "inset 3px 3px 8px rgba(0,0,0,0.08), inset -2px -2px 6px rgba(255,255,255,0.9)",
    outline: "none",
    color: "#1e293b",
  };

  return (
    <section
      id="contact-form"
      ref={elementRef}
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(175deg, #f5f7fc 0%, #edf0f7 100%)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #b0b8cc 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Vent strip */}
      <div
        className="absolute left-0 right-0 top-0 h-4 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 6px, rgba(150,160,185,0.4) 6px, rgba(150,160,185,0.4) 7px)",
        }}
      />

      {/* Blue ridge */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
      />

      {/* Corner screws */}
      {["top-5 left-5", "top-5 right-5", "bottom-5 left-5", "bottom-5 right-5"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`} style={screwLight} />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
            />
            <span
              className="text-xs font-black uppercase tracking-[0.22em] text-blue-600"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Send a Message
            </span>
          </div>
          <h2 className="text-4xl font-black text-slate-800 md:text-5xl">
            Start the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conversation
            </span>
          </h2>
          <div
            className="mx-auto my-5 h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }}
          />
          <p className="mx-auto max-w-xl text-lg text-slate-500 mobile:text-sm">
            Fill out the form below and we&rsquo;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-black text-slate-800 md:text-3xl">
                We&rsquo;d love to hear from you
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-500 mobile:text-sm">
                Whether it&rsquo;s a project idea, a quote request, or just a quick hello — our
                team is ready to help you take the next step.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div
                    className="group flex items-center gap-4 rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(175deg, #f9fafc 0%, #edf0f7 100%)",
                      boxShadow: "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                      border: "1px solid #c8ccd8",
                    }}
                  >
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                        boxShadow: "0 3px 0 #0e1f4a",
                        border: "1px solid #1a4a9e",
                      }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div
                        className="mb-0.5 text-[10px] font-black uppercase tracking-widest text-blue-500"
                        style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                      >
                        {c.label}
                      </div>
                      <div className="text-sm font-semibold text-slate-700">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <Link key={c.label} href={c.href}>
                    {inner}
                  </Link>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl p-8"
            style={{
              background: "linear-gradient(175deg, #f9fafc 0%, #edf0f7 100%)",
              boxShadow: "8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,255,255,0.9)",
              border: "1px solid #c8ccd8",
            }}
          >
            {/* Form card screws */}
            <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full" style={screwLight} />
            <div className="absolute left-4 top-4 h-2.5 w-2.5 rounded-full" style={screwLight} />

            <form onSubmit={handleSubmit} className="space-y-5 pt-2">
              <div>
                <label
                  className="mb-2 block text-xs font-black uppercase tracking-widest text-blue-600"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="David Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 transition-shadow duration-200"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-xs font-black uppercase tracking-widest text-blue-600"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="davesmith@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 transition-shadow duration-200"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-xs font-black uppercase tracking-widest text-blue-600"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 transition-shadow duration-200"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={
                  !formData.name.trim() ||
                  !formData.email.trim() ||
                  !formData.message.trim() ||
                  status === "sending"
                }
                className="btn-orange w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message
                    <PaperAirplaneIcon className="ml-2 inline h-4 w-4" />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700"
                >
                  ✅ Message sent! We&rsquo;ll get back to you within 24 hours.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700"
                >
                  ❌ Something went wrong. Please try again or reach out directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
