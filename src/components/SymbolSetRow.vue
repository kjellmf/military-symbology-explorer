<template>
  <div class="p-4 text-sm text-gray-500 relative">
    <div class="flex flex-wrap lg:flex-nowrap">
      <div class="flex-1 min-w-0 mr-2">
        <p v-if="entitySubType" class="sm:max-w-sm lg:max-w-lg">
          {{ entityType.label }}
        </p>
        <p
          class="
            font-medium
            text-base text-gray-900
            max-w-xs
            sm:max-w-sm
            lg:max-w-lg
          "
        >
          {{ cEntity.label }}
        </p>
      </div>
      <div
        v-if="entityPath"
        class="
          lg:flex-shrink-0
          flex
          lg:space-x-2
          justify-between
          lg:justify-start
          w-full
          lg:w-auto
          order-last
          lg:order-none
        "
        :class="{ '-mt-4': geometry === 'POINT' }"
      >
        <div class="relative w-20 h-20 sm:w-24 sm:h-24">
          <img class="absolute" :src="framePaths.unknown" loading="lazy" />
          <BoundingOctagon
            v-if="debug"
            class="absolute text-blue-500 stroke-2"
          />
          <img class="absolute" :src="entityPath.unknown" loading="lazy" />
        </div>
        <div class="relative w-20 h-20 sm:w-24 sm:h-24">
          <img class="absolute" :src="framePaths.friend" loading="lazy" />
          <BoundingOctagon
            v-if="debug"
            class="absolute text-blue-500 stroke-2"
          />
          <img class="absolute" :src="entityPath.friend" loading="lazy" />
        </div>
        <div class="relative w-20 h-20 sm:w-24 sm:h-24">
          <img class="absolute" :src="framePaths.neutral" loading="lazy" />
          <BoundingOctagon
            v-if="debug"
            class="absolute text-blue-500 stroke-2"
          />
          <img class="absolute" :src="entityPath.neutral" loading="lazy" />
        </div>
        <div class="relative w-20 h-20 sm:w-24 sm:h-24">
          <img class="absolute" :src="framePaths.hostile" loading="lazy" />
          <BoundingOctagon
            v-if="debug"
            class="absolute text-blue-900 stroke-2"
          />
          <img class="absolute" :src="entityPath.hostile" loading="lazy" />
        </div>
      </div>
      <p class="flex-shrink-0 text-gray-500 space-x-1">
        <span :class="eClass">{{ eCode }}</span>
        <span :class="etClass">{{ etCode }}</span>
        <span :class="etsClass">{{ etsCode }}</span>
      </p>
    </div>

    <p v-if="cEntity.remarks" class="text-xs text-gray-400 mt-2">
      {{ cEntity.remarks }}
    </p>
    <p v-if="debug && cEntity.icon" class="mt-2">
      <span
        class="
          inline-flex
          items-center
          px-2.5
          py-0.5
          rounded-full
          text-xs
          font-medium
          bg-yellow-100
          text-yellow-800
        "
      >
        icon: {{ cEntity.icon }}
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import BoundingOctagon from "./BoundingOctagon.vue";
import { defineComponent } from "vue";
import { useEntityPathData } from "../composables";

export default defineComponent({
  name: "SymbolSetRow",
  components: { BoundingOctagon },
  props: [
    "entity",
    "entityType",
    "entitySubType",
    "entitiesPath",
    "framePaths",
    "debug",
    "geometry",
  ],

  setup(props) {
    const {
      cEntity,
      eCode,
      etCode,
      etsCode,
      codes,
      eClass,
      etClass,
      etsClass,
      entityPath,
    } = useEntityPathData(props);

    return {
      cEntity,
      eCode,
      etCode,
      etsCode,
      codes,
      eClass,
      etClass,
      etsClass,
      entityPath,
      size: "w-20 h-20",
    };
  },

  computed: {},
});
</script>
