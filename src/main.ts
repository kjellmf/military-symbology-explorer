import Vue from 'vue'
import App from './App.vue'

import {symbolData} from './jmsml';

console.log(symbolData.contexts);
new Vue({
    el: '#app',
    render: h => h(App)
});
