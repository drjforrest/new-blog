'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import Link from 'next/link';

const Chart = dynamic(
  () => import('./charts/InfrastructureGapsChart').then((mod) => mod.InfrastructureGapsChart),
  { ssr: false }
);

const data = [
  {
    metric: 'Internet Access',
    urban: 65,
    rural: 35,
  },
  {
    metric: 'Data Centers',
    urban: 45,
    rural: 25,
  },
  {
    metric: 'Cloud Infrastructure',
    urban: 55,
    rural: 30,
  },
  {
    metric: 'Network Coverage',
    urban: 70,
    rural: 40,
  },
  {
    metric: 'Digital Services',
    urban: 60,
    rural: 35,
  }
];

function InfrastructureGaps() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Digital Infrastructure Gap Analysis</h3>
        <Link href="/bonus#infrastructure-methodology" className="text-sm text-primary hover:underline flex items-center gap-1">
          <Info className="w-4 h-4" />
          Full Analysis
        </Link>
      </div>
      
      <div className="text-sm text-content-muted mb-4">
        <p className="font-medium">Infrastructure Metrics:</p>
        <ul className="list-disc ml-4 space-y-1">
          <li>Internet Access: Population percentage with reliable internet</li>
          <li>Data Center Coverage: Regional data center capacity score</li>
          <li>Cloud Infrastructure: Cloud service availability score</li>
          <li>Investment Gap: Required investment in USD billions</li>
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
          Sources: ITU Digital Transformation Strategy (2020-2030), African Development Bank Infrastructure Report (2024)
        </div>
        <div className="text-xs text-content-muted mt-1">
          Note: Scores normalized to 100-point scale. Investment gaps calculated based on 2024 infrastructure needs assessment.
        </div>
      </div>
    </Card>
  );
}

export default InfrastructureGaps;
