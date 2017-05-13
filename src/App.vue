<template>
    <div id="app">

        <h1>{{ msg }}</h1>
        <p>sdfsdf</p>
    </div>
</template>

<script lang="ts">
    import {symbolData} from './jmsml';

    export default {
        data () {
            return {
                msg: symbolData.contexts
            }
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: bold;
        color:red;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
