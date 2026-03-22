"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  EyeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Snapshot.module.css";

const coreServices = [
  {
    id: "SVC-01",
    name: "Web Development",
    shortDesc: "Modern, scalable web applications",
    description:
      "Build cutting-edge web applications with React, Next.js, and Node.js. From startups to enterprise solutions, we deliver fast, secure, and scalable platforms.",
    icon: CodeBracketIcon,
    href: "/services#web-development",
    features: ["React & Next.js", "Node.js APIs", "Cloud Deployment", "Performance Optimization"],
    stats: { projects: "20+", satisfaction: "98%" },
  },
  {
    id: "SVC-02",
    name: "UI/UX Design",
    shortDesc: "User-centered design experiences",
    description:
      "Craft intuitive and beautiful user interfaces that drive engagement. Our design process focuses on user research, prototyping, and conversion optimization.",
    icon: EyeIcon,
    href: "/services#ui-ux",
    features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
    stats: { projects: "20+", satisfaction: "99%" },
  },
  {
    id: "SVC-03",
    name: "Graphics Design",
    shortDesc: "Professional visual identity",
    description:
      "Create compelling visual identities and marketing materials that communicate your brand story effectively across all touchpoints and platforms.",
    icon: PaintBrushIcon,
    href: "/services#graphics-design",
    features: ["Brand Identity", "Print Design", "Digital Assets", "Marketing Materials"],
    stats: { projects: "20+", satisfaction: "97%" },
  },
  {
    id: "SVC-04",
    name: "Data Analytics",
    shortDesc: "Transform data into insights",
    description:
      "Turn your data into actionable business intelligence with advanced analytics and beautiful visualizations that drive decision-making.",
    icon: ChartBarIcon,
    href: "/services#data-analysis",
    features: ["Data Visualization", "ML Models", "Business Intelligence", "Predictive Analytics"],
    stats: { projects: "20+", satisfaction: "100%" },
  },
];

const ServicesSnapshot = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const screwStyle = {
    background: "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3), inset -1px -1px 1px rgba(255,255,255,0.5)",
  };

  return (
    <section
      ref={elementRef}
      className={styles.section}
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
        className="absolute top-0 left-0 right-0 h-4 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(30,58,138,0.18) 8px, rgba(30,58,138,0.18) 9px)",
        }}
      />

      {/* Corner screws */}
      {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} hidden h-3 w-3 rounded-full lg:block`} style={screwStyle} />
      ))}

      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          {/* LED + monospace label */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <div
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
            />
            <span
              className="text-xs font-black uppercase tracking-[0.22em] text-blue-700"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Our Core Services
            </span>
          </div>

          <h2 className={styles.sectionTitle}>
            Comprehensive{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Solutions
            </span>{" "}
            Portfolio
          </h2>

          <div
            className="mx-auto mb-6 h-0.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #1d4ed8, #7c3aed, #f97316)" }}
          />

          <p className={`${styles.sectionSubtitle} mobile:text-sm`}>
            From concept to completion, we deliver end-to-end digital solutions that transform your
            business. Discover our comprehensive suite of services.
          </p>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { icon: CheckCircleIcon, text: "550+ Projects Delivered" },
              { icon: StarIcon, text: "98.5% Client Satisfaction" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-slate-600"
                style={{
                  background: "linear-gradient(175deg, #edf0f7, #e2e6f0)",
                  boxShadow:
                    "inset 2px 2px 5px rgba(0,0,0,0.07), inset -2px -2px 5px rgba(255,255,255,0.9)",
                }}
              >
                <Icon className="h-4 w-4 text-blue-600" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl p-7"
                style={{
                  background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                  border: "1px solid #c8ccd8",
                  boxShadow: "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                }}
              >
                {/* Corner screws */}
                {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                  <div key={i} className={`absolute ${pos} h-2.5 w-2.5 rounded-full`} style={screwStyle} />
                ))}

                <div className="relative z-10 flex h-full flex-col gap-5">
                  {/* Card header: icon + module ID */}
                  <div className="flex items-start justify-between">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                        boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
                        border: "1px solid #1a4a9e",
                      }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {service.id}
                    </span>
                  </div>

                  {/* Title + shortDesc */}
                  <div>
                    <h3 className="mb-1 text-xl font-black text-slate-800 transition-colors group-hover:text-blue-700">
                      {service.name}
                    </h3>
                    <p
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                      style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                    >
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-slate-600 mobile:text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"
                          style={{ boxShadow: "0 0 4px rgba(59,130,246,0.5)" }}
                        />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats mini row */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Projects", value: service.stats.projects },
                      { label: "Satisfaction", value: service.stats.satisfaction },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="rounded-lg p-3 text-center"
                        style={{
                          background: "linear-gradient(175deg, #edf0f7, #e2e6f0)",
                          boxShadow:
                            "inset 2px 2px 5px rgba(0,0,0,0.07), inset -2px -2px 5px rgba(255,255,255,0.9)",
                        }}
                      >
                        <div className="text-base font-black text-slate-800">{value}</div>
                        <div
                          className="text-[10px] font-bold uppercase tracking-widest text-slate-500"
                          style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={service.href}>
                    <div
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-black uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                      style={{
                        background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                        boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
                        border: "1px solid #1a4a9e",
                        fontFamily: "ui-monospace, 'Fira Code', monospace",
                      }}
                    >
                      Explore Service
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </Link>
                </div>

                {/* Bottom ridge */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-slate-600 mobile:text-sm">
            Ready to transform your digital presence with our comprehensive services?
          </p>
          <Link href="/contact">
            <button className="btn-orange">
              Get Started Today
              <ArrowRightIcon className="ml-2 inline h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
