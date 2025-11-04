import dynamic from "next/dynamic";
import { Suspense } from "react";
import { CodematixCTA } from "@/components/ui";

// Dynamic imports for better performance
const TeamHero = dynamic(() => import("@/components/sections/TeamHero"), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="animate-pulse text-center">
          <div className="mx-auto mb-6 h-8 w-64 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto mb-8 h-16 w-full max-w-4xl rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto mb-12 h-6 w-full max-w-2xl rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 h-12 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
});

const TeamGrid = dynamic(() => import("@/components/sections/TeamGrid"), {
  loading: () => (
    <div className="bg-white py-16 dark:bg-gray-900 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 animate-pulse text-center">
          <div className="mx-auto mb-6 h-12 w-80 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto h-6 w-full max-w-2xl rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl bg-gray-100 p-6 dark:bg-gray-800">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2 h-6 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mx-auto mb-4 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
});

const TeamValues = dynamic(() => import("@/components/sections/TeamValues"), {
  loading: () => (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 dark:from-gray-800 dark:to-gray-900 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 animate-pulse text-center">
          <div className="mx-auto mb-6 h-12 w-80 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto h-6 w-full max-w-2xl rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-xl bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-4 h-6 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mx-auto h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
});

export const metadata = {
  title: "Our Team - Meet the Experts | Codemantix Collective",
  description:
    "Meet our diverse team of skilled developers, designers, and digital experts from around the globe. Discover the passionate professionals behind your next digital success.",
  keywords:
    "team, developers, designers, digital experts, web development team, UI UX designers, remote team, global talent, software engineers",
  openGraph: {
    title: "Our Team - Meet the Experts | Codemantix Collective",
    description:
      "Discover our talented team of developers, designers, and digital experts ready to bring your vision to life.",
    images: ["/Images/Team.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Meet the Experts | Codemantix Collective",
    description:
      "Meet our diverse team of skilled professionals ready to transform your digital ideas into reality.",
    images: ["/Images/Team.jpg"],
  },
};

export default function Team() {
  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen animate-pulse bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800" />
        }
      >
        <TeamHero />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />}>
        <TeamGrid />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 animate-pulse bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />
        }
      >
        <TeamValues />
      </Suspense>

      <CodematixCTA
        title="Ready to Work with Our Expert Team?"
        description="Join our growing family of satisfied clients and let's build something extraordinary together."
        primaryHref="/contact"
        primaryText="Start Your Project"
        secondaryText="View Our Services"
        secondaryHref="/services"
        variant="gradient"
      />
    </>
  );
}
