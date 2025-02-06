'use client';

import React from 'react';
import dynamic from 'next/dynamic';

interface ClientComponentProps {
  component: string;
  props?: any;
}

export function ClientComponent({ component, props = {} }: ClientComponentProps) {
  const Component = React.useMemo(() => {
    switch (component) {
      case 'InfrastructureGaps':
        return dynamic(() => import('./infrastructure-gaps').then((mod) => mod.InfrastructureGaps), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'CyberVulnerabilities':
        return dynamic(() => import('./cyber-vulnerabilities').then((mod) => mod.CyberVulnerabilities), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'DigitalSovereignty':
        return dynamic(() => import('./digital-sovereignty').then((mod) => mod.DigitalSovereignty), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'AIMarketGrowth':
        return dynamic(() => import('./ai-market-growth').then((mod) => mod.AIMarketGrowth), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'SectorTransformation':
        return dynamic(() => import('./sector-transformation').then((mod) => mod.SectorTransformation), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'YouthDevelopment':
        return dynamic(() => import('./youth-development').then((mod) => mod.YouthDevelopment), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'DigitalVisionExplorer':
        return dynamic(() => import('./digital-vision-explorer').then((mod) => mod.DigitalVisionExplorer), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'AIUseCases':
        return dynamic(() => import('./ai-use-cases').then((mod) => mod.AIUseCases), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'CountryLeadership':
        return dynamic(() => import('./country-leadership').then((mod) => mod.CountryLeadership), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'AIEconomicPotential':
        return dynamic(() => import('./ai-economic-potential').then((mod) => mod.AIEconomicPotential), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'AIEconomicDashboard':
        return dynamic(() => import('./ai-economic-dashboard').then((mod) => mod.AIEconomicDashboard), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'AIImplementationRoadmap':
        return dynamic(() => import('./ai-implementation-roadmap').then((mod) => mod.AIImplementationRoadmap), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      case 'AfricaDevelopmentDashboard':
        return dynamic(() => import('./africa-development-dashboard').then((mod) => mod.AfricaDevelopmentDashboard), {
          loading: () => <div>Loading...</div>,
          ssr: false,
        });
      default:
        throw new Error(`Unknown component: ${component}`);
    }
  }, [component]);

  return <Component {...props} />;
}
