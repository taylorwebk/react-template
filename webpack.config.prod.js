const path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: [
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
      loader: 'babel-loader'
    },
    {
      test: /\.css?$/,
      // exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    },
    {
      test: /\.(ttf|woff|woff2|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader', {
          loader: 'image-webpack-loader',
          options: {
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            mozjpeg: {
              progressive: true,
              quality: 65
            }
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ]
}
