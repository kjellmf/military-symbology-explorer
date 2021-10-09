<template>
  <div
    class="
      sm:grid
      sm:grid-cols-3
      sm:gap-4
      sm:items-start
      sm:border-t
      sm:border-gray-200
      sm:pt-5
    "
  >
    <label
      :for="_id"
      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
    >
      {{ label }}
    </label>

    <div class="mt-1 sm:mt-0 sm:col-span-2 flex">
      <slot :id="_id" />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "LabelGroup",
  props: ["id", "label"],
  computed: {
    _id() {
      return this.id || nanoid();
    },
  },
};
</script>
