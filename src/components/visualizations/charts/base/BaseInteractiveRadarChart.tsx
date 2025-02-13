'use client';

import React, { useState } from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';
import { chartColors, chartDefaults } from '../../utils/chart-theme';

interface ColorMap {
  [key: string]: string;
}

interface BaseInteractiveRadarChartProps {
  data: any[];
  metrics: string[];
  countries: string[];
  domain?: [number, number];
  tooltipFormatter?: (value: any) => string;
  customColors?: ColorMap;
}

export function BaseInteractiveRadarChart({
  data,
  metrics,
  countries,
  domain = [0, 100],
  tooltipFormatter = (value) => `${value}%`,
  customColors,
}: BaseInteractiveRadarChartProps) {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const colors: ColorMap = customColors || countries.reduce<ColorMap>((acc, country, index) => ({
    ...acc,
    [country]: chartColors.series[index % chartColors.series.length]
  }), {});

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid 
          stroke={chartDefaults.gridStyle.stroke}
        />
        <PolarAngleAxis
          dataKey="name"
          tick={{ 
            fill: chartDefaults.axisStyle.stroke,
            fontSize: chartDefaults.fontSize
          }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={domain}
          tick={{ 
            fill: chartDefaults.axisStyle.stroke,
            fontSize: chartDefaults.fontSize
          }}
        />
        
        {countries.map((country) => (
          <Radar
            key={country}
            name={country}
            dataKey={country}
            stroke={colors[country]}
            fill={colors[country]}
            fillOpacity={activeCountry === country ? 0.6 : 0.2}
            strokeWidth={activeCountry === country ? 3 : 2}
            className="transition-all duration-300"
            onMouseEnter={() => setActiveCountry(country)}
            onMouseLeave={() => setActiveCountry(null)}
          />
        ))}
        
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background/95 backdrop-blur-sm border border-foreground/10 rounded-lg p-3 shadow-lg"
                >
                  <p className="font-medium text-foreground mb-2">{label}</p>
                  {payload.map((entry) => (
                    <div
                      key={entry.name}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-foreground/70">{entry.name}:</span>
                      <span className="font-medium text-foreground">
                        {tooltipFormatter(entry.value)}
                      </span>
                    </div>
                  ))}
                </motion.div>
              );
            }
            return null;
          }}
        />
        
        <Legend
          align="right"
          verticalAlign="top"
          content={({ payload }) => {
            if (!payload) return null;
            return (
              <div className="flex flex-wrap gap-4 justify-center mb-4">
                {payload.map((entry) => (
                  <motion.div
                    key={entry.value}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-colors
                              ${activeCountry === entry.value ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
                    onClick={() => setActiveCountry(
                      activeCountry === entry.value ? null : entry.value
                    )}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm text-foreground/80">
                      {entry.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            );
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}