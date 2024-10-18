/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  darkMode: "media",
  theme: {
    color: {
      blue: {
        50: "var(--color-blue-50)",
        100: "var(--color-blue-100)",
        200: "var(--color-blue-200)",
        300: "var(--color-blue-300)",
        400: "var(--color-blue-400)",
        500: "var(--color-blue-500)",
        600: "var(--color-blue-600)",
        700: "var(--color-blue-700)",
        800: "var(--color-blue-800)",
        900: "var(--color-blue-900)"
      },
      neutral: {
        50: "var(--color-neutral-50)",
        100: "var(--color-neutral-100)",
        200: "var(--color-neutral-200)",
        300: "var(--color-neutral-300)",
        400: "var(--color-neutral-400)",
        500: "var(--color-neutral-500)",
        600: "var(--color-neutral-600)",
        700: "var(--color-neutral-700)",
        800: "var(--color-neutral-800)",
        900: "var(--color-neutral-900)",
        1000: "var(--color-neutral-1000)"
      },
      white: "var(--color-white)",
      yellow: {
        50: "var(--color-yellow-50)",
        100: "var(--color-yellow-100)",
        200: "var(--color-yellow-200)",
        300: "var(--color-yellow-300)",
        400: "var(--color-yellow-400)",
        500: "var(--color-yellow-500)",
        600: "var(--color-yellow-600)",
        700: "var(--color-yellow-700)",
        800: "var(--color-yellow-800)",
        900: "var(--color-yellow-900)"
      },
      red: {
        50: "var(--color-red-50)",
        100: "var(--color-red-100)",
        200: "var(--color-red-200)",
        300: "var(--color-red-300)",
        400: "var(--color-red-400)",
        500: "var(--color-red-500)",
        600: "var(--color-red-600)",
        700: "var(--color-red-700)",
        800: "var(--color-red-800)",
        900: "var(--color-red-900)"
      },
      green: {
        50: "var(--color-green-50)",
        100: "var(--color-green-100)",
        200: "var(--color-green-200)",
        300: "var(--color-green-300)",
        400: "var(--color-green-400)",
        500: "var(--color-green-500)",
        600: "var(--color-green-600)",
        700: "var(--color-green-700)",
        800: "var(--color-green-800)",
        900: "var(--color-green-900)"
      },
      purple: {
        50: "var(--color-purple-50)",
        100: "var(--color-purple-100)",
        200: "var(--color-purple-200)",
        300: "var(--color-purple-300)",
        400: "var(--color-purple-400)",
        500: "var(--color-purple-500)",
        600: "var(--color-purple-600)",
        700: "var(--color-purple-700)",
        800: "var(--color-purple-800)",
        900: "var(--color-purple-900)"
      },
      black: "var(--color-black)",
      system: {
        red: {
          100: "var(--color-system-red-100)",
          200: "var(--color-system-red-200)",
          300: "var(--color-system-red-300)",
          400: "var(--color-system-red-400)",
          500: "var(--color-system-red-500)",
          600: "var(--color-system-red-600)",
          700: "var(--color-system-red-700)",
          800: "var(--color-system-red-800)",
          900: "var(--color-system-red-900)"
        },
        green: {
          50: "var(--color-system-green-50)",
          100: "var(--color-system-green-100)",
          200: "var(--color-system-green-200)",
          300: "var(--color-system-green-300)",
          400: "var(--color-system-green-400)",
          500: "var(--color-system-green-500)",
          600: "var(--color-system-green-600)",
          700: "var(--color-system-green-700)",
          800: "var(--color-system-green-800)",
          900: "var(--color-system-green-900)"
        },
        blue: {
          50: "var(--color-system-blue-50)",
          100: "var(--color-system-blue-100)",
          200: "var(--color-system-blue-200)",
          300: "var(--color-system-blue-300)",
          400: "var(--color-system-blue-400)",
          500: "var(--color-system-blue-500)",
          600: "var(--color-system-blue-600)",
          700: "var(--color-system-blue-700)",
          800: "var(--color-system-blue-800)",
          900: "var(--color-system-blue-900)"
        },
        orange: {
          100: "var(--color-system-orange-100)",
          200: "var(--color-system-orange-200)",
          300: "var(--color-system-orange-300)",
          400: "var(--color-system-orange-400)",
          500: "var(--color-system-orange-500)",
          600: "var(--color-system-orange-600)",
          700: "var(--color-system-orange-700)",
          800: "var(--color-system-orange-800)",
          900: "var(--color-system-orange-900)"
        },
        silver: {
          50: "var(--color-system-silver-50)",
          100: "var(--color-system-silver-100)",
          200: "var(--color-system-silver-200)",
          300: "var(--color-system-silver-300)",
          400: "var(--color-system-silver-400)",
          500: "var(--color-system-silver-500)",
          600: "var(--color-system-silver-600)",
          700: "var(--color-system-silver-700)",
          800: "var(--color-system-silver-800)",
          900: "var(--color-system-silver-900)"
        },
        yellow: {
          50: "var(--color-system-yellow-50)",
          100: "var(--color-system-yellow-100)",
          200: "var(--color-system-yellow-200)",
          300: "var(--color-system-yellow-300)",
          400: "var(--color-system-yellow-400)",
          500: "var(--color-system-yellow-500)",
          600: "var(--color-system-yellow-600)",
          700: "var(--color-system-yellow-700)",
          800: "var(--color-system-yellow-800)",
          900: "var(--color-system-yellow-900)"
        },
        purple: {
          50: "var(--color-system-purple-50)",
          100: "var(--color-system-purple-100)",
          200: "var(--color-system-purple-200)",
          300: "var(--color-system-purple-300)",
          400: "var(--color-system-purple-400)",
          500: "var(--color-system-purple-500)",
          600: "var(--color-system-purple-600)",
          700: "var(--color-system-purple-700)",
          800: "var(--color-system-purple-800)",
          900: "var(--color-system-purple-900)"
        },
        teal: {
          50: "var(--color-system-teal-50)",
          100: "var(--color-system-teal-100)",
          200: "var(--color-system-teal-200)",
          300: "var(--color-system-teal-300)",
          400: "var(--color-system-teal-400)",
          500: "var(--color-system-teal-500)",
          600: "var(--color-system-teal-600)",
          700: "var(--color-system-teal-700)",
          800: "var(--color-system-teal-800)",
          900: "var(--color-system-teal-900)"
        },
        turquoise: {
          50: "var(--color-system-turquoise-50)",
          100: "var(--color-system-turquoise-100)",
          200: "var(--color-system-turquoise-200)",
          300: "var(--color-system-turquoise-300)",
          400: "var(--color-system-turquoise-400)",
          500: "var(--color-system-turquoise-500)",
          600: "var(--color-system-turquoise-600)",
          700: "var(--color-system-turquoise-700)",
          800: "var(--color-system-turquoise-800)",
          900: "var(--color-system-turquoise-900)"
        },
        cyan: {
          50: "var(--color-system-cyan-50)",
          100: "var(--color-system-cyan-100)",
          200: "var(--color-system-cyan-200)",
          300: "var(--color-system-cyan-300)",
          400: "var(--color-system-cyan-400)",
          500: "var(--color-system-cyan-500)",
          600: "var(--color-system-cyan-600)",
          700: "var(--color-system-cyan-700)",
          800: "var(--color-system-cyan-800)",
          900: "var(--color-system-cyan-900)"
        },
        neutral: {
          50: "var(--color-system-neutral-50)",
          100: "var(--color-system-neutral-100)",
          200: "var(--color-system-neutral-200)",
          300: "var(--color-system-neutral-300)",
          400: "var(--color-system-neutral-400)",
          500: "var(--color-system-neutral-500)",
          900: "var(--color-system-neutral-900)"
        },
        slate: {
          50: "var(--color-system-slate-50)",
          100: "var(--color-system-slate-100)",
          200: "var(--color-system-slate-200)",
          300: "var(--color-system-slate-300)",
          400: "var(--color-system-slate-400)",
          500: "var(--color-system-slate-500)",
          900: "var(--color-system-slate-900)"
        },
        sky: {
          50: "var(--color-system-sky-50)",
          100: "var(--color-system-sky-100)",
          200: "var(--color-system-sky-200)",
          300: "var(--color-system-sky-300)",
          400: "var(--color-system-sky-400)",
          500: "var(--color-system-sky-500)",
          600: "var(--color-system-sky-600)",
          700: "var(--color-system-sky-700)",
          800: "var(--color-system-sky-800)",
          900: "var(--color-system-sky-900)"
        },
        greenLine: "var(--color-system-green-line)",
        orangeLine: "var(--color-system-orange-line)",
        redLine: "var(--color-system-red-line)",
        blueLine: "var(--color-system-blue-line)",
        brandBus: "var(--color-system-brand-bus)",
        silverLine: "var(--color-system-silver-line)",
        ferry: "var(--color-system-ferry)",
        theRide: "var(--color-system-the-ride)",
        commuterRail: "var(--color-system-commuter-rail)",
        swa: "var(--color-system-swa)",
        mbtaDark: "var(--color-system-mbta-dark)",
        darkWinter: "var(--color-system-dark-winter)",
        midWinter: "var(--color-system-mid-winter)"
      }
    },
    fontFamily: {
      default: "var(--font-family-default)",
      inter: "var(--font-family-inter)"
    },
    borderRadius: {
      sm: "var(--border-radius-sm)",
      DEFAULT: "var(--border-radius-default)",
      lg: "var(--border-radius-lg)",
      xl: "var(--border-radius-xl)",
    "2xl": "var(--border-radius-2xl)",
    "4xl": "var(--border-radius-4xl)",
      none: "var(--border-radius-none)",
      md: "var(--border-radius-md)",
      full: "var(--border-radius-full)"
    },
    borderWidth: {
      DEFAULT: "var(--border-width-default)"
    },
    fontSize: {
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      lg: "var(--font-size-lg)",
    "2xl": "var(--font-size-2xl)",
    "4xl": "var(--font-size-4xl)"
    },
    lineHeight: {
      loose: "var(--line-height-loose)",
      normal: "var(--line-height-normal)",
      relaxed: "var(--line-height-relaxed)"
    },
    spacing: {
      0: "var(--spacing-0)",
      1: "var(--spacing-1)",
      2: "var(--spacing-2)",
      3: "var(--spacing-3)",
      4: "var(--spacing-4)",
      5: "var(--spacing-5)",
      6: "var(--spacing-6)",
      px: "var(--spacing-px)"
    },
    transitionDuration: {
      DEFAULT: "var(--transition-duration-default)"
    }
  },
}