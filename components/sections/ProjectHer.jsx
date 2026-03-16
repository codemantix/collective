"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  SwatchIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  EyeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

// Featured project highlights that rotate
const projectHighlights = [
  {
    title: "Crypto Exchange Mobile UI",
    description: "Modern cryptocurrency trading interface with advanced charting",
    icon: CodeBracketIcon,
    color: "from-primary-500 to-primary-600",
    category: "UI/UX Design",
  },
  {
    title: "Web 3 Website UI",
    description: "Cutting-edge Web3 interface with seamless blockchain integration",
    icon: SparklesIcon,
    color: "from-accent-500 to-accent-600",
    category: "Web Development",
  },
  {
    title: "Food Ordering App UI",
    description: "Intuitive food delivery app with real-time tracking features",
    icon: PaintBrushIcon,
    color: "from-secondary-500 to-secondary-600",
    category: "Mobile Design",
  },
  {
    title: "Web-Store UI",
    description: "E-commerce platform with advanced analytics and user insights",
    icon: ChartBarIcon,
    color: "from-primary-800 via-accent-600 to-secondary-600",
    category: "E-Commerce",
  },
];

const projectStats = [
  { label: "Projects Completed", value: "60+", icon: StarIcon },
  { label: "Client Satisfaction", value: "98%", icon: SparklesIcon },
  { label: "Design Awards", value: "15+", icon: BoltIcon },
  { label: "Happy Clients", value: "30+", icon: EyeIcon },
];

export default function ProjectsHero() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    setIsLoaded(true);
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projectHighlights.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-gray-900 dark:via-primary-900/50 dark:to-gray-800"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image with Blend Mode */}
        <Image
          src="/Images/Projects.jpg"
          alt="Projects Background"
          fill
          className="absolute inset-0 object-cover object-center opacity-20 mix-blend-soft-light dark:opacity-10"
          priority
        />

        {/* Optimized Grid Pattern */}
        {isVisible ? (
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px, 40px 40px",
            }}
          />
        ) : (
          <div
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px, 40px 40px",
            }}
          />
        )}

        {/* Optimized Floating Orbs */}
        {isVisible ? (
          <motion.div
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 100, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/30 blur-3xl"
          />
        ) : (
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/30 blur-3xl" />
        )}
        {isVisible ? (
          <motion.div
            animate={{
              x: [0, -80, 60, 0],
              y: [0, 80, -60, 0],
              rotate: [360, 180, 0],
              scale: [1.1, 0.9, 1.3, 1.1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
            className="absolute -bottom-48 -left-48 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-secondary-400/15 to-accent-400/25 blur-3xl"
          />
        ) : (
          <div className="absolute -bottom-48 -left-48 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-secondary-400/15 to-accent-400/25 blur-3xl" />
        )}

        {/* Optimized Floating Particles */}
        {isVisible &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
              style={{
                left: `${5 + i * 4.5}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
            />
          ))}

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/5 to-accent-500/10 dark:from-transparent dark:via-primary-400/10 dark:to-accent-400/5" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-16">
        <motion.div
          className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16"
         
          animate="visible"
        >
          {/* Content Section */}
          <div className="space-y-8 pt-12 text-center lg:pt-0 lg:text-left">
            {/* Enhanced Trust Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative inline-flex items-center gap-3 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-6 py-3 shadow-xl backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <SparklesIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <span className="relative text-sm font-semibold text-primary-700 dark:text-primary-300">
                Award-Winning Portfolio
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl xl:text-7xl flex gap-4 items-center justify-center mobile:flex-col mobile:gap-0 laptop-md:flex-col laptop-md:gap-0 laptop-md:items-start"
            >
              <span className="">Our</span>
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
                Creative
              </span>
              <span className="">Portfolio</span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg  mobile:text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl lg:text-2xl"
            >
              Discover our{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                award-winning projects
              </span>{" "}
              that combine stunning design with cutting-edge technology to deliver exceptional user
              experiences.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6"
            >
              {projectStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group rounded-2xl border border-gray-200/60 bg-white/60 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary-300/60 hover:bg-white/80 hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800/60 dark:hover:border-primary-600/60 dark:hover:bg-gray-800/80"
                >
                  <div className="mb-2 flex justify-center">
                    <stat.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-300 sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:shadow-primary-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  View All Projects
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-full border-2 border-primary-600/20 bg-white/10 px-8 py-4 font-semibold text-primary-700 backdrop-blur-sm transition-all duration-300 hover:border-primary-600/40 hover:bg-white/20 hover:shadow-lg dark:border-primary-400/20 dark:text-primary-300 dark:hover:border-primary-400/40 dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <RocketLaunchIcon className="h-5 w-5 transition-transform group-hover:translate-y-[-2px]" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Right Side - Rotating Project Showcase */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Floating Card Container */}
              <div className="relative">
                <AnimatePresence mode="wait" initial={false}>
                  {isLoaded && (
                    <motion.div
                      key={`project-${currentProject}`}
                      initial={{ opacity: 0, y: 20, rotateY: -15 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      exit={{ opacity: 0, y: -20, rotateY: 15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-2xl backdrop-blur-xl dark:border-gray-700/20 dark:from-gray-800/90 dark:to-gray-800/60"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/10 to-accent-400/10 opacity-0 transition-opacity duration-500 hover:opacity-100" />

                      {/* Content */}
                      <div className="relative space-y-6">
                        {/* Icon and Category */}
                        <div className="flex items-center gap-4">
                          <div
                            className={`rounded-2xl bg-gradient-to-br ${projectHighlights[currentProject].color} p-3 shadow-lg`}
                          >
                            {React.createElement(projectHighlights[currentProject].icon, {
                              className: "h-8 w-8 text-white",
                            })}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                              {projectHighlights[currentProject].category}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Featured Project
                            </div>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {projectHighlights[currentProject].title}
                          </h3>
                          <p className="mt-2  mobile:text-sm text-gray-600 dark:text-gray-300">
                            {projectHighlights[currentProject].description}
                          </p>
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex gap-2">
                          {projectHighlights.map((_, index) => (
                            <div
                              key={`indicator-${index}`}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentProject
                                  ? "w-8 bg-gradient-to-r from-primary-500 to-accent-500"
                                  : "w-2 bg-gray-300 dark:bg-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-2 border-dashed border-primary-300/30 dark:border-primary-600/30"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-accent-300/20 dark:border-accent-600/20"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
