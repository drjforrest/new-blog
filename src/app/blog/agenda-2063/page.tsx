'use client';

import { Suspense, lazy } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Lazy load visualization components
const StrategyFramework = lazy(() => import('@/components/visualizations/strategy-framework'));
const PolicyRecommendations = lazy(() => import('@/components/visualizations/policy-recommendations'));
const StrategicEnablers = lazy(() => import('@/components/visualizations/strategic-enablers'));
const TechnologyPillars = lazy(() => import('@/components/visualizations/technology-pillars'));
const ImplementationProgress = lazy(() => import('@/components/visualizations/implementation-progress'));

// Loading fallback component
function VisualizationLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-primary/5 rounded-lg"></div>
    </div>
  );
}

export default function Agenda2063() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Agenda 2063: The Digital Vision</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead text-xl text-foreground/80">
            Africa's Agenda 2063 represents a transformative vision for the continent's digital future.
            This comprehensive framework aims to harness technology and innovation to drive sustainable development,
            economic growth, and social progress across the African continent.
          </p>

          <section className="my-12">
            <h2>The Digital Transformation Strategy</h2>
            <p>
              The Digital Transformation Strategy for Africa (2020-2030) is a key component of Agenda 2063,
              focusing on leveraging digital technologies and innovation to transform African societies and economies.
              The strategy aims to:
            </p>
            <ul>
              <li>Create a Digital Single Market by 2030</li>
              <li>Ensure universal digital access and literacy</li>
              <li>Build robust digital infrastructure</li>
              <li>Foster innovation and entrepreneurship</li>
            </ul>
          </section>

          <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
            <Card className="my-8 p-6">
              <StrategyFramework />
            </Card>
          </Suspense>

          <section className="my-12">
            <h2>Policy Framework and Implementation</h2>
            <p>
              The success of Agenda 2063's digital vision relies on comprehensive policy frameworks
              and effective implementation strategies across multiple domains:
            </p>
            
            <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
              <Card className="my-8 p-6">
                <PolicyRecommendations />
              </Card>
            </Suspense>
          </section>

          <section className="my-12">
            <h2>Strategic Enablers</h2>
            <p>
              Key enablers have been identified to support the digital transformation journey:
            </p>
            
            <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
              <Card className="my-8 p-6">
                <StrategicEnablers />
              </Card>
            </Suspense>
          </section>

          <section className="my-12">
            <h2>Technology Pillars</h2>
            <p>
              The digital transformation strategy is built on several key technology pillars:
            </p>
            
            <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
              <Card className="my-8 p-6">
                <TechnologyPillars />
              </Card>
            </Suspense>
          </section>

          <section className="my-12">
            <h2>Progress and Challenges</h2>
            <p>
              While significant progress has been made in implementing Agenda 2063's digital vision,
              several challenges remain:
            </p>
            
            <Suspense fallback={<div className="animate-pulse h-64 bg-primary/5 rounded-lg" />}>
              <Card className="my-8 p-6">
                <ImplementationProgress />
              </Card>
            </Suspense>
          </section>
        </div>

        <nav className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          <Link 
            href="/african-digital-development"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Series
          </Link>
          <Link 
            href="/blog/ai-future"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            Next Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </motion.div>
    </article>
  );
}