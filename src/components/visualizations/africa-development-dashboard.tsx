'use client';

import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(
  () => import('./charts/AfricaDevelopmentDashboardChart').then((mod) => mod.AfricaDevelopmentDashboardChart),
  { ssr: false }
);

interface AfricaDevelopmentDashboardProps {
  activeTab: string;
}

export const AfricaDevelopmentDashboard: React.FC<AfricaDevelopmentDashboardProps> = ({ activeTab }) => {
  // Convert activeTab to chart type
  const getChartType = (tab: string) => {
    switch (tab) {
      case 'digital-access':
        return 'digital-access';
      case 'skills-development':
        return 'skills-development';
      case 'infrastructure':
        return 'infrastructure';
      case 'innovation-index':
        return 'innovation';
      default:
        return 'digital-access';
    }
  };

  return (
    <div className="w-full pt-2">
      <Chart type={getChartType(activeTab)} />
    </div>
  );
};

export default AfricaDevelopmentDashboard;
