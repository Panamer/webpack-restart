const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware")

const config = require('./webpack.config.js')
const app = express()
const compiler = webpack(config)
const port = process.env.PORT || 3000

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
}))

// config里加上plugin entry配置hotmiddle 这样可以实现热加载
// 但是官方说可以在这里配置热加载的 configuration. 我会在下一个提交里试试
app.use(webpackHotMiddleware(compiler))

app.listen(port, () => {
  console.log(`server listening on ${port}`);
})
