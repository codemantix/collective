/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://codemantixcollective.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/admin/*", "/_next/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    additionalSitemaps: ["https://codemantixcollective.com/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.includes("/services")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.includes("/projects")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.includes("/about")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.includes("/team")) {
      priority = 0.7;
      changefreq = "monthly";
    } else if (path.includes("/contact")) {
      priority = 0.9;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
