"use client";

import {
  FaDraftingCompass,
  FaPaintBrush,
  FaUsers,
  FaMobileAlt,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import ServiceSection from "../cards/ServiceCardSection";

const uxUiServices = [
  {
    icon: <FaDraftingCompass size={32} className="text-white" />,
    title: "Wireframing & Prototyping",
    description:
      "Create interactive wireframes and high-fidelity prototypes to visualize user flows and validate interface concepts before development.",
  },
  {
    icon: <FaPaintBrush size={32} className="text-white" />,
    title: "UI Design",
    description:
      "Design visually stunning, user-friendly interfaces that align with your brand identity and create memorable user experiences.",
  },
  {
    icon: <FaUsers size={32} className="text-white" />,
    title: "User Research & Testing",
    description:
      "Conduct comprehensive user research, A/B testing, and usability studies to understand your audience and optimize experiences.",
  },
  {
    icon: <FaMobileAlt size={32} className="text-white" />,
    title: "Responsive & Mobile Design",
    description:
      "Design adaptive interfaces that deliver exceptional experiences across all devices, from smartphones to large displays.",
  },
  {
    icon: <FaChartLine size={32} className="text-white" />,
    title: "UX Strategy & Analysis",
    description:
      "Analyze user behavior patterns, create detailed customer journeys, and develop data-driven strategies for optimal engagement.",
  },
  {
    icon: <FaCogs size={32} className="text-white" />,
    title: "Interaction Design",
    description:
      "Design intuitive micro-interactions and smooth animations that enhance usability and create delightful user experiences.",
  },
];

export default function UxUiSection() {
  return (
    <div className="relative scroll-mt-24" id="ui-ux">
      <ServiceSection
        title="Creating Exceptional UX & UI Experiences"
        description="From wireframes to fully polished interfaces, we craft user experiences that are intuitive, engaging, and visually stunning, ensuring every interaction delights your users."
        services={uxUiServices}
        variant="gradient"
      />
    </div>
  );
}
