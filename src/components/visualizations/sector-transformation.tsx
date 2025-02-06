'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/SectorTransformationChart').then((mod) => mod.SectorTransformationChart),
  { ssr: false }
);

const data = [
  { sector: 'Healthcare', current: 35, projected: 75 },
  { sector: 'Agriculture', current: 28, projected: 65 },
  { sector: 'Finance', current: 45, projected: 85 },
  { sector: 'Education', current: 30, projected: 70 },
  { sector: 'Manufacturing', current: 25, projected: 60 },
];

export function SectorTransformation() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Sector-wise AI Adoption Progress</h3>
      <div className="h-[300px] w-full">
        <Chart data={data} />
      </div>
    </Card>
  );
}
