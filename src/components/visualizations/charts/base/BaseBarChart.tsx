import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { chartColors, chartDefaults } from '../../utils/chart-theme';

interface DataKey {
  key: string;
  name: string;
}

interface BaseBarChartProps {
  data: any[];
  dataKeys: DataKey[];
  xAxisKey: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  tooltipFormatter?: (value: any) => string;
  layout?: 'vertical' | 'horizontal';
  stacked?: boolean;
}

export function BaseBarChart({
  data,
  dataKeys,
  xAxisKey,
  yAxisLabel,
  xAxisLabel,
  tooltipFormatter,
  layout = 'horizontal',
  stacked = false,
}: BaseBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout={layout}
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
          type={layout === 'horizontal' ? 'category' : 'number'}
          label={xAxisLabel ? { value: xAxisLabel, position: 'bottom', offset: -5 } : undefined}
          stroke={chartDefaults.axisStyle.stroke}
          tick={{ fill: chartDefaults.axisStyle.stroke }}
        />
        <YAxis
          type={layout === 'horizontal' ? 'number' : 'category'}
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
          <Bar
            key={dataKey.key}
            dataKey={dataKey.key}
            name={dataKey.name}
            fill={chartColors.series[index]}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}