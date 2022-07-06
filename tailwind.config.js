module.exports = {
  prefix: '',
  content: [
    './src/**/*.{html,ts,js}',
    './projects/**/*.{html,ts,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
