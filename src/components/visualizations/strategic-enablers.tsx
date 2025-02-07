'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Lightbulb, Scale, Coins, BookOpen, Megaphone, ChartBar } from 'lucide-react';

const enablers = [
  {
    title: "Political Commitment",
    description: "Leadership support and sustained policy backing",
    Icon: Scale
  },
  {
    title: "Implementation Framework",
    description: "Structured approach to executing strategies",
    Icon: Lightbulb
  },
  {
    title: "Financing & Investment",
    description: "Resource mobilization and funding mechanisms",
    Icon: Coins
  },
  {
    title: "Capacity Development",
    description: "Skills building and knowledge transfer",
    Icon: BookOpen
  },
  {
    title: "Advocacy & Awareness",
    description: "Stakeholder engagement and communication",
    Icon: Megaphone
  },
  {
    title: "Monitoring Framework",
    description: "Progress tracking and impact assessment",
    Icon: ChartBar
  }
];

export function StrategicEnablers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {enablers.map((enabler, index) => (
        <motion.div
          key={enabler.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <enabler.Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{enabler.title}</h3>
                <p className="text-sm text-foreground/70">{enabler.description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}