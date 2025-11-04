import ContactHero from "@/components/sections/ContactHero";
import ContactPage from "@/components/forms/Contactpage";
import { CodematixCTA } from "@/components/ui";

export const metadata = {
  title: "Contact Us - Start Your Digital Transformation Journey",
  description:
    "Get in touch with Codemantix Collective for your next digital project. Expert consultation for web development, UI/UX design, and data analysis services. Let's build something amazing together.",
  keywords: [
    "contact codemantix collective",
    "web development consultation",
    "project inquiry",
    "digital solutions contact",
    "get quote web development",
    "UI/UX design consultation",
    "data analysis services contact",
    "business transformation inquiry",
  ],
  openGraph: {
    title: "Contact Codemantix Collective - Let's Create Together",
    description:
      "Ready to transform your digital presence? Contact our expert team for personalized solutions in web development, design, and data analysis.",
    images: [
      {
        url: "/Images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Codemantix Collective",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Codemantix Collective - Let's Create Together",
    description:
      "Ready to transform your digital presence? Contact our expert team for personalized solutions in web development, design, and data analysis.",
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactPage />
      <CodematixCTA
        title="Let's Build Something Amazing Together"
        description="Your next breakthrough project is just a conversation away. We're excited to hear your ideas!"
        primaryText="Send Another Message"
        primaryHref="/contact"
        secondaryText="View Our Work"
        secondaryHref="/projects"
        variant="gradient"
      />
    </>
  );
}
