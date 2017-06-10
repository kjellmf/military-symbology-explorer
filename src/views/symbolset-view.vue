<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 col-md-2 sidebar">
                <form role="form">
                    <div class="form-group">
                        <label>Symbol set</label>
                        <select class="form-control" v-model="currentSymbolSet">
                            <option v-for="symbolset in symbolSets" :value="symbolset">
                                {{symbolset.digits}} {{symbolset.label}}
                            </option>
                        </select>
                    </div>
                </form>

                <!--<div class="panel panel-default">
                    <div class="panel-heading">Tables</div>
                    <div class="panel-body">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a ui-sref=".symboltable">Symbols</a></li>
                            <li ng-if="currentSymbolSet.specialEntitySubTypes"><a ui-sref=".specialsubtypes">Special subtypes</a>
                            </li>
                            <li><a ui-sref=".modifierone">Modifier ones</a></li>
                            <li><a ui-sref=".modifiertwo">Modifier twos</a></li>
                        </ul>
                    </div>
                </div>-->

                <!--<div class="panel panel-default">-->
                <!--<div class="panel-heading">Symbol</div>-->
                <!--<div class="panel-body" ng-controller="SidebarCtrl">-->
                <!--<div class="sidebar-milsymbol milsymbol" style="transform: scale(1.5)">-->
                <!--<img class="symbol-sm" ng-src="{{symb.frameFn}}"/>-->
                <!--<img class="symbol-sm" ng-src="{{symb.entityFn}}"/>-->
                <!--<img class="symbol-sm" ng-src="{{symb.mod1Fn}}"/>-->
                <!--<img class="symbol-sm" ng-src="{{symb.mod2Fn}}"/>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->

                <div class="panel panel-default">
                    <div class="panel-heading">Settings</div>
                    <div class="panel-body">
                        <div class="checkbox" title="Show internal meta data">
                            <label><input type="checkbox" v-model="debug">Show debug info</label>
                        </div>
                        <div class="checkbox" title="Use civilian frames (visible when you change symbol set)">
                            <label><input type="checkbox" ng-click="redrawSymbolSet()"
                                          v-model="useCivilianFrames">Use civilian frames</label>
                        </div>
                        <!--<div class="checkbox" title="Show only modifiers with the LimitUseTo attribute set">-->
                        <!--<label><input type="checkbox" ng-model="settings.showLimitUseToOnly">Show limited modifiers only</label>-->
                        <!--</div>-->
                    </div>
                </div>

            </div>
            <div class="col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 main">
                <h1 id="symboltable" class="page-header" :title="currentSymbolSet.id">{{currentSymbolSet.label}}</h1>
                <div v-if="debug" class="well">
                    <small><strong>Id</strong> <code>{{currentSymbolSet.id}}</code>
                        <strong>Geometry</strong> <code>{{currentSymbolSet.geometry}}</code>
                        <strong>DimensionId</strong> <code>{{currentSymbolSet.dimensionId}}</code>
                    </small>
                </div>
                <mine-symbolset-table :symbolset="currentSymbolSet"
                                      v-if="currentSymbolSet.id === 'SS_MINE_WARFARE'"></mine-symbolset-table>
                <controlmeasure-symbolset-table :symbolset="currentSymbolSet"
                                                v-else-if="currentSymbolSet.id === 'SS_CONTROL_MEASURE'"></controlmeasure-symbolset-table>
                <controlmeasure-symbolset-table :symbolset="currentSymbolSet"
                                                v-else-if="currentSymbolSet.id === 'SS_ATMOSPHERIC'"></controlmeasure-symbolset-table>
                <controlmeasure-symbolset-table :symbolset="currentSymbolSet"
                                                v-else-if="currentSymbolSet.id === 'SS_OCEANIC'"></controlmeasure-symbolset-table>
                <controlmeasure-symbolset-table :symbolset="currentSymbolSet"
                                                v-else-if="currentSymbolSet.id === 'SS_MET_SPACE'"></controlmeasure-symbolset-table>
                <symbolset-table :symbolset="currentSymbolSet" v-else></symbolset-table>


            </div>
        </div>
    </div>


</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import {SYMBOL_DATA} from "../jmsml";
    import SymbolsetTable from "../components/symbolset-table.vue";
    import ControlMeasureTable from "../components/controlmeasure-table.vue";

    @Component({
        components: {
            'symbolset-table': SymbolsetTable,
            'controlmeasure-symbolset-table': ControlMeasureTable
        }
    })
    export default class SymbolsetView extends Vue {
        created() {
            this["symbolSets"] = SYMBOL_DATA.symbolSets;
        }

        get debug() {
            return this.$store.state.debug;
        }

        set debug(value) {
            this.$store.commit("setDebugMode", value);
        }

        get currentSymbolSet() {
            return this.$store.state.symbolSet;
        }

        set currentSymbolSet(value) {
            this.$store.commit("setSymbolSet", value);
        }

        get useCivilianFrames() {
            return this.$store.state.useCivilianFrames;
        }

        set useCivilianFrames(value) {
            this.$store.commit("setCivilianFramesMode", value);
        }

    }
</script>

<style scoped>


</style>
