module.exports = {
  siteMetadata: {
    title: `Joakim Nylén`,
    description: `I develop things.`,
    author: `@jnylen`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `jnylen`,
        linkResolver: ({ node, key, value }) => (post) => `/`,
        lang: "*",
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
        },
        prismicToolbar: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
