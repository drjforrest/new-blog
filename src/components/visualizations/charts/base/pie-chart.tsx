'use client';

import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { getChartColors } from '@/lib/chart-utils';

interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  tooltipFormatter?: (value: any) => string;
  labelFormatter?: (label: any) => string;
  innerRadius?: number;
  outerRadius?: number;
  animationDuration?: number;
}

export function PieChart({
  data,
  tooltipFormatter,
  labelFormatter,
  innerRadius = 0,
  outerRadius = 80,
  animationDuration = 1500,
}: PieChartProps) {
  const { resolvedTheme: theme } = useTheme();
  const colors = getChartColors(theme as 'light' | 'dark' | 'system' | undefined);

  // Generate colors for segments
  const getSegmentColor = (index: number) => {
    const baseColors = [colors.primary, colors.accent, colors.success];
    return baseColors[index % baseColors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full min-h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || getSegmentColor(index)}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}