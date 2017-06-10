<template>
    <div v-if="symbolset">
        <table class="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <th class="col-md-2">Entity</th>
                <th class="col-md-2">Entity type</th>
                <th class="col-md-2">Entity subtype</th>
                <th class="col-md-4">Symbols</th>
                <th class="col-md-1">Digits</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="entity in symbolset.entities">
                <tr>
                    <td>{{entity.label}}
                        <div v-if="debug">
                            <small><strong>ID</strong> <code>{{entity.id}}</code><br>
                                <strong>Icon</strong> <code>{{entity.icon}}</code><br>
                                <strong>GeometryType</strong> <code>{{entity.geometryType}}</code>
                            </small>
                        </div>
                    </td>
                    <td></td>
                    <td></td>

                    <td>
                        <controlmeasure :sic="getSic('SI_FRIEND', entity.digits)"></controlmeasure>
                    </td>

                    <td><b>{{entity.digits}}</b>0000</td>
                </tr>
                <template v-for="entityType in entity.entityTypes">
                    <tr>
                        <td :title="entity.label">
                            <div v-if="debug">
                                <small>
                                    <strong>ID</strong> <code>{{entityType.id}}</code><br>
                                    <strong>Icon</strong> <code>{{entityType.icon}}</code><br>
                                    <strong>GeometryType</strong> <code>{{entityType.geometryType}}</code>
                                </small>
                            </div>
                        </td>
                        <td>{{entityType.label}}</td>
                        <td></td>
                        <td>
                            <controlmeasure
                                :sic="getSic('SI_FRIEND', entity.digits, entityType.digits)"></controlmeasure>
                        </td>
                        <td>{{entity.digits}}<b>{{entityType.digits}}</b>00</td>
                    </tr>
                    <template v-for="entitySubType in entityType.entitySubTypes">
                        <tr>
                            <td :title="entity.label">
                                <div v-if="debug">
                                    <small>
                                        <strong>ID</strong> <code>{{entitySubType.id}}</code><br>
                                        <strong>Icon</strong> <code>{{entitySubType.icon}}</code><br>
                                        <strong>GeometryType</strong> <code>{{entitySubType.geometryType}}</code>
                                    </small>
                                </div>
                            </td>
                            <td :title="entityType.label"></td>
                            <td>{{entitySubType.label}}</td>
                            <td>
                                <controlmeasure
                                    :sic="getSic('SI_FRIEND', entity.digits, entityType.digits, entitySubType.digits)"></controlmeasure>
                            </td>
                            <td>{{entity.digits}}{{entityType.digits}}<b>{{entitySubType.digits}}</b></td>
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
    import ControlMeasure from "./controlmeasure.vue";

    @Component({ components: { 'controlmeasure': ControlMeasure } })
    export default class ControlMeasureTable extends Vue {
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
