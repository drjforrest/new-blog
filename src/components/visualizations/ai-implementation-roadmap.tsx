'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from "@/components/ui/card";

const Chart = dynamic(
  () => import('./charts/AIImplementationRoadmapChart').then((mod) => mod.AIImplementationRoadmapChart),
  { ssr: false }
);

export function AIImplementationRoadmap() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Chart />
      </CardContent>
    </Card>
  );
}
