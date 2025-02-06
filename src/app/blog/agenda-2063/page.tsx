import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ClientComponent } from '@/components/visualizations/client-wrapper';
import dynamic from 'next/dynamic';

const DataVisualizationWrapper = dynamic(
  () => import('@/components/data-visualization-wrapper'),
  { ssr: false }
);
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Agenda 2063: The Digital Transformation of a Continent | African Digital Development',
  description: "Exploring Africa's digital transformation journey through the lens of Agenda 2063's strategic framework and implementation progress.",
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
        src="/images/agenda-2063-banner.png"
        alt="Agenda 2063 Digital Transformation"
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
          When the African Union adopted Agenda 2063 in 2015, it recognized that digital transformation would be fundamental to Africa's future. Nearly a decade later, this vision has evolved into a comprehensive framework for harnessing digital technologies, with implications that reach far beyond simple technological advancement.
        </p>

        <h2>From Vision to Framework</h2>
        <p>
          The Digital Transformation Strategy for Africa (2020-2030) represents a crucial evolution of Agenda 2063's digital vision. It moves beyond merely acknowledging technology's importance to providing a detailed roadmap for digital innovation and adoption. This strategy emphasizes African ownership of its digital future—a significant shift from previous development paradigms.
        </p>
        <p>
          What perhaps was not known at the time of writing the Digital Transformation Strategy is that this period may very well represent the greatest wave of global digital transformation since the adoption of personal computing. To seize this moment and leapfrog into the AI revolution, Africa must harness the policy framework's broad applicability.
        </p>

        <div className="my-8">
          <ClientComponent component="DigitalVisionExplorer" />
        </div>

        <h2>The Four Pillars: Building Blocks of Digital Transformation</h2>

        <h3>Pillar 1: Enabling Environment, Policy & Regulation</h3>
        <p>
          **Goal:** Create a conducive environment through appropriate policies and regulations that promote digital transformation. This includes fostering political commitment, ensuring policy stability, and promoting a sustainable environment for private sector investment.
        </p>
        <ul>
          <li>Developing and implementing national, regional, and continental digital strategies</li>
          <li>Creating comprehensive cyberspace policies and legislation</li>
          <li>Establishing data protection and privacy frameworks</li>
          <li>Strengthening collaboration between African institutions and regulators</li>
        </ul>

        <h3>Pillar 2: Digital Infrastructure</h3>
        <p>
          **Goal:** Facilitate the development of accessible and affordable digital systems, including networks, platforms, and devices.
        </p>
        <ul>
          <li>Implementing continental digital infrastructure master plans</li>
          <li>Establishing regional integration broadband projects</li>
          <li>Promoting competitive internet interconnection</li>
          <li>Modernizing postal services for digital delivery</li>
        </ul>

        <h3>Pillar 3: Digital Skills & Human Capacity</h3>
        <p>
          **Goal:** Cultivate a workforce capable of both producing and effectively using digital technologies, ensuring Africa's place in the digital economy.
        </p>
        <ul>
          <li>Updating education curricula for digital society needs</li>
          <li>Promoting gender-inclusive STEAM education</li>
          <li>Developing multi-stakeholder partnerships for skills development</li>
          <li>Supporting knowledge transfer and mentorship programs</li>
        </ul>

        <h3>Pillar 4: Digital Innovation & Entrepreneurship</h3>
        <p>
          **Goal:** Foster innovation that aligns with both Sustainable Development Goals and Africa's science and technology strategy.
        </p>
        <ul>
          <li>Developing supportive legal and regulatory frameworks</li>
          <li>Establishing local digital innovation centers</li>
          <li>Supporting digital entrepreneurs through mentorship</li>
          <li>Promoting locally designed digital solutions</li>
        </ul>

        <h2>Early Implementation and Progress</h2>
        <p>
          Implementation of the digital strategy has revealed both promising developments and substantial challenges. While some regions have made significant progress in advancing digital infrastructure and investing in skills development, others face persistent barriers to digital inclusion.
        </p>

        <div className="my-8">
          <ClientComponent component="AIUseCases" />
        </div>

        <h2>Regional Leadership and Innovation</h2>
        <div className="my-8">
          <DataVisualizationWrapper
            title="Digital Transformation Leadership Metrics"
            description="Comparing key performance indicators across Africa's leading digital transformation nations"
            insights={[
              "Kenya leads in mobile money and fintech innovation",
              "Rwanda shows strongest policy framework implementation",
              "Nigeria demonstrates highest tech startup growth",
              "Ethiopia making rapid progress in digital infrastructure",
              "Ghana excels in digital skills development"
            ]}
          >
            <ClientComponent component="CountryLeadership" />
          </DataVisualizationWrapper>
        </div>

        <h2>The Path Ahead</h2>
        <p>
          Now at the strategy's midpoint, several critical questions emerge. How can we ensure digital transformation benefits all Africans, not just those in urban centers or technology hubs? What role should different stakeholders—governments, private sector, civil society—play in implementing the strategy?
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border/50">
        <div className="flex flex-wrap gap-2 mb-12">
          {["Digital Transformation", "Africa", "Development", "Technology"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-surface-muted text-content-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <nav className="flex justify-between items-center gap-4">
          <div></div>
          <Link
            href="/blog/ai-future"
            className="group flex items-center gap-2 text-content-muted hover:text-primary transition-colors ml-auto no-underline text-right"
          >
            <div>
              <div className="text-sm">Next</div>
              <div className="font-medium">AI's Transformative Potential</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </footer>
    </article>
  );
}
