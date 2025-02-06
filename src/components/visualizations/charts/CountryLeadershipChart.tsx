'use client';

import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    metric: 'Digital Infrastructure',
    Kenya: 75,
    Rwanda: 82,
    Nigeria: 68,
    Ethiopia: 72,
    Ghana: 70,
  },
  {
    metric: 'Policy Framework',
    Kenya: 70,
    Rwanda: 85,
    Nigeria: 65,
    Ethiopia: 60,
    Ghana: 68,
  },
  {
    metric: 'Digital Skills',
    Kenya: 72,
    Rwanda: 75,
    Nigeria: 70,
    Ethiopia: 65,
    Ghana: 78,
  },
  {
    metric: 'Innovation',
    Kenya: 80,
    Rwanda: 78,
    Nigeria: 75,
    Ethiopia: 62,
    Ghana: 72,
  },
  {
    metric: 'Digital Services',
    Kenya: 85,
    Rwanda: 80,
    Nigeria: 72,
    Ethiopia: 68,
    Ghana: 75,
  },
];

export function CountryLeadershipChart() {
  return (
    <div className="h-[500px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Kenya"
            dataKey="Kenya"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.6}
          />
          <Radar
            name="Rwanda"
            dataKey="Rwanda"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.6}
          />
          <Radar
            name="Nigeria"
            dataKey="Nigeria"
            stroke="#F59E0B"
            fill="#F59E0B"
            fillOpacity={0.6}
          />
          <Radar
            name="Ethiopia"
            dataKey="Ethiopia"
            stroke="#EF4444"
            fill="#EF4444"
            fillOpacity={0.6}
          />
          <Radar
            name="Ghana"
            dataKey="Ghana"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
