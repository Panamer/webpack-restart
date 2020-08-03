//实现style-loader 
// 原理： style-loader是将css-loader打包好的css代码以<style>标签的形式插入到html文件中
// source 是string | Buffer


module.exports = function (source) {
  return `const tag = document.createElement('style');
    tag.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(tag)`;
};
