<template>
  <div v-if="Object.keys(groups).length">
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
export default class CodeSelectGroup extends Vue {
  myValue = null;
  @Prop()
  groups;
  @Prop()
  value;
  @Prop(String)
  label;

  created() {
    this.myValue = this.value;
  }

  get nvalues() {
    let tmp = [];
    Object.keys(this.groups).forEach(group => {
      if (group) tmp.push({ header: group });
      this.groups[group].forEach(v => tmp.push({ text: `${v.digits} - ${v.label}`, value: v }));
    });
    return tmp;
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
