"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  TrophyIcon,
  ArrowRightIcon,
  PlayIcon,
  SwatchIcon,
  BoltIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Hero.module.css";

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const techServices = [
  {
    title: "Web/App Development",
    description: "Modern, scalable web and mobile applications built with cutting-edge technologies",
    icon: CodeBracketIcon,
    moduleId: "SVC-01",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversion",
    icon: EyeIcon,
    moduleId: "SVC-02",
  },
  {
    title: "Graphics Design",
    description: "Professional visual identity and marketing materials that communicate your brand",
    icon: PaintBrushIcon,
    moduleId: "SVC-03",
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable business insights and intelligence",
    icon: ChartBarIcon,
    moduleId: "SVC-04",
  },
];

const companyStats = [
  { label: "Projects Delivered", value: "60+", icon: CheckCircleIcon },
  { label: "Happy Clients", value: "50+", icon: UsersIcon },
  { label: "Years Experience", value: "3+", icon: ArrowTrendingUpIcon },
  { label: "Team Members", value: "10+", icon: TrophyIcon },
];

const trustIndicators = [
  "Enterprise-grade security",
  "24/7 support & maintenance",
  "Agile development process",
  "99.9% uptime guarantee",
];

const serviceIconBg = ["#1e3a8a", "#1e4080", "#162d72", "#0e1f4a"];

