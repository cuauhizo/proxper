/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "lemon-bold": ['"lemon-bold"', 'sans-serif'],
        "lemon-normal": ['"lemon-normal"', 'sans-serif'],
        "lemon-light": ['"lemon-light"', 'sans-serif'],
        "raleway": ['"raleway"', 'sans-serif']
      },
      colors: {
        "tolko-red": "rgb(204, 0, 50)"
      },
      backgroundImage: {
        "close-menu": "url('../assets/img/icon-close.svg')",
        "open-menu": "url('../assets/img/icon-hamburger.svg')"
      }
    },
  },
  plugins: [],
}