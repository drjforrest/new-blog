import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ClientComponent } from '@/components/visualizations/client-wrapper';
import dynamic from 'next/dynamic';

const DataVisualizationWrapper = dynamic(
  () => import('@/components/data-visualization-wrapper'),
  { ssr: false }
);
import Image from 'next/image';

export const metadata: Metadata = {
  title: "The Hidden Costs of Africa's AI Revolution: Navigating Digital Transformation Risks | African Digital Development",
  description: "Exploring the critical challenges and potential pitfalls of Africa's digital transformation while highlighting paths toward sustainable, equitable progress."
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4 sm:px-6">

      {/* Header */}
      <header className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-body-sm text-content-muted hover:text-primary transition-colors mb-8 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-4 text-body-sm text-content-subtle">
          <span>Jamie Forrest, PhD</span>
          <span>•</span>
          <time dateTime="2024-12-26">December 26, 2024</time>
        </div>
      </header>

      {/* Banner Image */}
      <Image 
        src="/images/transformation-risks-banner.png"
        alt="Digital Transformation Risks"
        width={1200} 
        height={500}
        className="rounded-lg shadow-lg mx-auto mb-6"
        priority
      />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold tracking-tight mb-6">
        Agenda 2063: The Digital Transformation of a Continent
      </h1>

      <p className="mt-4 text-body-sm text-content-subtle">
        By Jamie Forrest, PhD • <time dateTime="2024-12-26">December 26, 2024</time>
      </p>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          While our exploration of Agenda 2063's digital transformation strategy outlined an ambitious 
          vision, and our analysis of AI's transformative potential revealed remarkable opportunities, 
          we must now confront a critical reality: this technological revolution carries significant 
          risks that require careful navigation.
        </p>

        <h2>Infrastructure and Access: Bridging the Digital Divide</h2>
        <div className="my-8">
          <DataVisualizationWrapper
            title="Digital Infrastructure Gap Analysis"
            description="Current state of digital infrastructure access and development across Africa"
            insights={[
              "37% of African population had internet access in 2023",
              "Urban-rural digital divide growing in 65% of countries",
              "Critical infrastructure gaps in 78% of rural areas",
              "E-commerce reached $32.49B despite access limitations"
            ]}
          >
            <ClientComponent component="InfrastructureGaps" />
          </DataVisualizationWrapper>
        </div>

        <h2>Cybersecurity and Data Governance</h2>
        <div className="my-8">
          <DataVisualizationWrapper
            title="Cybersecurity Landscape"
            description="Analysis of emerging cybersecurity challenges and response capabilities"
            insights={[
              "Critical infrastructure attacks increased by 47% in 2023",
              "Financial sector experiencing 2.5x more attacks than global average",
              "Only 23% of countries have comprehensive cybersecurity frameworks",
              "85% of organizations lack adequate cybersecurity expertise"
            ]}
          >
            <ClientComponent component="CyberVulnerabilities" />
          </DataVisualizationWrapper>
        </div>

        <h2>Digital Sovereignty: Building Local Capacity</h2>
        <div className="my-8">
          <DataVisualizationWrapper
            title="Digital Sovereignty Analysis"
            description="Tracking patterns of digital dependence and local innovation"
            insights={[
              "Local innovation hubs increased by 58% since 2020",
              "African-led AI solutions growing at 45% annually",
              "Cross-border data frameworks adopted by 12 countries",
              "Local cloud infrastructure expanding in 8 major markets"
            ]}
          >
            <ClientComponent component="DigitalSovereignty" />
          </DataVisualizationWrapper>
        </div>

        <h2>Charting a Sustainable Path Forward</h2>
        <p>
          Building on the foundations outlined in our series, three critical areas emerge for ensuring 
          sustainable digital transformation:
        </p>

        <h3>Inclusive Infrastructure Development</h3>
        <ul>
          <li>Community-owned networks showing promise in rural areas</li>
          <li>Innovative financing models for last-mile connectivity</li>
          <li>Integration of renewable energy solutions for sustainability</li>
        </ul>

        <h3>Balanced Regulatory Frameworks</h3>
        <ul>
          <li>Data protection laws that preserve African digital sovereignty</li>
          <li>AI ethics guidelines rooted in African values</li>
          <li>Cross-border collaboration that strengthens continental integration</li>
        </ul>
      </div>

      <footer className="mt-16 pt-8 border-t border-border/50">
        <div className="flex flex-wrap gap-2 mb-12">
          {["AI", "Africa", "Technology", "Development", "Innovation", "Risk Management"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-surface-muted text-content-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <nav className="flex justify-between items-center gap-4">
          <Link
            href="/blog/ai-future"
            className="group flex items-center gap-2 text-content-muted hover:text-primary transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <div className="text-sm">Previous</div>
              <div className="font-medium">AI's Transformative Potential</div>
            </div>
          </Link>
        </nav>
      </footer>
    </article>
  );
}
