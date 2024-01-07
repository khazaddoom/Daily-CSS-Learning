const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gunmetal': {
          700: '#2E323F'
        },
        'arsenic': {
          700: '#3B4050'
        },
        'Sonic Silver': {
          700: '#7F7B6F'
        },
        'grullo': {
          700: '#A59678'
        },
        'cultured': {
          700: '#F8F7F4'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat','sans-serif'],
        oswald: ['Oswald','sans-serif']
      }
    }
  },
  plugins: [],
}

