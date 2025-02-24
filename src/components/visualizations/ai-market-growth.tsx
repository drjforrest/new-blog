'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/AIMarketGrowthChart').then((mod) => mod.AIMarketGrowthChart),
  { ssr: false }
);

const data = [
  { year: '2020', value: 1.2 },
  { year: '2021', value: 1.5 },
  { year: '2022', value: 1.8 },
  { year: '2023', value: 2.2 },
  { year: '2024', value: 2.5 },
  { year: '2025', value: 2.9 },
];

export const AIMarketGrowth: React.FC = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">AI Market Growth Projection</h3>
      <div className="h-[300px] w-full">
        <Chart data={data} />
      </div>
    </Card>
  );
};

export default AIMarketGrowth;
