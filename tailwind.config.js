import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'eastman': ['eastman'],
        'eastman-bold': ['eastman-bold'],
        'eastman-black': ['eastman-black'],
        'lato': ['lato'],
        'lemon': ['lemon'],
        'lemon-bold': ['lemon-bold'],
      },
    },
  },
  plugins: [flowbite],
}