'use client';

import React from 'react';
import { BaseAreaChart } from './base/BaseAreaChart';

interface DigitalSovereigntyChartProps {
  data: Array<{
    year: string;
    local: number;
    foreign: number;
  }>;
  tooltipFormatter?: (value: number) => string;
}

export function DigitalSovereigntyChart({ 
  data,
  tooltipFormatter = (value) => `${value}%`
}: DigitalSovereigntyChartProps) {
  return (
    <BaseAreaChart
      data={data}
      xAxisKey="year"
      dataKeys={[
        { key: 'local', name: 'Local Control' },
        { key: 'foreign', name: 'Foreign Dependence' }
      ]}
      xAxisLabel="Infrastructure Category"
      yAxisLabel="Percentage"
      tooltipFormatter={tooltipFormatter}
      stacked={true}
    />
  );
}