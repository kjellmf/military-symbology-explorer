<template>
    <div id="app">

        <h1>Test</h1>
        <ul>
            <li v-for="t in msg">{{t.label}}</li>
        </ul>
        <img :src="path" height="100px">
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {PathService, SicObject, symbolData} from "./jmsml";

    @Component
    export default class MyApp extends Vue {
        msg = Object.freeze(symbolData.symbolSets);
        path="";
        tmp = {};
        created() {
            console.log("Hello");
        }
        mounted() {
            var tmp: SicObject = new SicObject("10131000001211050000");
            console.log(PathService.getEntityFilePath(tmp));
            this.path = tmp.frameFn;


        }

    }
</script>

<style scoped>


</style>
