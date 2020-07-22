const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    belialUI: path.resolve(__dirname, './lib/index.tsx')
  },
  output: {
    filename: 'belialUI.js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'Belial-UI',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
}