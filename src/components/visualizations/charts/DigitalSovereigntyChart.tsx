'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DigitalSovereigntyChartProps {
  data: Array<{
    year: string;
    local: number;
    foreign: number;
  }>;
}

export function DigitalSovereigntyChart({ data }: DigitalSovereigntyChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="local" 
          stackId="1" 
          stroke="#3B82F6" 
          fill="#3B82F6" 
          name="Local Solutions"
        />
        <Area 
          type="monotone" 
          dataKey="foreign" 
          stackId="1" 
          stroke="#10B981" 
          fill="#10B981" 
          name="Foreign Solutions"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
