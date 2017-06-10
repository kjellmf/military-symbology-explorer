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

        get useCivilianFrames() {
            return this.$store.state.useCivilianFrames;
        }

        @Watch('useCivilianFrames')
        onChange(val:string) {
            this.setSymbol();
        }

        private setSymbol() {
            this.sicObj = new SicObject(this.sic, undefined, this.useCivilianFrames);
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
