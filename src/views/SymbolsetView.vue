<template>
  <div class="h-full bg-white overflow-hidden flex">
    <aside class="hidden md:flex md:flex-shrink-0">
      <div class="w-64 flex flex-col px-2">
        <div
          class="border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto"
        >
          <div
            class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto"
          >
            <nav class="space-y-1">
              <h3
                class="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider"
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
            </nav>
            <nav
              v-if="symbolSet.sectorOneModifiers.length"
              class="space-y-1 mt-6"
            >
              <h3
                class="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider"
              >
                Modifier 1
              </h3>

              <div
                class="space-y-1"
                role="group"
                aria-labelledby="projects-headline"
              >
                <a
                  v-for="[category, values] in mod1s"
                  :href="`#mod1_${createId(category)}`"
                  class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span class="truncate">{{ category }}</span>
                </a>
              </div>
            </nav>
            <nav
              v-if="symbolSet.sectorTwoModifiers.length"
              class="space-y-1 mt-6"
            >
              <h3
                class="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider"
              >
                Modifier 2
              </h3>
              <div
                class="space-y-1"
                role="group"
                aria-labelledby="projects-headline"
              >
                <a
                  v-for="[category, values] in mod2s"
                  :href="`#mod2_${createId(category)}`"
                  class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span class="truncate">{{ category }}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </aside>
    <div class="flex-1">
      <div class="w-full h-full flex flex-col">
        <header
          class="w-full flex-none my-2 sm:mt-6 max-w-5xl mx-auto px-4 sm:px-6 block pb-2"
        >
          <h2
            class="hidden lg:block text-lg font-bold text-gray-900 lg:text-3xl sm:truncate text-center sm:text-left"
          >
            Symbol set browser
          </h2>

          <CodeSelect
            class="max-w-lg"
            v-model="symbolSetCodeValue"
            label="Symbol set"
            :values="symbolSets"
            ><template #label>
              <span class="hidden sm:block">Symbol set</span>
            </template>
          </CodeSelect>
          <footer class="md:hidden flex space-x-6 pt-4 text-base text-medium">
            <a href="#main-icons" class="text-indigo-600 hover:text-indigo-900"
              >Main icons</a
            >
            <a
              v-if="mod1s.size"
              href="#modifier-one"
              class="text-indigo-600 hover:text-indigo-900"
              >Modifier 1</a
            >
            <a
              v-if="mod2s.size"
              href="#modifier-two"
              class="text-indigo-600 hover:text-indigo-900"
              >Modifier 2</a
            >
          </footer>
          <div class="mt-2 flex justify-end">
            <TSwitch v-model="debug" class="text-gray-900">Debug mode</TSwitch>
          </div>
        </header>
        <div class="flex-auto overflow-auto">
          <main class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <section id="main-icons" class="mt-4">
              <SectionHeading>Main icons</SectionHeading>
              <div class="divide-y divide-gray-300 pb-20 -mx-4">
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
                    :debug="debug"
                  />
                  <template v-for="entityType in entity.entityTypes">
                    <SymbolSetRow
                      :entity="entity"
                      :entity-type="entityType"
                      :entities-path="entitiesPath"
                      :frame-paths="framePaths"
                      :geometry="geometry"
                      :debug="debug"
                    />
                    <template
                      v-for="entitySubType in entityType.entitySubTypes"
                    >
                      <SymbolSetRow
                        :entity="entity"
                        :entity-type="entityType"
                        :entity-sub-type="entitySubType"
                        :entities-path="entitiesPath"
                        :frame-paths="framePaths"
                        :geometry="geometry"
                        :debug="debug"
                      />
                    </template>
                  </template>
                </template>
              </div>
            </section>
            <section v-if="mod1s.size" id="modifier-one">
              <SectionHeading>Modifier 1</SectionHeading>
              <div class="divide-y divide-gray-300 -mx-4">
                <template v-for="[category, modifiers] in mod1s">
                  <p class="h-0" :id="'mod1_' + createId(category)"></p>
                  <header
                    class="z-10 block px-4 py-3 bg-gray-200 border-t-2 sticky top-0 shadow-sm flex justify-between"
                  >
                    <p class="text-sm font-bold">{{ category }}</p>
                    <p class="text-xs">Mod. 1</p>
                  </header>

                  <div
                    class="md:grid md:gap-x-4 md:grid-cols-2 divide-y divide-gray-300"
                  >
                    <template v-for="modifier in modifiers">
                      <SymbolModifierRow
                        :modifier="modifier"
                        :modifier-path="mod1Path"
                        :vertical-modifier="modifierOctagonVertical"
                      />
                    </template>
                  </div>
                </template>
              </div>
            </section>
            <section v-if="mod2s.size" id="modifier-two" class="mt-4">
              <SectionHeading>Modifier 2</SectionHeading>
              <div class="divide-y divide-gray-300 -mx-4 mt-4">
                <template v-for="[category, modifiers] in mod2s">
                  <p class="h-0" :id="'mod2_' + createId(category)"></p>
                  <header
                    class="z-10 block px-4 py-3 bg-gray-200 border-t-2 sticky top-0 shadow-sm flex justify-between"
                  >
                    <p class="text-sm font-bold">{{ category }}</p>
                    <p class="text-xs">Mod. 2</p>
                  </header>

                  <div
                    class="md:grid md:gap-x-4 md:grid-cols-2 divide-y divide-gray-300"
                  >
                    <template v-for="modifier in modifiers">
                      <SymbolModifierRow
                        :modifier="modifier"
                        :modifier-path="mod2Path"
                        :vertical-modifier="modifierOctagonVertical"
                      />
                    </template>
                  </div>
                </template>
              </div>
            </section>
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
import SectionHeading from "@/components/SectionHeading.vue";
import { groupBy } from "@/utils";
import SymbolModifierRow from "@/components/SymbolModifierRow.vue";
import TSwitch from "@/components/TSwitch.vue";
import BoundingOctagon from "@/components/BoundingOctagon.vue";

