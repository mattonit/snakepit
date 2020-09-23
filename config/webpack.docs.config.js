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
      'snakepit': path.resolve('./src/index.js')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/docs/assets/index.html'
    })
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

module.exports = config;
