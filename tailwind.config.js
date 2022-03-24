module.exports = {
  mode: 'jit',
  purge: [
    'app/*/**/.{js,jsx}',
    'app/*/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['"Montserrat", sans-serif']
      },
      fontSize: {
        'tiny': '.7rem'
      }
    },
  },
  plugins: [],
}