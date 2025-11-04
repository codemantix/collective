import Head from "next/head";

const SEO = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  additionalMetaTags = [],
  additionalLinkTags = [],
  noindex = false,
  nofollow = false,
}) => {
  const defaultTitle = "Codemantix Collective - Digital Innovation & Technology Solutions";
  const defaultDescription =
    "Leading digital innovation company specializing in web development, UI/UX design, and data analysis. Transform your business with cutting-edge technology solutions.";

  const siteUrl = "https://codemantix-collectives.vercel.app";

  const fullTitle = title ? `${title} | Codemantix Collective` : defaultTitle;

  const metaDescription = description || defaultDescription;

  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const ogData = {
    title: openGraph?.title || fullTitle,
    description: openGraph?.description || metaDescription,
    url: openGraph?.url || canonicalUrl,
    type: openGraph?.type || "website",
    image: openGraph?.image || `${siteUrl}/logo.png`,
    siteName: openGraph?.siteName || "Codemantix Collectives",
    ...openGraph,
  };

  const twitterData = {
    card: twitter?.card || "summary_large_image",
    site: twitter?.site || "@codemantix",
    title: twitter?.title || fullTitle,
    description: twitter?.description || metaDescription,
    image: twitter?.image || ogData.image,
    ...twitter,
  };

  const robotsContent = [noindex ? "noindex" : "index", nofollow ? "nofollow" : "follow"].join(",");

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:type" content={ogData.type} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterData.card} />
      <meta name="twitter:site" content={twitterData.site} />
      <meta name="twitter:title" content={twitterData.title} />
      <meta name="twitter:description" content={twitterData.description} />
      <meta name="twitter:image" content={twitterData.image} />

      {/* LinkedIn specific */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Additional Link Tags */}
      {additionalLinkTags.map((tag, index) => (
        <link key={index} {...tag} />
      ))}

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Codemantix Collectives",
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            description: metaDescription,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Enugu",
              addressCountry: "Nigeria",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-800-123-4567",
              contactType: "customer service",
            },
            sameAs: [
              "https://twitter.com/codemantix",
              "https://linkedin.com/company/codemantix-collectives",
              "https://github.com/codemantix-collective",
            ],
          }),
        }}
      />

      {/* Structured Data - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Codemantix Collectives",
            url: siteUrl,
            description: metaDescription,
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
