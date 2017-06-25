import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from './views/main-view.vue';
import FramesView from './views/frames-view.vue';
// import ExploreView from './views/explore-view.vue';
import AboutView from './views/about-view.vue';
import SymbolsetView from './views/symbolset-view.vue';
import ExploreView from './views/explore-view.vue';

Vue.use(VueRouter);

const Dummy = { template: '<div>{{ $route.params}}</div>' };
export default new VueRouter({
    linkActiveClass: 'active',
    // mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        { path: '/', component: MainView },
        { path: '/about', component: AboutView },
        { path: '/explore/:sic?', name: "explore", component: ExploreView },
        { path: '/frames', name: "frames", component: FramesView },
        { path: '/symbolset/:symbolSetId?', name: "symbolset", component: SymbolsetView }
    ]
});
