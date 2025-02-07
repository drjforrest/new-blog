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
  ResponsiveContainer
} from 'recharts';

const data = [
  { year: '2019', kenya: 62, nigeria: 58, rwanda: 65, southAfrica: 72 },
  { year: '2020', kenya: 65, nigeria: 60, rwanda: 68, southAfrica: 75 },
  { year: '2021', kenya: 68, nigeria: 63, rwanda: 72, southAfrica: 78 },
  { year: '2022', kenya: 72, nigeria: 65, rwanda: 75, southAfrica: 80 },
  { year: '2023', kenya: 75, nigeria: 68, rwanda: 78, southAfrica: 83 },
];

const chartColors = {
  kenya: '#2563eb',
  nigeria: '#16a34a',
  rwanda: '#dc2626',
  southAfrica: '#9333ea',
};

export function AfricaDevelopmentChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Digital Development Progress</h3>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kenya"
              stroke={chartColors.kenya}
              name="Kenya"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="nigeria"
              stroke={chartColors.nigeria}
              name="Nigeria"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="rwanda"
              stroke={chartColors.rwanda}
              name="Rwanda"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="southAfrica"
              stroke={chartColors.southAfrica}
              name="South Africa"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}