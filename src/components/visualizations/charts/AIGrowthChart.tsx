'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    sector: 'Agriculture',
    current: 15.2,
    projected: 28.4,
  },
  {
    sector: 'Healthcare',
    current: 12.8,
    projected: 24.6,
  },
  {
    sector: 'Financial Services',
    current: 18.5,
    projected: 32.8,
  },
  {
    sector: 'Public Services',
    current: 14.2,
    projected: 26.5,
  },
  {
    sector: 'Education',
    current: 11.6,
    projected: 22.9,
  },
];

export function AIGrowthChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">AI Impact by Sector (% Growth)</h3>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sector" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" name="Current Impact" fill="#2563eb" />
            <Bar dataKey="projected" name="2030 Projection" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}