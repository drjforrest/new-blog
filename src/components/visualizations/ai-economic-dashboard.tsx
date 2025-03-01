'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from "@/components/ui/card";

const Chart = dynamic(
  () => import('./charts/AIEconomicDashboardChart').then((mod) => mod.AIEconomicDashboardChart),
  { ssr: false }
);

export const AIEconomicDashboard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Chart />
      </CardContent>
    </Card>
  );
};

export default AIEconomicDashboard;
