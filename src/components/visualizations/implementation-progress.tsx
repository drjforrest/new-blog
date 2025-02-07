'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const progressData = [
  {
    region: 'Eastern Africa',
    infrastructure: 65,
    skills: 58,
    platforms: 72,
    policy: 80
  },
  {
    region: 'Western Africa',
    infrastructure: 60,
    skills: 55,
    platforms: 68,
    policy: 75
  },
  {
    region: 'Southern Africa',
    infrastructure: 70,
    skills: 62,
    platforms: 75,
    policy: 85
  },
  {
    region: 'Central Africa',
    infrastructure: 45,
    skills: 40,
    platforms: 52,
    policy: 60
  },
  {
    region: 'Northern Africa',
    infrastructure: 75,
    skills: 70,
    platforms: 78,
    policy: 88
  }
];

export function ImplementationProgress() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Regional Implementation Progress</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={progressData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="infrastructure" name="Digital Infrastructure" fill="#2563eb" />
            <Bar dataKey="skills" name="Digital Skills" fill="#16a34a" />
            <Bar dataKey="platforms" name="Digital Platforms" fill="#dc2626" />
            <Bar dataKey="policy" name="Policy Framework" fill="#9333ea" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}