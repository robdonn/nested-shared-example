const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('next').NextConfig}
 */
const config = {
  webpack(webpackConfig) {
    webpackConfig.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
      })
    );

    return webpackConfig;
  },
};

module.exports = config;
