'use client';

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui/card';

const implementationData = [
  {
    year: 2015,
    infrastructure: 25,
    skills: 30,
    innovation: 20,
    policy: 35,
    ai_adoption: 10,
    broadband_expansion: 15,
  },
  {
    year: 2017,
    infrastructure: 35,
    skills: 40,
    innovation: 32,
    policy: 45,
    ai_adoption: 18,
    broadband_expansion: 25,
  },
  {
    year: 2019,
    infrastructure: 48,
    skills: 52,
    innovation: 45,
    policy: 58,
    ai_adoption: 30,
    broadband_expansion: 40,
  },
  {
    year: 2021,
    infrastructure: 62,
    skills: 65,
    innovation: 58,
    policy: 72,
    ai_adoption: 50,
    broadband_expansion: 60,
  },
  {
    year: 2023,
    infrastructure: 75,
    skills: 78,
    innovation: 70,
    policy: 85,
    ai_adoption: 70,
    broadband_expansion: 80,
  },
];

const regionalProgress = [
  { region: "East Africa", progress: 72, target: 85 },
  { region: "West Africa", progress: 68, target: 85 },
  { region: "North Africa", progress: 75, target: 85 },
  { region: "Southern Africa", progress: 70, target: 85 },
  { region: "Central Africa", progress: 58, target: 85 },
];

const ecommerceLegislation = [
  {
    region: "East Africa",
    e_transactions: 75,
    consumer_protection: 50,
    privacy: 55,
    cybercrime: 65,
  },
  {
    region: "West Africa",
    e_transactions: 60,
    consumer_protection: 40,
    privacy: 50,
    cybercrime: 55,
  },
  {
    region: "North Africa",
    e_transactions: 80,
    consumer_protection: 60,
    privacy: 70,
    cybercrime: 75,
  },
  {
    region: "Southern Africa",
    e_transactions: 85,
    consumer_protection: 70,
    privacy: 75,
    cybercrime: 80,
  },
  {
    region: "Central Africa",
    e_transactions: 50,
    consumer_protection: 30,
    privacy: 40,
    cybercrime: 45,
  },
];

const aiInvestment = [
  { name: "East Africa", value: 70, color: "#3B82F6" },
  { name: "West Africa", value: 60, color: "#10B981" },
  { name: "North Africa", value: 80, color: "#F59E0B" },
  { name: "Southern Africa", value: 75, color: "#EF4444" },
  { name: "Central Africa", value: 50, color: "#8B5CF6" },
];

export function AfricaDevelopmentDashboardChart() {
  return (
    <div className="space-y-8">
      {/* Implementation Progress Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Implementation Progress by Year</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={implementationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="infrastructure" stroke="#3B82F6" name="Infrastructure" />
              <Line type="monotone" dataKey="skills" stroke="#10B981" name="Skills & Capacity" />
              <Line type="monotone" dataKey="innovation" stroke="#F59E0B" name="Innovation" />
              <Line type="monotone" dataKey="policy" stroke="#EF4444" name="Policy Framework" />
              <Line type="monotone" dataKey="ai_adoption" stroke="#8B5CF6" name="AI Adoption" />
              <Line type="monotone" dataKey="broadband_expansion" stroke="#F472B6" name="Broadband" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Regional Progress Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Regional Implementation Progress</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regionalProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="progress" fill="#3B82F6" name="Current Progress" />
              <Bar dataKey="target" fill="#10B981" name="2025 Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* E-Commerce Legislation */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">E-Commerce Legislation Adoption</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ecommerceLegislation}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="e_transactions" fill="#3B82F6" name="E-Transaction Laws" />
              <Bar dataKey="consumer_protection" fill="#10B981" name="Consumer Protection" />
              <Bar dataKey="privacy" fill="#F59E0B" name="Privacy Laws" />
              <Bar dataKey="cybercrime" fill="#EF4444" name="Cybercrime Laws" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* AI Investment Distribution */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">AI Startup Investment Distribution</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={aiInvestment}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {aiInvestment.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
