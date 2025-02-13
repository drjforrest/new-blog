'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { chartColors, chartDefaults } from '../../utils/chart-theme';

interface DataKey {
  key: string;
  name: string;
}

interface BaseAreaChartProps {
  data: any[];
  dataKeys: DataKey[];
  xAxisKey: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  tooltipFormatter?: (value: any) => string;
  stacked?: boolean;
}

export function BaseAreaChart({
  data,
  dataKeys,
  xAxisKey,
  yAxisLabel,
  xAxisLabel,
  tooltipFormatter,
  stacked = false,
}: BaseAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray={chartDefaults.gridStyle.strokeDasharray}
          stroke={chartDefaults.gridStyle.stroke}
        />
        <XAxis
          dataKey={xAxisKey}
          label={xAxisLabel ? { value: xAxisLabel, position: 'bottom', offset: -5 } : undefined}
          stroke={chartDefaults.axisStyle.stroke}
          tick={{ fill: chartDefaults.axisStyle.stroke }}
        />
        <YAxis
          label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'left', offset: 0 } : undefined}
          stroke={chartDefaults.axisStyle.stroke}
          tick={{ fill: chartDefaults.axisStyle.stroke }}
        />
        <Tooltip
          contentStyle={chartDefaults.tooltipStyle}
          formatter={tooltipFormatter}
        />
        <Legend {...chartDefaults.legendStyle} />
        {dataKeys.map((dataKey, index) => (
          <Area
            key={dataKey.key}
            type="monotone"
            dataKey={dataKey.key}
            name={dataKey.name}
            stroke={chartColors.series[index]}
            fill={chartColors.series[index]}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}