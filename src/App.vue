<template>
  <div class="w-screen h-screen flex flex-col">
    <AppNavBar class="flex-none" />
    <div class="flex-auto min-h-0 overflow-y-auto"><router-view /></div>
  </div>
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";

export default {
  components: { AppNavBar },
};
</script>

<style></style>
