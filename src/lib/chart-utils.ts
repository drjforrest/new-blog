type Theme = 'light' | 'dark' | 'system';

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
    primary: isDark ? '#3B82F6' : '#2563EB',    // Blue
    accent: isDark ? '#F59E0B' : '#D97706',     // Amber
    success: isDark ? '#10B981' : '#059669',    // Emerald
    neutral: isDark ? '#6B7280' : '#4B5563',    // Gray
    foreground: isDark ? '#F3F4F6' : '#1F2937', // Text
    background: isDark ? '#1F2937' : '#FFFFFF',  // Background
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