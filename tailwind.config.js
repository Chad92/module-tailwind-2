/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'blue-primary' : '#1D85E8',
        'black' : 'black',
        'grey-dark' : '#A8A8A8',
        'greylight': '#D4D4D4',
        'white' : '#fff'
      },
      fontFamily : {
        roboto : ['Roboto','sans-serif'],
        italic : ['Fraunces', 'sans-serif']
      },
      border : {
        bottomleft : "border-radius-bottom-left-150px"
      }
    },
  },
  plugins: [],
}

