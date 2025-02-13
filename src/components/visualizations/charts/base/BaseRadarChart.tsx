import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { chartColors, chartDefaults } from '../../utils/chart-theme';

interface DataKey {
  key: string;
  name: string;
}

interface BaseRadarChartProps {
  data: any[];
  dataKeys: DataKey[];
  angleKey: string;
  domain?: [number, number];
  tooltipFormatter?: (value: any) => string;
}

export function BaseRadarChart({
  data,
  dataKeys,
  angleKey,
  domain = [0, 100],
  tooltipFormatter,
}: BaseRadarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data}>
        <PolarGrid
          stroke={chartDefaults.gridStyle.stroke}
        />
        <PolarAngleAxis
          dataKey={angleKey}
          tick={{ fill: chartDefaults.axisStyle.stroke }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={domain}
          tick={{ fill: chartDefaults.axisStyle.stroke }}
        />
        <Tooltip
          contentStyle={chartDefaults.tooltipStyle}
          formatter={tooltipFormatter}
        />
        <Legend {...chartDefaults.legendStyle} />
        {dataKeys.map((dataKey, index) => (
          <Radar
            key={dataKey.key}
            name={dataKey.name}
            dataKey={dataKey.key}
            stroke={chartColors.series[index]}
            fill={chartColors.series[index]}
            fillOpacity={0.6}
          />
        ))}
      </RadarChart>
    </ResponsiveContainer>
  );
}