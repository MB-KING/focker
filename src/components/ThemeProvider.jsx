"use client";

import { ThemeProvider as NextThemeProvider } from "@/context/ThemeContext";

export default function ThemeProvider({ children }) {
  return (
    <NextThemeProvider>
      {children}
    </NextThemeProvider>
  );
} 