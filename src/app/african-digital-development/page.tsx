'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, Brain, Shield } from 'lucide-react';

export default function AfricanDigitalDevelopment() {
  const articles = [
    {
      title: "Agenda 2063: The Digital Vision",
      description: "Exploring Africa's digital transformation vision under Agenda 2063, with interactive visualizations of key strategies and milestones.",
      href: "/blog/agenda-2063",
      icon: BookOpen,
      color: "from-primary/5 to-primary/10",
      iconColor: "text-primary"
    },
    {
      title: "The AI Revolution in Africa",
      description: "Discover how artificial intelligence is reshaping African development, from healthcare to agriculture and beyond.",
      href: "/blog/ai-future",
      icon: Brain,
      color: "from-success/5 to-success/10",
      iconColor: "text-success"
    },
    {
      title: "Digital Transformation Risks",
      description: "Understanding and mitigating the challenges in Africa's digital journey, ensuring inclusive and sustainable progress.",
      href: "/blog/transformation-risks",
      icon: Shield,
      color: "from-accent/5 to-accent/10",
      iconColor: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-8 inline-block">
              <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                African Digital Development in Data
              </span>
            </h1>
            <p className="text-xl text-foreground/70 mb-12">
              Explore Africa's digital transformation journey through interactive visualizations 
              and in-depth analysis of key development initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={article.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={article.href} className="block h-full">
                  <Card className="group h-full p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br border-2 border-transparent hover:border-primary/20">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${article.color} mb-6 w-fit`}>
                      <article.icon className={`w-8 h-8 ${article.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 mb-6">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Teaser */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="group p-8 bg-surface hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Interactive Dashboards
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Dive deeper into the data with our interactive dashboards, featuring real-time 
                visualizations of Africa's digital transformation metrics.
              </p>
              <Link 
                href="/bonus"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Explore Dashboards
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 