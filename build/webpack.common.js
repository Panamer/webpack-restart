const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, "../"),  // 这个地方是../ 不是../dist  和output.path保持一致
      verbose:  true
    }),
    new HtmlWebapckPlugin({
      title: 'Output Management A'
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
             presets: ['es2015']
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
        ]
      }
    ]
  }
}
