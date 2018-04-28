<template>
  <v-container fluid>
    <h2>Symbol identification code explorer</h2>
    <v-layout>
      <v-flex xs6 class="pr-4">
        <code-select v-model="context" :values="sd.contexts" label="Context"/>
        <code-select v-model="standardIdentity" :values="sd.standardIdentities" label="Standard identity"/>
        <v-layout align-start>
          <v-flex>
            <code-select :values="symbolSets" v-model="symbolSet" label="Symbol set"/>
          </v-flex>
          <v-flex class="no-grow">
            <v-btn icon to="symbolset">
              <v-icon>reorder</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <code-select :values="sd.statuses" v-model="status" label="Status"></code-select>
        <code-select :values="sd.hqtfDummies" v-model="hqtfDummy" label="HQTFDummy"></code-select>
        <code-select :values="sd.amplifiers" v-model="amplifier" label="Amplifier"></code-select>
        <code-select :values="amplifier.descriptors || []"
                     v-model="amplifierDescriptor"></code-select>
        <code-select :values="symbolSet.entities" v-model="entity" label="Entity"/>
        <code-select :values="entityTypes" v-model="entityType" label="Entity type"/>
        <code-select :values="entitySubTypes" v-model="entitySubType" label="Entity subtype"/>

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


      </v-flex>
      <v-flex xs6>
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
      </v-flex>
    </v-layout>
    <div class="row">
      <div class="col-sm-12">
        <!--<a class="btn btn-primary">Explore current symbol set</a>-->
      </div>
    </div>
  </v-container>
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
import {SymbolData} from "../jmsml";

function groupBy(items, prop) {
  return items.reduce(function (groups, item) {
    let val = item[prop] || "";
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}

@Component({ components: { "code-select": CodeSelect, "code-select-group": CodeSelectGroup } })
export default class ExploreView extends Vue {
  symbolSets: SymbolSet[];
  sd: SymbolData;

  created() {
    this.symbolSets = SYMBOL_DATA.symbolSets;
    this.sd = SYMBOL_DATA;
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

  get useCivilianFrames() {
    return this.$store.state.useCivilianFrames;
  }

  get alternateAmplifiers() {
    return this.$store.state.alternateAmplifiers;
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

  .no-grow {
    flex-grow: 0;
  }
</style>
