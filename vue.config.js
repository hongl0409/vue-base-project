const path = require('path');
const webpack = require('webpack');
let env = process.argv[3] ? process.argv[3].slice(2) : '';
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        RUNTIME_ENV: JSON.stringify(env)
      })
    )
    if (process.env.NODE_ENV == 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
      }
    }
  }
}
