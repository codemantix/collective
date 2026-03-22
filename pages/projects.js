import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { CodematixCTA } from "@/components/shared/ui";

const ProjectsHero = dynamic(() => import("@/components/projects/Hero"), {
  loading: () => (
    <div className="h-screen animate-pulse bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800" />
  ),
});

const ProjectsShowcase = dynamic(() => import("@/components/projects/Showcase"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});

const ProjectCarousel = dynamic(() => import("@/components/projects/Carousel"), {
  loading: () => (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 animate-pulse text-center">
          <div className="mx-auto mb-6 h-8 w-64 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto mb-6 h-12 w-96 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto h-6 w-80 rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="flex min-h-[320px] gap-3 sm:min-h-[420px] sm:gap-4 md:min-h-[480px] lg:min-h-[520px]">
          <div className="flex-1 rounded-xl bg-gray-200 dark:bg-gray-700 sm:rounded-2xl"></div>
          <div className="flex-1 rounded-xl bg-gray-200 dark:bg-gray-700 sm:rounded-2xl"></div>
          <div className="hidden flex-1 rounded-xl bg-gray-200 dark:bg-gray-700 sm:block sm:rounded-2xl"></div>
        </div>
      </div>
    </div>
  ),
});

const ProfessionalWhyChooseUs = dynamic(
  () => import("@/components/home/WhyChooseUs"),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900" />
    ),
  }
);

export default function Projects() {
  return (
    <>
      <Head>
        <title>Our Projects - Creative Portfolio | Codemantix Collective</title>
        <meta
          name="description"
          content="Explore our award-winning portfolio of web development, UI/UX design, mobile apps, and e-commerce solutions. See how we transform ideas into stunning digital experiences."
        />
        <meta
          name="keywords"
          content="portfolio, web development projects, UI UX design, mobile app development, e-commerce solutions, digital transformation, creative projects"
        />
        <meta property="og:title" content="Our Projects - Creative Portfolio | Codemantix Collective" />
        <meta
          property="og:description"
          content="Discover our stunning portfolio of digital projects that combine innovative design with cutting-edge technology."
        />
        <meta property="og:image" content="/Images/Projects.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://codemantixcollective.com/projects" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/20 to-accent-50/10 dark:from-gray-900 dark:via-primary-900/30 dark:to-gray-800">
        <Suspense
          fallback={
            <div className="h-screen animate-pulse bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800" />
          }
        >
          <ProjectsHero />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />}>
          <ProjectsShowcase />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 dark:bg-gray-900" />}>
          <ProjectCarousel />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-96 animate-pulse bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900" />
          }
        >
          <ProfessionalWhyChooseUs />
        </Suspense>

        <CodematixCTA
          title="Inspired by Our Work?"
          description="Let's create something amazing together. Your project could be our next success story in our growing portfolio."
          primaryHref="/contact"
          primaryText="Start Your Project"
          secondaryText="Our Services"
          secondaryHref="/services"
          variant="gradient"
        />
      </div>
    </>
  );
}
