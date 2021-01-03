import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ExploreView from "./views/ExploreView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
