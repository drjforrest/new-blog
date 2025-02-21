'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface FeatureSeriesCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  isComingSoon?: boolean;
}

export function FeatureSeriesCard({
  title,
  description,
  href,
  icon: Icon,
  isComingSoon = false,
}: FeatureSeriesCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`
          relative overflow-hidden rounded-xl 
          bg-gradient-to-br from-surface to-surface-elevated
          shadow-lg border border-primary/10
          p-1
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
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
            <div className="p-3 rounded-xl bg-primary/10">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                {isComingSoon && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-medium">
                {isComingSoon ? 'Stay tuned' : 'Read the series'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}