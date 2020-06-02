const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        black: '#1a1a1a',
        white: '#f7f7f7',
        primary: '#666666',
        secondary: '#eaeaea',
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
