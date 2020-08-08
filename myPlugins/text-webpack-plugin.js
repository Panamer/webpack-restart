/**
 * plugin 是为了拓展webpack功能 
 * webpack在编译构建过程中 会经历很多 生命周期、hook、事件 阶段
 * api/compile-hooks
 * ⚠️  class文件上面的内容要全部注释掉  否则 报错
 */

// const webpack = require("webpack")
// const webpackConfig = require("../webpack.config");

// const compile = webpack(webpackConfig);
// // compile hooks
// Object.keys(compile.hooks).forEach(hookName => {
//     compile.hooks[hookName].tap('pluginName', () => {
//         console.log(`run ----  ${hookName}`);
//     })
// });

// compile.run();


class textWebpackPlugin {
    constructor(options){
        console.log(options);
    }
    // apply函数接收compile对象 触发plugin 必不可少
    apply(compile){
        compile.hooks.emit.tapAsync('textWebpackPlugin', (compilation, callback) => {
            compilation.assets["output.txt"] = {
                source: () => {
                    return "安霞老师真漂亮啊";
                },
                size: () => {
                    return 10 * 1024;   // 10kb
                }
            }
            // callback 必须加
            callback()
        })
    }
}

module.exports = textWebpackPlugin
// 😄 做人嘛，最重要的就是开心  😄