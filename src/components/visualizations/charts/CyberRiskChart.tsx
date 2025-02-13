'use client';

import React from 'react';
import { BaseRadialBarChart } from './base/BaseRadialBarChart';

const data = [
  {
    name: 'Infrastructure Vulnerability',
    value: 85,
  },
  {
    name: 'Data Privacy Risks',
    value: 75,
  },
  {
    name: 'Economic Impact',
    value: 65,
  },
  {
    name: 'System Breaches',
    value: 55,
  }
];

const customColors = {
  'Infrastructure Vulnerability': '#2563eb',
  'Data Privacy Risks': '#16a34a',
  'Economic Impact': '#dc2626',
  'System Breaches': '#9333ea',
};

export function CyberRiskChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Cybersecurity Risk Levels</h3>
      <div className="w-full h-[400px]">
        <BaseRadialBarChart
          data={data}
          customColors={customColors}
          tooltipFormatter={(value) => `${value}%`}
          barSize={20}
        />
      </div>
    </div>
  );
}