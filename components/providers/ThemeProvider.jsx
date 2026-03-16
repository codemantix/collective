"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }) {
  useEffect(() => {
    // Set Codemantix brand CSS custom properties for consistent theming
    const setCodematixTheme = () => {
      const root = document.documentElement;

      // Codemantix brand colors
      root.style.setProperty("--codemantix-primary", "#1e3a8a");
      root.style.setProperty("--codemantix-accent", "#10b981");
      root.style.setProperty("--codemantix-secondary", "#f97316");
      root.style.setProperty("--codemantix-light", "#ffffff");

      // Enhanced gradient combinations
      root.style.setProperty(
        "--codemantix-gradient-primary",
        "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"
      );
      root.style.setProperty(
        "--codemantix-gradient-accent",
        "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      );
      root.style.setProperty(
        "--codemantix-gradient-secondary",
        "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
      );
      root.style.setProperty(
        "--codemantix-gradient-hero",
        "linear-gradient(135deg, #1e3a8a 0%, #10b981 50%, #f97316 100%)"
      );
    };

    setCodematixTheme();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
