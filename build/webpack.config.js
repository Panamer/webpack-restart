const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        tets: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
