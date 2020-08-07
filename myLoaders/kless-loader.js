// less-loader的核心是 使用less处理文件 把结果返回
// 借助 callback 返回 
/**
  this.callback(
  err: Error | null,
  content: string | Buffer,
  sourceMap?: SourceMap,
  meta?: any
);
 */

const less = require("less");

module.exports = function (source) {
  less.render(source, (err, output) => {
    if (err) return this.callback(err);
    this.callback(null, output.css);
  });
};



// 可以做， 但没必要