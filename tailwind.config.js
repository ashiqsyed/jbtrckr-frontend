const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/navbar.js"
  ],
  theme: {
    extend: {
      colors: {
        blush: '#F6F0F0',
        beige: '#F2E2B1',
        sand: '#D5C7A3',
        taupe: '#BDB395',
      },
    },
  },
  plugins: [heroui()],
}
