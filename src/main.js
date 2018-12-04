import Vue from 'vue';
import VueBus from './store/bus';
import App from './App';

Vue.use(VueBus);

/* eslint-disable no-new */
new Vue({
    el: '#App',
    template: '<App/>',
    components: { App }
});
