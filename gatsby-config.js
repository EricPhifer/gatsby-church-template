module.exports = {
  siteMetadata: {
    title: `Church Template Website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "eifg1wwx",
      "dataset": ""
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};