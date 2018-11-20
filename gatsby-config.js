const dotenv = require('dotenv-safe');

dotenv.config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.WEBSITE_URL
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'lato:300,400',
        ]
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#153CFF`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Crisp Studio',
        short_name: 'Crisp',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#153CFF',
        display: 'minimal-ui',
        icon: 'static/images/logo-circle.svg',
      },
    },
    `gatsby-plugin-sitemap`
  ],
}