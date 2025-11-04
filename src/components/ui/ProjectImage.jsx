"use client";

import React from "react";
import Image from "next/image";

const ProjectImage = ({ src, alt, project, ...props }) => {
  // Generate a placeholder color based on the project category
  const getPlaceholderColor = (category) => {
    const colors = {
      "UI/UX Design": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "Web Development": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "Mobile App": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "E-Commerce": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "IoT Development": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    };
    return colors[category] || colors["Web Development"];
  };

  const handleImageError = (e) => {
    // Create a canvas element for the placeholder
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 300;

    // Fill with gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#667eea");
    gradient.addColorStop(1, "#764ba2");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(project?.title || "Project Image", canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = "16px Arial";
    ctx.fillText(project?.category || "Demo Project", canvas.width / 2, canvas.height / 2 + 20);

    // Convert canvas to data URL and set as image source
    e.target.src = canvas.toDataURL();
  };

  // If src starts with https://images.unsplash.com, it's already a good placeholder
  if (src && src.includes("unsplash.com")) {
    return <Image src={src} alt={alt} onError={handleImageError} {...props} />;
  }

  // For local images, keep original behavior but add error handling
  return (
    <Image
      src={
        src ||
        `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format`
      }
      alt={alt}
      onError={handleImageError}
      {...props}
    />
  );
};

export default ProjectImage;
