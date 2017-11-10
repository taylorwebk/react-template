const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel-loader'
    },
    {
      test: /\.css?$/,
      // exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(ttf|woff|woff2|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
