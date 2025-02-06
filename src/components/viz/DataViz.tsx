'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { BaseChartProps } from './types';

const charts = {
  AIGrowth: dynamic(() => import('./AIGrowthChart')),
  // Add more chart types as needed
};

export default function DataViz(props: BaseChartProps) {
  const Chart = charts[props.type as keyof typeof charts];

  if (!Chart) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-red-600">Unknown chart type: {props.type}</p>
      </div>
    );
  }

  return <Chart {...props} />;
}