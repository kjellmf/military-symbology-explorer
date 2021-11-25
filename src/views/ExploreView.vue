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
      <SidcTable
        class="sm:hidden"
        :sic="cSidc"
        :current-digits="currentDigits"
      />
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
          <CodeSelect2
            :id="id"
            :values="contexts"
            v-model="context"
            @focus="currentDigits = [2]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Standard identity" v-slot="{ id }">
          <CodeSelect2
            :id="id"
            :values="standardIdentities"
            v-model="standardIdentity"
            @focus="currentDigits = [3]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Symbol set" v-slot="{ id }">
          <CodeSelect2
            v-model="symbolSet"
            :values="symbolSets"
            @focus="currentDigits = [4, 5]"
            @blur="currentDigits = []"
          >
          </CodeSelect2>
          <router-link
            :to="symbolsetRoute"
            class="flex-shrink-0 ml-1 btn self-end py-3 sm:py-2.5"
            >Browse
          </router-link>
        </LabelGroup>
        <LabelGroup label="Status" v-slot="{ id }">
          <CodeSelect2
            :values="statuses"
            v-model="status"
            @focus="currentDigits = [6]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="HQTFDummy" v-slot="{ id }">
          <CodeSelect2
            :id="id"
            v-model="hqtfDummy"
            :values="hqtfDummies"
            @focus="currentDigits = [7]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Amplifier" v-slot="{ id }">
          <CodeSelect2
            :id="id"
            :groups="echelonMobilityItems"
            v-model="echelonMobility"
            @focus="currentDigits = [8, 9]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Entity" v-slot="{ id }">
          <CodeSelect2
            :id="id"
            :values="entityItems"
            v-model="entity"
            @focus="currentDigits = [10, 11]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Entity type" v-slot="{ id }">
          <CodeSelect2
            :id="id"
            :values="entityTypeItems"
            v-model="entityType"
            @focus="currentDigits = [12, 13]"
            @blur="currentDigits = []"
          />
        </LabelGroup>
        <LabelGroup label="Entity subtype" v-slot="{ id }">
          <CodeSelect2
            :id="id"
            :values="entitySubTypeItems"
            v-model="entitySubType"
            @focus="currentDigits = [14, 15]"
            @blur="currentDigits = []"
          />
        </LabelGroup>

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
          :sic="cSidc"
          :current-digits="currentDigits"
          class="sm:hidden border-b border-gray-300"
        />
        <SidcTable
          class="hidden sm:block"
          :sic="cSidc"
          :current-digits="currentDigits"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { parseSic } from "../jmsml/types";
import CodeSelectGroup from "../components/CodeSelectGroup.vue";
import MilSymbol from "../components/MilSymbol.vue";
import SidcTable from "../components/SidcTable.vue";
import { SYMBOL_SET_ROUTE } from "../router";
import LabelGroup from "../components/LabelGroup.vue";
import CodeSelect from "../components/CodeSelect.vue";
import { computed, defineComponent } from "vue";
import { contexts, hqtfDummies, standardIdentities, statuses } from "../jmsml";
import { symbolSets } from "../jmsml/symbolsets";
import SidcLabel from "../components/SidcLabel.vue";
import CodeSelect2 from "../components/CodeSelect2.vue";
import { useSymbolItems } from "../composables/symbolData";

export default defineComponent({
  name: "ExploreView",
  components: {
    CodeSelect2,
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
      currentDigits: [],
    };
  },
  setup(props, { emit }) {
    const sidc = "10031000161211004600";
    const {
      context,
      standardIdentity,
      symbolSet,
      status,
      hqtfDummy,
      echelonMobility,
      entity,
      entityType,
      entitySubType,
      mod1,
      mod2,
      cSidc,
      echelonMobilityItems,
      entityItems,
      entityTypeItems,
      entitySubTypeItems,
    } = useSymbolItems(sidc);

    const symbolsetRoute = computed(() => {
      return {
        name: SYMBOL_SET_ROUTE,
        params: { symbolSetCode: symbolSet.value },
      };
    });

    return {
      contexts,
      context,
      standardIdentity,
      symbolSet,
      status,
      hqtfDummy,
      standardIdentities,
      symbolSets,
      statuses,
      hqtfDummies,
      entity,
      entityType,
      entitySubType,
      mod1,
      mod2,
      cSidc,
      symbolsetRoute,
      echelonMobilityItems,
      echelonMobility,
      entityItems,
      entityTypeItems,
      entitySubTypeItems,
    };
  },

  computed: {
    mod1s() {
      return [];
    },

    mod2s() {
      return [];
    },
  },
});
</script>
