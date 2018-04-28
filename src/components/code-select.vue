<template>
  <div v-if="values.length">
    <v-select
      :items="nvalues"
      v-model="myValue"
      :label="label"
    />
  </div>
  <div v-else>
    <v-select
      readonly
      :label="label"
      placeholder="00"
    />
  </div>
</template>


<script lang="ts">
import {Component, Prop, Watch} from 'vue-property-decorator';
import Vue from "vue";

@Component({})
export default class CodeSelect extends Vue {
  myValue = null;
  @Prop(Array)
  values;
  @Prop()
  value;
  @Prop(String)
  label;

  created() {
    this.myValue = this.value;
  }

  get nvalues() {
    return this.values.map(v => (
      { text: `${v.digits} - ${v.label}`, value: v })
    );
  }

  @Watch('value')
  onVChange(nn) {
    this.myValue = nn;
  }

  @Watch("myValue")
  onValueChange(newValue, oldValue) {
    if (oldValue) this.$emit('input', newValue);
  }
}
</script>
