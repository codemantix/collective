"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  EyeIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Enhanced services data with complete information
const coreServices = [
  {
    name: "Web Development",
    shortDesc: "Modern, scalable web applications",
    description:
      "Build cutting-edge web applications with React, Next.js, and Node.js. From startups to enterprise solutions, we deliver fast, secure, and scalable platforms.",
    icon: CodeBracketIcon,
    gradient: "from-primary-500 to-primary-700",
    color: "primary",
    href: "/services#web-development",
    features: ["React & Next.js", "Node.js APIs", "Cloud Deployment", "Performance Optimization"],
    stats: { projects: "20+", satisfaction: "98%" },
  },
  {
    name: "UI/UX Design",
    shortDesc: "User-centered design experiences",
    description:
      "Craft intuitive and beautiful user interfaces that drive engagement. Our design process focuses on user research, prototyping, and conversion optimization.",
    icon: EyeIcon,
    gradient: "from-accent-500 to-accent-700",
    color: "accent",
    href: "/services#ui-ux",
    features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
    stats: { projects: "20+", satisfaction: "99%" },
  },
  {
    name: "Graphics Design",
    shortDesc: "Professional visual identity",
    description:
      "Create compelling visual identities and marketing materials that communicate your brand story effectively across all touchpoints and platforms.",
    icon: PaintBrushIcon,
    gradient: "from-secondary-500 to-secondary-700",
    color: "secondary",
    href: "/services#graphics-design",
    features: ["Brand Identity", "Print Design", "Digital Assets", "Marketing Materials"],
    stats: { projects: "20+", satisfaction: "97%" },
  },
  {
    name: "Data Analytics",
    shortDesc: "Transform data into insights",
    description:
      "Turn your data into actionable business intelligence with advanced analytics, machine learning, and beautiful visualizations that drive decision-making.",
    icon: ChartBarIcon,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    color: "gradient",
    href: "/services#data-analysis",
    features: ["Data Visualization", "ML Models", "Business Intelligence", "Predictive Analytics"],
    stats: { projects: "20+", satisfaction: "100%" },
  },
];

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServicesSnapshot = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 py-32 pt-24 dark:from-gray-900 dark:via-primary-900/50 dark:to-gray-800"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized Static Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.15) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px, 70px 70px",
          }}
        />

        {/* Static Floating Elements */}
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-secondary-400/15 to-accent-400/25 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Enhanced Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          {/* Professional Badge */}
          <motion.div
           
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-4 py-2 text-sm font-semibold text-primary-700 backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80 dark:text-primary-300"
          >
            <SparklesIcon className="h-4 w-4" />
            Our Core Services
          </motion.div>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Comprehensive Digital
            <span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
              Solutions Portfolio
            </span>
          </h2>

          <div className="mx-auto mb-6 h-1 w-32 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500" />

          <p className="mx-auto max-w-4xl text-xl  mobile:text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            From concept to completion, we deliver end-to-end digital solutions that transform your
            business. Discover our comprehensive suite of services designed to elevate your digital
            presence.
          </p>

          {/* Trust indicators */}
          <motion.div
           
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>550+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <span>98.5% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <SparklesIcon className="h-5 w-5 text-purple-500" />
              <span>Award-Winning Team</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Service Cards Grid */}
        <motion.div
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:shadow-2xl dark:border-gray-700/30 dark:from-slate-800/90 dark:to-slate-700/80"
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/0 to-accent-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-primary-400/20 group-hover:to-accent-400/20 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col p-8">
                  {/* Icon Section */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="mb-6 flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {service.shortDesc}
                    </p>
                    <p className="mb-4 leading-relaxed  mobile:text-sm text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4 space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mb-6 grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 p-4 dark:from-gray-800 dark:to-gray-700">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {service.stats.projects}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {service.stats.satisfaction}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={service.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:from-white dark:to-gray-100 dark:text-gray-900"
                    >
                      <span>Explore Service</span>
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </motion.button>
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-primary-200/20 to-accent-200/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-secondary-200/20 to-primary-200/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          
          className="mt-20 text-center"
        >
          <p className="mb-8 text-lg  mobile:text-sm text-gray-600 dark:text-gray-300">
            Ready to transform your digital presence with our comprehensive services?
          </p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
