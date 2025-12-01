// 2025 PrettyPenny Theme Tokens

export const colors = {
  // Core colors
  ppPrimary: "#7ED956",     // Vibrant lime green (anchor)
  ppAccent: "#018180",      // Teal accent
  ppLuxeGold: "#A8E6A1",    // Soft mint highlight
  ppDeep: "#071435",        // Deep navy
  ppSurface: "#F8FCF8",     // Fresh mint-cream surface
  ppText: "#071435",        // Deep navy text

  // Gradients
  ppHeroGradient: `
    linear-gradient(
      135deg,
      #7ED956 0%,
      #A8E6A1 35%,
      #E6FFFA 70%,
      #018180 100%
    )
  `,
  ppAccentGradient: `
    linear-gradient(
      135deg,
      #7ED956 0%,
      #018180 100%
    )
  `,
  ppSoftBlend: `
    linear-gradient(
      180deg,
      #F8FCF8 0%,
      #E6FFFA 100%
    )
  `,

  // Glass surfaces
  ppGlassSurface: "rgba(248, 252, 248, 0.35)",
  ppGlassBorder: "rgba(126, 217, 86, 0.18)",
};

const theme2025 = {
  color: {
    primary: colors.ppPrimary, // Anchor color
    secondary: colors.ppAccent,
    accent: colors.ppLuxeGold,
    background: {
      white: "#ffffff",
      light: colors.ppSurface,
    },
    white: {
      regular: "#ffffff",
      lessdark: "#faf9f8",
      dark: "#f6f6f6",
      darker: "#eeeeee",
    },
    black: {
      lightest: "#ABA8AF",
      light: colors.ppText,
      regular: colors.ppText, // Mapped to ppText as requested
    },
    // New tokens
    ...colors,
  },
  font: {
    primary: `'HK Grotesk Normal'`,
    secondary: `'HK Grotesk Medium'`,
    light: `'HK Grotesk Light'`,
    normal: `'HK Grotesk Normal'`,
    regular: `'HK Grotesk Normal'`, // Added for compatibility
    medium: `'HK Grotesk Medium'`,
    semibold: `'HK Grotesk Semibold'`,
    bold: `'HK Grotesk Bold'`,
    extrabold: `'HK Grotesk Extra Bold'`,
  },
  font_size: {
    xxxsmall: "font-size: 12px;",
    xxsmall: "font-size: 14px;",
    xsmall: "font-size: 16px;",
    small: "font-size: 17px;",
    regular: "font-size: 22px; line-height: 30px;",
    large: "font-size: 28px; line-height: 30px;",
    larger: "font-size: 40px; line-height: 50px;",
    xlarge: "font-size: 48px; line-height: 48px;",
  },
  screen: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
  },
};

export default theme2025;
