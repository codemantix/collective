// components/Button.jsx - Updated with Codemantix Brand Colors
"use client";

import clsx from "clsx";

const Button = ({ text, outline = false, variant = "primary", className }) => {
  const getVariantClasses = () => {
    if (outline) {
      return "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300";
    }

    switch (variant) {
      case "primary":
        return "bg-primary-800 hover:bg-primary-900 text-white shadow-lg hover:shadow-xl";
      case "accent":
        return "bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl";
      case "secondary":
        return "bg-secondary-500 hover:bg-secondary-600 text-white shadow-lg hover:shadow-xl";
      case "gradient":
        return "bg-gradient-to-r from-primary-800 to-accent-500 hover:from-primary-900 hover:to-accent-600 text-white shadow-lg hover:shadow-xl";
      default:
        return "bg-primary-800 hover:bg-primary-900 text-white shadow-lg hover:shadow-xl";
    }
  };

  return (
    <button
      className={clsx(
        "inline-flex transform items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2",
        getVariantClasses(),
        variant === "primary" && "focus:ring-primary-500",
        variant === "accent" && "focus:ring-accent-500",
        variant === "secondary" && "focus:ring-secondary-500",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
