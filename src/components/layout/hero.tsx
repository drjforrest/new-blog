'use client';

import { motion } from 'framer-motion';
import { LineChart, PenTool, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Blog background pattern */}
      <div 
        className="fixed inset-0 bg-[url('/patterns/topography.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto">
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
            <div className="p-4 bg-accent/10 rounded-2xl">
              <PenTool className="w-10 h-10 text-accent" />
            </div>
            <div className="p-4 bg-success/10 rounded-2xl">
              <Globe className="w-10 h-10 text-success" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              African Digital Development
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover the growth of a continent through engaging data visualization and
              compelling stories of 21st century solutions to decades-long challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}