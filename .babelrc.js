console.log('Load babel config');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  env: {
    test: {
      presets: ['@babel/preset-env'],
    },
  },
};
