const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // 使用这个插件需要安装上面的依赖包，另外安装babel-preset-es2015插件，找到 /\.js$/的rules，进行修改，根目录下添加【.babelrc】文件
    // https://segmentfault.com/a/1190000011212544
    new UglifyJSPlugin({
        sourceMap: true //  避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    }),
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
