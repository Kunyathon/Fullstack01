/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './composables/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A6EBD',
        secondary: '#5A96E3',
        tertiary: '#A1C2F1',
        quaternary: '#EDF7FF',
        'dark-primary': '#005DA7',
        'darker-primary': '#003C6C',
        grey: '#CCC',
        red: '#E0115F',
        'dark-red': '#8b0000',
        green: '#e7ffce',
        'dark-green': '#26a604',
        'line-dark-green': '#269408',
        'light-green': '#b4df84'
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2.25rem'
      },
    },
  },
  plugins: [],
}
