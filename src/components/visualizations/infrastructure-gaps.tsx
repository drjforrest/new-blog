'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/InfrastructureGapsChart').then((mod) => mod.InfrastructureGapsChart),
  { ssr: false }
);

const data = [
  { metric: 'Internet Access', urban: 75, rural: 37 },
  { metric: 'Digital Skills', urban: 65, rural: 30 },
  { metric: 'Infrastructure', urban: 80, rural: 35 },
  { metric: 'Device Access', urban: 70, rural: 40 },
  { metric: 'Digital Services', urban: 85, rural: 45 },
];

export function InfrastructureGaps() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Infrastructure Gaps Analysis</h3>
      <Chart data={data} />
    </Card>
  );
}
