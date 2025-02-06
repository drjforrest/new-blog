'use client';

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const marketData = [
  { year: 2020, value: 5.2 },
  { year: 2022, value: 8.7 },
  { year: 2024, value: 14.3 },
  { year: 2026, value: 18.9 },
  { year: 2028, value: 20.5 },
  { year: 2030, value: 22.8 },
];

const sectorData = [
  { sector: 'Healthcare', current: 45, projected: 85 },
  { sector: 'Finance', current: 40, projected: 75 },
  { sector: 'Agriculture', current: 35, projected: 70 },
  { sector: 'Education', current: 30, projected: 65 },
  { sector: 'Manufacturing', current: 25, projected: 60 },
];

const investmentData = [
  { category: 'Infrastructure', required: 12.5, current: 5.8 },
  { category: 'Research', required: 8.2, current: 3.4 },
  { category: 'Training', required: 6.7, current: 2.9 },
  { category: 'Policy', required: 4.3, current: 1.8 },
];

interface AIEconomicDashboardChartProps {
  activeTab?: string;
}

export function AIEconomicDashboardChart({ activeTab = 'market' }: AIEconomicDashboardChartProps) {
  const [currentTab, setCurrentTab] = React.useState(activeTab);

  return (
    <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="market">Market Growth</TabsTrigger>
        <TabsTrigger value="sectors">Sector Impact</TabsTrigger>
        <TabsTrigger value="investment">Investment Gap</TabsTrigger>
      </TabsList>

      <div className="mt-6">
        <TabsContent value="market" className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" name="Market Value ($B)" stroke="#3B82F6" />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="sectors" className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sectorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sector" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" name="Current Impact" fill="#3B82F6" />
              <Bar dataKey="projected" name="2030 Projection" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="investment" className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="required" name="Required Investment" fill="#3B82F6" />
              <Bar dataKey="current" name="Current Investment" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </div>
    </Tabs>
  );
}
