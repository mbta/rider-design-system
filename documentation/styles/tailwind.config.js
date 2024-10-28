const plugin = require('tailwindcss/plugin')
const tailwindConfig = require("../../dist/tailwind.config.cjs");

module.exports = {
  content: [
    "_includes/**/*.njk"
  ],
  safelist: [
    { pattern: /(text|bg)-./ }
  ],
  darkMode: 'media',
  variants: {},
  theme: {
    extend: {
      ...tailwindConfig.theme,
      colors: tailwindConfig.theme.color
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
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.heading'),
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.2'),
          '&:has(+p)': {
            marginBottom: theme('spacing.1')
          }
        },
        'h1 + h2, h2 + h3, h3 + h4, h4 + h5, h5 + h6, p + h3, p + h4, p + h5, p + h6':  {
          marginTop: theme('spacing.3')
        },
        'h1': { 
          fontSize: theme('fontSize.4xl')
        },
        'h2': { 
          fontSize: theme('fontSize.3xl')
        },
        'h3': { 
          fontSize: theme('fontSize.2xl')
        },
        'h4': { 
          fontSize: theme('fontSize.lg')
        },
        'h5': { 
          fontSize: theme('fontSize.base')
        },
        'h6': { 
          fontSize: theme('fontSize.sm')
        },
      })
    })
  ],
}
