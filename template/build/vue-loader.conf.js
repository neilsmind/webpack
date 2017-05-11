var utils = require('./utils')
var config = require('../config')[process.env.BUILD_ENV]

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config.cssSourceMap,
    extract: config.cssExtract,
  })
}
