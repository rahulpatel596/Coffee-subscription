<template>
  <div class="flex flex-col justify-center mt-20">
    <div class="pb-16 justify-center flex -inset-y-0.5">
      <img class="" :src="locationImage" />
    </div>
    <div
      class="font-black pb-6 leading-8 text-3xl flex justify-center items-center"
    >
      {{ name }}
    </div>
    <div
      class="flex leading-7 text-greyish flex-col font-Barlow text-base items-center"
    >
      <span>{{ street }}</span>
      <span>{{ city }}</span>
      <span>{{ state }}</span>
      <span>{{ contact }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Location",
  props: ["locationImage", "name", "street", "city", "state", "contact"],
};
</script>
<style></style>
