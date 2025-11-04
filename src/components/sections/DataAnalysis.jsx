"use client";

import {
  FaChartBar, // Data Visualization
  FaDatabase, // Data Management
  FaProjectDiagram, // Data Modeling
  FaSearchDollar, // Data Mining
  FaRobot, // Predictive Analytics
  FaCog, // Automation & Reporting
} from "react-icons/fa";
import ServiceSection from "../cards/ServiceCardSection";

const dataAnalysisServices = [
  {
    icon: <FaChartBar size={32} className="text-white" />,
    title: "Data Visualization",
    description:
      "Transform complex datasets into compelling charts, interactive dashboards, and insightful visual reports that tell your data's story.",
  },
  {
    icon: <FaDatabase size={32} className="text-white" />,
    title: "Data Management",
    description:
      "Organize, clean, and optimize structured and unstructured data with advanced ETL processes and data governance frameworks.",
  },
  {
    icon: <FaProjectDiagram size={32} className="text-white" />,
    title: "Data Modeling",
    description:
      "Design scalable data architectures and implement robust models to support advanced analytics and business intelligence solutions.",
  },
  {
    icon: <FaSearchDollar size={32} className="text-white" />,
    title: "Data Mining",
    description:
      "Extract hidden patterns, correlations, and valuable insights from large datasets using advanced algorithms and statistical methods.",
  },
  {
    icon: <FaRobot size={32} className="text-white" />,
    title: "Predictive Analytics",
    description:
      "Leverage machine learning algorithms and statistical models to forecast trends, predict outcomes, and enable data-driven decisions.",
  },
  {
    icon: <FaCog size={32} className="text-white" />,
    title: "Automation & Reporting",
    description:
      "Automate complex data workflows and generate real-time, actionable reports that drive efficiency and strategic insights.",
  },
];

export default function DataAnalysisSection() {
  return (
    <div className="relative scroll-mt-24" id="data-analysis">
      <ServiceSection
        title="Empowering Decisions Through Data Analysis"
        description="From visualization to predictive analytics, we turn your data into actionable insights that drive growth, efficiency, and strategic decision-making for your business."
        services={dataAnalysisServices}
        variant="dark"
      />
    </div>
  );
}
