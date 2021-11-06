<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 block">
    <header class="hidden sm:block my-2 sm:mt-6">
      <h2
        class="
          text-lg
          font-bold
          leading-7
          text-gray-900
          sm:text-3xl sm:truncate
          text-center
          sm:text-left
        "
      >
        Symbol identification code explorer
      </h2>
    </header>
    <div class="flex flex-col-reverse sm:flex-row">
      <SidcTable class="sm:hidden" :sic="sic" :current-digits="currentDigits" />
      <section
        id="symbol-form"
        class="
          sm:max-w-md sm:flex-none
          mt-6
          sm:mt-5
          space-y-6
          sm:space-y-5 sm:pr-4
        "
      >
        <LabelGroup label="Context" v-slot="{ id }">
          <CodeSelect
            :id="id"
            :values="contexts"
            v-model="context"
            @focus="currentDigits = [2]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Standard identity" v-slot="{ id }">
          <CodeSelect
            :id="id"
            :values="standardIdentities"
            v-model="standardIdentity"
            @focus="currentDigits = [3]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Symbol set" v-slot="{ id }">
          <CodeSelect
            v-model="symbolSet"
            :values="symbolSets"
            @focus="currentDigits = [4, 5]"
            @blur="currentDigits = []"
          >
          </CodeSelect>
          <router-link
            :to="symbolsetRoute"
            class="flex-shrink-0 ml-1 btn self-end py-3 sm:py-2.5"
            >Browse
          </router-link>
        </LabelGroup>
        <LabelGroup label="Status" v-slot="{ id }">
          <CodeSelect
            :values="statuses"
            v-model="status"
            @focus="currentDigits = [6]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
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
        id="view-symbol"
        class="
          sticky
          top-0
          sm:static
          bg-white
          flex
          justify-center
          sm:block
          -mx-4
          shadow-md
          flex flex-col
        "
      >
        <div class="w-full h-48 bg-gray-50">
          <MilSymbol />
        </div>
        <SidcLabel
          :sic="sic"
          :current-digits="currentDigits"
          class="sm:hidden border-b border-gray-300"
        />
        <SidcTable
          class="hidden sm:block"
          :sic="sic"
          :current-digits="currentDigits"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { parseSic, SYMBOL_DATA } from "../jmsml/types";
import CodeSelectGroup from "../components/CodeSelectGroup.vue";
import MilSymbol from "../components/MilSymbol.vue";
import SidcTable from "../components/SidcTable.vue";
import { SYMBOL_SET_ROUTE } from "../router";
import LabelGroup from "../components/LabelGroup.vue";
import CodeSelect from "../components/CodeSelect.vue";
import { defineComponent } from "vue";
import { contexts, standardIdentities, statuses } from "../jmsml";
import { symbolSets } from "../jmsml/symbolsets";
import SidcLabel from "../components/SidcLabel.vue";

export default defineComponent({
  name: "ExploreView",
  components: {
    SidcLabel,
    CodeSelect,
    LabelGroup,
    SidcTable,
    MilSymbol,
    CodeSelectGroup,
  },
  props: { sidc: String },
  data() {
    return {
      SYMBOL_DATA,
      symbolSet: SYMBOL_DATA.symbolSets[1],
      context: {},
      standardIdentity: {},
      status: {},
      hqtfDummy: {},
      entity: {},
      entityType: {},
      entitySubType: {},
      modifierOne: {},
      modifierTwo: {},
      currentDigits: [],
    };
  },
  setup(props, { emit }) {
    return { contexts, standardIdentities, symbolSets, statuses };
  },

  computed: {
    entities() {
      const a = this.symbolSet.entities || [];
      return a;
    },

    entityTypes() {
      return this.entity.entityTypes || [];
    },

    entitySubTypes() {
      return this.entityType.entitySubTypes || [];
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
      return (
        "10" +
        (this.context.digits || "0") +
        (this.standardIdentity.digits || "0") +
        (this.symbolSet.digits || "00") +
        (this.status.digits || "0") +
        (this.hqtfDummy.digits || "0") +
        "18" +
        (this.entity.digits || "00") +
        (this.entityType.digits || "00") +
        (this.entitySubType.digits || "00") +
        (this.modifierOne.digits || "00") +
        (this.modifierTwo.digits || "00")
      );
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
});
</script>
