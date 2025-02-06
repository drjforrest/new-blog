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

interface YouthDevelopmentChartProps {
  data: Array<{
    age: string;
    percentage: number;
  }>;
  metrics: Array<{
    label: string;
    value: string;
    trend: string;
  }>;
}

export function YouthDevelopmentChart({ data, metrics }: YouthDevelopmentChartProps) {
  return (
    <div className="space-y-8">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="p-4 bg-surface-muted rounded-lg">
            <div className="text-sm text-content-muted mb-1">{metric.label}</div>
            <div className="text-2xl font-semibold mb-1">{metric.value}</div>
            <div className="text-sm text-emerald-500">{metric.trend}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
