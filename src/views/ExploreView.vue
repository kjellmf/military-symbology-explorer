<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 block">
    <header class="my-2 sm:mt-6">
      <h2
        class="text-lg font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center sm:text-left"
      >
        Symbol identification code explorer
      </h2>
    </header>
    <div class="flex flex-col-reverse sm:flex-row">
      <SidcTable class="sm:hidden" />
      <section
        id="symbol-form"
        class="sm:max-w-md sm:flex-none mt-6 sm:mt-5 space-y-6 sm:space-y-5 sm:pr-4"
      >
        <CodeSelect label="Context" :values="SYMBOL_DATA.contexts" />
        <CodeSelect
          label="Standard identity"
          :values="SYMBOL_DATA.standardIdentities"
        />

        <CodeSelect
          v-model="symbolSet"
          label="Symbol set"
          :values="SYMBOL_DATA.symbolSets"
          ><router-link
            :to="symbolsetRoute"
            class="flex-shrink-0 ml-1 btn self-end py-3 sm:py-2.5"
            >Browse</router-link
          ></CodeSelect
        >
        <CodeSelect label="Status" :values="entities" />
        <CodeSelect label="HQTFDummy" :values="entities" />
        <CodeSelect label="Amplifier" :values="entities" />
        <CodeSelect :values="entities" />
        <CodeSelect label="Entity" :values="entities" />
        <CodeSelect label="Entity type" :values="entities" />
        <CodeSelect label="Entity subtype" :values="entities" />
        <CodeSelect label="Sector one modifier" :values="entities" />
        <CodeSelect label="Sector two modifier" :values="entities" />
      </section>

      <section
        id="view-symbol "
        class="sticky top-0 sm:static bg-white flex justify-center sm:block -mx-4 shadow"
      >
        <div class="w-full h-48 bg-gray-50">
          <MilSymbol />
        </div>
        <SidcTable class="hidden sm:block" />
      </section>
    </div>
  </div>
</template>

<script>
import { SYMBOL_DATA } from "@/jmsml/types";
import CodeSelect from "@/components/CodeSelect.vue";
import MilSymbol from "@/components/MilSymbol.vue";
import SidcTable from "@/views/SidcTable";
import { SYMBOL_SET_ROUTE } from "@/router";

export default {
  name: "ExploreView",
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
    symbolsetRoute() {
      return {
        name: SYMBOL_SET_ROUTE,
        params: { symbolSetCode: this.symbolSet },
      };
    },
  },
};
</script>
<style></style>
