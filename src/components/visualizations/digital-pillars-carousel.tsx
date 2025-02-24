'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pillars = [
  {
    title: 'Enabling Environment, Policy & Regulation',
    goal: 'To create a conducive environment through appropriate policies and regulations that promote digital transformation.',
    activities: [
      'Developing and implementing national, regional, and continental digital strategies',
      'Creating comprehensive cyberspace policies and legislation',
      'Establishing data protection and privacy frameworks',
      'Strengthening collaboration between African institutions and regulators',
    ],
  },
  {
    title: 'Digital Infrastructure',
    goal: 'To facilitate the development of accessible and affordable digital systems, including networks, platforms, and devices.',
    activities: [
      'Implementing continental digital infrastructure master plans',
      'Establishing regional integration broadband projects',
      'Promoting competitive internet interconnection',
      'Modernizing postal services for digital delivery',
    ],
  },
  {
    title: 'Digital Skills & Human Capacity',
    goal: 'To cultivate a workforce capable of both producing and effectively using digital technologies.',
    activities: [
      'Updating education curricula for digital society needs',
      'Promoting gender-inclusive STEAM education',
      'Developing multi-stakeholder partnerships for skills development',
      'Supporting knowledge transfer and mentorship programs',
    ],
  },
  {
    title: 'Digital Innovation & Entrepreneurship',
    goal: 'To foster innovation that aligns with both Sustainable Development Goals and Africa\'s science and technology strategy.',
    activities: [
      'Developing supportive legal and regulatory frameworks',
      'Establishing local digital innovation centers',
      'Supporting digital entrepreneurs through mentorship',
      'Promoting locally designed digital solutions',
    ],
  },
  {
    title: 'Networking',
    goal: 'To develop an extended ecosystem and public-private partnerships that create value.',
    activities: [
      'Strengthening collaboration between private sector, industry associations, and international organizations',
      'Facilitating knowledge-sharing networks for digital transformation',
      'Promoting cross-border partnerships to scale digital solutions',
      'Enhancing data-sharing frameworks to improve AI and digital economy initiatives',
    ],
  },
];

function PillarsCarousel() {
  const [index, setIndex] = useState(0);
  
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setIndex((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <Card className="relative w-full max-w-3xl mx-auto p-6 shadow-lg bg-white/90 border border-primary/10">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-primary">{pillars[index].title}</h3>
        <p className="text-foreground/70 mt-2">{pillars[index].goal}</p>
        <ul className="mt-4 space-y-2 text-foreground/80">
          {pillars[index].activities.map((activity, i) => (
            <li key={i} className="list-disc list-inside">{activity}</li>
          ))}
        </ul>
      </motion.div>
      
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full shadow-lg hover:bg-primary/80">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full shadow-lg hover:bg-primary/80">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </Card>
  );
}

export default PillarsCarousel;
