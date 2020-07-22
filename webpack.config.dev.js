const commonConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = Object.assign({}, commonConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Belial UI',
      template: 'index.html'
    })
  ],
})