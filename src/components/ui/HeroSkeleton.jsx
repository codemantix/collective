"use client";

export default function HeroSkeleton() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-gray-900 dark:via-primary-900/50 dark:to-gray-800">
      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Section Skeleton */}
          <div className="space-y-8 pt-20 text-center lg:pt-0 lg:text-left">
            {/* Trust Badge Skeleton */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-6 py-3 shadow-sm">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-300"></div>
              <div className="h-4 w-32 animate-pulse rounded bg-gray-300"></div>
            </div>

            {/* Main Heading Skeleton */}
            <div className="space-y-4">
              <div className="h-12 w-full animate-pulse rounded bg-gray-300 lg:w-3/4"></div>
              <div className="h-12 w-full animate-pulse rounded bg-gray-300 lg:w-2/3"></div>
              <div className="h-12 w-full animate-pulse rounded bg-gray-300 lg:w-1/2"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
            </div>

            {/* Service Highlight Skeleton */}
            <div className="rounded-3xl border border-primary-200/30 bg-white/60 p-8">
              <div className="items-start gap-6 md:flex">
                <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-2xl bg-gradient-to-br from-primary-300 to-primary-500 md:mb-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
              {/* Progress indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-2 w-8 animate-pulse rounded-full bg-gray-300"></div>
                ))}
              </div>
            </div>

            {/* CTA Buttons Skeleton */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="h-12 w-48 animate-pulse rounded-full bg-primary-300"></div>
              <div className="h-12 w-36 animate-pulse rounded-full bg-gray-300"></div>
            </div>

            {/* Stats Skeleton */}
            <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-2 h-8 w-16 animate-pulse rounded bg-primary-300"></div>
                  <div className="mx-auto h-4 w-20 animate-pulse rounded bg-gray-200"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section Skeleton */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-primary-200 to-accent-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
