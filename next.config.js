const config = {
  distDir: '../dist',
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname);
    return config;
  }
}

module.exports = config
