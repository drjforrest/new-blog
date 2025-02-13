'use client';

import React from 'react';
import { BaseRadarChart } from './base/BaseRadarChart';

interface InfrastructureGapsChartProps {
  data: Array<{
    metric: string;
    urban: number;
    rural: number;
  }>;
  tooltipFormatter?: (value: number) => string;
}

export function InfrastructureGapsChart({ 
  data,
  tooltipFormatter = (value) => `${value}%`
}: InfrastructureGapsChartProps) {
  return (
    <BaseRadarChart
      data={data}
      angleKey="metric"
      dataKeys={[
        { key: 'urban', name: 'Urban Areas' },
        { key: 'rural', name: 'Rural Areas' }
      ]}
      domain={[0, 100]}
      tooltipFormatter={tooltipFormatter}
    />
  );
}