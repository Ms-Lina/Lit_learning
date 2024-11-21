/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D2691E', // Chocolate color
        secondary: '#8B4513', // Darker chocolate
      }
    },
  },
  plugins: [],
}