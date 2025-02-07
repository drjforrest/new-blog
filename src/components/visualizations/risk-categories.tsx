'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Globe, 
  Shield, 
  Database,
  LockKeyhole,
  Network,
  BadgeAlert
} from 'lucide-react';

const risks = [
  {
    category: "Digital Colonialism",
    icon: Globe,
    description: "Dependency and exploitation risks from external actors",
    impacts: [
      "Resource extraction",
      "Data control",
      "Imposed standards",
      "Economic dependencies"
    ]
  },
  {
    category: "Digital Sovereignty",
    icon: Shield,
    description: "Challenges to maintaining control and autonomy",
    impacts: [
      "Infrastructure control",
      "Data ownership",
      "Decision-making power",
      "Economic independence"
    ]
  },
  {
    category: "Data Governance",
    icon: Database,
    description: "Risks related to data control and management",
    impacts: [
      "Data protection",
      "Privacy concerns",
      "Processing regulations",
      "Storage location"
    ]
  },
  {
    category: "Cybersecurity",
    icon: LockKeyhole,
    description: "Vulnerabilities in digital systems and infrastructure",
    impacts: [
      "Cyber attacks",
      "Economic losses",
      "System breaches",
      "Data theft"
    ]
  },
  {
    category: "Infrastructure",
    icon: Network,
    description: "Challenges in digital infrastructure development",
    impacts: [
      "Resource limitations",
      "Access inequality",
      "Technical barriers",
      "Maintenance costs"
    ]
  },
  {
    category: "Social Impact",
    icon: BadgeAlert,
    description: "Risks to social equity and development",
    impacts: [
      "Digital divide",
      "Economic disparities",
      "Social inequalities",
      "Cultural impacts"
    ]
  }
];

export function RiskCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {risks.map((risk, index) => (
        <motion.div
          key={risk.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <risk.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{risk.category}</h3>
                <p className="text-sm text-foreground/70 mb-4">{risk.description}</p>
                <ul className="space-y-2">
                  {risk.impacts.map((impact) => (
                    <li key={impact} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}