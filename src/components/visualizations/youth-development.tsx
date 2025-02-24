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
  { label: 'Youth in Workforce (Under 30)', value: '65%', trend: '+5% YoY' },
  { label: 'Tech Startup Founders Under 30', value: '72K', trend: '+30% YoY' },
  { label: 'Youth Participation in Online Learning', value: '4.2M', trend: '+40% YoY' },
  { label: 'Projected Workforce Growth by 2040', value: '+500M', trend: 'Fastest Globally' },
];

export const YouthDevelopment: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="space-y-8">
        <h3 className="text-lg font-semibold mb-4">Africa's Young Population: A Digital-First Workforce</h3>
        <p className="text-sm text-muted-foreground">
          With <strong>60% of its population under 25</strong>, Africa has the world's youngest workforce, presenting an unprecedented opportunity for digital transformation and innovation.
        </p>
        <Chart data={data} metrics={metrics} />
      </div>
    </Card>
  );
};

export default YouthDevelopment;
