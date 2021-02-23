<template>
  <div class="flex flex-col md:h-96 justify-between items-center pt-12">
    <div class="flex items-center justify-center">
      <img :src="mySrc" class="w-3/5 md:w-full" />
    </div>
    <span class="md:text-2xl text-xl font-black">{{ productName }}</span>
    <span
      class="w-3/5 md:w-full font-Barlow text-base font-normal flex-wrap text-center"
      >{{ descriptiveText }}</span
    >
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {},
  props: ["mySrc", "productName", "descriptiveText"],
};
</script>

<style></style>
