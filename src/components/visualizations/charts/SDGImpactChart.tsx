'use client';

import React from 'react';
import { BaseRadarChart } from './base/BaseRadarChart';

const data = [
  {
    metric: 'Economic Growth',
    value: 85,
    fullMark: 100,
  },
  {
    metric: 'Education',
    value: 78,
    fullMark: 100,
  },
  {
    metric: 'Healthcare',
    value: 82,
    fullMark: 100,
  },
  {
    metric: 'Gender Equality',
    value: 74,
    fullMark: 100,
  },
  {
    metric: 'Innovation',
    value: 90,
    fullMark: 100,
  },
  {
    metric: 'Infrastructure',
    value: 76,
    fullMark: 100,
  },
];

export function SDGImpactChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">AI Impact on SDG Categories</h3>
      <div className="w-full h-[400px]">
        <BaseRadarChart
          data={data}
          angleKey="metric"
          dataKeys={[
            { key: 'value', name: 'Impact Score' }
          ]}
          domain={[0, 100]}
          tooltipFormatter={(value) => `${value}%`}
        />
      </div>
    </div>
  );
}