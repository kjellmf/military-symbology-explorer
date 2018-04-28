<template>
  <div>
    <v-subheader>Settings</v-subheader>
    <v-list-tile>
      <v-list-tile-action>
        <v-switch v-model="alternateAmplifiers"></v-switch>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Alternate status amplifiers</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-switch v-model="useCivilianFrames"></v-switch>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Civilian frames</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-switch v-model="debug"></v-switch>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Show debug info</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as mut from "../store/mutation-types";

export default Vue.extend({
  name: "settings",
  computed: {

    useCivilianFrames: {
      get() {
        return this.$store.state.useCivilianFrames;
      },

      set(value) {
        this.$store.commit(mut.SET_CIVILIAN_FRAMES_MODE, value);
      }
    },

    alternateAmplifiers: {
      get() {
        return this.$store.state.alternateAmplifiers;
      },

      set(value) {
        this.$store.commit(mut.SET_ALTERNATE_AMPLIFIERS_MODE, value);
      }
    },
    debug: {
      get() {
        return this.$store.state.debug;
      },
      set(value) {
        this.$store.commit(mut.SET_DEBUG_MODE, value);
      }
    },
  }
})
</script>

<style scoped>

</style>
