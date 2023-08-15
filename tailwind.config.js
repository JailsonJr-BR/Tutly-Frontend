/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      },
      colors: {
        primary: '#2EADF4',
        'secondary-900': '#162B46',
        'secondary-300': '#374151'
      }
    }
  },
  plugins: []
}
