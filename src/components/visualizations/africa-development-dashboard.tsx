'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from "@/components/ui/card";

const Chart = dynamic(
  () => import('./charts/AfricaDevelopmentDashboardChart').then((mod) => mod.AfricaDevelopmentDashboardChart),
  { ssr: false }
);

export function AfricaDevelopmentDashboard() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Chart />
      </CardContent>
    </Card>
  );
}
