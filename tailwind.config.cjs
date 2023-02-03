/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        primary: '#0c0b0d',
        offwhite: '#d8d6ca',
        accent: '#c8aa6e',
        subaccent: 'rgb(196, 185, 152)',
        triaccent: 'rgb(138, 108, 60)',
      },
      fontFamily: {
        beaufort: ['Beaufort', 'san-serif'],
        serif: ['serif'],
      },
      scale: {
        175: '1.75',
      },
    },
    fontSize: {
      xs: '1.15rem',
      sm: '1.3rem',
      base: '1.4rem',
      lg: '1.6rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '2.8rem',
      '4xl': '3.4rem',
      '5xl': '4rem',
    },
  },
  plugins: [],
};
