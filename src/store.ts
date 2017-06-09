import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);


export interface SymbologyExplorerState {
    debug: boolean;
    useCivilianFrames: boolean;
}

export default new Vuex.Store<SymbologyExplorerState>({
    state: {
        debug: false,
        useCivilianFrames: false,
    },
    mutations: {
        setDebugMode(state, value: boolean) {
            state.debug = value;
        },
        setCivilianFramesMode(state, value) {
            state.useCivilianFrames = value;
        }

    },
    actions: {},
    getters: {}
})
