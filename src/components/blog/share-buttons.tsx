'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { Card } from '../ui/card';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bgColor: 'bg-[#1DA1F2]',
      hoverBg: 'hover:bg-[#1a8cd8]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      bgColor: 'bg-[#0A66C2]',
      hoverBg: 'hover:bg-[#094d92]',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-24"
    >
      <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-medium text-primary">Share This Post</span>
          
          <div className="flex flex-col gap-3 w-full">
            {shareLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 p-2 rounded-lg ${link.bgColor} ${link.hoverBg} 
                            text-white transition-all duration-300 shadow-sm hover:shadow-md`}
                  title={`Share on ${link.name}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.name}</span>
                </motion.a>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/15 
                       text-primary transition-all duration-300"
              title="Copy link to clipboard"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Copied!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="link"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <LinkIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Copy Link</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}