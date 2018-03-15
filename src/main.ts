import Vue from 'vue'

import MilSymb from "./components/milsymbol.vue";
import router from './router';
import store from './store';

import App from './App.vue';

Vue.component('milsymbol', MilSymb);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
