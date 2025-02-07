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

interface AIImplementationRoadmapChartProps {
  data: Array<{
    phase: string;
    progress: number;
    investment: number;
    timeframe: string;
    completion: string;
  }>;
  tooltipFormatter: (value: number, category: string) => string;
}

export function AIImplementationRoadmapChart({ 
  data, 
  tooltipFormatter 
}: AIImplementationRoadmapChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="phase"
          label={{ value: "Implementation Phase", position: "bottom" }}
        />
        <YAxis 
          yAxisId="left"
          label={{ value: "Progress (%)", angle: -90, position: "left" }}
        />
        <YAxis 
          yAxisId="right"
          orientation="right"
          label={{ value: "Investment (Billion USD)", angle: 90, position: "right" }}
        />
        <Tooltip formatter={tooltipFormatter} />
        <Legend />
        <Bar 
          dataKey="progress" 
          fill="#3B82F6" 
          name="Progress" 
          yAxisId="left"
        />
        <Bar 
          dataKey="investment" 
          fill="#10B981" 
          name="Investment" 
          yAxisId="right"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
