const path = require('path')
const webpack = require('webpack');
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer:{
    hot: true,
    overlay: true, // 编译出现错误时，将错误直接显示在页面上
    publicPath: '/',
    contentBase: '../dist'    // 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, "../"),  // 这个地方是../ 不是../dist  和output.path保持一致
      verbose:  true
    }),
    new HtmlWebapckPlugin({
      title: 'Hot Module Replacement'
    })
  ],
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "../dist")  // 这个路径是相对config.js的，所以加../
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
