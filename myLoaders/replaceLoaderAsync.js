//loader本质上就是一个函数，但是不可以是箭头函数
//拿到原内容，做进一步的加工处理，处理后把加工后的内容返回
//如何接受配置
//如何返回多个值
//如果有异步的事情要怎么处理
//多个loader的使用
module.exports = function (source) {
  //   console.log(this.query);
  //   return result;
  //   this.callback(null, result);
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace("webpack", this.query.name);
    callback(null, result);
  }, 3000);
};
