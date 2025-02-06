export type ChartType = 
  | 'AIGrowth'
  | 'DigitalInclusion'
  | 'TechAdoption'
  | 'RegionalComparison';

export interface BaseChartProps {
  type: ChartType;
  data?: string;
  title?: string;
  description?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
  }[];
}