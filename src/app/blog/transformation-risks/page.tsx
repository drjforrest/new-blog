'use client';

import { Suspense, lazy } from 'react';
import BlogPost from '@/components/blog/BlogPost';
import { Card } from '@/components/ui/card';

// Lazy load visualization components
const RiskCategories = lazy(() => import('@/components/visualizations/risk-categories'));
const CyberVulnerabilities = lazy(() => import('@/components/visualizations/cyber-vulnerabilities'));
const InfrastructureGaps = lazy(() => import('@/components/visualizations/infrastructure-gaps'));
const DigitalSovereignty = lazy(() => import('@/components/visualizations/digital-sovereignty'));
const MitigationStrategies = lazy(() => import('@/components/visualizations/mitigation-strategies'));

export default function TransformationRisks() {
  const content = (
    <div className="prose dark:prose-invert max-w-none">
      <h1>The Hidden Costs of Africa's AI Revolution: Navigating Digital Transformation Risks</h1>
      
      [Insert lead content here]

      <h2>Risk Categories: A Comprehensive Overview</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <RiskCategories />
        </Card>
      </Suspense>

      <h2>Cybersecurity and Data Governance</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <CyberVulnerabilities />
        </Card>
      </Suspense>

      <h2>Infrastructure Gaps: A Persistent Urban-Rural Divide</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <InfrastructureGaps />
        </Card>
      </Suspense>

      <h2>Digital Sovereignty: Local vs. Foreign Control</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <DigitalSovereignty />
        </Card>
      </Suspense>

      <h2>Mitigation Strategies: A Roadmap for Resilient AI Development</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <MitigationStrategies />
        </Card>
      </Suspense>

      <h2>Building Digital Resilience</h2>
      [Insert content here]

      <hr className="my-8" />

      [Insert footer content here]
    </div>
  );

  return (
    <BlogPost
      title="The Hidden Costs of Africa's AI Revolution: Navigating Digital Transformation Risks"
      date="2024-12-26"
      category="Digital Transformation"
      description="Exploring the critical challenges and potential pitfalls of Africa's digital transformation while highlighting paths toward sustainable, equitable progress."
      content={content}
      bannerImage="/images/transformation-risks-banner.png"
    />
  );
}
