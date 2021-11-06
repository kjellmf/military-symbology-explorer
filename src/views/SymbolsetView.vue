<template>
  <div class="h-full bg-white overflow-hidden flex">
    <aside class="hidden md:flex md:flex-shrink-0 bg-gray-100">
      <div class="w-64 lg:w-96 flex flex-col px-2">
        <div
          class="
            border-r border-gray-200
            pt-5
            pb-4
            flex flex-col flex-grow
            overflow-y-auto
          "
        >
          <div class="px-3">
            <TSwitch v-model="debug" class="text-base text-gray-900"
              >Debug mode
            </TSwitch>
          </div>
          <div
            class="
              flex flex-col flex-grow
              border-r border-gray-200
              pt-5
              pb-4
              overflow-y-auto
            "
          >
            <SymbolsetNav :entities="entities" :mod1s="mod1s" :mod2s="mod2s" />
          </div>
        </div>
      </div>
    </aside>
    <div class="flex-1">
      <div class="w-full h-full flex flex-col">
        <header
          class="
            w-full
            flex-none
            my-2
            sm:mt-6
            max-w-5xl
            mx-auto
            px-4
            sm:px-6
            block
            pb-2
          "
        >
          <h2
            class="
              hidden
              lg:block
              text-lg
              font-bold
              text-gray-900
              lg:text-3xl
              sm:truncate
              text-center
              sm:text-left
            "
          >
            Symbol set browser
          </h2>

          <CodeSelectGroup
            class="max-w-lg"
            v-model="symbolSetCodeValue"
            label="Symbol set"
            :values="symbolSets"
          >
            <template #label>
              <span class="hidden sm:block">Symbol set</span>
            </template>
          </CodeSelectGroup>
          <footer class="md:hidden flex space-x-6 pt-4 text-base text-medium">
            <button class="text-indigo-600" @click="isOpen = !isOpen">
              ToC
            </button>
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
          <div class="hidden mt-2 flex justify-end">
            <TSwitch v-model="debug" class="text-gray-900">Debug mode</TSwitch>
          </div>
        </header>
        <div class="flex-auto overflow-auto">
          <main
            v-if="isReady"
            class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <section id="main-icons" class="mt-4">
              <SectionHeading>Main icons</SectionHeading>
              <div class="divide-y divide-gray-300 pb-20 -mx-4">
                <template v-for="entity in entities">
                  <p class="h-0" :id="entity.id"></p>
                  <p
                    class="
                      z-10
                      block
                      px-4
                      py-3
                      bg-gray-200
                      border-t-2
                      sticky
                      top-0
                      text-sm
                      font-bold
                      shadow-sm
                    "
                  >
                    {{ entity.label }}
                  </p>
                  <component
                    :is="rowComponent"
                    :entity="entity"
                    :entities-path="entitiesPath"
                    :frame-paths="framePaths"
                    :geometry="geometry"
                    :debug="debug"
                  />
                  <template v-for="entityType in entity.entityTypes">
                    <component
                      :is="rowComponent"
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
                      <component
                        :is="rowComponent"
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
                    class="
                      z-10
                      block
                      px-4
                      py-3
                      bg-gray-200
                      border-t-2
                      sticky
                      top-0
                      shadow-sm
                      flex
                      justify-between
                    "
                  >
                    <p class="text-sm font-bold">{{ category }}</p>
                    <p class="text-xs">Mod. 1</p>
                  </header>

                  <div
                    class="
                      md:grid md:gap-x-4 md:grid-cols-2
                      divide-y divide-gray-300
                    "
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
                    class="
                      z-10
                      block
                      px-4
                      py-3
                      bg-gray-200
                      border-t-2
                      sticky
                      top-0
                      shadow-sm
                      flex
                      justify-between
                    "
                  >
                    <p class="text-sm font-bold">{{ category }}</p>
                    <p class="text-xs">Mod. 2</p>
                  </header>

                  <div
                    class="
                      md:grid md:gap-x-4 md:grid-cols-2
                      divide-y divide-gray-300
                    "
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
    <SlideOver v-model="isOpen">
      <SymbolsetNav :entities="entities" :mod1s="mod1s" :mod2s="mod2s" />
    </SlideOver>
  </div>
</template>

<script>
import { SVG_PATH } from "../jmsml/types";
import CodeSelectGroup from "../components/CodeSelectGroup.vue";
import MilSymbol from "../components/MilSymbol.vue";
import SymbolSetRow from "../components/SymbolSetRow.vue";
import SymbolSetRowNonUnit from "../components/SymbolSetRowNonUnit.vue";
import SectionHeading from "../components/SectionHeading.vue";
import { groupBy } from "../utils";
import SymbolModifierRow from "../components/SymbolModifierRow.vue";
import TSwitch from "../components/TSwitch.vue";
import BoundingOctagon from "../components/BoundingOctagon.vue";

import { symbolSets } from "../jmsml/symbolsets";
import { affiliations } from "../jmsml";
import { computed, ref, watch } from "vue";
import SlideOver from "../components/SlideOver.vue";
import SymbolsetNav from "../components/SymbolsetNav.vue";

const r = affiliations["REALITY"];

const NON_UNIT_SYMBOL_SETS = ["25", "45", "46", "47"];

export default {
  name: "SymbolsetView",
  components: {
    SymbolsetNav,
    SlideOver,
    BoundingOctagon,
    TSwitch,
    SymbolModifierRow,
    SectionHeading,
    SymbolSetRow,
    MilSymbol,
    CodeSelectGroup,
  },
  props: { symbolSetCode: { type: String, default: "01" } },
  setup(props) {
    const isReady = ref(false);
    const debug = ref(false);
    const rowComponent = computed(() =>
      NON_UNIT_SYMBOL_SETS.includes(props.symbolSetCode)
        ? SymbolSetRowNonUnit
        : SymbolSetRow
    );
    watch(
      () => props.symbolSetCode,
      () => {
        setTimeout(() => (isReady.value = true));
      },
      { immediate: true }
    );

    function createId(id) {
      return id.replace(/\W/g, "_");
    }

    const isOpen = ref(false);

    return { symbolSets, isReady, debug, rowComponent, createId, isOpen };
  },
  computed: {
    symbolSet() {
      const e =
        symbolSets.find(
          (symbolSet) => symbolSet.digits === this.symbolSetCode
        ) || {};
      return e || {};
    },

    geometry() {
      return this.symbolSet.geometry;
    },

    entities() {
      return this.symbolSet.entities || [];
    },

    symbolSetCodeValue: {
      get() {
        return this.symbolSet;
      },

      set(value) {
        this.isReady = false;
        this.$router.replace({
          ...this.$route,
          params: { ...this.$route.params, symbolSetCode: value.digits },
        });
      },
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
        this.symbolSet?.sectorOneModifiers?.filter((o) => o.category) || [],
        "category"
      );
    },

    mod2s() {
      return groupBy(
        this.symbolSet?.sectorTwoModifiers?.filter((o) => o.category) || [],
        "category"
      );
    },
  },
};
</script>
