'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/DigitalSovereigntyChart').then((mod) => mod.DigitalSovereigntyChart),
  { ssr: false }
);

const data = [
  { year: '2020', local: 20, foreign: 80 },
  { year: '2021', local: 30, foreign: 70 },
  { year: '2022', local: 45, foreign: 55 },
  { year: '2023', local: 58, foreign: 42 },
  { year: '2024', local: 65, foreign: 35 },
];

export function DigitalSovereignty() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Digital Solutions Origin Distribution</h3>
      <div className="h-[300px] w-full">
        <Chart data={data} />
      </div>
    </Card>
  );
}
