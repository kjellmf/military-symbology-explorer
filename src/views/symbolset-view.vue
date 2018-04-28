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
    import {findWithAttr, SYMBOL_DATA} from "../jmsml";
    import SymbolsetTable from "../components/symbolset-table.vue";
    import ControlMeasureTable from "../components/controlmeasure-table.vue";
    import MineTable from "../components/mine-table.vue";
    import {SET_CIVILIAN_FRAMES_MODE, SET_DEBUG_MODE} from "../store/mutation-types";
    import {CHANGE_SYMBOL_SET} from "../store/action-types";

    @Component({
        components: {
            'symbolset-table': SymbolsetTable,
            'controlmeasure-symbolset-table': ControlMeasureTable,
            'mine-symbolset-table' : MineTable,
        }
    })
    export default class SymbolsetView extends Vue {
        @Watch('$route')
        onRouteChange(to, from) {
            this.setSymbolSetFromRoute();
        }

        created() {
            this["symbolSets"] = SYMBOL_DATA.symbolSets;
        }

        setSymbolSetFromRoute() {
            let routeSymbolSetId = this.$route.params.symbolSetId;
            if (routeSymbolSetId) {
                let tmp = findWithAttr(SYMBOL_DATA.symbolSets, 'id', routeSymbolSetId);
                if (tmp) {
                    this.currentSymbolSet = tmp;
                }
            }
        }

        get debug() {
            return this.$store.state.debug;
        }

        get currentSymbolSet() {
            return this.$store.state.symbol.symbolSet;
        }

        set currentSymbolSet(value) {
            this.$store.dispatch(CHANGE_SYMBOL_SET, value);
        }

        get useCivilianFrames() {
            return this.$store.state.useCivilianFrames;
        }
    }
</script>

<style scoped>


</style>
