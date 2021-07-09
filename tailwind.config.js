module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat"]
    },
    extend: {
      colors: {
        purple: {
          '100': '#5A005B22',
          '200': '#5A005B',
          '300': '#5A005B',
          '400': '#5A005B',
          '500': '#5A005B',
          '600': '#5A005B',
          '700': '#5A005B',
          '800': '#5A005B',
          '900': '#5A005B'
        },
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
