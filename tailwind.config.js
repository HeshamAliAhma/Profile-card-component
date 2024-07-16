/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkCyan:'hsl(185, 75%, 39%)',
        darkBlue:'hsl(229, 23%, 23%)',
        grayishBlue:'hsl(227, 10%, 46%)',
        darkGray:'hsl(0, 0%, 59%)',
      }
    },
  },
  plugins: [],
}

