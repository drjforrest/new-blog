'use client';

import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

interface InfrastructureGapsChartProps {
  data: Array<{
    metric: string;
    urban: number;
    rural: number;
  }>;
}

export function InfrastructureGapsChart({ data }: InfrastructureGapsChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar 
          name="Urban" 
          dataKey="urban" 
          stroke="#3B82F6" 
          fill="#3B82F6" 
          fillOpacity={0.6} 
        />
        <Radar 
          name="Rural" 
          dataKey="rural" 
          stroke="#10B981" 
          fill="#10B981" 
          fillOpacity={0.6} 
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
