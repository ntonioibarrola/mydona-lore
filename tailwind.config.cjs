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
        theme: {
          background: {
            neutral: 'var(--theme-background-neutral)',
            primary: 'var(--theme-background-primary)',
          },
          button: {
            border: 'var(--theme-button-border)',
            active: 'var(--theme-button-active)',
            disabled: 'var(--theme-button-disabled)',
          },
          text: {
            neutral: 'var(--theme-text-neutral)',
            primary: 'var(--theme-text-primary)',
            secondary: 'var(--theme-text-secondary)',
          },
        },
      },
      fontFamily: {
        beaufort: ['Beaufort', 'san-serif'],
        serif: ['serif'],
      },
      scale: {
        175: '1.75',
      },
      animation: {
        fade: 'fade 700ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fade: {
          '0%': {
            background: 'var(--theme-background-neutral)',
            opacity: 0,
          },
          '100%': {
            background: 'var(--theme-background-neutral)',
            opacity: 100,
          },
        },
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
