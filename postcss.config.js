const postcssImport = require('postcss-import');
const postcssPresentEnv = require('postcss-preset-env');
const postcssUrl = require('postcss-url');
const tailwindcss = require('tailwindcss');

module.exports = () => {
  let plugins = [
    postcssImport(),
    postcssUrl(),
    postcssPresentEnv({
      browsers: 'last 2 versions',
      stage: 0,
    }),
    tailwindcss(),
  ];

  return {
    plugins,
  };
};
