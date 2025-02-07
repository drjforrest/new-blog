'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CyberVulnerabilitiesChartProps {
  data: Array<{
    sector: string;
    vulnerabilityScore: number;
    readinessScore: number;
    incidentRate: number;
    mitigationLevel: number;
  }>;
  tooltipFormatter: (value: number, category: string) => string;
}

export function CyberVulnerabilitiesChart({ data, tooltipFormatter }: CyberVulnerabilitiesChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip formatter={tooltipFormatter} />
        <Legend />
        <Bar dataKey="vulnerabilityScore" fill="#ff4d4f" name="Vulnerability Score" />
        <Bar dataKey="readinessScore" fill="#52c41a" name="Readiness Score" />
        <Bar dataKey="incidentRate" fill="#1890ff" name="Incident Rate" />
        <Bar dataKey="mitigationLevel" fill="#722ed1" name="Mitigation Level" />
      </BarChart>
    </ResponsiveContainer>
  );
} 