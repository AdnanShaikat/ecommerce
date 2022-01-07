const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false
  },
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      fontWeight: ['hover', 'focus'],
      transitionProperty: {
        width: "width",
        height: "height"
      },
      colors: {
        primary: {
          "50": "#a1c3bb",
          "100": "#8eb7ad",
          "200": "#7baba0",
          "300": "#689f92",
          "400": "#559385",
          "500": "#428777",
          "600": "#3b7a6b",
          "700": "#356c5f",
          "800": "#2e5f53",
          "900": "#285147"
        },
        secondary: {
          "50": "#d4dbe6",
          "100": "#cbd3e1",
          "200": "#c2ccdc",
          "300": "#b9c5d7",
          "400": "#b1bdd2",
          "500": "#a8b6cd",
          "600": "#97a4b9",
          "700": "#8692a4",
          "800": "#767f90",
          "900": "#656d7b"
        },
        text: {
          "50": "#919099",
          "100": "#7a7a84",
          "200": "#646470",
          "300": "#4e4d5b",
          "400": "#383747",
          "500": "#222132",
          "600": "#1f1e2d",
          "700": "#1b1a28",
          "800": "#181723",
          "900": "#14141e"
        },
      },
      borderRadius: {
        'primary': '20px',
      },
      opacity: ['disabled'],
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
