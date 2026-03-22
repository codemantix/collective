"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Showcase.module.css";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CpuChipIcon,
  SwatchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { projectCategories, projectStats } from "@/components/shared/data/ProjectsData";

const iconMap = {
  "paint-brush": PaintBrushIcon,
  "code-bracket": CodeBracketIcon,
  "device-phone-mobile": DevicePhoneMobileIcon,
  "shopping-cart": GlobeAltIcon,
  "cpu-chip": CpuChipIcon,
  "swatch": SwatchIcon,
};

const moduleIds = ["CAT-01", "CAT-02", "CAT-03", "CAT-04", "CAT-05", "CAT-06"];

export default function ProjectsShowcase() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const screwLight = {
    background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
    boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 1px rgba(0,0,0,0.15)",
  };

  return (
    <section
      ref={elementRef}
      className={`${styles.section} relative overflow-hidden`}
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

      {/* Vent strip top */}
      <div
        className="absolute left-0 right-0 top-0 h-4 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 6px, rgba(150,160,185,0.4) 6px, rgba(150,160,185,0.4) 7px)",
        }}
      />

      {/* Blue ridge top */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
      />

      {/* Corner screws */}
      {["top-5 left-5", "top-5 right-5", "bottom-5 left-5", "bottom-5 right-5"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`} style={screwLight} />
      ))}

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.header} mb-16`}
        >
          {/* LED + label */}
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
            />
            <span
              className="text-xs font-black uppercase tracking-[0.22em] text-blue-600"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Our Expertise
            </span>
          </div>

          {/* H2 */}
          <h2 className={`${styles.sectionTitle} mt-3`}>
            What We{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Create
            </span>
          </h2>

          {/* Divider */}
          <div className="mx-auto my-5 h-px w-24" style={{ background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }} />

          <p className={`${styles.sectionSubtitle} mx-auto max-w-2xl`}>
            From sleek web interfaces to powerful data analytics — we deliver solutions that
            captivate users and drive real business results.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className={`${styles.grid} mb-16`}
        >
          {projectCategories?.map((cat, i) => {
            const Icon = iconMap[cat.icon] || CodeBracketIcon;
            return (
              <motion.div
                key={cat.title}
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="group relative overflow-hidden rounded-2xl p-6"
                style={{
                  background: "linear-gradient(175deg, #f9fafc 0%, #edf0f7 100%)",
                  boxShadow: "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                  border: "1px solid #c8ccd8",
                }}
              >
                {/* Bottom ridge hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                />

                {/* Screw */}
                <div className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full" style={screwLight} />

                {/* Module ID */}
                <div
                  className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 opacity-70"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  {moduleIds[i] || `CAT-0${i + 1}`}
                </div>

                {/* Icon button */}
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
                    border: "1px solid #1a4a9e",
                  }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Count badge */}
                {cat.count && (
                  <div
                    className="mb-3 inline-block rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-blue-700"
                    style={{
                      background: "rgba(37,99,235,0.1)",
                      border: "1px solid rgba(37,99,235,0.2)",
                      fontFamily: "ui-monospace, 'Fira Code', monospace",
                    }}
                  >
                    {cat.count} projects
                  </div>
                )}

                {/* Title + Description */}
                <h3 className="mb-2 font-black text-slate-800">{cat.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{cat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

       
      </div>
    </section>
  );
}
