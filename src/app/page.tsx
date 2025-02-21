'use client';

import { Hero } from '@/components/Hero';
import { ExternalBlogCard } from '@/components/blog/ExternalBlogCard';
import { FeatureSeriesCard } from '@/components/blog/FeatureSeriesCard';
import { PresentationCard } from '@/components/presentations/PresentationCard';
import { CommentsSection } from '@/components/blog/comments-section';
import { motion } from 'framer-motion';
import { Globe, BarChart2 } from "lucide-react";

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div className="text-center mb-16" id={id}>
    <h2 className="text-[#26385C] text-4xl font-bold mb-3">{children}</h2>
    <div className="w-24 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
  </div>
);

export default function Home() {
  // Example external blog posts - replace with your actual external blog links
  const externalBlogPosts = [
    {
      title: "The Future of Digital Payments in Africa",
      description: "Exploring the revolutionary impact of mobile money and digital payment systems across the African continent.",
      href: "https://your-mdx-blog.com/digital-payments",
      date: "2025-02-15"
    },
    {
      title: "Tech Hubs Rising: Innovation Centers in Africa",
      description: "A deep dive into the growing ecosystem of technology innovation hubs transforming African cities.",
      href: "https://your-mdx-blog.com/tech-hubs",
      date: "2025-02-01"
    }
  ];

  // Example presentations - replace with your actual presentations
  const presentations = [
    {
      title: "Digital Transformation in African Markets",
      description: "A comprehensive look at how digital technologies are reshaping African markets and creating new opportunities for growth and innovation.",
      duration: "45 min",
      date: "2025-02-19",
      href: "/presentations/digital-transformation",
      imageUrl: "/images/presentations/digital-transformation.jpg"
    },
    {
      title: "Future of Mobile Money",
      description: "Exploring the evolution of mobile payment systems and their impact on financial inclusion across the continent.",
      duration: "30 min",
      date: "2025-02-15",
      href: "/presentations/mobile-money",
      imageUrl: "/images/presentations/mobile-money.jpg"
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
              title="African Digital Development in Health"
              description="A comprehensive exploration of digital transformation in African healthcare, examining the intersection of technology, public health, and economic development through data-driven analysis. This series investigates current initiatives, challenges, and future opportunities in digital health across the continent."
              href="/african-digital-development"
              icon={Globe}
            />

            <FeatureSeriesCard
              title="Global Tech Policy in Healthcare"
              description="An upcoming series examining the evolving landscape of healthcare technology policy across different regions, with a focus on regulatory frameworks, digital governance, and cross-border cooperation in health systems."
              href="/coming-soon"
              icon={BarChart2}
              isComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-background" id="latest-articles">
        <div className="container mx-auto px-4">
          <SectionTitle>Latest Articles</SectionTitle>
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
          <SectionTitle>Presentations & MARPs</SectionTitle>
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