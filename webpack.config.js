module.exports = {
  entry: {
    chapter1: ['babel-polyfill', __dirname + '/app/index.js'],
    chapter2: ['babel-polyfill', __dirname + '/app/home.js'],
    chapter3: ['babel-polyfill', __dirname + '/app/ch3function.js']
  },
  output: {
    path: __dirname + '/build/',
    // if the above line does not work, try `path: __dirname + '/build'`
    filename: '[name].js'
  },
  // NOTE 'Setting up Webpack'
  module: {
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: __dirname + /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000, // most common port
    contentBase: __dirname + '/build/',
    inline: true
  }
  // NOTE 'Adding babel to Webpack'
}
