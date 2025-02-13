'use client';

import React from 'react';
import { BaseTabbedDashboard } from './base/BaseTabbedDashboard';
import { BaseLineChart } from './base/BaseLineChart';
import { BaseBarChart } from './base/BaseBarChart';

const marketData = [
  { year: 2020, value: 5.2 },
  { year: 2022, value: 8.7 },
  { year: 2024, value: 14.3 },
  { year: 2026, value: 18.9 },
  { year: 2028, value: 20.5 },
  { year: 2030, value: 22.8 },
];

const sectorData = [
  { sector: 'Healthcare', current: 45, projected: 85 },
  { sector: 'Finance', current: 40, projected: 75 },
  { sector: 'Agriculture', current: 35, projected: 70 },
  { sector: 'Education', current: 30, projected: 65 },
  { sector: 'Manufacturing', current: 25, projected: 60 },
];

const investmentData = [
  { category: 'Infrastructure', required: 12.5, current: 5.8 },
  { category: 'Research', required: 8.2, current: 3.4 },
  { category: 'Training', required: 6.7, current: 2.9 },
  { category: 'Policy', required: 4.3, current: 1.8 },
];

interface AIEconomicDashboardChartProps {
  activeTab?: string;
}

export function AIEconomicDashboardChart({ activeTab = 'market' }: AIEconomicDashboardChartProps) {
  const tabs = [
    {
      id: 'market',
      label: 'Market Growth',
      content: (
        <BaseLineChart
          data={marketData}
          dataKey="value"
          xAxisKey="year"
          name="Market Value ($B)"
          xAxisLabel="Year"
          yAxisLabel="Market Value (Billion USD)"
          tooltipFormatter={(value) => `$${value}B`}
        />
      ),
    },
    {
      id: 'sectors',
      label: 'Sector Impact',
      content: (
        <BaseBarChart
          data={sectorData}
          xAxisKey="sector"
          dataKeys={[
            { key: 'current', name: 'Current Impact' },
            { key: 'projected', name: '2030 Projection' }
          ]}
          xAxisLabel="Sector"
          yAxisLabel="Impact Score"
          tooltipFormatter={(value) => `${value}`}
        />
      ),
    },
    {
      id: 'investment',
      label: 'Investment Gap',
      content: (
        <BaseBarChart
          data={investmentData}
          xAxisKey="category"
          dataKeys={[
            { key: 'required', name: 'Required Investment' },
            { key: 'current', name: 'Current Investment' }
          ]}
          xAxisLabel="Category"
          yAxisLabel="Investment (Billion USD)"
          tooltipFormatter={(value) => `$${value}B`}
        />
      ),
    },
  ];

  return (
    <BaseTabbedDashboard
      tabs={tabs}
      defaultTab={activeTab}
      height="h-[300px]"
    />
  );
}