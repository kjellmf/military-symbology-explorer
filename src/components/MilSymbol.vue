<template>
  <div class="relative" :class="size">
    <img class="absolute" :class="size" src="/svg/HQTFFD/3106.svg" />
    <img class="absolute" :class="size" src="/svg/Frames/0_310_0.svg" />
    <img class="absolute" :class="size" src="/svg/BoundingOctagon.svg" />
  </div>
</template>

<script>
export default {
  name: "MilSymbol",
  computed: {
    size() {
      return "h-full w-full";
    },
  },
};
</script>
