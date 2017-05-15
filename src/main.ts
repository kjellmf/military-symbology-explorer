import Vue from 'vue'
import App from './App.vue'

import MilSymb from "./components/milsymbol.vue";

Vue.component('milsymbol', MilSymb);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
