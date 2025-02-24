'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import Link from 'next/link';

const Chart = dynamic(
  () => import('./charts/AIEconomicPotentialChart').then((mod) => mod.AIEconomicPotentialChart),
  { ssr: false }
);

const data = [
  { year: '2020', directImpact: 1.2, indirectImpact: 0.8, inducedImpact: 0.5 },
  { year: '2021', directImpact: 1.5, indirectImpact: 1.0, inducedImpact: 0.7 },
  { year: '2022', directImpact: 1.8, indirectImpact: 1.3, inducedImpact: 0.9 },
  { year: '2023', directImpact: 2.2, indirectImpact: 1.6, inducedImpact: 1.1 },
  { year: '2024', directImpact: 2.5, indirectImpact: 1.9, inducedImpact: 1.4 },
  { year: '2025', directImpact: 2.9, indirectImpact: 2.2, inducedImpact: 1.7 },
];

export const AIEconomicPotential: React.FC = () => {
  const metrics = [
    {
      icon: "📈",
      title: "GDP Growth",
      value: "$2.9T",
      change: "+3%",
      subtext: "annual growth",
      description: "Potential value added to African economy by 2030"
    },
    {
      icon: "💼",
      title: "Digital Entrepreneurship",
      description: "Increased funding for ICT startups and innovative solutions",
      trend: "Rising"
    },
    {
      icon: "👥",
      title: "Job Creation",
      description: "Net positive job creation through AI adoption",
      trend: "Positive"
    },
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Digital market integration and economic scaling",
      trend: "Growing"
    },
    {
      icon: "💰",
      title: "Investment",
      description: "Increased private sector collaboration and funding",
      trend: "Rising"
    },
    {
      icon: "🌾",
      title: "Agriculture",
      description: "Digital transformation of farming and food systems",
      trend: "Expanding"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">Economic Impact Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.title}
            className="bg-background rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <span className="text-2xl">{metric.icon}</span>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">{metric.title}</h4>
                {metric.value && (
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-primary">{metric.value}</span>
                    <span className="text-sm text-success">{metric.change}</span>
                  </div>
                )}
                {metric.subtext && (
                  <span className="text-sm text-foreground/60">{metric.subtext}</span>
                )}
                <p className="text-sm text-foreground/70 mt-2">{metric.description}</p>
                {metric.trend && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-foreground/60">Trend:</span>
                    <span className="text-sm text-success">{metric.trend}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIEconomicPotential;
