<template>
    <v-app id="app">
        <v-navigation-drawer app clipped fixed v-model="drawer">
            <orbat-sidebar></orbat-sidebar>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left dense>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Symbology explorer</v-toolbar-title>
            <v-toolbar-items class="pl-4">
                <v-btn :to="'explore'" flat>Explore</v-btn>
                <v-btn :to="'symbolset'" flat>Symbol set browser</v-btn>
                <v-btn :to="'frames'" flat>Frames</v-btn>
                <v-btn :to="'about'" flat>About</v-btn>
                <v-btn href="https://github.com/kjellmf/military-symbology-explorer" flat>GitHub</v-btn>
            </v-toolbar-items>

            <v-spacer/>

        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>


<!--<template>-->
<!--<div>-->
<!--<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">-->
<!--<div class="container-fluid">-->
<!--<div class="navbar-header">-->
<!--<button type="button" class="navbar-toggle" ng-init="navCollapsed = true"-->
<!--ng-click="navCollapsed = !navCollapsed">-->
<!--<span class="sr-only">Toggle navigation</span>-->
<!--<span class="icon-bar"></span>-->
<!--<span class="icon-bar"></span>-->
<!--<span class="icon-bar"></span>-->
<!--</button>-->
<!--<router-link class="navbar-brand" to="/">Symbology explorer</router-link>-->
<!--</div>-->
<!--<div id="navbar" class="navbar-collapse collapse" ng-class="!navCollapsed && 'in'"-->
<!--ng-click="navCollapsed=true">-->
<!--<ul class="nav navbar-nav navbar-left">-->
<!--<li>-->
<!--<router-link to="explore">Explore</router-link>-->
<!--</li>-->
<!--<li>-->
<!--<router-link to="symbolset">Symbol set browser</router-link>-->
<!--</li>-->
<!--<li>-->
<!--<router-link to="frames">Frames</router-link>-->
<!--</li>-->
<!--<li>-->
<!--<router-link to="search">Search</router-link>-->
<!--</li>-->
<!--<li>-->
<!--<router-link to="about">About</router-link>-->
<!--</li>-->
<!--<li><a href="https://github.com/kjellmf/military-symbology-explorer">Github project</a></li>-->
<!--</ul>-->
<!--</div>-->
<!--</div>-->
<!--</nav>-->
<!--<router-view></router-view>-->
<!--</div>-->
<!--</template>-->

<script lang="ts">
import Vue from "vue";
import {SET_SYMBOL_FROM_SIC} from "./store/action-types";

export default Vue.extend({
    data: () => ({
        drawer: true
    }),
    created() {
        this.$store.dispatch(SET_SYMBOL_FROM_SIC, '10031000161211050000');
    }
});

</script>
