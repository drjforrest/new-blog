export const chartColors = {
  background: "rgb(244 241 222)",  // Ivory
  foreground: "rgb(43 45 66)",     // Charcoal
  primary: "rgb(26 58 92)",        // Deep navy
  accent: "rgb(114 83 52)",        // Rich bronze
  success: "rgb(42 157 143)",      // Emerald
  muted: "rgb(112 66 20)",         // Warm brown
  
  // Extended palette for charts
  series: [
    '#3B82F6',  // blue
    '#10B981',  // green
    '#F59E0B',  // amber
    '#EF4444',  // red
    '#8B5CF6',  // purple
  ]
};

export const chartDefaults = {
  // Common chart configuration
  responsive: true,
  maintainAspectRatio: false,
  
  // Text styling
  fontFamily: "'Inter', sans-serif",
  fontSize: 12,
  
  // Axis styling
  axisStyle: {
    stroke: '#6B7280'
  },
  
  // Grid styling
  gridStyle: {
    strokeDasharray: '3 3',
    stroke: '#E5E7EB'
  },
  
  // Legend styling
  legendStyle: {
    padding: 20,
    fontSize: 12,
    iconSize: 10,
    iconType: 'circle' as 'circle' | 'line' | 'rect' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye'
  },
  
  // Tooltip styling
  tooltipStyle: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    padding: '8px'
  }
};

// Helper function to get series color
export const getSeriesColor = (index: number): string => {
  return chartColors.series[index % chartColors.series.length];
};