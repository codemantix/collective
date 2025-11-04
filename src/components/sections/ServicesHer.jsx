"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  TrophyIcon,
  ArrowRightIcon,
  PlayIcon,
  SwatchIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Professional service highlights for Services page - Enhanced version
const servicesHighlights = [
  {
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies",
    icon: CodeBracketIcon,
    color: "from-primary-500 to-primary-600",
    features: ["React & Next.js", "Node.js APIs", "Cloud Deployment"],
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversion",
    icon: EyeIcon,
    color: "from-accent-500 to-accent-600",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    title: "Graphics Design",
    description: "Professional visual identity and marketing materials",
    icon: SwatchIcon,
    color: "from-secondary-500 to-secondary-600",
    features: ["Brand Identity", "Print Design", "Digital Assets"],
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable business insights",
    icon: ChartBarIcon,
    color: "from-primary-800 via-accent-600 to-secondary-600",
    features: ["Data Visualization", "Business Intelligence", "Predictive Analytics"],
  },
];

const servicesStats = [
  { label: "Services Delivered", value: "10+", icon: CheckCircleIcon },
  { label: "Industries Served", value: "15+", icon: UsersIcon },
  { label: "Client Satisfaction", value: "98%", icon: TrophyIcon },
  { label: "Project Success Rate", value: "100%", icon: ArrowTrendingUpIcon },
];

const serviceBenefits = [
  "End-to-end project management",
  "Agile development methodology",
  "24/7 support & maintenance",
  "Scalable & future-proof solutions",
];

export default function ServicesHero() {
  const [currentService, setCurrentService] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Only run service rotation when component is visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % servicesHighlights.length);
    }, 4000);
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
        {/* Optimized Static Grid Pattern */}
        <div
          className="opacity-12 dark:opacity-6 absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.2) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 60px 60px",
          }}
        />

        {/* Static Floating Orbs - No Animation */}
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/10 to-accent-400/15 blur-3xl" />
        <div className="from-secondary-400/8 to-accent-400/12 absolute -bottom-48 -left-48 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br blur-3xl" />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/5 to-accent-500/10 dark:from-transparent dark:via-primary-400/10 dark:to-accent-400/5" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-16">
        <motion.div
          className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16"


          animate="visible"
        >
          {/* Content Section */}
          <div className="space-y-8 pt-20 text-center lg:pt-0 lg:text-left">
            {/* Enhanced Service Badge */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative inline-flex items-center gap-3 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-6 py-3 shadow-xl backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
                <SparklesIcon className="h-4 w-4 text-white" />
              </div>
              <span className="relative text-sm font-semibold text-gray-700 dark:text-gray-200">
                Professional Services Portfolio
              </span>
            </motion.div>

            {/* Main Heading with Gradient Animation */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-5xl">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              <p className="text-lg  mobile:text-sm text-gray-600 dark:text-gray-300 sm:text-xl">
                Comprehensive digital services designed to elevate your business with cutting-edge
                technology, stunning design, and data-driven insights that deliver measurable
                results.
              </p>
            </motion.div>

            {/* Service Benefits List */}
            <motion.div variants={itemVariants} className="space-y-3">
              {serviceBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}

                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700  mobile:text-sm dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center mobile:justify-center gap-4 sm:flex-row sm:gap-6"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Today
                    <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.button>
              </Link>

              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 rounded-full border-2 border-primary-200 bg-white/80 px-8 py-4 font-semibold text-gray-700 backdrop-blur-md transition-all duration-300 hover:border-primary-300 hover:bg-white dark:border-primary-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:border-primary-600"
                >
                  <PlayIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4"
            >
              {servicesStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="mb-2 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900">
                        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div className="text-2xl  mobile:text-lg font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Animated Service Showcase */}
          <motion.div variants={itemVariants} className="relative lg:pl-8">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-100/50 to-accent-100/50 blur-2xl dark:from-primary-900/30 dark:to-accent-900/30" />

              {/* Main service card */}
              <motion.div
                key={currentService}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-800/90"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${servicesHighlights[currentService].color}`}
                  >
                    {React.createElement(servicesHighlights[currentService].icon, {
                      className: "h-8 w-8 text-white",
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl  mobile:text-lg font-bold text-gray-900 dark:text-white">
                      {servicesHighlights[currentService].title}
                    </h3>
                    <div className="mt-1 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                  </div>
                </div>

                <p className="mb-6  mobile:text-sm text-gray-600 dark:text-gray-300">
                  {servicesHighlights[currentService].description}
                </p>

                <div className="space-y-3">
                  {servicesHighlights[currentService].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Service indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {servicesHighlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${index === currentService
                        ? "bg-gradient-to-r from-primary-500 to-accent-500"
                        : "bg-gray-300 dark:bg-gray-600"
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
