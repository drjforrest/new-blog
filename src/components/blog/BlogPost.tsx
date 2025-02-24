'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  readingTime?: string;
  category?: string;
  description?: string;
  content: React.ReactNode;
  bannerImage?: string;
}

export default function BlogPostLayout({
  title,
  date,
  readingTime,
  category,
  description,
  content,
  bannerImage
}: BlogPostLayoutProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.article 
        {...pageTransition}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
      >
        {/* Banner Image */}
        {bannerImage && (
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.1 }}
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-8 rounded-xl overflow-hidden"
          >
            <Image
              src={bannerImage}
              alt={`Banner image for ${title}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8 
                    px-4 py-2 rounded-lg hover:bg-primary/5 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </Link>
      </motion.div>
      
      {/* Post Header */}
      <motion.div 
        {...fadeInUp} 
        transition={{ delay: 0.2 }}
      >
        <Card className="p-8 mb-8 bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10">
          <header className="space-y-6">
            {category && (
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4" />
                    {category}
                  </div>
                </div>
              </div>
            )}

            <h1 className="text-4xl font-bold text-primary">
              {title}
            </h1>
            
            {description && (
              <p className="text-xl leading-relaxed text-foreground/70">
                {description}
              </p>
            )}
            
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-foreground/60">
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
                <div className="flex items-center gap-2 text-foreground/60">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime}</span>
                </div>
              )}
            </div>
          </header>
        </Card>
      </motion.div>

      {/* Post Content */}
      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10">
          <div className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:text-primary prose-headings:font-bold
            prose-p:text-foreground/90 prose-p:leading-relaxed
            prose-a:text-primary hover:prose-a:text-primary/80
            prose-strong:text-foreground/90 prose-strong:font-semibold
            prose-code:text-foreground/90 prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:text-foreground/80 prose-blockquote:border-primary/40 prose-blockquote:bg-primary/5
            prose-figcaption:text-foreground/70
            prose-hr:border-primary/10
            prose-img:rounded-lg prose-img:shadow-lg
            prose-pre:bg-primary/5 prose-pre:border prose-pre:border-primary/10
            prose-th:text-foreground prose-td:text-foreground/90
            prose-li:text-foreground/90 prose-li:marker:text-primary/60
          "
          >
            {content}
          </div>
        </Card>
      </motion.div>
      </motion.article>
    </AnimatePresence>
  );
}
