'use client';

import { motion } from 'framer-motion';
import { LineChart, PenTool, Globe, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-8">
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Hero Content */}
          <div className="text-center">
            {/* Hero Icons */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 bg-primary/10 rounded-2xl">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <div className="p-4 bg-[#E63946]/10 rounded-2xl">
                <PenTool className="w-8 h-8 text-[#E63946]" />
              </div>
              <div className="p-4 bg-success/10 rounded-2xl">
                <Globe className="w-8 h-8 text-success" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tech Tabs
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                A blog that keeps tabs on technology and innovation in global health & development.
              </p>
            </motion.div>
          </div>

          {/* Featured Series Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/african-digital-development">
              <Card className="p-6 bg-surface border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-semibold text-foreground">Current Feature Series</h2>
                      <span className="px-2 py-0.5 bg-success/10 text-success rounded-full text-sm">
                        New
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      African Digital Development in Data
                    </h3>
                    <p className="text-base text-foreground/70 mb-4 line-clamp-2">
                      Explore Africa's digital transformation journey through data visualization and analysis. 
                      Discover how technology is reshaping the continent's future.
                    </p>
                    <span 
                      className="inline-flex items-center gap-2 text-primary group-hover:text-accent transition-colors font-medium"
                    >
                      Read the series
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}