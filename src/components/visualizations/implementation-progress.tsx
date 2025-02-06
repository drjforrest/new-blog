import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { LineChart, Line } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { Card } from "@/components/ui/card";

const regionColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const data = [
  {
    region: "East Africa",
    broadband_coverage: 65,
    digital_literacy: 55,
    ai_startup_investment: 70,
    rd_expenditure: 0.8,
    data_protection: 60,
    e_transaction_laws: 75,
    consumer_protection_laws: 50,
    privacy_laws: 55,
    cybercrime_laws: 65,
  },
  {
    region: "West Africa",
    broadband_coverage: 50,
    digital_literacy: 45,
    ai_startup_investment: 60,
    rd_expenditure: 0.6,
    data_protection: 50,
    e_transaction_laws: 60,
    consumer_protection_laws: 40,
    privacy_laws: 50,
    cybercrime_laws: 55,
  },
  {
    region: "Southern Africa",
    broadband_coverage: 80,
    digital_literacy: 65,
    ai_startup_investment: 75,
    rd_expenditure: 0.9,
    data_protection: 70,
    e_transaction_laws: 85,
    consumer_protection_laws: 70,
    privacy_laws: 75,
    cybercrime_laws: 80,
  },
  {
    region: "North Africa",
    broadband_coverage: 75,
    digital_literacy: 70,
    ai_startup_investment: 80,
    rd_expenditure: 1.2,
    data_protection: 65,
    e_transaction_laws: 80,
    consumer_protection_laws: 60,
    privacy_laws: 70,
    cybercrime_laws: 75,
  },
];

// Pie Chart Data
const pieData = data.map((region, index) => ({
  name: region.region,
  value: region.ai_startup_investment,
  color: regionColors[index],
}));

export function ImplementationProgress() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">
        Regional Digital Transformation Progress
      </h3>

      {/* Radar Chart */}
      <div className="h-[400px] w-full">
        <h4 className="text-md font-semibold">
          Core Digital Transformation Metrics
        </h4>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="region" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            {data.map((region, index) => (
              <Radar
                key={region.region}
                name={region.region}
                dataKey="broadband_coverage"
                stroke={regionColors[index]}
                fill={regionColors[index]}
                fillOpacity={0.6}
              />
            ))}
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - E-Commerce Laws */}
      <div className="h-[400px] w-full mt-6">
        <h4 className="text-md font-semibold">
          E-Commerce Legislation Adoption
        </h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="e_transaction_laws"
              fill="#3B82F6"
              name="E-Transaction Laws"
            />
            <Bar
              dataKey="consumer_protection_laws"
              fill="#10B981"
              name="Consumer Protection Laws"
            />
            <Bar dataKey="privacy_laws" fill="#F59E0B" name="Privacy Laws" />
            <Bar
              dataKey="cybercrime_laws"
              fill="#EF4444"
              name="Cybercrime Laws"
            />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart - R&D Expenditure */}
      <div className="h-[400px] w-full mt-6">
        <h4 className="text-md font-semibold">R&D Expenditure Trends</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="region" />
            <YAxis domain={[0, 2]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rd_expenditure"
              stroke="#3B82F6"
              name="R&D Expenditure (% of GDP)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart - AI Startup Investment */}
      <div className="h-[400px] w-full mt-6">
        <h4 className="text-md font-semibold">
          AI Startup Investment Breakdown
        </h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
