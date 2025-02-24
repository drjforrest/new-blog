'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/CountryLeadershipChart').then((mod) => mod.CountryLeadershipChart),
  { ssr: false }
);

export function CountryLeadership() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Digital Transformation Leadership</h3>
      <Chart />
    </Card>
  );
}
