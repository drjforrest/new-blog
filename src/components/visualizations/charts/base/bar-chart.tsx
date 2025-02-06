'use client';

import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { useTheme } from 'next-themes';
import { CustomTooltip } from './custom-tooltip';
import { motion } from 'framer-motion';
import { getChartColors } from '@/lib/chart-utils';

interface BarChartProps {
  data: any[];
  bars: Array<{
    dataKey: string;
    name: string;
    color?: string;
    stackId?: string;
  }>;
  xAxisDataKey: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  tooltipFormatter?: (value: any) => string;
  labelFormatter?: (label: any) => string;
  grid?: boolean;
  layout?: 'vertical' | 'horizontal';
  animationDuration?: number;
  colorByValue?: boolean;
}

export function BarChart({
  data,
  bars,
  xAxisDataKey,
  yAxisLabel,
  xAxisLabel,
  tooltipFormatter,
  labelFormatter,
  grid = true,
  layout = 'vertical',
  animationDuration = 1500,
  colorByValue = false,
}: BarChartProps) {
  const { theme } = useTheme();
  const colors = getChartColors(theme);

  // Calculate color scale for colorByValue option
  const getBarColor = (value: number) => {
    if (!colorByValue) return undefined;
    
    const maxValue = Math.max(...data.map(d => 
      Math.max(...bars.map(bar => d[bar.dataKey] || 0))
    ));
    
    const opacity = value / maxValue;
    return `rgba(${colors.primary}, ${0.3 + (opacity * 0.7)})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full min-h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          layout={layout}
          margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
        >
          {grid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={colors.foreground + '20'}
              horizontal={layout === 'vertical'}
              vertical={layout === 'horizontal'}
            />
          )}
          
          <XAxis
            dataKey={layout === 'vertical' ? xAxisDataKey : undefined}
            type={layout === 'vertical' ? 'category' : 'number'}
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
            dataKey={layout === 'horizontal' ? xAxisDataKey : undefined}
            type={layout === 'horizontal' ? 'category' : 'number'}
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
          
          {bars.map((bar, index) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color || colors.primary}
              stackId={bar.stackId}
              animationDuration={animationDuration}
              animationBegin={index * 200}
            >
              {colorByValue && data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry[bar.dataKey])}
                />
              ))}
            </Bar>
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}