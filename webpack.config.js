const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
	  main: './src/index.js'
  },
  output: {
    path: __dirname + '/public',
	chunkFilename: '[name].js',
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
		default: false,
		vendors: false,
        vendor: {
          chunks: 'all',
		  test: /node_modules/
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader'}]
      },
	  {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	  }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
	extensions: ['.js', '.jsx']
  }
};