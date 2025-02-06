'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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

export function DigitalVisionExplorerChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="digital_adoption"
            name="Digital Adoption"
            stroke="#3B82F6"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="policy_implementation"
            name="Policy Implementation"
            stroke="#10B981"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="infrastructure"
            name="Infrastructure"
            stroke="#F59E0B"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="skills"
            name="Digital Skills"
            stroke="#EF4444"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
