<template>
    <div v-if="values.length">
        <select class="form-control" v-model="myValue">
            <option v-for="val in values" :value="val" :key="val.id">
                {{val.digits}} {{val.label}}
            </option>
        </select>
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
    @Prop()
    values;
    @Prop()
    value;

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
