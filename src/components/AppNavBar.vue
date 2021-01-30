<template>
  <header class="">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                :class="showMenu ? 'hidden' : 'block'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="h-6 w-6"
                :class="showMenu ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <div class="hidden sm:block text-white font-bold">
                Symbology explorer
              </div>
              <div v-if="navbarTitle" class="sm:hidden text-white font-bold">
                {{ $route.meta.navbarTitle }}
              </div>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link
                  v-for="(link, i) in links"
                  :key="i"
                  :to="link.to"
                  custom
                  v-slot="{ navigate, href, isActive, isExactActive }"
                >
                  <a
                    :href="href"
                    @click="navigate"
                    class="px-3 py-2 rounded-md text-sm font-medium"
                    :class="[
                      isActive || isExactActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    ]"
                    >{{ link.text }}</a
                  >
                </router-link>
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
      <div class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <router-link
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            custom
            v-slot="{ navigate, href, isExactActive }"
          >
            <a
              :href="href"
              @click.prevent="navigate().then(() => (showMenu = false))"
              class="block px-3 py-2 rounded-md text-base font-medium"
              :class="[
                isExactActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              ]"
              >{{ link.text }}</a
            >
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ABOUT_ROUTE, EXPLORE_ROUTE, SYMBOL_SET_ROUTE } from "@/router";

export default defineComponent({
  name: "AppNavBar",
  props: {
    msg: String,
  },
  data() {
    return {
      showMenu: false,
      links: [
        { text: "Explore symbol codes", to: { name: EXPLORE_ROUTE } },
        { text: "Browse symbol sets", to: { name: SYMBOL_SET_ROUTE } },
        { text: "About", to: { name: ABOUT_ROUTE } },
      ],
    };
  },
  computed: {
    navbarTitle(): string {
      return this.$route.meta.navbarTitle || "";
    },
  },
});
</script>
