"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  UsersIcon,
  HeartIcon,
  TrophyIcon,
  SparklesIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Hero.module.css";

const achievements = [
  { label: "Years of Excellence", value: "3+", icon: TrophyIcon },
  { label: "Happy Clients", value: "12+", icon: HeartIcon },
  { label: "Projects Delivered", value: "10+", icon: RocketLaunchIcon },
  { label: "Team Members", value: "10+", icon: UsersIcon },
];

const coreValues = [
  { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions", icon: LightBulbIcon },
  { title: "Excellence", description: "Delivering quality that exceeds expectations", icon: StarIcon },
  { title: "Collaboration", description: "Building partnerships that drive success", icon: UsersIcon },
  { title: "Impact", description: "Creating solutions that transform businesses", icon: SparklesIcon },
];

export default function AboutHero() {
  const { elementRef, isVisible } = useIntersectionObserver();

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
          className={`absolute ${pos} h-3 w-3 rounded-full opacity-60`}
          style={{
            background: "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
            boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
          }}
        />
      ))}

      <div className={`${styles.container} flex items-center`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-center"
        >
          {/* Module status row */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center justify-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 4px #f97316, 0 0 12px rgba(249,115,22,0.65)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              ABOUT — CODEMANTIX COLLECTIVE
            </span>
            <span
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 4px #f97316, 0 0 12px rgba(249,115,22,0.65)" }}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-5 text-5xl font-black text-white md:text-7xl mobile:text-3xl"
          >
            Innovating{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa 0%, #3b82f6 60%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital
            </span>
            <br />
            Experiences
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-400 mobile:text-sm"
          >
            We craft innovative solutions in web development, UI/UX design, graphics design, and
            data analysis that empower businesses and accelerate growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                className="btn-orange flex items-center gap-3 px-10 py-4 text-base"
              >
                <span>View Our Work</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/services">
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
                <SparklesIcon className="h-5 w-5" />
                <span>Our Services</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={containerVariants}
            className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={i} variants={itemVariants}>
                  <div
                    className="rounded-2xl p-5 text-center h-full"
                    style={{
                      background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
                      border: "1px solid rgba(59,130,246,0.25)",
                      boxShadow: "0 4px 0 #060e26, 3px 3px 10px rgba(0,0,0,0.3)",
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
                    <div className="mb-1 text-2xl font-black text-white">{achievement.value}</div>
                    <div
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Core Values */}
          {/* <motion.div variants={itemVariants} className="mx-auto max-w-5xl">
            <div
              className="mb-6 flex items-center justify-center gap-3"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-800/60" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Core Values</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-800/60" />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {coreValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.3)",
                    }}
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-blue-400" />
                    <div className="text-sm font-black text-white">{value.title}</div>
                    <div className="mt-1 text-xs text-slate-300">{value.description}</div>
                  </div>
                );
              })}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
