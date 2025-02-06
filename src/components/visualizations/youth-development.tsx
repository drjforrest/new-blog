'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/YouthDevelopmentChart').then((mod) => mod.YouthDevelopmentChart),
  { ssr: false }
);

const data = [
  { age: '0-14', percentage: 41 },
  { age: '15-24', percentage: 19 },
  { age: '25-54', percentage: 32 },
  { age: '55-64', percentage: 5 },
  { age: '65+', percentage: 3 },
];

const metrics = [
  { label: 'Digital Literacy Rate', value: '47%', trend: '+12% YoY' },
  { label: 'Tech Education Programs', value: '2,845', trend: '+34% YoY' },
  { label: 'Youth in Tech Startups', value: '185K', trend: '+28% YoY' },
  { label: 'Innovation Hubs', value: '643', trend: '+15% YoY' },
];

export function YouthDevelopment() {
  return (
    <Card className="p-6">
      <div className="space-y-8">
        <h3 className="text-lg font-semibold mb-4">African Youth Demographics & Digital Engagement</h3>
        <Chart data={data} metrics={metrics} />
      </div>
    </Card>
  );
}
