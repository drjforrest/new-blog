'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { themeTokens } from '@/theme/tokens';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      value={{
        light: themeTokens.light,
        dark: themeTokens.dark,
      }}
    >
      {children}
    </NextThemeProvider>
  );
}