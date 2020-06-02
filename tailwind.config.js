const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        black: '#000',
        white: '#fff',
        primary: '#666666',
        secondary: '#eaeaea',
        body: '#fafafa',
      },
      fontSize: {
        '7xl': '6rem',
        '8xl': '8rem',
        ...defaultTheme.fontSize,
      },
    },
  },
  variants: {},
  plugins: [],
}
