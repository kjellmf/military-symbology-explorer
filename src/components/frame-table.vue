<template>
    <table class="table  table-striped table-hover">
        <thead>
        <tr>
            <th class="col-md-1"></th>
            <th class="col-md-1" v-for="dim in dimensions">{{dim.label}}</th>
        </tr>
        </thead>
        <tr v-for="si in standardIdentities">
            <th>{{si.label}}</th>
            <td v-for="dim in dimensions">
                <div class="milsymbol"><img class="symbol-sm" :src="getFrameFn(si, dim)"></div>
            </td>
        </tr>
    </table>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {symbolData} from "../jmsml";

    const BLANK_PATH = "assets/img/blank.png";
    const SVG_PATH = "svg/MIL_STD_2525D_Symbols/";


    @Component
    export default class FrameTable extends Vue {
        @Prop()
        context: string;
        affiliations = symbolData.affiliations;
        standardIdentities = symbolData.standardIdentities;
        dimensions = symbolData.dimensions.filter(function (item) {
            return item.geometry == "POINT"
        });


        getFrameFn(standardIdentity, dimension) {
            let aff = symbolData.affiliations;
            let obj = aff[this.context][dimension.id][standardIdentity.id];
            return obj ? SVG_PATH + obj.graphic : BLANK_PATH;

        }


    }
</script>

<style scoped>

</style>
