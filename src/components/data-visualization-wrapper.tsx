'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronDown, ChevronUp, Circle } from 'lucide-react';

interface DataVisualizationWrapperProps {
  title: string;
  description: string;
  insights: string[];
  children: React.ReactNode;
}

export default function DataVisualizationWrapper({
  title,
  description,
  insights,
  children
}: DataVisualizationWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-2xl border border-foreground/10 shadow-lg overflow-hidden hover:border-primary/20 transition-colors duration-300"
    >
      {/* Header */}
      <div className="p-6 border-b border-foreground/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <motion.h4 
              className="text-xl font-semibold text-foreground mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h4>
            <motion.p 
              className="text-foreground/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-foreground/5 rounded-lg transition-colors flex-shrink-0"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-foreground/60" />
            ) : (
              <ChevronDown className="w-5 h-5 text-foreground/60" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Visualization */}
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative aspect-[16/9] w-full">
          {children}
        </div>
      </motion.div>

      {/* Insights Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-foreground/10 overflow-hidden bg-foreground/[0.02]"
          >
            <div className="p-6">
              <motion.h5 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2"
              >
                <Info className="w-4 h-4 text-primary" />
                Key Insights
              </motion.h5>
              <ul className="space-y-3">
                {insights.map((insight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-foreground/80 hover:text-foreground transition-colors duration-200"
                  >
                    <Circle className="w-2 h-2 mt-2 flex-shrink-0 fill-current text-primary" />
                    <span>{insight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}