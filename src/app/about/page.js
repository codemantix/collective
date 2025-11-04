import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata = {
  title: "About Us - Leading Digital Innovation Company",
  description:
    "Learn about Codemantix Collective, a pioneering digital innovation company. Discover our mission, vision, values, and the passionate team behind cutting-edge technology solutions.",
  keywords: [
    "about codemantix collective",
    "digital innovation company",
    "technology solutions team",
    "web development agency",
    "company mission vision",
    "tech startup story",
    "innovation leaders",
    "digital transformation experts",
  ],
  openGraph: {
    title: "About Codemantix Collective - Innovation Meets Excellence",
    description:
      "Discover the story behind Codemantix Collective and meet the innovative team transforming businesses through technology.",
    images: [
      {
        url: "/Images/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "About Codemantix Collective Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Codemantix Collective - Innovation Meets Excellence",
    description:
      "Discover the story behind Codemantix Collective and meet the innovative team transforming businesses through technology.",
  },
};

// Dynamic imports for better code splitting and performance
const AboutHero = dynamic(() => import("../../components/sections/AboutHero"), {
  loading: () => (
    <div className="min-h-screen animate-pulse bg-gradient-to-br from-primary-50 via-white to-accent-50" />
  ),
});

const BrandStory = dynamic(() => import("@/components/sections/BrandStory"), {
  loading: () => (
    <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-gray-50/50 via-primary-50/30 to-accent-50/20" />
  ),
});

const MissionandVision = dynamic(() => import("../../components/sections/Mission&Vision"), {
  loading: () => <div className="min-h-[70vh] animate-pulse bg-white" />,
});

const TeamOverview = dynamic(() => import("../../components/sections/TeamOverview"), {
  loading: () => <div className="min-h-[60vh] animate-pulse bg-gray-50" />,
});

const CodematixCTA = dynamic(() => import("@/components/ui/CodematixCTA"), {
  loading: () => <div className="min-h-[40vh] animate-pulse bg-primary-900" />,
});

export default function About() {
  return (
    <div>
      <AboutHero />
      <Suspense
        fallback={
          <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-gray-50/50 via-primary-50/30 to-accent-50/20" />
        }
      >
        <BrandStory />
      </Suspense>
      <Suspense fallback={<div className="min-h-[70vh] animate-pulse bg-white" />}>
        <MissionandVision />
      </Suspense>
      <Suspense fallback={<div className="min-h-[60vh] animate-pulse bg-gray-50" />}>
        <TeamOverview />
      </Suspense>
      <Suspense fallback={<div className="min-h-[40vh] animate-pulse bg-primary-900" />}>
        <CodematixCTA
          title="Ready to Work with Our Expert Team?"
          description="Join our growing family of satisfied clients and let's build something extraordinary together."
          primaryHref="/contact"
          primaryText="Start Your Journey"
          secondaryText="View Our Services"
          secondaryHref="/services"
          variant="primary"
        />
      </Suspense>
    </div>
  );
}
