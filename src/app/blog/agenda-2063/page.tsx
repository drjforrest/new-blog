'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StrategyFramework } from '@/components/visualizations/strategy-framework';
import { PolicyRecommendations } from '@/components/visualizations/policy-recommendations';
import { StrategicEnablers } from '@/components/visualizations/strategic-enablers';
import { TechnologyPillars } from '@/components/visualizations/technology-pillars';
import { ImplementationProgress } from '@/components/visualizations/implementation-progress';
import Image from 'next/image';

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
          Africa's digital future is being shaped by an ambitious vision: the Digital Transformation 
          Strategy for Africa. This comprehensive framework aims to harness digital technologies and 
          innovation to transform African societies and economies, promoting continental integration, 
          inclusive growth, and poverty eradication.
        </p>
      </header>

      <section>
        <h2>A Unified Vision for Digital Africa</h2>
        <p>
          The Digital Transformation Strategy for Africa represents a bold commitment to leveraging 
          technology for societal transformation. It seeks to use digital technologies and innovation 
          to transform African societies and economies, promote Africa's integration, generate inclusive 
          economic growth, stimulate job creation, break digital divides, and eradicate poverty.
        </p>
        <div className="my-8">
          <StrategyFramework />
        </div>
      </section>

      <section>
        <h2>Strategic Frameworks in Action</h2>
        <p>
          Agenda 2063 stands as a 50-year plan to harness Africa's comparative advantages and deliver 
          on the vision of "The Africa We Want". This ambitious blueprint envisions Africa as an equal 
          player in the global information society and integrated e-economy, where every government, 
          business, and citizen has access to reliable and affordable ICT services.
        </p>
        <p>
          Supporting this vision, the African Union's Science, Technology, and Innovation Strategy for 
          Africa 2024 (STISA-2024) positions innovation at the center of Africa's socio-economic 
          development. Developed in 2014, it provides a crucial framework for accelerating Africa's 
          transition to an innovation-led, knowledge-based economy.
        </p>
      </section>

      <section>
        <h2>Technology Pillars</h2>
        <p>
          The successful implementation of Africa's digital transformation strategy relies on several 
          key technological pillars. These foundational elements work together to create a robust 
          digital ecosystem that can support the continent's ambitious goals.
        </p>
        <div className="my-8">
          <TechnologyPillars />
        </div>
      </section>

      <section>
        <h2>Implementation Progress</h2>
        <p>
          The journey toward digital transformation shows varying levels of progress across different 
          regions of Africa. This diversity reflects local challenges, resources, and priorities, while 
          also highlighting opportunities for cross-regional learning and collaboration.
        </p>
        <div className="my-8">
          <ImplementationProgress />
        </div>
      </section>

      <section>
        <h2>Policy Framework</h2>
        <p>
          To bring African digital development up to speed, a comprehensive set of policy recommendations 
          has been developed. These guidelines aim to create an enabling environment for digital 
          transformation while ensuring inclusive and sustainable development.
        </p>
        <div className="my-8">
          <PolicyRecommendations />
        </div>
      </section>

      <section>
        <h2>Strategic Enablers</h2>
        <p>
          The success of Africa's digital transformation agenda depends on several critical enabling 
          factors. These strategic enablers form the foundation upon which technological advancement 
          and policy implementation can build.
        </p>
        <div className="my-8">
          <StrategicEnablers />
        </div>
      </section>

      <section>
        <h2>Looking Forward</h2>
        <p>
          As Africa moves forward with its digital transformation agenda, several key priorities emerge:
        </p>
        <ul>
          <li>
            Harmonizing policies and regulations across regions to facilitate digital trade and 
            integration
          </li>
          <li>
            Developing comprehensive frameworks for emerging technologies like AI, IoT, and 5G
          </li>
          <li>
            Building robust monitoring and evaluation systems to track progress and impact
          </li>
          <li>
            Strengthening partnerships between government, private sector, and civil society
          </li>
          <li>
            Ensuring digital transformation benefits reach all segments of society
          </li>
        </ul>
        <p>
          The success of these initiatives will require sustained commitment, innovative financing 
          mechanisms, and deeper collaboration between stakeholders. As the continent progresses 
          toward 2063, the foundations being laid today will shape Africa's digital future for 
          generations to come.
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