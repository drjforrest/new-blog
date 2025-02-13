'use client';

import React from 'react';
import { BaseLineChart } from './base/BaseLineChart';

interface AIMarketGrowthChartProps {
  data: Array<{
    year: string;
    value: number;
  }>;
}

export function AIMarketGrowthChart({ data }: AIMarketGrowthChartProps) {
  return (
    <BaseLineChart
      data={data}
      dataKey="value"
      xAxisKey="year"
      yAxisLabel="Market Size (USD Trillion)"
      xAxisLabel="Year"
      name="Market Growth"
      tooltipFormatter={(value) => `$${value}T`}
    />
  );
}