"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  UsersIcon,
  StarIcon,
  HeartIcon,
  GlobeAltIcon,
  TrophyIcon,
  RocketLaunchIcon,
  SparklesIcon,
  LightBulbIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  SwatchIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const teamStats = [
  { number: "10", label: "Team Members", icon: UsersIcon },
  { number: "4", label: "Web Developers", icon: CodeBracketIcon },
  { number: "2", label: "Content Writers", icon: PaintBrushIcon },
  { number: "1", label: "Designer & UX", icon: SwatchIcon },
  { number: "1", label: "Data Specialist", icon: ChartBarIcon },
  { number: "1", label: "Social Media Mgr", icon: GlobeAltIcon },
];

const teamRoles = [
  {
    title: "Web Development",
    description: "4 expert developers building scalable, modern applications",
    icon: CodeBracketIcon,
    color: "from-primary-500 to-primary-600",
    count: "4",
  },
  {
    title: "Content Strategy",
    description: "2 skilled copywriters crafting compelling brand narratives",
    icon: PaintBrushIcon,
    color: "from-accent-500 to-accent-600",
    count: "2",
  },
  {
    title: "Design & UI/UX",
    description: "1 designer creating beautiful, intuitive user interfaces",
    icon: SwatchIcon,
    color: "from-secondary-500 to-secondary-600",
    count: "1",
  },
  {
    title: "Data Analytics",
    description: "1 analyst transforming data into strategic insights",
    icon: ChartBarIcon,
    color: "from-emerald-500 to-teal-600",
    count: "1",
  },
  {
    title: "Social Media",
    description: "1 manager building community and digital engagement",
    icon: GlobeAltIcon,
    color: "from-pink-500 to-rose-600",
    count: "1",
  },
  {
    title: "Project Management",
    description: "1 manager ensuring flawless project delivery and coordination",
    icon: RocketLaunchIcon,
    color: "from-primary-800 via-accent-600 to-secondary-600",
    count: "1",
  },
];

export default function TeamHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      className="relative min-h-screen !overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Images/Team.jpg"
          alt="Our Amazing Team"
          fill
          className="absolute inset-0 object-cover object-center opacity-15"
          priority
        />

        {/* Static Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 60px 60px",
          }}
        />

        {/* Static Floating Orbs */}
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-accent-400/25 to-secondary-400/35 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-80 w-80 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-400/25 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-secondary-400/15 to-primary-400/20 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 md:px-8 lg:px-16  py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="mb-20 text-center">
            {/* Premium Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent-200 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
                Meet Our Collective
              </span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white"
            >
              Our{" "}
              <span className="block bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </motion.h1>

            {/* Sleek Divider */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400"
            />

            {/* Improved Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-16 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-200"
            >
              Meet the passionate innovators, creative minds, and technical experts who bring your
              digital dreams to life. We're not just a team – we're a collective of visionaries
              committed to excellence and innovation.
            </motion.p>

            {/* Sleek Expertise Grid (Static Display) */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="mb-8 text-center">
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent-300">Our Team Composition</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-5xl justify-center">
                {teamRoles.map((role, index) => {
                  const IconComponent = role.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group relative h-full"
                    >
                      <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-accent-400/30 flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className={`rounded-lg bg-gradient-to-br ${role.color} p-3 transition-transform duration-300 group-hover:scale-110`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <span className={`text-xl font-bold bg-gradient-to-r ${role.color} bg-clip-text text-transparent`}>
                            {role.count}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2">{role.title}</h4>
                        <p className="text-xs text-gray-300 leading-tight flex-grow">{role.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        

          {/* Sleek CTA */}
          <motion.div variants={itemVariants} className="flex justify-center pt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent-400/20 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 backdrop-blur-sm">
              <span className="text-sm font-medium text-gray-300">
                <span className="text-accent-300 font-semibold">Expert Team</span> dedicated to excellence
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
