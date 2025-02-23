'use client';

import { motion } from "framer-motion";
import { LineChart, PenTool, Globe, BookOpen, ChartBar, Presentation, FileText } from 'lucide-react';
import Link from 'next/link';

interface IconFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

function IconFeature({ 
  icon: Icon,
  title,
  description,
  href,
}: IconFeatureProps) {
  const isExternal = href.startsWith('http');
  
  return (
    <Link 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <motion.div 
        className="bg-surface dark:bg-surface-elevated rounded-lg shadow-lg w-[320px] h-[240px] cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="p-8 flex flex-col items-center text-center h-full">
          <div className="p-3 rounded-xl bg-primary/5 mb-4">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-medium text-foreground mb-2">{title}</h3>
          <p className="text-sm text-foreground/70">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export function Hero() {
  const externalLinks = {
    standardBlog: "https://more-blog.drjforrest.com",
    presentations: "https://more-blog.drjforrest.com/presentations"
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-24">
      
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Icons */}
          {/* Hero Icons */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4 bg-primary/10 rounded-2xl">
              <LineChart className="w-10 h-10 text-primary" />
            </div>
            <div className="p-4 bg-[#E63946]/10 rounded-2xl">
              <PenTool className="w-10 h-10 text-[#E63946]" />
            </div>
            <div className="p-4 bg-success/10 rounded-2xl">
              <Globe className="w-10 h-10 text-success" />
            </div>
          </motion.div>

        {/* Hero Text */}
        <div className="w-full mx-auto px-8 flex flex-col items-center relative">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#26385C] text-6xl font-bold mb-6"
            >
              Tech Tabs on Global Health
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-foreground/90 text-3xl font-medium mb-8"
            >
              Keeping Tabs on Technology and Innovation in Global Health & Development
            </motion.h2>
          </div>

          {/* Call to Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-8 justify-center"
          >
            <IconFeature
              icon={FileText}
              title="Standard Blog Posts"
              description="Short musings on technology and innovation in global health"
              href={externalLinks.standardBlog}
            />
            <IconFeature
              icon={LineChart}
              title="Featured Series"
              description="In-depth analysis of African Digital Development"
              href="/african-digital-development"
            />
            <IconFeature
              icon={Presentation}
              title="Marp Presentations"
              description="Collection of presentations on global health tech"
              href={externalLinks.presentations}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}