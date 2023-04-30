/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue': '#1fb6ff',
      'white': '#fff',
      'gray':'#efefef',
      'success': '#6cc070',
      'danger': {
        '100': '#ff5050',
        '200': '#ff505080',
      },
    },
    extend: {},
  },
  plugins: [],
}
