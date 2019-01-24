require('ts-node').register();

const theme = require('./src/theme');

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: theme.default.colors.primary,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: theme.default.colors.primary,
        theme_color: theme.default.colors.primary,
        display: `browser`,
        icon: `src/images/logo-circle.svg`
      }
    }
  ]
};
