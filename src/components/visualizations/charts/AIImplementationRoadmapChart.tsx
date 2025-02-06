'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const infrastructureData = [
  { name: 'Cloud Computing', priority: 35, progress: 42, color: '#8884d8' },
  { name: 'Data Centers', priority: 25, progress: 38, color: '#82ca9d' },
  { name: 'Network Coverage', priority: 20, progress: 45, color: '#ffc658' },
  { name: 'Edge Computing', priority: 20, progress: 28, color: '#ff7300' }
];

const talentData = [
  { name: 'University Programs', priority: 30, progress: 55, color: '#8884d8' },
  { name: 'Professional Training', priority: 25, progress: 48, color: '#82ca9d' },
  { name: 'Research Centers', priority: 25, progress: 35, color: '#ffc658' },
  { name: 'Industry Partnerships', priority: 20, progress: 42, color: '#ff7300' }
];

const policyData = [
  { name: 'Data Protection', priority: 30, progress: 62, color: '#8884d8' },
  { name: 'AI Ethics', priority: 25, progress: 45, color: '#82ca9d' },
  { name: 'Cross-border Data', priority: 25, progress: 38, color: '#ffc658' },
  { name: 'IP Rights', priority: 20, progress: 52, color: '#ff7300' }
];

interface AIImplementationRoadmapChartProps {
  activeTab?: string;
}

export function AIImplementationRoadmapChart({ activeTab = 'infrastructure' }: AIImplementationRoadmapChartProps) {
  const [currentTab, setCurrentTab] = React.useState(activeTab);

  const getData = () => {
    switch (currentTab) {
      case 'infrastructure':
        return infrastructureData;
      case 'talent':
        return talentData;
      case 'policy':
        return policyData;
      default:
        return infrastructureData;
    }
  };

  const getDescription = () => {
    switch (currentTab) {
      case 'infrastructure':
        return "Key infrastructure components and their implementation status";
      case 'talent':
        return "Progress in developing AI talent and capabilities";
      case 'policy':
        return "Status of policy and regulatory framework development";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="talent">Talent Development</TabsTrigger>
          <TabsTrigger value="policy">Policy Framework</TabsTrigger>
        </TabsList>

        <div className="mt-4">
          <p className="text-content-muted mb-6">{getDescription()}</p>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Progress Bar Chart */}
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getData()}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="progress" name="Progress %" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Priority Bar Chart */}
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getData()}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="priority" name="Priority %" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
