'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function TransformationRisks() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Digital Transformation Risks</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead text-xl text-foreground/80">
            As Africa embraces digital transformation, understanding and mitigating associated risks 
            becomes crucial for sustainable development and inclusive growth.
          </p>

          <section className="my-12">
            <h2>Digital Divide Challenges</h2>
            <p>
              The rapid pace of digital transformation could exacerbate existing inequalities:
            </p>
            <ul>
              <li>Urban-rural connectivity gaps</li>
              <li>Gender-based digital exclusion</li>
              <li>Economic barriers to access</li>
              <li>Digital literacy disparities</li>
            </ul>
          </section>

          <section className="my-12">
            <Card className="p-6 bg-accent/5">
              <h3 className="text-xl font-semibold mb-4">Critical Risk Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Cybersecurity</h4>
                  <p className="text-sm text-foreground/70">
                    Increasing cyber threats, data breaches, and digital infrastructure vulnerabilities
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Data Privacy</h4>
                  <p className="text-sm text-foreground/70">
                    Personal data protection, regulatory compliance, and cross-border data flows
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Economic Disruption</h4>
                  <p className="text-sm text-foreground/70">
                    Job displacement, market concentration, and digital dependency risks
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Cultural Impact</h4>
                  <p className="text-sm text-foreground/70">
                    Digital colonialism, cultural preservation, and local content challenges
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section className="my-12">
            <h2>Mitigation Strategies</h2>
            <p>
              Key approaches to address digital transformation risks include:
            </p>
            <ul>
              <li>Inclusive digital policies and regulations</li>
              <li>Investment in digital skills development</li>
              <li>Public-private partnerships for infrastructure</li>
              <li>Regional cooperation on cybersecurity</li>
            </ul>
          </section>

          <section className="my-12">
            <h2>Future Considerations</h2>
            <p>
              Long-term success requires balancing innovation with risk management:
            </p>
            <ul>
              <li>Sustainable funding models</li>
              <li>Environmental impact assessment</li>
              <li>Social cohesion measures</li>
              <li>Ethical AI governance frameworks</li>
            </ul>
          </section>
        </div>

        <nav className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          <Link 
            href="/blog/ai-future"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Article
          </Link>
          <Link 
            href="/bonus"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            View Interactive Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </motion.div>
    </article>
  );
}