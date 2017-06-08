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
                        <!--<symbsetsymb entity="entity" si="SI_UNKNOWN"></symbsetsymb>-->
                    </td>
                    <td>
                        <!--<symbsetsymb entity="entity" si="SI_FRIEND"></symbsetsymb>-->
                    </td>
                    <td>
                        <!--<symbsetsymb entity="entity" si="SI_NEUTRAL"></symbsetsymb>-->
                    </td>
                    <td>
                        <!--<symbsetsymb entity="entity" si="SI_HOSTILE_FAKER"></symbsetsymb>-->
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
                            <!--<symbsetsymb entity="entityType" si="SI_UNKNOWN"></symbsetsymb>-->
                        </td>
                        <td>
                            <!--<symbsetsymb entity="entityType" si="SI_FRIEND"></symbsetsymb>-->
                        </td>
                        <td>
                            <!--<symbsetsymb entity="entityType" si="SI_NEUTRAL"></symbsetsymb>-->
                        </td>
                        <td>
                            <!--<symbsetsymb entity="entityType" si="SI_HOSTILE_FAKER"></symbsetsymb>-->
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
                                <!--<symbsetsymb entity="entitySubType" si="SI_UNKNOWN"></symbsetsymb>-->
                            </td>
                            <td>
                                <!--<symbsetsymb entity="entitySubType" si="SI_FRIEND"></symbsetsymb>-->
                            </td>
                            <td>
                                <!--<symbsetsymb entity="entitySubType" si="SI_NEUTRAL"></symbsetsymb>-->
                            </td>
                            <td>
                                <!--<symbsetsymb entity="entitySubType" si="SI_HOSTILE_FAKER"></symbsetsymb>-->
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
    import {BLANK_PATH, FramesData, SVG_PATH, symbolData} from "../jmsml";
    import {SymbolSet} from "../jmsml/jmsml";

    @Component
    export default class SymbolsetTable extends Vue {
        @Prop()
        symbolset: SymbolSet;
        debug = false;


    }
</script>

<style scoped>

</style>
