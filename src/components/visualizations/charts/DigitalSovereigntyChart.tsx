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
  tooltipFormatter?: (value: number) => string;
}

export function DigitalSovereigntyChart({ 
  data,
  tooltipFormatter = (value) => `${value}%`
}: DigitalSovereigntyChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="year"
          label={{ value: "Infrastructure Category", position: "bottom" }}
        />
        <YAxis 
          label={{ value: "Percentage", angle: -90, position: "left" }}
        />
        <Tooltip formatter={tooltipFormatter} />
        <Area 
          type="monotone" 
          dataKey="local" 
          stackId="1" 
          stroke="#3B82F6" 
          fill="#3B82F6" 
          name="Local Control"
        />
        <Area 
          type="monotone" 
          dataKey="foreign" 
          stackId="1" 
          stroke="#10B981" 
          fill="#10B981" 
          name="Foreign Dependence"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
