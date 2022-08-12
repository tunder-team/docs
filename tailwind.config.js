const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        primary: {
          100: "#f7fdd0",
          200: "#effba1",
          300: "#e7fa73",
          400: "#dff844",
          500: "#d7f615",
          600: "#acc511",
          700: "#81940d",
          800: "#566208",
          900: "#2b3104"
        },

        'primary-light': {
          100: "#d6f2ff",
          200: "#ade5ff",
          300: "#83d7ff",
          400: "#5acaff",
          500: "#31bdff",
          600: "#2797cc",
          700: "#1d7199",
          800: "#144c66",
          900: "#0a2633"
        },

        'dark': {
          '50': '#BAC8DD',
          '100': '#ACBDD7',
          '200': '#90A7C9',
          '300': '#7591BC',
          '400': '#5A7CAF',
          '500': '#496896',
          '600': '#3C557B',
          '700': '#2E425F',
          '800': '#212F44',
          '900': '#0F151E'
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
