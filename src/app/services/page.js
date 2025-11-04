import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata = {
  title: "Our Services - Web Development, UI/UX Design & Data Analysis",
  description:
    "Comprehensive digital solutions including modern web development, intuitive UI/UX design, and advanced data analysis. Transform your business with our cutting-edge technology services.",
  keywords: [
    "web development services",
    "UI/UX design agency",
    "data analysis consulting",
    "responsive web design",
    "modern web applications",
    "user experience design",
    "business intelligence",
    "digital transformation",
    "React development",
    "Next.js development",
  ],
  openGraph: {
    title: "Professional Services - Codemantix Collective",
    description:
      "Expert web development, UI/UX design, and data analysis services to elevate your digital presence.",
    images: [
      {
        url: "/Images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Codemantix Collective Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Services - Codemantix Collective",
    description:
      "Expert web development, UI/UX design, and data analysis services to elevate your digital presence.",
  },
};

// Dynamic imports for better code splitting and performance
const ServicesHero = dynamic(() => import("@/components/sections/ServicesHer"), {
  loading: () => (
    <div className="min-h-screen animate-pulse bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900" />
  ),
});

const ServicesSnapshot = dynamic(() => import("@/components/sections/ServicesSnapshot"), {
  loading: () => (
    <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/20" />
  ),
});

const WebDev = dynamic(() => import("@/components/sections/WebDev"), {
  loading: () => <div className="min-h-[50vh] animate-pulse bg-white" />,
});

const UX = dynamic(() => import("@/components/sections/UX"), {
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-50" />,
});

const DataAnalysis = dynamic(() => import("@/components/sections/DataAnalysis"), {
  loading: () => <div className="min-h-[50vh] animate-pulse bg-white" />,
});

const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), {
  loading: () => (
    <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-primary-50 via-accent-50/30 to-secondary-50/20" />
  ),
});

const CodematixCTA = dynamic(() => import("@/components/ui/CodematixCTA"), {
  loading: () => <div className="min-h-[40vh] animate-pulse bg-primary-900" />,
});

export default function Services() {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <Suspense
        fallback={
          <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/20" />
        }
      >
        <ServicesSnapshot />
      </Suspense>
      <Suspense fallback={<div className="min-h-[50vh] animate-pulse bg-white" />}>
        <WebDev />
      </Suspense>
      <Suspense fallback={<div className="min-h-[50vh] animate-pulse bg-gray-50" />}>
        <UX />
      </Suspense>
      <Suspense fallback={<div className="min-h-[50vh] animate-pulse bg-white" />}>
        <DataAnalysis />
      </Suspense>
      <Suspense
        fallback={
          <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-primary-50 via-accent-50/30 to-secondary-50/20" />
        }
      >
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<div className="min-h-[40vh] animate-pulse bg-primary-900" />}>
        <CodematixCTA
          title="Ready to Transform Your Digital Vision?"
          description="Join 50+ companies that trust Codemantix Collective for their digital transformation journey. Let's bring your ideas to life with our comprehensive suite of services."
          primaryHref="/contact"
          primaryText="Start Your Project Today"
          secondaryText="View Our Portfolio"
          secondaryHref="/projects"
          variant="gradient"
        />
      </Suspense>
    </div>
  );
}
