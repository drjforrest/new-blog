'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface SectorTransformationChartProps {
  data: Array<{
    sector: string;
    current: number;
    projected: number;
  }>;
}

export function SectorTransformationChart({ data }: SectorTransformationChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="current" fill="#3B82F6" name="Current Adoption %" />
        <Bar dataKey="projected" fill="#10B981" name="2025 Projection %" />
      </BarChart>
    </ResponsiveContainer>
  );
}
