const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    belialUI: path.resolve(__dirname, './lib/index.tsx')
  },
  output: {
    filename: 'belialUI.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Belial-UI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Belial UI',
      template: 'index.html'
    })
  ],
  mode: 'development',
}