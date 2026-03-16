"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProjectCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 to-white/60 shadow-xl backdrop-blur-xl dark:border-gray-700/20 dark:from-gray-800/90 dark:to-gray-800/60">
      {/* Image Skeleton */}
      <div className="aspect-[4/3] overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Content Skeleton */}
      <div className="space-y-4 p-6">
        {/* Category Badge Skeleton */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Title Skeleton */}
        <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Technologies Skeleton */}
        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
          ))}
        </div>

        {/* Action Button Skeleton */}
        <div className="pt-2">
          <div className="h-5 w-24 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

export function ProjectGridSkeleton() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
