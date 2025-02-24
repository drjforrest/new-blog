'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import Link from 'next/link';

const Chart = dynamic(
  () => import('./charts/SectorTransformationChart').then((mod) => mod.SectorTransformationChart),
  { ssr: false }
);

const data = [
  { 
    sector: 'Healthcare',
    current: 45,
    projected: 85,
  },
  { 
    sector: 'Agriculture',
    current: 35,
    projected: 75,
  },
  { 
    sector: 'Financial Services',
    current: 55,
    projected: 90,
  },
  { 
    sector: 'Education',
    current: 30,
    projected: 70,
  },
  { 
    sector: 'Public Services',
    current: 25,
    projected: 65,
  }
];

export const SectorTransformation: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Sectoral AI Impact Analysis</h3>
        <Link href="/bonus#sector-analysis" className="text-sm text-primary hover:underline flex items-center gap-1">
          <Info className="w-4 h-4" />
          Methodology & Sources
        </Link>
      </div>
      
      <div className="text-sm text-content-muted mb-4">
        <p className="font-medium">Key Metrics Explained:</p>
        <ul className="list-disc ml-4 space-y-1">
          <li>Current Adoption: Percentage of sector using AI solutions (2024)</li>
          <li>Projected Growth: Expected adoption by 2030 (%)</li>
          <li>Impact Score: Weighted metric of economic and social benefits (0-10)</li>
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
          Source: AI for Africa Blueprint (2021), Research ICT Africa Report (2024)
        </div>
        <div className="text-xs text-content-muted mt-1">
          Note: Impact scores are composite metrics based on economic value, job creation, and social benefit
        </div>
      </div>
    </Card>
  );
}

export default SectorTransformation;
