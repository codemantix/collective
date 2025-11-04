"use client";

import React, { useState, useEffect, useMemo } from "react";
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
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Professional service highlights for Codemantix Collective - Core 4 Services
const techServices = [
  {
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies",
    icon: CodeBracketIcon,
    color: "from-primary-500 to-primary-600",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversion",
    icon: PaintBrushIcon,
    color: "from-accent-500 to-accent-600",
  },
  {
    title: "Graphics Design",
    description:
      "Professional visual identity and marketing materials that communicate effectively",
    icon: SwatchIcon,
    color: "from-secondary-500 to-secondary-600",
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable business insights and intelligence",
    icon: ChartBarIcon,
    color: "from-primary-800 via-accent-600 to-secondary-600",
  },
];

const companyStats = [
  { label: "Projects Delivered", value: "60+", icon: CheckCircleIcon },
  { label: "Happy Clients", value: "50+", icon: UsersIcon },
  { label: "Years Experience", value: "3+", icon: ArrowTrendingUpIcon },
  { label: "Team Members", value: "10+", icon: TrophyIcon },
];

const trustIndicators = [
  "Enterprise-grade security",
  "24/7 support & maintenance",
  "Agile development process",
  "99.9% uptime guarantee",
];

export default function ProfessionalHero() {
  const [currentService, setCurrentService] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const { elementRef, isVisible } = useIntersectionObserver();

  // Check for reduced motion preference on mount
  useEffect(() => {
    setShouldAnimate(!prefersReducedMotion());
    setIsLoaded(true);
  }, []);

  // Only run service rotation when component is visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % techServices.length);
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

  // Memoize animation configs based on reduced motion preference
  const getOrbAnimation = useMemo(
    () => ({
      animate:
        shouldAnimate && isVisible
          ? {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }
          : {},
      transition: shouldAnimate
        ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
        : {},
    }),
    [shouldAnimate, isVisible]
  );

  const getParticleAnimation = useMemo(
    () => ({
      animate: shouldAnimate && isVisible ? { y: [0, -50, 0], opacity: [0, 0.6, 0], scale: [0, 1, 0] } : {},
      transition: shouldAnimate ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : {},
    }),
    [shouldAnimate, isVisible]
  );

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-gray-900 dark:via-primary-900/50 dark:to-gray-800"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized Static Grid Pattern - Removed animation for better performance */}
        <div
          className="dark:opacity-8 absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.2) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 60px 60px",
          }}
        />

        {/* Optimized Floating Orbs - Only animate when visible */}
        <motion.div
          {...getOrbAnimation}
          className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/15 to-accent-400/20 blur-3xl"
        />
        <motion.div
          animate={
            shouldAnimate && isVisible
              ? {
                scale: [1.1, 0.9, 1.1],
                opacity: [0.2, 0.4, 0.2],
              }
              : {}
          }
          transition={shouldAnimate ? { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 } : {}}
          className="absolute -bottom-48 -left-48 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-secondary-400/10 to-accent-400/15 blur-3xl"
        />

        {/* Optimized Floating Particles - Only animate when visible - REDUCED FROM 6 TO 2 */}
        {shouldAnimate &&
          isVisible &&
          [...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              {...getParticleAnimation}
              transition={{
                ...getParticleAnimation.transition,
                delay: i * 0.5,
              }}
              className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
              style={{
                left: `${10 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
            />
          ))}

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/5 to-accent-500/10 dark:from-transparent dark:via-primary-400/10 dark:to-accent-400/5" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-16">
        <motion.div
          className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Section */}
          <div className="space-y-8 pt-24 mobile:pt-12 text-center  lg:text-left">
            {/* Enhanced Trust Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative inline-flex items-center gap-3 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-6 py-3 shadow-xl backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <motion.div
                animate={shouldAnimate ? { rotate: [0, 360] } : {}}
                transition={shouldAnimate ? { duration: 8, repeat: Infinity, ease: "linear" } : {}}
                className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-secondary-500"
              >
                <CheckCircleIcon className="h-4 w-4 text-white" />
              </motion.div>
              <span className="relative mobile:text-xs text-sm font-semibold text-gray-800 dark:text-gray-200">
                Trusted by 50+ Companies Worldwide
              </span>

              {/* Sparkle animation */}
              <motion.div
                animate={shouldAnimate ? { scale: [0, 1, 0], rotate: [0, 180, 360] } : {}}
                transition={
                  shouldAnimate ? { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 } : {}
                }
                className="absolute -right-1 -top-1"
              >
                <SparklesIcon className="h-3 w-3 text-accent-500" />
              </motion.div>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1
                className="relative text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"

                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span
                  className="block text-gray-900 dark:text-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Digital Solutions That
                </motion.span>
                <motion.span
                  className="relative block bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Drive Success
                  {/* Text glow effect - DISABLED for performance */}
                  {shouldAnimate && (
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent blur-sm"
                    >
                      Drive Success
                    </motion.div>
                  )}
                </motion.span>

                {/* Floating accent elements */}
                <motion.div
                  animate={
                    shouldAnimate
                      ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }
                      : {}
                  }
                  transition={shouldAnimate ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : {}}
                  className="absolute -right-8 -top-4 hidden lg:block"
                >
                  <RocketLaunchIcon className="h-8 w-8 text-accent-500/60" />
                </motion.div>
              </motion.h1>

              <motion.p
                className="max-w-2xl text-[16px] mobile:text-sm leading-relaxed text-gray-600 dark:text-gray-300 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We transform businesses through{" "}
                <motion.span
                  className="font-semibold text-primary-700 dark:text-accent-400"
                  animate={
                    shouldAnimate
                      ? {
                        textShadow: [
                          "0 0 0px rgba(16,185,129,0)",
                          "0 0 20px rgba(16,185,129,0.3)",
                          "0 0 0px rgba(16,185,129,0)",
                        ],
                      }
                      : {}
                  }
                  transition={shouldAnimate ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                  innovative technology solutions
                </motion.span>
                . From web development to AI integration, we deliver enterprise-grade software that
                scales with your ambitions.
              </motion.p>
            </motion.div>

            {/* Enhanced Service Highlight */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-primary-200/30 bg-gradient-to-br from-white/80 via-white/60 to-primary-50/40 p-4 shadow-2xl backdrop-blur-md dark:border-primary-700/30 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-primary-900/40"
            >
              {/* Animated background glow */}
              <motion.div
                animate={
                  shouldAnimate
                    ? {
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(30,58,138,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(16,185,129,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(30,58,138,0.1) 0%, transparent 50%)",
                      ],
                    }
                    : {}
                }
                transition={shouldAnimate ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
                className="absolute inset-0"
              />

              <div className="relative items-start gap-6 md:flex">
                <motion.div
                  key={currentService}
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative mx-auto mb-4 w-fit rounded-2xl bg-gradient-to-br p-4 shadow-xl md:mb-0 ${techServices[currentService].color}`}
                >
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />

                  <motion.div
                    animate={
                      shouldAnimate
                        ? {
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }
                        : {}
                    }
                    transition={shouldAnimate ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
                  >
                    {React.createElement(techServices[currentService].icon, {
                      className: "relative w-8 h-8 text-white",
                    })}
                  </motion.div>

                  {/* Service number indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white shadow-lg"
                  >
                    {currentService + 1}
                  </motion.div>
                </motion.div>

                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService}
                      initial={{ opacity: 0, y: 20, x: 30 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -20, x: -30 }}
                      transition={{ duration: 0, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {techServices[currentService].title}
                        <motion.span
                          animate={shouldAnimate ? { opacity: [0.5, 1, 0.5] } : {}}
                          transition={shouldAnimate ? { duration: 0.3, repeat: Infinity } : {}}
                          className="ml-2 text-accent-500"
                        >
                          <BoltIcon className="inline h-5 w-5" />
                        </motion.span>
                      </h3>
                      <p className="leading-relaxed text-sm mobile:text-sm text-gray-600 dark:text-gray-300">
                        {techServices[currentService].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {techServices.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={
                      shouldAnimate
                        ? {
                          scale: currentService === index ? 1.2 : 1,
                          backgroundColor:
                            currentService === index ? "rgba(16,185,129,1)" : "rgba(156,163,175,0.4)",
                        }
                        : {
                          backgroundColor:
                            currentService === index ? "rgba(16,185,129,1)" : "rgba(156,163,175,0.4)",
                        }
                    }
                    className="h-2 w-8 rounded-full transition-colors duration-300"
                  />
                ))}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="mx-auto grid w-full grid-cols-2 gap-3">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-left text-sm text-gray-600 dark:text-gray-300"
                >
                  <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-accent-500" />
                  <span>{indicator}</span>
                </div>
              ))}
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-4 sm:flex-row">
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                {/* Glowing background */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <Link href="/contact">
                  <button className="relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary-800 to-accent-600 px-10 py-5 font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-900 hover:to-accent-700">
                    <span className="text-lg mobile:text-sm">Start Your Project</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRightIcon className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </button>
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <Link href="/projects">
                  <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-primary-200/50 bg-white/70 px-10 py-5 font-semibold text-gray-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:text-primary-800 hover:shadow-2xl dark:border-primary-700/50 dark:bg-slate-800/70 dark:text-gray-100 dark:hover:bg-slate-700/90 dark:hover:text-accent-400">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <PlayIcon className="h-6 w-6" />
                    </motion.div>
                    <span className="text-lg mobile:text-sm">View Our Work</span>
                  </button>
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/20 to-accent-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="space-y-8">
            {/* Enhanced Company Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="hover:shadow-3xl group relative overflow-hidden rounded-3xl border border-primary-200/30 bg-gradient-to-br from-white/80 to-primary-50/40 p-4 text-center shadow-2xl backdrop-blur-md transition-all duration-300 dark:border-primary-700/30 dark:from-slate-800/80 dark:to-primary-900/40 md:p-4"
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/10 to-accent-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Icon with enhanced styling */}
                    <motion.div
                      animate={
                        shouldAnimate
                          ? {
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }
                          : {}
                      }
                      transition={
                        shouldAnimate
                          ? {
                            duration: 4 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }
                          : {}
                      }
                      className="relative mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 shadow-xl md:h-16 md:w-16 md:rounded-2xl"
                    >
                      <Icon className="h-4 w-4 text-white md:h-8 md:w-8" />

                      {/* Sparkle effect */}
                      <motion.div
                        animate={
                          shouldAnimate
                            ? {
                              scale: [0, 1, 0],
                              rotate: [0, 180, 360],
                            }
                            : {}
                        }
                        transition={
                          shouldAnimate
                            ? {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1 + index * 0.3,
                            }
                            : {}
                        }
                        className="absolute -right-1 -top-1"
                      >
                        <SparklesIcon className="h-3 w-3 text-accent-400" />
                      </motion.div>
                    </motion.div>

                    {/* Enhanced stat display */}
                    <motion.div
                      className="relative mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl"
                      animate={
                        shouldAnimate
                          ? {
                            textShadow: [
                              "0 0 0px rgba(16,185,129,0)",
                              "0 0 20px rgba(16,185,129,0.3)",
                              "0 0 0px rgba(16,185,129,0)",
                            ],
                          }
                          : {}
                      }
                      transition={
                        shouldAnimate
                          ? {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }
                          : {}
                      }
                    >
                      {stat.value}
                    </motion.div>

                    <div className="relative text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced Floating Tech Icons - All 4 Core Services - DISABLED on mobile */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto hidden h-80 w-full max-w-2xl lg:block"
            >
              <div className="absolute inset-0">
                {/* Central connection lines - DISABLED for performance */}
                {shouldAnimate && (
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                    <motion.path
                      d="M20,20 Q50,10 80,30 Q90,50 70,80 Q50,90 30,70 Q10,50 20,20"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(30,58,138,0.6)" />
                        <stop offset="50%" stopColor="rgba(16,185,129,0.6)" />
                        <stop offset="100%" stopColor="rgba(249,115,22,0.6)" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}

                {/* Web Development Icon */}
                <motion.div
                  animate={
                    shouldAnimate
                      ? {
                        y: [-25, 25, -25],
                        rotate: [0, 10, 0],
                        scale: [1, 1.1, 1],
                      }
                      : {}
                  }
                  transition={shouldAnimate ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : {}}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="group absolute left-8 top-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent" />
                  <CodeBracketIcon className="relative h-10 w-10 text-white" />

                  {/* Floating sparkles */}
                  <motion.div
                    animate={
                      shouldAnimate
                        ? {
                          rotate: [0, 360],
                          scale: [0.5, 1, 0.5],
                        }
                        : {}
                    }
                    transition={shouldAnimate ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
                    className="absolute -right-2 -top-2"
                  >
                    <SparklesIcon className="h-4 w-4 text-accent-400" />
                  </motion.div>
                </motion.div>

                {/* Data Analytics Icon */}
                <motion.div
                  animate={
                    shouldAnimate
                      ? {
                        y: [30, -30, 30],
                        rotate: [0, -8, 0],
                        scale: [1, 1.05, 1],
                      }
                      : {}
                  }
                  transition={
                    shouldAnimate
                      ? {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }
                      : {}
                  }
                  whileHover={{ scale: 1.15, rotate: -12 }}
                  className="group absolute right-8 top-12 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <ChartBarIcon className="relative h-12 w-12 text-white" />

                  <motion.div
                    animate={
                      shouldAnimate
                        ? {
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }
                        : {}
                    }
                    transition={
                      shouldAnimate
                        ? {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }
                        : {}
                    }
                    className="absolute -bottom-2 -left-2"
                  >
                    <BoltIcon className="h-4 w-4 text-secondary-400" />
                  </motion.div>
                </motion.div>

                {/* UI/UX Design Icon */}
                <motion.div
                  animate={
                    shouldAnimate
                      ? {
                        y: [-20, 20, -20],
                        rotate: [0, 6, 0],
                        scale: [1, 1.08, 1],
                      }
                      : {}
                  }
                  transition={
                    shouldAnimate
                      ? {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }
                      : {}
                  }
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="group absolute bottom-12 left-12 flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-secondary-500 to-secondary-600 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent" />
                  <PaintBrushIcon className="relative h-9 w-9 text-white" />

                  <motion.div
                    animate={
                      shouldAnimate
                        ? {
                          y: [-3, 3, -3],
                          opacity: [0.7, 1, 0.7],
                        }
                        : {}
                    }
                    transition={shouldAnimate ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                    className="absolute -right-1 -top-1"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent-400" />
                  </motion.div>
                </motion.div>

                {/* Graphics Design Icon */}
                <motion.div
                  animate={
                    shouldAnimate
                      ? {
                        y: [25, -25, 25],
                        rotate: [0, -6, 0],
                        scale: [1, 1.12, 1],
                      }
                      : {}
                  }
                  transition={
                    shouldAnimate
                      ? {
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                      }
                      : {}
                  }
                  whileHover={{ scale: 1.18, rotate: -10 }}
                  className="h-18 w-18 group absolute bottom-12 right-32 flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-500 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent" />
                  <SwatchIcon className="relative h-11 w-11 text-white" />

                  {/* Multi-colored dots animation */}
                  {shouldAnimate &&
                    [0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                        className={`absolute h-1 w-1 rounded-full ${i === 0
                          ? "-left-2 top-2 bg-primary-300"
                          : i === 1
                            ? "-top-1 right-1 bg-accent-300"
                            : "-bottom-1 left-1 bg-secondary-300"
                          }`}
                      />
                    ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
