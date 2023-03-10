/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        neutral: {
          50: 'rgba(var(--color-neutral-50), 1)',
          100: 'rgba(var(--color-neutral-100), 1)',
          200: 'rgba(var(--color-neutral-200), 1)',
          300: 'rgba(var(--color-neutral-300), 1)',
          400: 'rgba(var(--color-neutral-400), 1)',
          500: 'rgba(var(--color-neutral-500), 1)',
          600: 'rgba(var(--color-neutral-600), 1)',
          700: 'rgba(var(--color-neutral-700), 1)',
          800: 'rgba(var(--color-neutral-800), 1)',
          900: 'rgba(var(--color-neutral-900), 1)',
        },
        primary: {
          50: 'rgba(var(--color-primary-50), 1)',
          300: 'rgba(var(--color-primary-300), 1)',
          400: 'rgba(var(--color-primary-400), 1)',
          500: 'rgba(var(--color-primary-500), 1)',
          600: 'rgba(var(--color-primary-600), 1)',
          700: 'rgba(var(--color-primary-700), 1)',
          200: 'rgba(var(--color-primary-200), 1)',
          800: 'rgba(var(--color-primary-800), 1)',
          900: 'rgba(var(--color-primary-900), 1)',
          100: 'rgba(var(--color-primary-100), 1)',
        },
        shadow: 'rgba(var(--color-shadow), 1)',
      },
      fontFamily: {
        beaufort: ['Beaufort', 'serif'],
        spiegel: ['Spiegel', 'serif'],
        serif: ['serif'],
      },
      scale: {
        175: '1.75',
      },
      transitionDuration: {
        400: '400ms',
        800: '800ms',
      },
      transitionTimingFunction: {
        ease: 'ease',
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
      '6xl': '4.6rem',
      '7xl': '5.4rem',
      '8xl': '6.2rem',
      '9xl': '7rem',
    },
  },
  plugins: [
    require('tailwindcss-radix')({ variantPrefix: 'ui' }),
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: 1,
        fontSizeMax: 1.25,
        ratioMin: 1.125,
        ratioMax: 1.2,
        screenMin: 20,
        screenMax: 96,
        unit: 'rem',
        prefix: 'fluid-',
        extendValues: true,
      },
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
      },
    }),
  ],
};
