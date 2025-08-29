/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eastman': ['eastman', 'sans-serif'],
        'eastman-bold': ['eastman-bold', 'sans-serif'],
        'eastman-black': ['eastman-black', 'sans-serif'],
        'lato': ['lato', 'sans-serif'],
        'lemon': ['lemon', 'sans-serif'],
        'lemon-bold': ['lemon-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
