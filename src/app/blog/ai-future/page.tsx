'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AIFuture() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">The AI Revolution in Africa</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead text-xl text-foreground/80">
            Artificial Intelligence is reshaping Africa's digital landscape, offering unprecedented 
            opportunities for innovation, economic growth, and social development.
          </p>

          <section className="my-12">
            <h2>Current State of AI in Africa</h2>
            <p>
              The African continent is experiencing a surge in AI adoption across various sectors:
            </p>
            <ul>
              <li>Healthcare diagnostics and telemedicine</li>
              <li>Agricultural optimization and precision farming</li>
              <li>Financial services and mobile banking</li>
              <li>Education and skills development</li>
            </ul>
          </section>

          <section className="my-12">
            <h2>Key Innovation Hubs</h2>
            <p>
              Several African cities have emerged as AI innovation hubs:
            </p>
            <ul>
              <li>Nairobi, Kenya - East African tech hub</li>
              <li>Lagos, Nigeria - West African startup ecosystem</li>
              <li>Cape Town, South Africa - AI research center</li>
              <li>Kigali, Rwanda - Smart city initiatives</li>
            </ul>
          </section>

          <section className="my-12">
            <Card className="p-6 bg-primary/5">
              <h3 className="text-xl font-semibold mb-4">Impact Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Healthcare</h4>
                  <p className="text-sm text-foreground/70">
                    AI-powered diagnostics, disease prediction, and healthcare resource optimization
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Agriculture</h4>
                  <p className="text-sm text-foreground/70">
                    Crop yield prediction, pest detection, and smart farming solutions
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Finance</h4>
                  <p className="text-sm text-foreground/70">
                    Credit scoring, fraud detection, and automated customer service
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-foreground/70">
                    Personalized learning, content translation, and skills assessment
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section className="my-12">
            <h2>Challenges and Opportunities</h2>
            <p>
              While AI presents significant opportunities, several challenges need to be addressed:
            </p>
            <ul>
              <li>Data availability and quality</li>
              <li>Infrastructure and connectivity</li>
              <li>Skills gap and talent development</li>
              <li>Ethical considerations and governance</li>
            </ul>
          </section>
        </div>

        <nav className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          <Link 
            href="/blog/agenda-2063"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Article
          </Link>
          <Link 
            href="/blog/transformation-risks"
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