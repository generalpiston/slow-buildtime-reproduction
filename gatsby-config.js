'use strict';

module.exports = {
  siteMetadata: {
    title: 'slow',
    description: 'Slow Buildtime Reproduction',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        cssLoaderOptions: {
          sourceMap: false,
          devtool: 'eval-cheap-module-source-map',
        },
      },
    },
  ],
};
