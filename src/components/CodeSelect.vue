<template>
  <select
    v-model="value"
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
    <option v-for="val in values" :value="val" :key="val.digits">
      {{ val.digits }} {{ val.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useVModel } from "@vueuse/core";
import { IdentifierAttributeGroup } from "../jmsml/types";

export default defineComponent({
  name: "CodeSelect",
  props: {
    values: { type: Array as PropType<IdentifierAttributeGroup[]> },
    modelValue: {
      type: Object as PropType<IdentifierAttributeGroup>,
    },
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const value = useVModel(props, "modelValue", emit);
    return { value };
  },
});
</script>
