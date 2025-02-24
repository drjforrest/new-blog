'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Lightbulb,
  Scale,
  BookOpen,
  Network,
  ShieldCheck,
  Users
} from 'lucide-react';

const strategies = [
  {
    title: "Homegrown Solutions",
    icon: Lightbulb,
    description: "Developing 'AI for Africa by Africa'",
    actions: [
      "Local talent development",
      "Innovation promotion",
      "Context-specific solutions",
      "Knowledge retention"
    ]
  },
  {
    title: "Policy Framework",
    icon: Scale,
    description: "Establishing regulatory safeguards",
    actions: [
      "Digital transformation strategies",
      "Policy harmonization",
      "Legislative measures",
      "Regional coordination"
    ]
  },
  {
    title: "Capacity Building",
    icon: BookOpen,
    description: "Strengthening local expertise",
    actions: [
      "Policymaker training",
      "Technical education",
      "Public awareness",
      "Skills development"
    ]
  },
  {
    title: "Infrastructure",
    icon: Network,
    description: "Building robust digital foundations",
    actions: [
      "Data center development",
      "Connectivity expansion",
      "System redundancy",
      "Regional integration"
    ]
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description: "Protecting digital assets",
    actions: [
      "Security frameworks",
      "Threat monitoring",
      "Incident response",
      "System resilience"
    ]
  },
  {
    title: "Digital Identity",
    icon: Users,
    description: "Ensuring secure, inclusive systems",
    actions: [
      "Privacy protection",
      "Data ownership",
      "Universal access",
      "Standard compliance"
    ]
  }
];

function MitigationStrategies() {
  return (
    <div className="space-y-4">
      {strategies.map((strategy, index) => (
        <motion.div
          key={strategy.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-success/10">
                <strategy.icon className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{strategy.title}</h3>
                    <p className="text-sm text-foreground/70">{strategy.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {strategy.actions.map((action) => (
                      <span
                        key={action}
                        className="text-xs bg-success/5 text-success px-2 py-1 rounded-full"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default MitigationStrategies;
