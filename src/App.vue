<template>
  <AppNavBar />
  <router-view />
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";

export default {
  components: { AppNavBar }
};
</script>

<style></style>
