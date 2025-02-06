'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/DigitalVisionExplorerChart').then((mod) => mod.DigitalVisionExplorerChart),
  { ssr: false }
);

export function DigitalVisionExplorer() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Digital Vision Progress Tracking</h3>
      <Chart />
    </Card>
  );
}
