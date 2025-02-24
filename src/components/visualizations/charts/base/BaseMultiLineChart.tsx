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

interface DataKey {
  key: string;
  name: string;
  color?: string;
}

interface BaseMultiLineChartProps {
  data: any[];
  dataKeys: DataKey[];
  xAxisKey: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  tooltipFormatter?: (value: any) => string;
  strokeWidth?: number;
}

export function BaseMultiLineChart({
  data,
  dataKeys,
  xAxisKey,
  yAxisLabel,
  xAxisLabel,
  tooltipFormatter,
  strokeWidth = 2,
}: BaseMultiLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
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
        <Legend 
          {...chartDefaults.legendStyle}
          wrapperStyle={{ paddingTop: '20px' }}
        />
        {dataKeys.map((dataKey, index) => (
          <Line
            key={dataKey.key}
            type="monotone"
            dataKey={dataKey.key}
            name={dataKey.name}
            stroke={dataKey.color || chartColors.series[index]}
            strokeWidth={strokeWidth}
            dot={{ fill: dataKey.color || chartColors.series[index] }}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
