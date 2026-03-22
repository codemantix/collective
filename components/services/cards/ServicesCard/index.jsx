"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "./ServicesCard.module.css";

export default function ServiceCard({ icon, title, description, variant = "default" }) {
  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Dark variant uses blue panel; others use matte surface panel
  const isDark = variant === "dark";

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full cursor-pointer overflow-hidden rounded-2xl p-7"
      style={
        isDark
          ? {
              background: "linear-gradient(175deg, #1a2e6b 0%, #0e1f4a 100%)",
              border: "1px solid rgba(59,130,246,0.25)",
              boxShadow: "0 6px 0 #060e26, 5px 5px 16px rgba(0,0,0,0.25)",
            }
          : {
              background: "linear-gradient(175deg, #f5f7fc, #edf0f7)",
              border: "1px solid #c8ccd8",
              boxShadow:
                "5px 5px 14px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.88)",
            }
      }
    >
      {/* Corner screws */}
      {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} h-2.5 w-2.5 rounded-full`}
          style={
            isDark
              ? {
                  background:
                    "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
                  boxShadow:
                    "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
                  opacity: 0.6,
                }
              : {
                  background:
                    "radial-gradient(circle at 38% 38%, #c8ccd8 0%, #7a84a0 55%, #505870 100%)",
                  boxShadow:
                    "inset 1px 1px 2px rgba(0,0,0,0.4), inset -1px -1px 1px rgba(255,255,255,0.35)",
                }
          }
        />
      ))}

      {/* Subtle grid for dark variant */}
      {isDark && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="space-y-5">
          {/* Icon */}
          <div
            className="inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(175deg, #2563eb, #1e3a8a)",
              boxShadow: "0 4px 0 #0e1f4a, 3px 3px 8px rgba(0,0,0,0.2)",
              border: "1px solid #1a4a9e",
            }}
          >
            <div className="text-white [&>svg]:h-7 [&>svg]:w-7">{icon}</div>
          </div>

          {/* Title + description */}
          <div className="space-y-2.5">
            <h3
              className={`text-xl font-black transition-colors duration-200 group-hover:text-blue-700 ${
                isDark ? "text-white group-hover:!text-blue-300" : "text-slate-800"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm leading-relaxed mobile:text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {description}
            </p>
          </div>
        </div>

      
      </div>

      {/* Bottom ridge on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: "linear-gradient(90deg, #1e3a8a, #2563eb, #f97316)" }}
      />
    </motion.div>
  );
}
