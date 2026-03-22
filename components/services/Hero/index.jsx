"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ChartBarIcon,
  EyeIcon,
  SwatchIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  TrophyIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Hero.module.css";

const servicesHighlights = [
  {
    id: "SVC-01",
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies",
    icon: CodeBracketIcon,
    features: ["React & Next.js", "Node.js APIs", "Cloud Deployment"],
  },
  {
    id: "SVC-02",
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversion",
    icon: EyeIcon,
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    id: "SVC-03",
    title: "Graphics Design",
    description: "Professional visual identity and marketing materials",
    icon: SwatchIcon,
    features: ["Brand Identity", "Print Design", "Digital Assets"],
  },
  {
    id: "SVC-04",
    title: "Data Analytics",
    description: "Transform your data into actionable business insights",
    icon: ChartBarIcon,
    features: ["Data Visualization", "Business Intelligence", "Predictive Analytics"],
  },
];

const servicesStats = [
  { label: "Services Delivered", value: "10+", icon: CheckCircleIcon },
  // { label: "Industries Served", value: "15+", icon: UsersIcon },
  { label: "Client Satisfaction", value: "98%", icon: TrophyIcon },
  { label: "Project Success Rate", value: "100%", icon: ArrowTrendingUpIcon },
];

const serviceBenefits = [
  "End-to-end project management",
  "Agile development methodology",
  "24/7 support & maintenance",
  "Scalable & future-proof solutions",
];

export default function ServicesHero() {
  const [currentService, setCurrentService] = useState(0);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % servicesHighlights.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isVisible]);

  const screwStyle = {
    background: "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
  };

  return (
    <section
      ref={elementRef}
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

      {/* Grid crosshatch */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blue ridge top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
      />

      {/* Corner screws */}
      {["top-5 left-5", "top-5 right-5", "bottom-5 left-5", "bottom-5 right-5"].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`}
          style={screwStyle}
        />
      ))}

      <div className={styles.container}>
        <div className={styles.inner}>
          {/* ── Left Column ── */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* LED Status */}
            <div className="flex items-center gap-3">
              <div
                className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
                style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
              />
              <span
                className="text-xs font-black uppercase tracking-[0.22em] text-blue-400"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
              >
                Services — Codemantix Collective
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl font-black leading-tight text-white  mobile:text-3xl">
              Transforming Ideas Into
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital Excellence
              </span>
            </h1>

            {/* Tagline */}
            <p className="max-w-xl text-base leading-relaxed text-slate-400 mobile:text-sm">
              Comprehensive digital services designed to elevate your business with cutting-edge
              technology, stunning design, and data-driven insights that deliver measurable results.
            </p>

            {/* Benefit bullets */}
            <div className="space-y-2.5">
              {serviceBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                >
                  <div
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"
                    style={{ boxShadow: "0 0 4px rgba(96,165,250,0.6)" }}
                  />
                  <span className="text-sm font-semibold text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className={styles.ctaRow}>
              <Link href="/contact">
                <button className="btn-orange">
                  Get Started Today
                  <ArrowRightIcon className="ml-2 inline h-4 w-4" />
                </button>
              </Link>
              <Link href="/projects">
                <button
                  className="group flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-slate-300 transition-colors hover:text-white"
                  style={{
                    background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    boxShadow: "0 3px 0 #060e26, 3px 3px 8px rgba(0,0,0,0.25)",
                  }}
                >
                  View Our Work
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            
          </motion.div>

          {/* ── Right Column — Service Showcase ── */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Active service panel */}
            <motion.div
              key={currentService}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl p-8"
              style={{
                background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
                border: "1px solid rgba(59,130,246,0.3)",
                boxShadow: "0 6px 0 #060e26, 5px 5px 20px rgba(0,0,0,0.35)",
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Corner screws */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} h-2.5 w-2.5 rounded-full`} style={screwStyle} />
              ))}

              <div className="relative z-10">
                {/* Module ID */}
                <div
                  className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-blue-400 opacity-80"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  {servicesHighlights[currentService].id} / Service Module
                </div>

                {/* Icon */}
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.3)",
                    border: "1px solid #1a4a9e",
                  }}
                >
                  {React.createElement(servicesHighlights[currentService].icon, {
                    className: "h-7 w-7 text-white",
                  })}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-black text-white mobile:text-xl">
                  {servicesHighlights[currentService].title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {servicesHighlights[currentService].description}
                </p>

                {/* Features */}
                <div className="space-y-2.5">
                  {servicesHighlights[currentService].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"
                        style={{ boxShadow: "0 0 4px rgba(96,165,250,0.6)" }}
                      />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Service selector pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {servicesHighlights.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentService(i)}
                  className="rounded-lg px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-200"
                  style={
                    i === currentService
                      ? {
                          background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                          border: "1px solid #1a4a9e",
                          boxShadow: "0 3px 0 #0e1f4a",
                          color: "#fff",
                          fontFamily: "ui-monospace, 'Fira Code', monospace",
                        }
                      : {
                          background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
                          border: "1px solid rgba(59,130,246,0.2)",
                          color: "#94a3b8",
                          fontFamily: "ui-monospace, 'Fira Code', monospace",
                        }
                  }
                >
                  {s.id}
                </button>
              ))}
            </div>
            {/* Stats grid */}
            <div className={styles.statsGrid}>
              {servicesStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      boxShadow: "0 3px 0 #060e26, 3px 3px 8px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div
                      className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                        boxShadow: "0 3px 0 #0e1f4a",
                        border: "1px solid #1a4a9e",
                      }}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-xl font-black text-white">{stat.value}</div>
                    <div
                      className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-blue-400"
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
