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
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    sector: 'Healthcare',
    current_adoption: 45,
    impact_score: 85,
    roi: 65,
  },
  {
    sector: 'Agriculture',
    current_adoption: 35,
    impact_score: 80,
    roi: 70,
  },
  {
    sector: 'Education',
    current_adoption: 40,
    impact_score: 75,
    roi: 60,
  },
  {
    sector: 'Finance',
    current_adoption: 55,
    impact_score: 70,
    roi: 75,
  },
  {
    sector: 'Manufacturing',
    current_adoption: 30,
    impact_score: 65,
    roi: 55,
  },
];

export function AIUseCasesChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sector" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="current_adoption"
            name="Current Adoption (%)"
            fill="#3B82F6"
          />
          <Bar
            dataKey="impact_score"
            name="Impact Score"
            fill="#10B981"
          />
          <Bar
            dataKey="roi"
            name="ROI Score"
            fill="#F59E0B"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
