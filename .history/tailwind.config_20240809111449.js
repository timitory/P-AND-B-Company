const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      current: '#0F2217',
      'white': '#ffffff',
      dark: '#0E0842',
      darker: '#1B2124',
      navy: '#3E4095',
      charcoal: '#5C5C80',
      army: '#219653',
      deeparmy: '#345844',
      fuschia: '#DD168D',
      violet: '#763FA2',
      grey: '#8D9091',
      texter:'#747694',

      specialgrey: '#E4EDF2',
      yellow: colors.yellow,
      red : colors.red,
      green: colors.green,
      gray: colors.gray,
      blue: colors.blue,
      purple: colors.purple
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

