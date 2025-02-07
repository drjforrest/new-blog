'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Chart = dynamic(
  () => import('./charts/AfricaDevelopmentDashboardChart').then((mod) => mod.AfricaDevelopmentDashboardChart),
  { ssr: false }
);

export function AfricaDevelopmentDashboard() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Tabs defaultValue="digital-access" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="digital-access">Digital Access</TabsTrigger>
            <TabsTrigger value="skills-development">Skills Development</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="innovation">Innovation Index</TabsTrigger>
          </TabsList>
          <TabsContent value="digital-access">
            <div className="pt-6">
              <Chart type="digital-access" />
            </div>
          </TabsContent>
          <TabsContent value="skills-development">
            <div className="pt-6">
              <Chart type="skills-development" />
            </div>
          </TabsContent>
          <TabsContent value="infrastructure">
            <div className="pt-6">
              <Chart type="infrastructure" />
            </div>
          </TabsContent>
          <TabsContent value="innovation">
            <div className="pt-6">
              <Chart type="innovation" />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}