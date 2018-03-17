<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12>
                <v-jumbotron color="grey lighten-2" >
                    <div class="px-3 py-3">
                        <h3 class="display-3">Joint military symbology explorer</h3>
                        <span class="subheading">An experimental MIL-STD-2525D/APP6X symbology explorer based on the <a
                            href="https://github.com/Esri/joint-military-symbology-xml">Joint Military Symbology Markup Language (JMSML)</a>
                project.</span>
                        <v-divider class="my-3"></v-divider>
                        <div>
                            <router-link to="/explore/10131000001211050000">
                                <milsymbol sic="10131000001211050000"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10233000001201000000">
                                <milsymbol sic="10233000001201000000"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10051000001211040000">
                                <milsymbol sic="10051000001211040000"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10031030141211040000">
                                <milsymbol sic="10031030141211040000"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10031500321112030000">
                                <milsymbol sic="10031500321112030000"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10031000161211002019">
                                <milsymbol sic="10031000161211002019"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10033000001500000000">
                                <milsymbol sic="10033000001500000000"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10031000001110980000">
                                <milsymbol sic="10031000001110980000"></milsymbol>
                            </router-link>
                            <router-link to="/explore/10031002181211020000">
                                <milsymbol sic="10031002181211020000"></milsymbol>
                            </router-link>
                        </div>
                    </div>
                </v-jumbotron>
            </v-flex>

            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h3 class="headline ">Explore symbols</h3>
                    </v-card-title>
                    <v-card-text>Learn symbol identification codes</v-card-text>
                    <v-card-actions>
                        <v-btn flat color="orange" to="explore/">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h3 class="headline ">Frames</h3>
                    </v-card-title>
                    <v-card-text>See dimension and standard identities</v-card-text>
                    <v-card-actions>
                        <v-btn flat color="orange" to="frames/">Show frames</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h3 class="headline ">Search</h3>
                    </v-card-title>
                    <v-card-text>Search for symbols and modifers</v-card-text>
                    <v-card-actions>
                        <v-btn flat color="orange" to="search/">Search</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h3 class="headline ">Browse symbol sets</h3>
                    </v-card-title>
                    <v-card-text>See available symbols</v-card-text>
                    <v-card-actions>
                        <v-btn flat color="orange" to="symbolset/">Browse</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class MainView extends Vue {
}
</script>

<style scoped>


</style>
