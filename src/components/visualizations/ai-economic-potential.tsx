'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

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
      <h3 className="text-lg font-semibold mb-4">AI Economic Impact Breakdown</h3>
      <div className="h-[300px] w-full">
        <Chart data={data} />
      </div>
    </Card>
  );
}
