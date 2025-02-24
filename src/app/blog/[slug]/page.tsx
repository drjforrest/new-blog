'use client';

import { ClientComponent } from '@/components/visualizations/client-wrapper';
import dynamic from 'next/dynamic';
import BlogPost from '@/components/blog/BlogPost';

const DataVisualizationWrapper = dynamic(
  () => import('@/components/data-visualization-wrapper'),
  { ssr: false }
);

export default function BlogPostPage() {
  const content = (
    <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
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
    </div>
  );

  return (
    <BlogPost
      title="Digital Transformation of Africa"
      date="2024-02-23"
      category="Digital Transformation"
      description="When the African Union adopted Agenda 2063 in 2015, it recognized that digital transformation would be fundamental to Africa's future."
      content={content}
      bannerImage="/images/transformation-risks-banner.png"
    />
  );
}
