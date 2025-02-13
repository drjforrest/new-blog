'use client';

import React from 'react';
import { BaseBarChart } from './base/BaseBarChart';

const data = [
  {
    sector: 'Agriculture',
    current: 15.2,
    projected: 28.4,
  },
  {
    sector: 'Healthcare',
    current: 12.8,
    projected: 24.6,
  },
  {
    sector: 'Financial Services',
    current: 18.5,
    projected: 32.8,
  },
  {
    sector: 'Public Services',
    current: 14.2,
    projected: 26.5,
  },
  {
    sector: 'Education',
    current: 11.6,
    projected: 22.9,
  },
];

export function AIGrowthChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">AI Impact by Sector (% Growth)</h3>
      <div className="w-full h-[400px]">
        <BaseBarChart
          data={data}
          xAxisKey="sector"
          dataKeys={[
            { key: 'current', name: 'Current Impact' },
            { key: 'projected', name: '2030 Projection' }
          ]}
          xAxisLabel="Sector"
          yAxisLabel="Growth (%)"
          tooltipFormatter={(value) => `${value}%`}
        />
      </div>
    </div>
  );
}