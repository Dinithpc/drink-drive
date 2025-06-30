/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-orange': '#ffa245',
        'yellow-400': '#FBBF24',
        'yellow-500': '#EAB308',
        'gray-700': '#4B5563',
        'gray-800': '#374151',
        'white-300': '#f7f5f2',
        'white-og' : '#f7f6f5',
        'green-og' : '#46f08f',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}