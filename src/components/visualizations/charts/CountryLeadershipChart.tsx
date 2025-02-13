'use client';

import React from 'react';
import { BaseInteractiveRadarChart } from './base/BaseInteractiveRadarChart';

const data = [
  {
    name: 'Digital Infrastructure',
    Kenya: 75,
    Rwanda: 82,
    Nigeria: 68,
    Ethiopia: 72,
    Ghana: 70,
  },
  {
    name: 'Policy Framework',
    Kenya: 70,
    Rwanda: 85,
    Nigeria: 65,
    Ethiopia: 60,
    Ghana: 68,
  },
  {
    name: 'Digital Skills',
    Kenya: 72,
    Rwanda: 75,
    Nigeria: 70,
    Ethiopia: 65,
    Ghana: 78,
  },
  {
    name: 'Innovation',
    Kenya: 80,
    Rwanda: 78,
    Nigeria: 75,
    Ethiopia: 62,
    Ghana: 72,
  },
  {
    name: 'Digital Services',
    Kenya: 85,
    Rwanda: 80,
    Nigeria: 72,
    Ethiopia: 68,
    Ghana: 75,
  },
];

const metrics = [
  'Digital Infrastructure',
  'Policy Framework',
  'Digital Skills',
  'Innovation',
  'Digital Services'
];

const countries = ['Kenya', 'Rwanda', 'Nigeria', 'Ethiopia', 'Ghana'];

const customColors = {
  Kenya: '#3B82F6',
  Rwanda: '#10B981',
  Nigeria: '#F59E0B',
  Ethiopia: '#EF4444',
  Ghana: '#8B5CF6',
};

export function CountryLeadershipChart() {
  return (
    <div className="h-[500px] w-full">
      <BaseInteractiveRadarChart
        data={data}
        metrics={metrics}
        countries={countries}
        customColors={customColors}
        tooltipFormatter={(value) => `${value}%`}
      />
    </div>
  );
}