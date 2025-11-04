"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  LightBulbIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon,
  BoltIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  HandRaisedIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const teamValues = [
  {
    title: "Collaborative Spirit",
    description:
      "We believe in the power of teamwork and collective intelligence to solve complex challenges.",
    icon: UsersIcon,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    title: "Continuous Learning",
    description:
      "We're committed to staying ahead of the curve through constant learning and skill development.",
    icon: LightBulbIcon,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in everything we deliver, ensuring exceptional results.",
    icon: StarIcon,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
  },
  {
    title: "Innovation Drive",
    description:
      "We push boundaries and explore new possibilities to create groundbreaking solutions.",
    icon: RocketLaunchIcon,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
];

const workCulture = [
  {
    title: "Remote-First",
    description:
      "Flexible work arrangements that promote work-life balance and global collaboration.",
    icon: GlobeAltIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Growth Focused",
    description:
      "Continuous learning opportunities and career development programs for all team members.",
    icon: ArrowTrendingUpIcon,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Inclusive Environment",
    description: "Diverse and welcoming workplace where everyone's voice is heard and valued.",
    icon: HandRaisedIcon,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Innovation Lab",
    description:
      "Dedicated time for experimentation and exploring new technologies and methodologies.",
    icon: BeakerIcon,
    color: "from-purple-500 to-pink-500",
  },
];

export default function TeamValues() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-accent-50 py-24 dark:from-primary-900 dark:via-primary-800 dark:to-accent-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 60px 60px",
          }}
        />

        {/* Static Floating Orbs */}
        <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-accent-400/20 to-secondary-400/30 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-400/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        {/* Team Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-6 py-3 text-sm font-semibold text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/10 dark:text-accent-300">
              <HeartIcon className="h-5 w-5" />
              Our Team Values
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-primary-900 dark:text-white md:text-6xl">
              What{" "}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Drives
              </span>{" "}
              Us
            </h2>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl">
              The core principles and values that guide our team culture and define how we work
              together to achieve excellence.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl border border-primary-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15">
                    {/* Icon */}
                    <div className="mb-6 flex ">
                      <div
                        className={`h-14 w-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-lg font-bold text-primary-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-300">
                      {value.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {value.description}
                    </p>

                    {/* Progress Line */}
                    <div
                      className={`h-1 w-0 rounded-full bg-gradient-to-r ${value.color} mt-4 transition-all duration-700 group-hover:w-full`}
                    ></div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${value.color} -z-10 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-10`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Work Culture Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary-500/20 bg-secondary-500/10 px-6 py-3 text-sm font-semibold text-secondary-600 dark:border-secondary-500/20 dark:bg-secondary-500/10 dark:text-secondary-300">
              <SparklesIcon className="h-5 w-5" />
              Our Work Culture
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-primary-900 dark:text-white md:text-5xl">
              How We{" "}
              <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Work
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl">
              Creating an environment where innovation thrives, creativity flourishes, and every
              team member can reach their full potential.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workCulture.map((culture, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative text-center"
              >
                <div className="relative h-full rounded-3xl border border-primary-200 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${culture.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110`}
                    >
                      <culture.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl font-bold text-primary-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-300">
                    {culture.title}
                  </h3>

                  <p className="leading-relaxed mobile:text-sm text-gray-700 dark:text-gray-300">
                    {culture.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent-400 to-secondary-400 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                </div>

                {/* Hover Glow */}
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-accent-500/10 to-secondary-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 text-lg text-gray-700 dark:text-gray-300">
            <BoltIcon className="h-6 w-6 text-accent-500 dark:text-accent-400" />
            <span>Ready to join our amazing team?</span>
            <HeartIcon className="h-6 w-6 text-secondary-500 dark:text-secondary-400" />
          </div>

          <div className="mt-6">
            <button className="inline-flex transform items-center gap-2 rounded-2xl bg-gradient-to-r from-accent-500 to-secondary-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-accent-600 hover:to-secondary-600 hover:shadow-xl">
              <span>View Open Positions</span>
              <span className="transition-transform duration-300 hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
