'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, MotionCard } from '@/components/ui/card';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  category?: string;
  imageSrc?: string;
  slug: string;
  featured?: boolean;
}

export function BlogCard({
  title,
  description,
  date,
  readingTime,
  category,
  imageSrc,
  slug,
  featured = false,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <MotionCard 
        variant="interactive"
        className="h-full overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-3 text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
            {description}
          </p>
          <div className="mt-4 flex items-center text-sm text-foreground/60">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {readingTime && (
              <>
                <span>•</span>
                <span>{readingTime}</span>
              </>
            )}
          </div>
        </div>
      </MotionCard>
    </Link>
  );
}