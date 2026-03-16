"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ServiceCard({ icon, title, description, variant = "default" }) {
  const cardVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const getCardClasses = () => {
    const baseClasses =
      "group relative overflow-hidden rounded-3xl backdrop-blur-md transition-all duration-500";

    switch (variant) {
      case "dark":
        return `${baseClasses} border border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 hover:border-white/20`;
      case "accent":
        return `${baseClasses} border border-accent-200/60 bg-gradient-to-br from-white/90 to-accent-50/80 hover:from-white to-accent-50 hover:border-accent-300 hover:shadow-2xl hover:shadow-accent-500/20 dark:border-accent-700/60 dark:from-slate-800/90 dark:to-accent-900/80 dark:hover:from-slate-800 dark:hover:to-accent-900`;
      case "secondary":
        return `${baseClasses} border border-secondary-200/60 bg-gradient-to-br from-white/90 to-secondary-50/80 hover:from-white to-secondary-50 hover:border-secondary-300 hover:shadow-2xl hover:shadow-secondary-500/20 dark:border-secondary-700/60 dark:from-slate-800/90 dark:to-secondary-900/80 dark:hover:from-slate-800 dark:hover:to-secondary-900`;
      case "gradient":
        return `${baseClasses} border border-primary-200/60 bg-gradient-to-br from-white/90 to-primary-50/80 hover:from-white to-primary-50 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/20 dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80 dark:hover:from-slate-800 dark:hover:to-primary-900`;
      default:
        return `${baseClasses} border border-primary-200/60 bg-gradient-to-br from-white/90 to-gray-50/80 hover:from-white to-gray-50 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10 dark:border-gray-700/60 dark:from-slate-800/90 dark:to-slate-700/80 dark:hover:from-slate-800 dark:hover:to-slate-700`;
    }
  };

  const getIconClasses = () => {
    const baseClasses =
      "relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-all duration-500";

    switch (variant) {
      case "dark":
        return `${baseClasses} bg-gradient-to-br from-white/20 to-white/10 text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`;
      case "accent":
        return `${baseClasses} bg-gradient-to-br from-accent-500 to-accent-600 text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-accent-500/50`;
      case "secondary":
        return `${baseClasses} bg-gradient-to-br from-secondary-500 to-secondary-600 text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-secondary-500/50`;
      case "gradient":
        return `${baseClasses} bg-gradient-to-br from-primary-500 to-accent-500 text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary-500/50`;
      default:
        return `${baseClasses} bg-gradient-to-br from-primary-500 to-primary-600 text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary-500/50`;
    }
  };

  const getTextClasses = () => {
    return variant === "dark"
      ? "text-white group-hover:text-white"
      : "text-gray-900 group-hover:text-gray-900 dark:text-white dark:group-hover:text-white";
  };

  const getDescriptionClasses = () => {
    return variant === "dark"
      ? "text-gray-300 group-hover:text-gray-200"
      : "text-gray-600 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200";
  };

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -12,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={`h-full transform cursor-pointer ${getCardClasses()}`}
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/0 to-accent-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-primary-400/20 group-hover:to-accent-400/20 group-hover:opacity-100" />

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div className="space-y-6">
          {/* Enhanced icon container */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className={getIconClasses()}
          >
            {/* Icon glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">{icon}</div>
          </motion.div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className={`text-2xl font-bold transition-colors duration-300 ${getTextClasses()}`}>
              {title}
            </h3>
            <p
              className={`leading-relaxed  mobile:text-sm transition-colors duration-300 ${getDescriptionClasses()}`}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Learn more button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
        >
          <span
            className={
              variant === "dark" ? "text-gray-300" : "text-primary-600 dark:text-primary-400"
            }
          >
            Learn more
          </span>
          <ArrowRightIcon
            className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-1 ${variant === "dark" ? "text-gray-300" : "text-primary-600 dark:text-primary-400"
              }`}
          />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-primary-200/20 to-accent-200/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-secondary-200/20 to-primary-200/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
