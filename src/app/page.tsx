'use client';

import { Hero } from '@/components/Hero';
import { ExternalBlogCard } from '@/components/blog/ExternalBlogCard';
import { FeatureSeriesCard } from '@/components/blog/FeatureSeriesCard';
import { PresentationCard } from '@/components/presentations/PresentationCard';
import { CommentsSection } from '@/components/blog/comments-section';
import { motion } from 'framer-motion';
import { Globe, Brain } from 'lucide-react';
import { siteConfig } from '@/config/site-config';


const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div className="text-center mb-16" id={id}>
    <h2 className="text-[#26385C] text-4xl font-bold mb-3">{children}</h2>
    <div className="w-24 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
  </div>
);

export default function Home() {
  // Real external blog posts 
  const externalBlogPosts = [
    {
      title: "AI Integration in Clinical Research",
      description: "A comprehensive guide to practical applications of AI in clinical research and the CRO industry, exploring how artificial intelligence is modernizing and transforming clinical trials.",
      href: "https://more-blog.drjforrest.com/posts/content/ai-clinical-research.html",
      date: "2025-01-14"
    },
    {
      title: "AI and Digital Disinformation in Public Health",
      description: "Exploring how AI can be leveraged to combat digital disinformation in public health communications, including automated fact-checking and trend monitoring.",
      href: "https://more-blog.drjforrest.com/posts/content/ai-disinformation.html",
      date: "2025-02-17"
    }
  ];

  // Real presentations
  const presentations = [
    {
      title: "Guide to Creating Presentations with Marp",
      description: "A comprehensive guide to using Marp for creating beautiful, version-controlled presentations using Markdown syntax.",
      duration: "30 min",
      date: "2025-02-21",
      href: "https://more-blog.drjforrest.com/posts/content/marp-guide.html",
      imageUrl: "/images/presentations/marp-guide.jpg"
    },
    {
      title: "AI in Clinical Research 2025",
      description: "Technical deep dive into AI-driven innovations transforming clinical trials, including implementation details and future perspectives.",
      duration: "45 min",
      date: "2025-02-22",
      href: "https://more-blog.drjforrest.com/posts/content/ai-clinical-2025.html",
      imageUrl: "/images/presentations/ai-clinical.jpg"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Hero />

      {/* Feature Series Section */}
      <section className="py-24 bg-muted/5" id="feature-series">
        <div className="container mx-auto px-4">
          <SectionTitle>Feature Series</SectionTitle>
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            <FeatureSeriesCard
              title={siteConfig.featuredSeries[0].title}
              description={siteConfig.featuredSeries[0].description}
              href="/african-digital-development"
              icon={Globe}
            />

            <FeatureSeriesCard
              title="Clinical Research & AI Innovation"
              description="An upcoming series examining the evolving landscape of clinical research technology, with a focus on AI integration, decentralized trials, and the future of medical innovation."
              href="/coming-soon"
              icon={Brain}
              isComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-background" id="latest-articles">
        <div className="container mx-auto px-4">
          <SectionTitle>Latest Blog Posts</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {externalBlogPosts.map((post, index) => (
              <ExternalBlogCard
                key={post.href}
                title={post.title}
                description={post.description}
                href={post.href}
                date={post.date}
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

      {/* Comments Section */}
      <section className="py-24 bg-background border-t border-primary/10">
        <div className="container mx-auto px-4">
          <SectionTitle>Join the Discussion</SectionTitle>
          <CommentsSection />
        </div>
      </section>
    </div>
  );
}