'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function AfricanDigitalDevelopment() {
  const series = {
    title: "African Digital Development in Data",
    description: "Discover Africa's digital transformation through data visualization and analysis",
    posts: [
      {
        title: "Agenda 2063: The Digital Vision",
        slug: "agenda-2063",
        description: "Exploring Africa's digital transformation vision under Agenda 2063"
      },
      {
        title: "The AI Revolution in Africa",
        slug: "ai-future",
        description: "AI's transformative potential in African development"
      },
      {
        title: "Digital Transformation Risks",
        slug: "transformation-risks",
        description: "Navigating challenges in Africa's digital journey"
      }
    ],
    dashboard: {
      title: "Interactive Dashboards",
      slug: "bonus",
      description: "Explore comprehensive data visualizations"
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">{series.title}</h1>
        <p className="text-xl text-foreground/70 mb-12">{series.description}</p>

        {/* Series Posts */}
        <div className="grid gap-8">
          {series.posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-all">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-foreground/70">{post.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}

          {/* Dashboard Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: series.posts.length * 0.1 }}
          >
            <Link href={`/${series.dashboard.slug}`}>
              <Card className="p-6 hover:shadow-lg transition-all bg-primary/5">
                <h2 className="text-2xl font-semibold mb-2">{series.dashboard.title}</h2>
                <p className="text-foreground/70">{series.dashboard.description}</p>
              </Card>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 