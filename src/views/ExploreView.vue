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
      <SidcTable class="sm:hidden" :sic="sic" :current-digits="currentDigits" />
      <section
        id="symbol-form"
        class="sm:max-w-md sm:flex-none mt-6 sm:mt-5 space-y-6 sm:space-y-5 sm:pr-4"
      >
        <LabelGroup label="Context" v-slot="{ id }"
          ><CodeSelect
            :id="id"
            :values="SYMBOL_DATA.contexts"
            v-model="context"
            @focus="currentDigits = [2]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <CodeSelectGroup
          label="Standard identity"
          :values="SYMBOL_DATA.standardIdentities"
          v-model="standardIdentity"
          @focus="currentDigits = [3]"
          @blur="currentDigits = []"
        />

        <CodeSelectGroup
          v-model="symbolSetCode"
          label="Symbol set"
          :values="SYMBOL_DATA.symbolSets"
          @focus="currentDigits = [4, 5]"
          @blur="currentDigits = []"
          ><router-link
            :to="symbolsetRoute"
            class="flex-shrink-0 ml-1 btn self-end py-3 sm:py-2.5"
            >Browse</router-link
          ></CodeSelectGroup
        >
        <CodeSelectGroup
          label="Status"
          :values="SYMBOL_DATA.statuses"
          v-model="status"
          @focus="currentDigits = [6]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          label="HQTFDummy"
          :values="SYMBOL_DATA.hqtfDummies"
          @focus="currentDigits = [7]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          label="Amplifier"
          :values="entities"
          @focus="currentDigits = [8]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          :values="entities"
          @focus="currentDigits = [9]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          label="Entity"
          :values="entities"
          v-model="entity"
          @focus="currentDigits = [10, 11]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          label="Entity type"
          :values="entityTypes"
          v-model="entityType"
          @focus="currentDigits = [12, 13]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          label="Entity subtype"
          :values="entitySubTypes"
          v-model="entitySubType"
          @focus="currentDigits = [14, 15]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          label="Sector one modifier"
          :values="mod1s"
          @focus="currentDigits = [16, 17]"
          @blur="currentDigits = []"
        />
        <CodeSelectGroup
          label="Sector two modifier"
          :values="mod2s"
          @focus="currentDigits = [18, 19]"
          @blur="currentDigits = []"
        />
      </section>

      <section
        id="view-symbol "
        class="sticky top-0 sm:static bg-white flex justify-center sm:block -mx-4 shadow"
      >
        <div class="w-full h-48 bg-gray-50">
          <MilSymbol />
        </div>
        <SidcTable
          class="hidden sm:block"
          :sic="sic"
          :current-digits="currentDigits"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { parseSic, SYMBOL_DATA } from "@/jmsml/types";
import CodeSelectGroup from "@/components/CodeSelectGroup.vue";
import MilSymbol from "@/components/MilSymbol.vue";
import SidcTable from "@/views/SidcTable";
import { SYMBOL_SET_ROUTE } from "@/router";
import LabelGroup from "@/components/LabelGroup";
import CodeSelect from "@/components/CodeSelect";

export default {
  name: "ExploreView",
  components: { CodeSelect, LabelGroup, SidcTable, MilSymbol, CodeSelectGroup },
  props: { sidc: String },
  data() {
    return {
      SYMBOL_DATA,
      symbolSetCode: "10",
      context: "0",
      standardIdentity: "3",
      status: "0",
      hqtfDummy: "0",
      entity: "00",
      entityType: "00",
      entitySubType: "00",
      modifierOne: "00",
      modifierTwo: "00",
      currentDigits: [],
    };
  },
  computed: {
    symbolSet() {
      return (
        SYMBOL_DATA.symbolSets.find(
          (symbolSet) => symbolSet.digits === this.symbolSetCode
        ) || {}
      );
    },

    entities() {
      const a = this.symbolSet.entities || [];
      return a;
    },

    entityTypes() {
      const items =
        (this.entities.find((e) => e.digits === this.entity) || {})
          .entityTypes || [];

      return items.length ? items : [{ digits: "00", label: "Unspecified" }];
    },

    entitySubTypes() {
      const items =
        (this.entityTypes.find((e) => e.digits === this.entityType) || {})
          .entitySubTypes || [];

      return items.length ? items : [{ digits: "00", label: "Unspecified" }];
    },

    mod1s() {
      return [];
    },

    mod2s() {
      return [];
    },
    symbolsetRoute() {
      return {
        name: SYMBOL_SET_ROUTE,
        params: { symbolSetCode: this.symbolSetCode },
      };
    },
    sic() {
      return `10${this.context}${this.standardIdentity}${this.symbolSetCode}${this.status}${this.hqtfDummy}18${this.entity}${this.entityType}`;
    },
  },
  methods: {
    setFromSic(sic) {
      const parts = parseSic(sic);
      this.context = parts.context;
      this.standardIdentity = parts.standardIdentity;
      this.symbolSetCode = parts.symbolSet;
      this.status = parts.status;
      this.hqtfDummy = parts.hqtfd;
    },
    test(txt, e) {
      console.log(txt, e);
    },
  },
};
</script>
<style></style>
