<template>
  <div class="h-full bg-white overflow-hidden flex">
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="w-64 flex flex-col px-2">
        <div
          class="border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto"
        >
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div
            class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto"
          >
            <div class="space-y-1">
              <h3
                class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                id="projects-headline"
              >
                Entities
              </h3>
              <div
                class="space-y-1"
                role="group"
                aria-labelledby="projects-headline"
              >
                <a
                  v-for="entity in entities"
                  :href="`#${entity.id}`"
                  class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span class="truncate">{{ entity.label }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="w-full h-full flex flex-col">
        <header
          class="w-full flex-none my-2 sm:mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 block pb-2"
        >
          <h2
            class="hidden sm:block text-lg font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center sm:text-left"
          >
            Symbol set browser
          </h2>

          <CodeSelect
            class="max-w-lg"
            v-model="symbolSetCodeValue"
            label="Symbol set"
            :values="symbolSets"
          />
        </header>
        <div class="flex-auto overflow-auto">
          <main
            class="w-full max-w-5xl mx-auto sm:px-4 lg:px-6 divide-y divide-gray-300 pb-20"
          >
            <template v-for="entity in entities">
              <p class="h-0" :id="entity.id"></p>
              <p
                class="z-10 block px-4 py-3 bg-gray-200 border-t-2 sticky top-0 text-sm font-bold shadow-sm"
              >
                {{ entity.label }}
              </p>
              <SymbolSetRow
                :entity="entity"
                :entities-path="entitiesPath"
                :frame-paths="framePaths"
                :geometry="geometry"
              />
              <template v-for="entityType in entity.entityTypes">
                <SymbolSetRow
                  :entity="entity"
                  :entity-type="entityType"
                  :entities-path="entitiesPath"
                  :frame-paths="framePaths"
                  :geometry="geometry"
                />
                <template v-for="entitySubType in entityType.entitySubTypes">
                  <SymbolSetRow
                    :entity="entity"
                    :entity-type="entityType"
                    :entity-sub-type="entitySubType"
                    :entities-path="entitiesPath"
                    :frame-paths="framePaths"
                    :geometry="geometry"
                  />
                </template>
              </template>
            </template>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SVG_PATH, SYMBOL_DATA } from "@/jmsml/types";
import CodeSelect from "@/components/CodeSelect.vue";
import MilSymbol from "@/components/MilSymbol.vue";
import SidcTable from "@/views/SidcTable.vue";
import SymbolSetRow from "@/components/SymbolSetRow.vue";

const r = SYMBOL_DATA.affiliations["REALITY"];

export default {
  name: "SymbolsetView",
  components: { SymbolSetRow, SidcTable, MilSymbol, CodeSelect },
  props: { symbolSetCode: { type: String, default: "01" } },
  data() {
    return {
      SYMBOL_DATA,
    };
  },
  computed: {
    symbolSet() {
      const e =
        SYMBOL_DATA.symbolSets.find(
          (symbolSet) => symbolSet.digits === this.symbolSetCode
        ) || {};
      return e || {};
    },

    symbolSets() {
      return SYMBOL_DATA.symbolSets;
    },

    geometry() {
      return this.symbolSet.geometry;
    },

    entities() {
      return this.symbolSet.entities || [];
    },

    symbolSetCodeValue: {
      get() {
        return this.symbolSetCode || "00";
      },

      set(value) {
        this.$router.replace({
          ...this.$route,
          params: { ...this.$route.params, symbolSetCode: value },
        });
      },
    },

    folderPaths() {
      const { graphicFolder } = this.symbolSet;
      return graphicFolder;
    },

    entitiesPath() {
      const { graphicFolder = {} } = this.symbolSet;
      return graphicFolder.entities ? SVG_PATH + graphicFolder.entities : "";
    },

    framePaths() {
      const { dimensionId } = this.symbolSet;
      const d = r[dimensionId] || r["LAND_EQUIPMENT"];

      const unknown = d["SI_UNKNOWN"].graphic;
      const friend = d["SI_FRIEND"].graphic;
      const neutral = d["SI_NEUTRAL"].graphic;
      const hostile = d["SI_HOSTILE_FAKER"].graphic;
      return {
        unknown: unknown ? SVG_PATH + unknown : undefined,
        friend: friend ? SVG_PATH + friend : undefined,
        neutral: neutral ? SVG_PATH + neutral : undefined,
        hostile: hostile ? SVG_PATH + hostile : undefined,
      };
    },
  },
};
</script>
<style></style>
