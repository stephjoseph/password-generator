/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'almost-white': '#E6E5EA',
        'very-dark-grey': '#18171F',
        'dark-grey': '#24232C',
        grey: '#817D92',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65',
        'neon-green': '#A4FFAF',
      },
    },
  },
  plugins: [],
};
