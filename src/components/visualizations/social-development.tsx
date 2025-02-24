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
    description: "AI can support 128 targets across all SDGs, enhancing efficiency & productivity. Focus on policies and regulations to ensure transparency, accountability, and ethical standards.",
    icon: Target,
    color: "text-success"
  },
  {
    title: "Healthcare",
    description: "Improving healthcare access, diagnostics, and drug development. Digital health strategies and intersectoral collaboration between ICT and health sectors are crucial.",
    icon: Heart,
    color: "text-accent"
  },
  {
    title: "Education",
    description: "**AI-enabled quality education** via platforms like Coursera and Smart Africa Digital Academy [4]. Focus on digital literacy programs at the grassroots level.",
    icon: BookOpen,
    color: "text-primary"
  },
  {
    title: "Digital Identity",
    description: "Targeting 99.9% digital legal identity coverage by 2030** [6]. Legal identity is a 'right' enabling gender equality, social protection, financial inclusion, and improved governance.",
    icon: Fingerprint,
    color: "text-primary"
  },
  {
    title: "Gender Equality",
    description: "**Digital platforms can level the playing field**, but address gender unsteadiness within STEM. Less than 30% of women are reported in STEM fields].",
    icon: Users2,
    color: "text-accent"
  },
  {
    title: "Public Services",
    description: "Improved service delivery and governance** through digital platforms [8]. Digital governance enhances efficiency, reduces duplication, combats fraud, and improves civic engagement.",
    icon: Building2,
    color: "text-success"
  }
];

export const SocialDevelopment: React.FC = () => {
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
};

export default SocialDevelopment;