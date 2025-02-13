'use client';

import React from 'react';
import { BaseBarChart } from './base/BaseBarChart';

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

export function CyberVulnerabilitiesChart({ 
  data,
  tooltipFormatter 
}: CyberVulnerabilitiesChartProps) {
  // Create a wrapper function that matches the expected signature
  const formatTooltip = (value: any) => {
    // Extract category from the payload
    const category = value.dataKey;
    return tooltipFormatter(value, category);
  };

  return (
    <BaseBarChart
      data={data}
      dataKeys={[
        { key: 'vulnerabilityScore', name: 'Vulnerability Score' },
        { key: 'readinessScore', name: 'Readiness Score' },
        { key: 'incidentRate', name: 'Incident Rate' },
        { key: 'mitigationLevel', name: 'Mitigation Level' }
      ]}
      xAxisKey="sector"
      xAxisLabel="Sector"
      yAxisLabel="Score"
      tooltipFormatter={formatTooltip}
    />
  );
}