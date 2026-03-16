"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  SwatchIcon,
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../data/ProjectsData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Service configuration for consistent styling
const serviceConfig = {
  "Web Development": {
    icon: CodeBracketIcon,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-300",
  },
  "UI/UX Design": {
    icon: PaintBrushIcon,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-700 dark:text-purple-300",
  },
  "Graphics Design": {
    icon: SwatchIcon,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    textColor: "text-pink-700 dark:text-pink-300",
  },
  "Data Analytics": {
    icon: ChartBarIcon,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-700 dark:text-green-300",
  },
};

// Map project categories to main services
const categoryMapping = {
  "UI/UX Design": "UI/UX Design",
  "Web Development": "Web Development",
  "Graphics Design": "Graphics Design",
  "Data Analytics": "Data Analytics",
  "Mobile App": "UI/UX Design",
  "E-Commerce": "Web Development",
};

const filterOptions = [
  "All Projects",
  "Web Development",
  "UI/UX Design",
  "Graphics Design",
  "Data Analytics",
];

export default function ProjectCarouselPro() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [swiperRef, setSwiperRef] = useState(null);
  const [isSwiperrInitialized, setIsSwiperInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // Filter projects based on active filter and main service categories
  const getFilteredProjects = () => {
    const mappedProjects = projects.filter((project) => categoryMapping[project.category]);

    if (activeFilter === "All Projects") {
      return mappedProjects;
    }

    return mappedProjects.filter((project) => {
      const mappedCategory = categoryMapping[project.category];
      return mappedCategory === activeFilter;
    });
  };

  const filteredProjects = getFilteredProjects();

  // Professional Swiper configuration
  const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 12,
    slidesPerView: 1.2,
    centeredSlides: true,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 32,
      },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
      bulletClass: "swiper-pagination-bullet custom-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
      renderBullet: (index, className) => {
        return `<span class="${className}"></span>`;
      },
    },
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    loop: true,
    centeredSlides: false,
    grabCursor: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    onSwiper: (swiper) => {
      setSwiperRef(swiper);
      setIsSwiperInitialized(true);
    },
    onInit: () => {
      setIsSwiperInitialized(true);
    },
  };

  // Handle component mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update navigation refs when Swiper is ready
  useEffect(() => {
    if (swiperRef && navigationPrevRef.current && navigationNextRef.current) {
      // Ensure navigation object exists before accessing it
      if (swiperRef.params && swiperRef.params.navigation) {
        swiperRef.params.navigation.prevEl = navigationPrevRef.current;
        swiperRef.params.navigation.nextEl = navigationNextRef.current;
      }
      if (swiperRef.navigation) {
        swiperRef.navigation.init();
        swiperRef.navigation.update();
      }
    }
  }, [swiperRef]);

  return (
    <>
      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .custom-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(156, 163, 175, 0.5) !important;
          border-radius: 50% !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }

        .custom-bullet-active {
          width: 32px !important;
          border-radius: 4px !important;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
        }

        @media (max-width: 640px) {
          .custom-bullet {
            width: 6px !important;
            height: 6px !important;
          }
          .custom-bullet-active {
            width: 24px !important;
          }
        }

        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            display: none !important;
          }
        }

        .swiper-wrapper {
          align-items: stretch !important;
        }

        .swiper-slide {
          height: auto !important;
        }

        .swiper {
          width: 100% !important;
          height: auto !important;
        }

        .swiper-initialized {
          touch-action: pan-y pinch-zoom !important;
        }

        .swiper-container-wrapper {
          width: 100%;
          position: relative;
          overflow: hidden;
          will-change: transform;
        }

        .swiper-container-wrapper::before {
          content: "";
          display: block;
          width: 100%;
          height: 0;
          padding-bottom: 0;
        }

        .project-card {
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
          contain: layout style paint;
        }

        .swiper-slide-active {
          contain: layout style paint;
        }

        /* Prevent animations from causing layout shifts */
        .motion-div {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      <section
        ref={elementRef}
        className="relative overflow-x-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 py-16 dark:from-gray-900 dark:via-primary-900/30 dark:to-gray-800 sm:py-24"
      >
        {/* Professional Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {isVisible ? (
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-64 -top-64 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/10 to-accent-400/20 blur-3xl"
            />
          ) : (
            <div className="absolute -right-64 -top-64 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/10 to-accent-400/20 blur-3xl" />
          )}

          {isVisible ? (
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1.1, 0.9, 1.1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-64 -left-64 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-secondary-400/10 to-accent-400/15 blur-3xl"
            />
          ) : (
            <div className="absolute -bottom-64 -left-64 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-secondary-400/10 to-accent-400/15 blur-3xl" />
          )}
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary-200/60 bg-gradient-to-r from-white/90 to-primary-50/80 px-6 py-3 shadow-lg backdrop-blur-md dark:border-primary-700/60 dark:from-slate-800/90 dark:to-primary-900/80"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                Featured Projects
              </span>
            </motion.div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Our Latest
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
                {" "}
                Work
              </span>
            </h2>

            <p className="mx-auto max-w-2xl  mobile:text-sm text-lg text-gray-600 dark:text-gray-300 lg:text-xl">
              Discover our portfolio of stunning projects across web development, design, and
              analytics.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {filterOptions.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-sm mobile:text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg"
                    : "border border-gray-300/60 bg-white/80 text-gray-700 backdrop-blur-sm hover:border-primary-300/60 hover:bg-white/90 hover:shadow-md dark:border-gray-600/60 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-primary-600/60 dark:hover:bg-gray-800/90"
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative">{filter}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Professional Carousel Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]"
          >
            {/* Custom Navigation Buttons */}
            <div className="absolute -left-3 top-[40%] z-20 -translate-y-[40%] sm:-left-6 lg:-left-12">
              <motion.button
                ref={navigationPrevRef}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border border-white/20 bg-white/90 p-2 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700/20 dark:bg-gray-800/90 dark:hover:bg-gray-800 sm:p-3 lg:p-4"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-4 w-4 text-gray-700 dark:text-gray-300 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </motion.button>
            </div>

            <div className="absolute -right-4 top-[40%] z-20 -translate-y-[40%] sm:-right-6 lg:-right-12">
              <motion.button
                ref={navigationNextRef}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border border-white/20 bg-white/90 p-2 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700/20 dark:bg-gray-800/90 dark:hover:bg-gray-800 sm:p-3 lg:p-4"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="h-4 w-4 text-gray-700 dark:text-gray-300 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </motion.button>
            </div>

            {/* Professional Swiper Carousel */}
            <div className="swiper-container-wrapper">
              {!isMounted || !isSwiperrInitialized ? (
                <div className="flex animate-pulse gap-3 sm:gap-4">
                  <div className="h-[320px] flex-1 rounded-xl bg-gray-200 dark:bg-gray-700 sm:h-[420px] sm:rounded-2xl md:h-[480px] lg:h-[520px]"></div>
                  <div className="h-[320px] flex-1 rounded-xl bg-gray-200 dark:bg-gray-700 sm:h-[420px] sm:rounded-2xl md:h-[480px] lg:h-[520px]"></div>
                  <div className="hidden h-[320px] flex-1 rounded-xl bg-gray-200 dark:bg-gray-700 sm:block sm:h-[420px] sm:rounded-2xl md:h-[480px] lg:h-[520px]"></div>
                </div>
              ) : null}
              {isMounted && (
                <Swiper {...swiperConfig}>
                  {filteredProjects.map((project, idx) => {
                    const mappedCategory = categoryMapping[project.category];
                    const serviceInfo = serviceConfig[mappedCategory];
                    const IconComponent = serviceInfo?.icon || CodeBracketIcon;

                    return (
                      <SwiperSlide key={`${project.title}-${idx}`}>
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="motion-div h-full"
                        >
                          <div className="project-card group relative flex h-[320px] flex-col overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:border-gray-700/20 dark:bg-gray-800/90 sm:h-[420px] sm:rounded-2xl md:h-[480px] lg:h-[520px]">
                            {/* Featured Badge */}
                            {project.featured && (
                              <div className="absolute right-4 top-4 z-10">
                                <motion.div
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  className="rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-2 shadow-lg ring-2 ring-white/50"
                                >
                                  <StarIcon className="h-4 w-4 text-white drop-shadow-sm" />
                                </motion.div>
                              </div>
                            )}

                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl sm:aspect-[4/3] sm:rounded-t-2xl">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 33vw"
                              />

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                              {/* Action Buttons */}
                              {project.link && (
                                <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:right-4 sm:top-4 sm:gap-2">
                                  <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="rounded-full bg-white/90 p-1.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 sm:p-2"
                                  >
                                    <ArrowTopRightOnSquareIcon className="h-3 w-3 text-gray-700 dark:text-gray-300 sm:h-4 sm:w-4" />
                                  </motion.a>
                                </div>
                              )}

                              {/* Stats */}
                              <div className="absolute bottom-2 left-2 flex gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:bottom-4 sm:left-4 sm:gap-4">
                                <div className="flex items-center gap-1 text-xs sm:text-sm">
                                  <HeartIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>{project.likes}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs sm:text-sm">
                                  <EyeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>{project.views}</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6">
                              {/* Category */}
                              <div className="mb-2 flex items-center gap-1.5 sm:mb-3 sm:gap-2 md:mb-4">
                                <div
                                  className={`rounded-md sm:rounded-lg ${serviceInfo?.bgColor} p-1.5 sm:p-2`}
                                >
                                  <IconComponent
                                    className={`h-3 w-3 sm:h-4 sm:w-4 ${serviceInfo?.textColor}`}
                                  />
                                </div>
                                <span
                                  className={`text-sm font-medium  ${serviceInfo?.textColor}`}
                                >
                                  {mappedCategory}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="mb-2 line-clamp-2 text-[16px] font-bold text-gray-900 dark:text-white sm:mb-3 sm:text-lg md:text-xl">
                                {project.title}
                              </h3>

                              {/* Description */}
                              <p className="mb-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-300 sm:mb-3 sm:text-sm md:mb-4">
                                {project.description}
                              </p>

                              {/* Technologies */}
                              <div className="mb-2 flex flex-wrap gap-1 sm:mb-3 sm:gap-2 md:mb-4">
                                {project.technologies?.slice(0, 2).map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 sm:px-3 sm:py-1 sm:text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies?.length > 2 && (
                                  <span className="rounded-full bg-primary-100 px-1.5 py-0.5 text-[10px] font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300 sm:px-3 sm:py-1 sm:text-xs">
                                    +{project.technologies.length - 2}
                                  </span>
                                )}
                              </div>

                              {/* Footer */}
                              <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-2 dark:border-gray-700 sm:pt-3 md:pt-4">
                                <div className="flex items-center gap-1 sm:gap-2">
                                  <div
                                    className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
                                      project.status === "Live"
                                        ? "bg-green-400"
                                        : project.status === "In Development"
                                          ? "bg-yellow-400"
                                          : "bg-gray-400"
                                    }`}
                                  />
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {project.status}
                                  </span>
                                </div>

                                {project.link ? (
                                  <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 2 }}
                                    className={`text-xs font-semibold sm:text-sm ${serviceInfo?.textColor} hover:opacity-80`}
                                  >
                                    <span className="hidden sm:inline">View Project →</span>
                                    <span className="sm:hidden">View →</span>
                                  </motion.a>
                                ) : (
                                  <span className="text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
                                    <span className="hidden sm:inline">Coming Soon</span>
                                    <span className="sm:hidden">Soon</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href={"/contact"}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  <PlayIcon className="h-5 w-5" />
                  Start Your Project
                </span>
              </motion.button>
            </Link>

            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-primary-600/20 bg-white/10 px-8 py-4 font-semibold text-primary-700 backdrop-blur-sm transition-all duration-300 hover:border-primary-600/40 hover:bg-white/20 hover:shadow-lg dark:border-primary-400/20 dark:text-primary-300 dark:hover:border-primary-400/40 dark:hover:bg-white/5"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
