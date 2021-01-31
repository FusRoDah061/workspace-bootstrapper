const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // Build Mode
  mode: 'development',
  // Electron Entrypoint
  entry: './src/main/index.ts',
  target: 'electron-main',
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }]
  },
  output: {
    path: __dirname + '/build',
    filename: 'main.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/**/static/*", to:'static/[name].[ext]' },
      ],
    }),
  ],
}
