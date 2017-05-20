<template>
    <div class="milsymbol" v-if="sicObj">
        <img class="symbol-sm" :src="sicObj.frameFn">
        <img class="symbol-sm" :src="sicObj.entityFn">
        <img class="symbol-sm" :src="sicObj.specialFn">
        <img class="symbol-sm" :src="sicObj.hqtfdFn">
        <img class="symbol-sm" :src="sicObj.statusFn">
        <img class="symbol-sm" :src="sicObj.amplifierFn">
        <img class="symbol-sm" :src="sicObj.modifierOneFn">
        <img class="symbol-sm" :src="sicObj.modifierTwoFn">
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {PathService, SicObject, symbolData} from "../jmsml";

    @Component
    export default class MilSymb extends Vue {
        @Prop(String)
        sic: string;
        @Prop({type:Boolean, default:false})
        alternate: boolean;

        @Watch('sidc')
        onSidcChange(val: string) {
            this.setSymbol();
        }

        sicObj: SicObject;

        private setSymbol() {
            this.sicObj = new SicObject(this.sic, this.alternate);
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
