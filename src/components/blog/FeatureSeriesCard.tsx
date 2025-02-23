'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface FeatureSeriesCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  isComingSoon?: boolean;
  isCurrent?: boolean;
  variant?: 'primary' | 'secondary';
}

export function FeatureSeriesCard({
  title,
  description,
  href,
  icon: Icon,
  isComingSoon = false,
  isCurrent = false,
  variant = 'primary',
}: FeatureSeriesCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`
          relative overflow-hidden rounded-xl 
          ${variant === 'primary' 
            ? 'bg-gradient-to-br from-surface to-surface-elevated border-primary/10'
            : 'bg-surface/50 border-border/50'
          }
          ${isCurrent ? 'border-2 border-primary' : 'border'}
          shadow-lg
          p-1
        `}
      >
        <div className={`
          absolute inset-0 bg-gradient-to-br 
          ${variant === 'primary' 
            ? 'from-primary/5 to-transparent'
            : 'from-muted/5 to-transparent'
          }
        `} />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 opacity-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Icon size={256} />
        </motion.div>

        <div className="relative p-8">
          <div className="flex items-start gap-6">
            <div className={`
              p-3 rounded-xl 
              ${variant === 'primary' 
                ? 'bg-primary/10'
                : 'bg-muted/10'
              }
            `}>
              <Icon className={`
                w-8 h-8 
                ${variant === 'primary' 
                  ? 'text-primary'
                  : 'text-muted'
                }
              `} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                {isComingSoon && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                )}
                {isCurrent && (
                  <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                    Current Series
                  </span>
                )}
              </div>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-medium">
                {isComingSoon ? 'Stay tuned' : 'Read the series'}
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}