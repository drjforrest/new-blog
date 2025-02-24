'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sectors = [
  {
    title: 'Healthcare Transformation',
    description: 'AI-powered diagnostic tools are achieving 90%+ accuracy in disease detection, particularly in cervical cancer and malaria screening. AI-enhanced telemedicine is expanding access to care in remote regions, while drone-based medical supply delivery—pioneered in Rwanda—is redefining emergency response logistics.',
    highlights: [
      'AI diagnostic tools reaching high accuracy rates for early detection.',
      'Expansion of telemedicine solutions to bridge gaps in remote healthcare.',
      'Drone delivery systems enhancing medical supply distribution in underserved areas.',
    ],
  },
  {
    title: 'Agricultural Innovation',
    description: 'AI is enabling precision farming and agriculture automation, helping smallholder farmers optimize yields. Platforms like FarmDrive and Zenvus are using AI to analyze soil conditions and predict weather patterns, while AI-powered credit scoring models expand financial access for rural farmers.',
    highlights: [
      'Use of AI for soil analysis, weather prediction, and farming recommendations.',
      'Expansion of AI-driven agricultural services for smallholder farmers.',
      'AI-based credit scoring models increasing access to financial services.',
    ],
  },
  {
    title: 'Financial Services Revolution',
    description: 'AI is driving mobile banking, risk assessment, and fraud detection. With over 55% of Africa’s population still unbanked, AI-powered fintech solutions are accelerating financial inclusion. Automated advisors and machine learning models are optimizing microfinance lending decisions and reducing risk in underserved markets.',
    highlights: [
      'AI optimizing mobile banking, fraud detection, and risk assessment.',
      'Driving financial inclusion for previously underserved populations.',
      'Use of AI for microfinance and lending decisions in rural markets.',
    ],
  },
  {
    title: 'Education & Public Services',
    description: 'AI is revolutionizing education and public services, making learning more accessible and government operations more efficient. E-learning platforms powered by AI are helping bridge teacher shortages, offering personalized education tailored to student needs. In public services, AI-driven automation is streamlining governance, reducing bureaucratic inefficiencies, and improving service delivery to citizens. Additionally, AI is playing a crucial role in digital identity systems, with a goal of reaching 99.9% coverage by 2030, ensuring secure and verifiable identification for all.',
    highlights: [
      'Projected AI adoption in education to reach 70% by 2030.',
      'AI-enabled e-learning platforms addressing teacher shortages and enhancing personalized learning.',
      'Governments leveraging AI to digitize identity systems, improving access to services.',
      'AI-driven public sector automation reducing inefficiencies and improving governance.',
      'AI adoption enhancing education quality and accessibility across the continent.',
    ],
  },
];

export function SectoralTransformationsCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? sectors.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === sectors.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 shadow-lg bg-white/90 border border-primary/10">
          <h3 className="text-2xl font-bold text-primary">{sectors[index].title}</h3>
          <p className="text-foreground/70 mt-2">{sectors[index].description}</p>
          <ul className="mt-4 space-y-2 text-foreground/80">
            {sectors[index].highlights.map((highlight, i) => (
              <li key={i} className="list-disc list-inside">{highlight}</li>
            ))}
          </ul>
        </Card>
      </motion.div>

      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full shadow-lg hover:bg-primary/80">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full shadow-lg hover:bg-primary/80">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default SectoralTransformationsCarousel;
