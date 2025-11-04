"use client";

import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  TrophyIcon,
  SparklesIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const reasons = [
  {
    icon: LightBulbIcon,
    title: "Innovation First",
    description:
      "We leverage cutting-edge technologies and methodologies to deliver solutions that give you a competitive edge in the digital landscape.",
    gradient: "from-amber-500 to-orange-600",
    delay: 0,
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description:
      "Bank-level security protocols and compliance standards to protect your sensitive data and business operations.",
    gradient: "from-green-500 to-emerald-600",
    delay: 0.1,
  },
  {
    icon: RocketLaunchIcon,
    title: "Rapid Deployment",
    description:
      "Agile development practices and CI/CD pipelines ensure faster time-to-market without compromising quality.",
    gradient: "from-purple-500 to-indigo-600",
    delay: 0.2,
  },
  {
    icon: UserGroupIcon,
    title: "Expert Team",
    description:
      "Senior developers, architects, and consultants with 10+ years of experience in enterprise solutions.",
    gradient: "from-blue-500 to-cyan-600",
    delay: 0.3,
  },
  {
    icon: ClockIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring, maintenance, and support to ensure your systems run smoothly.",
    gradient: "from-red-500 to-pink-600",
    delay: 0.4,
  },
  {
    icon: TrophyIcon,
    title: "Proven Success",
    description:
      "200+ successful projects delivered across various industries with 98% client satisfaction rate.",
    gradient: "from-indigo-500 to-purple-600",
    delay: 0.5,
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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export default function WhyChooseUs() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white py-24 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        {/* Enhanced geometric patterns */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px, 40px 40px",
            }}
          />
        </div>

        {/* Static floating orbs */}
        <div className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary-200/30 to-accent-200/30 blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-secondary-200/30 to-primary-200/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Enhanced Section Header */}
        <motion.div
         
          className="mb-20 text-center"
        >
          <motion.div
            
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-4 py-2 text-sm font-semibold text-primary-700 backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80 dark:text-primary-300"
          >
            <SparklesIcon className="h-4 w-4" />
            Why Choose Us
          </motion.div>

          <h2 className="mb-6 text-4xl  mobile:text-3xl font-bold text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            Your Trusted
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {" "}
              Technology Partner
            </span>
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500" />

          <p className="mx-auto max-w-3xl text-xl  mobile:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            We combine deep technical expertise with business acumen to deliver solutions that not
            only meet your immediate needs but also position you for future growth and success.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left Column - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    End-to-End Solutions
                  </h4>
                  <p className="text-slate-600  mobile:text-sm dark:text-slate-400">
                    From strategy and design to development and deployment, we handle every aspect
                    of your project with precision and care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    Scalable Architecture
                  </h4>
                  <p className="text-slate-600  mobile:text-sm dark:text-slate-400">
                    Built for growth with cloud-native, microservices architecture that scales with
                    your business demands.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    Industry Expertise
                  </h4>
                  <p className="text-slate-600  mobile:text-sm dark:text-slate-400">
                    Deep knowledge across fintech, healthcare, e-commerce, and enterprise software
                    domains.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Reasons Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 to-gray-50/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl dark:border-gray-700/30 dark:from-slate-800/90 dark:to-slate-700/80"
                >
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/0 to-accent-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-primary-400/20 group-hover:to-accent-400/20 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>

                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="text-sm  leading-relaxed text-gray-600 dark:text-gray-300">
                      {reason.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-primary-200/20 to-accent-200/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
