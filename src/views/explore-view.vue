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
                                    <code-select :values="sd.standardIdentities"
                                                 v-model="standardIdentity"></code-select>
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
                                    <code-select :values="amplifier.descriptors || []"
                                                 v-model="amplifierDescriptor"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Entity</label>
                                <div class="col-sm-8">
                                    <code-select :values="symbolSet.entities" v-model="entity"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Entity type</label>
                                <div class="col-sm-8">
                                    <code-select :values="entityTypes" v-model="entityType"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Entity subtype</label>
                                <div class="col-sm-8">
                                    <code-select :values="entitySubTypes" v-model="entitySubType"></code-select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Sector one modifier</label>
                                <div class="col-sm-8">
                                    <code-select-group :groups="mod1Groups"
                                                       v-model="sectorOneModifier"></code-select-group>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Sector two modifier</label>
                                <div class="col-sm-8">
                                    <code-select-group :groups="mod2Groups"
                                                       v-model="sectorTwoModifier"></code-select-group>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-sm-5">
                <!--<table class="table table-bordered table-condensed">
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
                                                </table>-->
                <div>
                    <table class="table table-bordered symbolid-table">
                        <tr>
                            <th colspan="10">Set A</th>
                        </tr>
                        <tr class="setA set-values">
                            <td class="text-muted">1</td>
                            <td class="text-muted">0</td>
                            <td :title="context.label">{{ context.digits }}</td>
                            <td :title="standardIdentity.label">{{ standardIdentity.digits }}
                            </td>
                            <td colspan="2" :title="symbolSet.label">
                                <table>
                                    <tr>
                                        <td>{{symbolSet.digits[0]}}</td>
                                        <td>{{symbolSet.digits[1]}}</td>
                                    </tr>
                                </table>
                            </td>
                            <td :title="status.label">{{ status.digits }}</td>
                            <td :title="hqtfDummy.label">{{ hqtfDummy.digits || 0}}</td>
                            <td :title="amplifier.label">{{amplifier.digits || 0}}</td>
                            <td :title="amplifierDescriptor.label">{{amplifierDescriptor.digits}}</td>
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
                            <td colspan="2" :title="entity.label">
                                <table>
                                    <tr>
                                        <td>{{entity.digits[0]}}</td>
                                        <td>{{entity.digits[1]}}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="entityType.label">
                                <table>
                                    <tr>
                                        <td>{{entityType.digits[0]}}</td>
                                        <td>{{entityType.digits[1]}}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="entitySubType.label">
                                <table>
                                    <tr>
                                        <td>{{entitySubType.digits[0]}}</td>
                                        <td>{{entitySubType.digits[1]}}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="sectorOneModifier.label">
                                <table>
                                    <tr>
                                        <td>{{sectorOneModifier.digits[0] }}</td>
                                        <td>{{sectorOneModifier.digits[1] }}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="sectorTwoModifier.label">
                                <table>
                                    <tr>
                                        <td>{{sectorTwoModifier.digits[0]}}</td>
                                        <td>{{sectorTwoModifier.digits[1]}}</td>
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
            </div>
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
    import {Component, Watch} from 'vue-property-decorator';
    import {SYMBOL_DATA, Context, StandardIdentity, SymbolSet, Modifier} from "../jmsml/jmsml";
    import CodeSelect from "../components/code-select.vue";
    import CodeSelectGroup from "../components/code-select-group.vue";
    import * as mut from "../store/mutation-types";
    import {
        CHANGE_AMPLIFIER,
        CHANGE_ENTITY,
        CHANGE_ENTITY_SUB_TYPE,
        CHANGE_ENTITY_TYPE,
        CHANGE_SYMBOL_SET
    } from "../store/action-types";

    function groupBy(items, prop) {
        return items.reduce(function (groups, item) {
            var val = item[prop] || "";
            groups[val] = groups[val] || [];
            groups[val].push(item);
            return groups;
        }, {});
    }

    @Component({ components: { "code-select": CodeSelect, "code-select-group": CodeSelectGroup } })
    export default class ExploreView extends Vue {
        limitUseTo = false;

        created() {
            this["symbolSets"] = SYMBOL_DATA.symbolSets;
            this["sd"] = SYMBOL_DATA;
        }

        get context() {
            return this.$store.state.symbol.context;
        }

        set context(value) {
            this.$store.commit(mut.SET_CONTEXT, value);
        }

        get standardIdentity() {
            return this.$store.state.symbol.standardIdentity;
        }

        set standardIdentity(value) {
            this.$store.commit(mut.SET_STANDARD_IDENTIY, value);
        }

        get status() {
            return this.$store.state.symbol.status;
        }

        set status(value) {
            this.$store.commit(mut.SET_STATUS, value);
        }

        get hqtfDummy() {
            return this.$store.state.symbol.hqtfDummy;
        }

        set hqtfDummy(value) {
            this.$store.commit(mut.SET_HQTFDUMMY, value);
        }

        get amplifier() {
            return this.$store.state.symbol.amplifier;
        }

        set amplifier(value) {
            this.$store.dispatch(CHANGE_AMPLIFIER, value);
        }

        get amplifierDescriptor() {
            return this.$store.state.symbol.amplifierDescriptor;
        }

        set amplifierDescriptor(value) {
            this.$store.commit(mut.SET_AMPLIFIER_DESCRIPTOR, value);
        }

        get entity() {
            return this.$store.state.symbol.entity;
        }

        set entity(newValue) {
            this.$store.dispatch(CHANGE_ENTITY, newValue);
        }

        get entityType() {
            return this.$store.state.symbol.entityType;
        }

        set entityType(newValue) {
            this.$store.dispatch(CHANGE_ENTITY_TYPE, newValue);
        }

        set entitySubType(newValue) {
            this.$store.dispatch(CHANGE_ENTITY_SUB_TYPE, newValue);
        }


        get entitySubType() {
            return this.$store.state.symbol.entitySubType;
        }

        get sectorOneModifier() {
            return this.$store.state.symbol.sectorOneModifier;
        }

        set sectorOneModifier(newValue: Modifier) {
            this.$store.commit(mut.SET_MODIFIER_ONE, newValue);
        }

        get sectorTwoModifier() {
            return this.$store.state.symbol.sectorTwoModifier;
        }

        set sectorTwoModifier(newValue: Modifier) {
            this.$store.commit(mut.SET_MODIFIER_TWO, newValue);
        }

        get entityTypes() {
            if (this.entity && this.entity.entityTypes) {
                return this.entity.entityTypes;
            }
            return [];
        }

        get entitySubTypes() {
            if (this.entityType) {
                return this.entityType.entitySubTypes || []
            }
            return []
        }

        get debug() {
            return this.$store.state.debug;
        }

        set debug(value) {
            this.$store.commit(mut.SET_DEBUG_MODE, value);
        }

        get useCivilianFrames() {
            return this.$store.state.useCivilianFrames;
        }

        set useCivilianFrames(value) {
            this.$store.commit(mut.SET_CIVILIAN_FRAMES_MODE, value);
        }

        get alternateAmplifiers() {
            return this.$store.state.alternateAmplifiers;
        }

        set alternateAmplifiers(value) {
            this.$store.commit(mut.SET_ALTERNATE_AMPLIFIERS_MODE, value);
        }

        get symbolSet(): SymbolSet {
            return this.$store.state.symbol.symbolSet;
        }

        set symbolSet(value) {
            this.$store.dispatch(CHANGE_SYMBOL_SET, value);
        }

        get mod1Groups() {
            return groupBy(this.symbolSet.sectorOneModifiers, "category")
        }

        get mod2Groups() {
            return groupBy(this.symbolSet.sectorTwoModifiers, "category")
        }
    }
</script>

<style scoped>

</style>
