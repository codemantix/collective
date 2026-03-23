"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Rocket } from "lucide-react";
import Link from "next/link";
import styles from "./CodematixCTA.module.css";

export default function CodematixCTA({
  title = "Ready to Transform Your Business?",
  description = "Let's build something amazing together with cutting-edge technology solutions.",
  primaryText = "Get Started",
  primaryHref = "/contact",
  secondaryText = "View Our Work",
  secondaryHref = "/projects",
  variant = "gradient",
}) {
  return (
    <section
      className={styles.section}
      style={{ background: "linear-gradient(175deg, #0e1f4a 0%, #0a1533 55%, #060e26 100%)" }}
    >
      {/* Vent slots top */}
      <div
        className="absolute top-0 left-0 right-0 h-5 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(255,255,255,0.12) 3px, rgba(255,255,255,0.12) 4px)",
        }}
      />

      {/* Vent slots bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-5 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(255,255,255,0.12) 3px, rgba(255,255,255,0.12) 4px)",
        }}
      />

      {/* Corner screws */}
      {["top-5 left-5", "top-5 right-5", "bottom-5 left-5", "bottom-5 right-5"].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} h-3 w-3 rounded-full opacity-60`}
          style={{
            background:
              "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
            boxShadow:
              "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
          }}
        />
      ))}

      {/* Grid crosshatch */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blue ridge top — decorative groove */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
      />

      <div className={styles.container}>
        <div className="mx-auto max-w-4xl text-center">

          {/* Module status row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <span
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 4px #f97316, 0 0 12px rgba(249,115,22,0.65)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              CTA-MODULE — Ready
            </span>
            <span
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 4px #f97316, 0 0 12px rgba(249,115,22,0.65)" }}
            />
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-8 flex justify-center"
          >
            <div
              className="flex h-20 w-20 items-center justify-center rounded-2xl"
              style={{
                background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                boxShadow: "0 6px 0 #060e26, 4px 4px 16px rgba(0,0,0,0.4)",
                border: "1px solid #1a4a9e",
              }}
            >
              <Rocket className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5  font-black text-white mobile:text-2xl sm:text-4xl"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-400 mobile:text-sm"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            {/* Primary — tactile orange */}
            <Link href={primaryHref}>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                className="btn-orange flex items-center gap-3 px-10 py-4 text-base mobile:text-sm mobile:px-5"
              >
                <span>{primaryText}</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>
            </Link>

            {/* Secondary — inset navy panel */}
            <Link href={secondaryHref}>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                className="flex items-center gap-3 rounded-lg px-10 py-4 text-base font-bold uppercase tracking-widest text-slate-300 transition-colors duration-150 hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.35)",
                  fontFamily: "ui-monospace, 'Fira Code', monospace",
                  fontSize: "13px",
                }}
              >
                <Zap size={18} />
                <span>{secondaryText}</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { number: "10+", label: "Projects Delivered" },
              { number: "12+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-xl px-6 py-5 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  boxShadow: "inset 1px 1px 4px rgba(0,0,0,0.35)",
                }}
              >
                {/* Screw top-right */}
                <div
                  className="absolute top-2 right-2 h-2 w-2 rounded-full opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 100%)",
                    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                />

                <div
                  className="mb-1 text-3xl font-black text-white"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom blue accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
      />
    </section>
  );
}
