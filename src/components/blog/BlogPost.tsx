'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  description?: string;
  content: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  description,
  content
}: BlogPostLayoutProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.article 
      initial="initial"
      animate="animate"
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </Link>
      </motion.div>
      
      <header className="mb-8 border-b border-foreground/10 pb-8">
        <motion.h1 
          {...fadeInUp} 
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-foreground"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-xl text-foreground/70 mb-4"
          >
            {description}
          </motion.p>
        )}
        
        <motion.time 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-foreground/60"
          dateTime={date}
        >
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </motion.time>
      </header>

      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.5 }}
        className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:text-foreground
          prose-p:text-foreground/90
          prose-a:text-primary hover:prose-a:text-primary/80
          prose-strong:text-foreground
          prose-code:text-foreground
          prose-blockquote:text-foreground/80
          prose-blockquote:border-primary
          prose-figcaption:text-foreground/70
          prose-hr:border-foreground/20
          prose-img:rounded-lg prose-img:shadow-md
          prose-pre:bg-foreground/5
          prose-th:text-foreground prose-td:text-foreground/90
          prose-li:text-foreground/90
        "
      >
        {content}
      </motion.div>
    </motion.article>
  );
}