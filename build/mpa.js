const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');



const setMpa = () => {
  const entry = {}
  const htmlWebpackPlugins = []

  const entryFiles = glob.sync(path.join(__dirname, "../src/*/index.js"))

  entryFiles.map((item, index) => {
    const match = item.match(/src\/(.*)\/index\.js$/);
    const pageName = match && match[1];
    entry[pageName] = item;
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        title: pageName,
        template: path.join(__dirname, `../src/${pageName}/index.html`),
        filename: `html/${pageName}.html`,
        chunks: [pageName],
        inject: "body"
      })
    )
  })
  
  return { entry, htmlWebpackPlugins }
}

module.exports = setMpa();