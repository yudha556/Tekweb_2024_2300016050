/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./css/**/*.css'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
    },
    colors: {
      customBlue: '#2D76F9',
      customGray: '#747474',
      customWhite: '#FFFFFF',
      customBlack: '#000000',
      customBg: '#EEF4FF',
    },
    backgroundImage: {
      'bgBiru' : "url('./Asset/background.svg');",
    }
  },
  plugins: [],
}