<template>
    <div v-if="symbolset">
        <table class="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <th class="col-md-1">Entity</th>
                <th class="col-md-2">Entity type</th>
                <th class="col-md-2">Entity subtype</th>
                <th class="col-md-4" colspan="4">Symbols</th>
                <th class="col-md-1">Digits</th>
                <th class="col-md-2">Remarks</th>
            </tr>

            </thead>
            <tbody>
            <template v-for="entity in symbolset.entities">
                <tr>
                    <td>{{entity.label}}
                        <div v-if="debug">
                            <small><strong>ID</strong> <code>{{entity.id}}</code><br>
                                <strong>Icon</strong> <code>{{entity.icon}}</code></small>
                        </div>
                    </td>
                    <td></td>
                    <td></td>

                    <td>
                        <symbsetsymb :sic="getSic('SI_UNKNOWN', entity.digits)"></symbsetsymb>
                    </td>
                    <td>
                        <symbsetsymb :sic="getSic('SI_FRIEND', entity.digits)"></symbsetsymb>
                    </td>
                    <td>
                        <symbsetsymb :sic="getSic('SI_NEUTRAL', entity.digits)"></symbsetsymb>
                    </td>
                    <td>
                        <symbsetsymb :sic="getSic('SI_HOSTILE_FAKER', entity.digits)"></symbsetsymb>
                    </td>
                    <td><b>{{entity.digits}}</b>0000</td>
                    <td>{{entity.remarks}}</td>
                </tr>
                <template v-for="entityType in entity.entityTypes">
                    <tr>
                        <td :title="entity.label">
                            <div v-if="debug">
                                <small><strong>ID</strong> <code>{{entityType.id}}</code><br>
                                    <strong>Icon</strong> <code>{{entityType.icon}}</code></small>
                            </div>
                        </td>
                        <td>{{entityType.label}}</td>
                        <td></td>
                        <td>
                            <symbsetsymb :sic="getSic('SI_UNKNOWN', entity.digits, entityType.digits)"></symbsetsymb>
                        </td>
                        <td>
                            <symbsetsymb :sic="getSic('SI_FRIEND', entity.digits, entityType.digits)"></symbsetsymb>
                        </td>
                        <td>
                            <symbsetsymb :sic="getSic('SI_NEUTRAL', entity.digits, entityType.digits)"></symbsetsymb>
                        </td>
                        <td>
                            <symbsetsymb
                                :sic="getSic('SI_HOSTILE_FAKER', entity.digits, entityType.digits)"></symbsetsymb>
                        </td>
                        <td>{{entity.digits}}<b>{{entityType.digits}}</b>00</td>
                        <td>{{entityType.remarks}}</td>
                    </tr>
                    <template v-for="entitySubType in entityType.entitySubTypes">
                        <tr>
                            <td :title="entity.label">
                                <div v-if="debug">
                                    <small><strong>ID</strong> <code>{{entitySubType.id}}</code><br>
                                        <strong>Icon</strong> <code>{{entitySubType.icon}}</code></small>
                                </div>
                            </td>
                            <td :title="entityType.label"></td>
                            <td>{{entitySubType.label}}</td>
                            <td>
                                <symbsetsymb
                                    :sic="getSic('SI_UNKNOWN', entity.digits, entityType.digits, entitySubType.digits)"></symbsetsymb>
                            </td>
                            <td>
                                <symbsetsymb
                                    :sic="getSic('SI_FRIEND', entity.digits, entityType.digits, entitySubType.digits)"></symbsetsymb>
                            </td>
                            <td>
                                <symbsetsymb
                                    :sic="getSic('SI_NEUTRAL', entity.digits, entityType.digits, entitySubType.digits)"></symbsetsymb>
                            </td>
                            <td>
                                <symbsetsymb
                                    :sic="getSic('SI_HOSTILE_FAKER', entity.digits, entityType.digits, entitySubType.digits)"></symbsetsymb>
                            </td>
                            <td>{{entity.digits}}{{entityType.digits}}<b>{{entitySubType.digits}}</b></td>
                            <td>{{entitySubType.remarks}}</td>
                        </tr>
                    </template>
                </template>
            </template>
            </tbody>
        </table>

        <div v-if="symbolset.specialEntitySubTypes">
            <h2 id="specialsubtypes">Special entity subtypes</h2>

            <p>Some entity type land unit icons may use the entity subtypes listed below:</p>
            <table class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th class="col-md-1">Entity</th>
                    <th class="col-md-2">Entity type</th>
                    <th class="col-md-2">Entity subtype</th>
                    <th class="col-md-4" colspan="4">Symbols</th>
                    <th class="col-md-1">Digits</th>
                    <th class="col-md-2">Remarks</th>
                </tr>

                </thead>
                <tbody>

                <tr v-for="entitySubType in symbolset.specialEntitySubTypes">
                    <td></td>
                    <td></td>
                    <td>{{entitySubType.label}}</td>
                    <td>
                        <symbsetsymb :sic="getSic('SI_UNKNOWN', '11', '10', entitySubType.digits)"></symbsetsymb>
                    </td>
                    <td>
                        <symbsetsymb :sic="getSic('SI_FRIEND', '11', '10', entitySubType.digits)"></symbsetsymb>
                    </td>
                    <td>
                        <symbsetsymb :sic="getSic('SI_NEUTRAL', '00', '00', entitySubType.digits)"></symbsetsymb>
                    </td>
                    <td>
                        <symbsetsymb :sic="getSic('SI_HOSTILE_FAKER', '00', '00', entitySubType.digits)"></symbsetsymb>
                    </td>
                    <td>xxxx<b>{{entitySubType.digits}}</b></td>
                    <td>{{entitySubType.remarks}}</td>
                </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import {BLANK_PATH, FramesData, SVG_PATH, SYMBOL_DATA} from "../jmsml";
    import {SID_MAP, SymbolSet} from "../jmsml/jmsml";
    import Symbsetsymb from "./symbsetsymb.vue";

    @Component({ components: { 'symbsetsymb': Symbsetsymb } })
    export default class SymbolsetTable extends Vue {
        @Prop()
        symbolset: SymbolSet;

        get debug() {
            return this.$store.state.debug;
        }

        getSic(sid, entityDigits, entityType, entitySubTypeDigits) {
            return `100${SID_MAP[sid]}${this.symbolset.digits}0000${entityDigits || '00'}${entityType || '00'}${entitySubTypeDigits || '00'}0000`;
        }


    }
</script>

<style scoped>

</style>
