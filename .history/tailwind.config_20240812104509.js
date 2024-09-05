const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      current: '#0F2217',
      'white': '#ffffff',
      dark: '#0E0842',
      darker: '#1B2124',
      navy: '#3E4095',
      charcoal: '#5C5C80',
      bigtext:'#0E113E',
      army: '#219653',
      deeparmy: '#345844',
      fuschia: '#DD168D',
      violet: '#763FA2',
      grey: '#f2f2f2',
      texter:'#747694',
      specialgrey: '#E4EDF2',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

