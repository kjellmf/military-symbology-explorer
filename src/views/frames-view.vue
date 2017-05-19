<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-2 col-md-2 sidebar">


             <div class="panel panel-default">
                <div class="panel-heading">Context</div>
                <div class="panel-body">
                    <ul class="nav nav-sidebar">
                <li><router-link to="#reality">Reality</router-link></li>
                <li><router-link to="#exercise">Exercise</router-link></li>
                <li><router-link to="#simulation">Simulation</router-link></li>
            </ul>
                </div>
            </div>


        </div>
        <div class="col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 main">
            <h1 id="symboltable" class="page-header">Frames</h1>

            <p>The frame is the border of a symbol. From the shape and color of the frame you can quickly identify the <em>dimension</em> and <em>standard identity</em>.</p>

            <h2 id="reality">Reality</h2>
            <frametable context="REALITY"></frametable>
            <h2 id="exercise">Exercise</h2>
            <frametable context="EXERCISE"></frametable>
            <h2 id="simulation">Simulation</h2>
            <frametable context="SIMULATION"></frametable>

        </div>
    </div>
</div>


</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import FrameTable from '../components/frame-table.vue';

    @Component({components:{'frametable':FrameTable}})
    export default class FramesView extends Vue {
    }
</script>

<style scoped>


</style>
