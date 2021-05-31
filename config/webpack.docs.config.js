const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    inline: false,
    historyApiFallback: true,
    hot: true,
    contentBase: './docs/',
  },
  entry: './src/docs/index.js',
  output: {
    filename: 'docs.js',
    path: path.resolve('./docs/'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'motif.js': path.resolve('./src/index.js')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/docs/assets/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              context: './',
              outputPath: './',
              publicPath: './'
            }
          },
          'extract-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      }
    ]
  }
}

module.exports = config;
