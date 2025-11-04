"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CpuChipIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { projectCategories, projectStats } from "@/components/data/ProjectsData";

const iconMap = {
  "paint-brush": PaintBrushIcon,
  "code-bracket": CodeBracketIcon,
  "device-phone-mobile": DevicePhoneMobileIcon,
  "shopping-cart": GlobeAltIcon,
  "cpu-chip": CpuChipIcon,
};

export default function ProjectsShowcase() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 py-24 dark:from-primary-900/20 dark:via-gray-900 dark:to-accent-900/20"
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isVisible ? (
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -left-48 top-1/4 h-96 w-96 rounded-full border border-dashed border-primary-200/30 dark:border-primary-700/30"
          />
        ) : (
          <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full border border-dashed border-primary-200/30 dark:border-primary-700/30" />
        )}

        {isVisible ? (
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-48 bottom-1/4 h-64 w-64 rounded-full border border-dashed border-accent-200/30 dark:border-accent-700/30"
          />
        ) : (
          <div className="absolute -right-48 bottom-1/4 h-64 w-64 rounded-full border border-dashed border-accent-200/30 dark:border-accent-700/30" />
        )}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-6 py-3 shadow-xl backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80">
            <SparklesIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              Our Expertise
            </span>
          </div>

          <h2 className="mb-6 text-4xl  mobile:text-2xl font-bold text-gray-900 dark:text-white md:text-5xl">
            What We
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
              {" "}
              Create
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg  mobile:text-sm text-gray-600 dark:text-gray-300">
            From concept to deployment, we deliver exceptional digital experiences across multiple
            platforms and technologies.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projectCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || CodeBracketIcon;

            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl dark:border-gray-700/20 dark:from-gray-800/90 dark:to-gray-800/60"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} -z-10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} p-4 shadow-lg`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                    <span
                      className={`rounded-full bg-gradient-to-r ${category.gradient} px-3 py-1 text-sm font-semibold text-white`}
                    >
                      {category.count}
                    </span>
                  </div>

                  <p className="text-gray-600  mobile:text-sm dark:text-gray-300">{category.description}</p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400"
                  >
                    View Projects
                    <ArrowRightIcon className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-2xl backdrop-blur-xl dark:border-gray-700/20 dark:from-gray-800/90 dark:to-gray-800/60 lg:p-12"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 lg:text-4xl">
                {projectStats.totalProjects}+
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Projects
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 lg:text-4xl">
                {projectStats.completedProjects}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Completed</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 lg:text-4xl">
                {projectStats.featuredProjects}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Featured</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 lg:text-4xl">
                {projectStats.totalLikes}+
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Likes
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 lg:text-4xl">
                {Math.round(projectStats.totalViews / 1000)}K+
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Views
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 lg:text-4xl">
                98%
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
