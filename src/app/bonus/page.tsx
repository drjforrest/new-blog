'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Lazy load visualization components
const AfricaDevelopmentDashboard = React.lazy(() => import('@/components/visualizations/africa-development-dashboard'));
const AIEconomicDashboard = React.lazy(() => import('@/components/visualizations/ai-economic-dashboard'));
const DigitalVisionExplorer = React.lazy(() => import('@/components/visualizations/digital-vision-explorer'));

export default function InteractiveDashboards() {
  const [activeTab, setActiveTab] = React.useState('development');
  const [activeSubTab, setActiveSubTab] = React.useState('digital-access');

  return (
    <div className="min-h-screen bg-background py-12">
      {/* Title Section - More engaging but not full hero */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-success to-primary bg-clip-text text-transparent">
            Interactive Data Dashboards
          </h1>
          <p className="text-xl text-foreground/70">
            Explore comprehensive data visualizations that illustrate Africa's digital transformation journey. These interactive dashboards
            provide deeper insights into various aspects of digital development across the continent.
          </p>
        </div>
      </div>

      {/* Data Sources Section - More prominent */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto bg-muted/5 rounded-xl p-6 border border-primary/10">
          <h2 className="font-semibold text-lg mb-4 text-primary">Data Sources:</h2>
          <ul className="space-y-2 text-foreground/70">
            <li>• African Union Digital Transformation Strategy (2020-2030)</li>
            <li>• ITU Digital Development Dashboard for Africa</li>
            <li>• World Bank Digital Economy for Africa Initiative</li>
            <li>• GSMA Mobile Economy Report 2024</li>
            <li>• African Development Bank Digital Economy Index</li>
          </ul>
          <p className="mt-4 text-sm text-foreground/60 italic">
            Note: All visualizations are based on the latest available data as of 2024. Some metrics are normalized for comparison purposes.
          </p>
        </div>
      </div>

      {/* Main Tabs - More prominent and interactive */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto flex gap-4 overflow-x-auto pb-2">
          <button 
            onClick={() => setActiveTab('development')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap
              ${activeTab === 'development' ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
          >
            Development Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('economy')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap
              ${activeTab === 'economy' ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
          >
            Economic Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('vision')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap
              ${activeTab === 'vision' ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
          >
            Digital Vision
          </button>
        </div>
      </div>

      {/* Sub Tabs - More visually distinct and interactive */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 border-b border-primary/10">
            {['digital-access', 'skills-development', 'infrastructure', 'innovation-index'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`px-4 py-3 font-medium relative hover:text-primary transition-colors group
                  ${activeSubTab === tab ? 'text-primary' : 'text-foreground/60'}`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-transform origin-left
                  ${activeSubTab === tab ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <React.Suspense fallback={<div className="animate-pulse h-64 bg-surface-muted rounded-lg" />}>
            <Card className="p-6">
              {activeTab === 'development' && <AfricaDevelopmentDashboard />}
              {activeTab === 'economy' && <AIEconomicDashboard />}
              {activeTab === 'vision' && <DigitalVisionExplorer />}
            </Card>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}
