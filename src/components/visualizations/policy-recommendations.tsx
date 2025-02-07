'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const recommendations = [
  {
    category: "Strategy Development",
    items: [
      "Develop national and regional digital transformation strategies",
      "Establish common digitalization agenda",
      "Create comprehensive digital governance frameworks"
    ]
  },
  {
    category: "Policy Harmonization",
    items: [
      "Harmonize legislation and regulations",
      "Implement collaborative ICT measures",
      "Promote intra-African digital trade integration"
    ]
  },
  {
    category: "Emerging Technologies",
    items: [
      "Develop AI-specific policies",
      "Address spectrum issues and 5G strategy",
      "Regulate IoT devices and new technologies"
    ]
  },
  {
    category: "Implementation & Monitoring",
    items: [
      "Develop evaluation frameworks",
      "Track performance indicators",
      "Measure strategy impact"
    ]
  }
];

export function PolicyRecommendations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recommendations.map((rec, index) => (
        <motion.div
          key={rec.category}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-primary">{rec.category}</h3>
            </div>
            <ul className="space-y-3">
              {rec.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}