export default function ProfessionalHero() {
  const [currentService, setCurrentService] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    setShouldAnimate(!prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % techServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      ref={elementRef}
      className={styles.section}
      style={{ background: "linear-gradient(175deg, #f5f7fc 0%, #edf0f7 100%)" }}
    >
      {/* Grid background */}
      <div
        className={styles.gridOverlay}
      />

      {/* Vent decoration top */}
      <div
        className={styles.ventStrip}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(30,58,138,0.15) 8px, rgba(30,58,138,0.15) 9px)",
        }}
      />

      {/* Corner screws */}
      {["top-8 left-8", "top-8 right-8", "bottom-8 left-8", "bottom-8 right-8"].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`}
          style={{
            background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
            boxShadow:
              "inset 1px 1px 2px rgba(0,0,0,0.4), inset -1px -1px 1px rgba(255,255,255,0.35), 0 1px 2px rgba(0,0,0,0.18)",
          }}
        />
      ))}

      <div className={`${styles.container} flex min-h-screen items-center`}>
        <motion.div
          className={`${styles.inner} justify-center`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className={styles.leftCol}>

            {/* Trust badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div
                className={styles.trustBadge}
                style={{
                  background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                  border: "1px solid #c8ccd8",
                  boxShadow: "3px 3px 7px rgba(0,0,0,0.1), -3px -3px 7px rgba(255,255,255,0.85)",
                }}
              >
                <span
                  className={styles.trustBadgeDot}
                  style={{ boxShadow: "0 0 4px #f97316, 0 0 10px rgba(249,115,22,0.6)" }}
                />
                <span
                  className={styles.trustBadgeLabel}
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  Trusted by 50+ Companies Worldwide
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className={styles.heading}>
                <span className={styles.headingLine1}>Building Digital Solutions </span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 60%, #1e3a8a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
               That Drive Success
                </span>
              </h1>
              <p className={styles.subtext}>
                We transform businesses through{" "}
                <strong className="font-semibold text-blue-700">innovative technology solutions</strong>.
                From web development to data analytics, we deliver enterprise-grade software that
                scales with your ambitions.
              </p>
            </motion.div>

            {/* Service highlight panel */}
            {/* <motion.div variants={itemVariants} className="mx-auto max-w-lg lg:mx-0">
              <div
                className="relative overflow-hidden rounded-2xl p-5"
                style={{
                  background: "linear-gradient(175deg, #edf0f7, #e2e6f0)",
                  border: "1px solid #c8ccd8",
                  boxShadow:
                    "inset 2px 2px 5px rgba(0,0,0,0.08), inset -2px -2px 5px rgba(255,255,255,0.9)",
                }}
              >
                {["top-2.5 left-2.5", "top-2.5 right-2.5"].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} h-2.5 w-2.5 rounded-full`}
                    style={{
                      background:
                        "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
                      boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.4)",
                    }}
                  />
                ))}

                <div className="mb-3" style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
                    {techServices[currentService].moduleId} — Active Service
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <motion.div
                    key={currentService}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                      boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
                      border: "1px solid #1a4a9e",
                    }}
                  >
                    {React.createElement(techServices[currentService].icon, {
                      className: "h-7 w-7 text-white",
                    })}
                  </motion.div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1"
                    >
                      <h3 className="mb-1.5 text-lg font-black text-slate-800">
                        {techServices[currentService].title}
                        <BoltIcon className="ml-1.5 inline h-4 w-4 text-orange-500" />
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {techServices[currentService].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {techServices.map((_, index) => (
                    <div
                      key={index}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: currentService === index ? "24px" : "8px",
                        background: currentService === index ? "#1e3a8a" : "#b0b8cc",
                        boxShadow:
                          currentService === index ? "0 0 6px rgba(30,58,138,0.5)" : "none",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div> */}

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mx-auto grid w-full max-w-lg grid-cols-2 gap-2.5 lg:mx-0"
            >
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 text-left text-xs text-slate-600">
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"
                    style={{ boxShadow: "0 0 4px #f97316" }}
                  />
                  <span className="font-medium">{indicator}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className={styles.ctaRow}>
              <Link href="/contact">
                <button className="btn-primary flex items-center gap-3 px-8 py-4 text-base">
                  Start Your Project
                  <motion.span
                    animate={shouldAnimate ? { x: [0, 4, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                  </motion.span>
                </button>
              </Link>
              <Link href="/projects">
                <button className="btn-secondary flex items-center gap-3 px-8 py-4 text-base">
                  <PlayIcon className="h-5 w-5" />
                  View Our Work
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column – Stats + Service Modules */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {companyStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-2xl p-5 text-center"
                    style={{
                      background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                      border: "1px solid #c8ccd8",
                      boxShadow:
                        "5px 5px 12px rgba(0,0,0,0.1), -5px -5px 12px rgba(255,255,255,0.88)",
                    }}
                  >
                    <div
                      className="absolute top-2 right-2 h-2 w-2 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
                        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.4)",
                      }}
                    />
                    <div
                      className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{
                        background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                        boxShadow: "0 3px 0 #0e1f4a, 2px 2px 6px rgba(0,0,0,0.2)",
                        border: "1px solid #1a4a9e",
                      }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div
                    className={styles.statLabel}
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Service modules dark panel */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl p-6"
              style={{
                background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
                border: "1px solid rgba(59,130,246,0.25)",
                boxShadow: "0 8px 0 #060e26, 6px 6px 20px rgba(0,0,0,0.25)",
              }}
            >
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
                (pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} h-2.5 w-2.5 rounded-full opacity-60`}
                    style={{
                      background:
                        "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
                      boxShadow:
                        "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
                    }}
                  />
                )
              )}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <div
                  className="mb-4 flex items-center gap-2"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-led-pulse"
                    style={{ boxShadow: "0 0 4px #f97316, 0 0 10px rgba(249,115,22,0.6)" }}
                  />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                    Service Modules — Online
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {techServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.title}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 rounded-xl p-3"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(59,130,246,0.15)",
                          boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.3)",
                        }}
                      >
                        <div
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                          style={{
                            background: serviceIconBg[index],
                            border: "1px solid rgba(59,130,246,0.3)",
                            boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Icon className="h-4 w-4 text-blue-300" />
                        </div>
                        <div>
                          <div
                            className="text-[10px] font-bold text-orange-400"
                            style={{ fontFamily: "ui-monospace, monospace" }}
                          >
                            {service.moduleId}
                          </div>
                          <div className="text-xs font-semibold text-slate-200">
                            {service.title}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
