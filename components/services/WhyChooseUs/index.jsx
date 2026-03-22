"use client";

import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    id: "WHY-01",
    icon: LightBulbIcon,
    title: "Innovation First",
    description:
      "We leverage cutting-edge technologies and methodologies to deliver solutions that give you a competitive edge in the digital landscape.",
  },
  {
    id: "WHY-02",
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description:
      "Bank-level security protocols and compliance standards to protect your sensitive data and business operations.",
  },
  {
    id: "WHY-03",
    icon: RocketLaunchIcon,
    title: "Rapid Deployment",
    description:
      "Agile development practices and CI/CD pipelines ensure faster time-to-market without compromising quality.",
  },
  {
    id: "WHY-04",
    icon: UserGroupIcon,
    title: "Expert Team",
    description:
      "Senior developers, architects, and consultants with 10+ years of experience in enterprise solutions.",
  },
  {
    id: "WHY-05",
    icon: ClockIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring, maintenance, and support to ensure your systems run smoothly.",
  },
  {
    id: "WHY-06",
    icon: TrophyIcon,
    title: "Proven Success",
    description:
      "200+ successful projects delivered across various industries with 98% client satisfaction rate.",
  },
];

const checkItems = [
  {
    title: "End-to-End Solutions",
    desc: "From strategy and design to development and deployment, we handle every aspect of your project with precision and care.",
  },
  {
    title: "Scalable Architecture",
    desc: "Built for growth with cloud-native, microservices architecture that scales with your business demands.",
  },
  {
    title: "Industry Expertise",
    desc: "Deep knowledge across fintech, healthcare, e-commerce, and enterprise software domains.",
  },
];

export default function WhyChooseUs() {
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
          <div className="mb-5 flex items-center justify-center gap-2">
            <div
              className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
              style={{ boxShadow: "0 0 6px #f97316, 0 0 12px rgba(249,115,22,0.5)" }}
            />
            <span
              className="text-xs font-black uppercase tracking-[0.22em] text-blue-700"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
            >
              Why Choose Us
            </span>
          </div>

          <h2 className={styles.sectionTitle}>
            Your Trusted
            <span
              style={{
                background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}Technology Partner
            </span>
          </h2>

          <div
            className="mx-auto mb-6 h-0.5 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #1d4ed8, #7c3aed, #f97316)" }}
          />

          <p className={`${styles.sectionSubtitle} mobile:text-sm`}>
            We combine deep technical expertise with business acumen to deliver solutions that not
            only meet your immediate needs but also position you for future growth and success.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: checkmark items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {checkItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl p-5"
                style={{
                  background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                  border: "1px solid #c8ccd8",
                  boxShadow: "5px 5px 14px rgba(0,0,0,0.08), -5px -5px 14px rgba(255,255,255,0.88)",
                }}
              >
                <div
                  className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                    boxShadow: "0 3px 0 #0e1f4a",
                    border: "1px solid #1a4a9e",
                  }}
                >
                  <CheckCircleIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 font-black text-slate-800">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600 mobile:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl p-5"
                  style={{
                    background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
                    border: "1px solid #c8ccd8",
                    boxShadow: "5px 5px 14px rgba(0,0,0,0.08), -5px -5px 14px rgba(255,255,255,0.88)",
                  }}
                >
                  {/* Module ID */}
                  <div
                    className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
                    style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                  >
                    {reason.id}
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
                      boxShadow: "0 3px 0 #0e1f4a, 2px 2px 6px rgba(0,0,0,0.2)",
                      border: "1px solid #1a4a9e",
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mb-2 text-base font-black text-slate-800 transition-colors group-hover:text-blue-700">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 mobile:text-sm">
                    {reason.description}
                  </p>

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
