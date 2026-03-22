import Head from "next/head";
import ContactHero from "@/components/contact/Hero";
import ContactPage from "@/components/contact/Form";
import { CodematixCTA } from "@/components/shared/ui";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Start Your Digital Transformation Journey | Codemantix Collective</title>
        <meta
          name="description"
          content="Get in touch with Codemantix Collective for your next digital project. Expert consultation for web development, UI/UX design, and data analysis services. Let's build something amazing together."
        />
        <meta
          name="keywords"
          content="contact codemantix collective, web development consultation, project inquiry, digital solutions contact, get quote web development"
        />
        <meta property="og:title" content="Contact Codemantix Collective - Let's Create Together" />
        <meta
          property="og:description"
          content="Ready to transform your digital presence? Contact our expert team for personalized solutions in web development, design, and data analysis."
        />
        <meta property="og:image" content="/Images/contact-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Codemantix Collective - Let's Create Together" />
        <meta
          name="twitter:description"
          content="Ready to transform your digital presence? Contact our expert team for personalized solutions in web development, design, and data analysis."
        />
        <link rel="canonical" href="https://codemantixcollective.com/contact" />
      </Head>
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
