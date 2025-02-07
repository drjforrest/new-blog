'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import Link from 'next/link';

const Chart = dynamic(
  () => import('./charts/AIImplementationRoadmapChart').then((mod) => mod.AIImplementationRoadmapChart),
  { ssr: false }
);

const data = [
  {
    phase: 'Foundation',
    progress: 65,
    investment: 2.5,
    timeframe: '2020-2024',
    completion: 'In Progress'
  },
  {
    phase: 'Infrastructure',
    progress: 45,
    investment: 4.8,
    timeframe: '2022-2026',
    completion: 'In Progress'
  },
  {
    phase: 'Capacity Building',
    progress: 35,
    investment: 3.2,
    timeframe: '2023-2027',
    completion: 'Early Stage'
  },
  {
    phase: 'Innovation Hub',
    progress: 25,
    investment: 2.8,
    timeframe: '2024-2028',
    completion: 'Early Stage'
  },
  {
    phase: 'Scale & Optimize',
    progress: 15,
    investment: 3.5,
    timeframe: '2025-2030',
    completion: 'Planning'
  }
];

export function AIImplementationRoadmap() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">AI Implementation Progress Tracker</h3>
        <Link href="/bonus#implementation-analysis" className="text-sm text-primary hover:underline flex items-center gap-1">
          <Info className="w-4 h-4" />
          Detailed Timeline
        </Link>
      </div>
      
      <div className="text-sm text-content-muted mb-4">
        <p className="font-medium">Implementation Metrics:</p>
        <ul className="list-disc ml-4 space-y-1">
          <li>Progress: Completion percentage of phase objectives</li>
          <li>Investment: Required funding in USD billions</li>
          <li>Timeframe: Expected duration of each phase</li>
          <li>Completion Status: Current implementation stage</li>
        </ul>
      </div>

      <div className="h-[400px] w-full">
        <Chart 
          data={data} 
          tooltipFormatter={(value, category) => {
            if (category === 'investment') return `$${value}B`;
            return `${value}%`;
          }}
        />
      </div>
      
      <div className="mt-4">
        <div className="text-xs text-content-muted">
          Sources: AI for Africa Blueprint (2021), African Union Implementation Framework
        </div>
        <div className="text-xs text-content-muted mt-1">
          Note: Progress metrics based on quarterly assessments. Investment figures represent total allocated funding.
          See <Link href="/bonus#roadmap-details" className="underline">full implementation details</Link> for more information.
        </div>
      </div>
    </Card>
  );
}