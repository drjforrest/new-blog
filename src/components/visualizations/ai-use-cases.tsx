'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

const Chart = dynamic(
  () => import('./charts/AIUseCasesChart').then((mod) => mod.AIUseCasesChart),
  { ssr: false }
);

export function AIUseCases() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">AI Use Cases and Impact</h3>
      <Chart />
    </Card>
  );
}
