"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  EyeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Core Services - Streamlined and Beautiful
const services = [
  {
    title: "Web Development",
    description: "Modern, scalable applications built with cutting-edge technologies",
    icon: CodeBracketIcon,
    gradient: "from-primary-500 to-primary-700",
    number: "01",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive user experiences that drive engagement and conversion",
    icon: EyeIcon,
    gradient: "from-accent-500 to-accent-700",
    number: "02",
  },
  {
    title: "Graphics Design",
    description: "Visual identity and brand materials that tell your story",
    icon: PaintBrushIcon,
    gradient: "from-secondary-500 to-secondary-700",
    number: "03",
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable business insights",
    icon: ChartBarIcon,
    gradient: "from-primary-600 via-accent-500 to-secondary-500",
    number: "04",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProfessionalServices() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Minimal Beautiful Background */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 58, 138, 0.1) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Elegant floating elements */}
        <div className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary-200/30 to-accent-200/30 blur-2xl" />
        <div className="absolute -left-20 bottom-20 h-32 w-32 rounded-full bg-gradient-to-br from-secondary-200/30 to-primary-200/30 blur-2xl" />
      </div>

      <div className="container relative mx-auto px-6 py-24">
        {/* Modern Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
            Our Expertise
          </div>
          <h2 className="mb-6 md:text-5xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-6xl">
            What We
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
              {" "}
              Create
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg mobile:text-sm text-gray-600 dark:text-gray-300">
            Four core services. Endless possibilities. Beautiful solutions.
          </p>
        </motion.div>

        {/* Beautiful Modern Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/80 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 group-hover:shadow-2xl dark:border-gray-700/30 dark:bg-gray-800/80 dark:shadow-gray-900/50">
                  {/* Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-5`}
                  />

                  {/* Number Badge */}
                  <div className="absolute right-6 top-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-sm font-bold text-white shadow-lg`}
                    >
                      {service.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-8">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-8 text-lg mobile:text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors group-hover:text-accent-600 dark:text-primary-400 dark:group-hover:text-accent-400">
                      Learn More
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl" />
                  <div className="absolute -left-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl" />

                  {/* Bottom Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} transition-all duration-700 group-hover:w-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

       
      </div>
    </section>
  );
}
