import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from './views/main-view.vue';

Vue.use(VueRouter);

const Dummy = { template: '<div>{{ $route.params}}</div>' };
export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: MainView },
        { path: '/explore/:sic?', name: "explore", component:Dummy}
    ]
});
