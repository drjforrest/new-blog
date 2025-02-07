'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Briefcase, ShoppingCart, BadgeDollarSign, Sprout } from 'lucide-react';

const impacts = [
  {
    title: "GDP Growth",
    value: "$2.9T",
    description: "Potential value added to African economy by 2030",
    growth: "3%",
    Icon: TrendingUp
  },
  {
    title: "Digital Entrepreneurship",
    description: "Increased funding for ICT startups and innovative solutions",
    metric: "Rising",
    Icon: Briefcase
  },
  {
    title: "Job Creation",
    description: "Net positive job creation through AI adoption",
    metric: "Positive",
    Icon: Users
  },
  {
    title: "E-commerce",
    description: "Digital market integration and economic scaling",
    metric: "Growing",
    Icon: ShoppingCart
  },
  {
    title: "Investment",
    description: "Increased private sector collaboration and funding",
    metric: "Rising",
    Icon: BadgeDollarSign
  },
  {
    title: "Agriculture",
    description: "Digital transformation of farming and food systems",
    metric: "Expanding",
    Icon: Sprout
  }
];

export function EconomicImpact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {impacts.map((impact, index) => (
        <motion.div
          key={impact.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <impact.Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{impact.title}</h3>
                {impact.value && (
                  <div className="text-2xl font-bold text-primary mb-2">
                    {impact.value}
                    {impact.growth && (
                      <span className="text-sm font-normal text-success ml-2">
                        +{impact.growth} annual growth
                      </span>
                    )}
                  </div>
                )}
                <p className="text-sm text-foreground/70">{impact.description}</p>
                {impact.metric && (
                  <div className="mt-2 text-sm font-medium text-success">
                    Trend: {impact.metric}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}