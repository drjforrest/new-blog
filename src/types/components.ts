import type { ReactNode } from 'react';

// Base props that all MDX components can receive
export interface BaseComponentProps {
  [key: string]: unknown;
}

// Props for each component type
export interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export interface VisualizationBlockProps {
  type: keyof typeof import('../components/visualizations');
}

export interface DataVisualizationWrapperProps {
  title: string;
  description: string;
  insights: string[];
  children: ReactNode;
}

// MDX component map
export interface MDXComponentsMap {
  a: React.ComponentType<LinkProps>;
  VisualizationBlock: React.ComponentType<VisualizationBlockProps>;
  DataVisualizationWrapper: React.ComponentType<DataVisualizationWrapperProps>;
  DigitalVisionExplorer: React.ComponentType<unknown>;
  AIUseCases: React.ComponentType<unknown>;
  InfrastructureGaps: React.ComponentType<unknown>;
  SectorTransformation: React.ComponentType<unknown>;
  CyberVulnerabilities: React.ComponentType<unknown>;
  AIEconomicPotential: React.ComponentType<unknown>;
  DigitalSovereignty: React.ComponentType<unknown>;
  CountryLeadership: React.ComponentType<unknown>;
  ImplementationProgress: React.ComponentType<unknown>;
} 