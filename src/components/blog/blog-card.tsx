'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, MotionCard } from '@/components/ui/card';
import { Clock, BookOpen, Calendar } from 'lucide-react';

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
        className="h-full overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10 
                   hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -4 }}
      >
        <div className="p-8">
          {category && (
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {category}
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
            
            <p className="text-foreground/70 line-clamp-3 leading-relaxed">
              {description}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Calendar className="w-4 h-4" />
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              
              {readingTime && (
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime}</span>
                </div>
              )}
            </div>

            {featured && (
              <div className="flex items-center gap-2 pt-2">
                <div className="p-2 rounded-lg bg-primary/5">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">
                  Featured Post
                </span>
              </div>
            )}
          </div>
        </div>

        {imageSrc && (
          <div className="aspect-[2/1] relative mt-4">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </MotionCard>
    </Link>
  );
}