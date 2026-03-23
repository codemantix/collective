"use client";

import { motion } from "framer-motion";
import { items } from "@/components/shared/data/BrandStorydata";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./BrandStory.module.css";

export default function BrandStory() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      ref={elementRef}
      className={styles.section}
      style={{ background: "linear-gradient(175deg, #f5f7fc 0%, #edf0f7 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(30,58,138,0.07) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Vent strip top */}
      <div
        className="absolute top-0 left-0 right-0 h-4 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(30,58,138,0.2) 8px, rgba(30,58,138,0.2) 9px)",
        }}
      />

      {/* Corner screws */}
      {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`}
          style={{
            background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
            boxShadow:
              "inset 1px 1px 2px rgba(0,0,0,0.4), inset -1px -1px 1px rgba(255,255,255,0.35)",
          }}
        />
      ))}

      <div className={`${styles.container} relative z-10`}>
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={styles.header}
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center gap-3">
            <span
              className="h-1.5 w-1.5 rounded-full bg-orange-500"
              style={{ boxShadow: "0 0 4px #f97316" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Our Journey
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-orange-500"
              style={{ boxShadow: "0 0 4px #f97316" }}
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-5 text-4xl font-black text-slate-800 md:text-5xl"
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 60%, #1e3a8a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Story
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg mobile:text-sm text-slate-600"
          >
            From a bold vision to a thriving collective, discover how we're transforming the digital
            landscape one innovative solution at a time.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={styles.grid}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl p-7"
              style={{
                background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                border: "1px solid #c8ccd8",
                boxShadow:
                  "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
              }}
            >
              {/* Corner screws */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
                (pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} h-2 w-2 rounded-full`}
                    style={{
                      background:
                        "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
                      boxShadow:
                        "inset 1px 1px 2px rgba(0,0,0,0.4), inset -1px -1px 1px rgba(255,255,255,0.35)",
                    }}
                  />
                )
              )}

              {/* Icon */}
              <div
                className="mb-6 flex h-14 w-14 mobile:h-10 mobile:w-10 items-center justify-center rounded-xl"
                style={{
                  background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                  boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
                  border: "1px solid #1a4a9e",
                }}
              >
                <div className="text-white [&>svg]:h-7 [&>svg]:w-7 mobile:[&>svg]:h-5 mobile:[&>svg]:w-5">{item.icon}</div>
              </div>

              {/* Module ID */}
              <div
                className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-600"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
              >
                STO-0{index + 1}
              </div>

              <h3 className="mb-3 text-xl font-black text-slate-800 transition-colors group-hover:text-blue-700">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>

              {/* Bottom ridge on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
