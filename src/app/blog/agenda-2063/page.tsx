'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StrategyFramework } from '@/components/visualizations/strategy-framework';
import { PolicyRecommendations } from '@/components/visualizations/policy-recommendations';
import { StrategicEnablers } from '@/components/visualizations/strategic-enablers';
import { TechnologyPillars } from '@/components/visualizations/technology-pillars';
import { ImplementationProgress } from '@/components/visualizations/implementation-progress';

export default function Page() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
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

        <h1>Agenda 2063: The Digital Transformation of a Continent</h1>

        <p className="lead">
          Africa's digital future is being shaped by the ambitious and transformative Digital Transformation Strategy for Africa. 
          This comprehensive framework harnesses digital technologies to drive socio-economic progress, foster regional integration, 
          and promote inclusion. By focusing on sectors like education, healthcare, agriculture, and financial services, the strategy 
          aims to create a more connected, productive, and equitable society.
        </p>
      </header>

      <section>
        <h2>A Unified Vision for Digital Africa</h2>
        <p>
          At its core, the strategy recognizes that digital technologies are powerful catalysts for systemic change. 
          It emphasizes building robust digital infrastructure, including broadband connectivity, data centers, and digital platforms, 
          to ensure all Africans can access the benefits of the digital economy.
        </p>
        <p>
          This means bridging the digital divide by expanding internet access to rural and underserved communities, as well as cultivating 
          digital literacy to empower individuals and businesses. The strategy prioritizes inclusivity to ensure no one is left behind 
          in the digital revolution.
        </p>
        <div className="my-8">
          <StrategyFramework />
        </div>
      </section>

      <section>
        <h2>Strategic Frameworks in Action</h2>
        <p>
          Agenda 2063 serves as Africa's long-term roadmap for leveraging its strengths and shaping "The Africa We Want." 
          It underscores Africa’s ambition to become an active, equal player in the global digital landscape, ensuring every 
          citizen, business, and government benefits from reliable, affordable, and innovative ICT services.
        </p>
        <p>
          A key component of this vision is the Science, Technology, and Innovation Strategy for Africa (STISA-2024), which 
          positions innovation as the driver of socio-economic transformation. Developed in 2014, STISA-2024 provides a foundation 
          for Africa’s transition into a knowledge-based, innovation-led economy.
        </p>
      </section>

      <section>
        <h2>Technology Pillars</h2>
        <p>
          Africa's digital transformation relies on several foundational technological pillars:
        </p>
        <ul>
          <li><strong>Expansion of Broadband Connectivity:</strong> A critical enabler for economic growth and social inclusion.</li>
          <li><strong>Investments in AI and Emerging Technologies:</strong> AI, machine learning, and automation can drive economic growth.</li>
          <li><strong>Strengthening Cybersecurity Frameworks:</strong> Cyber resilience is crucial to protect digital infrastructure.</li>
          <li><strong>Interoperable Digital Infrastructure:</strong> Ensuring seamless data-sharing and integration across sectors.</li>
          <li><strong>Digital Inclusion Policies:</strong> Making digital access equitable for all citizens.</li>
        </ul>
        <div className="my-8">
          <TechnologyPillars />
        </div>
      </section>

      <section>
        <h2>Implementation Progress</h2>
        <p>
          While progress varies across African nations, regional collaboration and knowledge-sharing are enabling rapid advancements.
          Some countries have developed smart cities, digital ID systems, and e-governance platforms, while others are strengthening 
          regulatory frameworks to foster digital innovation.
        </p>
        <div className="my-8">
          <ImplementationProgress />
        </div>
      </section>

      <section>
        <h2>Policy Frameworks and Enablers</h2>
        <p>
          A well-defined policy ecosystem is essential to guide and sustain Africa's digital growth:
        </p>
        <ul>
          <li><strong>Regulatory Harmonization:</strong> Enabling cross-border digital trade and economic integration.</li>
          <li><strong>AI Governance and Ethics:</strong> Ensuring responsible and beneficial AI deployment.</li>
          <li><strong>Investment Incentives:</strong> Attracting digital entrepreneurs and fostering innovation.</li>
          <li><strong>Education and Workforce Development:</strong> Equipping Africa’s workforce with digital skills.</li>
        </ul>
        <div className="my-8">
          <PolicyRecommendations />
        </div>
      </section>

      <section>
        <h2>Strategic Enablers</h2>
        <p>
          Ensuring the success of Africa’s digital transformation requires key strategic enablers:
        </p>
        <div className="my-8">
          <StrategicEnablers />
        </div>
      </section>

      <section>
        <h2>Looking Forward</h2>
        <p>
          The path to Africa’s digital future requires:
        </p>
        <ul>
          <li>Unified digital policies and cross-border collaboration.</li>
          <li>Investment in emerging technologies like AI, IoT, and 5G.</li>
          <li>Strong monitoring frameworks for evaluating progress.</li>
          <li>Partnerships between government, private sector, and civil society.</li>
          <li>Ensuring digital transformation benefits reach all communities.</li>
        </ul>
        <p>
          With sustained commitment, strategic investments, and inclusive policies, Africa is poised to establish itself as 
          a global leader in digital innovation.
        </p>
      </section>

      <footer className="mt-16 pt-8 border-t border-foreground/10">
        <div className="flex flex-wrap gap-2 mb-8">
          {["Digital Transformation", "Africa", "Innovation", "Policy", "Development"].map((tag) => (
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
            className="group flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-sm">Previous</div>
              <div className="font-medium">Digital Transformation Risks</div>
            </div>
          </Link>
          <Link
            href="/blog/ai-future"
            className="group flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors no-underline"
          >
            <div className="text-right">
              <div className="text-sm">Next</div>
              <div className="font-medium">The AI Revolution in Africa</div>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </footer>
    </article>
  );
}