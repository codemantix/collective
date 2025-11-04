"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServicesCard";

export default function ServiceSection({ title, description, services, variant = "default" }) {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const getBackgroundClasses = () => {
    switch (variant) {
      case "dark":
        return "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-primary-900/50 dark:to-gray-800";
      case "gradient":
        return "bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-gray-900 dark:via-primary-900/50 dark:to-gray-800";
      default:
        return "bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900";
    }
  };

  const getTextClasses = () => {
    return variant === "dark" ? "text-white" : "text-gray-900 dark:text-white";
  };

  const getDescriptionClasses = () => {
    return variant === "dark" ? "text-gray-300" : "text-gray-600 dark:text-gray-300";
  };

  return (
    <section className={`relative w-full overflow-hidden py-24 ${getBackgroundClasses()}`}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 58, 138, 0.1) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Elegant floating elements */}
        <div className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary-200/30 to-accent-200/30 blur-2xl" />
        <div className="absolute -left-20 bottom-20 h-32 w-32 rounded-full bg-gradient-to-br from-secondary-200/30 to-primary-200/30 blur-2xl" />
      </div>

      {/* Content container */}
      <div className="container relative mx-auto px-6">
        {/* Enhanced section heading */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-4 py-2 text-sm font-semibold text-primary-700 backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80 dark:text-primary-300"
          >
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
            Our Services
          </motion.div>

          <h2
            className={`mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl ${getTextClasses()}`}
          >
            {title}
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500" />

          <p className={`mx-auto max-w-3xl text-xl  mobile:text-sm leading-relaxed ${getDescriptionClasses()}`}>
            {description}
          </p>
        </motion.div>

        {/* Enhanced services grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                  rotateX: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.1,
                  },
                },
              }}
            >
              <ServiceCard {...service} variant={variant} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
