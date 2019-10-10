module.exports = {
  siteMetadata: {
    title: `Digication Store`,
    description: `Store management for digication`,
    author: `fosslover`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "digicationGraphqlStore",
        // This is field under which it's accessible
        fieldName: "digicationGraphqlStore",
        // Url to query from
        url: "http://localhost:4000/graphql",
        // just for demo only refetching every one second for updating data
        // in real case we use graphql subscriptions for real time
        // refetchInterval: 1,
      },
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'http://localhost:3000/users',
          'http://localhost:3000/faculties',
          'http://localhost:3000/courses',
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
