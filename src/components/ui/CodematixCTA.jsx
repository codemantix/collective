"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Star, Rocket } from "lucide-react";
import Link from "next/link";

export default function CodematixCTA({
  title = "Ready to Transform Your Business?",
  description = "Let's build something amazing together with cutting-edge technology solutions.",
  primaryText = "Get Started",
  primaryHref = "/contact",
  secondaryText = "View Our Work",
  secondaryHref = "/projects",
  variant = "gradient", // "gradient", "primary", "accent", "secondary"
}) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary-900 dark:bg-primary-800";
      case "accent":
        return "bg-accent-900 dark:bg-accent-800";
      case "secondary":
        return "bg-secondary-900 dark:bg-secondary-800";
      case "gradient":
      default:
        return "bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900";
    }
  };

  const getAccentClasses = () => {
    switch (variant) {
      case "primary":
        return "from-primary-400/20 to-accent-400/10";
      case "accent":
        return "from-accent-400/20 to-secondary-400/10";
      case "secondary":
        return "from-secondary-400/20 to-primary-400/10";
      case "gradient":
      default:
        return "from-accent-400/20 to-secondary-400/10";
    }
  };

  return (
    <section className={`relative overflow-hidden py-32 ${getBackgroundClasses()}`}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute left-0 top-0 h-96 w-96 -translate-x-48 -translate-y-48 transform rounded-full bg-gradient-to-br ${getAccentClasses()} opacity-60 blur-3xl`}
        />
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className={`absolute bottom-0 right-0 h-96 w-96 translate-x-48 translate-y-48 transform rounded-full bg-gradient-to-br ${getAccentClasses()} opacity-70 blur-3xl`}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="absolute h-2 w-2 rounded-full bg-white/30"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Enhanced Header */}
          <motion.div
            
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            {/* Enhanced Icon Section */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Main icon container */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-400/20 to-secondary-500/20 blur-xl"
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-400 to-secondary-500 shadow-2xl backdrop-blur-sm"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Rocket className="h-10 w-10 text-white" />
                  </motion.div>
                </motion.div>

                {/* Surrounding mini icons */}
                {[
                  { Icon: Sparkles, delay: 0, angle: 0 },
                  { Icon: Zap, delay: 1, angle: 90 },
                  { Icon: Star, delay: 2, angle: 180 },
                ].map(({ Icon, delay, angle }, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: [angle, angle + 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      rotate: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay,
                      },
                    }}
                    className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                    style={{
                      left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                      top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Icon size={16} className="text-white/80" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Title */}
            <motion.h2
              className="relative text-4xl mobile:text-2xl font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl"
             
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-accent-200 to-secondary-200 bg-clip-text text-transparent">
                {title}
              </span>
              {/* Subtle text shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-accent-200 to-secondary-200 bg-clip-text text-transparent opacity-50 blur-sm">
                {title}
              </div>
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
           
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-12 max-w-2xl text-xl mobile:text-sm leading-relaxed text-gray-300"
          >
            {description}
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
           
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            {/* Primary CTA with enhanced effects */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Glowing background effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-500 to-secondary-500 opacity-70 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

              <Link
                href={primaryHref}
                className="relative inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-accent-500 to-secondary-500 px-10 py-5 font-bold text-white shadow-2xl transition-all duration-300 hover:from-accent-600 hover:to-secondary-600"
              >
                <span className="text-lg mobile:text-sm">{primaryText}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight
                    size={22}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Secondary CTA with glass morphism */}
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-3 rounded-3xl border border-white/30 bg-white/10 px-10 py-5 font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl"
              >
                <span className="text-lg mobile:text-sm">{secondaryText}</span>
                <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                  <Sparkles size={20} className="text-accent-300" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {[
              { number: "60+", label: "Projects Delivered", color: "accent", icon: Rocket },
              { number: "50+", label: "Happy Clients", color: "secondary", icon: Star },
              { number: "24/7", label: "Support Available", color: "white", icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="mb-4 flex justify-center"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                        stat.color === "accent"
                          ? "from-accent-400/20 to-accent-600/20"
                          : stat.color === "secondary"
                            ? "from-secondary-400/20 to-secondary-600/20"
                            : "from-white/10 to-white/20"
                      }`}
                    >
                      <stat.icon
                        size={24}
                        className={`${
                          stat.color === "accent"
                            ? "text-accent-400"
                            : stat.color === "secondary"
                              ? "text-secondary-400"
                              : "text-white"
                        }`}
                      />
                    </div>
                  </motion.div>

                  {/* Number with count-up animation */}
                  <motion.div
                   
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    className={`text-4xl font-bold ${
                      stat.color === "accent"
                        ? "text-accent-400"
                        : stat.color === "secondary"
                          ? "text-secondary-400"
                          : "text-white"
                    }`}
                  >
                    {stat.number}
                  </motion.div>

                  <div className="mt-2 font-medium text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
