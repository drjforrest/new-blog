'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-lg border border-foreground/10 bg-background shadow-sm transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'hover:border-primary/20',
        interactive: 'hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 cursor-pointer hover:border-primary/30',
      },
      padding: {
        default: 'p-6',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
);

// ✅ Fix: Explicitly set `children` to be strictly ReactNode
interface CardProps extends HTMLMotionProps<'div'>, VariantProps<typeof cardVariants> {
  asChild?: boolean;
  children: React.ReactNode; // ✅ Enforce ReactNode to prevent MotionValue<number> issues
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot className={cardVariants({ variant, padding, className })}>
          {children}
        </Slot>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={cardVariants({ variant, padding, className })}
        whileHover={variant === 'interactive' ? { scale: 1.02, y: -2 } : {}}
        {...props}
      >
        {children} {/* ✅ Ensure children is strictly ReactNode */}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Subcomponents
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={`p-6 ${className}`} {...props} />
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight text-primary ${className}`} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={`text-sm text-foreground/70 ${className}`} {...props} />
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={`flex items-center p-6 pt-0 ${className}`} {...props} />
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };