'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Core Visualizations
import { AfricaDevelopmentDashboard } from '@/components/visualizations/africa-development-dashboard';
import { AIEconomicDashboard } from '@/components/visualizations/ai-economic-dashboard';
import { AIImplementationRoadmap } from '@/components/visualizations/ai-implementation-roadmap';
import { DigitalVisionExplorer } from '@/components/visualizations/digital-vision-explorer';
import { CountryLeadership } from '@/components/visualizations/country-leadership';
import { CyberVulnerabilities } from '@/components/visualizations/cyber-vulnerabilities';
import { DigitalSovereignty } from '@/components/visualizations/digital-sovereignty';
import { InfrastructureGaps } from '@/components/visualizations/infrastructure-gaps';
import { SectorTransformation } from '@/components/visualizations/sector-transformation';
import { YouthDevelopment } from '@/components/visualizations/youth-development';

export default function BonusContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Interactive Data Dashboards</h1>
        
        <p className="text-xl text-foreground/70 mb-12">
          Explore comprehensive data visualizations that illustrate Africa's digital transformation journey. 
          These interactive dashboards provide deeper insights into various aspects of digital development 
          across the continent.
        </p>

        <Tabs defaultValue="development" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="development">Development Metrics</TabsTrigger>
            <TabsTrigger value="economy">Economic Impact</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="society">Social Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="development">
            <div className="space-y-8">
              <Card className="p-6">
                <AfricaDevelopmentDashboard />
              </Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <DigitalVisionExplorer />
                </Card>
                <Card className="p-6">
                  <CountryLeadership />
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="economy">
            <div className="space-y-8">
              <Card className="p-6">
                <AIEconomicDashboard />
              </Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <SectorTransformation />
                </Card>
                <Card className="p-6">
                  <AIImplementationRoadmap />
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure">
            <div className="space-y-8">
              <Card className="p-6">
                <InfrastructureGaps />
              </Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CyberVulnerabilities />
                </Card>
                <Card className="p-6">
                  <DigitalSovereignty />
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="society">
            <div className="space-y-8">
              <Card className="p-6">
                <YouthDevelopment />
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 pt-8 border-t border-foreground/10">
          <p className="text-sm text-foreground/70">
            These visualizations are based on aggregated data from various sources and are regularly 
            updated to reflect the latest available information. The dashboards provide comprehensive 
            insights into Africa's digital transformation journey across multiple dimensions.
          </p>
        </footer>
      </motion.div>
    </div>
  );
}