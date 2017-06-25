<template>
    <div class="container-fluid">
        <div class="col-sm-2 col-md-2 sidebar">
            <p></p>
            <div class="panel panel-default">
                <div class="panel-heading">Settings</div>
                <div class="panel-body">
                    <div class="checkbox" title="Use colored bars for visualizing status">
                        <label>
                            <input type="checkbox" ng-model="alternateAmplifiers" v-model="alternateAmplifiers">Use alternate status amplifiers
                        </label>
                    </div>
                    <div class="checkbox" title="Use civilian frames if available">
                        <label>
                            <input type="checkbox" v-model="useCivilianFrames">Use civilian frames</label>
                    </div>
                    <div class="checkbox" title="Limit some modifiers to specific symbols">
                        <label>
                            <input type="checkbox" v-model="limitUseTo">Limit modifiers</label>
                    </div>
                    <div class="checkbox" title="Show internal meta data">
                        <label>
                            <input type="checkbox" v-model="debug">Show debug info</label>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-sm-10 col-sm-offset-2">
                <h2>Symbol identification code explorer</h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-5 col-sm-offset-2">
                <div class="row">
                    <form class="form-horizontal" role="form">
                        <div>
                            <div class="form-group">

                                <label class="col-sm-4 control-label">Context</label>

                                <div class="col-sm-8">
                                    <code-select :values="sd.contexts" v-model="context"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Standard identity</label>
                                <div class="col-sm-8">
                                    <code-select :values="sd.standardIdentities" v-model="standardIdentity"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Symbol set</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <code-select :values="symbolSets" v-model="symbolSet"></code-select>
                                        <span class="input-group-btn">
                                            <router-link to="symbolset" class="btn btn-info">Browse</router-link>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Status</label>
                                <div class="col-sm-8">
                                    <code-select :values="sd.statuses" v-model="status"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">HQTFDummy</label>
                                <div class="col-sm-8">
                                    <code-select :values="sd.hqtfDummies" v-model="hqtfDummy"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Amplifier</label>
                                <div class="col-sm-8">
                                    <code-select :values="sd.amplifiers" v-model="amplifier"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label"></label>
                                <div class="col-sm-8">
                                    <code-select :values="amplifier.descriptors" v-model="amplifierDescriptor"></code-select>
                                    <pre>{{amplifierDescriptor}}</pre>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Entity</label>
                                <div class="col-sm-8">
                                    <select class="form-control" v-model="entity">
                                        <option v-for="value in symbolSet.entities" :value="value" :key="value.id">
                                            {{value.digits}} {{value.label}}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Entity type</label>
                                <div class="col-sm-8">

                                    <select class="form-control" v-model="entityType">
                                        <option v-for="value in entity.entityTypes" :value="value" :key="value">
                                            {{value.digits}} {{value.label}}
                                        </option>
                                    </select>

                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Entity subtype</label>
                                <div class="col-sm-8">
                                    <!--
                                        <select class="form-control" v-model="entitySubType">
                                         <option v-for="value in entityType.entitySubTypes" :value="value" :key="value.id">
                                                {{value.digits}} {{value.label}}
                                            </option>
                                        </select>
                                        -->
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Sector one modifier</label>
                                <div class="col-sm-8">
                                    <select class="form-control" ng-model="sectorOneModifier" ng-options="getLabel(d) group by d.category for d in symbolSet.sectorOneModifiers | limitUseToModFilter:this:limitUseTo" ng-change="ss.setSectorOneModifier(sectorOneModifier)" ng-disabled="currentEntity | disableModOne">
                                        <option value="">00</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Sector two modifier</label>
                                <div class="col-sm-8">
                                    <select class="form-control" ng-model="sectorTwoModifier" ng-options="getLabel(d) group by d.category for d in symbolSet.sectorTwoModifiers | limitUseToModFilter:this:limitUseTo" ng-change="ss.setSectorTwoModifier(sectorTwoModifier)" ng-disabled="currentEntity | disableModTwo">
                                        <option value="">00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!--<div class="col-sm-5">
                                <table class="table table-bordered table-condensed">
                                    <tr>
                                        <td class="symbol">
                                            <div class="symbol">
                                                <div class="milsymb reveal-animation" ng-include="frame()"></div>
                                                <div class="milsymb reveal-animation" ng-include="main()"></div>
                                                <div class="milsymb reveal-animation" ng-include="special()"></div>
                                                <div class="milsymb reveal-animation" ng-include="modifierOneFn()"></div>
                                                <div class="milsymb reveal-animation" ng-include="modifierTwoFn()"></div>
                                                <div class="milsymb reveal-animation" ng-include="amplifierFn()"></div>
                                                <div class="milsymb reveal-animation" ng-include="statusFn()"></div>
                                                <div class="milsymb reveal-animation" ng-include="hqtfdFn()"></div>
                                            </div>
                                        </td>
                                        <td>{{currentEntity.remarks}}
                                            <div ng-show="showDebugInfo">
                                                <small><strong>ID</strong> <code>{{currentEntity.id}}</code><br>
                                                    <strong>Icon</strong> <code>{{currentEntity.icon}}</code></small>
                                            </div>
                                            <br>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <a class="btn btn-default btn-xs" ng-click="saveAsPng()"
                                               title="Does not work in Internet Explorer">Save as PNG</a>
                                            <a class="btn btn-default btn-xs" clip-copy="copySic()"
                                               title="Copy symbol identification code to clipboard">Copy SIC</a>
                                            <a class="btn btn-default btn-xs" ui-sref="explore({sic: copySic()})">Link</a>
                                        </td>
                                    </tr>
                                </table>
                                <div ng-controller="SymbolIdCodeCtrl">
                                    <table class="table table-bordered symbolid-table">
                                        <tr>
                                            <th colspan="10">Set A</th>
                                        </tr>
                                        <tr class="setA set-values">
                                            <td class="text-muted">{{ symbId.versionCode1}}</td>
                                            <td class="text-muted">{{ symbId.versionCode2}}</td>
                                            <td title="{{ symbId.context.label }}">{{ symbId.context.digits }}</td>
                                            <td title="{{symbId.standardIdentity.label}}">{{ symbId.standardIdentity.digits }}</span>
                                            </td>
                                            <td colspan="2" title="{{symbId.symbolSet.label}}">
                                                <table>
                                                    <tr>
                                                        <td>{{symbId.symbolSet.digits[0]}}</td>
                                                        <td>{{symbId.symbolSet.digits[1]}}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td title="{{symbId.status.label}}">{{ symbId.status.digits }}</td>
                                            <td title="{{symbId.hqtfDummy.label}}">{{ symbId.hqtfDummy.digits || 0}}</td>
                                            <td title="{{symbId.amplifier.label}}">{{symbId.amplifier.digits || 0}}</td>
                                            <td title="{{symbId.amplifierDescriptor.label}}">{{symbId.amplifierDescriptor.digits}}</td>
                                        </tr>
                                        <tr class="set-numbers text-muted">
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>
                                        <tr class="symid-description">
                                            <td colspan="2">Version</td>
                                            <td colspan="2">Standard identity</td>
                                            <td colspan="2">Symbol set</td>
                                            <td>Status</td>
                                            <td>HQ / Task Force / Dummy</td>
                                            <td colspan="2">Amplifier / Descriptor</td>
                                        </tr>
                                        <tr>
                                            <th colspan="10">Set B</th>
                                        </tr>
                                        <tr class="setB set-values">
                                            <td colspan="2" title="{{symbId.entity.label}}">
                                                <table>
                                                    <tr>
                                                        <td>{{symbId.entity.digits[0]}}</td>
                                                        <td>{{symbId.entity.digits[1]}}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td colspan="2" title="{{symbId.entityType.label}}">
                                                <table>
                                                    <tr>
                                                        <td>{{symbId.entityType.digits[0] || 0}}</td>
                                                        <td>{{symbId.entityType.digits[1] || 0}}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td colspan="2" title="{{gget('entitySubType').label}}">
                                                <table>
                                                    <tr>
                                                        <td>{{gget('entitySubType').digits[0]}}</td>
                                                        <td>{{gget('entitySubType').digits[1]}}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td colspan="2" title="{{symbId.sectorOneModifier.label}}">
                                                <table>
                                                    <tr>
                                                        <td>{{gget('sectorOneModifier').digits[0] }}</td>
                                                        <td>{{gget('sectorOneModifier').digits[1] }}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td colspan="2" title="{{gget('sectorTwoModifier').label}}">
                                                <table>
                                                    <tr>
                                                        <td>{{symbId.sectorTwoModifier.digits[0] || 0}}</td>
                                                        <td>{{symbId.sectorTwoModifier.digits[1] || 0}}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr class="set-numbers">
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                        </tr>
                                        <tr class="symid-description">
                                            <td colspan="2">Entity</td>
                                            <td colspan="2">Entity type</td>
                                            <td colspan="2">Entity subtype</td>
                                            <td colspan="2">Sector 1 modifier</td>
                                            <td colspan="2">Sector 2 modifier</td>
                                        </tr>
                                    </table>

                                </div>
                            </div>-->
        </div>
        <div class="row">
            <div class="col-sm-12">
                <!--<a class="btn btn-primary">Explore current symbol set</a>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { SYMBOL_DATA, Context, StandardIdentity, SymbolSet } from "../jmsml/jmsml";
