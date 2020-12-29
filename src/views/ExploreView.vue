<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 block">
    <header class="mt-6 ">
      <h2
        class=" text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
      >
        Symbol identification code explorer
      </h2>
    </header>
    <div class="flex flex-col-reverse sm:flex-row">
      <section class="sm:hidden">
        <div class=" w-40 h-40 bg-red-800"></div>
      </section>
      <section id="symbol-form" class="col-span-1">
        <CodeSelect label="Context" :values="SYMBOL_DATA.contexts" />
        <CodeSelect
          label="Standard identity"
          :values="SYMBOL_DATA.standardIdentities"
        />
        <CodeSelect
          v-model="symbolSet"
          label="Symbol set"
          :values="SYMBOL_DATA.symbolSets"
        />
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
        class="row-span-2 sticky top-0 sm:static  bg-white"
      >
        <div class="w-40 h-40 bg-gray-800 sm:sticky sm:top-0"></div>
        <div class="hidden sm:block w-40 h-40 bg-red-800"></div>
      </section>

      <section id="sidc-table"></section>
    </div>
  </div>
</template>

<script>
import { SYMBOL_DATA } from "@/jmsml/types";
import CodeSelect from "@/components/CodeSelect";

export default {
  name: "ExploreView",
  components: { CodeSelect },
  data() {
    return {
      SYMBOL_DATA,
      symbolSet: "10"
    };
  },
  computed: {
    entities() {
      const e =
        SYMBOL_DATA.symbolSets.find(
          symbolSet => symbolSet.digits === this.symbolSet
        ) || {};
      return e.entities || [];
    }
  }
};
</script>
