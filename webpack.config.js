const path = require('path');

module.exports = {
  entry: {
    first: './src/one.js',
    second: './src/two.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
};