import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from '@/components/ui/card';

const data = [
  { name: 'Critical Infrastructure', value: 47 },
  { name: 'Financial Sector', value: 28 },
  { name: 'Government Services', value: 15 },
  { name: 'Education', value: 10 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export function CyberVulnerabilities() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Cybersecurity Attack Distribution</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            <span className="text-sm text-content-muted">{entry.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}