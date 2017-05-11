// see http://vuejs-templates.github.io/webpack for documentation.
var merge = require('webpack-merge');
var path = require('path');
var distDir = path.resolve(__dirname, '../dist/', process.env.BUILD_ENV);

module.exports = {
  production: {
    env: require('./production.env'),
    assetsRoot: distDir,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    minimize: true,
    cssExtract: true,
  },
  development: {
    env: require('./development.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsRoot: distDir,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
};

module.exports.test = merge(module.exports.development, {
  env: require('./test.env'),
  port: 8081,
  index: 'index.html',
  autoOpenBrowser: false,
});

module.exports.staging = merge(module.exports.production, {
  env: require('./staging.env'),
});
