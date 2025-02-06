// Color palette for data visualizations that matches our theme
export const vizColors = {
  // Primary colors for main data points
  primary: {
    base: '#1A3A5C', // Deep Blue
    light: '#2A5A8C',
    dark: '#102438',
  },
  
  // Accent colors for highlighting important data
  accent: {
    base: '#D62828', // Crimson Red
    light: '#E84848',
    dark: '#B01818',
  },
  
  // Success/positive trend colors
  success: {
    base: '#2A9D8F', // Emerald Green
    light: '#3CBDAF',
    dark: '#1A7D6F',
  },
  
  // Neutral/supporting colors
  neutral: {
    base: '#2B2D42', // Charcoal Gray
    light: '#4B4D62',
    dark: '#1B1D32',
  },
  
  // Background colors
  background: {
    base: '#F4F1DE', // Ivory
    light: '#FFFFFF',
    dark: '#E4E1CE',
  },
  
  // Earth tones for additional data points
  earth: {
    base: '#704214', // Earth Brown
    light: '#905434',
    dark: '#503004',
  },
};

// Sequential color scales for continuous data
export const sequentialColors = [
  '#1A3A5C',
  '#2A5A8C',
  '#3A7ABC',
  '#4A9AEC',
  '#5ABAFF',
];

// Diverging color scale for comparing positive/negative values
export const divergingColors = [
  '#D62828', // negative
  '#E84848',
  '#F4F1DE', // neutral
  '#2A9D8F',
  '#1A7D6F', // positive
];

// Categorical color scale for discrete data
export const categoricalColors = [
  '#1A3A5C', // Deep Blue
  '#D62828', // Crimson Red
  '#2A9D8F', // Emerald Green
  '#704214', // Earth Brown
  '#2B2D42', // Charcoal Gray
];

// Color scales for specific chart types
export const chartColors = {
  // For line charts
  line: {
    stroke: vizColors.primary.base,
    fill: `${vizColors.primary.base}20`, // 20% opacity
  },
  
  // For area charts
  area: {
    stroke: vizColors.success.base,
    fill: `${vizColors.success.base}20`,
  },
  
  // For bar charts
  bar: categoricalColors,
  
  // For pie/donut charts
  pie: categoricalColors,
  
  // For heatmaps
  heatmap: sequentialColors,
};

// Dark mode variants
export const darkModeColors = {
  ...vizColors,
  primary: {
    base: '#2A9D8F', // Emerald Green becomes primary
    light: '#3CBDAF',
    dark: '#1A7D6F',
  },
  background: {
    base: '#2B2D42', // Charcoal becomes background
    light: '#4B4D62',
    dark: '#1B1D32',
  },
};

// Helper function to get color based on theme
export const getThemeColors = (isDarkMode: boolean) => {
  return isDarkMode ? darkModeColors : vizColors;
};