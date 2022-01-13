module.exports = {
  siteMetadata: {
    title: `hack2020`,
    siteUrl: `https://www.sample.com`,
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src',
          '@components': 'src/components',
          '@hooks': 'src/hooks',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
    },
  ],
};
