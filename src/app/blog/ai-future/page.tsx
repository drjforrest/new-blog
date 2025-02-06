import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ClientComponent } from '@/components/visualizations/client-wrapper';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "The AI Revolution in Africa: A Path to Transformative Growth | African Digital Development",
  description: "Exploring the unprecedented opportunities and transformative potential of artificial intelligence across African markets, with a focus on key sectors and implementation progress."
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
        src="/images/ai-future-banner.png"
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

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          As Africa stands at the threshold of an AI revolution, the continent faces an unprecedented 
          opportunity to leverage artificial intelligence for transformative growth. With the world's 
          youngest population—60% under twenty-five—and rapidly increasing digital adoption rates, 
          Africa is uniquely positioned to harness AI technologies in ways that could fundamentally 
          reshape its development trajectory.
        </p>

        <h2>The Economic Potential</h2>
        <p>
          The numbers tell a compelling story: AI could add $2.9 trillion in value to the African 
          economy by 2030, equivalent to a 3% increase in annual GDP growth. Some projections suggest 
          that AI-based technologies could potentially double the GDP growth rate of African countries 
          by 2035.
        </p>

        <div className="my-8">
          <ClientComponent component="AIMarketGrowth" />
        </div>

        <h2>Transforming Key Sectors</h2>
        <p>
          The real power of Africa's AI revolution lies in its ability to address longstanding 
          development challenges through innovative solutions across critical sectors.
        </p>

        <h3>Healthcare Transformation</h3>
        <p>
          AI is revolutionizing healthcare delivery across Africa through multiple pathways. AI-powered 
          diagnostic tools are achieving accuracy rates exceeding 90% in early disease detection, 
          particularly in areas like cervical cancer screening and malaria diagnosis.
        </p>

        <div className="my-8">
          <ClientComponent component="SectorTransformation" />
        </div>

        <h2>Youth: Africa's AI Advantage</h2>
        <p>
          With 60% of its population under twenty-five, Africa possesses a unique demographic advantage 
          in the AI revolution. This young population, combined with increasing digital literacy and 
          access to technology, positions the continent to become a major hub for AI innovation and 
          development.
        </p>

        <div className="my-8">
          <ClientComponent component="YouthDevelopment" />
        </div>

        <h2>The Path Forward</h2>
        <p>
          While the potential is immense, realizing these opportunities requires strategic focus and 
          investment. Success stories from across the continent demonstrate that AI can indeed address 
          crucial development challenges when properly implemented.
        </p>
      </div>

      <footer className="mt-16 pt-8 border-t border-border/50">
        <div className="flex flex-wrap gap-2 mb-12">
          {["AI", "Africa", "Technology", "Development", "Innovation"].map((tag) => (
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
            href="/blog/agenda-2063"
            className="group flex items-center gap-2 text-content-muted hover:text-primary transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <div className="text-sm">Previous</div>
              <div className="font-medium">Agenda 2063</div>
            </div>
          </Link>
          <Link
            href="/blog/transformation-risks"
            className="group flex items-center gap-2 text-content-muted hover:text-primary transition-colors ml-auto no-underline text-right"
          >
            <div>
              <div className="text-sm">Next</div>
              <div className="font-medium">Digital Transformation Risks</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </footer>
    </article>
  );
}
