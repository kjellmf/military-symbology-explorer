<template>
  <select
    v-model="selectedValue"
    class="
      flex-auto
      min-w-0
      block
      pl-3
      pr-5
      py-2
      text-base
      border-gray-300
      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
      sm:text-sm
      rounded-md
      truncate
    "
  >
    <template v-if="groups">
      <optgroup
        v-for="{ label: groupLabel, items, digits } in groups"
        :label="groupLabel"
        :key="digits"
      >
        <option v-for="val in items" :value="val.digits" :key="val.digits">
          {{ val.digits }} {{ val.label }}
        </option>
      </optgroup>
    </template>
    <template v-else>
      <option v-for="val in values" :value="val.digits" :key="val.digits">
        {{ val.digits }} {{ val.label }}
      </option>
    </template>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useVModel } from "@vueuse/core";
import { IdentifierAttributeGroup } from "../jmsml/types";

export default defineComponent({
  name: "CodeSelect2",
  props: {
    values: { type: Array as PropType<IdentifierAttributeGroup[]> },
    groups: { type: Array },
    modelValue: {
      type: String,
    },
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const selectedValue = useVModel(props, "modelValue", emit);
    return { selectedValue };
  },
});
</script>
