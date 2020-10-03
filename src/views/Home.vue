<template>
  <main
    class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
  >
    <div class="sm:text-center lg:text-left">
      <h2
        class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
      >
        Joint Military
        <!--        <br class="xl:hidden" />-->
        <span class="text-green-800">Symbology Explorer</span>
      </h2>
      <p
        class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        An experimental MIL-STD-2525D/APP6X symbology explorer based on the
        <a href="https://github.com/Esri/joint-military-symbology-xml"
          >Joint Military Symbology Markup Language (JMSML)</a
        >
        project.
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {}
});
</script>
