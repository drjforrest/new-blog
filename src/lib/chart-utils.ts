import { type Theme } from 'next-themes';

// Format large numbers with K, M, B suffixes
export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// Format percentage values
export function formatPercentage(num: number): string {
  return `${num.toFixed(1)}%`;
}

// Get chart colors based on theme
export function getChartColors(theme: Theme | undefined) {
  const isDark = theme === 'dark';
  
  return {
    primary: isDark ? '#2A9D8F' : '#1A3A5C',
    accent: isDark ? '#D62828' : '#D62828',
    success: isDark ? '#3CBDAF' : '#2A9D8F',
    neutral: isDark ? '#4B4D62' : '#2B2D42',
    background: isDark ? '#2B2D42' : '#F4F1DE',
    foreground: isDark ? '#F4F1DE' : '#2B2D42',
  };
}

// Generate a gradient for area charts
export function generateGradient(color: string, opacity: number = 0.2): string {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
}

// Calculate nice axis intervals
export function calculateAxisInterval(
  min: number,
  max: number,
  targetSteps: number = 5
): number {
  const range = max - min;
  const roughStep = range / targetSteps;
  
  const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const normalizedStep = roughStep / magnitude;
  
  let niceStep;
  if (normalizedStep < 1.5) niceStep = 1;
  else if (normalizedStep < 3) niceStep = 2;
  else if (normalizedStep < 7) niceStep = 5;
  else niceStep = 10;
  
  return niceStep * magnitude;
}

// Create tick formatter for dates
export function createDateTickFormatter(format: 'year' | 'month' | 'day' = 'year') {
  return (timestamp: number) => {
    const date = new Date(timestamp);
    switch (format) {
      case 'year':
        return date.getFullYear().toString();
      case 'month':
        return date.toLocaleString('default', { month: 'short' });
      case 'day':
        return date.toLocaleString('default', { day: 'numeric', month: 'short' });
      default:
        return date.toLocaleDateString();
    }
  };
}

// Create common chart margins
export const chartMargins = {
  small: { top: 5, right: 5, bottom: 5, left: 5 },
  medium: { top: 10, right: 30, bottom: 30, left: 40 },
  large: { top: 20, right: 40, bottom: 40, left: 60 },
};

// Common chart animation config
export const chartAnimationConfig = {
  duration: 800,
  easing: 'ease-out',
};