import Vue from 'vue'
import Vuex from 'vuex';
import {SYMBOL_DATA, SymbolSet} from "../jmsml/jmsml";
import {
    SET_ALTERNATE_AMPLIFIERS_MODE, SET_CIVILIAN_FRAMES_MODE, SET_DEBUG_MODE,
    SET_SYMBOL_SET
} from "./mutation-types";

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
        [SET_DEBUG_MODE] (state, value: boolean) {
            state.debug = value;
        },
        [SET_CIVILIAN_FRAMES_MODE](state, value) {
            state.useCivilianFrames = value;
        },
        [SET_SYMBOL_SET](state, value) {
            state.symbolSet = Object.freeze(value);
        },
        [SET_ALTERNATE_AMPLIFIERS_MODE](state, value) {
            state.alternateAmplifiers = value;
        }
    },
    actions: {},
    getters: {}
})
