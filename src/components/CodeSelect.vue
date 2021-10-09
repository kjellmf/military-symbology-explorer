<template>
  <select
    v-model="value"
    class="flex-auto min-w-0 block pl-3 pr-5 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md truncate"
  >
    <option v-for="val in values" :value="val" :key="val.digits">
      {{ val.digits }} {{ val.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CodeSelect",
  props: { values: Array, modelValue: Object },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
