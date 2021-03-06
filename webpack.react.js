const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/renderer/index.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build/renderer.js'),
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: 'renderer.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/index.html'
    })
  ]
};
