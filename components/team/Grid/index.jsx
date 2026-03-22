"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Grid.module.css";
import Image from "next/image";
import { teamMembers } from "@/components/shared/data/teamData";
import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const deptConfig = {
  Development: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-400",
    banner: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
    glow: "rgba(59,130,246,0.15)",
  },
  Content: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    dot: "bg-orange-400",
    banner: "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%)",
    glow: "rgba(249,115,22,0.15)",
  },
  Design: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    dot: "bg-purple-400",
    banner: "linear-gradient(135deg, #7e22ce 0%, #9333ea 50%, #a855f7 100%)",
    glow: "rgba(168,85,247,0.15)",
  },
  Analytics: {
    bg: "bg-green-50",
    text: "text-green-700",
    dot: "bg-green-400",
    banner: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #22c55e 100%)",
    glow: "rgba(34,197,94,0.15)",
  },
  Marketing: {
    bg: "bg-pink-50",
    text: "text-pink-700",
    dot: "bg-pink-400",
    banner: "linear-gradient(135deg, #be185d 0%, #db2777 50%, #ec4899 100%)",
    glow: "rgba(236,72,153,0.15)",
  },
  Management: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-400",
    banner: "linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)",
    glow: "rgba(16,185,129,0.15)",
  },
};

export default function TeamGrid() {
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
        {/* Header */}
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
              The Collective
            </span>
          </div>

          <h2 className="mt-3 text-4xl font-black text-slate-800 md:text-5xl">
            Meet the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experts
            </span>
          </h2>

          <div
            className="mx-auto my-5 h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }}
          />

          <p className="mx-auto max-w-2xl text-lg text-slate-500 mobile:text-sm">
            Talented professionals across development, design, content, and analytics — all working
            together to bring your vision to life.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
          }}
          className="flex flex-wrap justify-center gap-6"
        >
          {teamMembers.map((member) => {
            const Icon = member.icon;
            const dept = deptConfig[member.department] || deptConfig.Development;

            return (
              <motion.div
                key={member.id}
                variants={{ hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative flex w-full flex-col overflow-hidden rounded-2xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
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
                <div className="absolute right-3 top-3 z-10 h-2.5 w-2.5 rounded-full" style={screwLight} />

                {/* Coloured banner top */}
                <div
                  className="relative h-24 w-full flex-shrink-0 overflow-hidden"
                  style={{ background: dept.banner }}
                >
                  {/* Subtle crosshatch on banner */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  {/* Department label on banner */}
                  <div className="absolute bottom-3 left-4">
                    <span
                      className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm"
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Avatar — overlapping the banner */}
                <div className="relative -mt-10 mb-3 ml-5 flex-shrink-0">
                  <div
                    className="relative h-20 w-20 overflow-hidden rounded-2xl"
                    style={{
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2), 0 0 0 3px #fff",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  {/* Role icon badge */}
                  <div
                    className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{
                      background: dept.banner,
                      boxShadow: "0 2px 0 rgba(0,0,0,0.2)",
                      border: "2px solid #fff",
                    }}
                  >
                    <Icon className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5 pb-5">
                  {/* Name + role */}
                  <h3 className="text-base font-black text-slate-800">{member.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500">{member.role}</p>

                  {/* Location */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPinIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>{member.location}</span>
                  </div>

                  {/* Bio */}
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-slate-500">
                    {member.bio}
                  </p>

                  {/* Divider */}
                  <div className="my-3 h-px" style={{ background: "linear-gradient(90deg, #d8dce8, transparent)" }} />

                  {/* Stats row */}
                  <div className="mb-3 flex gap-4">
                    <div>
                      <div className="text-sm font-black text-slate-800">{member.projects}</div>
                      <div
                        className="text-[9px] font-bold uppercase tracking-wider text-slate-400"
                        style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                      >
                        Projects
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-800">{member.experience}</div>
                      <div
                        className="text-[9px] font-bold uppercase tracking-wider text-slate-400"
                        style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                      >
                        Experience
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full px-2.5 py-1 text-[10px] font-medium text-slate-600"
                        style={{
                          background: "linear-gradient(175deg, #f0f3fa 0%, #e4e8f4 100%)",
                          border: "1px solid #c8ccd8",
                          boxShadow: "1px 1px 3px rgba(0,0,0,0.06), -1px -1px 3px rgba(255,255,255,0.8)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-medium"
                        style={{
                          background: dept.glow,
                          border: `1px solid ${dept.glow}`,
                          color: dept.text.replace("text-", "").includes("blue")
                            ? "#1d4ed8"
                            : dept.text.replace("text-", "").includes("purple")
                              ? "#7e22ce"
                              : dept.text.replace("text-", "").includes("green")
                                ? "#15803d"
                                : dept.text.replace("text-", "").includes("orange")
                                  ? "#c2410c"
                                  : dept.text.replace("text-", "").includes("pink")
                                    ? "#be185d"
                                    : "#065f46",
                        }}
                      >
                        +{member.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
