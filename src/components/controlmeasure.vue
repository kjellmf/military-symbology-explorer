<template>
    <div class="milsymbol">
        <img class="symbol-sm" :src="sicObj.frameFn">
        <img class="symbol-sm" :src="sicObj.entityFn">
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {PathService, SicObject, SYMBOL_DATA} from "../jmsml";
    import {Entity, EntityBase, EntitySubType, Sic, SID_MAP} from "../jmsml/jmsml";

    @Component
    export default class Symbsetsymb extends Vue {
        @Prop(String)
        sic:string;
        sicObj:SicObject = null;

        @Watch('sic')
        onSidChange(val: string) {
            this.setSymbol();
        }

        private setSymbol() {
            this.sicObj = new SicObject(this.sic);
        }

        created() {
            this.setSymbol();
        }


    }
</script>

<style scoped>
    .milsymbol {
        width: 150px;
        height: 150px;
        float: left;
    }

    .symbol-sm {
        width: 140px;
        height: 140px;
        position: absolute;
    }

</style>
