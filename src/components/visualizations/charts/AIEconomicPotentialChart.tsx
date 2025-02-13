'use client';

import React from 'react';
import { BaseAreaChart } from './base/BaseAreaChart';

interface AIEconomicPotentialChartProps {
  data: Array<{
    year: string;
    directImpact: number;
    indirectImpact: number;
    inducedImpact: number;
  }>;
  tooltipFormatter: (value: number) => string;
}

export function AIEconomicPotentialChart({ 
  data, 
  tooltipFormatter 
}: AIEconomicPotentialChartProps) {
  return (
    <BaseAreaChart
      data={data}
      xAxisKey="year"
      dataKeys={[
        { key: 'directImpact', name: 'Direct Impact' },
        { key: 'indirectImpact', name: 'Indirect Impact' },
        { key: 'inducedImpact', name: 'Induced Impact' }
      ]}
      xAxisLabel="Year"
      yAxisLabel="Economic Impact (Trillion USD)"
      tooltipFormatter={tooltipFormatter}
      stacked={true}
    />
  );
}