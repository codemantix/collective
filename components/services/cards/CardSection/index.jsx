"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/services/cards/ServicesCard";
import styles from "./CardSection.module.css";

export default function ServiceSection({ title, description, services, variant = "default" }) {
  const isDark = variant === "dark";

  const screwStyle = isDark
    ? {
        background: "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
      }
    : {
        background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3), inset -1px -1px 1px rgba(255,255,255,0.5)",
      };

  return (
    <section
      className={`${styles.section} w-full`}
      style={
        isDark
          ? { background: "linear-gradient(175deg, #0e1f4a 0%, #0a1533 55%, #060e26 100%)" }
          : { background: "linear-gradient(175deg, #f5f7fc 0%, #edf0f7 100%)" }
      }
    >
      {/* Background texture */}
      {isDark ? (
        <>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-5 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(255,255,255,0.12) 3px, rgba(255,255,255,0.12) 4px)",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, #b0b8cc 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-4 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(30,58,138,0.18) 8px, rgba(30,58,138,0.18) 9px)",
            }}
          />
        </>
      )}

      {/* Corner screws */}
      {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`} style={screwStyle} />
      ))}

      {/* Content container */}
      <div className={`${styles.container} relative`}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          {/* LED + monospace label */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <div
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
            />
            <span
              className={`text-xs font-black uppercase tracking-[0.22em] ${isDark ? "text-blue-400" : "text-blue-700"}`}
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Our Services
            </span>
          </div>

          <h2
            className={`mb-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl ${isDark ? "text-white" : "text-slate-800"}`}
          >
            {title}
          </h2>

          <div
            className="mx-auto mb-6 h-0.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #1d4ed8, #7c3aed, #f97316)" }}
          />

          <p
            className={`mx-auto max-w-3xl text-lg leading-relaxed mobile:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            {description}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className={`${styles.grid} gap-6`}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ServiceCard {...service} variant={variant} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
