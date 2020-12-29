<template>
  <div
    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  >
    <label
      for="country"
      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
    >
      {{ label }}
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <div class="max-w-lg rounded-md shadow-sm sm:max-w-xs">
        <select
          id="country"
          class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          v-model="value"
        >
          <option v-for="val in values" :value="val.digits" :key="val.id">
            {{ val.digits }} {{ val.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeSelect",
  props: { label: String, values: Array, modelValue: String },
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

<style scoped></style>
