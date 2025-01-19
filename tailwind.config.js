/** @type {import('tailwindcss').Config} */

import { transform } from 'typescript';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'serif']
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1.25)' },
        },
        maximize: {
          '0%': {
            width: '34%',
            position: 'absolut',
            left: '35%'

          },
          '100%': {
            width: '100vw',
            position: 'absolut',
            left: '0'
          },
        },
      },
      animation: {
        scaleUp: 'scaleUp 0.5s ease-in-out forwards',
        maximize: 'maximize 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
