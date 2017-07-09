import Vue from 'vue'
import Vuex from 'vuex';
import * as mut from "./mutation-types";
import * as act from "./action-types";
import symbol from "./symbol-module";

Vue.use(Vuex);

export interface SymbologyExplorerState {
    debug: boolean;
    useCivilianFrames: boolean;
    alternateAmplifiers: boolean;
}


export default new Vuex.Store<SymbologyExplorerState>({
    state: {
        debug: false,
        useCivilianFrames: false,
        alternateAmplifiers: false,
    },
    mutations: {
        [mut.SET_DEBUG_MODE] (state, value: boolean) {
            state.debug = value;
        },
        [mut.SET_CIVILIAN_FRAMES_MODE](state, value) {
            state.useCivilianFrames = value;
        },
        [mut.SET_ALTERNATE_AMPLIFIERS_MODE](state, value) {
            state.alternateAmplifiers = value;
        },
    },
    actions: {},
    getters: {},
    modules: { symbol }
})
