import Vue from 'vue'

import MilSymb from "./components/milsymbol.vue";
import router from './router';
import store from './store';
import {INITIALIZE, SET_SYMBOL_FROM_SIC} from "./store/action-types";

Vue.component('milsymbol', MilSymb);

const app = new Vue({
    el: '#app',
    template: `<div>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" ng-init="navCollapsed = true"
                        ng-click="navCollapsed = !navCollapsed">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/">Symbology explorer</router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse" ng-class="!navCollapsed && 'in'"
                 ng-click="navCollapsed=true">
                <ul class="nav navbar-nav navbar-left">
                    <li><router-link to="explore">Explore</router-link></li>
                    <li><router-link to="symbolset">Symbol set browser</router-link></li>
                    <li><router-link to="frames">Frames</router-link></li>
                    <li><router-link to="search">Search</router-link></li>
                    <li><router-link to="about">About</router-link></li>
                    <li><a href="https://github.com/kjellmf/military-symbology-explorer">Github project</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</div>`,
    router,
    store,

    created() {
        this.$store.dispatch(SET_SYMBOL_FROM_SIC, '10031000161211050000');
    }

});
