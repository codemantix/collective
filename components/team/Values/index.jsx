"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Values.module.css";
import {
  LightBulbIcon,
  UsersIcon,
  StarIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  HandRaisedIcon,
  BeakerIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const teamValues = [
  {
    title: "Collaborative Spirit",
    description: "We believe in the power of teamwork and collective intelligence to solve complex challenges.",
    icon: UsersIcon,
    id: "VAL-01",
  },
  {
    title: "Continuous Learning",
    description: "We're committed to staying ahead of the curve through constant learning and skill development.",
    icon: LightBulbIcon,
    id: "VAL-02",
  },
  {
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we deliver, ensuring exceptional results.",
    icon: StarIcon,
    id: "VAL-03",
  },
  {
    title: "Innovation Drive",
    description: "We push boundaries and explore new possibilities to create groundbreaking solutions.",
    icon: RocketLaunchIcon,
    id: "VAL-04",
  },
];

const workCulture = [
  {
    title: "Remote-First",
    description: "Flexible work arrangements that promote work-life balance and global collaboration.",
    icon: GlobeAltIcon,
  },
  {
    title: "Growth Focused",
    description: "Continuous learning opportunities and career development programs for all team members.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Inclusive Environment",
    description: "Diverse and welcoming workplace where everyone's voice is heard and valued.",
    icon: HandRaisedIcon,
  },
  {
    title: "Innovation Lab",
    description: "Dedicated time for experimentation and exploring new technologies and methodologies.",
    icon: BeakerIcon,
  },
];

export default function TeamValues() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  const screwLight = {
    background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
    boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 1px rgba(0,0,0,0.15)",
  };

  return (
    <section
      ref={elementRef}
      className={`${styles.section} relative overflow-hidden py-24`}
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

      {/* Vent strip */}
      <div
        className="absolute left-0 right-0 top-0 h-4 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 6px, rgba(150,160,185,0.4) 6px, rgba(150,160,185,0.4) 7px)",
        }}
      />

      {/* Blue ridge */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
      />

      {/* Corner screws */}
      {["top-5 left-5", "top-5 right-5", "bottom-5 left-5", "bottom-5 right-5"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`} style={screwLight} />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ── Values ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
            />
            <span
              className="text-xs font-black uppercase tracking-[0.22em] text-blue-600"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Our Core Principles
            </span>
          </div>

          <h2 className="mt-3 text-4xl font-black text-slate-800 md:text-5xl">
            What{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Drives Us
            </span>
          </h2>

          <div
            className="mx-auto my-5 h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }}
          />

          <p className="mx-auto max-w-2xl text-lg text-slate-500 mobile:text-sm">
            The principles that guide how we work, collaborate, and deliver excellence every day.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamValues.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="group relative overflow-hidden rounded-2xl p-6"
                style={{
                  background: "linear-gradient(175deg, #f9fafc 0%, #edf0f7 100%)",
                  boxShadow: "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                  border: "1px solid #c8ccd8",
                }}
              >
                {/* Bottom ridge */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                />
                <div className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full" style={screwLight} />

                <div
                  className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 opacity-70"
                  style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                >
                  {value.id}
                </div>

                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
                    border: "1px solid #1a4a9e",
                  }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="mb-2 font-black text-slate-800 text-lg">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Work Culture ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <div
            className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-600"
            style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
          >
            How We Work
          </div>
          <h2 className="text-3xl font-black text-slate-800 md:text-4xl">
            Our Work{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Culture
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {workCulture.map((culture, i) => {
            const Icon = culture.icon;
            return (
              <motion.div
                key={culture.title}
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="group relative overflow-hidden rounded-2xl p-6 text-center"
                style={{
                  background: "linear-gradient(175deg, #f9fafc 0%, #edf0f7 100%)",
                  boxShadow: "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                  border: "1px solid #c8ccd8",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                />

                <div
                  className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
                    border: "1px solid #1a4a9e",
                  }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="mb-2 font-black text-slate-800 text-lg">{culture.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{culture.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center"
        >
          <div className="mb-4 text-lg font-semibold text-slate-600">
            Ready to work with our amazing team?
          </div>
          <Link href="/careers">
            <button className="btn-orange">
              Get In Touch
              <ArrowRightIcon className="ml-2 inline h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
