'use client';

import { Hero } from '@/components/layout/hero';
import { ExternalBlogCard } from '@/components/blog/ExternalBlogCard';
import { FeatureSeriesCard } from '@/components/blog/FeatureSeriesCard';
import { PresentationCard } from '@/components/presentations/PresentationCard';
import dynamic from 'next/dynamic';
import { Globe, Brain, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const CommentsSection = dynamic(
  () => import('@/components/blog/comments-section').then(mod => mod.CommentsSection),
  {
    loading: () => <div>Loading comments...</div>
  }
);

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div className="text-center mb-16" id={id}>
    <h2 className="text-[#26385C] text-4xl font-bold mb-3">{children}</h2>
    <div className="w-24 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
  </div>
);

export default function Home() {
  // Other blog posts (excluding featured series content)
  const externalBlogPosts = [
    {
      title: "AI-Driven Innovations in Clinical Research",
      description: "A comprehensive guide to practical applications of AI in clinical research and the CRO industry, exploring how artificial intelligence is modernizing and transforming clinical trials.",
      href: "https://more-blog.drjforrest.com/posts/ai-clinical-research.html",
      date: "2025-01-14"
    },
    {
      title: "Global Health Technology Trends 2024",
      description: "Exploring how AI can be leveraged to combat digital disinformation in public health communications, including automated fact-checking and trend monitoring.",
      href: "https://more-blog.drjforrest.com/posts/global-health-tech.html",
      date: "2025-02-17"
    }
  ];

  // Real presentations
  const presentations = [
    {
      title: "AI Clinical Research 2025",
      description: "Technical deep dive into AI-driven innovations transforming clinical trials, including implementation details and future perspectives.",
      duration: "45 min",
      date: "2025-02-22",
      href: "https://more-blog.drjforrest.com/presentations/ai-clinical-research-2025.html",
      imageUrl: "/images/presentations/ai-clinical.png"
    },
    {
      title: "Digital Health Innovations",
      description: "A comprehensive guide to using Marp for creating beautiful, version-controlled presentations using Markdown syntax.",
      duration: "30 min",
      date: "2025-02-21",
      href: "https://more-blog.drjforrest.com/presentations/digital-health-innovations.html",
      imageUrl: "/images/presentations/marp-guide.png"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Hero />

      {/* Other Blog Posts Section */}
      <section className="py-24 bg-background" id="latest-articles">
        <div className="container mx-auto px-4">
          <SectionTitle>Other Blog Posts</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {externalBlogPosts.map((post, index) => (
              <ExternalBlogCard
                key={post.href}
                {...post}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="py-24 bg-muted/5" id="presentations">
        <div className="container mx-auto px-4">
          <SectionTitle>Marp Presentations</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {presentations.map((presentation) => (
              <PresentationCard
                key={presentation.href}
                {...presentation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Series Section */}
      <section className="py-24 bg-background" id="feature-series">
        <div className="container mx-auto px-4">
          <SectionTitle>All Feature Series</SectionTitle>
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            <FeatureSeriesCard
              title="African Digital Development in Data"
              description="Discover the growth of a continent through engaging data visualization and compelling stories of 21st century solutions to decades-long challenges."
              href="/african-digital-development"
              icon={Globe}
              isCurrent={true}
            />

            <FeatureSeriesCard
              title="Clinical Research & AI Innovation"
              description="An upcoming series examining the evolving landscape of clinical research technology, with a focus on AI integration, decentralized trials, and the future of medical innovation."
              href="/coming-soon"
              icon={Brain}
              isComingSoon={true}
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-24 bg-muted/5" id="comments">
        <div className="container mx-auto px-4">
          <SectionTitle>Join the Discussion</SectionTitle>
          <CommentsSection />
        </div>
      </section>
    </div>
  );
}