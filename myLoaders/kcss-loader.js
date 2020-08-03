// 如何⾃⼰编写⼀个Loader
// Loader就是⼀个函数，声明式函数，不能⽤箭头函数
// 拿到源代码，作进⼀步的修饰处理，再返回处理后的源码就可以了

// API： this.callback   this.async
// 上一个loader的返回结果是当前loader的入参

module.exports = function (source) {
  return source;
};
