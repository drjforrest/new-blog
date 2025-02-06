'use client';

import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  {
    name: 'Digital Infrastructure',
    Kenya: 78,
    Rwanda: 72,
    Nigeria: 65,
    Ethiopia: 58,
    Ghana: 68,
  },
  {
    name: 'Policy Framework',
    Kenya: 82,
    Rwanda: 88,
    Nigeria: 70,
    Ethiopia: 65,
    Ghana: 75,
  },
  {
    name: 'Digital Skills',
    Kenya: 75,
    Rwanda: 70,
    Nigeria: 72,
    Ethiopia: 60,
    Ghana: 73,
  },
  {
    name: 'Innovation',
    Kenya: 85,
    Rwanda: 78,
    Nigeria: 80,
    Ethiopia: 62,
    Ghana: 76,
  },
  {
    name: 'Digital Services',
    Kenya: 80,
    Rwanda: 75,
    Nigeria: 76,
    Ethiopia: 58,
    Ghana: 72,
  },
];

const COLORS = {
  Kenya: '#4A90E2',    // Blue
  Rwanda: '#2ECC71',   // Green
  Nigeria: '#F1C40F',  // Yellow
  Ethiopia: '#E74C3C', // Red
  Ghana: '#9B59B6',    // Purple
};

export default function DigitalTransformationLeadership() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid className="text-foreground/20" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: 'currentColor', fontSize: 12 }}
            className="text-foreground/60"
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: 'currentColor', fontSize: 12 }}
            className="text-foreground/60"
          />
          
          {Object.keys(COLORS).map((country) => (
            <Radar
              key={country}
              name={country}
              dataKey={country}
              stroke={COLORS[country]}
              fill={COLORS[country]}
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
                          {entry.value}%
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
            content={({ payload }) => (
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
            )}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}