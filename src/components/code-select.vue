<template>
    <select class="form-control" v-model="myValue">
        <option v-for="val in values" :value="val.id" :key="val.id">
            {{val.digits}} {{val.label}}
        </option>
    </select>
</template>
  

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator';
import Vue from "vue";
import {findWithAttr} from '../jmsml'

@Component({

})
export default class CodeSelect extends Vue {
    myValue = null;
    @Prop()
    values;
    @Prop()
    value;
    created() {
        this.myValue = this.value.id;
    }

    @Watch('value') 
    onVChange(nn){
        this.myValue = nn.id;
    }

    @Watch("myValue")
    onValueChange(newValue) {
        let obj = findWithAttr(this.values, 'id', newValue)
        this.$emit('input', obj);
    }
}
</script>
