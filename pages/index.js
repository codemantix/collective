import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSkeleton from "@/components/shared/ui/HeroSkeleton";
import PerformanceMonitor from "@/components/shared/ui/PerformanceMonitor";

const ProfessionalHero = dynamic(() => import("@/components/home/Hero"), {
  loading: () => <HeroSkeleton />,
});

const ProfessionalServices = dynamic(() => import("@/components/home/Services"), {
  loading: () => <div className="min-h-[50vh] animate-pulse bg-white dark:bg-gray-900" />,
});

const ProfessionalWhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-50 dark:bg-gray-800" />,
});

const CodematixCTA = dynamic(() => import("@/components/shared/ui/CodematixCTA"), {
  loading: () => <div className="min-h-[40vh] animate-pulse bg-primary-900" />,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Codemantix Collective - Digital Innovation &amp; Technology Solutions</title>
        <meta
          name="description"
          content="Leading digital innovation company specializing in web development, UI/UX design, and data analysis. Transform your business with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="web development, UI/UX design, data analysis, digital solutions, technology consulting, responsive design, modern web applications"
        />
        <meta property="og:title" content="Codemantix Collective - Digital Innovation &amp; Technology Solutions" />
        <meta
          property="og:description"
          content="Leading digital innovation company specializing in web development, UI/UX design, and data analysis."
        />
        <meta property="og:url" content="https://codemantixcollective.com" />
        <meta property="og:site_name" content="Codemantix Collective" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Codemantix Collective - Digital Innovation &amp; Technology Solutions" />
        <meta
          name="twitter:description"
          content="Leading digital innovation company specializing in web development, UI/UX design, and data analysis."
        />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="canonical" href="https://codemantixcollective.com" />
      </Head>
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
    </>
  );
}
