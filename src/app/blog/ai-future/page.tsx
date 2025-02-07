'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { EconomicImpact } from '@/components/visualizations/economic-impact';
import { SocialDevelopment } from '@/components/visualizations/social-development';
import { AIGrowthChart } from '@/components/visualizations/charts/AIGrowthChart';
import { SDGImpactChart } from '@/components/visualizations/charts/SDGImpactChart';

export default function Page() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {/* Header section remains the same */}
      <div className="mb-12">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group no-underline"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>

      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
          <span>Jamie Forrest, PhD</span>
          <span>•</span>
          <time dateTime="2024-12-26">December 26, 2024</time>
        </div>

        <h1>The AI Revolution in Africa: A Path to Transformative Growth</h1>

        <p className="lead">
          Artificial Intelligence presents unprecedented opportunities for Africa's development, 
          promising to revolutionize economies, transform societies, and accelerate progress toward 
          sustainable development goals. This technological revolution could become a powerful catalyst 
          for positive change across the continent.
        </p>
      </header>

      <section>
        <h2>Economic Transformation Through AI</h2>
        <p>
          The economic potential of AI in Africa is staggering. By 2030, AI could add $2.9 trillion 
          in value to the African economy – equivalent to a 3% increase in annual GDP growth. This 
          transformation extends beyond mere numbers, representing fundamental changes in how businesses 
          operate, markets function, and economies grow.
        </p>
        <div className="my-8">
          <EconomicImpact />
        </div>
        <div className="my-12">
          <Card className="p-6">
            <AIGrowthChart />
          </Card>
        </div>
      </section>

      <section>
        <h2>Catalyzing Social Development</h2>
        <p>
          AI's impact extends far beyond economic metrics, offering transformative solutions for 
          pressing social challenges. From healthcare delivery to educational access, AI technologies 
          are helping bridge long-standing gaps in social services and development.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
          <div>
            <SocialDevelopment />
          </div>
          <Card className="p-6">
            <SDGImpactChart />
          </Card>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <section>
        <h2>AI for Africa by Africa</h2>
        <p>
          A crucial aspect of Africa's AI journey is the focus on developing homegrown solutions. 
          When Africans design and deploy AI applications, societal goals and human rights commitments 
          like decent work conditions and gender equality are integrated into projects from the beginning.
        </p>
        <p>
          This approach ensures:
        </p>
        <ul>
          <li>Solutions tailored to local contexts and needs</li>
          <li>Integration of African values and priorities</li>
          <li>Building local capacity and expertise</li>
          <li>Sustainable and inclusive development</li>
        </ul>
      </section>

      <section>
        <h2>Digital Identity and Financial Inclusion</h2>
        <p>
          One of the most ambitious goals is to provide 99.9% of African citizens with a digital legal 
          identity by 2030. This initiative is crucial for:
        </p>
        <ul>
          <li>Enabling full participation in the digital economy</li>
          <li>Improving access to financial services</li>
          <li>Enhancing government service delivery</li>
          <li>Supporting transparent governance</li>
        </ul>
        <p>
          Complementing this, AI-powered financial solutions are revolutionizing access to banking 
          services. Multilingual, voice-based chatbots are providing financial guidance, while mobile 
          banking platforms are reaching previously underserved populations.
        </p>
      </section>

      <section>
        <h2>Agriculture and Food Security</h2>
        <p>
          The agricultural sector stands to benefit significantly from AI adoption. Digital technologies 
          are addressing inefficiencies in:
        </p>
        <ul>
          <li>Resource allocation and usage</li>
          <li>Market access and pricing</li>
          <li>Supply chain management</li>
          <li>Production optimization</li>
        </ul>
        <p>
          These improvements are particularly significant for smallholder farmers, who form the backbone 
          of African agriculture.
        </p>
      </section>

      <section>
        <h2>Future Considerations</h2>
        <p>
          While the potential is immense, realizing AI's benefits requires addressing several key 
          challenges:
        </p>
        <ul>
          <li>
            <strong>Infrastructure Development:</strong> Ensuring reliable power and internet 
            connectivity across the continent
          </li>
          <li>
            <strong>Skills Development:</strong> Building local AI expertise and technical capabilities
          </li>
          <li>
            <strong>Ethical Framework:</strong> Developing guidelines for responsible AI deployment
          </li>
          <li>
            <strong>Regulatory Environment:</strong> Creating supportive policies while protecting 
            public interests
          </li>
        </ul>
      </section>

      <footer className="mt-16 pt-8 border-t border-foreground/10">
        <div className="flex flex-wrap gap-2 mb-8">
          {["AI", "Innovation", "Development", "Digital Economy", "Social Impact"].map((tag) => (
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
            href="/blog/agenda-2063"
            className="group flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-sm">Previous</div>
              <div className="font-medium">Agenda 2063</div>
            </div>
          </Link>
          <Link
            href="/blog/transformation-risks"
            className="group flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors no-underline"
          >
            <div className="text-right">
              <div className="text-sm">Next</div>
              <div className="font-medium">Digital Transformation Risks</div>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </footer>
    </article>
  );
}