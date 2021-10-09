import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    navbarTitle?: string;
  }
}
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Resources from "./views/Resources.vue";
import ExploreView from "./views/ExploreView.vue";
import SymbolsetView from "./views/SymbolsetView.vue";

export const HOME_ROUTE = "Home";
export const EXPLORE_ROUTE = "Explore";
export const ABOUT_ROUTE = "About";
export const SYMBOL_SET_ROUTE = "Symbolset";
export const RESOURCES_ROUTE = "Resources";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: HOME_ROUTE,
    component: Home,
  },
  {
    path: "/explore/:sidc?",
    name: EXPLORE_ROUTE,
    component: ExploreView,
    props: true,
    meta: { navbarTitle: "SIC explorer" },
  },
  {
    path: "/symbolset/:symbolSetCode?",
    name: SYMBOL_SET_ROUTE,
    component: SymbolsetView,
    props: true,
    meta: { navbarTitle: "Symbol set browser" },
  },
  {
    path: "/about",
    name: ABOUT_ROUTE,
    component: About,
    meta: { navbarTitle: "About" },
  },
  {
    path: "/resources",
    name: RESOURCES_ROUTE,
    component: Resources,
    meta: { navbarTitle: "Resources" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