import CodeSelect from "../components/code-select.vue";

interface SymbSymb {
    context: Context;
    standardIdentity: StandardIdentity;
}

@Component({ components: { "code-select": CodeSelect } })
export default class ExploreView extends Vue {
    limitUseTo = false;
    context = SYMBOL_DATA.contexts[0];
    standardIdentity = SYMBOL_DATA.standardIdentities[0];
    status = SYMBOL_DATA.statuses[0];
    hqtfDummy = SYMBOL_DATA.hqtfDummies[0];
    amplifier = SYMBOL_DATA.amplifiers[0];
    amplifierDescriptor = this.amplifier.descriptors[0];
    entity = this.symbolSet.entities[0];
    entityType = this.entity.entityTypes[0];
    //entitySubType = this.entityType.entitySubTypes[0]|| {};
    //amplifierDescriptor = this.amplifier.descriptors[0];

    @Watch("amplifier")
    onAmplifierChange(newValue) {
        this.amplifierDescriptor = this.amplifier.descriptors[0];
    }


    created() {
        this["symbolSets"] = SYMBOL_DATA.symbolSets;
        this["sd"] = SYMBOL_DATA;
        this.context = SYMBOL_DATA.contexts[1];
    }

    get debug() {
        return this.$store.state.debug;
    }

    set debug(value) {
        this.$store.commit("setDebugMode", value);
    }

    get useCivilianFrames() {
        return this.$store.state.useCivilianFrames;
    }

    set useCivilianFrames(value) {
        this.$store.commit("setCivilianFramesMode", value);
    }

    get alternateAmplifiers() {
        return this.$store.state.alternateAmplifiers;
    }

    set alternateAmplifiers(value) {
        this.$store.commit("setalternateAmplifiers", value);
    }

    get symbolSet(): SymbolSet {
        return this.$store.state.symbolSet;
    }

    set symbolSet(value) {
        this.$store.commit("setSymbolSet", value);
    }
}
</script>

<style scoped>

</style>
