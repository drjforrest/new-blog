'use client';

import React from 'react';
import { BaseBarChart } from './base/BaseBarChart';

const data = [
  {
    sector: 'Healthcare',
    current_adoption: 45,
    impact_score: 85,
    roi: 65,
  },
  {
    sector: 'Agriculture',
    current_adoption: 35,
    impact_score: 80,
    roi: 70,
  },
  {
    sector: 'Education',
    current_adoption: 40,
    impact_score: 75,
    roi: 60,
  },
  {
    sector: 'Finance',
    current_adoption: 55,
    impact_score: 70,
    roi: 75,
  },
  {
    sector: 'Manufacturing',
    current_adoption: 30,
    impact_score: 65,
    roi: 55,
  },
];

export function AIUseCasesChart() {
  return (
    <div className="h-[400px] w-full">
      <BaseBarChart
        data={data}
        xAxisKey="sector"
        dataKeys={[
          { key: 'current_adoption', name: 'Current Adoption (%)' },
          { key: 'impact_score', name: 'Impact Score' },
          { key: 'roi', name: 'ROI Score' }
        ]}
        xAxisLabel="Sector"
        yAxisLabel="Score"
        tooltipFormatter={(value) => `${value}`}
      />
    </div>
  );
}