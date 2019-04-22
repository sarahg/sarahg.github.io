module.exports = {
    plugins: [
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `data`,
                path: `${__dirname}/src/data`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "Sarah German",
              short_name: "Sarah German",
              start_url: "/",
              background_color: "#2C5E7D",
              theme_color: "#2C5E7D",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "src/assets/icon.png", // This path is relative to the root of the site.
            },
          },
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet'
    ]
}