'use client';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { ReactNode, Suspense } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>{children}</ThemeProvider>
    </Suspense>
  );
}