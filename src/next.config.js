const path = require('path');
const withSass = require('@zeit/next-sass');
const { supportedLocales } = require('./mechanisms/l10n/config');

const isProduction = process.env.NODE_ENV === 'production';
const dictRegExp = new RegExp(`^./(${supportedLocales.join('|')})$`);

const nextConfig = {
  // next env
  distDir: '../build/.next',

  // css-loader
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]__[hash:base64:4]',
  },

  // Will only be available on the server side
  serverRuntimeConfig: {
    secret: 'showmethemoney',
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    isProduction,
    apollo: {
      uri: 'http://localhost:4000',
      // IMPORTANT!!! DON'T FORGET TO CHANGE credentials TO 'include'
      credentials: 'include',
    },
  },

  // webpack
  webpack: (config, options) => {
    const { webpack } = options;

    /* eslint-disable no-param-reassign */
    config.devServer = config.devServer || {};
    config.devServer.headers = { 'Access-Control-Allow-Origin': '*' };
    /* eslint-enable no-param-reassign */

    config.plugins.push(
      // Used to narrow requiring scope when using dynamic imports, thus reducing
      // the resulting bundle size. Locales which we don't support are ignored
      // and not included into the bundle.
      // More info: https://iamakulov.com/notes/webpack-contextreplacementplugin/
      new webpack.ContextReplacementPlugin(/react-intl\/locale-data/, dictRegExp),
    );

    // aliases
    config.resolve.alias['components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['constants'] = path.resolve(__dirname, 'constants');
    config.resolve.alias['pages'] = path.resolve(__dirname, 'pages');
    config.resolve.alias['mechanisms'] = path.resolve(__dirname, 'mechanisms');
    config.resolve.alias['logic'] = path.resolve(__dirname, 'logic');
    config.resolve.alias['utils'] = path.resolve(__dirname, 'utils');

    return config;
  },
};

module.exports = withSass(nextConfig);
