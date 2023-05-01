const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      backgroundImage: {
        "icon": "url('/imgs/icon.png')",
        "main": "url('/imgs/background.jpeg')",
        "re2": "url('/imgs/background2.jpeg')",
        "re3": "url('/imgs/background3.jpg')",
        "re4": "url('/imgs/background.jpeg')",
        "title": "url('/imgs/TitleScreen.png')"
      }
    }
  },
  variants: {
    textFillColor: ['responsive'],
    extends: {
      backgroundColor: ['checked', 'first', 'last', 'even', 'odd'],
      padding: ['responsive', 'first', 'last'],
      margin: ['responsive', 'first', 'last'],
    },
  },
  plugins: [],
}
