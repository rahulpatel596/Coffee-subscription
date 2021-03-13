<template>
  <div
    class=" text-center md:text-left flex flex-col lg:justify-between md:align-left md:p-0 p-6"
  >
    <span class="text-7xl text-darkCream leading-15">{{ stepNumber }}</span>
    <span class="stepTitle font-black text-white text-4 pt-6 leading-loose">{{
      stepTitle
    }}</span>
    <span
      class="text-xs text-darkCream font-Barlow text-base leading-relaxed md:pt-10 "
      >{{ stepDescription }}</span
    >
  </div>
</template>

<script>
export default {
  name: "StepCard",
  components: {},
  props: ["stepNumber", "stepTitle", "stepDescription"],
};
</script>

<style></style>
