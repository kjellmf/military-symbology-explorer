<template>
    <div class="milsymbol">
        <img class="symbol-sm" :src="frameFn">
        <img class="symbol-sm" :src="entityFn">
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {PathService, SicObject, symbolData} from "../jmsml";
    import {EntityBase} from "../jmsml/jmsml";

    @Component
    export default class MilSymb extends Vue {
        @Prop()
        entity: EntityBase;
        @Prop()
        si: string;

        private setSymbol() {

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
