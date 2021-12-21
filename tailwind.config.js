module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors:{
      'main': 'hsl(233, 47%, 7%)',
      'card': 'hsl(244, 38%, 16%)',
      'accent': 'hsl(277, 64%, 61%)',
      'white': 'hsl(0, 0%, 100%)',
      'paragraph': 'hsla(0, 0%, 100%, 0.75)',
      'heading': 'hsla(0, 0%, 100%, 0.6)'
    },
    // fontSize: {
    //   'body': '15px'
    // },
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: ['Lexend Deca', 'sans-serif'],
    },
    backgroundImage: {
      'mobile': "url('../src/images/image-header-mobile.jpg')",
      'desktop': "url('../src/images/image-header-desktop.jpg')",
    },
    extend: {},
  },
  plugins: [],
}
