const path = require('path')
const commonConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = Object.assign({}, commonConfig, {
  mode: 'development',
  entry: {
    doc: path.resolve(__dirname, './doc/index.tsx')
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Belial UI',
      template: './doc/index.html'
    })
  ],
})