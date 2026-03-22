"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  EyeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    title: "Web Development",
    description: "Modern, scalable applications built with cutting-edge technologies",
    icon: CodeBracketIcon,
    number: "01",
    href: "/services",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive user experiences that drive engagement and conversion",
    icon: EyeIcon,
    number: "02",
    href: "/services",
  },
  {
    title: "Graphics Design",
    description: "Visual identity and brand materials that tell your story",
    icon: PaintBrushIcon,
    number: "03",
    href: "/services",
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable business insights",
    icon: ChartBarIcon,
    number: "04",
    href: "/services",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProfessionalServices() {
  return (
    <section
      className={styles.section}
      style={{ background: "linear-gradient(175deg, #f5f7fc 0%, #edf0f7 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,58,138,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Vent slots top */}
      <div
        className="absolute top-0 left-0 right-0 h-4 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(30,58,138,0.15) 8px, rgba(30,58,138,0.15) 9px)",
        }}
      />

      <div className={`${styles.container} relative z-10`}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          {/* Engraved badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-5 py-2"
            style={{
              background: "linear-gradient(175deg, #edf0f7, #e2e6f0)",
              border: "1px solid #c8ccd8",
              boxShadow:
                "inset 1px 1px 3px rgba(0,0,0,0.1), inset -1px -1px 2px rgba(255,255,255,0.8)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-orange-500"
              style={{ boxShadow: "0 0 4px #f97316" }}
            />
            <span
              className="text-xs font-black uppercase tracking-[0.2em] text-slate-600"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Our Expertise
            </span>
          </div>

          <h2 className={styles.sectionTitle}>
            What We{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 60%, #1e3a8a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Create
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Four core services. Endless possibilities. Beautiful solutions.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`${styles.grid} lg:grid-cols-2`}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl p-7"
                style={{
                  background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                  border: "1px solid #c8ccd8",
                  boxShadow:
                    "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
                }}
              >
                {/* Corner screws */}
                {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
                  (pos, i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} h-2.5 w-2.5 rounded-full`}
                      style={{
                        background:
                          "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
                        boxShadow:
                          "inset 1px 1px 2px rgba(0,0,0,0.4), inset -1px -1px 1px rgba(255,255,255,0.35)",
                      }}
                    />
                  )
                )}

                {/* Module number — top right */}
                <div
                  className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 3px 0 #0e1f4a, 2px 2px 6px rgba(0,0,0,0.2)",
                    border: "1px solid #1a4a9e",
                    fontFamily: "ui-monospace, 'Fira Code', monospace",
                    fontSize: "11px",
                    fontWeight: 900,
                    color: "white",
                  }}
                >
                  {service.number}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                      boxShadow: "0 4px 0 #0e1f4a, 3px 3px 10px rgba(0,0,0,0.2)",
                      border: "1px solid #1a4a9e",
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 mobile:text-sm">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link href={service.href}>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-700 transition-colors duration-200 group-hover:text-orange-500">
                      <span style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>
                        Learn More
                      </span>
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>

                {/* Bottom ridge on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
