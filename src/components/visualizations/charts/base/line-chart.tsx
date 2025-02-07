'use client';

import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from 'next-themes';
import { CustomTooltip } from './custom-tooltip';
import { motion } from 'framer-motion';
import { getChartColors } from '@/lib/chart-utils';

interface LineChartProps {
  data: any[];
  lines: Array<{
    dataKey: string;
    name: string;
    color?: string;
    strokeWidth?: number;
  }>;
  xAxisDataKey: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  tooltipFormatter?: (value: any) => string;
  labelFormatter?: (label: any) => string;
  grid?: boolean;
  animationDuration?: number;
}

export function LineChart({
  data,
  lines,
  xAxisDataKey,
  yAxisLabel,
  xAxisLabel,
  tooltipFormatter,
  labelFormatter,
  grid = true,
  animationDuration = 1500,
}: LineChartProps) {
  const { resolvedTheme: theme } = useTheme();
  const colors = getChartColors(theme as 'light' | 'dark' | 'system' | undefined);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full min-h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
        >
          {grid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={colors.foreground + '20'}
              vertical={false}
            />
          )}
          
          <XAxis
            dataKey={xAxisDataKey}
            stroke={colors.foreground + '60'}
            tick={{ fill: colors.foreground + '80' }}
            tickLine={{ stroke: colors.foreground + '40' }}
            label={xAxisLabel ? {
              value: xAxisLabel,
              position: 'bottom',
              offset: 20,
              fill: colors.foreground + '80'
            } : undefined}
          />
          
          <YAxis
            stroke={colors.foreground + '60'}
            tick={{ fill: colors.foreground + '80' }}
            tickLine={{ stroke: colors.foreground + '40' }}
            label={yAxisLabel ? {
              value: yAxisLabel,
              angle: -90,
              position: 'insideLeft',
              offset: -25,
              fill: colors.foreground + '80'
            } : undefined}
          />
          
          <Tooltip
            content={({ active, payload, label }) => (
              <CustomTooltip
                active={active}
                payload={payload}
                label={label}
                valueFormatter={tooltipFormatter}
                labelFormatter={labelFormatter}
              />
            )}
          />
          
          <Legend
            wrapperStyle={{
              paddingTop: '20px',
            }}
          />
          
          {lines.map((line, index) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color || colors.primary}
              strokeWidth={line.strokeWidth || 2}
              dot={false}
              activeDot={{
                r: 6,
                fill: colors.background,
                stroke: line.color || colors.primary,
                strokeWidth: 2,
              }}
              animationDuration={animationDuration}
              animationBegin={index * 200}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}