'use client';

import { motion } from "framer-motion";
import { BookOpen, ChartBar, Presentation } from 'lucide-react';
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
  return (
    <Link href={href}>
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
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-24">
      
      {/* Hero Background Ring */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[720px] h-[720px] border-[1.5px] 
                  border-[#2A9D8F]/10 rounded-full z-[-1]"
        style={{
          background: 'radial-gradient(circle, transparent 40%, rgba(42, 157, 143, 0.015) 80%)'
        }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Icons */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 bg-[#26385C]/10 rounded-2xl">
            <BookOpen className="w-10 h-10 text-[#26385C]" />
          </div>
          <div className="p-4 bg-[#E63946]/10 rounded-2xl">
            <ChartBar className="w-10 h-10 text-[#E63946]" />
          </div>
          <div className="p-4 bg-[#2A9D8F]/10 rounded-2xl">
            <Presentation className="w-10 h-10 text-[#2A9D8F]" />
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
              Tech Tabs
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-foreground/90 text-3xl font-medium mb-8"
            >
              Keeping Tabs on Technology and Global Health & Development
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
              icon={BookOpen}
              title="Latest Blog Posts"
              description="Regular updates and insights on technology and global health developments"
              href="#latest-articles"
            />
            <IconFeature
              icon={ChartBar}
              title="Research Narratives"
              description="In-depth, data-driven analysis of key topics in digital health transformation"
              href="#feature-series"
            />
            <IconFeature
              icon={Presentation}
              title="Presentations & MARPs"
              description="Method and Results Presentations (MARPs) with interactive visualizations"
              href="#presentations"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}