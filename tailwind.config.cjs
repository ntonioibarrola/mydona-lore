/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0c',
      },
      fontFamily: {
        beaufort: ['beaufort', 'san-serif'],
      },
    },
  },
  plugins: [],
};
