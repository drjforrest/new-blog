'use client';

import React from 'react';
import { BaseBarChart } from './base/BaseBarChart';
import { BaseMetricCards } from './base/BaseMetricCards';

interface YouthDevelopmentChartProps {
  data: Array<{
    age: string;
    percentage: number;
  }>;
  metrics: Array<{
    label: string;
    value: string;
    trend: string;
  }>;
}

export function YouthDevelopmentChart({ data, metrics }: YouthDevelopmentChartProps) {
  return (
    <div className="space-y-8">
      <div className="h-[300px] w-full">
        <BaseBarChart
          data={data}
          xAxisKey="age"
          dataKeys={[
            { key: 'percentage', name: 'Percentage' }
          ]}
          xAxisLabel="Age Group"
          yAxisLabel="Percentage"
          tooltipFormatter={(value) => `${value}%`}
        />
      </div>
      
      <BaseMetricCards
        metrics={metrics}
        columns={4}
      />
    </div>
  );
}