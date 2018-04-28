<template>
    <div v-if="values.length">
      <v-select
          :items="values"
          :label="label"
          item-text="label"
          as-object
          v-model="myValue"
        />
    </div>
    <div v-else>
        <select class="form-control" disabled>
            <option>00</option>
        </select>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator';
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
