"use client";

import Image from "next/image";
import Link from "next/link";
import {
  UsersIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  SwatchIcon,
  GlobeAltIcon,
  TrophyIcon,
  StarIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const teamStats = [
  {
    number: "10+",
    label: "Expert Members",
    icon: UsersIcon,
    color: "from-primary-500 to-primary-600",
  },
  { number: "5+", label: "Countries", icon: GlobeAltIcon, color: "from-accent-500 to-accent-600" },
  {
    number: "60+",
    label: "Projects",
    icon: TrophyIcon,
    color: "from-secondary-500 to-secondary-600",
  },
  { number: "4.9", label: "Avg Rating", icon: StarIcon, color: "from-yellow-500 to-orange-500" },
];

const specializations = [
  {
    title: "Full-Stack Development",
    description: "Expert developers building scalable web applications",
    icon: CodeBracketIcon,
    count: "8+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    description: "Creative designers crafting intuitive experiences",
    icon: PaintBrushIcon,
    count: "6+",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Analytics",
    description: "Data scientists turning insights into strategy",
    icon: ChartBarIcon,
    count: "5+",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Graphics Design",
    description: "Visual artists bringing brands to life",
    icon: SwatchIcon,
    count: "6+",
    color: "from-orange-500 to-red-500",
  },
];

export default function TeamOverview() {
  const { elementRef, isVisible } = useIntersectionObserver();

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
      y: -8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white py-16 sm:py-24 md:py-32 lg:py-40 dark:from-gray-900 dark:via-primary-900/30 dark:to-gray-900"
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
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div
          className="grid items-center gap-12 sm:gap-16 lg:gap-20 lg:grid-cols-2"
        >
          {/* Content Side */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary-200/50 bg-primary-50/50 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-700 shadow-lg shadow-primary-100/50">
                <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Meet Our Team
              </span>

              <h2 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-primary-900">
                Working With{" "}
                <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                  Experts
                </span>
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                At Codemantix Collective, our team is a fusion of creativity, strategy, and
                technical excellence. We unite designers, developers, and analysts under one vision:
                to craft innovative digital solutions that empower businesses and inspire users.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                Whether it's building seamless interfaces, designing actionable data solutions, or
                creating impactful experiences, our collective ensures your ideas become
                transformative realities.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {teamStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group transition-all duration-300 hover:scale-105">
                    <div className="relative rounded-2xl border-2 border-primary-100/50 bg-white/80 dark:border-primary-700/30 dark:bg-gray-800/80 p-4 sm:p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary-200">
                      <div
                        className={`h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-br ${stat.color} mb-3 sm:mb-4 flex items-center justify-center rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-125 shadow-md`}
                      >
                        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <div className="mb-2 text-2xl sm:text-3xl md:text-4xl font-black text-primary-900 dark:text-white">{stat.number}</div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/team"
                className="group inline-flex items-center gap-3 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary-600 to-accent-500 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-primary-700 hover:to-accent-600 hover:shadow-2xl"
              >
                <span>Meet Our Team</span>
                <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-8 sm:space-y-10">
            {/* Main Team Image */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                <Image
                  src="/Images/Teampicture.jpg"
                  alt="Our Amazing Team"
                  width={600}
                  height={400}
                  className="h-64 sm:h-80 md:h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent"></div>

                {/* Floating Team Stats */}
                <div
                  className="absolute right-4 sm:right-6 top-4 sm:top-6 rounded-2xl bg-white/95 dark:bg-gray-800/95 p-3 sm:p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
                >
                  <div className="flex items-center gap-2 text-primary-900 dark:text-white">
                    <HeartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-accent-500" />
                    <span className="text-xs sm:text-sm font-bold">10+ Experts</span>
                  </div>
                </div>

                <div
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 rounded-2xl bg-accent-500/95 dark:bg-accent-600/95 p-3 sm:p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
                >
                  <div className="flex items-center gap-2 text-white">
                    <StarIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-xs sm:text-sm font-bold">4.9/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 sm:-inset-2 -z-10 rounded-3xl bg-gradient-to-r from-primary-500/30 via-accent-500/20 to-secondary-500/30 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100"></div>
            </div>

            {/* Team Specializations */}
            <div>
              <h3 className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary-900 dark:text-white">
                Our{" "}
                <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                  Specializations
                </span>
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {specializations.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div
                      key={index}
                      className="group relative h-full transition-all duration-300 hover:scale-105"
                    >
                      <div className="relative rounded-2xl sm:rounded-3xl border-2 border-primary-100/50 bg-white/80 dark:border-primary-700/30 dark:bg-gray-800/80 p-4 sm:p-5 md:p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary-200 h-full">
                        <div
                          className={`h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-br ${spec.color} mb-3 sm:mb-4 flex items-center justify-center rounded-lg sm:rounded-xl transition-transform duration-300 group-hover:scale-125 shadow-md`}
                        >
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>

                        <div className="mb-2 text-lg sm:text-xl md:text-2xl font-bold text-primary-900 dark:text-white">{spec.count}</div>

                        <div className="mb-2 text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">{spec.title}</div>

                        <div className="text-xs sm:text-sm leading-tight text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                          {spec.description}
                        </div>

                        {/* Hover Line */}
                        <div
                          className={`h-1.5 w-0 bg-gradient-to-r ${spec.color} rounded-full transition-all duration-300 group-hover:w-full`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
