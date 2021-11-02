module.exports = {
  siteMetadata: {
    title: `Mathias Bøe`,
    description: `Welcome to my web hosted CV`,
    author: `@Mathias Bøe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    "gatsby-plugin-netlify-cache",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        // ssr: false
        // displayName: false,
        // minify: false
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-headers`, // make sure to put last in the array
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/*": [
            "Content-Security-Policy: frame-ancestors 'self' https://*.aasgard.io/",
            "X-Frame-Options: ALLOW-FROM https://aasgard.io/",
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
