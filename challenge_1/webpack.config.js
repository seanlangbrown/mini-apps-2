module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public'
  }
};
