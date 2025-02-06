'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  labelFormatter?: (label: string) => string;
  valueFormatter?: (value: number) => string;
  className?: string;
}

export function CustomTooltip({
  active,
  payload,
  label,
  labelFormatter = (label) => label,
  valueFormatter = (value) => value.toString(),
  className = '',
}: CustomTooltipProps) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        bg-background/95 backdrop-blur-sm
        border border-foreground/10
        rounded-lg shadow-lg
        px-4 py-3
        ${className}
      `}
    >
      <p className="text-sm font-medium text-foreground mb-2">
        {labelFormatter(label ?? '')}
      </p>
      <div className="space-y-1">
        {payload.map((entry, index) => (
          <div
            key={`tooltip-item-${index}`}
            className="flex items-center gap-2 text-sm"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-foreground/70">
              {entry.name}:
            </span>
            <span className="font-medium text-foreground">
              {valueFormatter(entry.value)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}