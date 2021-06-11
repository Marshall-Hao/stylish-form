module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        gray: '2px solid #F3F4F6',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
