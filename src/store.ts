import Vue from 'vue'
import Vuex from 'vuex';
import {symbolData, SymbolSet} from "./jmsml/jmsml";

Vue.use(Vuex);


export interface SymbologyExplorerState {
    debug: boolean;
    useCivilianFrames: boolean;
    symbolSet: SymbolSet;
}

export default new Vuex.Store<SymbologyExplorerState>({
    state: {
        debug: false,
        useCivilianFrames: false,
        symbolSet: symbolData.symbolSets[5],
    },
    mutations: {
        setDebugMode(state, value: boolean) {
            state.debug = value;
        },
        setCivilianFramesMode(state, value) {
            state.useCivilianFrames = value;
        },
        setSymbolSet(state, value) {
            state.symbolSet = value;
        }

    },
    actions: {},
    getters: {}
})
