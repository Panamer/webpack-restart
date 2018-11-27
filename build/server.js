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
app.use(webpackHotMiddleware(compiler, {
    path: "__webpack_hmr",  // 这里是配置hotmiddle重新连接的，和entry里的配置不是一回事
    heartbeat: 2000
}))

app.listen(port, () => {
  console.log(`server listening on ${port}`);
})
