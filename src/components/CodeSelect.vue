<template>
  <div
    class="md:grid md:grid-cols-3 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5"
  >
    <label
      :for="_id"
      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
    >
      {{ label }}
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <select
        :id="_id"
        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        v-model="value"
      >
        <option v-for="val in values" :value="val.digits" :key="val.id">
          {{ val.digits }} {{ val.label }}
        </option>
      </select>
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
