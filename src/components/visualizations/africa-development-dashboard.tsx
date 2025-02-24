'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Chart = dynamic(
  () => import('./charts/AfricaDevelopmentDashboardChart').then((mod) => mod.AfricaDevelopmentDashboardChart),
  { ssr: false }
);

function AfricaDevelopmentDashboard() {
  return (
    <div className="w-full">
      <Tabs defaultValue="digital-access" className="w-full">
        <TabsList className="flex w-full items-center justify-center rounded-lg bg-surface-muted/30 p-1 mb-6">
          <TabsTrigger 
            value="digital-access" 
            className="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Digital Access
          </TabsTrigger>
          <TabsTrigger 
            value="skills-development"
            className="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Skills Development
          </TabsTrigger>
          <TabsTrigger 
            value="infrastructure"
            className="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Infrastructure
          </TabsTrigger>
          <TabsTrigger 
            value="innovation"
            className="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Innovation Index
          </TabsTrigger>
        </TabsList>

        <TabsContent value="digital-access">
          <div className="pt-2">
            <Chart type="digital-access" />
          </div>
        </TabsContent>
        <TabsContent value="skills-development">
          <div className="pt-2">
            <Chart type="skills-development" />
          </div>
        </TabsContent>
        <TabsContent value="infrastructure">
          <div className="pt-2">
            <Chart type="infrastructure" />
          </div>
        </TabsContent>
        <TabsContent value="innovation">
          <div className="pt-2">
            <Chart type="innovation" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AfricaDevelopmentDashboard;
