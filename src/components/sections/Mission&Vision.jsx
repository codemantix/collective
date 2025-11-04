"use client";

import React, { useState, useEffect } from "react";
import {
  LightBulbIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  EyeIcon,
  TagIcon,
  HeartIcon,
  SparklesIcon,
  StarIcon,
  GlobeAltIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const coreValues = [
  {
    title: "Innovation",
    text: "We push boundaries and embrace fresh ideas that drive growth and digital transformation.",
    icon: LightBulbIcon,
    color: "from-primary-500 to-primary-600",
    bgColor: "from-primary-50 to-primary-100",
  },
  {
    title: "Collaboration",
    text: "Working together is at the heart of everything we do to achieve extraordinary results.",
    icon: UsersIcon,
    color: "from-accent-500 to-accent-600",
    bgColor: "from-accent-50 to-accent-100",
  },
  {
    title: "Integrity",
    text: "We act with honesty, transparency, and uphold the highest ethical standards.",
    icon: ShieldCheckIcon,
    color: "from-secondary-500 to-secondary-600",
    bgColor: "from-secondary-50 to-secondary-100",
  },
  {
    title: "Excellence",
    text: "Delivering the best solutions with passion, precision, and unwavering commitment.",
    icon: RocketLaunchIcon,
    color: "from-primary-700 to-accent-500",
    bgColor: "from-primary-50 to-accent-50",
  },
];

const missionVision = [
  {
    title: "Our Mission",
    subtitle: "Empowering Digital Transformation",
    description:
      "To empower businesses worldwide with innovative digital solutions that drive exponential growth, enhance user experiences, and transform visionary ideas into impactful digital realities.",
    icon: TagIcon,
    gradient: "from-primary-600 via-primary-500 to-accent-600",
    bgGradient: "from-primary-900 via-primary-800 to-accent-900",
    features: ["Global Impact", "Innovation First", "User-Centric Design", "Scalable Solutions"],
  },
  {
    title: "Our Vision",
    subtitle: "Shaping Tomorrow's Digital Landscape",
    description:
      "To be the world's most trusted collective of digital innovators, creating a future where cutting-edge technology seamlessly bridges human creativity with functional excellence.",
    icon: EyeIcon,
    gradient: "from-accent-600 via-accent-500 to-secondary-600",
    bgGradient: "from-accent-900 via-accent-800 to-secondary-900",
    features: [
      "Global Leadership",
      "Creative Excellence",
      "Future-Ready",
      "Collaborative Innovation",
    ],
  },
];

const impactStats = [
  { number: "50+", label: "Countries Served", icon: GlobeAltIcon },
  { number: "60+", label: "Projects Delivered", icon: RocketLaunchIcon },
  { number: "99.9%", label: "Client Satisfaction", icon: StarIcon },
  { number: "24/7", label: "Support Available", icon: BoltIcon },
];

export default function MissionVisionValues() {
  const [activeCard, setActiveCard] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Only run card rotation when component is visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % missionVision.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-primary-900 to-gray-900 py-16 sm:py-24 md:py-32 lg:py-40"
    >
      {/* Background Pattern - Static for Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Static Gradient Orbs - No animations for performance */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/10 to-accent-400/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-secondary-400/10 to-primary-400/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-400/5 to-secondary-400/5 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-accent-500/40 bg-accent-500/10 px-6 py-3 text-sm font-bold text-accent-300 shadow-lg shadow-accent-500/10">
              <HeartIcon className="h-5 w-5" />
              What Drives Us Forward
            </span>
          </div>

          <h1
            className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-white"
          >
            Mission &{" "}
            <span className="bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
              Vision
            </span>
          </h1>

          <p
            className="mx-auto mb-12 max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-300"
          >
            Our purpose and aspirations guide every decision we make, every solution we create, and
            every relationship we build in this digital transformation journey.
          </p>

          {/* Impact Stats */}
          <div
            className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
          >
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="relative rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-md p-4 sm:p-6 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-2xl">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-secondary-500 shadow-lg group-hover:shadow-xl sm:mb-4 sm:h-14 sm:w-14">
                      <IconComponent className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                    </div>
                    <div className="mb-1 text-2xl sm:text-3xl md:text-4xl font-black text-white">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-400">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16 lg:space-y-20">
            {missionVision.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`group relative ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col items-center gap-8 sm:gap-10 lg:flex transition-all duration-500`}
                  onClick={() => setActiveCard(index)}
                >
                  {/* Content Side */}
                  <div className="space-y-6 sm:space-y-8 lg:w-1/2">
                    <div className="relative">
                      <div
                        className={`h-24 w-24 sm:h-28 sm:w-28 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:shadow-3xl`}
                      >
                        <IconComponent className="h-12 w-12 sm:h-14 sm:w-14 text-white" />
                      </div>
                    </div>

                    <div>
                      <h2
                        className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white"
                      >
                        {item.title}
                      </h2>

                      <h3
                        className={`mb-6 sm:mb-8 bg-gradient-to-r bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent ${item.gradient}`}
                      >
                        {item.subtitle}
                      </h3>

                      <p
                        className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-300"
                      >
                        {item.description}
                      </p>

                      {/* Features */}
                      <div
                        className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2"
                      >
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-gray-300 group/feature">
                            <div
                              className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${item.gradient} flex-shrink-0`}
                            />
                            <span className="text-sm sm:text-base font-semibold group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="relative w-full lg:w-1/2">
                    <div
                      className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl"
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}`}>
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `
                              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                              radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px, 40px 40px",
                          }}
                        />
                      </div>

                      {/* Center Icon - Static */}
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20">
                          <IconComponent className="h-16 w-16 text-white/80" />
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${item.gradient} -z-10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values Section */}
        <div
        >
          <div className="mb-12 sm:mb-16 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-accent-300/30 bg-accent-50/10 px-6 py-3 text-sm font-bold text-accent-300 shadow-lg shadow-accent-500/10">
              <SparklesIcon className="h-5 w-5" />
              Our Foundation
            </span>

            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white sm:mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-300">
              The principles that shape our culture and drive our commitment to excellence
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group relative h-full perspective transition-all duration-500 hover:scale-105"
                >
                  {/* Card Shadow */}
                  <div className="absolute -inset-1 -z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary-300/20 via-accent-300/15 to-secondary-300/20 opacity-0 blur-2xl group-hover:opacity-100 transition-all duration-500" />

                  {/* Main Card */}
                  <div className="relative h-full rounded-2xl sm:rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 via-primary-50/5 to-accent-50/5 p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm dark:border-primary-700/30 dark:from-gray-800 dark:via-primary-900/20 dark:to-gray-800 overflow-hidden">

                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.bgColor} opacity-0 transition-all duration-500 group-hover:opacity-60`}
                    />

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-full space-y-4 sm:space-y-6 text-center">
                      {/* Icon Container */}
                      <div className="flex justify-center">
                        <div className="relative z-20">
                          <div
                            className={`h-24 w-24 sm:h-28 sm:w-28 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                          >
                            <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow flex flex-col justify-center">
                        <h3 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary-300">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          {value.text}
                        </p>
                      </div>

                      {/* Bottom Progress Line */}
                      <div
                        className={`h-1.5 w-0 rounded-full bg-gradient-to-r ${value.color} mx-auto transition-all duration-700 group-hover:w-16`}
                      />
                    </div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${value.color} -z-5 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base font-semibold text-primary-300">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-primary-500 to-primary-500" />
            <span>Building the future, one solution at a time</span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-primary-500 to-primary-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
