'use client';

import React from 'react';
import { BaseBarChart } from './base/BaseBarChart';

interface SectorTransformationChartProps {
  data: Array<{
    sector: string;
    current: number;
    projected: number;
  }>;
  tooltipFormatter?: (value: number) => string;
}

export function SectorTransformationChart({ 
  data,
  tooltipFormatter = (value) => `${value}%`
}: SectorTransformationChartProps) {
  return (
    <BaseBarChart
      data={data}
      xAxisKey="sector"
      dataKeys={[
        { key: 'current', name: 'Current Adoption' },
        { key: 'projected', name: '2030 Projection' }
      ]}
      xAxisLabel="Sector"
      yAxisLabel="Percentage"
      tooltipFormatter={tooltipFormatter}
    />
  );
}