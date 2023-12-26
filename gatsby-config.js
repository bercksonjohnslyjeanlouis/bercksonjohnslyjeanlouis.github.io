/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.jlbj.github.io`,
  },

  plugins: [
      'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        // path: `${__dirname}/src/data/`,
        path: `./src/data/`,
        ignore: [`**/\.*`],
        fastHash: true,
      },
    },

  ],
}
