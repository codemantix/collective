"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Carousel.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  HeartIcon,
  StarIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  SwatchIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { projects } from "@/components/shared/data/ProjectsData";

const serviceConfig = {
  "Web Development": {
    icon: CodeBracketIcon,
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  "UI/UX Design": {
    icon: PaintBrushIcon,
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  "Graphics Design": {
    icon: SwatchIcon,
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
  },
  "Data Analytics": {
    icon: ChartBarIcon,
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
};

const categoryMapping = {
  "UI/UX Design": "UI/UX Design",
  "Web Development": "Web Development",
  "Graphics Design": "Graphics Design",
  "Data Analytics": "Data Analytics",
  "Mobile App": "UI/UX Design",
  "E-Commerce": "Web Development",
};

export default function ProjectsGrid() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  const allProjects = projects.filter((p) => categoryMapping[p.category]);

  const screwLight = {
    background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
    boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 1px rgba(0,0,0,0.15)",
  };

  return (
    <section
      id="projects-grid"
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

      {/* Blue ridge top */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
      />

      {/* Corner screws */}
      {["top-5 left-5", "top-5 right-5", "bottom-5 left-5", "bottom-5 right-5"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`} style={screwLight} />
      ))}

      <div className={`${styles.container} relative z-10`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.header} mb-16`}
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
              Featured Projects
            </span>
          </div>

          <h2 className={`${styles.sectionTitle} mt-3`}>
            Our Latest{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Work
            </span>
          </h2>

          <div
            className="mx-auto my-5 h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }}
          />

          <p className={`${styles.sectionSubtitle} mx-auto max-w-2xl`}>
            Discover our portfolio of stunning projects across web development, design, and
            analytics.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {allProjects.map((project, idx) => {
            const mappedCategory = categoryMapping[project.category];
            const serviceInfo = serviceConfig[mappedCategory];
            const IconComponent = serviceInfo?.icon || CodeBracketIcon;

            return (
              <motion.div
                key={`${project.title}-${idx}`}
                variants={{ hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl"
                style={{
                  background: "linear-gradient(175deg, #f9fafc 0%, #f0f3fa 100%)",
                  boxShadow: "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                  border: "1px solid #c8ccd8",
                }}
              >
                {/* Bottom ridge hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute right-4 top-4 z-10">
                    <div
                      className="rounded-full p-2"
                      style={{
                        background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                        boxShadow: "0 3px 0 #b45309",
                      }}
                    >
                      <StarIcon className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Image overlay with stats on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-4 flex gap-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-1.5 text-sm">
                      <HeartIcon className="h-4 w-4" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <EyeIcon className="h-4 w-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  {project.link && (
                    <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-700" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Category pill */}
                  <div className="mb-3 flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg ${serviceInfo?.bgColor}`}
                    >
                      <IconComponent className={`h-4 w-4 ${serviceInfo?.textColor}`} />
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wide ${serviceInfo?.textColor}`}>
                      {mappedCategory}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-base font-black text-slate-800 sm:text-lg">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.technologies?.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-600"
                        style={{
                          background: "linear-gradient(175deg, #f0f3fa 0%, #e4e8f4 100%)",
                          border: "1px solid #c8ccd8",
                          boxShadow: "1px 1px 3px rgba(0,0,0,0.07), -1px -1px 3px rgba(255,255,255,0.8)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 3 && (
                      <span
                        className="rounded-full px-2.5 py-1 text-[11px] font-medium text-blue-700"
                        style={{
                          background: "rgba(37,99,235,0.08)",
                          border: "1px solid rgba(37,99,235,0.2)",
                        }}
                      >
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div
                    className="mt-auto flex items-center justify-between border-t pt-4"
                    style={{ borderColor: "#d8dce8" }}
                  >
                    {/* Status dot */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          project.status === "Live"
                            ? "bg-green-400"
                            : project.status === "In Development"
                              ? "bg-yellow-400"
                              : "bg-gray-400"
                        }`}
                        style={
                          project.status === "Live"
                            ? { boxShadow: "0 0 4px rgba(74,222,128,0.7)" }
                            : project.status === "In Development"
                              ? { boxShadow: "0 0 4px rgba(250,204,21,0.7)" }
                              : {}
                        }
                      />
                      <span className="text-xs text-slate-500">{project.status}</span>
                    </div>

                    {/* View link */}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-xs font-bold transition-opacity hover:opacity-70 ${serviceInfo?.textColor}`}
                      >
                        View Project
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">Coming Soon</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <button className="btn-orange">
                Start Your Project
                <RocketLaunchIcon className="ml-2 inline h-4 w-4" />
              </button>
            </Link>

            <Link href="/contact">
              <button
                className="group flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-slate-600 transition-colors hover:text-slate-800"
                style={{
                  background: "linear-gradient(175deg, #f9fafc 0%, #edf0f7 100%)",
                  boxShadow: "3px 3px 8px rgba(0,0,0,0.1), -3px -3px 8px rgba(255,255,255,0.9)",
                  border: "1px solid #c8ccd8",
                }}
              >
                Discuss Your Idea
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
