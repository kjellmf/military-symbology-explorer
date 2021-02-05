<template>
  <div class="p-4 text-sm text-gray-500">
    <div class="flex">
      <div class="flex-auto min-w-0">
        <p class="font-medium text-base text-gray-900 max-w-lg">
          {{ modifier.label }}
        </p>
      </div>
      <div
        class="flex-shrink-0 flex space-x-2 justify-between sm:justify-start -mt-12 mr-2"
      >
        <div class="relative w-32 h-28">
          <img class="absolute" :src="octagonPath" loading="lazy" />
          <img
            class="absolute"
            :src="modifierPath + '/' + modifier.graphic"
            loading="lazy"
          />
        </div>
      </div>
      <p class="flex-shrink-0 ml-2 space-x-0.5 font-medium text-gray-900">
        <span>{{ modifier.digits }}</span>
      </p>
    </div>

    <p v-if="modifier.remarks" class="text-xs text-gray-400 mt-2">
      {{ modifier.remarks }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SymbolModifierRow",
  props: ["modifier", "octagonPath", "modifierPath"],
  data() {
    return { size: "w-20 h-20" };
  },

  computed: {},
};
</script>
