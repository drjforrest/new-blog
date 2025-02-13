'use client';

import React from 'react';
import { BaseDualAxisBarChart } from './base/BaseDualAxisBarChart';

interface AIImplementationRoadmapChartProps {
  data: Array<{
    phase: string;
    progress: number;
    investment: number;
    timeframe: string;
    completion: string;
  }>;
  tooltipFormatter: (value: number, category: string) => string;
}

export function AIImplementationRoadmapChart({ 
  data, 
  tooltipFormatter 
}: AIImplementationRoadmapChartProps) {
  return (
    <BaseDualAxisBarChart
      data={data}
      xAxisKey="phase"
      dataKeys={[
        { key: 'progress', name: 'Progress', axis: 'left' },
        { key: 'investment', name: 'Investment', axis: 'right' }
      ]}
      xAxisLabel="Implementation Phase"
      leftAxisLabel="Progress (%)"
      rightAxisLabel="Investment (Billion USD)"
      tooltipFormatter={tooltipFormatter}
    />
  );
}