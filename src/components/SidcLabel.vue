<template>
  <section
    id=""
    class="bg-gray-200 px-4 text-base font-lg flex justify-center text-gray-700 font-medium"
  >
    <p
      v-for="{ code, highlight } in groups"
      class="py-2 px-2"
      :class="{ 'text-red-900 bg-red-200 transition': highlight }"
    >
      {{ code }}
    </p>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, unref } from "vue";
import { parseSic } from "../jmsml/types";

export default defineComponent({
  name: "SidcLabel",
  props: {
    sic: { type: String, required: true },
    currentDigits: { type: Array as PropType<number[]>, required: true },
  },
  setup(props) {
    const sicElements = computed(() => parseSic(props.sic));

    function check(indexes: number[]): boolean {
      return indexes
        .map((e) => props.currentDigits.includes(e))
        .every((e) => e);
    }

    const groups = computed(() => {
      const s = unref(sicElements);
      return [
        { code: s.version, highlight: false },
        { code: s.context, highlight: check([2]) },
        { code: s.standardIdentity, highlight: check([3]) },
        { code: s.symbolSet, highlight: check([4, 5]) },
        { code: s.status, highlight: check([6]) },
        { code: s.hqtfd, highlight: check([7]) },
        { code: s.echelonMobility, highlight: check([8, 9]) },
        { code: s.entity, highlight: check([10, 11]) },
        { code: s.entityType, highlight: check([12, 13]) },
        { code: s.entitySubType, highlight: check([14, 15]) },
        { code: s.modifierOne, highlight: check([16, 17]) },
        { code: s.modifierTwo, highlight: check([18, 19]) },
      ];
    });
    return { groups };
  },
});
</script>
