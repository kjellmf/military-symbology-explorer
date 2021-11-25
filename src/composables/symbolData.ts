import { MaybeRef } from "@vueuse/core";
import { parseSic } from "../jmsml/types";
import { computed, ref, unref } from "vue";
import {
  amplifiers,
  CIVILIAN_SYMBOLSET_VALUE,
  EQUIPMENT_SYMBOLSET_VALUE,
  SUBSURFACE_SYMBOLSET_VALUE,
  SURFACE_SYMBOLSET_VALUE,
  UNIT_SYMBOLSET_VALUE,
} from "../jmsml";
import { symbolSets } from "../jmsml/symbolsets";

const UNSPECIFIED_TWO_DIGITS = {
  digits: "00",
  label: "Unspecified",
  id: "UNSPECIFIED_2_MOD",
};

export function useSymbolItems(sidc: MaybeRef<string>) {
  const {
    context,
    standardIdentity,
    symbolSet,
    status,
    hqtfDummy,
    echelonMobility,
    entity,
    entityType,
    entitySubType,
    mod1,
    mod2,
    cSidc,
  } = useSymbolValues(sidc);

  const echelonMobilityItems = computed(() => {
    let includedValues = ["0"];
    switch (symbolSet.value) {
      case UNIT_SYMBOLSET_VALUE:
      case CIVILIAN_SYMBOLSET_VALUE:
        includedValues = ["0", "1", "2"];
        break;
      case EQUIPMENT_SYMBOLSET_VALUE:
        includedValues = ["0", "3", "4", "5"];
        break;
      case SURFACE_SYMBOLSET_VALUE:
      case SUBSURFACE_SYMBOLSET_VALUE:
        includedValues = ["0", "6"];
        break;
    }
    return amplifiers
      .filter((a) => includedValues.includes(a.digits))
      .map((a) => {
        const { descriptors, digits, ...rest } = a;
        const items = descriptors.map((d) => ({
          ...d,
          digits: digits + d.digits,
        }));
        return { digits, ...rest, items };
      });
  });

  const entityItems = computed(() => {
    const cSymbolSet = symbolSets.find((s) => s.digits === symbolSet.value);
    return (cSymbolSet && cSymbolSet.entities) || [];
  });

  const entityTypeItems = computed(() => {
    const cEntityType = entityItems.value.find(
      (e) => e.digits === entity.value
    );
    return (
      (cEntityType && cEntityType.entityTypes) || [
        {
          digits: "00",
          label: "Unspecified",
          id: "UNSPECIFIED",
          icon: "NA",
          geometryType: "NA",
          entitySubTypes: [],
        },
      ]
    );
  });

  const entitySubTypeItems = computed(() => {
    const cEntitySubType = entityTypeItems.value.find(
      (e) => e.digits === entityType.value
    );
    return (cEntitySubType && cEntitySubType.entitySubTypes) || [];
  });

  //

  return {
    context,
    standardIdentity,
    symbolSet,
    status,
    hqtfDummy,
    echelonMobility,
    entity,
    entityType,
    entitySubType,
    mod1,
    mod2,
    cSidc,
    echelonMobilityItems,
    entityItems,
    entityTypeItems,
    entitySubTypeItems,
  };
}

export function useSymbolValues(sidc: MaybeRef<string>) {
  const p = parseSic(unref(sidc));
  const context = ref(p.context);
  const standardIdentity = ref(p.standardIdentity);
  const symbolSet = ref(p.symbolSet);
  const status = ref(p.status);
  const hqtfDummy = ref(p.hqtfd);
  const echelonMobility = ref(p.echelonMobility);
  const entity = ref(p.entity);
  const entityType = ref(p.entityType);
  const entitySubType = ref(p.entitySubType);
  const mod1 = ref(p.modifierOne);
  const mod2 = ref(p.modifierTwo);

  const cSidc = computed(() => {
    return (
      "10" +
      context.value +
      standardIdentity.value +
      symbolSet.value +
      status.value +
      hqtfDummy.value +
      echelonMobility.value +
      entity.value +
      entityType.value +
      entitySubType.value +
      mod1.value +
      mod2.value
    );
  });
  return {
    context,
    standardIdentity,
    symbolSet,
    status,
    hqtfDummy,
    echelonMobility,
    entity,
    entityType,
    entitySubType,
    mod1,
    mod2,
    cSidc,
  };
}
