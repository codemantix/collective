"use client";

import { motion } from "framer-motion";

const LoadingSpinner = ({ size = "md", color = "blue" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colorClasses = {
    blue: "border-blue-600",
    orange: "border-orange-500",
    gray: "border-gray-600",
    white: "border-white",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

const LoadingDots = ({ color = "blue" }) => {
  const colorClasses = {
    blue: "bg-primary-800",
    orange: "bg-secondary-500",
    accent: "bg-accent-600",
    gray: "bg-gray-600",
    white: "bg-white",
  };

  return (
    <div className="flex items-center space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`h-2 w-2 ${colorClasses[color]} rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

const LoadingPulse = ({ className = "" }) => {
  return (
    <motion.div
      className={`rounded-lg bg-gradient-to-r from-blue-600/20 to-orange-500/20 ${className}`}
      animate={{
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
      <div className="space-y-4 text-center">
        <LoadingSpinner size="xl" />
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
};

export { LoadingSpinner, LoadingDots, LoadingPulse, LoadingScreen };
