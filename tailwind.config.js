/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1a1f3b',
        'teal': '#2ab7ca',
        'gray-light': '#f5f6fa',
        'gray-medium': '#e1e2e6',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}