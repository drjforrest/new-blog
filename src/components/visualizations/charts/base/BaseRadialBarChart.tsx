import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { chartColors, chartDefaults } from '../../utils/chart-theme';

interface DataItem {
  name: string;
  value: number;
  fill?: string;
}

interface BaseRadialBarChartProps {
  data: DataItem[];
  innerRadius?: string;
  outerRadius?: string;
  barSize?: number;
  tooltipFormatter?: (value: any) => string;
  customColors?: { [key: string]: string };
}

export function BaseRadialBarChart({
  data,
  innerRadius = "20%",
  outerRadius = "80%",
  barSize = 20,
  tooltipFormatter = (value) => `${value}%`,
  customColors,
}: BaseRadialBarChartProps) {
  // Assign colors if not provided
  const coloredData = data.map((item, index) => ({
    ...item,
    fill: item.fill || customColors?.[item.name] || chartColors.series[index % chartColors.series.length],
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        barSize={barSize}
        data={coloredData}
      >
        <RadialBar
          label={{
            position: 'insideStart',
            fill: chartColors.background,
            fontSize: chartDefaults.fontSize,
          }}
          background
          dataKey="value"
        />
        <Tooltip
          contentStyle={chartDefaults.tooltipStyle}
          formatter={tooltipFormatter}
        />
        <Legend
          {...chartDefaults.legendStyle}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}