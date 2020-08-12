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
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
}