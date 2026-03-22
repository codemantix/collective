"use client";

import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ text, outline = false, variant = "primary", className }) => {
  const getVariantClasses = () => {
    if (outline) return "btn-ghost";
    switch (variant) {
      case "accent":
      case "orange":
        return "btn-orange";
      case "secondary":
        return "btn-secondary";
      case "ghost":
        return "btn-ghost";
      default:
        return "btn-primary";
    }
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center focus:outline-none",
        getVariantClasses(),
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
