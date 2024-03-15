/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extends : {
      animation: {
        'fade-in-out': 'fadeInOut 0.2s ease-in-out',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      fontFamily: {
        berkshire: ['"Berkshire Swash"'],
      },
      screens: {
        'sm' : '500px',
      },
    }
  },

};
