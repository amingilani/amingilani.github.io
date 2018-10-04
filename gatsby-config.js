module.exports = {
  siteMetadata: {
    author: 'Amin Shah Gilani',
    title: 'Amin Shah Gilani',
    description: 'Amin Shah Gilani’s personal corner of the internet',
    image: 'https://www.gravatar.com/avatar/e97345f1125996ea6e1a8394fd45da28?s=500',
    baseUrl: 'https://amin.gilani.me',
    keywords: 'Amin Shah Gilani, personal, developer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Amin Shah Gilani',
        short_name: 'Amin Shah Gilani',
        start_url: '/',
        display: `minimal-ui`,
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        background_color: `f5f5f5`,
        theme_color: '#f5f5f5'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-36754712-3",
        head: true
      },
    },
    'gatsby-plugin-offline',
  ],
}
