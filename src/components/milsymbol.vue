<template>
<div>
    <div class="milsymbol" v-if="sicObj">
        <img v-if="frame" class="symbol-sm" :src="sicObj.frameFn">
        <img class="symbol-sm" :src="sicObj.entityFn">
        <img class="symbol-sm" :src="sicObj.specialFn">
        <img class="symbol-sm" :src="sicObj.hqtfdFn">
        <img class="symbol-sm" :src="sicObj.statusFn">
        <img class="symbol-sm" :src="sicObj.amplifierFn">
        <img class="symbol-sm" :src="sicObj.modifierOneFn">
        <img class="symbol-sm" :src="sicObj.modifierTwoFn">
    </div>
</div>    
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {PathService, SicObject, SYMBOL_DATA} from "../jmsml";

    @Component
    export default class MilSymb extends Vue {
        @Prop()
        sic: string;
        @Prop({type:Boolean, default:false})
        alternative: boolean;
        @Prop({type: Boolean, default:true})
        frame:boolean;

        @Watch('sidc')
        onSidcChange(val: string) {
            this.setSymbol();
        }

        sicObj: SicObject;

        private setSymbol() {
            this.sicObj = new SicObject(this.sic, this.alternative);
        }

        created() {
            this.setSymbol();
        }


    }
</script>

<style scoped>
    .milsymbol {
        width: 73px;
        height: 60px;
        float: left;
    }

    .symbol-sm {
        width: 113px;
        height: 120px;
        position: absolute;
        margin: -25px;
    }

</style>
