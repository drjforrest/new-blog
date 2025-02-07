'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import Link from 'next/link';

const Chart = dynamic(
  () => import('./charts/DigitalSovereigntyChart').then((mod) => mod.DigitalSovereigntyChart),
  { ssr: false }
);

const data = [
  {
    year: 'Data Centers',
    local: 35,
    foreign: 65,
  },
  {
    year: 'Cloud Services',
    local: 25,
    foreign: 75,
  },
  {
    year: 'AI Development',
    local: 40,
    foreign: 60,
  },
  {
    year: 'Digital Identity',
    local: 60,
    foreign: 40,
  },
  {
    year: 'Data Processing',
    local: 30,
    foreign: 70,
  }
];

export function DigitalSovereignty() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Digital Sovereignty Assessment</h3>
        <Link href="/bonus#sovereignty-analysis" className="text-sm text-primary hover:underline flex items-center gap-1">
          <Info className="w-4 h-4" />
          Analysis Details
        </Link>
      </div>
      
      <div className="text-sm text-content-muted mb-4">
        <p className="font-medium">Metric Definitions:</p>
        <ul className="list-disc ml-4 space-y-1">
          <li>Local Control: Percentage of infrastructure/services under African ownership</li>
          <li>Foreign Dependence: Reliance on non-African providers (%)</li>
          <li>Investment Trend: Growth in local investment/development (2020-2024)</li>
          <li>Policy Maturity: Progress in sovereignty-related policy framework (0-100)</li>
        </ul>
      </div>

      <div className="h-[400px] w-full">
        <Chart 
          data={data} 
          tooltipFormatter={(value) => `${value}%`}
        />
      </div>
      
      <div className="mt-4">
        <div className="text-xs text-content-muted">
          Sources: African Union Digital Sovereignty Report (2024), AUDA-NEPAD Policy Framework Analysis
        </div>
        <div className="text-xs text-content-muted mt-1">
          Note: Policy maturity scores based on comprehensive assessment of regulatory frameworks, implementation status, and enforcement capabilities.
        </div>
      </div>
    </Card>
  );
}