/*
    将bus封装为一个Vue的插件，可以在所有的组件间任意使用，而不需要导入bus
    vue-bus.js
*/
const install = (Vue) => {
    const bus = new Vue({
        emit (event, ...args) {
            this.$emit(event, ...args);
        },
        on (event, callback) {
            this.$on(event, callback);
        },
        off (event, callback) {
            this.$off(event, callback);
        }
    });

    Vue.prototype.$bus = bus;
};

export default install;
