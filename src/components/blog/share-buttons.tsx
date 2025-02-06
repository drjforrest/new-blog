'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'text-[#1DA1F2]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: 'text-[#0A66C2]',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You might want to add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4 sticky top-24"
    >
      <span className="text-sm font-medium text-foreground/70">Share</span>
      <div className="flex flex-col gap-2">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors ${link.color}`}
              title={`Share on ${link.name}`}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
          className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-primary"
          title="Copy link to clipboard"
        >
          <LinkIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}