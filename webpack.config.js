/**
 * webpack概念
 * build modules with dependencies  基于node环境
 * 打包应用程序中的所有模块 得到静态资源(bundle)文件  放到指定目录中
 * 从wp4.0开始  不必引入一个配置文件  因为提供了一个默认的配置文件
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


const config = {
  // 提供mode配置选项, 告知wp使用响应模式的内置优化
  mode: 'development',
  // entry属性 指示wp应该使用哪个模块 作为依赖构建的入口. entry可以是一个或者多个 默认值 './src'
  entry: {
    // index: ['./src/index.js', './src/about.js'],  // 正常是不会这么写的  但发现这样配也可以 会把多个thunk打包到一个bundle文件里
    detail: './src/about.js'
  },
  // entry: "./src/index.js",


  // output属性 告诉wp在哪里输出它创建的bundles 以及如何命名这些文件
  output: {
    // 用于输出文件的文件名  动态   chunkhash和hash占位符不能同时使用---[name].[id].[hash].js
    filename: '[name].[hash].js',
    // 目标输出目录 ⚠️  绝对路径
    path: path.resolve(process.cwd(), 'dist'),
    // cdn地址
    publicPath: "",
    // 散列摘要前缀长度
    hashDigestLength: 4
  },
  // loader可以将所有类型的文件转换为wp能够处理的模块 webpack默认只能处理js文件
  // loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照相反的顺序执行。
  module: {
    rules: [{
      // 标示出应该被对应loader进行转换的一个或某些文件
      test: /\.css$/,
      // 标示进行转换时 应该用哪个loader  loader的执行顺序是从右往左
      use: [ 'style-loader','css-loader' ]
    }]
  },
  // 插件目的在于解决 loader 无法实现的其他事
  // webpack 插件是一个具有 apply 属性的 JavaScript 对象
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin('dist'), // 坑 按最新的配没效果  老的写法是把dist传进去
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}

// commonJS 只支持这样写
module.exports = config;