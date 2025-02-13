import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { chartColors, chartDefaults } from '../../utils/chart-theme';

interface BaseLineChartProps {
  data: any[];
  dataKey: string;
  xAxisKey: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  tooltipFormatter?: (value: any) => string;
  name?: string;
}

export function BaseLineChart({
  data,
  dataKey,
  xAxisKey,
  yAxisLabel,
  xAxisLabel,
  tooltipFormatter,
  name,
}: BaseLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={chartColors.primary}
          name={name || dataKey}
          dot={{ fill: chartColors.primary }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}