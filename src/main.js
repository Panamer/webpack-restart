import Vue from 'vue';
import router from './router';
import VueBus from './store/bus';
import App from './App.vue';

Vue.use(VueBus);

/* eslint-disable no-new */
new Vue({
    el: '#App',
    router,
    template: '<App/>',
    components: { App }
});
