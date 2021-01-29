<template>
  <section id="sidc-table" class="-mx-3 sm:m-0">
    <div class="grid grid-cols-10 justify-items-stretch text-center">
      <p class="col-span-10 text-sm font-medium">Set A</p>
      <p v-for="n in 10" class="text-gray-800 font-bold text-base">{{ n }}</p>
      <span class="col-span-10 border-t border-gray-400"></span>
      <p v-for="n in 10" class="text-gray-400 text-xs">{{ n }}</p>
    </div>
    <div
      class="grid grid-cols-10 justify-items-stretch text-center text-sm text-gray-500"
    >
      <p class="col-span-2">Version</p>
      <p class="col-span-2">Standard identity</p>
      <p class="col-span-2">Symbol set</p>
      <p><span class="">Status</span></p>
      <p class="">HQ / Task Force / Dummy</p>
      <p class="col-span-2 border">Amplifier / Descriptor</p>
    </div>

    <div class="grid grid-cols-10 justify-items-stretch text-center">
      <p class="col-span-10 text-sm font-medium">Set B</p>
      <p
        v-for="n in 10"
        class="text-gray-800 font-bold text-base border-b-2 border-b-black"
      >
        {{ n }}
      </p>
      <span class="col-span-10 border-t border-gray-400"></span>
      <p v-for="n in 10" class="text-gray-400 text-xs">{{ n + 10 }}</p>
    </div>
    <div
      class="grid grid-cols-10 justify-items-stretch text-center text-sm text-gray-500"
    >
      <p class="col-span-2 border-gray-100">Entity</p>
      <p class="col-span-2 border-gray-100">Entity type</p>
      <p class="col-span-2 border-gray-100">Entity subtype</p>
      <p class="col-span-2 border-gray-100">Sector 1 modifier</p>
      <p class="col-span-2 border-gray-100">Sector 2 modifier</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "SidcTable",
};
</script>
<style>
#sidc-table p {
  @apply border border-gray-100 py-2 sm:p-2 overflow-ellipsis overflow-hidden;
}
</style>
