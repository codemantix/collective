"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development for debugging
    if (process.env.NODE_ENV !== "development") return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime);
        }
        if (entry.entryType === "first-input") {
          console.log("FID:", entry.processingStart - entry.startTime);
        }
        if (entry.entryType === "layout-shift") {
          if (!entry.hadRecentInput) {
            console.log("CLS:", entry.value);
          }
        }
      }
    });

    observer.observe({ entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"] });

    // Measure Time to Interactive
    const measureTTI = () => {
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const tti = timing.domInteractive - timing.navigationStart;
        console.log("TTI:", tti);
      }
    };

    // Delay TTI measurement to ensure DOM is ready
    setTimeout(measureTTI, 0);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
