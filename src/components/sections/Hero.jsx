"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Code, Database, Palette, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Enhanced slide content with Codemantix Brand Colors
const heroDynamicSlides = [
  {
    text: "Building Seamless Digital Experiences",
    description: "Crafting responsive, high-performance web applications that scale",
    image: "/Images/Headerux.svg",
    color: "#1E3A8A", // Codemantix Primary Blue
  },
  {
    text: "Turning Data Into Actionable Insights",
    description: "Empowering decisions through intelligent data analysis and visualization",
    image: "/Images/Data.png",
    color: "#10B981", // Codemantix Accent Green
  },
  {
    text: "Designing Interfaces People Love",
    description: "Creating intuitive user experiences that delight and engage",
    image: "/Images/Headerux.svg",
    color: "#F97316", // Codemantix Secondary Orange
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Detect screen width
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    setIsLoaded(true);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Enhanced typewriter effect
  useEffect(() => {
    if (isMobile || !isLoaded) return;
    const fullText = heroDynamicSlides[currentSlide].text;
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        // Add cursor blink effect
        setTimeout(() => {
          setDisplayedText(fullText + "|");
          setTimeout(() => setDisplayedText(fullText), 500);
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [currentSlide, isMobile, isLoaded]);

  // Auto-rotate slides with enhanced timing
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroDynamicSlides.length);
    }, 12000); // Increased interval for better UX
    return () => clearInterval(slideInterval);
  }, []);

  const slide = heroDynamicSlides[currentSlide];

  // Animation variants
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-primary-900 dark:via-primary-800/50 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-secondary-400/20 to-accent-400/10 blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary-400/30"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Section */}
          <motion.div
            className="space-y-8 pt-20 text-center lg:pt-0 lg:text-left"
            style={{ opacity }}
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-sm dark:border-gray-700/50 dark:bg-slate-800/80"
            >
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Digital Innovation Leaders
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              {isMobile ? (
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  <span className="gradient-text">Codemantix Collectives</span>
                  <br />
                  <span className="text-gray-800 dark:text-gray-200">Innovating Through Tech</span>
                </h1>
              ) : (
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  <span className="gradient-text">Codemantix Collectives</span>
                  <br />
                  <span className="text-gray-800 dark:text-gray-200">
                    {displayedText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-1 inline-block h-12 w-1 bg-primary-800"
                    />
                  </span>
                </h1>
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl lg:mx-0"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary-800 to-accent-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-primary-900 hover:to-accent-600 hover:shadow-2xl"
              >
                View Our Work
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/About"
                className="group inline-flex items-center gap-3 rounded-2xl border border-gray-200/50 bg-white/80 px-8 py-4 font-semibold text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-primary-800 hover:shadow-xl dark:border-primary-700/50 dark:bg-primary-800/80 dark:text-gray-300 dark:hover:bg-primary-700 dark:hover:text-accent-400"
              >
                <Play size={20} />
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 border-t border-gray-200/50 pt-8 dark:border-gray-700/50"
            >
              {[
                { label: "Projects", value: "50+" },
                { label: "Clients", value: "30+" },
                { label: "Experience", value: "5+ Years" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={itemVariants}
            style={{ y }}
          >
            {/* Lottie Animation Container */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative aspect-square w-full max-w-2xl"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-400/20 to-orange-400/20 blur-3xl" />

              {/* Main animation */}
              <iframe
                className="relative z-10 h-full w-full rounded-3xl"
                src="https://lottie.host/embed/5460a26a-9efd-4805-ae0e-f1bfec620422/1lAX4Myg3m.lottie"
                style={{ border: "none" }}
                title="Hero Animation"
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex cursor-pointer flex-col items-center gap-2 text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
