'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const frameworks = [
  {
    title: "Digital Transformation Strategy",
    description: "Transform societies and economies through digital innovation",
    key_points: [
      "Inclusive economic growth",
      "Job creation",
      "Poverty eradication",
      "Digital integration"
    ]
  },
  {
    title: "Agenda 2063",
    description: "50-year vision for 'The Africa We Want'",
    key_points: [
      "Information society",
      "Integrated e-economy",
      "Universal ICT access",
      "Global competitiveness"
    ]
  },
  {
    title: "STISA-2024",
    description: "Science, Technology, and Innovation Strategy",
    key_points: [
      "Innovation-led economy",
      "Knowledge-based development",
      "Scientific advancement",
      "Technological growth"
    ]
  }
];

export function StrategyFramework() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {frameworks.map((framework, index) => (
        <motion.div
          key={framework.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Card className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-primary">{framework.title}</h3>
            <p className="text-foreground/70 mb-4">{framework.description}</p>
            <ul className="mt-auto space-y-2">
              {framework.key_points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}