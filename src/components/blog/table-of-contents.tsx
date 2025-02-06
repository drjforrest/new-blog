'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Get all h2 and h3 elements from the article
    const elements = Array.from(document.querySelectorAll('article h2, article h3'))
      .map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: element.tagName === 'H2' ? 2 : 3,
      }));
    
    setHeadings(elements);

    // Set up intersection observer
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0% -35% 0%',
    });

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden xl:block sticky top-24 self-start ml-8 w-64"
      aria-label="Table of contents"
    >
      <h2 className="text-sm font-semibold text-foreground mb-4">
        Table of Contents
      </h2>
      <ul className="space-y-2 text-sm">
        {headings.map(({ id, text, level }) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginLeft: `${(level - 2) * 16}px` }}
          >
            <a
              href={`#${id}`}
              className={`block py-1 transition-colors duration-200 ${
                activeId === id
                  ? 'text-primary font-medium'
                  : 'text-foreground/70 hover:text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {text}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}