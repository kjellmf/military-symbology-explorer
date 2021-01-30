<template>
  <div
    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  >
    <label
      :for="_id"
      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
    >
      {{ label }}
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2 flex">
      <select
        :id="_id"
        class="mt-1 flex-auto min-w-0 pl-3 pr-5 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md truncate"
        v-model="value"
      >
        <option v-for="val in values" :value="val.digits" :key="val.id">
          {{ val.digits }} {{ val.label }}
        </option>
      </select>
      <slot />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "CodeSelect",
  props: { label: String, values: Array, modelValue: String, id: String },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    _id() {
      return this.id || nanoid();
    },
  },
};
</script>

<style scoped></style>
