import Vue from 'vue'

import MilSymb from "./components/milsymbol.vue";
import router from './router';

Vue.component('milsymbol', MilSymb);

const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router,
});
