const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer:{
    port: 9090,
    stats: 'errors-only',
    // overlay: true,  // 有eslint报错时把错误显示到页面上
    contentBase: '../dist'    // 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
  },
  plugins: [
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
