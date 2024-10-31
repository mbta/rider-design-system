/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  darkMode: "media",
  theme: {
    color: {
      charcoal: {
        10: "#1c1e23",
        20: "#28343e",
        30: "#494f5c",
        40: "#626a73",
        50: "#777f92",
        60: "#a0a4b1",
        70: "#bdbfc1",
        80: "#dddfe3",
        90: "#f2f3f5"
      },
      cobalt: {
        10: "#071e31",
        20: "#0b2f4c",
        30: "#165c96",
        40: "#1b73bb",
        50: "#4278d6",
        60: "#64a8e1",
        70: "#a1c6ed",
        80: "#cee0f4",
        90: "#e2ecf9"
      },
      gold: {
        10: "#3c3002",
        20: "#735d07",
        30: "#a8880b",
        40: "#d8ac00",
        50: "#ffce0c",
        60: "#f9d543",
        70: "#ffe372",
        80: "#fff0b2",
        90: "#fffae9"
      },
      firebrick: {
        10: "#330005",
        20: "#660009",
        30: "#b3000f",
        40: "#c71a28",
        50: "#d24b57",
        60: "#d36464",
        70: "#e18e8e",
        80: "#e7bbbb",
        90: "#f2dede"
      },
      emerald: {
        10: "#0b3003",
        20: "#145a06",
        30: "#208f0a",
        40: "#2bbf0d",
        50: "#40df20",
        60: "#66e54c",
        70: "#8fe87d",
        80: "#b8eaae",
        90: "#dff0d8"
      },
      amethyst: {
        10: "#130e1b",
        20: "#302343",
        30: "#4d386b",
        40: "#664a8d",
        50: "#8358bb",
        60: "#986ece",
        70: "#ae94d1",
        80: "#cfc1e1",
        90: "#dcd3e8"
      },
      white: "#ffffff",
      black: "#000000"
    },
    fontFamily: {
      base: "Inter, ui-sans-serif, system-ui, sans-serif",
      heading: "\"Helvetica Neue\", Helvetica, ui-sans-serif, system-ui, sans-serif",
      inter: "Inter, ui-sans-serif, system-ui, sans-serif",
      helvetica: "\"Helvetica Neue\", Helvetica, ui-sans-serif, system-ui, sans-serif"
    },
    borderRadius: {
      none: "0rem",
      xs: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "1rem",
    "2xl": "2rem",
    "4xl": "4rem",
      full: "624.9375rem",
      sm: "0.25rem"
    },
    borderWidth: {
      DEFAULT: "0.125rem",
      xs: "0.0625rem",
      sm: "0.125rem"
    },
    spacing: {
      none: "0rem",
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    "2xl": "3rem",
      px: "0.0625rem",
      DEFAULT: "1rem"
    },
    fontSize: {
      sm: "0.875rem",
      DEFAULT: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
    "2xl": "2rem",
      md: "1rem"
    },
    lineHeight: {
      normal: "1.5",
      relaxed: "2",
      loose: "2.5"
    },
    transitionDuration: {
      DEFAULT: "200ms"
    }
  },
}