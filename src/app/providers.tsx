'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, Suspense } from 'react';

function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </Suspense>
  );
}