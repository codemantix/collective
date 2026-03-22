"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect } from "react";

// Inner component — must live inside NextThemesProvider to use useTheme
function ThemeVarInjector() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const isDark = resolvedTheme === "dark";

    // Immutable brand tokens
    root.style.setProperty("--codemantix-primary", "#1e3a8a");
    root.style.setProperty("--codemantix-orange", "#f97316");
    root.style.setProperty("--codemantix-blue-edge", "#0e1f4a");

    // Surface tokens — sync to active theme (CSS [data-theme] selectors handle
    // the heavy lifting; these vars are for JS-driven inline styles)
    if (isDark) {
      root.style.setProperty("--codemantix-surface", "#0d1a3e");
      root.style.setProperty("--codemantix-surface-raised", "#111f48");
      root.style.setProperty("--codemantix-text", "#c8d4f0");
      root.style.setProperty("--codemantix-text-muted", "#6b7fa0");
    } else {
      root.style.setProperty("--codemantix-surface", "#edf0f7");
      root.style.setProperty("--codemantix-surface-raised", "#f5f7fc");
      root.style.setProperty("--codemantix-text", "#0a0f2e");
      root.style.setProperty("--codemantix-text-muted", "#475569");
    }
  }, [resolvedTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <ThemeVarInjector />
      {children}
    </NextThemesProvider>
  );
}
