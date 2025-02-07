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

export function AIEconomicPotential() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">AI Economic Impact Breakdown (Trillion USD)</h3>
        <Link href="/bonus" className="text-sm text-primary hover:underline flex items-center gap-1">
          <Info className="w-4 h-4" />
          Data Sources
        </Link>
      </div>
      
      <div className="text-sm text-content-muted mb-4">
        <p>Direct Impact: Immediate economic value from AI implementation</p>
        <p>Indirect Impact: Secondary effects through supply chain</p>
        <p>Induced Impact: Additional economic activity from increased spending</p>
      </div>

      <div className="h-[300px] w-full">
        <Chart 
          data={data} 
          tooltipFormatter={(value) => `$${value}T`}
        />
      </div>
      
      <div className="mt-4 text-xs text-content-muted">
        Source: AI for Africa Blueprint (2021), African Union High-Level Panel Report on AI
      </div>
    </Card>
  );
}