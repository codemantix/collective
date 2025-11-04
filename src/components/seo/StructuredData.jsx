import Script from "next/script";

// Organization Schema
export const OrganizationSchema = () => (
  <Script
    id="organization-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Codemantix Collective",
        alternateName: "Codemantix",
        url: "https://codemantixcollective.com",
        logo: "https://codemantixcollective.com/logo.png",
        image: "https://codemantixcollective.com/Images/Team.jpg",
        description:
          "Leading digital innovation company specializing in web development, UI/UX design, and data analysis. Transform your business with cutting-edge technology solutions.",
        foundingDate: "2025",
        founder: {
          "@type": "Person",
          name: "Codemantix Team",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "Global",
          addressRegion: "Worldwide",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+234 812 312 1369",
          contactType: "Customer Service",
          areaServed: "Worldwide",
          availableLanguage: "English",
        },
        sameAs: [
          "https://github.com/Codemantix-collective",
          "https://linkedin.com/company/codemantix-collective",
        ],
        knowsAbout: [
          "Web Development",
          "UI/UX Design",
          "Data Analysis",
          "React Development",
          "Next.js Development",
          "Digital Transformation",
          "Business Intelligence",
        ],
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "0",
            longitude: "0",
          },
          geoRadius: "20000000",
        },
      }),
    }}
  />
);

// Services Schema
export const ServicesSchema = () => (
  <Script
    id="services-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Codemantix Collective",
        image: "https://codemantixcollective.com/Images/Services.jpg",
        url: "https://codemantixcollective.com/services",
        telephone: "+234 812 312 1369",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Global",
        },
        priceRange: "$$",
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Web Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Web Development",
                    description:
                      "Modern, responsive websites built with cutting-edge technologies like React and Next.js",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Development",
                    description: "Full-featured online stores with secure payment integration",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Progressive Web Apps",
                    description: "Fast, reliable web applications that work offline",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "UI/UX Design Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "User Experience Design",
                    description: "Intuitive and engaging user experiences that convert",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "User Interface Design",
                    description: "Beautiful, modern interfaces that users love",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Design Systems",
                    description: "Scalable design systems for consistent brand experience",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Data Analysis Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Intelligence",
                    description: "Transform raw data into actionable business insights",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data Visualization",
                    description: "Interactive dashboards and reports for better decision making",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Predictive Analytics",
                    description: "Machine learning models to predict future trends",
                  },
                },
              ],
            },
          ],
        },
      }),
    }}
  />
);

// Website Schema with Search Action
export const WebsiteSchema = () => (
  <Script
    id="website-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Codemantix Collective",
        alternateName: "Codemantix",
        url: "https://codemantixcollective.com",
        description:
          "Leading digital innovation company specializing in web development, UI/UX design, and data analysis.",
        publisher: {
          "@type": "Organization",
          name: "Codemantix Collective",
          logo: {
            "@type": "ImageObject",
            url: "https://codemantixcollective.com/logo.png",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://codemantixcollective.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        mainEntity: {
          "@type": "Organization",
          name: "Codemantix Collective",
        },
        about: [
          {
            "@type": "Thing",
            name: "Web Development",
          },
          {
            "@type": "Thing",
            name: "UI/UX Design",
          },
          {
            "@type": "Thing",
            name: "Data Analysis",
          },
        ],
        keywords:
          "web development, UI/UX design, data analysis, digital solutions, React, Next.js, business intelligence",
      }),
    }}
  />
);

// Breadcrumb Schema (for individual pages)
export const BreadcrumbSchema = ({ items }) => (
  <Script
    id="breadcrumb-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `https://codemantixcollective.com${item.url}`,
        })),
      }),
    }}
  />
);

// FAQ Schema (can be used on any page with FAQs)
export const FAQSchema = ({ faqs }) => (
  <Script
    id="faq-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }),
    }}
  />
);

// Local Business Schema (if you have a physical location)
export const LocalBusinessSchema = () => (
  <Script
    id="local-business-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://codemantixcollective.com",
        name: "Codemantix Collective",
        image: "https://codemantixcollective.com/Images/Team.jpg",
        telephone: "+234 812 312 1369",
        url: "https://codemantixcollective.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Your Street Address",
          addressLocality: "Your City",
          addressRegion: "Your State/Province",
          postalCode: "Your ZIP Code",
          addressCountry: "Your Country",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        sameAs: [
          "https://github.com/Codemantix-collective",
          "https://linkedin.com/company/codemantix-collective",
        ],
      }),
    }}
  />
);
