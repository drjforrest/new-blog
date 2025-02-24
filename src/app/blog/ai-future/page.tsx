'use client';

import { Suspense, lazy } from 'react';
import BlogPost from '@/components/blog/BlogPost';
import { Card } from '@/components/ui/card';

// Lazy load visualization components
const AIEconomicPotential = lazy(() => import('@/components/visualizations/ai-economic-potential'));
const EconomicImpact = lazy(() => import('@/components/visualizations/economic-impact'));
const SectorTransformation = lazy(() => import('@/components/visualizations/sector-transformation'));
const SocialDevelopment = lazy(() => import('@/components/visualizations/social-development'));

export default function AIFuture() {
  const content = (
    <div className="prose dark:prose-invert max-w-none">
      <h1>The AI Revolution in Africa: A Path to Transformative Growth</h1>
      
      [Insert lead content here]

      <h2>The Economic Potential to Transform Key Sectors</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <AIEconomicPotential />
        </Card>
      </Suspense>

      <h2>Economic Impact at a Glance</h2>
      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <EconomicImpact />
        </Card>
      </Suspense>

      <h2>Sectoral Transformation: AI's Role in Key Industries</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <SectorTransformation />
        </Card>
      </Suspense>

      <h2>AI for Social Development</h2>
      [Insert content here]

      <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
        <Card className="my-8 p-6">
          <SocialDevelopment />
        </Card>
      </Suspense>

      <h2>From Potential to Reality</h2>
      [Insert content here]

      <hr className="my-8" />

      [Insert footer content here]
    </div>
  );

  return (
    <BlogPost
      title="The AI Revolution in Africa: A Path to Transformative Growth"
      date="2024-12-26"
      category="Artificial Intelligence"
      description="Exploring the unprecedented opportunities and transformative potential of artificial intelligence across African markets, with a focus on key sectors and implementation progress."
      content={content}
      bannerImage="/images/ai-future-banner.png"
    />
  );
}
