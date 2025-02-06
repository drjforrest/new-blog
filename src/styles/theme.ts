export const blogTheme = {
  name: 'Digital Development & Data Science',
  colors: {
    light: {
      primary: '26 58 92',    // Deep Blue - digital focus
      accent: '214 40 40',    // Crimson - energy/passion
      success: '42 157 143',  // Emerald - growth
      foreground: '43 45 66', // Charcoal - readability
      background: '244 241 222', // Ivory - clarity
      muted: '112 66 20',     // Earth Brown - grounding
    },
    dark: {
      primary: '42 157 143',  // Emerald takes focus
      accent: '214 40 40',    // Crimson maintains energy
      success: '26 58 92',    // Deep Blue becomes secondary
      foreground: '244 241 222', // Ivory for text
      background: '43 45 66', // Charcoal background
      muted: '112 66 20',    // Earth Brown maintains grounding
    }
  },
  heroIcons: [
    {
      icon: 'LineChart',
      label: 'Data Analysis',
      className: 'text-primary'
    },
    {
      icon: 'BarChart2',
      label: 'Visualization',
      className: 'text-accent'
    },
    {
      icon: 'PieChart',
      label: 'Insights',
      className: 'text-success'
    }
  ]
};