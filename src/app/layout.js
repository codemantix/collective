import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ProfessionalNavbar from "../components/layout/ProfessionalNavbar.jsx";
import ProfessionalFooter from "../components/layout/ProfessionalFooter.jsx";
import { ThemeProvider } from "../components/providers/ThemeProvider.jsx";
import { ScrollToTop } from "../components/ui";
import {
  OrganizationSchema,
  WebsiteSchema,
  ServicesSchema,
} from "../components/seo/StructuredData.jsx";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Extended weight range
  variable: "--font-inter",
  display: "swap", // Better font loading
});

export const metadata = {
  title: {
    default: "Codemantix Collective - Digital Innovation & Technology Solutions",
    template: "%s | Codemantix Collective",
  },
  description:
    "Leading digital innovation company specializing in web development, UI/UX design, and data analysis. Transform your business with cutting-edge technology solutions.",
  keywords: [
    "web development",
    "UI/UX design",
    "data analysis",
    "digital solutions",
    "technology consulting",
    "responsive design",
    "modern web applications",
  ],
  authors: [{ name: "Codemantix Collective" }],
  creator: "Codemantix Collective",
  publisher: "Codemantix Collective",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://codemantixcollective.com"),
  openGraph: {
    title: "Codemantix Collective - Digital Innovation & Technology Solutions",
    description:
      "Leading digital innovation company specializing in web development, UI/UX design, and data analysis.",
    url: "https://codemantixcollective.com",
    siteName: "Codemantix Collective",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Codemantix Collective",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codemantix Collective - Digital Innovation & Technology Solutions",
    description:
      "Leading digital innovation company specializing in web development, UI/UX design, and data analysis.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "KuU1paDyoNySsri82WGYzOqC2eMIDAdh1l6ruvBQhzs",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon - Modern Implementation */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="48x48" href="/favicon.ico" />

        {/* Apple Touch Icon - Using logo.png for better quality on Apple devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/codelogo.png" />

        {/* Android/Chrome Icons - Using LogoF.png */}
        <link rel="icon" type="image/png" sizes="192x192" href="/LogoF.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/LogoF.png" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/LogoF.png" />
        <meta name="msapplication-TileColor" content="#1E3A8A" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#1E3A8A" />
      </head>
      <body suppressHydrationWarning={true} className="antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <ProfessionalNavbar />
            <main className="flex-1">{children}</main>
            <ProfessionalFooter />
          </div>
          <ScrollToTop />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--color-bg)",
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
              },
            }}
          />
          <Analytics />
          <SpeedInsights />

          {/* Structured Data */}
          <OrganizationSchema />
          <WebsiteSchema />
          <ServicesSchema />
        </ThemeProvider>
      </body>
    </html>
  );
}
