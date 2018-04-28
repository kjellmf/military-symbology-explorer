<template>
  <v-app id="app">
    <v-navigation-drawer app clipped fixed v-model="drawer">
      <v-list dense>
        <v-subheader>Navigation</v-subheader>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="explore">
          <v-list-tile-action>
            <v-icon>explore</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Explore</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="symbolset">
          <v-list-tile-action>
            <v-icon>reorder</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Browse symbol set</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="frames">
          <v-list-tile-action>
            <v-icon>filter_frames</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Frames</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <settings/>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span>Symbology explorer</span></v-toolbar-title>
      <v-toolbar-items class="pl-4 hidden-sm-and-down">
        <v-btn :to="'/'" flat>Home</v-btn>
        <v-btn :to="'explore'" flat>Explore</v-btn>
        <v-btn :to="'symbolset'" flat><span class="hidden-sm-and-down">Symbol set</span> browser</v-btn>
        <v-btn :to="'frames'" flat>Frames</v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
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
import settings from './components/settings.vue';

import {SET_SYMBOL_FROM_SIC} from "./store/action-types";

export default Vue.extend({
  components: { settings },
  data: () => ({
    drawer: true
  }),
  created() {
    this.$store.dispatch(SET_SYMBOL_FROM_SIC, '10031000161211050000');
  }
});

</script>
