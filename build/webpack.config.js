const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
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
