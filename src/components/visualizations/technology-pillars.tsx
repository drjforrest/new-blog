'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Network, 
  Smartphone, 
  Server, 
  Shield, 
  Users, 
  Database 
} from 'lucide-react';

const pillars = [
  {
    title: "Digital Infrastructure",
    description: "High-speed networks and connectivity across Africa",
    icon: Network,
    metrics: ["5G coverage", "Fiber networks", "Data centers"]
  },
  {
    title: "Digital Access",
    description: "Universal access to digital services and devices",
    icon: Smartphone,
    metrics: ["Mobile penetration", "Internet access", "Device affordability"]
  },
  {
    title: "Digital Platforms",
    description: "Shared digital services and applications",
    icon: Server,
    metrics: ["e-Government", "Digital ID", "Payment systems"]
  },
  {
    title: "Digital Security",
    description: "Cybersecurity and data protection frameworks",
    icon: Shield,
    metrics: ["Security standards", "Privacy laws", "Risk management"]
  },
  {
    title: "Digital Skills",
    description: "Building digital capabilities across society",
    icon: Users,
    metrics: ["Digital literacy", "Technical skills", "Innovation capacity"]
  },
  {
    title: "Digital Innovation",
    description: "Fostering technological advancement",
    icon: Database,
    metrics: ["Tech startups", "R&D centers", "Innovation hubs"]
  }
];

export function TechnologyPillars() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{pillar.title}</h3>
              </div>
              <p className="text-foreground/70 mb-4 flex-grow">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}