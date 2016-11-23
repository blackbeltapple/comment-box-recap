const validate = require('webpack-validator');

module.exports = validate({
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react', 'react-hmre']}
      }
    ]
  }
});
