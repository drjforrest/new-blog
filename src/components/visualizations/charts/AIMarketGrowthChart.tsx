'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface AIMarketGrowthChartProps {
  data: Array<{
    year: string;
    value: number;
  }>;
}

export function AIMarketGrowthChart({ data }: AIMarketGrowthChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#3B82F6" />
      </LineChart>
    </ResponsiveContainer>
  );
}
