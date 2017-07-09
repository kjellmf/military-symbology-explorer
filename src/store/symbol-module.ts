import {Module}from 'vuex';
import {
    Amplifier, AmplifierDescriptor, Context, Entity, EntitySubType, EntityType, HqtfD, Modifier, SicObject,
    StandardIdentity,
    Status, SYMBOL_DATA,
    SymbolSet
} from "../jmsml/jmsml";

import * as mut from "./mutation-types";
import * as act from "./action-types";

interface EntityDisplay {
    digits: string;
    label: string;
}

export interface SymbolState {
    symbolSet: SymbolSet;
    context: Context | EntityDisplay;
    standardIdentity: StandardIdentity | EntityDisplay;
    status: Status | EntityDisplay;
    hqtfDummy: HqtfD | EntityDisplay;
    amplifier: Amplifier | EntityDisplay;
    amplifierDescriptor: AmplifierDescriptor | EntityDisplay;
    entity: Entity | EntityDisplay;
    entityType: EntityType | EntityDisplay;
    entitySubType: EntitySubType | EntityDisplay;
    sectorOneModifier: Modifier | EntityDisplay;
    sectorTwoModifier: Modifier | EntityDisplay;
}

export const UNDEFINED_ENTITY_DISPLAY = <EntityDisplay>{ digits: "00", label: "UNDEFINED" };
export const UNDEFINED_DISPLAY = <EntityDisplay>{ digits: "0", label: "UNDEFINED" };

export default <Module<SymbolState, any>>{
    state: {
        symbolSet: Object.freeze(SYMBOL_DATA.symbolSets[5]),
        context: UNDEFINED_DISPLAY,
        standardIdentity: UNDEFINED_DISPLAY,
        status: UNDEFINED_DISPLAY,
        hqtfDummy: UNDEFINED_DISPLAY,
        amplifier: UNDEFINED_DISPLAY,
        amplifierDescriptor: UNDEFINED_DISPLAY,
        entity: UNDEFINED_ENTITY_DISPLAY,
        entityType: UNDEFINED_ENTITY_DISPLAY,
        entitySubType: UNDEFINED_ENTITY_DISPLAY,
        sectorOneModifier: UNDEFINED_ENTITY_DISPLAY,
        sectorTwoModifier: UNDEFINED_ENTITY_DISPLAY
    },
    mutations: {
        [mut.SET_SYMBOL_SET](state, value) {
            state.symbolSet = Object.freeze(value);
        },
        [mut.SET_CONTEXT] (state, value){
            state.context = value || UNDEFINED_DISPLAY;
        },
        [mut.SET_STANDARD_IDENTIY] (state, value){
            state.standardIdentity = value || UNDEFINED_DISPLAY;
        },
        [mut.SET_STATUS] (state, value){
            state.status = value || UNDEFINED_DISPLAY;
        },
        [mut.SET_HQTFDUMMY] (state, value) {
            state.hqtfDummy = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [mut.SET_AMPLIFIER] (state, value){
            state.amplifier = value || UNDEFINED_DISPLAY;
        },
        [mut.SET_AMPLIFIER_DESCRIPTOR] (state, value){
            state.amplifierDescriptor = value || UNDEFINED_DISPLAY;
        },
        [mut.SET_ENTITY] (state, value) {
            state.entity = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [mut.SET_ENTITY_TYPE] (state, value) {
            state.entityType = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [mut.SET_ENTITY_SUB_TYPE] (state, value) {
            state.entitySubType = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [mut.SET_MODIFIER_ONE] (state, value){
            state.sectorOneModifier = value || UNDEFINED_ENTITY_DISPLAY;
        },
        [mut.SET_MODIFIER_TWO] (state, value){
            state.sectorTwoModifier = value || UNDEFINED_ENTITY_DISPLAY;
        }
    },
    actions: {
        [act.INITIALIZE] ({ dispatch }) {
            dispatch(act.CHANGE_SYMBOL_SET, Object.freeze(SYMBOL_DATA.symbolSets[5]))
        },
        [act.CHANGE_SYMBOL_SET] ({ commit, dispatch }, newSymbolSet: SymbolSet) {
            commit(mut.SET_SYMBOL_SET, newSymbolSet);
            let entities = newSymbolSet.entities;
            let entity = entities.length > 1 ? newSymbolSet.entities[1] : newSymbolSet.entities[0];
            dispatch(act.CHANGE_ENTITY, entity);
            commit(mut.SET_MODIFIER_ONE, newSymbolSet.sectorOneModifiers[0]);
            commit(mut.SET_MODIFIER_TWO, newSymbolSet.sectorTwoModifiers[0]);

        },

        [act.CHANGE_AMPLIFIER]({ commit, dispatch }, amplifier: Amplifier) {
            commit(mut.SET_AMPLIFIER, amplifier);
            let descriptor = amplifier.descriptors ? amplifier.descriptors[0] : null;
            commit(mut.SET_AMPLIFIER_DESCRIPTOR, descriptor)


        },
        [act.CHANGE_ENTITY]({ commit, dispatch }, newEntity: Entity) {
            commit(mut.SET_ENTITY, newEntity);
            let entityType = newEntity.entityTypes ? newEntity.entityTypes[0] : null;
            dispatch(act.CHANGE_ENTITY_TYPE, entityType || UNDEFINED_ENTITY_DISPLAY);
        },

        [act.CHANGE_ENTITY_TYPE]({ commit, dispatch }, newEntityType: EntityType) {
            commit(mut.SET_ENTITY_TYPE, newEntityType);
            let entitySubType = newEntityType.entitySubTypes ? newEntityType.entitySubTypes[0] : null;
            dispatch(act.CHANGE_ENTITY_SUB_TYPE, entitySubType || UNDEFINED_ENTITY_DISPLAY);

        },
        [act.CHANGE_ENTITY_SUB_TYPE]({ commit, dispatch }, newEntitySubType: EntitySubType) {
            commit(mut.SET_ENTITY_SUB_TYPE, newEntitySubType || UNDEFINED_ENTITY_DISPLAY);
        },

        [act.SET_SYMBOL_FROM_SIC] ({ commit, dispatch }, sic: string) {
            let sicObject = new SicObject(sic);
            commit(mut.SET_CONTEXT, sicObject.context);
            commit(mut.SET_STANDARD_IDENTIY, sicObject.standardIdentity);
            commit(mut.SET_SYMBOL_SET, sicObject.symbolSet);
            commit(mut.SET_STATUS, sicObject.statusObj);
            commit(mut.SET_HQTFDUMMY, sicObject.hqtfdObj);
            commit(mut.SET_AMPLIFIER, sicObject.amplifier);
            commit(mut.SET_AMPLIFIER_DESCRIPTOR, sicObject.amplifierDescriptorObj);
            commit(mut.SET_ENTITY, sicObject.entity);
            commit(mut.SET_ENTITY_TYPE, sicObject.entityType);
            commit(mut.SET_ENTITY_SUB_TYPE, sicObject.entitySubType);
            commit(mut.SET_MODIFIER_ONE, sicObject.modifierOne);
            commit(mut.SET_MODIFIER_TWO, sicObject.modifierTwo);
        }
    },

}
