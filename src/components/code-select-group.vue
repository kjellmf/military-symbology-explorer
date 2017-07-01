<template>
    <div v-if="Object.keys(groups).length">
        <select class="form-control" v-model="myValue" v-if="groups">
            <optgroup v-for="(values, group) in groups" :label="group" :key="group">
                <option v-for="val in values" :value="val" :key="val.id">
                    {{val.digits}} {{val.label}}
                </option>
            </optgroup>
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
export default class CodeSelectGroup extends Vue {
    myValue = null;
    @Prop()
    groups;
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
