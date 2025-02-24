'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Lazy load visualization components
const AfricaDevelopmentDashboard = React.lazy(() => import('@/components/visualizations/africa-development-dashboard'));
const AIEconomicDashboard = React.lazy(() => import('@/components/visualizations/ai-economic-dashboard'));
const DigitalVisionExplorer = React.lazy(() => import('@/components/visualizations/digital-vision-explorer'));

export default function BonusContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Interactive Data Dashboards</h1>
        
        <p className="text-xl text-foreground/70 mb-6">
          Explore comprehensive data visualizations that illustrate Africa's digital transformation journey. 
          These interactive dashboards provide deeper insights into various aspects of digital development 
          across the continent.
        </p>

        <div className="text-sm text-foreground/70 mb-12 space-y-2">
          <p>
            <strong>Data Sources:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>African Union Digital Transformation Strategy (2020-2030)</li>
            <li>ITU Digital Development Dashboard for Africa</li>
            <li>World Bank Digital Economy for Africa Initiative</li>
            <li>GSMA Mobile Economy Report 2024</li>
            <li>African Development Bank Digital Economy Index</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> All visualizations are based on the latest available data as of 2024. 
            Some metrics are normalized for comparison purposes.
          </p>
        </div>

        <Tabs defaultValue="development" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 bg-primary/5 rounded-2xl p-2">
            <TabsTrigger 
              value="development" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3"
            >
              Development Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="economy"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3"
            >
              Economic Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="vision"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3"
            >
              Digital Vision
            </TabsTrigger>
          </TabsList>

          <TabsContent value="development">
            <div className="space-y-8">
              <React.Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
                <Card className="p-6">
                  <AfricaDevelopmentDashboard />
                </Card>
              </React.Suspense>
            </div>
          </TabsContent>

          <TabsContent value="economy">
            <div className="space-y-8">
              <React.Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
                <Card className="p-6">
                  <AIEconomicDashboard />
                </Card>
              </React.Suspense>
            </div>
          </TabsContent>

          <TabsContent value="vision">
            <div className="space-y-8">
              <React.Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
                <Card className="p-6">
                  <DigitalVisionExplorer />
                </Card>
              </React.Suspense>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 pt-8 border-t border-foreground/10">
          <p className="text-sm text-foreground/70">
            Methodology: The data presented in these dashboards is aggregated from multiple authoritative sources 
            and normalized for comparison. Some metrics are composite indices calculated using weighted averages 
            of multiple indicators. All visualizations are updated quarterly to reflect the latest available data.
          </p>
        </footer>
      </motion.div>
    </div>
  );
}
