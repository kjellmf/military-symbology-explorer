<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 block">
    <header class="hidden sm:block my-2 sm:mt-6">
      <h2
        class="text-lg font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center sm:text-left"
      >
        Symbol set browser
      </h2>
    </header>
  </div>
</template>

<script>
import { SYMBOL_DATA } from "@/jmsml/types";
import CodeSelect from "@/components/CodeSelect.vue";
import MilSymbol from "@/components/MilSymbol.vue";
import SidcTable from "@/views/SidcTable";

export default {
  name: "SymbolsetView",
  components: { SidcTable, MilSymbol, CodeSelect },
  props: { sidc: String },
  data() {
    return {
      SYMBOL_DATA,
      symbolSet: "10",
    };
  },
  computed: {
    entities() {
      const e =
        SYMBOL_DATA.symbolSets.find(
          (symbolSet) => symbolSet.digits === this.symbolSet
        ) || {};
      return e.entities || [];
    },
  },
};
</script>
<style></style>