const r = SYMBOL_DATA.affiliations["REALITY"];

export default {
  name: "SymbolsetView",
  components: {
    BoundingOctagon,
    TSwitch,
    SymbolModifierRow,
    SectionHeading,
    SymbolSetRow,
    SidcTable,
    MilSymbol,
    CodeSelect,
  },
  props: { symbolSetCode: { type: String, default: "01" } },
  data() {
    return {
      SYMBOL_DATA,
      testvalue: true,
      debug: false,
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

    mod1Path() {
      const { graphicFolder = {} } = this.symbolSet;
      return graphicFolder.modifierOnes
        ? SVG_PATH + graphicFolder.modifierOnes
        : "";
    },

    mod2Path() {
      const { graphicFolder = {} } = this.symbolSet;
      return graphicFolder.modifierTwos
        ? SVG_PATH + graphicFolder.modifierTwos
        : "";
    },

    modifierOctagonPath() {
      if (
        this.symbolSet.id === "SS_AIR_MISSILE" ||
        this.symbolSet.id === "SS_SPACE_MISSILE"
      ) {
        return SVG_PATH + "BoundingOctagon_V.svg";
      }
      return SVG_PATH + "BoundingOctagon_H.svg";
    },

    modifierOctagonVertical() {
      return (
        this.symbolSet.id === "SS_AIR_MISSILE" ||
        this.symbolSet.id === "SS_SPACE_MISSILE"
      );
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

    mod1s() {
      return groupBy(
        this.symbolSet.sectorOneModifiers.filter((o) => o.category),
        "category"
      );
    },

    mod2s() {
      return groupBy(
        this.symbolSet.sectorTwoModifiers.filter((o) => o.category),
        "category"
      );
    },
  },
  methods: {
    createId(id) {
      return id.replace(/\W/g, "_");
    },
  },
};
</script>
<style></style>
