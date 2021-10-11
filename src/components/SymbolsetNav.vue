<template>
  <div>
    <nav class="space-y-1">
      <h3
        class="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider"
        id="projects-headline"
      >
        Entities
      </h3>
      <div class="space-y-1" role="group" aria-labelledby="projects-headline">
        <a
          v-for="entity in entities"
          :href="`#${entity.id}`"
          class="
            group
            flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            text-gray-600
            rounded-md
            hover:text-gray-900 hover:bg-gray-50
          "
        >
          <span class="truncate">{{ entity.label }}</span>
        </a>
      </div>
    </nav>
    <nav v-if="mod1s.size" class="space-y-1 mt-6">
      <h3 class="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider">
        Modifier 1
      </h3>

      <div class="space-y-1" role="group" aria-labelledby="projects-headline">
        <a
          v-for="[category, values] in mod1s"
          :href="`#mod1_${createId(category)}`"
          class="
            group
            flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            text-gray-600
            rounded-md
            hover:text-gray-900 hover:bg-gray-50
          "
        >
          <span class="truncate">{{ category }}</span>
        </a>
      </div>
    </nav>
    <nav v-if="mod2s.size" class="space-y-1 mt-6">
      <h3 class="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider">
        Modifier 2
      </h3>
      <div class="space-y-1" role="group" aria-labelledby="projects-headline">
        <a
          v-for="[category, values] in mod2s"
          :href="`#mod2_${createId(category)}`"
          class="
            group
            flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            text-gray-600
            rounded-md
            hover:text-gray-900 hover:bg-gray-50
          "
        >
          <span class="truncate">{{ category }}</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Entity, Modifier } from "../jmsml/types";

function createId(id: string) {
  return id.replace(/\W/g, "_");
}

export default defineComponent({
  name: "SymbolsetNav",
  props: {
    entities: { type: Array as PropType<Entity[]> },
    mod1s: { type: Object as PropType<Modifier[]> },
    mod2s: { type: Object as PropType<Modifier[]> },
  },
  setup(props) {
    return { createId };
  },
});
</script>
