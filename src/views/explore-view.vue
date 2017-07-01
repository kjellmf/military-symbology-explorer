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
                                    <code-select :values="amplifier? amplifier.descriptors : []"
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
                            <td colspan="2" :title="dv(entity).label">
                                <table>
                                    <tr>
                                        <td>{{dv(entity).digits[0]}}</td>
                                        <td>{{dv(entity).digits[1]}}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="dv(entityType).label">
                                <table>
                                    <tr>
                                        <td>{{dv(entityType).digits[0]}}</td>
                                        <td>{{dv(entityType).digits[1]}}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="dv(entitySubType).label">
                                <table>
                                    <tr>
                                        <td>{{dv(entitySubType).digits[0]}}</td>
                                        <td>{{dv(entitySubType).digits[1]}}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="dv(sectorOneModifier).label">
                                <table>
                                    <tr>
                                        <td>{{dv(sectorOneModifier).digits[0] }}</td>
                                        <td>{{dv(sectorOneModifier).digits[1] }}</td>
                                    </tr>
                                </table>
                            </td>
                            <td colspan="2" :title="dv(sectorTwoModifier).label">
                                <table>
                                    <tr>
                                        <td>{{dv(sectorTwoModifier).digits[0]}}</td>
                                        <td>{{dv(sectorTwoModifier).digits[1]}}</td>
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
    import {SYMBOL_DATA, Context, StandardIdentity, SymbolSet} from "../jmsml/jmsml";
    import CodeSelect from "../components/code-select.vue";
    import CodeSelectGroup from "../components/code-select-group.vue";
    import {
        SET_ALTERNATE_AMPLIFIERS_MODE,
        SET_CIVILIAN_FRAMES_MODE,
        SET_DEBUG_MODE,
        SET_SYMBOL_SET
    } from "../store/mutation-types";

    interface SymbSymb {
        context: Context;
        standardIdentity: StandardIdentity;
    }

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
        context = SYMBOL_DATA.contexts[0];
        standardIdentity = SYMBOL_DATA.standardIdentities[3];
        status = SYMBOL_DATA.statuses[0];
        hqtfDummy = SYMBOL_DATA.hqtfDummies[0];
        amplifier = SYMBOL_DATA.amplifiers[0] || null;
        amplifierDescriptor = this.amplifier.descriptors[0] || null;
        entity = this.symbolSet.entities[1];
        entityType = this.entity.entityTypes[0];
        entitySubType = this.entityType.entitySubTypes[0] ||  {"label": "Undefined", "digits": "00"};
        sectorOneModifier = this.symbolSet.sectorOneModifiers[0] || null;
        sectorTwoModifier = this.symbolSet.sectorTwoModifiers[0] || null;

        @Watch("amplifier")
        onAmplifierChange(newValue) {
            this.amplifierDescriptor = this.amplifier.descriptors[0];
        }

        created() {
            this["symbolSets"] = SYMBOL_DATA.symbolSets;
            this["sd"] = SYMBOL_DATA;
        }

        // ugly hack
        dv(value) {
            if (value) {
                return value
            } else {
                return  {"label": "Undefined", "digits": "00"}
            }
        }

        @Watch("entity")
        onEntityChange(newValue) {
            if (newValue) {
                this.entityType = this.entity.entityTypes[0];
            } else {
                this.entityType = null;
            }
        }

        @Watch("entityType")
        onEntityTypeChange(newValue) {
            if (!newValue) {
                this.entitySubType = null;
                return;
            }
            let subTypes = this.entityType.entitySubTypes;
            if (subTypes && subTypes.length) {
                this.entitySubType = subTypes[0];
            } else {
                this.entitySubType = null;
            }
        }

        @Watch("symbolSet")
        onSymbolSetChange(newValue: SymbolSet) {
            this.entity = newValue.entities.length ? newValue.entities[1] : newValue.entities[0];
            this.sectorOneModifier = newValue.sectorOneModifiers[0];
            this.sectorTwoModifier = newValue.sectorTwoModifiers[0];
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
            this.$store.commit(SET_DEBUG_MODE, value);
        }

        get useCivilianFrames() {
            return this.$store.state.useCivilianFrames;
        }

        set useCivilianFrames(value) {
            this.$store.commit(SET_CIVILIAN_FRAMES_MODE, value);
        }

        get alternateAmplifiers() {
            return this.$store.state.alternateAmplifiers;
        }

        set alternateAmplifiers(value) {
            this.$store.commit(SET_ALTERNATE_AMPLIFIERS_MODE, value);
        }

        get symbolSet(): SymbolSet {
            return this.$store.state.symbolSet;
        }

        set symbolSet(value) {
            this.$store.commit(SET_SYMBOL_SET, value);
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
