"use client";

import { FaLaptop, FaRocket, FaPalette, FaShoppingCart, FaBlog, FaServer } from "react-icons/fa";
import ServiceSection from "@/components/cards/ServiceCardSection";

const webServices = [
  {
    icon: <FaLaptop size={32} className="text-white" />,
    title: "Business Websites",
    description:
      "Fully customized corporate websites to showcase your brand and services professionally with modern design and performance optimization.",
  },
  {
    icon: <FaRocket size={32} className="text-white" />,
    title: "Landing Pages",
    description:
      "High-converting single-page websites optimized for lead capture, product promotion, and marketing campaigns.",
  },
  {
    icon: <FaPalette size={32} className="text-white" />,
    title: "Portfolio Websites",
    description:
      "Stunning portfolios to highlight your projects and achievements with interactive galleries and smooth animations.",
  },
  {
    icon: <FaShoppingCart size={32} className="text-white" />,
    title: "E-Commerce Platforms",
    description:
      "Secure online stores with payment integration, inventory management, and seamless shopping experiences.",
  },
  {
    icon: <FaBlog size={32} className="text-white" />,
    title: "Blogs & Content Sites",
    description:
      "SEO-optimized content platforms with CMS integration to engage audiences and boost organic traffic.",
  },
  {
    icon: <FaServer size={32} className="text-white" />,
    title: "SaaS & Web Applications",
    description:
      "Custom software solutions and web applications to streamline operations and scale your business.",
  },
];

export default function WebDevelopmentSection() {
  return (
    <div className="relative scroll-mt-24" id="web-development">
      <ServiceSection
        title="Building World-Class Web Experiences"
        description="From corporate websites to advanced web applications, we deliver solutions tailored to your brand, optimized for performance, and crafted to impress your audience across all devices and platforms."
        services={webServices}
        variant="default"
      />
    </div>
  );
}
