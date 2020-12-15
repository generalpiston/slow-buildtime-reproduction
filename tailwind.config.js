const _ = require('lodash');
const colors = require('tailwindcss/colors');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;
const plugin = require('tailwindcss/plugin');

module.exports = {
  important: false,
  purge: { mode: 'layers', content: ['./src/**/*.tsx', './src/**/*.ts'] },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
