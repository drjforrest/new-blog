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
import { CustomTooltip } from './custom-tooltip';
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
  showLabels?: boolean;
  label?: React.ReactNode | ((props: any) => React.ReactNode);
}

export function PieChart({
  data,
  tooltipFormatter,
  labelFormatter,
  innerRadius = 0,
  outerRadius = 80,
  animationDuration = 1500,
  showLabels = true,
  label,
}: PieChartProps) {
  const { theme } = useTheme();
  const colors = getChartColors(theme);

  // Generate colors for segments
  const getSegmentColor = (index: number) => {
    const baseColors = [
      colors.primary,
      colors.accent,
      colors.success,
      colors.neutral,
    ];
    
    const colorIndex = index % baseColors.length;
    const shade = Math.floor(index / baseColors.length);
    const baseColor = baseColors[colorIndex];
    
    if (shade === 0) return baseColor;
    
    // Create lighter/darker shades for additional segments
    const opacity = 1 - (shade * 0.2);
    return `${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
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
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            label={showLabels && (label || {
              fill: colors.foreground + '80',
              fontSize: 12,
            })}
            labelLine={showLabels && {
              stroke: colors.foreground + '40',
              strokeWidth: 1,
            }}
            animationDuration={animationDuration}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || getSegmentColor(index)}
              />
            ))}
          </Pie>
          
          <Tooltip
            content={({ active, payload }) => (
              <CustomTooltip
                active={active}
                payload={payload}
                valueFormatter={tooltipFormatter}
                labelFormatter={labelFormatter}
              />
            )}
          />
          
          <Legend
            wrapperStyle={{
              paddingTop: '20px',
            }}
            formatter={(value, entry) => (
              <span style={{ color: colors.foreground + 'E6' }}>
                {value}
              </span>
            )}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}