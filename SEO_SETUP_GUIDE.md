# SEO and Google Indexing Setup Guide

## Files Created/Updated

### 1. Sitemap (sitemap.xml)

- **Location**: `public/sitemap.xml`
- **URL**: https://codemantixcollective.com/sitemap.xml
- **Contains**: All your main pages (Home, About, Services, Projects, Team,
  Contact)
- **Auto-generated**: Using next-sitemap package
- **Updates**: Automatically when you build the project

### 2. Robots.txt

- **Location**: `public/robots.txt`
- **URL**: https://codemantixcollective.com/robots.txt
- **Purpose**: Tells search engines what to crawl and what to avoid
- **Includes**: Sitemap location, crawl rules, and crawler guidelines

## Google Search Console Setup

### Step 1: Verify Ownership

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property: `https://codemantixcollective.com`
3. Choose verification method:
   - **HTML tag**: Add to your layout.js `<head>` section
   - **DNS record**: Add TXT record to your domain
   - **Google Analytics**: If you use GA
   - **HTML file**: Upload to public folder

### Step 2: Submit Sitemap

1. In Search Console, go to "Sitemaps" in the left menu
2. Click "Add a new sitemap"
3. Enter: `sitemap.xml`
4. Click "Submit"

### Step 3: Request Indexing

1. Go to "URL Inspection" tool
2. Enter each of your main URLs:
   - https://codemantixcollective.com
   - https://codemantixcollective.com/about
   - https://codemantixcollective.com/services
   - https://codemantixcollective.com/projects
   - https://codemantixcollective.com/team
   - https://codemantixcollective.com/contact
3. Click "Request Indexing" for each URL

## Additional SEO Improvements

### 1. Google Verification Meta Tag

Add this to your layout.js metadata (replace with your actual verification
code):

```javascript
verification: {
  google: "your-verification-code-from-search-console",
}
```

### 2. Schema.org Structured Data ✅ IMPLEMENTED

The following structured data has been added to improve SEO:

#### ✅ **Organization Schema**

- Company name, description, and contact information
- Social media links and founding information
- Areas served and expertise
- Located in: `src/components/seo/StructuredData.jsx`

#### ✅ **Services Schema**

- Detailed catalog of all services offered:
  - **Web Development**: Custom websites, e-commerce, PWAs
  - **UI/UX Design**: User experience, interface design, design systems
  - **Data Analysis**: Business intelligence, visualization, predictive
    analytics
- Service descriptions and provider information

#### ✅ **Website Schema with Search**

- Website information and search functionality
- Enables Google to understand your site structure
- Implements search action for Google's search box feature
- Search URL: `https://codemantixcollective.com/search?q={query}`

#### ✅ **Additional Schemas Available**

- **BreadcrumbSchema**: For navigation breadcrumbs
- **FAQSchema**: For frequently asked questions
- **LocalBusinessSchema**: For physical location (if needed)

#### **Search Functionality**

- Search page created at `/search`
- SearchBox component available for integration
- Structured data tells Google about search capability

### 3. Regular Updates

- Run `npm run sitemap` after adding new pages
- Update lastmod dates in sitemap when content changes
- Monitor Search Console for crawl errors

## Commands for Maintenance

```bash
# Generate sitemap after changes
npm run sitemap

# Build project (required before sitemap generation)
npm run build

# Deploy to update live site
npm run start
```

## Current Configuration

### Pages Included in Sitemap:

- Home (/) - Priority: 1.0, Daily updates
- About (/about) - Priority: 0.8, Monthly updates
- Services (/services) - Priority: 0.9, Weekly updates
- Projects (/projects) - Priority: 0.8, Monthly updates
- Team (/team) - Priority: 0.7, Monthly updates
- Contact (/contact) - Priority: 0.9, Weekly updates

### Blocked from Indexing:

- API routes (/api/\*)
- Admin pages (/admin/\*)
- Next.js internals (/\_next/\*)
- Private directories (/private/\*)

## Next Steps

1. Set up Google Search Console
2. Add verification meta tag
3. Submit sitemap
4. Request indexing for all main pages
5. Monitor crawl status and fix any errors
6. Consider adding Google Analytics for tracking
