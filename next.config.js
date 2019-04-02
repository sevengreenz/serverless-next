const withTypescript = require('@zeit/next-typescript')

const config = {
  distDir: '../dist',
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname);
    return config;
  }
}

module.exports = withTypescript(config)
