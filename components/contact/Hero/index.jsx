"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Hero.module.css";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const contactMethods = [
  { icon: EnvelopeIcon, label: "Email", value: "codemantixcollective@gmail.com" },
  { icon: PhoneIcon, label: "Phone", value: "+234 812 312 1369" },
  { icon: MapPinIcon, label: "Location", value: "Enugu, Nigeria" },
  { icon: ClockIcon, label: "Hours", value: "Mon–Fri · 9 AM–5 PM WAT" },
];

export default function ContactHero() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const screwStyle = {
    background: "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
  };

  return (
    <section
      ref={elementRef}
      className={`${styles.section} relative overflow-hidden`}
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
        <div key={i} className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`} style={screwStyle} />
      ))}

      <div className={styles.container}>
        {/* LED + label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <div
            className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
            style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
          />
          <span
            className="text-xs font-black uppercase tracking-[0.22em] text-blue-400"
            style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
          >
            Get In Touch
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-center text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl mobile:text-3xl"
        >
          Let&rsquo;s Build Something{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Together
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-8 h-px w-24"
          style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-slate-400 mobile:text-sm"
        >
          Have a project in mind, a question, or just want to say hello? Drop us a line — we're
          always excited to connect and explore what we can create together.
        </motion.p>

        {/* Contact method cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {contactMethods.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="rounded-xl p-5 text-center break-words"
                style={{
                  background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  boxShadow: "0 3px 0 #060e26, 3px 3px 8px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  className="mx-auto mb-3  flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 3px 0 #0e1f4a",
                    border: "1px solid #1a4a9e",
                  }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div
                  className="mb-1 text-[10px] font-black uppercase tracking-widest break-words text-blue-400"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  {m.label}
                </div>
                <div className="text-sm font-semibold leading-tight text-white">{m.value}</div>
              </div>
            );
          })}
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="#contact-form">
            <button className="btn-orange">
              Send Us a Message
              <ArrowRightIcon className="ml-2 inline h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
