export const themeTokens = {
  light: {
    background: "250 250 249",    // Base background
    foreground: "20 20 20",       // Primary text
    primary: "26 58 92",          // Deep Blue - digital focus
    accent: "214 40 40",          // Crimson - energy/passion
    success: "42 157 143",        // Emerald - growth
    muted: "112 66 20",           // Earth Brown - grounding
    surface: {
      base: "255 255 255",        // Card backgrounds
      muted: "245 245 245",       // Muted surfaces
      elevated: "250 250 250",    // Elevated surfaces
    },
    border: "229 231 235",        // Borders
  },
  dark: {
    background: "23 23 23",
    foreground: "250 250 249",
    primary: "42 157 143",        // Emerald takes focus in dark mode
    accent: "214 40 40",          // Crimson maintains energy
    success: "26 58 92",          // Deep Blue becomes secondary
    muted: "161 161 170",
    surface: {
      base: "32 32 32",
      muted: "39 39 42",
      elevated: "45 45 45",
    },
    border: "63 63 70",
  }
};

// Semantic tokens for consistent spacing, radius, and animations
export const semanticTokens = {
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
  },
  radius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
  },
  animation: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  }
};