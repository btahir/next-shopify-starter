module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        '112': '28rem',
        '120': '30rem',
      }),
      minHeight: theme => ({
        '80': '20rem',
      }),
      colors: {
        palette: {
          lighter: '#F5F3FF',
          light: '#DDD6FE',
          primary: '#5B21B6',
          dark: '#4C1D95',
        },
      },
      fontFamily: {
        primary: ['"Josefin Sans"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
