<template>
    <v-app id="app">
        <v-navigation-drawer app clipped fixed v-model="drawer">
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left dense>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Symbology explorer</v-toolbar-title>
            <v-toolbar-items class="pl-4">
                <v-btn :to="'/'" flat>Home</v-btn>
                <v-btn :to="'explore'" flat>Explore</v-btn>
                <v-btn :to="'symbolset'" flat>Symbol set browser</v-btn>
                <v-btn :to="'frames'" flat>Frames</v-btn>
            </v-toolbar-items>

            <v-spacer/>
            <v-toolbar-items>
                <v-btn :to="'about'" flat>About</v-btn>
                <v-btn href="https://github.com/kjellmf/military-symbology-explorer" flat>GitHub</v-btn>
            </v-toolbar-items>

        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

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
