import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSkeleton from "../components/ui/HeroSkeleton";
import PerformanceMonitor from "../components/ui/PerformanceMonitor";

// Dynamic imports for better code splitting and performance
const ProfessionalHero = dynamic(() => import("../components/sections/ProfessionalHero.jsx"), {
  loading: () => <HeroSkeleton />,
});

const ProfessionalServices = dynamic(
  () => import("../components/sections/ProfessionalServices.jsx"),
  {
    loading: () => <div className="min-h-[50vh] animate-pulse bg-white dark:bg-gray-900" />,
  }
);

const ProfessionalWhyChooseUs = dynamic(
  () => import("../components/sections/ProfessionalWhyChooseUs.jsx"),
  {
    loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-50 dark:bg-gray-800" />,
  }
);

const CodematixCTA = dynamic(() => import("@/components/ui/CodematixCTA"), {
  loading: () => <div className="min-h-[40vh] animate-pulse bg-primary-900" />,
});

export default function Home() {
  return (
    <div>
      <PerformanceMonitor />
      <ProfessionalHero />
      <Suspense
        fallback={<div className="min-h-[50vh] animate-pulse bg-gray-50 dark:bg-gray-800" />}
      >
        <ProfessionalWhyChooseUs />
      </Suspense>
      <Suspense fallback={<div className="min-h-[50vh] animate-pulse bg-white dark:bg-gray-900" />}>
        <ProfessionalServices />
      </Suspense>
      <Suspense fallback={<div className="min-h-[40vh] animate-pulse bg-primary-900" />}>
        <CodematixCTA
          title="Ready to Transform Your Digital Vision?"
          description="Join 50+ companies that trust Codemantix Collective for their digital transformation journey."
          primaryHref="/contact"
          primaryText="Start Your Project Today"
          secondaryText="View Our Services"
          secondaryHref="/services"
          variant="gradient"
        />
      </Suspense>
    </div>
  );
}
