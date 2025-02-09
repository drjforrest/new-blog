'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { ClientComponent } from '@/components/visualizations/client-wrapper';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DataVisualizationWrapper = dynamic(
  () => import('@/components/data-visualization-wrapper'),
  { ssr: false }
);

export default function BlogPost() {
  return (
    <motion.article 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4"
    >
      {/* Back Link */}
      <motion.div 
        variants={{
          hidden: { x: -20, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Post Header */}
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
          <span>Jamie Forrest, PhD</span>
          <span>•</span>
          <time dateTime="2024-12-26">December 26, 2024</time>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Agenda 2063: The Digital Transformation of a Continent
        </h1>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src="/africa-ai-banner.png"
            alt="Digital Transformation visualization showing AI and technology icons over African continent"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-xl text-foreground/80 leading-relaxed">
          When the African Union adopted Agenda 2063 in 2015, it recognized that digital transformation 
          would be fundamental to Africa's future. Nearly a decade later, this vision has evolved into a 
          comprehensive framework for harnessing digital technologies, with implications that reach far 
          beyond the continent's borders.
        </p>
      </motion.div>

      {/* Post Content */}
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        transition={{ delay: 0.4 }}
        className="prose prose-lg dark:prose-invert max-w-none space-y-6"
      >
        {/* Content sections with proper spacing and typography */}
        <section className="mt-10">
          <h2>Digital Transformation Leadership</h2>
          <div className="my-6">
            <DataVisualizationWrapper
              title="Digital Progress by Country"
              description="Comparative analysis of digital transformation progress across key African nations"
              insights={[
                "Kenya leads in mobile money and fintech innovation",
                "Rwanda shows strongest policy framework implementation",
                "Nigeria demonstrates highest tech startup growth",
                "Ethiopia making rapid progress in digital infrastructure",
                "Ghana emerging as regional digital services hub"
              ]}
            >
              <ClientComponent component="DigitalTransformationLeadership" />
            </DataVisualizationWrapper>
          </div>
        </section>

        {/* More sections... */}

      </motion.div>

      {/* Navigation Footer */}
      <motion.footer 
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        transition={{ delay: 0.5 }}
        className="mt-12 pt-6 border-t border-foreground/10"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {["Digital Transformation", "Africa", "Technology", "Innovation", "Development"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/5 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <nav className="flex justify-between items-center gap-4">
          <Link
            href="/blog/transformation-risks"
            className="group flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-sm">Next</div>
              <div className="font-medium">Digital Transformation Risks</div>
            </div>
          </Link>
        </nav>
      </motion.footer>
    </motion.article>
  );
}