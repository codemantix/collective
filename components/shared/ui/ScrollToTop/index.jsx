"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className={styles.btn}
          style={{
            background: "linear-gradient(145deg, #1e3a8a 0%, #0e1f4a 100%)",
            boxShadow:
              "4px 4px 10px rgba(0,0,0,0.45), -2px -2px 6px rgba(255,255,255,0.05), 0 0 0 1px rgba(59,130,246,0.25)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
          aria-label="Scroll to top"
        >
          {/* Grid texture */}
          <div
            className={styles.gridTexture}
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          />

          {/* Corner screws */}
          {[
            "top-1 left-1",
            "top-1 right-1",
            "bottom-1 left-1",
            "bottom-1 right-1",
          ].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} h-1.5 w-1.5 rounded-full`}
              style={{
                background:
                  "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
                boxShadow:
                  "inset 1px 1px 1px rgba(0,0,0,0.5), inset -0.5px -0.5px 0.5px rgba(255,255,255,0.08)",
              }}
            />
          ))}

          {/* Orange LED pulse — top center */}
          <div
            className={styles.led}
            style={{ boxShadow: "0 0 4px #f97316, 0 0 10px rgba(249,115,22,0.6)" }}
          />

          {/* Arrow icon */}
          <ArrowUp size={18} className={styles.icon} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
