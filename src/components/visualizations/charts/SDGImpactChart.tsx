'use client';

import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const data = [
  {
    category: 'Economic Growth',
    value: 85,
    fullMark: 100,
  },
  {
    category: 'Education',
    value: 78,
    fullMark: 100,
  },
  {
    category: 'Healthcare',
    value: 82,
    fullMark: 100,
  },
  {
    category: 'Gender Equality',
    value: 74,
    fullMark: 100,
  },
  {
    category: 'Innovation',
    value: 90,
    fullMark: 100,
  },
  {
    category: 'Infrastructure',
    value: 76,
    fullMark: 100,
  },
];

export function SDGImpactChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-foreground">AI Impact on SDG Categories</h3>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Impact Score"
              dataKey="value"
              stroke="#2563eb"
              fill="#2563eb"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}