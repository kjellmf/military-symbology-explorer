<template>
    <div id="app">

        <h1>Test</h1>
        <ul>
            <li v-for="t in msg">{{t.label}}</li>
        </ul>
        <milsymbol sic="10031030161203000000"></milsymbol>
        <milsymbol sic="10031500321112030000"></milsymbol>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {PathService, SicObject, symbolData} from "./jmsml";

    @Component
    export default class MyApp extends Vue {
        msg = Object.freeze(symbolData.symbolSets);
    }
</script>

<style scoped>


</style>
