"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  StarIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import styles from "./TeamOverview.module.css";



export default function TeamOverview() {
  const { elementRef, isVisible } = useIntersectionObserver();

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`${styles.inner} gap-12 lg:gap-20`}
        >
          {/* Left â€” content */}
          <div className={styles.leftCol}>
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full bg-orange-500"
                style={{ boxShadow: "0 0 4px #f97316" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
              >
                Meet Our Team
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 text-4xl font-black text-slate-800 md:text-5xl"
            >
              Working With{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 60%, #1e3a8a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Experts
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-8 max-w-xl text-base mobile:text-sm leading-relaxed text-slate-600">
              At Codemantix Collective, our team is a fusion of creativity, strategy, and technical
              excellence. We unite designers, developers, and analysts under one vision: to craft
              innovative digital solutions that empower businesses and inspire users.
            </motion.p>

            

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Link href="/team">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 2 }}
                  className="btn-orange flex items-center gap-3 px-8 py-3.5 text-sm"
                >
                  <span>Meet Our Team</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right â€” image + specializations */}
          <div className="space-y-8">
            {/* Team image */}
            <motion.div variants={itemVariants} className="group relative">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                  border: "1px solid #c8ccd8",
                  boxShadow:
                    "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                }}
              >
                {/* Corner screws on image panel */}
                {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
                  (pos, i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} z-10 h-2.5 w-2.5 rounded-full`}
                      style={{
                        background:
                          "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
                        boxShadow:
                          "inset 1px 1px 2px rgba(0,0,0,0.4), inset -1px -1px 1px rgba(255,255,255,0.35)",
                      }}
                    />
                  )
                )}

                <Image
                  src="/Images/Teampicture.jpg"
                  alt="Our Amazing Team"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                />

                {/* Floaters */}
                <div
                  className="absolute right-5 top-5 z-10 rounded-xl px-3 py-2"
                  style={{
                    background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                    border: "1px solid #c8ccd8",
                    boxShadow: "2px 2px 6px rgba(0,0,0,0.1), -2px -2px 6px rgba(255,255,255,0.88)",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <HeartIcon className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-bold text-slate-700">10+ Experts</span>
                  </div>
                </div>

                <div
                  className="absolute bottom-5 left-5 z-10 rounded-xl px-3 py-2"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 3px 0 #0e1f4a, 2px 2px 8px rgba(0,0,0,0.3)",
                    border: "1px solid #1a4a9e",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <StarIcon className="h-4 w-4 text-white" />
                    <span className="text-xs font-bold text-white">4.9 / 5 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

           
          </div>
        </motion.div>
      </div>
    </section>
  );
}
