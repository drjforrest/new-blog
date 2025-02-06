'use client';

import React from 'react';
import { BaseChartProps } from './types';

export default function AIGrowthChart({ title, description }: BaseChartProps) {
  return (
    <div className="bg-surface-elevated rounded-lg elevation-2 p-6 animate-fade-in">
      <h3 className="text-heading-sm mb-2 text-content">{title || 'AI Growth Trends'}</h3>
      {description && (
        <p className="text-content-muted text-body-sm mb-4">{description}</p>
      )}
      
      <div className="h-64 bg-surface-muted rounded-md flex items-center justify-center">
        <p className="text-content-subtle">Chart visualization coming soon</p>
      </div>
      
      <div className="mt-6">
        <p className="text-body-sm font-semibold text-content mb-2">Key Insights:</p>
        <ul className="space-y-1">
          <li className="flex items-center text-body-sm text-content-muted">
            <span className="w-2 h-2 rounded-full bg-primary-400 mr-2" />
            45% YoY growth in AI adoption
          </li>
          <li className="flex items-center text-body-sm text-content-muted">
            <span className="w-2 h-2 rounded-full bg-accent-400 mr-2" />
            2.3x increase in AI startups
          </li>
          <li className="flex items-center text-body-sm text-content-muted">
            <span className="w-2 h-2 rounded-full bg-status-success-light mr-2" />
            $1.2B in new investments
          </li>
        </ul>
      </div>
    </div>
  );
}