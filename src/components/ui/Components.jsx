"use client";

import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Button component with variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl",
        secondary:
          "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400",
        ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Button = ({ className, variant, size, children, animate = true, ...props }) => {
  const ButtonComponent = animate ? motion.button : "button";

  const motionProps = animate
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }
    : {};

  return (
    <ButtonComponent
      className={cn(buttonVariants({ variant, size, className }))}
      {...motionProps}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

// Card component
const Card = ({ children, className = "", hover = true, glass = false, ...props }) => {
  const baseClasses = glass
    ? "bg-white/10 backdrop-blur-md border border-white/20"
    : "bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700";

  const hoverClasses = hover
    ? "hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    : "";

  return (
    <motion.div
      className={cn("rounded-2xl p-6 shadow-lg", baseClasses, hoverClasses, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Section container
const Section = ({ children, className = "", background = "white", ...props }) => {
  const backgroundClasses = {
    white: "bg-white dark:bg-slate-900",
    gray: "bg-gray-50 dark:bg-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-800",
  };

  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", backgroundClasses[background], className)}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

// Container component
const Container = ({ children, size = "default", className = "", ...props }) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
};

// Badge component
const Badge = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    secondary: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    success: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
    error: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
    outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

// Input component
const Input = ({ className = "", error = false, ...props }) => {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-base transition-colors",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-gray-500 dark:placeholder:text-gray-400",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:bg-slate-800 dark:text-white",
        error
          ? "border-red-500 focus-visible:ring-red-500"
          : "border-gray-300 dark:border-gray-600",
        className
      )}
      {...props}
    />
  );
};

// Textarea component
const Textarea = ({ className = "", error = false, ...props }) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border bg-white px-4 py-3 text-base transition-colors",
        "placeholder:text-gray-500 dark:placeholder:text-gray-400",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-none dark:bg-slate-800 dark:text-white",
        error
          ? "border-red-500 focus-visible:ring-red-500"
          : "border-gray-300 dark:border-gray-600",
        className
      )}
      {...props}
    />
  );
};

export { Button, Card, Section, Container, Badge, Input, Textarea, buttonVariants };
