'use client';

import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const data = [
  {
    name: 'Infrastructure Vulnerability',
    value: 85,
    fill: '#2563eb'
  },
  {
    name: 'Data Privacy Risks',
    value: 75,
    fill: '#16a34a'
  },
  {
    name: 'Economic Impact',
    value: 65,
    fill: '#dc2626'
  },
  {
    name: 'System Breaches',
    value: 55,
    fill: '#9333ea'
  }
];

export function CyberRiskChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Cybersecurity Risk Levels</h3>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            cx="50%" 
            cy="50%" 
            innerRadius="20%" 
            outerRadius="80%" 
            barSize={20} 
            data={data}
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="value"
            />
            <Tooltip />
            <Legend 
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}