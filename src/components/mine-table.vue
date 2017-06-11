<template>
    <div v-if="symbolset">
        <table class="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <th class="col-md-1">Entity</th>
                <th class="col-md-2">Entity type</th>
                <th class="col-md-2">Entity subtype</th>
                <th class="col-md-2">Medal icon</th>
                <th class="col-md-2">Alternative icon</th>
                <th class="col-md-1">Digits</th>
                <th class="col-md-2">Remarks</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="entity in symbolset.entities">
                <tr>
                    <td>{{entity.label}}</td>

                    <td></td>
                    <td></td>
                    <td>
                        <milsymbol :sic="getSic(entity.digits)"
                                   :frame="false"></milsymbol>
                    </td>
                    <td>
                        <milsymbol :sic="getSic(entity.digits)" :alternative="true"
                                   :frame="false"></milsymbol>
                    </td>
                    <td><b>{{entity.digits}}</b>0000</td>
                    <td>{{entity.remarks}}</td>
                </tr>
                <template v-for="entityType in entity.entityTypes">
                    <tr>
                        <td></td>
                        <td>
                            {{entityType.label}}
                        </td>
                        <td></td>
                        <td>
                            <milsymbol
                                :sic="getSic(entity.digits, entityType.digits)"
                                :frame="false"></milsymbol>
                        </td>
                        <td>
                            <milsymbol
                                :sic="getSic(entity.digits, entityType.digits)"
                                :alternative="true" :frame="false"></milsymbol>
                        </td>
                        <td>{{entity.digits}}<b>{{entityType.digits}}</b>00</td>
                        <td>{{entityType.remarks}}</td>
                    </tr>

                    <template v-for="entitySubType in entityType.entitySubTypes">
                        <tr>
                            <td></td>

                            <td></td>
                            <td>
                                {{entitySubType.label}}

                            </td>
                            <td>
                                <milsymbol
                                    :sic="getSic(entity.digits, entityType.digits, entitySubType.digits)"
                                    :frame="false"></milsymbol>
                            </td>
                            <td>
                                <milsymbol
                                    :sic="getSic(entity.digits, entityType.digits, entitySubType.digits)"
                                    :alternative="true" :frame="false"></milsymbol>
                            </td>
                            <td>{{entity.digits}}{{entityType.digits}}<b>{{entitySubType.digits}}</b></td>
                            <td>{{entitySubType.remarks}}</td>
                        </tr>
                    </template>
                </template>
            </template>
            </tbody>

        </table>


    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {BLANK_PATH, FramesData, SVG_PATH, SYMBOL_DATA} from "../jmsml";
    import {SID_MAP, SymbolSet} from "../jmsml/jmsml";
    import Symbsetsymb from "./symbsetsymb.vue";

    @Component({})
    export default class MineTable extends Vue {
        @Prop()
        symbolset: SymbolSet;

        get debug() {
            return this.$store.state.debug;
        }

        getSic(entityDigits, entityType, entitySubTypeDigits) {
            return `1003${this.symbolset.digits}0000${entityDigits || '00'}${entityType || '00'}${entitySubTypeDigits || '00'}0000`;
        }
    }
</script>

<style scoped>

</style>
