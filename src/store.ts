import Vue from 'vue'
import Vuex from 'vuex';
import {SYMBOL_DATA, SymbolSet} from "./jmsml/jmsml";

Vue.use(Vuex);


export interface SymbologyExplorerState {
    debug: boolean;
    useCivilianFrames: boolean;
    symbolSet: SymbolSet;
    alternateAmplifiers: boolean;
}

export default new Vuex.Store<SymbologyExplorerState>({
    state: {
        debug: false,
        useCivilianFrames: false,
        symbolSet: Object.freeze(SYMBOL_DATA.symbolSets[5]),
        alternateAmplifiers: false
    },
    mutations: {
        setDebugMode(state, value: boolean) {
            state.debug = value;
        },
        setCivilianFramesMode(state, value) {
            state.useCivilianFrames = value;
        },
        setSymbolSet(state, value) {
            state.symbolSet = Object.freeze(value);
        },
        setAlternateAmplifiers(state, value) {
            state.alternateAmplifiers = value;
        }
    },
    actions: {},
    getters: {}
})
