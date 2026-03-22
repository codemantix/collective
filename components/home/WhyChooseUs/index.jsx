"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    icon: LightBulbIcon,
    title: "Innovation First",
    description:
      "We leverage cutting-edge technologies and methodologies to deliver solutions that give you a competitive edge.",
    moduleId: "R-01",
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description:
      "Bank-level security protocols and compliance standards to protect your sensitive data and operations.",
    moduleId: "R-02",
  },
  {
    icon: RocketLaunchIcon,
    title: "Rapid Deployment",
    description:
      "Agile development practices and CI/CD pipelines ensure faster time-to-market without compromising quality.",
    moduleId: "R-03",
  },
  {
    icon: UserGroupIcon,
    title: "Expert Team",
    description:
      "Senior developers, architects, and consultants with 10+ years of experience in enterprise solutions.",
    moduleId: "R-04",
  },
  {
    icon: ClockIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring, maintenance, and support to ensure your systems run smoothly.",
    moduleId: "R-05",
  },
  {
    icon: TrophyIcon,
    title: "Proven Success",
    description:
      "60+ successful projects delivered across various industries with 98% client satisfaction rate.",
    moduleId: "R-06",
  },
];

const checkPoints = [
  {
    title: "End-to-End Solutions",
    desc: "From strategy and design to development and deployment, we handle every aspect of your project.",
  },
  {
    title: "Scalable Architecture",
    desc: "Built for growth with cloud-native, microservices architecture that scales with your business.",
  },
  {
    title: "Industry Expertise",
    desc: "Deep knowledge across fintech, healthcare, e-commerce, and enterprise software domains.",
  },
];

export default function ProfessionalWhyChooseUs() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

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
            "linear-gradient(rgba(30,58,138,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Vent decoration top */}
      <div
        className="absolute top-0 left-0 right-0 h-4 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(30,58,138,0.15) 8px, rgba(30,58,138,0.15) 9px)",
        }}
      />

      <div className={`${styles.container} relative z-10`}>
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2"
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
                Why Choose Us
              </span>
            </div>

            <h2 className="mb-5 text-3xl font-black text-slate-800 md:text-5xl">
              Your Trusted{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 60%, #1e3a8a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technology Partner
              </span>
            </h2>

            <p
              className={styles.sectionSubtitle}>
              We combine deep technical expertise with business acumen to deliver solutions that not
              only meet your immediate needs but also position you for future growth and success.
            </p>

            {/* Checklist items */}
            <div className="space-y-4">
              {checkPoints.map(({ title, desc }) => (
                <div
                  key={title}
                  className="relative flex items-start gap-4 overflow-hidden rounded-xl p-4"
                  style={{
                    background: "linear-gradient(175deg, #edf0f7, #e2e6f0)",
                    border: "1px solid #c8ccd8",
                    boxShadow:
                      "inset 1px 1px 4px rgba(0,0,0,0.07), inset -1px -1px 3px rgba(255,255,255,0.85)",
                  }}
                >
                  {/* LED dot */}
                  <div
                    className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                      boxShadow: "0 2px 0 #0e1f4a, 1px 1px 4px rgba(0,0,0,0.2)",
                      border: "1px solid #1a4a9e",
                    }}
                  >
                    <CheckCircleIcon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-sm font-black text-slate-800">{title}</h4>
                    <p className="text-xs leading-relaxed text-slate-600 mobile:text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column – Reason Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className={`${styles.reasonCard} group relative overflow-hidden rounded-2xl p-5`}
                  style={{
                    background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                    border: "1px solid #c8ccd8",
                    boxShadow:
                      "4px 4px 10px rgba(0,0,0,0.09), -4px -4px 10px rgba(255,255,255,0.85)",
                  }}
                >
                  {/* Screw corners */}
                  {["top-2.5 left-2.5", "top-2.5 right-2.5"].map((pos, i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} h-2 w-2 rounded-full`}
                      style={{
                        background:
                          "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
                        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.4)",
                      }}
                    />
                  ))}

                  {/* Module ID */}
                  <div className={styles.moduleId}
                    style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                  >
                    {reason.moduleId}
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                      boxShadow: "0 3px 0 #0e1f4a, 2px 2px 6px rgba(0,0,0,0.2)",
                      border: "1px solid #1a4a9e",
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`${styles.reasonTitle} mb-2`}>
                    {reason.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">{reason.description}</p>

                  {/* Bottom ridge */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
