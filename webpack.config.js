/**
 * webpack概念
 * build modules with dependencies  基于node环境
 * 打包应用程序中的所有模块 得到静态资源(bundle)文件  放到指定目录中
 * 从wp4.0开始  不必引入一个配置文件  因为提供了一个默认的配置文件
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const {entry, htmlWebpackPlugins}  = require('./build/mpa.js') 

const config = {
  // 提供mode配置选项, 告知wp使用响应模式的内置优化
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  // entry属性 指示wp应该使用哪个模块 作为依赖构建的入口. entry可以是一个或者多个 默认值 './src'
  // entry: {
  //   // index: ['./src/index.js', './src/about.js'],  // 正常是不会这么写的  但发现这样配也可以 会把多个thunk打包到一个bundle文件里
  //   main: './src/index.js'
  // },
  entry: "./src/index.js",
  // entry: entry,

  // output属性 告诉wp在哪里输出它创建的bundles 以及如何命名这些文件
  output: {
    // 用于输出文件的文件名  动态   chunkhash和hash占位符不能同时使用---[name].[id].[hash].js
    filename: 'js/[name].[hash].js',
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
    rules: [
      {
        // 标示出应该被对应loader进行转换的一个或某些文件
        test: /\.css$/,
        // 标示进行转换时 应该用哪个loader  loader的执行顺序是从右往左
        // "postcss-loader" 添加浏览器兼容前缀
        use: [
          'style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: ''
          //   }
          // },
          'css-loader',
          "postcss-loader"
        ]
      },
      // file-loader 的作用是把静态资源模块移动到输出目录  url-loader是file-loader的加强版 把jpg处理为base64
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:6].[ext]",
            outputPath: "images/",
            //⼩于10K，才转换成base64
            limit: 1024 * 10
          }
        }
      }
    ]
  },
  // 插件目的在于解决 loader 无法实现的其他事
  // webpack 插件是一个具有 apply 属性的 JavaScript 对象
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin('dist'), // 坑 按最新的配没效果  老的写法是把dist传进去
    new HtmlWebpackPlugin({
      title: "webpack hello", // index.html中 要做插入才生效
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
    // ...htmlWebpackPlugins
  ],
  // 如果自定义了loader 告诉wp先到node_modules找loader,找不到再去 myLoaders文件夹
  resolveLoader: {
    modules: [
      "./node_modules",
      path.resolve(__dirname, 'myLoaders')
    ]
  },
  devServer: {
    before: function (app, server, compiler) {
      app.get('/some/path', function (req, res) {
        res.json({ custom: 'response: 你真棒' });
      });
    },
    open: true,
    openPage: 'some/path', // 可以配置一个默认路由
    hot: true,  // 启用 webpack 的模块热替换特性。DevServer默认的行为是在发现源代码被更新后会通过自动刷新整个页面来做到实现预览
    hotOnly:true,
    port: 8090,
    clientLogLevel: "error",   // none, error, warning 或者 info（默认值
    noInfo: false, // 不建议开启
    // stats: "errors-only",
    proxy: {
      '/gome': {
        target: "http://localhost:8090",
        pathRewrite: {"^/gome" : ""}
      }
      //  http://localhost:8090/gome/some/path 代理成功 这地址有返回值
      // 代理也可以配置多个
    }
  }
}


// commonJS 只支持这样写
module.exports = config;

/*
hash、thunkhash、contenthash 的区别
hash:           每次构建过程中,唯一的hash生成,只有当文件有修改的时候 hash才会变   output 标识符             任何一个依赖变化 都变化
thunkhash:      基于每个thunk内容的hash, 一个thunk中可能会引入多个文件, 任何一个文件被修改 thunkhash都会变  只有当前模块的依赖改变了 才变 适用于单独打包库
contenthash:    基于文件内容的hash   只要当前文件修改了 contenthash才会变           file-loader标识符 只要当前css改变才变
最佳实践: js推荐使用thunkhash  css使用contenthash




只装webpack-dev-server 修改代码浏览器自动刷新 包括修改样式
添加devServer 配置hot 发现修改样式 页面不刷新  字体颜色也不变
原因: 热模块替换 不能抽离css 去掉loader 热更新生效
但是: 修改js 页面无更新, 因为js要做特殊处理 : 添加HotModuleReplacementPlugin 入口增加 if (module.hot)
这样js改变  页面就会热替换

*/