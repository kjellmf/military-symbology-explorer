<template>
<div class="container-fluid">
    <div class="row">

        <div class="col-sm-12 col-md-12">
        <header class="jumbotron hero-spacer">
                <h1>Joint military symbology explorer</h1>

            <p>An experimental MIL-STD-2525D/APP6X symbology explorer based on the <a
                href="https://github.com/Esri/joint-military-symbology-xml">Joint Military Symbology Markup Language (JMSML)</a>
                project.</p>

                <div>
                    <router-link to="/explore/10131000001211050000"><milsymbol sic="10131000001211050000"></milsymbol></router-link>
                    <router-link to="/explore/10233000001201000000"><milsymbol sic="10233000001201000000"></milsymbol></router-link>
                    <router-link to="/explore/10051000001211040000"><milsymbol sic="10051000001211040000"></milsymbol></router-link>
                    <router-link to="/explore/10031030141211040000"><milsymbol sic="10031030141211040000"></milsymbol></router-link>
                    <router-link to="/explore/10031500321112030000"><milsymbol sic="10031500321112030000"></milsymbol></router-link>
                    <router-link to="/explore/10031000161211002019"><milsymbol sic="10031000161211002019"></milsymbol></router-link>
                    <router-link to="/explore/10033000001500000000"><milsymbol sic="10033000001500000000"></milsymbol></router-link>
                    <router-link to="/explore/10031000001110980000"><milsymbol sic="10031000001110980000"></milsymbol></router-link>
                    <router-link to="/explore/10031002181211020000"><milsymbol sic="10031002181211020000"></milsymbol></router-link>
                </div>
                <p>&nbsp;</p>
            </header>
    </div>
    </div>
     <!-- Page Features -->
        <div class="row text-center">

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">

                    <div class="caption ">
                        <h3>Explore symbol</h3>
                        <p>Learn symbol identification codes</p>
                        <p>
                            <router-link to="explore/" class="btn btn-primary">Explore</router-link>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <div class="caption">
                        <h3>Browse symbol set</h3>
                        <p>See available symbols</p>
                        <p>
                            <router-link to="symbolset" class="btn btn-primary">Browse</router-link>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <div class="caption">
                        <h3>Search</h3>
                        <p>Search for symbols and modifiers</p>
                        <p>
                            <router-link to="search" class="btn btn-primary">Search</router-link>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <div class="caption">
                        <h3>Frames</h3>
                        <p>See dimension and standard identity</p>
                        <p>
                            <router-link to="frames" class="btn btn-primary">Show frames</router-link>
                        </p>
                    </div>
                </div>
            </div>


        </div>
        <!-- /.row -->


</div>

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
