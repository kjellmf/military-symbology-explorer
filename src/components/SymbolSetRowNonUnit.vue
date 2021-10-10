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
        class="flex lg:space-x-2 justify-end w-full lg:w-auto"
        :class="{ '-mt-4': geometry === 'POINT' }"
      >
        <div class="relative w-40 h-40 sm:w-48 sm:h-48">
          <img class="absolute" :src="entityPath.friend" loading="lazy" />
        </div>
      </div>
      <p class="flex-shrink-0 text-gray-500 space-x-0.5">
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

<script>
export default {
  name: "SymbolSetRowNonUnit",
  components: {},
  props: [
    "entity",
    "entityType",
    "entitySubType",
    "entitiesPath",
    "framePaths",
    "debug",
    "geometry",
  ],
  data() {
    return { size: "w-20 h-20" };
  },

  computed: {
    cEntity() {
      return this.entitySubType || this.entityType || this.entity;
    },
    eCode() {
      return this.entity.digits || "00";
    },

    etCode() {
      return (this.entityType && this.entityType.digits) || "00";
    },

    etsCode() {
      return (this.entitySubType && this.entitySubType.digits) || "00";
    },

    codes() {
      const { digits: eCode = "00" } = this.entity;
      const { digits: etCode = "00" } = this.entityType || {};
      const { digits: etsCode = "00" } = this.entitySubType || {};
      return `${eCode}${etCode}${etsCode}`;
    },

    eClass() {
      return this.entityType || this.entitySubType
        ? undefined
        : "font-medium text-gray-900";
    },

    etClass() {
      return this.entityType && !this.entitySubType
        ? "font-bold text-gray-700"
        : undefined;
    },

    etsClass() {
      return this.entitySubType ? "font-medium text-gray-900" : undefined;
    },

    unknowEntityPath() {
      const { graphic, cloverGraphic } = this.cEntity;
      return `${this.entitiesPath}/${graphic || cloverGraphic}`;
    },

    entityPath() {
      const {
        graphic,
        rectangleGraphic,
        squareGraphic,
        diamondGraphic,
        cloverGraphic,
      } = this.cEntity;
      if (!(graphic || rectangleGraphic)) return null;
      return {
        friend: `${this.entitiesPath}/${graphic || rectangleGraphic}`,
        unknown: `${this.entitiesPath}/${graphic || cloverGraphic}`,
        neutral: `${this.entitiesPath}/${graphic || squareGraphic}`,
        hostile: `${this.entitiesPath}/${graphic || diamondGraphic}`,
      };
    },
  },
};
</script>
