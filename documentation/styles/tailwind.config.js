const plugin = require('tailwindcss/plugin')
const tailwindConfig = require("../../dist/tailwind.config.cjs");

module.exports = {
  content: [
    "_includes/**/*.njk",
    "content/**/*",
  ],
  safelist: [
    { pattern: /(text|bg)-./ }
  ],
  darkMode: 'media',
  variants: {},
  theme: {
    extend: {
      ...tailwindConfig.theme,
      colors: tailwindConfig.theme.color,
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function headings({ addBase, theme }) {
      addBase({
        'html': {
          fontFamily: theme('fontFamily.base')
        },
        'h1, h2, h3, h4, h5, h6':  {
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.heading'),
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.2'),
          '&:has(+p)': {
            marginBottom: theme('spacing.1')
          }
        },
        'p': {
          marginTop: theme('spacing.4'),
          marginBottom: theme('spacing.2')
        },
        'ul': {
          listStyle: 'disc',
          paddingLeft: theme('spacing.4')
        },
        'h1 + h2, h2 + h3, h3 + h4, h4 + h5, h5 + h6, p + h3, p + h4, p + h5, p + h6':  {
          marginTop: theme('spacing.3')
        },
        'h1': { 
          fontSize: theme('fontSize.2xl')
        },
        'h2': { 
          fontSize: theme('fontSize.xl')
        },
        'h3': { 
          fontSize: theme('fontSize.lg')
        },
        'h4': { 
          fontSize: theme('fontSize.md')
        },
        'h5': { 
          fontSize: theme('fontSize.sm')
        },
        'h6': { 
          fontSize: theme('fontSize.sm')
        },
      })
    })
  ],
}
