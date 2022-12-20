module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat"]
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/eml.png')",
       }),
      colors: {
        purple: {
          '100': '#5A005B22',
          '200': '#5A005B44',
          '300': '#5A005B66',
          '400': '#5A005B77',
          '500': '#5A005B',
          '600': '#5A005B',
          '700': '#5A005B',
          '800': '#5A005B',
          '900': '#5A005B'
        },
      },
      width: {
    
        '90vw': '90vw',
        '800': '800px',
              },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}

