<template>
    <table class="table  table-striped table-hover">
        <thead>
        <tr>
            <th class="col-md-1"></th>
            <th class="col-md-1" v-for="dim in sd.dimensions">{{dim.label}}</th>
        </tr>
        </thead>
        <tr v-for="si in sd.standardIdentities">
            <th>{{si.label}}</th>
            <td v-for="dim in sd.dimensions">
                <div class="milsymbol"><img class="symbol-sm" :src="getFrameFn(si, dim)"></div>
            </td>
        </tr>
    </table>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {BLANK_PATH, FramesData, SVG_PATH, SYMBOL_DATA} from "../jmsml";

    @Component
    export default class FrameTable extends Vue {
        @Prop()
        context: string;
        sd = <FramesData>{};

        created() {
            this.sd.standardIdentities = SYMBOL_DATA.standardIdentities;
            this.sd.dimensions = SYMBOL_DATA.dimensions.filter(function (item) {
                return item.geometry == "POINT"
            });
//            console.log(this.sd.standardIdentities);
        }

        getFrameFn(standardIdentity, dimension) {
            let aff = SYMBOL_DATA.affiliations;
            let obj = aff[this.context][dimension.id][standardIdentity.id];
            return obj ? SVG_PATH + obj.graphic : BLANK_PATH;
        }
    }
</script>

