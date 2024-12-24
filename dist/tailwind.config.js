/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  mode: "jit",
  content: [],
  darkMode: "media",
  theme: {
    colors: {
      charcoal: {
        10: "var(--colors-charcoal-10)",
        20: "var(--colors-charcoal-20)",
        30: "var(--colors-charcoal-30)",
        40: "var(--colors-charcoal-40)",
        50: "var(--colors-charcoal-50)",
        60: "var(--colors-charcoal-60)",
        70: "var(--colors-charcoal-70)",
        80: "var(--colors-charcoal-80)",
        90: "var(--colors-charcoal-90)"
      },
      cobalt: {
        10: "var(--colors-cobalt-10)",
        20: "var(--colors-cobalt-20)",
        30: "var(--colors-cobalt-30)",
        40: "var(--colors-cobalt-40)",
        50: "var(--colors-cobalt-50)",
        60: "var(--colors-cobalt-60)",
        70: "var(--colors-cobalt-70)",
        80: "var(--colors-cobalt-80)",
        90: "var(--colors-cobalt-90)"
      },
      gold: {
        10: "var(--colors-gold-10)",
        20: "var(--colors-gold-20)",
        30: "var(--colors-gold-30)",
        40: "var(--colors-gold-40)",
        50: "var(--colors-gold-50)",
        60: "var(--colors-gold-60)",
        70: "var(--colors-gold-70)",
        80: "var(--colors-gold-80)",
        90: "var(--colors-gold-90)"
      },
      firebrick: {
        10: "var(--colors-firebrick-10)",
        20: "var(--colors-firebrick-20)",
        30: "var(--colors-firebrick-30)",
        40: "var(--colors-firebrick-40)",
        50: "var(--colors-firebrick-50)",
        60: "var(--colors-firebrick-60)",
        70: "var(--colors-firebrick-70)",
        80: "var(--colors-firebrick-80)",
        90: "var(--colors-firebrick-90)"
      },
      emerald: {
        10: "var(--colors-emerald-10)",
        20: "var(--colors-emerald-20)",
        30: "var(--colors-emerald-30)",
        40: "var(--colors-emerald-40)",
        50: "var(--colors-emerald-50)",
        60: "var(--colors-emerald-60)",
        70: "var(--colors-emerald-70)",
        80: "var(--colors-emerald-80)",
        90: "var(--colors-emerald-90)"
      },
      amethyst: {
        10: "var(--colors-amethyst-10)",
        20: "var(--colors-amethyst-20)",
        30: "var(--colors-amethyst-30)",
        40: "var(--colors-amethyst-40)",
        50: "var(--colors-amethyst-50)",
        60: "var(--colors-amethyst-60)",
        70: "var(--colors-amethyst-70)",
        80: "var(--colors-amethyst-80)",
        90: "var(--colors-amethyst-90)"
      },
      white: "var(--colors-white)",
      black: "var(--colors-black)",
      "green-line": "var(--colors-green-line)",
      "orange-line": "var(--colors-orange-line)",
      "red-line": "var(--colors-red-line)",
      "blue-line": "var(--colors-blue-line)",
      "silver-line": "var(--colors-silver-line)",
      "brand-bus": "var(--colors-brand-bus)",
      ferry: "var(--colors-ferry)",
      "the-ride": "var(--colors-the-ride)",
      "commuter-rail": "var(--colors-commuter-rail)",
      swa: "var(--colors-swa)",
      "mbta-dark": "var(--colors-mbta-dark)",
      "dark-winter": "var(--colors-dark-winter)",
      "mid-winter": "var(--colors-mid-winter)"
    },
    fontFamily: {
      base: "var(--font-family-base)",
      heading: "var(--font-family-heading)",
      inter: "var(--font-family-inter)",
      helvetica: "var(--font-family-helvetica)"
    },
    borderRadius: {
      none: "var(--border-radius-none)",
      xs: "var(--border-radius-xs)",
      DEFAULT: "var(--border-radius-default)",
      md: "var(--border-radius-md)",
      lg: "var(--border-radius-lg)",
      xl: "var(--border-radius-xl)",
    "2xl": "var(--border-radius-2xl)",
    "4xl": "var(--border-radius-4xl)",
      full: "var(--border-radius-full)",
      sm: "var(--border-radius-sm)"
    },
    borderWidth: {
      DEFAULT: "var(--border-width-default)",
      xs: "var(--border-width-xs)",
      sm: "var(--border-width-sm)",
      md: "var(--border-width-md)",
      lg: "var(--border-width-lg)"
    },
    spacing: {
      none: "var(--spacing-none)",
      xs: "var(--spacing-xs)",
      sm: "var(--spacing-sm)",
      md: "var(--spacing-md)",
      lg: "var(--spacing-lg)",
      xl: "var(--spacing-xl)",
    "2xl": "var(--spacing-2xl)",
      px: "var(--spacing-px)",
      DEFAULT: "var(--spacing-default)"
    },
    fontSize: {
      sm: "var(--font-size-sm)",
      DEFAULT: "var(--font-size-default)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
    "2xl": "var(--font-size-2xl)",
      md: "var(--font-size-md)"
    },
    transitionDuration: {
      DEFAULT: "var(--transition-duration-default)"
    },
    lineHeight: {
      DEFAULT: "var(--line-height-default)",
      md: "var(--line-height-md)",
      lg: "var(--line-height-lg)",
    "2xl": "var(--line-height-2xl)",
      xl: "var(--line-height-xl)"
    },
    minimumTapTargetSize: "var(--minimum-tap-target-size)"
  },
};
export default tailwindConfig.theme;
