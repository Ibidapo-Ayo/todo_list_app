/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'brandColor': '#00A82D',
      'white': '#fff',
      'gray':'rgba(230, 230, 230, 0.5)',
      'success': '#6cc070',
      'dark': '#000',
      'danger': {
        '100': '#ff5050',
        '200': '#ff505080',
      },
      'homeBg': '#000',
    },
    extend: {},
  },
  plugins: [],
}
