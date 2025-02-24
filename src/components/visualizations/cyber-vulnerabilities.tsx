'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import Link from 'next/link';

const Chart = dynamic(
  () => import('@/components/visualizations/charts/CyberVulnerabilitiesChart').then(mod => mod.CyberVulnerabilitiesChart),
  { ssr: false }
);

const data = [
  {
    sector: 'Financial Services',
    vulnerabilityScore: 75,
    readinessScore: 65,
    incidentRate: 42,
    mitigationLevel: 58
  },
  {
    sector: 'Healthcare',
    vulnerabilityScore: 68,
    readinessScore: 55,
    incidentRate: 35,
    mitigationLevel: 45
  },
  {
    sector: 'Government Services',
    vulnerabilityScore: 72,
    readinessScore: 60,
    incidentRate: 38,
    mitigationLevel: 52
  },
  {
    sector: 'Telecommunications',
    vulnerabilityScore: 70,
    readinessScore: 68,
    incidentRate: 40,
    mitigationLevel: 62
  },
  {
    sector: 'Energy Infrastructure',
    vulnerabilityScore: 78,
    readinessScore: 58,
    incidentRate: 45,
    mitigationLevel: 48
  }
];

function CyberVulnerabilities() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Cybersecurity Risk Assessment by Sector</h3>
        <Link href="/bonus#cybersecurity-methodology" className="text-sm text-primary hover:underline flex items-center gap-1">
          <Info className="w-4 h-4" />
          Full Analysis
        </Link>
      </div>
      
      <div className="text-sm text-content-muted mb-4">
        <p className="font-medium">Key Risk Indicators:</p>
        <ul className="list-disc ml-4 space-y-1">
          <li>Vulnerability Score: Overall risk exposure (0-100)</li>
          <li>Readiness Score: Preparedness level (0-100)</li>
          <li>Incident Rate: Reported security incidents per 1000 systems</li>
          <li>Mitigation Level: Effectiveness of current safeguards (%)</li>
        </ul>
      </div>

      <div className="h-[400px] w-full">
        <Chart 
          data={data} 
          tooltipFormatter={(value, category) => {
            if (category === 'incidentRate') return `${value} per 1000`;
            return `${value}%`;
          }}
        />
      </div>
      
      <div className="mt-4">
        <div className="text-xs text-content-muted">
          Sources: African Union Cybersecurity Report (2024), ITU Regional Cybersecurity Assessment
        </div>
        <div className="text-xs text-content-muted mt-1">
          Note: Scores normalized across sectors. Incident rates based on reported cases in 2023-2024.
          See <Link href="/bonus#cyber-calculation" className="underline">calculation methodology</Link> for details.
        </div>
      </div>
    </Card>
  );
}

export default CyberVulnerabilities;
