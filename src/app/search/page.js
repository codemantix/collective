import { Suspense } from "react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

// Sample search data - you would typically fetch this from your CMS or API
const searchableContent = [
  {
    id: 1,
    title: "Web Development Services",
    description:
      "Modern, responsive websites built with cutting-edge technologies like React and Next.js",
    url: "/services",
    category: "Services",
    keywords: ["web development", "react", "nextjs", "responsive", "modern"],
  },
  {
    id: 2,
    title: "UI/UX Design Services",
    description: "Intuitive and engaging user experiences that convert visitors into customers",
    url: "/services",
    category: "Services",
    keywords: ["ui design", "ux design", "user experience", "interface", "design"],
  },
  {
    id: 3,
    title: "Data Analysis Services",
    description: "Transform raw data into actionable business insights with advanced analytics",
    url: "/services",
    category: "Services",
    keywords: ["data analysis", "business intelligence", "analytics", "insights", "data"],
  },
  {
    id: 4,
    title: "About Codemantix Collective",
    description:
      "Learn about our mission, vision, and the passionate team behind cutting-edge technology solutions",
    url: "/about",
    category: "About",
    keywords: ["about", "company", "mission", "vision", "team", "innovation"],
  },
  {
    id: 5,
    title: "Our Projects Portfolio",
    description:
      "Explore our award-winning portfolio of web development, UI/UX design, and data analysis projects",
    url: "/projects",
    category: "Projects",
    keywords: ["projects", "portfolio", "case studies", "work", "examples"],
  },
  {
    id: 6,
    title: "Meet Our Team",
    description: "Get to know the talented professionals who make digital innovation possible",
    url: "/team",
    category: "Team",
    keywords: ["team", "developers", "designers", "experts", "professionals"],
  },
  {
    id: 7,
    title: "Contact Us",
    description:
      "Get in touch for your next digital project. Expert consultation and personalized solutions",
    url: "/contact",
    category: "Contact",
    keywords: ["contact", "consultation", "inquiry", "get in touch", "project"],
  },
];

export const metadata = {
  title: "Search Results",
  description:
    "Find what you&apos;re looking for on Codemantix Collective - web development, UI/UX design, and data analysis services.",
  robots: {
    index: true,
    follow: true,
  },
};

async function SearchResults({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q?.toLowerCase() || "";

  const filteredResults = query
    ? searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.keywords.some((keyword) => keyword.toLowerCase().includes(query))
      )
    : [];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Search Results", url: `/search?q=${encodeURIComponent(query)}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/20 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Search Header */}
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Search Results
              </h1>
              {query && (
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Showing results for:{" "}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    &ldquo;{query}&rdquo;
                  </span>
                </p>
              )}
            </div>

            {/* No Query */}
            {!query && (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <svg
                    className="h-12 w-12 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Start Your Search
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter a search term to find relevant content
                </p>
              </div>
            )}

            {/* Results */}
            {query && filteredResults.length > 0 && (
              <div className="space-y-6">
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Found {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
                </div>

                {filteredResults.map((result) => (
                  <div
                    key={result.id}
                    className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
                            {result.category}
                          </span>
                        </div>

                        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                          <Link
                            href={result.url}
                            className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {result.title}
                          </Link>
                        </h3>

                        <p className="mb-3 line-clamp-2 text-gray-600 dark:text-gray-300">
                          {result.description}
                        </p>

                        <Link
                          href={result.url}
                          className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {query && filteredResults.length === 0 && (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <svg
                    className="h-12 w-12 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                    />
                  </svg>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  No Results Found
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Sorry, we couldn&apos;t find any results for &ldquo;{query}&rdquo;. Try different
                  keywords or browse our services.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                  >
                    Browse Services
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function SearchPage({ searchParams }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/20 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="mx-auto mb-4 h-8 w-48 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mx-auto mb-8 h-4 w-64 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mx-auto max-w-2xl space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-32 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}
