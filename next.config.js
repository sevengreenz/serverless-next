const withTypescript = require('@zeit/next-typescript')

const config = {
  distDir: '../dist'
}

module.exports = withTypescript(config)
