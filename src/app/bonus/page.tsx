import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { ClientComponent } from '@/components/visualizations/client-wrapper';
import dynamic from 'next/dynamic';

const DataVisualizationWrapper = dynamic(
  () => import('@/components/data-visualization-wrapper'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Interactive Data Dashboards | African Digital Development",
  description: "Explore interactive data visualizations and multi-layered dashboards analyzing Africa's digital transformation journey."
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
        src="/images/interactive-dashboards-banner.png"
        alt="Agenda 2063 Digital Transformation"
        width={1200}
        height={500}
        className="rounded-lg shadow-lg mx-auto mb-6"
        priority
      />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold tracking-tight mb-6">
        Bonus Content: Interactive Data Dashboards
      </h1>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert">
        <p className="lead">
          Beyond the narrative posts, these interactive dashboards provide deeper insights into 
          the data driving Africa's digital transformation that emerged during research for this blog. Each visualization offers multiple views 
          and layers of analysis, allowing you to explore the complexities of this journey.
        </p>
      </div>

      <div className="space-y-16">
        {/* Economic Analysis Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Economic Impact Analysis</h2>
          <p className="text-lg text-content-muted mb-8">
            Explore the economic dimensions of Africa's AI and digital transformation through complementary 
            views: a high-level analysis of economic impact types, and a detailed breakdown of market 
            growth, sectoral changes, and investment patterns.
          </p>

          <div className="space-y-8">
            <DataVisualizationWrapper
              title="Economic Impact Trends"
              description="Analyzing direct, indirect, and induced economic effects over time"
              insights={[
                "Direct economic impact shows consistent growth trajectory",
                "Indirect benefits amplify direct economic gains",
                "Induced effects demonstrate sustainable economic transformation",
                "Combined impact projected to reach $6.8T by 2025"
              ]}
            >
              <ClientComponent component="AIEconomicPotential" />
            </DataVisualizationWrapper>

            <DataVisualizationWrapper
              title="Economic Growth & Investment Dashboard"
              description="Interactive exploration of market dynamics, sector impact, and investment requirements"
              insights={[
                "Market value expected to reach $22.8B by 2030",
                "Healthcare and Finance sectors show highest direct impact",
                "Significant infrastructure investment gap remains",
                "Job creation accelerates with market maturity"
              ]}
            >
              <ClientComponent component="AIEconomicDashboard" />
            </DataVisualizationWrapper>
          </div>
        </section>

        {/* Implementation Tracking Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Implementation Progress</h2>
          <p className="text-lg text-content-muted mb-8">
            Track the practical implementation of AI and digital initiatives across multiple dimensions, 
            from infrastructure development to policy frameworks. This detailed roadmap highlights both 
            progress and priorities in key areas of digital transformation.
          </p>

          <DataVisualizationWrapper
            title="AI Implementation Roadmap"
            description="Comprehensive tracking of implementation progress across key domains"
            insights={[
              "Infrastructure development shows strong momentum",
              "Talent development programs exceed initial targets",
              "Policy frameworks mature across multiple areas",
              "Clear correlation between priorities and progress"
            ]}
          >
            <ClientComponent component="AIImplementationRoadmap" />
          </DataVisualizationWrapper>
        </section>

        {/* Regional Development Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Regional Development Patterns</h2>
          <p className="text-lg text-content-muted mb-8">
            Understanding regional variations in digital development helps identify successful strategies 
            and areas needing additional support. This dashboard provides a comparative view of progress 
            across different regions of Africa.
          </p>

          <DataVisualizationWrapper
            title="Development Progress by Region"
            description="Comparative analysis of digital transformation progress across African regions"
            insights={[
              "East Africa leads in mobile technology adoption",
              "North Africa shows strong infrastructure development",
              "West Africa demonstrates rapid startup ecosystem growth",
              "Southern Africa excels in policy implementation"
            ]}
          >
            <ClientComponent component="AfricaDevelopmentDashboard" />
          </DataVisualizationWrapper>
        </section>

        {/* Usage Guide */}
        <section className="bg-surface-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">How to Use These Dashboards</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Each dashboard is interactive and offers multiple ways to explore the data:
            </p>
            <ul>
              <li>Use tabs to switch between different views and metrics</li>
              <li>Hover over data points to see detailed information</li>
              <li>Click legend items to show/hide specific data series</li>
              <li>Compare different metrics and time periods</li>
            </ul>
            <p>
              Take time to explore each visualization's features to gain a comprehensive understanding 
              of Africa's digital transformation journey.
            </p>
          </div>
        </section>

        {/* Sources of Data Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Sources of Data</h2>
          <p className="text-lg text-content-muted mb-4">
            The data used in these dashboards come from publicly available reports and research studies.
          </p>
          <ul className="list-disc list-inside text-content-muted">
            <li>**ITU Digital Transformation Strategy for Africa 2020-2030** – Focuses on digital skills, ICT challenges, and policy strategies.</li>
            <li>**AI for Africa Blueprint (2021)** – Developed by Smart Africa with support from BMZ, GIZ, and GFA Consulting.</li>
            <li>**African Union High-Level Panel Report on AI** – Published by AUDA-NEPAD, addressing AI's role in socio-economic development.</li>
            <li>**AI in Africa: Opportunities and Challenges** – A synthesis of key findings from multiple sources.</li>
            <li>**AI in Africa: The State and Needs of the Ecosystem (2024)** – Executive summary on AI developments in Africa.</li>
            <li>**Research ICT Africa: The Political Economy of AI (2024)** – Analysis of AI's impact and regulatory challenges.</li>
            <li>**Mapping the Regulatory Landscape of AI in Healthcare (2023)** – Published in *Frontiers in Pharmacology*.</li>
            <li>**Nature: AI in Africa (2024)** – Discussion on Africa's AI research ecosystem and global positioning.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
