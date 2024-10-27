/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  darkMode: "media",
  theme: {
    color: {
      charcoal: {
        50: "#f5f4f2",
        100: "#f0efef",
        200: "#e5e5e3",
        300: "#bdbfc1",
        400: "#8a9199",
        500: "#626a73",
        600: "#464c53",
        700: "#3e454d",
        800: "#28343e",
        900: "#192026"
      },
      cobalt: {
        50: "#f1f5fc",
        100: "#e2ecf9",
        200: "#cee0f4",
        300: "#a1c6ed",
        400: "#66b2ff",
        500: "#5da9e8",
        600: "#006cd9",
        700: "#165c96",
        800: "#114c7c",
        900: "#0b2f4c"
      },
      gold: {
        50: "#fffae9",
        100: "#fff8e0",
        200: "#ffe372",
        300: "#ffe061",
        400: "#ffdd00",
        500: "#ffce0c",
        600: "#ebbb00",
        700: "#d8ac00",
        800: "#bd9600",
        900: "#997a00"
      },
      firebrick: {
        100: "#ebcccc",
        200: "#e7bbbb",
        300: "#e49a9a",
        400: "#e17070",
        500: "#d12e2e",
        600: "#b3000f",
        700: "#9f0411",
        800: "#8f000c",
        900: "#660009",
        50: "#f2dede"
      },
      emerald: {
        50: "#dff0d8",
        100: "#cee9c3",
        200: "#bce2ac",
        300: "#a8dd92",
        400: "#9cd685",
        500: "#65bf40",
        600: "#307f10",
        700: "#145a06",
        800: "#104206",
        900: "#0e2b08"
      },
      amethyst: {
        50: "#dcd3e8",
        100: "#cfc1e1",
        200: "#bea9da",
        300: "#a885d6",
        400: "#9873c9",
        500: "#8358bb",
        600: "#664a8d",
        700: "#4d386b",
        800: "#3f2e57",
        900: "#241a32"
      },
      white: "#ffffff",
      black: "#000000",
      system: {
        silver: {
          50: "#f5f5f6",
          100: "#e5e7e8",
          200: "#cbcfd2",
          300: "#b0b7bb",
          400: "#969fa5",
          500: "#7c878e",
          600: "#636c72",
          700: "#4a5155",
          800: "#323639",
          900: "#191b1c"
        },
        yellow: {
          50: "#fffbee",
          100: "#fff4d5",
          200: "#ffe9ab",
          300: "#ffdd80",
          400: "#ffd256",
          500: "#ffc72c",
          600: "#cc9f23",
          700: "#99771a",
          800: "#665012",
          900: "#332809"
        },
        teal: {
          50: "#e6f4f7",
          100: "#cce8ee",
          200: "#99d2dd",
          300: "#66bbcc",
          400: "#33a5bb",
          500: "#008eaa",
          600: "#007288",
          700: "#005566",
          800: "#003944",
          900: "#001c22"
        },
        blue: {
          50: "#e6ecf6",
          100: "#ccd8ed",
          200: "#99b1db",
          300: "#668bc9",
          400: "#3364b7",
          500: "#003da5",
          600: "#003795",
          700: "#002b73",
          800: "#001f53",
          900: "#001231"
        },
        purple: {
          50: "#f2e9f0",
          100: "#e6d4e2",
          200: "#cca9c4",
          300: "#b37da7",
          400: "#995289",
          500: "#80276c",
          600: "#661f56",
          700: "#4d1741",
          800: "#33102b",
          900: "#1a0816"
        },
        green: {
          50: "#e6f3ec",
          100: "#cce6d8",
          200: "#99ceb1",
          300: "#66b58b",
          400: "#339d64",
          500: "#00843d",
          600: "#006a31",
          700: "#004f25",
          800: "#003518",
          900: "#001a0c"
        },
        red: {
          100: "#f8d4d2",
          200: "#f0a9a4",
          300: "#e97f77",
          400: "#e15449",
          500: "#da291c",
          600: "#ae2116",
          700: "#831911",
          800: "#57100b",
          900: "#2c0806"
        },
        orange: {
          100: "#fbe8cc",
          200: "#f8d199",
          300: "#f4b966",
          400: "#f1a233",
          500: "#ed8b00",
          600: "#be6f00",
          700: "#8e5300",
          800: "#5f3800",
          900: "#2f1c00"
        },
        turquoise: {
          50: "#eef8f9",
          100: "#dcf1f3",
          200: "#bae4e8",
          300: "#97d6dc",
          400: "#75c9d1",
          500: "#52bbc5",
          600: "#42969e",
          700: "#317076",
          800: "#214b4f",
          900: "#102527"
        },
        sky: {
          50: "#e8f2fa",
          100: "#d0e5f6",
          200: "#a1caed",
          300: "#72b0e3",
          400: "#4395da",
          500: "#147bd1",
          600: "#1062a7",
          700: "#0c4a7d",
          800: "#083154",
          900: "#04192a"
        },
        black: {
          50: "#e9e9e9",
          100: "#d3d3d3",
          200: "#a6a7a7",
          300: "#7a7b7a",
          400: "#4d4f4e",
          500: "#212322",
          900: "#141514"
        },
        cyan: {
          50: "#e6f8fc",
          100: "#ccf0f9",
          200: "#99e1f3",
          300: "#66d3ee",
          400: "#33c4e8",
          500: "#00b5e2",
          600: "#0091b5",
          700: "#006d88",
          800: "#00485a",
          900: "#00242d"
        },
        slate: {
          50: "#e7eaed",
          100: "#d0d4db",
          200: "#a1a9b7",
          300: "#717f93",
          400: "#42546f",
          500: "#13294b",
          900: "#0f213c"
        },
        greenLine: "#00843d",
        orangeLine: "#ed8b00",
        redLine: "#da291c",
        blueLine: "#003da5",
        silverLine: "#7c878e",
        brandBus: "#ffc72c",
        ferry: "#008eaa",
        theRide: "#52bbc5",
        commuterRail: "#80276c",
        swa: "#00b5e2",
        mbtaDark: "#212322",
        darkWinter: "#13294b",
        midWinter: "#147bd1"
      }
    },
    fontFamily: {
      base: "Inter, ui-sans-serif, system-ui, sans-serif",
      heading: "\"Helvetica Neue\", Helvetica, ui-sans-serif, system-ui, sans-serif",
      inter: "Inter, ui-sans-serif, system-ui, sans-serif",
      helvetica: "\"Helvetica Neue\", Helvetica, ui-sans-serif, system-ui, sans-serif"
    },
    borderRadius: {
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      lg: "0.5rem",
      xl: "1rem",
    "2xl": "2rem",
    "4xl": "4rem",
      none: "0rem",
      md: "0.375rem",
      full: "624.9375rem"
    },
    borderWidth: {
      DEFAULT: "0.125rem"
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
    "2xl": "1.5rem",
    "4xl": "2rem"
    },
    lineHeight: {
      loose: "2.5",
      normal: "1.5",
      relaxed: "2"
    },
    spacing: {
      0: "0rem",
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
      4: "1.5rem",
      5: "2rem",
      6: "3rem",
      px: "0.0625rem"
    },
    transitionDuration: {
      DEFAULT: "200ms"
    }
  },
}