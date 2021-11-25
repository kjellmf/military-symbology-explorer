<template>
  <div
    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  >
    <label
      :for="_id"
      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
    >
      <slot name="label">{{ label }}</slot>
    </label>

    <div class="mt-1 sm:mt-0 sm:col-span-2 flex">
      <CodeSelect
        :id="_id"
        :values="values"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
      <slot />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import CodeSelect from "./CodeSelect.vue";

export default {
  name: "CodeSelectGroup",
  components: { CodeSelect },
  props: { label: String, values: Array, modelValue: Object, id: String },
  emits: ["focus", "blur", "update:modelValue"],
  computed: {
    _id() {
      return this.id || nanoid();
    },
  },
};
</script>

<style scoped></style>
