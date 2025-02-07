'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Target, 
  Heart, 
  BookOpen, 
  Fingerprint, 
  Users2,
  Building2
} from 'lucide-react';

const initiatives = [
  {
    title: "SDG Impact",
    description: "Supporting 128 targets across all Sustainable Development Goals",
    icon: Target,
    color: "text-success"
  },
  {
    title: "Healthcare",
    description: "Shaping the future of healthcare delivery and access",
    icon: Heart,
    color: "text-accent"
  },
  {
    title: "Education",
    description: "AI-enabled quality education through e-Learning",
    icon: BookOpen,
    color: "text-primary"
  },
  {
    title: "Digital Identity",
    description: "99.9% digital legal identity coverage targeted by 2030",
    icon: Fingerprint,
    color: "text-primary"
  },
  {
    title: "Gender Equality",
    description: "Leveling the playing field through digital platforms",
    icon: Users2,
    color: "text-accent"
  },
  {
    title: "Public Services",
    description: "Improved service delivery and governance",
    icon: Building2,
    color: "text-success"
  }
];

export function SocialDevelopment() {
  return (
    <div className="space-y-4">
      {initiatives.map((initiative, index) => (
        <motion.div
          key={initiative.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg bg-background ${initiative.color}`}>
                <initiative.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">{initiative.title}</h3>
                <p className="text-sm text-foreground/70">{initiative.description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}