const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  entry: {
      app:[
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true',
      './src/index.js'
      ]
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: '../dist'                    // 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, "../"),   // 这个地方是../ 不是../dist  和output.path保持一致
      verbose:  true
    }),
    new HtmlWebapckPlugin({
      title: 'Output Management A'
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"                           // webpack-dev-middleware 需要配置这个 上面两个足够webpack-dev-server用了
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
