'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
      <Card 
        variant={featured ? "elevated" : "default"}
        className="h-full overflow-hidden"
        interactive
        motionProps={{
          whileHover: { scale: 1.02 },
          transition: { duration: 0.2 }
        }}
      >
        {imageSrc && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {category && (
              <motion.div 
                className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-sm font-medium text-primary">{category}</span>
              </motion.div>
            )}
          </div>
        )}
        
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <time dateTime={date}>{date}</time>
            {readingTime && (
              <>
                <span>•</span>
                <span>{readingTime}</span>
              </>
            )}
          </div>
          <CardTitle className="group-hover:text-accent transition-colors">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center text-primary">
            <span className="text-sm group-hover:underline">Read more</span>
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 8h14M8 1l7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}