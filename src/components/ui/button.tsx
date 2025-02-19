'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// ✅ Fix: Explicitly set `children` to be strictly ReactNode
interface ButtonProps extends HTMLMotionProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: React.ReactNode; // ✅ Enforce ReactNode to prevent MotionValue<number> issues
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot className={buttonVariants({ variant, size, className })}>
          {children}
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        {children} {/* ✅ Ensure children is strictly ReactNode */}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };