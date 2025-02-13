'use client';

import React from 'react';
import { BaseInteractiveRadarChart } from './base/BaseInteractiveRadarChart';

const data = [
  {
    name: 'Digital Infrastructure',
    Kenya: 78,
    Rwanda: 72,
    Nigeria: 65,
    Ethiopia: 58,
    Ghana: 68,
  },
  {
    name: 'Policy Framework',
    Kenya: 82,
    Rwanda: 88,
    Nigeria: 70,
    Ethiopia: 65,
    Ghana: 75,
  },
  {
    name: 'Digital Skills',
    Kenya: 75,
    Rwanda: 70,
    Nigeria: 72,
    Ethiopia: 60,
    Ghana: 73,
  },
  {
    name: 'Innovation',
    Kenya: 85,
    Rwanda: 78,
    Nigeria: 80,
    Ethiopia: 62,
    Ghana: 76,
  },
  {
    name: 'Digital Services',
    Kenya: 80,
    Rwanda: 75,
    Nigeria: 76,
    Ethiopia: 58,
    Ghana: 72,
  },
];

const COLORS = {
  Kenya: '#4A90E2',    // Blue
  Rwanda: '#2ECC71',   // Green
  Nigeria: '#F1C40F',  // Yellow
  Ethiopia: '#E74C3C', // Red
  Ghana: '#9B59B6',    // Purple
};

const metrics = ['Digital Infrastructure', 'Policy Framework', 'Digital Skills', 'Innovation', 'Digital Services'];
const countries = ['Kenya', 'Rwanda', 'Nigeria', 'Ethiopia', 'Ghana'];

export default function DigitalTransformationLeadership() {
  return (
    <div className="w-full h-full">
      <BaseInteractiveRadarChart
        data={data}
        metrics={metrics}
        countries={countries}
        customColors={COLORS}
      />
    </div>
  );
}