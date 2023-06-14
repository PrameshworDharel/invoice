/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#f8f8fb',
      'secondary': '#7C5DFA',
      'tertiary': '#9277FF',
      'Dark': '#1E2139',
      'Clay': '#252945',
      'LinkWater': '#DFE3FA',
      'Red':'#EC5757',
      'Mirage': '#141625',
      'Cinder': '#0C0E16',
      'Grey': '#888EB0',
      'WildBlue': '#7E88C3',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
    tight: '-.025em',
      normal: '0',wide: '.025em',
      wider: '.05em',
      widest: '.1em',
       widest: '.25em',
    },
    
    extend: {},
  },
  plugins: [],
}

