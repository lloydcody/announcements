/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'permanent-marker': ['"Permanent Marker"', 'cursive'],
        'cabin-sketch': ['"Cabin Sketch"', 'cursive'],
        'fredericka': ['"Fredericka the Great"', 'cursive'],
      },
    },
  },
  plugins: [],
};