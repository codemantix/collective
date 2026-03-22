"use client";

import React, { useState, useEffect } from "react";
import {
  LightBulbIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  EyeIcon,
  TagIcon,
  HeartIcon,
  SparklesIcon,
  StarIcon,
  GlobeAltIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import styles from "./MissionVision.module.css";

const coreValues = [
  {
    title: "Innovation",
    text: "We push boundaries and embrace fresh ideas that drive growth and digital transformation.",
    icon: LightBulbIcon,
  },
  {
    title: "Collaboration",
    text: "Working together is at the heart of everything we do to achieve extraordinary results.",
    icon: UsersIcon,
  },
  {
    title: "Integrity",
    text: "We act with honesty, transparency, and uphold the highest ethical standards.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Excellence",
    text: "Delivering the best solutions with passion, precision, and unwavering commitment.",
    icon: RocketLaunchIcon,
  },
];

const missionVision = [
  {
    title: "Our Mission",
    subtitle: "Empowering Digital Transformation",
    description:
      "To empower businesses worldwide with innovative digital solutions that drive exponential growth, enhance user experiences, and transform visionary ideas into impactful digital realities.",
    icon: TagIcon,
    moduleId: "MIS-01",
    features: ["Global Impact", "Innovation First", "User-Centric Design", "Scalable Solutions"],
  },
  {
    title: "Our Vision",
    subtitle: "Shaping Tomorrow's Digital Landscape",
    description:
      "To be the world's most trusted collective of digital innovators, creating a future where cutting-edge technology seamlessly bridges human creativity with functional excellence.",
    icon: EyeIcon,
    moduleId: "VIS-02",
    features: ["Global Leadership", "Creative Excellence", "Future-Ready", "Collaborative Innovation"],
  },
];

const impactStats = [
  // { number: "50+", label: "Countries Served", icon: GlobeAltIcon },
  { number: "10+", label: "Projects Delivered", icon: RocketLaunchIcon },
  { number: "99.9%", label: "Client Satisfaction", icon: StarIcon },
  { number: "24/7", label: "Support Available", icon: BoltIcon },
];

export default function MissionVisionValues() {
  const [activeCard, setActiveCard] = useState(0);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % missionVision.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
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
          viewport={{ once: true, amount: 0.2 }}
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
              What Drives Us Forward
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
            Mission &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 60%, #1e3a8a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Vision
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg text-slate-600">
            Our purpose and aspirations guide every decision we make, every solution we create, and
            every relationship we build in this digital transformation journey.
          </motion.p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 grid grid-cols-2 gap-4  md:grid-cols-3"
        >
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <div
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "linear-gradient(175deg, #edf0f7, #e2e6f0)",
                    border: "1px solid #c8ccd8",
                    boxShadow:
                      "inset 2px 2px 5px rgba(0,0,0,0.08), inset -2px -2px 5px rgba(255,255,255,0.9)",
                  }}
                >
                  <div
                    className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                      boxShadow: "0 3px 0 #0e1f4a",
                      border: "1px solid #1a4a9e",
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="mb-1 text-2xl font-black text-slate-800">{stat.number}</div>
                  <div
                    className="text-xs font-bold uppercase tracking-wider text-slate-500"
                    style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission & Vision Panels */}
        <div className="mb-16 space-y-8">
          {missionVision.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setActiveCard(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl p-8"
                style={{
                  background: "linear-gradient(175deg, #0e1f4a 0%, #0a1533 55%, #060e26 100%)",
                  border: isActive
                    ? "1px solid rgba(59,130,246,0.5)"
                    : "1px solid rgba(59,130,246,0.2)",
                  boxShadow: isActive
                    ? "0 6px 0 #030a1a, 5px 5px 20px rgba(0,0,0,0.4)"
                    : "0 4px 0 #030a1a, 3px 3px 12px rgba(0,0,0,0.3)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Grid crosshatch */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Corner screws */}
                {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map(
                  (pos, i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} h-2.5 w-2.5 rounded-full opacity-50`}
                      style={{
                        background:
                          "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
                        boxShadow:
                          "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
                      }}
                    />
                  )
                )}

                <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
                  {/* Icon + Module ID */}
                  <div className="flex-shrink-0">
                    <div
                      className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl"
                      style={{
                        background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                        boxShadow: "0 6px 0 #060e26, 4px 4px 16px rgba(0,0,0,0.4)",
                        border: "1px solid #1a4a9e",
                      }}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div
                      className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500"
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {item.moduleId}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-1 text-2xl font-black text-white md:text-3xl">{item.title}</h3>
                    <p
                      className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-400"
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {item.subtitle}
                    </p>
                    <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-300">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {item.features.map((feature, fi) => (
                        <span
                          key={fi}
                          className="rounded-lg px-3 py-1.5 text-xs font-bold text-blue-300"
                          style={{
                            background: "rgba(59,130,246,0.1)",
                            border: "1px solid rgba(59,130,246,0.2)",
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom ridge on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Core Values */}
        <div>
          <div className="mb-10 flex items-center gap-3" style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Core Values</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          >
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                    border: "1px solid #c8ccd8",
                    boxShadow:
                      "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                  }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                      boxShadow: "0 3px 0 #0e1f4a, 2px 2px 6px rgba(0,0,0,0.2)",
                      border: "1px solid #1a4a9e",
                    }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="mb-2 text-base font-black text-slate-800 transition-colors group-hover:text-blue-700">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">{value.text}</p>

                  {/* Bottom ridge on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
