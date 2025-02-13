'use client';

import React from 'react';
import { BaseMultiLineChart } from './base/BaseMultiLineChart';

interface ChartProps {
  type: 'digital-access' | 'skills-development' | 'infrastructure' | 'innovation';
}

const digitalAccessData = [
  { year: '2019', kenya: 85, nigeria: 78, rwanda: 82, southAfrica: 89 },
  { year: '2020', kenya: 87, nigeria: 80, rwanda: 85, southAfrica: 90 },
  { year: '2021', kenya: 89, nigeria: 83, rwanda: 88, southAfrica: 92 },
  { year: '2022', kenya: 91, nigeria: 85, rwanda: 90, southAfrica: 93 },
  { year: '2023', kenya: 93, nigeria: 87, rwanda: 92, southAfrica: 95 },
];

const skillsData = [
  { year: '2019', kenya: 45, nigeria: 42, rwanda: 48, southAfrica: 52 },
  { year: '2020', kenya: 48, nigeria: 45, rwanda: 52, southAfrica: 55 },
  { year: '2021', kenya: 52, nigeria: 48, rwanda: 55, southAfrica: 58 },
  { year: '2022', kenya: 55, nigeria: 52, rwanda: 58, southAfrica: 62 },
  { year: '2023', kenya: 58, nigeria: 55, rwanda: 62, southAfrica: 65 },
];

const infrastructureData = [
  { year: '2019', kenya: 62, nigeria: 58, rwanda: 65, southAfrica: 72 },
  { year: '2020', kenya: 65, nigeria: 60, rwanda: 68, southAfrica: 75 },
  { year: '2021', kenya: 68, nigeria: 63, rwanda: 72, southAfrica: 78 },
  { year: '2022', kenya: 72, nigeria: 65, rwanda: 75, southAfrica: 80 },
  { year: '2023', kenya: 75, nigeria: 68, rwanda: 78, southAfrica: 83 },
];

const innovationData = [
  { year: '2019', kenya: 35, nigeria: 32, rwanda: 38, southAfrica: 42 },
  { year: '2020', kenya: 38, nigeria: 35, rwanda: 42, southAfrica: 45 },
  { year: '2021', kenya: 42, nigeria: 38, rwanda: 45, southAfrica: 48 },
  { year: '2022', kenya: 45, nigeria: 42, rwanda: 48, southAfrica: 52 },
  { year: '2023', kenya: 48, nigeria: 45, rwanda: 52, southAfrica: 55 },
];

const chartColors = {
  kenya: '#2563eb',      // Deep blue
  nigeria: '#16a34a',    // Green
  rwanda: '#dc2626',     // Red
  southAfrica: '#9333ea', // Purple
};

const dataKeys = [
  { key: 'kenya', name: 'Kenya', color: chartColors.kenya },
  { key: 'nigeria', name: 'Nigeria', color: chartColors.nigeria },
  { key: 'rwanda', name: 'Rwanda', color: chartColors.rwanda },
  { key: 'southAfrica', name: 'South Africa', color: chartColors.southAfrica },
];

export function AfricaDevelopmentDashboardChart({ type }: ChartProps) {
  const getData = () => {
    switch (type) {
      case 'digital-access':
        return { data: digitalAccessData, title: 'Digital Access Index' };
      case 'skills-development':
        return { data: skillsData, title: 'Digital Skills Development Score' };
      case 'infrastructure':
        return { data: infrastructureData, title: 'Digital Infrastructure Coverage (%)' };
      case 'innovation':
        return { data: innovationData, title: 'Digital Innovation Index' };
      default:
        return { data: digitalAccessData, title: 'Digital Access Index' };
    }
  };

  const { data, title } = getData();

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="w-full h-[400px]">
        <BaseMultiLineChart
          data={data}
          xAxisKey="year"
          dataKeys={dataKeys}
          xAxisLabel="Year"
          yAxisLabel={title}
          tooltipFormatter={(value) => `${value}%`}
          strokeWidth={2}
        />
      </div>
    </div>
  );
}