import React from 'react';

interface Metric {
  label: string;
  value: string;
  trend: string;
  trendColor?: string;
}

interface BaseMetricCardsProps {
  metrics: Metric[];
  columns?: number;
}

export function BaseMetricCards({
  metrics,
  columns = 4,
}: BaseMetricCardsProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-4`}>
      {metrics.map((metric) => (
        <div key={metric.label} className="p-4 bg-surface-muted rounded-lg">
          <div className="text-sm text-content-muted mb-1">{metric.label}</div>
          <div className="text-2xl font-semibold mb-1">{metric.value}</div>
          <div className={`text-sm ${metric.trendColor || 'text-emerald-500'}`}>
            {metric.trend}
          </div>
        </div>
      ))}
    </div>
  );
}