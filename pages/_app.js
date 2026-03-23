import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import ProfessionalNavbar from "@/components/shared/layout/Navbar";
import ProfessionalFooter from "@/components/shared/layout/Footer";
import ScrollToTop from "@/components/shared/ui/ScrollToTop";
import {
  OrganizationSchema,
  WebsiteSchema,
  ServicesSchema,
} from "@/components/shared/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.variable}>
      <OrganizationSchema />
      <WebsiteSchema />
      <ServicesSchema />
      <ProfessionalNavbar />
      <main>
        <Component {...pageProps} />
      </main>
      <ProfessionalFooter />
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
          },
        }}
      />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
