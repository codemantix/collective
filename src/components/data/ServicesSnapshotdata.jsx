import { Code, Layout, BarChart } from "lucide-react";
export const services = [
  {
    name: "Web Development",
    description:
      "We build scalable, fast, and responsive websites tailored to your business needs ,from startups to enterprise solutions.",
    icon: <Code className="w-10 h-10 text-[#1E3A8A]" />,
    href: "/Services#web-development",
  },
  {
    name: "UI/UX Design",
    description:
      "Crafting user-centered interfaces that blend creativity with usability, ensuring seamless experiences for your customers.",
    icon: <Layout className="w-10 h-10 text-[#10B981]" />,
    href: "/Services#ui-ux",
  },
  {
    name: "Data Analysis",
    description:
      "Transform raw data into insights. Our solutions empower smarter business decisions through analytics and visualization.",
    icon: <BarChart className="w-10 h-10 text-[#F97316]" />,
    href: "/Services#data-analysis",
  },
];
