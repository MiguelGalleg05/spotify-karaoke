module.exports = {
  purge: [
    {
      content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    },
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        player: '100px',
      },
      width: {
        sidebar: '300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
