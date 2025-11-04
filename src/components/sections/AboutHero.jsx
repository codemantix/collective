"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UsersIcon,
  HeartIcon,
  TrophyIcon,
  SparklesIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Company achievements and values
const achievements = [
  { label: "Years of Excellence", value: "3+", icon: TrophyIcon },
  { label: "Happy Clients", value: "50+", icon: HeartIcon },
  { label: "Projects Delivered", value: "60+", icon: RocketLaunchIcon },
  { label: "Team Members", value: "10+", icon: UsersIcon },
];

const coreValues = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
    icon: LightBulbIcon,
    color: "from-primary-500 to-primary-600",
  },
  {
    title: "Excellence",
    description: "Delivering quality that exceeds expectations",
    icon: StarIcon,
    color: "from-accent-500 to-accent-600",
  },
  {
    title: "Collaboration",
    description: "Building partnerships that drive success",
    icon: UsersIcon,
    color: "from-secondary-500 to-secondary-600",
  },
  {
    title: "Impact",
    description: "Creating solutions that transform businesses",
    icon: SparklesIcon,
    color: "from-primary-700 to-accent-500",
  },
];

export default function AboutHero() {
  const [currentValue, setCurrentValue] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Only run value rotation when component is visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % coreValues.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image with Overlay */}
        <Image
          src="/Images/Team.jpg"
          alt="Our Amazing Team"
          fill
          className="absolute inset-0 object-cover object-center opacity-20"
          priority
        />

        {/* Optimized Static Grid Pattern */}
        <div
          className="opacity-8 absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.08) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 60px 60px",
          }}
        />

        {/* Optimized Floating Orbs - Only animate when visible */}
        <motion.div
          animate={
            isVisible
              ? {
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-accent-400/10 to-secondary-400/15 blur-3xl"
        />

        <motion.div
          animate={
            isVisible
              ? {
                  scale: [1.1, 0.95, 1.1],
                  opacity: [0.15, 0.25, 0.15],
                }
              : {}
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -bottom-48 -left-48 h-80 w-80 rounded-full bg-gradient-to-tr from-primary-400/10 to-accent-400/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-16 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="mb-16 text-center">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-sm mobile:text-xs font-semibold text-accent-300">
                <UsersIcon className="h-4 w-4" />
                About Codemantix Collective
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-5xl mobile:text-3xl font-bold leading-tight text-white md:text-7xl"
            >
              Innovating{" "}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              Experiences
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-4xl text-xl mobile:text-sm leading-relaxed text-gray-300 md:text-2xl"
            >
              We craft innovative solutions in web development, UI/UX design, graphics design, and
              data analysis that empower businesses, delight users, and accelerate growth across
              every digital touchpoint.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/projects"
                className="group relative inline-flex transform items-center gap-2 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 px-8 py-4 mobile:text-sm text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-secondary-600 hover:to-secondary-700 hover:shadow-xl"
              >
                <span>View Our Work</span>
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg mobile:text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/20"
              >
                <span>Our Services</span>
                <SparklesIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
              </Link>
            </motion.div>
          </div>

          {/* Achievements Stats */}
          <motion.div
            variants={containerVariants}
            className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={floatingVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group text-center"
                >
                  <div className="relative h-full rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 transition-transform group-hover:scale-110">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">{achievement.value}</div>
                    <div className="text-sm text-gray-300">{achievement.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Core Values Showcase */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">
              Built on{" "}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h3>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={floatingVariants}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="relative h-full rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                      <div
                        className={`h-12 w-12 bg-gradient-to-r ${value.color} mb-4 flex items-center justify-center rounded-xl transition-transform group-hover:scale-110`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="mb-2 text-lg font-semibold text-white">{value.title}</h4>
                      <p className="text-sm text-gray-300">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
