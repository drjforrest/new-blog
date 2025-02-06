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

interface AIEconomicPotentialChartProps {
  data: Array<{
    year: string;
    directImpact: number;
    indirectImpact: number;
    inducedImpact: number;
  }>;
}

export function AIEconomicPotentialChart({ data }: AIEconomicPotentialChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="directImpact" 
          stackId="1" 
          stroke="#3B82F6" 
          fill="#3B82F6" 
          name="Direct Impact ($ Trillion)"
        />
        <Area 
          type="monotone" 
          dataKey="indirectImpact" 
          stackId="1" 
          stroke="#10B981" 
          fill="#10B981" 
          name="Indirect Impact ($ Trillion)"
        />
        <Area 
          type="monotone" 
          dataKey="inducedImpact" 
          stackId="1" 
          stroke="#F59E0B" 
          fill="#F59E0B" 
          name="Induced Impact ($ Trillion)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
