'use client';

import React from 'react';
import { BaseMultiLineChart } from './base/BaseMultiLineChart';

const data = [
  {
    year: 2020,
    digital_adoption: 35,
    policy_implementation: 25,
    infrastructure: 30,
    skills: 20,
  },
  {
    year: 2021,
    digital_adoption: 42,
    policy_implementation: 35,
    infrastructure: 38,
    skills: 28,
  },
  {
    year: 2022,
    digital_adoption: 55,
    policy_implementation: 48,
    infrastructure: 45,
    skills: 40,
  },
  {
    year: 2023,
    digital_adoption: 68,
    policy_implementation: 62,
    infrastructure: 55,
    skills: 52,
  },
  {
    year: 2024,
    digital_adoption: 75,
    policy_implementation: 70,
    infrastructure: 65,
    skills: 60,
  },
];

const customColors = {
  digital_adoption: '#3B82F6',
  policy_implementation: '#10B981',
  infrastructure: '#F59E0B',
  skills: '#EF4444',
};

export function DigitalVisionExplorerChart() {
  return (
    <div className="h-[400px] w-full">
      <BaseMultiLineChart
        data={data}
        xAxisKey="year"
        dataKeys={[
          { key: 'digital_adoption', name: 'Digital Adoption', color: customColors.digital_adoption },
          { key: 'policy_implementation', name: 'Policy Implementation', color: customColors.policy_implementation },
          { key: 'infrastructure', name: 'Infrastructure', color: customColors.infrastructure },
          { key: 'skills', name: 'Digital Skills', color: customColors.skills }
        ]}
        xAxisLabel="Year"
        yAxisLabel="Progress Score"
        tooltipFormatter={(value) => `${value}%`}
        strokeWidth={2}
      />
    </div>
  );
}