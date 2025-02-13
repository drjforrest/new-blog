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
  axis: 'left' | 'right';
}

interface BaseDualAxisBarChartProps {
  data: any[];
  dataKeys: DataKey[];
  xAxisKey: string;
  leftAxisLabel?: string;
  rightAxisLabel?: string;
  xAxisLabel?: string;
  tooltipFormatter?: (value: any, category: string) => string;
}

export function BaseDualAxisBarChart({
  data,
  dataKeys,
  xAxisKey,
  leftAxisLabel,
  rightAxisLabel,
  xAxisLabel,
  tooltipFormatter,
}: BaseDualAxisBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
          yAxisId="left"
          label={leftAxisLabel ? { value: leftAxisLabel, angle: -90, position: 'left', offset: 0 } : undefined}
          stroke={chartDefaults.axisStyle.stroke}
          tick={{ fill: chartDefaults.axisStyle.stroke }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={rightAxisLabel ? { value: rightAxisLabel, angle: 90, position: 'right', offset: 0 } : undefined}
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
            yAxisId={dataKey.axis}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}