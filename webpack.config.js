const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "util": require.resolve('util/'),
      "buffer": require.resolve("buffer/"),
      "net": require.resolve("net/"),
      "tls": require.resolve("tls/"),
      "url": require.resolve("url/"),
      "crypto": require.resolve("crypto-browserify") 
    },
  }
};
