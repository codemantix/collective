"use client";

import { motion } from "framer-motion";
import { items } from "../data/BrandStorydata";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function BrandStory() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      scale: 1.08,
      y: -15,
      boxShadow: "0 30px 60px rgba(30, 58, 138, 0.2)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white py-16 sm:py-24 md:py-32 lg:py-40 dark:from-gray-900 dark:via-primary-900/30 dark:to-gray-900"
    >
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(30, 58, 138, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(30, 58, 138, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating Orbs - Enhanced */}
        <motion.div
          animate={
            isVisible
              ? {
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.3, 0.15],
                y: [0, -20, 0],
              }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/10 blur-3xl"
        />

        <motion.div
          animate={
            isVisible
              ? {
                scale: [1.2, 0.85, 1.2],
                opacity: [0.1, 0.2, 0.1],
                y: [0, 30, 0],
              }
              : {}
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-tr from-secondary-400/15 to-primary-400/10 blur-3xl"
        />

        <motion.div
          animate={
            isVisible
              ? {
                scale: [0.95, 1.05, 0.95],
                opacity: [0.08, 0.15, 0.08],
              }
              : {}
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-gradient-to-l from-accent-300/10 to-primary-300/5 blur-2xl"
        />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 sm:mb-16 md:mb-20 max-w-4xl px-4 sm:px-6 text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-blue-50 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-primary-700 shadow-lg shadow-primary-100/50 dark:border-primary-700 dark:from-primary-900/50 dark:to-blue-900/50">
              📖 Our Journey
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-primary-900 dark:text-white"
          >
            Our{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                Story
              </span>
              <motion.div
                variants={itemVariants}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed font-medium text-gray-700 dark:text-gray-300"
          >
            From a bold vision to a thriving collective, discover how we're transforming the digital
            landscape one innovative solution at a time.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div variants={itemVariants} className="mt-10 sm:mt-12 flex justify-center">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-500 to-green-500"
              />
              <motion.div
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-accent-500 to-secondary-500"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-7xl gap-6 sm:gap-7 md:gap-8 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group h-full relative perspective"
            >
              {/* Card Shadow */}
              <div className="absolute -inset-1 -z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary-300/30 via-accent-300/20 to-secondary-300/30 opacity-0 blur-2xl group-hover:opacity-100 transition-all duration-500" />

              {/* Main Card */}
              <div className="relative h-full rounded-2xl sm:rounded-3xl border-2 border-primary-100/50 bg-gradient-to-br from-white via-primary-50/20 to-accent-50/10 p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 dark:border-primary-700/30 dark:from-gray-800 dark:via-primary-900/20 dark:to-gray-800 overflow-hidden">

                {/* Background Animated Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-accent-500/3 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container - Enhanced */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative mb-6 sm:mb-7 md:mb-8 flex justify-center"
                  >
                    <div className="relative z-20">
                      {/* Icon Background - Gradient Circle */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-300 via-accent-300 to-secondary-300 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"
                      />

                      <div className="relative flex h-20 sm:h-24 md:h-28 w-20 sm:w-24 md:w-28 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 shadow-xl transition-all duration-300 group-hover:shadow-2xl dark:from-primary-900/40 dark:to-accent-900/40">
                        <motion.div
                          transition={{ duration: 0.3 }}
                          className="transform group-hover:scale-125 transition-transform duration-300"
                        >
                          {item.icon}
                        </motion.div>
                      </div>

                      {/* Floating Ring Animation */}
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{
                          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute -inset-3 rounded-3xl border-2 border-dashed border-primary-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                  </motion.div>

                  {/* Content - Centered */}
                  <div className="flex-grow flex flex-col justify-center items-center text-center mb-6">
                    <motion.h3
                      initial={{ opacity: 1 }}
                      
                      className="mb-4 sm:mb-5 text-xl sm:text-2xl md:text-2xl font-bold text-primary-900 transition-colors duration-300 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 1 }}
                     
                      className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300"
                    >
                      {item.text}
                    </motion.p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mx-auto h-1.5 w-12 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 opacity-0 transition-all duration-500 group-hover:opacity-100"
                  />
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute -inset-2 -z-5 rounded-3xl bg-gradient-to-r from-primary-400/30 via-accent-400/20 to-secondary-400/30 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 text-center px-4 sm:px-6"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-semibold text-primary-600 dark:text-primary-300"
          >
            <motion.div
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent via-primary-500 to-primary-500"
            />
            <span>Continuing to innovate and inspire</span>
            <motion.div
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent via-primary-500 to-primary-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
