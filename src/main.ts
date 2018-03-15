import Vue from 'vue'

import MilSymb from "./components/milsymbol.vue";
import router from './router';
import store from './store';

import App from './App.vue';
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
Vue.component('milsymbol', MilSymb);

Vue.use(Vuetify);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
