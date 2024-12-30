/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor': '#1C1E53',
        'hoverColor': '#ffffff',
        'menuColor': '#BBBBCB',
        'buttonColor': '#FCD980',
        'workColor': '#F4F6FC',
        'pColor': '#282938',
        'reviewColor': '#282938',
        'inputColor': '#rgba(250, 252, 230, 0.5)',
      },
      backgroundImage: {
        'bannerbg': "url('/src/assets/banner.png')",
        
      }
    },
  },
  plugins: [],
}

