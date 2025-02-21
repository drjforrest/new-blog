'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';
import { blogTheme } from '@/styles/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Set CSS variables based on theme
  useEffect(() => {
    // Set light mode variables
    const root = document.documentElement;
    Object.entries(blogTheme.colors.light).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Dark mode variables will be handled by CSS with [data-theme='dark']
  }, []);

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}