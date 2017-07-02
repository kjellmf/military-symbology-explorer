import Vue from 'vue'
import Vuex from 'vuex';
import {Entity, EntitySubType, EntityType, Modifier, SYMBOL_DATA, SymbolSet} from "../jmsml/jmsml";
import {
    SET_ALTERNATE_AMPLIFIERS_MODE, SET_CIVILIAN_FRAMES_MODE, SET_DEBUG_MODE, SET_ENTITY, SET_ENTITY_SUB_TYPE,
    SET_ENTITY_TYPE, SET_MODIFIER_ONE, SET_MODIFIER_TWO,
    SET_SYMBOL_SET
} from "./mutation-types";
import {CHANGE_ENTITY, CHANGE_ENTITY_SUB_TYPE, CHANGE_ENTITY_TYPE, CHANGE_SYMBOL_SET, INITIALIZE} from "./action-types";

Vue.use(Vuex);

interface EntityDisplay {
    digits: string;
    label: string;
}

export interface SymbologyExplorerState {
    debug: boolean;
    useCivilianFrames: boolean;
    symbolSet: SymbolSet;
    alternateAmplifiers: boolean;
    entity: Entity | EntityDisplay;
    entityType: EntityType | EntityDisplay;
    entitySubType: EntitySubType | EntityDisplay;
    sectorOneModifier: Modifier | EntityDisplay;
    sectorTwoModifier: Modifier | EntityDisplay;
}

export const UNDEFINED_ENTITY_DISPLAY = <EntityDisplay>{ digits: "00", label: "UNDEFINED" };

export default new Vuex.Store<SymbologyExplorerState>({
    state: {
        debug: false,
        useCivilianFrames: false,
        symbolSet: Object.freeze(SYMBOL_DATA.symbolSets[5]),
        alternateAmplifiers: false,
        entity: UNDEFINED_ENTITY_DISPLAY,
        entityType: UNDEFINED_ENTITY_DISPLAY,
        entitySubType: UNDEFINED_ENTITY_DISPLAY,
        sectorOneModifier: UNDEFINED_ENTITY_DISPLAY,
        sectorTwoModifier: UNDEFINED_ENTITY_DISPLAY

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
        },
        [SET_ENTITY] (state, value) {
            state.entity = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [SET_ENTITY_TYPE] (state, value) {
            state.entityType = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [SET_ENTITY_SUB_TYPE] (state, value) {
            state.entitySubType = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [SET_MODIFIER_ONE] (state, value){
            state.sectorOneModifier = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [SET_MODIFIER_TWO] (state, value){
            state.sectorTwoModifier = value || UNDEFINED_ENTITY_DISPLAY;
        }
    },
    actions: {
        [INITIALIZE] ({dispatch}) {
          dispatch(CHANGE_SYMBOL_SET, Object.freeze(SYMBOL_DATA.symbolSets[5]))
        },
        [CHANGE_SYMBOL_SET] ({ commit, dispatch }, newSymbolSet: SymbolSet) {
            commit(SET_SYMBOL_SET, newSymbolSet);
            let entities = newSymbolSet.entities;
            let entity = entities.length > 1 ? newSymbolSet.entities[1] : newSymbolSet.entities[0];
            dispatch(CHANGE_ENTITY, entity);
            commit(SET_MODIFIER_ONE, newSymbolSet.sectorOneModifiers[0]);
            commit(SET_MODIFIER_TWO, newSymbolSet.sectorTwoModifiers[0]);

        },
        [CHANGE_ENTITY]({ commit, dispatch }, newEntity: Entity) {
            commit(SET_ENTITY, newEntity);
            let entityType = newEntity.entityTypes ? newEntity.entityTypes[0] : null;
            dispatch(CHANGE_ENTITY_TYPE, entityType || UNDEFINED_ENTITY_DISPLAY);
        },

        [CHANGE_ENTITY_TYPE]({ commit, dispatch }, newEntityType: EntityType) {
            commit(SET_ENTITY_TYPE, newEntityType);
            let entitySubType = newEntityType.entitySubTypes ? newEntityType.entitySubTypes[0] : null;
            dispatch(CHANGE_ENTITY_SUB_TYPE, entitySubType || UNDEFINED_ENTITY_DISPLAY);

        },
        [CHANGE_ENTITY_SUB_TYPE]({ commit, dispatch }, newEntitySubType: EntitySubType) {
            commit(SET_ENTITY_SUB_TYPE, newEntitySubType || UNDEFINED_ENTITY_DISPLAY);
        }
    },
    getters: {}
})
