'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const gridVariants = cva(
  'grid gap-4 w-full',
  {
    variants: {
      cols: {
        '1': 'grid-cols-1',
        '2': 'grid-cols-1 md:grid-cols-2',
        '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        'auto': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
      },
      gap: {
        '2': 'gap-2',
        '4': 'gap-4',
        '6': 'gap-6',
        '8': 'gap-8',
      },
      padding: {
        none: '',
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
      },
    },
    defaultVariants: {
      cols: '3',
      gap: '4',
      padding: 'none',
    },
  }
);

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  children: React.ReactNode;
}

export function Grid({ 
  className, 
  cols, 
  gap,
  padding,
  children,
  ...props 
}: GridProps) {
  return (
    <div 
      className={gridVariants({ cols, gap, padding, className })}
      {...props}
    >
      {children}
    </div>
  );
}

// Container component for consistent max-width and padding
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      {...props}
    />
  );
}